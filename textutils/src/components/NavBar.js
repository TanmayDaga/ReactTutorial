import React from 'react'
import PropTypes from 'prop-types';
export default function NavBar(props) {
    
    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${props.mode.navbar}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                            </li>


                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form> */}
                    </div>
                    <button type="button" className="btn btn-success mx-2 btn-circle" onClick = {() => {props.toggleMode("green")}}></button>
                    <button type="button" className="btn btn-info mx-2 btn-circle" onClick = {() => {props.toggleMode("blue")}}></button>
                    <button type="button" className="btn btn-warning mx-2 btn-circle" onClick = {() => {props.toggleMode("yellow")}}></button>
                    <button type="button" className="btn btn-danger mx-2 btn-circle" onClick = {() => {props.toggleMode("red")}}></button>
                    <button type="button" className="btn bg-dark btn-circle mx-2" onClick = {() => {props.toggleMode("dark")}}></button>
                    <button type="button" className="btn btn-light btn-circle mx-2" onClick = {() => {props.toggleMode("light")}}></button>
                    
                </div>
            </nav>
        </div>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string

}
NavBar.defaultProps = {
    title: "Default title",
    aboutText: "Default aboutText"
}