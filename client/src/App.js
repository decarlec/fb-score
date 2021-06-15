import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    matches: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ matches: JSON.parse(res.data) }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          { this.state.matches ? 
          <div>
            <h1>Matches:</h1>
            <ul>
              {this.state.matches.map(match => 
                <li key={match.match_id}>
                  <div>{match.match_hometeam_name} vs. {match.match_awayteam_name}</div>
                </li>)
              }
            </ul>
          </div> : null }         
        </div>
      </div>
    );
  }
}

class Match extends Component {
  state = {
    matchData: App.matches
  };

  render(){
    return this.state.match
  }
}

export default App;