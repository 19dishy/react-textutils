import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props) {

    const stylePink = {
        backgroundColor: '#f0b7d4',
        color: 'white',
        border: 'none'
    };

    const styleBlue = {
        backgroundColor: '#accef2',
        color: 'white',
        border: 'none'
    };

    const styleRed = {
        backgroundColor: '#a93742',
        color: 'white',
        border: 'none'
    };

    const PinkMode = () => {
        document.body.style.backgroundColor = '#f0b7d4';
    };

    const BlueMode = () => {
        document.body.style.backgroundColor = '#accef2';
    };

    const RedMode = () => {
        document.body.style.backgroundColor = '#a93742';
    };

  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        <a className="navbar-brand" href="/"> {props.title} </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
            </li> 
        </ul>
        </div>
        
        <div className="btn-group me-2" role="group" aria-label="Basic example">
            <button type="button" className="btn mx-1" style={stylePink} onClick={PinkMode}>Pink</button>
            <button type="button" className="btn mx-1" style={styleBlue} onClick={BlueMode}>Blue</button>
            <button type="button" className="btn mx-1" style={styleRed} onClick={RedMode}>Red</button>
        </div>

        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'black'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="switchCheckDefault" >{props.mode === 'dark' ? 'Light' : 'Dark'} mode</label>
        </div>

    </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
}

