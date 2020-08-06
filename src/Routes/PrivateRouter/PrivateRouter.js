import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = ({ component: Component, redirect, ...rest }) => {

    const verifyAuth = () => {
        const user = JSON.parse(localStorage.getItem("userData"));
        return user;
    }

    return (
        <Route {...rest} render={props => (
            verifyAuth() != null ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
        )} />
    );
};


export default PrivateRouter;
