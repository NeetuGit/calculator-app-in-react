import React, { Component } from 'react';
import logo from './logo.svg';
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "./logic/calculate";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[{ id:'01', name:'Nick',  age:24  },
              {id:'02',  name:'Tom',  age:45  },
                { id:'03', name:'Luca',  age:56  }],
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  delUser = (index,e) => {
    const copyUser=Object.assign([],this.state.users);
    copyUser.splice(index,1);
    this.setState({users:copyUser});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator</h1>
        </header>
        <div>
          <div className="component-app">
          <Display value={this.state.next || this.state.total || "0"} />
          <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
