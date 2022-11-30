import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const BuyModal = ({ product, productId }) => {
    // const { name: treatmentName, slots, price } = treatment;
    // const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const formHandaler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meeting_address = form.meeting_address.value;
        const order = {
            name: name,
            product: product,
            productId: productId,
            email: email,
            phone: phone,
            meeting_address: meeting_address
        }

        if (!phone) {
            toast.error('Please enter your phone');
        } else if (!meeting_address) {
            toast.error('Please enter your meeting address');
        } else {

            fetch('https://server-side-ashen.vercel.app/store/order',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(order)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Order confirmed');
                        navigate('/dashboard/my-order');

                    }
                    else {
                        toast.error(data.message);
                    }
                })
        }


    }
    return (
        <>
            <label htmlFor="booking-modal" className="btn btn-primary mt-5 mb-10">Buy Now</label>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product}</h3>
                    <form onSubmit={formHandaler} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value="10" className="input w-full input-bordered " />
                        {/* <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select> */}
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="meeting_address" type="text" placeholder="Meeting Address" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyModal;