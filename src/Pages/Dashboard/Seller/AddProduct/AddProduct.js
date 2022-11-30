import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const AddProduct = () => {
    const categories = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const storeProduct = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const category = form.category.value;
        const original_price = form.original_price.value;
        const sell_price = form.sell_price.value;
        const year_of_use = form.year_of_use.value;
        const location = form.location.value;
        const details = form.details.value;
        const created_at = Date().toLocaleString();

        //  image upload start
        const image = form.img.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=f7f8a91bb4ac4881394a9aba33605658`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(data => {
            if (data.success) {
                const img = data.data.url
                const product = {
                    title: title,
                    seller: user?.displayName,
                    seller_email: user?.email,
                    category: category,
                    original_price: original_price,
                    sell_price: sell_price,
                    year_of_use: year_of_use,
                    img: img,
                    location: location,
                    details: details,
                    created_at: created_at
                }

                fetch('http://localhost:5030/store/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(productData => {
                        navigate('/dashboard/my-product');
                    })

            }
        });
        // image upload end


    }



    return (
        <div>
            <div>
                <div className="card bg-base-100 p-4">
                    <h2 className="card-title my-4 text-center">Add Product</h2>
                    <form onSubmit={storeProduct} className="w-full">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Product Name
                                </label>
                                <input name='title' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Produc name here..." />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Select Category
                                </label>
                                <select name='category' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    {
                                        categories.map(category => <option value={category._id}>{category.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Original Price
                                </label>
                                <input name='original_price' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="100" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Sell Price
                                </label>
                                <input name='sell_price' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="100" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Year of use
                                </label>
                                <input name='year_of_use' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="1" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Product Thumbnail (<small className='text-red-600'>Direct link</small>)
                                </label>
                                <input type="file" name='img' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />

                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Product Location
                                </label>
                                <input name='location' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Product location here..." />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Product details
                                </label>
                                <textarea rows="10" name='details' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                </textarea>
                            </div>
                            <div className="flex justify-between w-full px-3">
                                <div className="md:flex md:items-center">
                                    <label className="block text-gray-500 font-bold">
                                        <input className="mr-2 leading-tight" type="checkbox" />
                                        <span className="text-sm">
                                            Yes Add
                                        </span>
                                    </label>
                                </div>
                                <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                    Add Product
                                </button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
export default AddProduct;