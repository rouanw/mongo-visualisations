import React from 'react';
import ReactDOM from 'react-dom';
import reqwest from 'reqwest';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

reqwest({
  type: 'json',
  contentType: 'application/json',
  headers: { accept: 'application/json' },
  url: '/query',
  method: 'post',
  data: { filter: {} },
})
.then((result) => {
  ReactDOM.render(<App data={result} />, document.getElementById('root'));
  registerServiceWorker();
});
