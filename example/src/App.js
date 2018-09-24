import React, { Component } from 'react';
import ReactGA from 'react-ga';

import ExampleOne from './ExampleOne';
import ExampleTwo from './ExampleTwo';
import ExampleThree from './ExampleThree';

class App extends Component {
  componentDidMount() {
    ReactGA.event({
  category: 'new vistor',
  action: 'open webPage'
});
  }
  render() {
    return (
      <div className="App" style={{ display: 'flex', flexWrap:'wrap' }}>
        <ExampleOne />
        <ExampleTwo />
        <ExampleThree />
      </div>
    );
  }
}

export default App;
