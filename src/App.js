import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Repo from './Repo';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Repo title="parcel-bundler/parcel" body="📦🚀 Blazing fast, zero configuration web application bundler"
      fork_num="908" comment_num="390" star_num="33476" />
    );
  }
}

export default App;
