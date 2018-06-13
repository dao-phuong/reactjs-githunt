import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Repo from './Repo';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRepo: [],
      listLanguage: []
    };
  }

  render() {
    return (
      <div className="container">
        <header>        
          <h1>Githunt</h1>
          <p>Hunting the best Github repositories</p>
          <div className="pos-right">
            <select>
              <option>Year</option>
              <option>Month</option>
              <option>Week</option>
            </select>
            <select size="">
              <option>All language</option>
              <option>ABAP</option>
              <option>Action Script</option>
              <option>Ada</option>
              <option>AGS Scriptt</option>
              <option>Alloy</option>
              <option>AMPL</option>
              <option>ANTLR</option>
              <option>ApacheConf</option>
              <option>API Blueprint</option>
              <option>AppleScript</option>
              <option>Java</option>
              <option>JavaScript</option>
              <option>Swift</option>
              <option>Kotlin</option>
            </select>
          </div>
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

var apiCall = {
  init: function () {

  },
  authenticate: function () {
    axios.post('https://github.com/login/oauth/access_token', {
      
    });
  }
}

export default App;
