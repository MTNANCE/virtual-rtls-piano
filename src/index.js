import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import PianoContainer from './container/PianoContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PianoContainer />, document.getElementById('pianoContainer'));
ReactDOM.render(<App />, document.getElementById('pianoContainer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
