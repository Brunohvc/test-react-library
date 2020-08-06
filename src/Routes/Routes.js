import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import BooksList from '../Components/BooksList';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={() => <h1>Tela de Login</h1>} />
            <PrivateRouter exact path="/" component={() => <BooksList />} />
        </Switch>
    </BrowserRouter>
)


export default Routes;
