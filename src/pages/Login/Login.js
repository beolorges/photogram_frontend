import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="containerLogin">
            <div className="principalBox column">
                <div className="boxLogin column">
                    <header><h1>Photogram</h1></header>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </div>
                <p id="ou" className="row">ou</p>
                <div className="facebookLogin row">
                    <img src="https://www.shareicon.net/download/128x128//2017/05/22/886208_facebook_512x512.png" alt="facebook" />
                    <p>Login with Facebook</p>
                </div>
                <a href="/reset_password">Forgot your password?</a>
            </div>
        </div>
    )
}

export default Login;