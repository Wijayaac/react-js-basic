import React, { Component } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: "",
            showMessage: false
        }

        this._handleChange = this._handleChange.bind(this);
        this._handlesubmit = this._handlesubmit.bind(this);
        this._closeMessage = this._closeMessage.bind(this);
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

        this.setState({ message: message, showMessage: true });

        e.preventDefault();
    }
    _closeMessage() {
        this.setState({ showMessage: false });
    }
    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this._handlesubmit} >
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} onChange={this._handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this._handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit"> Login</Button>
                    </Form>
                    <Alert variant="info" show={this.state.showMessage} >
                        {this.state.message}
                        <div className="d-flex justify-content-end">
                            <Button variant="info" onClick={this._closeMessage} >
                                Thanks, please close
                            </Button>
                        </div>
                    </Alert>
                </Container>

            </div>
        );
    }
}

export default Login;