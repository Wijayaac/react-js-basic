import React, { Component } from 'react';
import { Form, Navbar, Button, Nav, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand >Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link >
                <Link to="/" >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/register" >
                  Register
                </Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/login" >
                  Login
                </Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/login"><Login /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
