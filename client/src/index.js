import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css/animate.min.css';

import { Provider } from 'react-redux';
import store from './store';

import FixedNavbar2 from './components/layout/Navbar2';
import Landing from './components/layout/Landing';
import FooterLinks from './components/layout/Footer';
import MusicPage from './components/layout/pages/MusicPage';
import BlogPage from './components/layout/pages/BlogPage';
import StorePage from './components/layout/pages/StorePage';
import SubscribePage from './components/layout/pages/SubscribePage';
import ContactPage from './components/layout/pages/ContactPage';

class App extends Component {
  // constructor(props) {
  //  super(props)
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <FixedNavbar2 />
            <Route exact path="/" component={Landing} />
            <Route exact path="/subscribe" component={SubscribePage} />
            <Route exact path="/music" component={MusicPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/store" component={StorePage} />
            <Route exact path="/contact" component={ContactPage} />
            <FooterLinks />
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
