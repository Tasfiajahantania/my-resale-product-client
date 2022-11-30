import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import BuyModal from './BuyModal';
import './ProductDetails.css';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const params_id = useParams();
    const [loader, setLoader] = useState(true);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5030/product/${params_id.id}`)
            .then((response) => {
                setProduct(response.data);
                setLoader(false)
            })

    }, []);
    const { _id, img, details, title, created_at, original_price, sell_price } = product;

    let buyButtonModal;
    if (user) {
        buyButtonModal = <BuyModal product={title} productId={_id}></BuyModal>;
    } else {
        buyButtonModal = <div className="alert alert-warning  mt-10">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>First Login before buy this <Link to={'/login'}>Click here to login</Link></span>
            </div>
        </div>
    }
    return (
        <div>
            {
                loader && <div className="flex justify-center items-center data-loader">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                </div>
            }
            {
                !loader && <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt={title} class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={img} />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0  m-8 lg:m-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">Posted : <span className='font-bold'>{moment(created_at).fromNow()}</span></h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
                        <p class="leading-relaxed">{details}</p>

                        <div class="flex mt-5 flex-col">
                            <span class="title-font font-medium text-gray-800">Original Price : <span className='font-bold'>${original_price}</span></span>
                            <span class="title-font font-medium text-gray-900">Sell Price : <span className='font-bold'>${sell_price}</span></span>
                        </div>

                        {buyButtonModal}
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;