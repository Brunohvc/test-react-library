import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import BooksList from '../Components/BooksList';
import Login from '../Views/Login';
import { ConnectedRouter } from 'connected-react-router'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={() => <Login />} />
            <PrivateRouter exact path="/" component={() => <BooksList />} />
        </Switch>
    </BrowserRouter>
)


export default Routes;
