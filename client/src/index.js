import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css/animate.min.css';
import CenterContent from './components/layout/CenterContent';
import FixedNavbar from './components/layout/Navbar';
import NavBoxes from './components/layout/Navboxes';
import FooterLinks from './components/layout/Footer';

class App extends Component {
  // constructor(props) {
  //  super(props)
  // }

  render() {
    return (
      <div>
        <FixedNavbar />
        <NavBoxes />
        <CenterContent />
        <FooterLinks />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
