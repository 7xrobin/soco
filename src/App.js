import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Panel from './pages/Panel/Panel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Panel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
