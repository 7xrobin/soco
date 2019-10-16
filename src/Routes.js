import { Switch, Route, Redirect } from 'react-router-dom';
import User from 'scenes/User/user';
import MaterialReceived from 'scenes/MaterialReceived/MaterialReceived';

export  default Routes = () => (
    <Switch>
        <Route exact path='/coopertativa' component={User}/>
        <Route path='/material-in' component={MaterialReceived}/>
    </Switch>
);