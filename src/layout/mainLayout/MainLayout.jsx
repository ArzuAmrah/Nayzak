import React from 'react'
import Nav from '../../component/NavBar/Nav'
import Footer from '../../component/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout



