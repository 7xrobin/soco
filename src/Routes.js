import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from 'scenes/User/User';
import MaterialReceived from 'scenes/MaterialReceived/MaterialReceived';

export default function Routes(props)  {
    return (
        <Switch>
            <Route path='/material-in' component={MaterialReceived}/>
            <Route path='/user' component={User}/>
        </Switch>
    );
};