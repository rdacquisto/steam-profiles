(function (React) {
	'use strict';

	module.exports = React.createClass({
		displayName: 'Game Name',
		render: function () {
			return React.createElement('h1', {className: 'game-name'},
				(this.props.displayName) ? this.props.displayName : this.props.gameName
			);
		}
	});

})(window.React);
