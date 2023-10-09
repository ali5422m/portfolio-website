import React from 'react';
import Logo from "../assets/logo.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="leading-tight">
                        <span className="text-gradient font-extrabold text-3xl">ALI</span>
                        <p className="font-bold font-primary">MOHAMMADINIA</p>
                    </div>
                    <Link to="https://t.me/ali5422m" target="_blank">
                        <button className="btn btn-sm">Work with me</button>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Header;
