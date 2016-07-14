var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');


const listManager = document.getElementById('ingredients');
ReactDOM.render(<ListManager title="Ingredients" />, listManager);