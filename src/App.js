import React, { Component } from 'react';
import Header from './component/Header';
import Login from './component/Login';


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header title="Hello Wijaya" subTitle="Ini buatan wijaya" />
        <Login />
      </div>
    );
  }
}

export default App;
