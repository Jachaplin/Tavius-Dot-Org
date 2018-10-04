import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import TshirtSlides from './components/component_tshirt-slides';
import CenterContent from './components/component_center-content';
// import Banner from './components/component_banner';
import Navbar from './components/component_navbar';
// import SideContent from './components/component_sider';
import FooterLinks from './components/component_footer';
// import registerServiceWorker from './registerServiceWorker';

class App extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		return(
			<div>
				<Navbar />
				<CenterContent />
				<FooterLinks />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
				
				
				
