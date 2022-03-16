import React from 'react'
import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo" />

                    <ul>
                        <li>
                            <NavLink to="/home" className={ ( {isActive}) => isActive? 'nav-active': '' }>Home</NavLink>

                        </li>
                        <li>
                            <NavLink to="/about" className={ ( {isActive}) => isActive? 'nav-active': '' }>About</NavLink>

                        </li>
                        <li>
                            <NavLink to="/users">Users</NavLink>

                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/about' element={<h1>About page</h1>} />
                    <Route path='/users' element={<h1>USers page</h1>} />
                    <Route path='/home' element={<h1>home page</h1>} />
                    <Route path='/*' element={ <Navigate to='/home' replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
