import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="containerLogin">
            <div className="principalBox column">
                <div className="boxLogin column">
                    <header><h1>Photogram</h1></header>
                    <content>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </content>
                </div>
                <p id="ou" className="row">ou</p>
                <div className="bottomMenu column">
                    <button className="facebookLogin row" onClick={() => window.location.href = "/login_facebook"}>
                        <img src="https://www.shareicon.net/download/128x128//2017/05/22/886208_facebook_512x512.png" alt="facebook" />
                        <p>Login with Facebook</p>
                    </button>
                    <a href="/reset_password">Forgot your password?</a>

                </div>
            </div>
        </div>
    )
}

export default Login;