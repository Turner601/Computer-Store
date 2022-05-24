import React from "react"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

const Header =()=> {
    return (
        <header className="header mb-5 ">
            <h1 className="h1 text-center">Turner's Computer Store</h1>
            <Navbar />
            <Outlet />
        </header>
    )
}

export default Header