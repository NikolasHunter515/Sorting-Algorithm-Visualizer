'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import LogReg from '../Login/LogReg';

export default function Navbar({homePage}){
    //TODO  each item on the drop down will change the sites theme. Will use localstorage for the current theme.
    //when adding themes use a loop to display the theme options with a hashmap
    //todo add some values to the login page.

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen((v) => !v);
    
    const router = useRouter();

    return(
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark justify-content-end'>
            <div className='container-fluid'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item dropdown'>
                        <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown'>Themes</a>
                        <ul className='dropdown-menu'>
                            <li>
                                <button className='dropdown-item' href='#'>Default</button>
                            </li>
                        </ul>
                    </li>
                    {homePage && (
                        <li className='nav-item'>
                        <   button className='btn btn-primary' type='button' onClick={() => router.push("/authPage")}>Login/Register</button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}