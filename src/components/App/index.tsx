import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { About } from '../About';
import { TableData } from '../TableData';
import { Impressum } from '../Impressum';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/data" component={TableData} />
        <Route exact path="/impressum" component={Impressum} />
        <Redirect from="/" to="/data" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
