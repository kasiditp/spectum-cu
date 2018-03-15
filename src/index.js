// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import './styles/index.css';
import 'bulma/css/bulma.css';
import 'animate.css'
import routes from './routes';

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
    <Router history={browserHistory} routes={routes} />, 
    document.getElementById('root')
);
// registerServiceWorker();