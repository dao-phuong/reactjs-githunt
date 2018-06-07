import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Repo from './Repo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRepo: []
    };
  }

  render() {
    return (
      <div className="container">
        <header>        
          <h1>Githunt</h1>
          <p>Hunting the best Github repositories</p>
        </header>
        <ListRepo time="A year ago - Jun 8, 2017 – Jun 7, 2018" />
      </div>
    );
  }
}

class ListRepo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRepo: []
    }
  }

  render() {
    return (
      <section className="time-block">
        <h2>{this.props.time}</h2>
        <ul>
          <li><Repo title="parcel-bundler/parcel" body="📦🚀 Blazing fast, zero configuration web application bundler"
        fork_num="908" comment_num="390" star_num="33476" url="https://github.com/parcel-bundler/parcel" /></li>
          <li><Repo title="parcel-bundler/parcel" body="📦🚀 Blazing fast, zero configuration web application bundler"
          fork_num="908" comment_num="390" star_num="33476" url="https://github.com/parcel-bundler/parcel" /></li>
          <li><Repo title="parcel-bundler/parcel" body="📦🚀 Blazing fast, zero configuration web application bundler"
          fork_num="908" comment_num="390" star_num="33476" url="https://github.com/parcel-bundler/parcel" /></li>
        </ul>
      </section>
    );
  }
}

export default App;
