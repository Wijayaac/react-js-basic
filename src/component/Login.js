import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: ""
        }

        this._handleChange = this._handleChange.bind(this);
        this._handlesubmit = this._handlesubmit.bind(this);
    }
    _handleChange(e) {
        let target = e.target;
        let targetName = target.name;
        let targetValue = target.value;

        this.setState({ [targetName]: targetValue })
    }
    _handlesubmit(e) {
        let { username, password, message } = this.state;

        // umpama validasi web service
        if (username === 'wijaya' && password === '123') {
            message = 'login success';
        } else {
            message = 'login failed';
        }

        this.setState({ message: message });
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this._handlesubmit} >
                    <input type="text" name="username" value={this.state.username} onChange={this._handleChange} /><br />
                    <input type="password" name="password" value={this.state.password} onChange={this._handleChange} /><br />
                    <input type="submit" value="Login" />
                </form>
                <h3> {this.state.message} </h3>
            </div>
        );
    }
}

export default Login;