let React = require("react");

let Input = React.createClass({
    getDefaultProps: function() {
        return {width: ""};
    },

    render: function() {
        let className = this.props.width.replace("/", "-");

        return (
            <div className={"inputGroup " + className}>
                {this.props.children}
                <span>{this.props.label}</span>
            </div>
        )
    }
});


module.exports = Input;