import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../contexts/AuthProvider';
import ProductCard from '../../../../Home/Components/Products/ProductCard';
import MyProductCard from './MyProductCard';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../../Components/Spinner';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../../../Components/ConfirmationModal/ConfirmationModal';
const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://server-side-ashen.vercel.app/seller/products/${user?.email}`);
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }


    });

    const handleDeleteProduct = product => {
        fetch(`https://server-side-ashen.vercel.app/product/${product._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product ${product.name} deleted successfully`)
                }
            })
    }


    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(products);
    return (
        <div class="mb-12 md:mb-14 xl:mb-16  pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4 md:px-5 lg:px-7">
            <div class="flex justify-center items-center flex-wrap mb-5 md:mb-6">
                <div class="flex items-center justify-center -mt-2 mb-0">
                    <h3 class="text-center  font-bold text-heading">My Product</h3>
                </div>
            </div>
            <div class="grid gap-6 lg:grid-cols-3">
                {
                    products.map(product => <MyProductCard setDeletingProduct={setDeletingProduct} key={product._id} product={product} />)
                }
                {
                    deletingProduct && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                        successAction={handleDeleteProduct}
                        successButtonName="Delete"
                        modalData={deletingProduct}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default MyProducts;