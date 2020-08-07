import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import DefaultPage from '../../Components/DefaultPage';

const PrivateRouter = ({ component: Component, ...rest }) => {

    const verifyAuth = () => {
        const user = JSON.parse(localStorage.getItem("userData"));
        return user;
    }

    return (
        <Route {...rest} render={props => (
            verifyAuth() != null ? (
                <DefaultPage component={Component} {...props} />
            ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
        )} />
    );
};


export default PrivateRouter;
