import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import TshirtSlides from './components/component_tshirt-slides';
// import registerServiceWorker from './registerServiceWorker';

class App extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		return(
			<div>
				<TshirtSlides />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
