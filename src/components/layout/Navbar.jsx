import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function NavBar() {
    return (
        <>
            <section className={'content'}>
                <nav className="navbar">
                    <div className="navbar__right">
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <span><Link to="/" className="navbar__link">Home</Link></span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default NavBar;
