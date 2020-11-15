//Import React
import React from 'react';
import ReactDOM from 'react-dom';

//Import Redux Components
import store from './store';
import {Provider} from "react-redux";

//Import Components
import App from './App';
import './css/index.css';
import "./css/chat.css";
import "./css/animations.css";
import "./css/app.css";
import "./css/navbar.css"
import "./css/home.css";
import "./css/about.css";
import "./css/projects.css";
import "./css/contact.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

