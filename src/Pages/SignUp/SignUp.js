import { Switch } from "antd";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [signUpError, setSignUPError] = useState("");
    const { createUser, updateUser } = useContext(AuthContext);
    const [toggleSeller, setToggleSeller] = useState(false);

    const navigate = useNavigate();
    const handleSignUp = (data) => {
        setSignUPError("");
        createUser(data.email, data.password).then((result) => {
            const user = result.user;
            const userInfo = {
                displayName: data.name,
            };
            updateUser(userInfo)
                .then(() => {
                    saveUser(data.name, data.email);
                })
                .catch((err) => console.log(err));
        });
    };

    const saveUser = (name, email) => {

        const user = {
            name: name,
            email: email,
            role: toggleSeller ? "seller" : "user"
        }
        fetch('https://server-side-ashen.vercel.app/store/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate('/');
                }
            })
    }

    const toggle = () => {
        toggleSeller ? setToggleSeller(false) : setToggleSeller(true);
        console.log(toggleSeller);
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7 shadow-lg">
                <h2 className="flex justify-center text-3xl font-bold">Sign Up</h2>
                <form className="" onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Name is Required",
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name.message}</p>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: true,
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be 6 characters long",
                                },
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs mt-4">
                        <label className="label cursor-pointer">
                            {toggleSeller ? <span className="label-text">Seller</span> : <span className="label-text">User</span>}
                            <Switch className="bg-orange-500" onClick={toggle}></Switch>
                        </label>
                    </div>
                    <input
                        className="btn btn-primary w-full mt-4"
                        value="Sign Up"
                        type="submit"
                    />
                    {signUpError && <p className="text-red-600">{signUpError}</p>}
                </form>
                <p className="mt-2 text-center">
                    Already have an account{" "}
                    <Link className="text-secondary" to="/login">
                        Please Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;
