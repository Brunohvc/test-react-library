import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import BooksList from '../Pages/BooksList';
import Login from '../Pages/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRouter exact path="/" component={BooksList} />
        </Switch>
    </BrowserRouter>
)


export default Routes;
