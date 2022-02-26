import React from "react";
import {Link} from 'react-router-dom'
import log from '../logo.svg'
export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                    <img alt="logo" src={log}/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link fw-bold" to='rooms'>Rooms</Link>
                            </li>
                    </ul>
            </div>
            </div>
        </nav>
    )
}