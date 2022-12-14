import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import avatar from '../assets/images/images/avatar.png';
import { Link } from 'react-router-dom';
import { FaPlus, FaList } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
const Sidebar = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    console.log(user);
    return (
        <div>
            <div className="h-full p-3 space-y-2 w-full ">
                <div className="flex items-center p-2 space-x-4">
                    <img src={avatar} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <p className='text-xs hover:underline dark:text-gray-400'>{user?.email}</p>
                        </span>
                    </div>
                </div>
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li>
                            <Link rel="noopener noreferrer" to="/dashboard" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        {
                            isAdmin && <>
                                <li>
                                    <Link rel="noopener noreferrer" to={'/dashboard/all-seller'} className="flex items-center p-2 space-x-3 rounded-md">
                                        <AiOutlineUsergroupAdd className='w-5 h-5 fill-current dark:text-gray-400' />
                                        <span>All Seller</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link rel="noopener noreferrer" to={'/dashboard/all-buyer'} className="flex items-center p-2 space-x-3 rounded-md">
                                        <AiOutlineUsergroupAdd className='w-5 h-5 fill-current dark:text-gray-400' />
                                        <span>All Buyer</span>
                                    </Link>
                                </li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li>
                                    <Link rel="noopener noreferrer" to={'/dashboard/add-product'} className="flex items-center p-2 space-x-3 rounded-md">
                                        <FaPlus className='w-5 h-5 fill-current dark:text-gray-400' />
                                        <span>Add New Product</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link rel="noopener noreferrer" to={'/dashboard/my-product'} className="flex items-center p-2 space-x-3 rounded-md">
                                        <FaList className='w-5 h-5 fill-current dark:text-gray-400' />
                                        <span>My Product</span>
                                    </Link>
                                </li>
                            </>

                        }

                        {(isAdmin || isSeller) ? true : <>
                            <li>
                                <Link rel="noopener noreferrer" to={'/dashboard/my-order'} className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                                        <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                                        <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                                    </svg>
                                    <span>My Order</span>
                                </Link>
                            </li>
                        </>}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;