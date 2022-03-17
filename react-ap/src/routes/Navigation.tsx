import React from 'react'
import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import logo from '../logo.svg'

import { routes } from './routes'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo" />

                    <ul>

                        {
                            routes.map(route => {
                                <li>
                                    <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                                </li>

                            })
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(route => 
                            <Route path={route.path} element={route.Component} />
                        )
                        
                    }
                </Routes>

            </div>
        </BrowserRouter>
    )
}
