import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
    <span><div className="div_name">Hello <strong>Nasir Jamal</strong></div></span>,
    <span className="span_">Welcome to React App Development in Bootcamp 2020</span>,
    <div className="div_App"><App name="Nasir Jamal" age={38}/></div>,
    <div className="div_ol">
      <ol>
        <li>CSS</li>
        <li>HTM5</li>
        <li>JavaScript</li>
        </ol></div>,
     <div className="div_ul">
       <ul>
         <li>NodeJS</li>
         <li>ReactJS</li>
         <li>Vue.JS</li>
         </ul></div>,    
  </React.StrictMode>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  React.createElement('div', null, "Hello World with cretaeElement"),
  document.getElementById('root'),
)
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
