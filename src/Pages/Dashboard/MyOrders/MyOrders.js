import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import OrderTable from './Components/OrderTable/OrderTable';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);
    const [productLoading, setProductLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5030/my/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setProductLoading(false);
            })

    }, []);
    return (
        <div>
            <h1 className='text-center text-lg mb-5 font-semibold'>My orders</h1>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <td>Product</td>
                                <td>Phone Number</td>
                                <td>Address</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productLoading && <div className='flex justify-center items-center mt-10'>
                                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                                </div>
                            }
                            {
                                orders.map(order => <OrderTable order={order} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;