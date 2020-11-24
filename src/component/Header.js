import React, { Component } from 'react';
import styles from './mystyles.module.css';

class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header} >
                <h1>{this.props.title}</h1>
                <span>{this.props.subTitle}</span>
            </div>
        );
    }
}

export default Header;