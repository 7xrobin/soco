import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from 'pages/User/User';
import MaterialReceived from 'pages/MaterialReceived/MaterialReceived';

export default function Routes(props)  {
    return (
        <Switch>
            <Route path='/material-in' component={MaterialReceived}/>
            <Route path='/' component={User}/>
        </Switch>
    );
};