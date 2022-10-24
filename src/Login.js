import React from "react";
import "./components/Login.css";
import {Link} from 'react-router-dom'

function Login(){
    const title1Details = {
        textAlign: 'center',
        marginTop: 100,
        fontFamily: 'monospace',
        fontSize: 50,
    };
    const belowTitle1 = {
        textAlign: 'center',
        marginTop: 50,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 25,
    };
    const inputDescriptions = {
        textAlign: 'left',
        marginTop: 10,
        marginLeft: 150, 
        fontFamily: 'Helvetica Light',
        fontSize: 20,
        display: 'block',
    };
    return(
        <div className="Login">

            <div className="iframe_logon_icon">
                <img src={"https://i.ibb.co/hYBFvMR/login-logo.gif"} width="64%" alt="Glitch"></img>
            </div>
            <div className="prompt">
                <h1 style={title1Details}> ¿Listo para ser <br></br> el profesional <br></br> de Rainbow Six? </h1>
                <p style={belowTitle1}> Entra ya! </p>
                <form>
                    <label style={inputDescriptions}> USUARIO <br></br> </label>
                    <input className="login_input" type="text"></input>
                    <label style={inputDescriptions}> CONTRASEÑA <br></br> </label>
                    <input className="login_input" type="password"></input>
                </form>
                <Link to='/'>
                    <loginButton> LOGIN </loginButton>
                </Link>
                <Link to='/registro'>
                    <registerButton> REGISTRATE </registerButton>
                </Link>
                
            </div>
        </div>
    );
}

export default Login;