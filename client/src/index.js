import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css/animate.min.css';

import { Provider } from 'react-redux';
import store from './store';

import FixedNavbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import FooterLinks from './components/layout/Footer';
import MusicPage from './components/layout/pages/MusicPage';
import BlogPage from './components/layout/pages/BlogPage';
import StorePage from './components/layout/pages/StorePage';
import EventsPage from './components/layout/pages/EventsPage';
import landingImage from './components/layout/style/analogue-blur-classic-resized.jpg';

class App extends Component {
  // constructor(props) {
  //  super(props)
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="site">
            <FixedNavbar />
            <div className="site-content">
              <Route exact path="/" component={Landing} />

              <Route exact path="/music" component={MusicPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route exact path="/store" component={StorePage} />
              <Route exact path="/events" component={EventsPage} />
            </div>
            <FooterLinks />
            <div id="preload">
              <img src={landingImage} alt="record-player" />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
