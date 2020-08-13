import React from 'react';

import Timer from './components/Time/Timer';

import './App.css';

class App extends React.Component {

  render() {
      
    return (
        <div className="App">      
            <div className="timer">      
                <Timer />
            </div>      
        </div>
    );
  }
}

export default App;
