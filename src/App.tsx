import React from 'react';

import Timer from './components/Timer/Timer';

import './App.scss';

class App extends React.Component<any, any>  {
  render(): JSX.Element {      
    return (
      <div className="App">      
        <div className="timer">      
          <Timer />
        </div>      
      </div>
    );
  }
};

export default App;