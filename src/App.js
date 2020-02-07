import React from 'react';

class App extends React.Component {
  
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };

  min = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    console.log("component rendering");
    return (
      <div>
        <h1>I'm a class component {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.min}>Min</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("component updated");
  }
}

export default App;
