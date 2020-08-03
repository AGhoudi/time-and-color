import React from 'react';

import './Timer.scss';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(), 
        seconds: new Date().getSeconds(), 
      };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
      if(this.state.seconds > 59) {
        this.setState({
          seconds: 0,
          minutes: this.state.minutes + 1
        });
      }
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Secondes : {this.state.hour + ':' + this.state.minutes + ':' + this.state.seconds}
        </div>
      );
    }
  }
  
export default Timer;