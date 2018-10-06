import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import "animate.css/animate.min.css";
import CenterContent from './components/component_center-content';
import Navbar2 from './components/component_navbar-2';
import FooterLinks from './components/component_footer';


class App extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		return(
			<div>
				<Navbar2 />
				<CenterContent />
				<FooterLinks />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
				
				
				

