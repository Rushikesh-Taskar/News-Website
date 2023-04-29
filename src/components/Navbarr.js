import React, { useState } from 'react'
import { Router ,Link} from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                           
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link "  href="/general">general</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/business">business</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/entertainment">entertainment</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/health">health</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/science">science</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/sports">sports</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/technology">technology</a>
                            </li>
                            
                        </ul>

                        <div className="form-check form-switch">
                            <input onClick={props.toggle} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <b className="navbar-brand light" > {props.mode} mode </b>
                        </div>

                       
                    </div>
                </div>
            </nav>
            <div className=" alert-success " role="alert">
                <b>{props.alert}</b>
            </div>
        </>
    )


}