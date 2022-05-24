import React from "react"
import { Link } from "react-router-dom"

const Navbar =()=> {
    return (
        <nav className="header-nav navbar justify-content-evenly">
            <Link to="/" className="nav-link">Home</Link> | {" "}
            <Link to="About" className="nav-link">About</Link> | {" "}
            <Link to="Products" className="nav-link">Products</Link> | {" "}
            <Link to="Contact" className="nav-link">Contact Us</Link>
        </nav>
    )
}

export default Navbar