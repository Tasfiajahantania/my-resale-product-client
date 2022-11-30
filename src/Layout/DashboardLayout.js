import React, { useContext } from 'react';
import { Link, Outlet } from "react-router-dom";

import Navbar from '../Pages/Shared/Navbar/Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = () => {

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mx-2">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-lg">
                    <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
                    <ul className="menu w-80 bg-base-100 text-base-content">
                        <Sidebar />
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;