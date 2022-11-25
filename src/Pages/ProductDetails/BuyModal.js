import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../contexts/AuthProvider';

const BuyModal = () => {
    // const { name: treatmentName, slots, price } = treatment;
    // const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const formHandaler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        alert(name)

    }
    return (
        <>
            <label htmlFor="booking-modal" className="ml-4 btn btn-primary">Buy</label>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Hello tania</h3>
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
                        <br />
                        <input className='btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyModal;