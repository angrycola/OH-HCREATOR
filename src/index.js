import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css';

import App from './containers/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { randomise } from './actions';

store.dispatch(randomise());


ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
