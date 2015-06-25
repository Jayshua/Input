var React = require("react");

var Input = React.createClass({
    getDefaultProps: function() {
        return {width: ""};
    },

    render: function() {
        var className = this.props.width.replace("/", "-");

        return (
            React.createElement("div", {className: "inputGroup " + className, children: [
                this.props.children,
                React.createElement("span", {children: this.props.label})
            ]});
        );
    }
});


module.exports = Input;