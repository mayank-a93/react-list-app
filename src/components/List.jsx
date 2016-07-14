var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
	render: function() {

		var createIteam = function(text, index) {
			return <ListItem key={index + text} text={text} />;
		};

		return (<ul>{this.props.items.map(createIteam)}</ul>);
	}
});

module.exports = List;