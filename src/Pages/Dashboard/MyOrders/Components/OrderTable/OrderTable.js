import React, { useEffect, useState } from 'react';
import loaderImg from '../../../../../assets/images/loader/product.png';

const OrderTable = ({ order }) => {
    const { product, productId, phone, meeting_address } = order;
    const [orderProduct, setOrderProduct] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {

        fetch(`http://localhost:5030/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                setOrderProduct(data)
                setLoader(false)
            })

    }, [])

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                loader && <img src={loaderImg} alt="loader" />
                            }
                            <img src={orderProduct.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product}</div>
                    </div>
                </div>
            </td>
            <td>{phone}</td>
            <td>{meeting_address}</td>
        </tr>
    );
};

export default OrderTable;