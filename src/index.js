import React from 'react';
import ReactDOM from 'react-dom';
import 'grommet/grommet.min.css';
import './index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
registerServiceWorker();
