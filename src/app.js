import React from 'react';
import reactDom from 'react-dom';
import { username } from './main';
import '../style/style.scss';

// console.log(await new Promise((res) => res('Hello Babel')));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 100,
    };
  }

  render() {
    return <h1>Hello {this.state.counter}</h1>;
  }
}

reactDom.render(<App />, document.getElementById('root'));
