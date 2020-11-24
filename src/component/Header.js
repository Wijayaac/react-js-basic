import React, { Component } from 'react';

class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("Component will mount");
    }
    componentDidMount() {
        console.log("component did mount")
    }
    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <span>{this.props.subTitle}</span>
            </div>
        );
    }
}

export default Header;