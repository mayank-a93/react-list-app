var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');


const Ingredients = document.getElementById('ingredients');
const Todo = document.getElementById('todo');
const Christmas = document.getElementById('christmas');
ReactDOM.render(<ListManager title="Ingredients" />, Ingredients);
ReactDOM.render(<ListManager title="todo" />, Todo);
ReactDOM.render(<ListManager title="Christmas" headingColor="#b31217" />, Christmas);