import React, { Component } from 'react';
import Header from './component/Header';
import Container from './component/Container';


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header title="Hello Wijaya" subTitle="Ini buatan wijaya" />
        <Container />
      </div>
    );
  }
}

export default App;
