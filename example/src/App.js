import React, { Component } from 'react';

import ExampleOne from './ExampleOne';
import ExampleTwo from './ExampleTwo';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ display: 'flex' }}>
        <ExampleOne />
        <ExampleTwo />
      </div>
    );
  }
}

export default App;
