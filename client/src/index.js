import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css/animate.min.css';

import { Provider } from 'react-redux';
import store from './store';

import FixedNavbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Subscribe from './components/subscribe/Subscribe';
import FooterLinks from './components/layout/Footer';

class App extends Component {
  // constructor(props) {
  //  super(props)
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <FixedNavbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/subscribe" component={Subscribe} />
            <FooterLinks />
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
