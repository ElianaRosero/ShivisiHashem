import React from 'react';
import ReactDOM from 'react-dom';
import ProviderDude from './ProviderDude';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<ProviderDude />, document.getElementById('root'));
registerServiceWorker();
