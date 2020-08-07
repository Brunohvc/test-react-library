import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import './Login.css';
import { Redirect } from 'react-router-dom';

const Login = () => {

    const [user, userState] = useState(false);

    useEffect(() => {
        verifyAuth();
    }, []);

    const responseGoogle = (res) => {

        const googleResponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
        };
        localStorage.setItem("userData", JSON.stringify(googleResponse));
        verifyAuth();
    }

    const verifyAuth = () => {
        const user = JSON.parse(localStorage.getItem("userData"));
        const existUser = user != null;
        userState(existUser);
    }

    return (
        <div className="container-fluid login-container">
            <div className="modal-dialog">
                <div className="modal-content login-content">
                    <div className="modal-header login-header">
                        <h5 className="modal-title">Login</h5>
                    </div>
                    <div className="modal-body">
                        <GoogleLogin
                            clientId="167295399215-v1ioi8c4e1ib1kudie7a7tb58psnvgoi.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle} ></GoogleLogin>
                    </div>
                </div>
            </div>
            {user && <Redirect to={{ pathname: '/' }} />}
        </div >
    );
};


export default Login;
