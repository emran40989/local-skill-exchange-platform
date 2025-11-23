import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar /> 
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainLayout;