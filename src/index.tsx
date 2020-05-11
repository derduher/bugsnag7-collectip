import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
Bugsnag.start({
  appType: 'client',
  appVersion: '1.2.3',
  apiKey: 'example',
  autoDetectErrors: true,
  releaseStage: 'prod',
  enabledReleaseStages: ['prod', 'qa', 'active'],
  collectUserIp: false,
  redactedKeys: [/token/i, /password/i, /name/i, /email/i, /phone/i],
  plugins: [new BugsnagPluginReact(React)],
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
