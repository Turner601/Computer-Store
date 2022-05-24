import React from "react"

const Footer =()=> {
    return (
        <footer className="text-center">
            <div className="d-flex justify-content-evenly mt-3">
                <a href="https://www.facebook.com/"><svg className="icon icon-facebook"><use href="#icon-facebook"></use></svg></a>
                <a href="https://twitter.com/?lang=en"><svg className="icon icon-twitter"><use href="#icon-twitter"></use></svg></a>
                <a href="mailto: turner@mscodingacademies.org"><svg className="icon icon-mail-envelope-closed"><use href="#icon-mail-envelope-closed"></use></svg></a>
            </div>
            <p className="colophon">Site By Turner &copy; 2022</p>
            <p>All rights reserved 1985-2022</p>
        </footer>
    )
}

export default Footer