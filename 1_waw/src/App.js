import { Component } from 'react';
import './App.css';



class MyStrangeUselessComponent extends Component {

  // Waw this is a constructor. That's too much... but ok
  constructor(props) {
    super(props);
    this.state = {names: ["Adrien", "Jean", "Charles", "Amina", "World"]};
  }

  render() {
    return (
      this.state.names.map(name =>
        <div>Hello {name}</div>
        )
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyStrangeUselessComponent />
      </div>
    );
  }
}

export default App;
