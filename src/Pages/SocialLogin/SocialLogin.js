import React, { useContext } from "react";
// import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
    const { googleSinIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSinIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/dashboard')
            })
            .catch((error) => console.error(error));
    };
    return (
        <div className="mx-auto flex justify-center">
            <button className="btn btn-outline btn-primary" onClick={handleGoogleSignIn}><FcGoogle className="mr-2"></FcGoogle> Login with Google</button>
        </div>
    );
};

export default SocialLogin;
