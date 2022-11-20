import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

const Footer = () => {
    return (
        <footer className="p-4 bg-neutral-100 sm:p-6">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-32" alt="KT Kitchen Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-neutral-00">KT Kitchen</span>
                    </Link>
                </div>
                <div className="flex justify-around md:gap-8 gap-6">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-neutral-600">Follow us</h2>
                        <ul className="text-neutral-400">
                            <li className="mb-4">
                                <Link to="https://www.facebook.com" className="hover:underline ">Facebook</Link>
                            </li>
                            <li>
                                <Link to="https://www.github.com" className="hover:underline">Github</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-neutral-600">Legal</h2>
                        <ul className="text-neutral-400">
                            <li className="mb-4">
                                <Link to="/policy" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-neutral-400 sm:mx-auto lg:my-8"/>
            <p className="text-neutral-500 text-center"><small>© 2022 <Link to="/" className="hover:underline">KT Kitchen™</Link>. All Rights Reserved.</small></p>
        </footer>

    );
};

export default Footer;