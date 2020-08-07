import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import './Login.css';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        verifyAuth();
    }, []);

    const responseGoogle = (res) => {
        const userData = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
        };
        dispatch({ type: 'LOGIN', userData });
        history.push('/');
    }

    const verifyAuth = () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData != null) {
            dispatch({ type: 'LOGIN', userData });
            history.push('/');
        }
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
        </div >
    );
};


export default Login;
