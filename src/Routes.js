import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from 'scenes/User/user';
import MaterialReceived from 'scenes/MaterialReceived/MaterialReceived';

export default function Routes(props)  {
    return (
        <Switch>
            <Route exact path='/' component={User}/>
            <Route path='/material-in' component={MaterialReceived}/>
        </Switch>
    );
};