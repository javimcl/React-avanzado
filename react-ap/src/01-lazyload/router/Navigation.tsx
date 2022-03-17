import React from 'react'
import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import logo from '../logo.svg'
import { LazyPage1 } from '../pages/LazyPage1';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo" />

                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={ ( {isActive}) => isActive? 'nav-active': '' }>lazy1</NavLink>

                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ( {isActive}) => isActive? 'nav-active': '' }>lazy2</NavLink>

                        </li>
                        <li>
                        <NavLink to="/lazy3" className={ ( {isActive}) => isActive? 'nav-active': '' }>lazy3</NavLink>

                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='lazy1' element={<LazyPage1/>} />
                    <Route path='lazy2' element={<h1>USers page</h1>} />
                    <Route path='lazy3' element={<h1>home page</h1>} />
                    <Route path='/*' element={ <Navigate to='/lazy1' replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
