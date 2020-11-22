import React, { Component } from 'react';

export default class Footer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
            </div>
        );
    }
}