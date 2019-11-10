import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from 'pages/User/User';
import MaterialReceived from 'pages/MaterialReceived/MaterialReceived';
import MaterialSold from 'pages/MaterialSold/MaterialSold';

export default function Routes(props)  {
    return (
        <Switch>
            <Route path='/materialrecebido' component={MaterialReceived}/>
            <Route path='/materialvendido' component={MaterialSold}/>
            <Route path='/' component={User}/>  
        </Switch>
    );
};