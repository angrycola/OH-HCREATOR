import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
