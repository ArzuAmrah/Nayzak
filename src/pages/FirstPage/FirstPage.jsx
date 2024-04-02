import React from "react";
import { NavLink } from "react-router-dom";
import './FirstPage.css'

function FirstPage() {
    return (
        <>
        <div className="first-page-all">
            <header className="first-page-header">
                <p className="title-first-page">NAY<b>ZAK</b></p>
                </header>
            <div className="first-page-banner">
                <div className="first-page-image-1">
                    <NavLink to="/homePage">
                        <div
                            className="image"
                            style={{
                                backgroundImage:
                                    'url("https://www.dior.com/couture/var/dior/storage/images/29895131/114-int-EN/cdc-dispatch32_1440_1200.jpg")',
                            }}
                        >
                            <p id="clothes">Accessories</p>
                            <NavLink to="/shop">
                                <p id="discover">Discover</p>
                            </NavLink>
                        </div>
                    </NavLink>
                </div>
                <div className="first-page-image-2">
                    <NavLink to="/homePage">
                        <div
                            className="image"
                            style={{
                                backgroundImage:
                                    'url("https://www.dior.com/couture/var/dior/storage/images/40469043/15-int-EN/pcd-dispatch10_1440_1200.jpg")',
                            }}
                        >
                            <p id="clothes">Clothes</p>
                            <NavLink to="/shop">
                                <p id="discover">Discover</p>
                            </NavLink>
                        </div>
                    </NavLink>
                </div>
            </div>
            </div>
        </>
    );
}

export default FirstPage;
