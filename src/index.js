import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import TshirtSlides from './components/component_tshirt-slides';
import Books from './components/component_books';
import Banner from './components/component_banner';
import Navbar from './components/component_navbar';
import Sidebar from './components/component_sidebar';
import FooterLinks from './components/component_footer';
// import registerServiceWorker from './registerServiceWorker';

class App extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		return(
			<div>
				<Banner />
				<Navbar />
				
				<TshirtSlides />
				<Books />
				<FooterLinks />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
