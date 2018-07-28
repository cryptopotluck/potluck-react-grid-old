import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "./common/css/theme.css";
import "./common/fonts/feather/feather.css";
import "@fortawesome/fontawesome-free/css/all.css"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
