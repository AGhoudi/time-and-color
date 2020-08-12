import React from 'react';

import './Timer.scss';

class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            currentTime : new Date().toLocaleTimeString()
          })
        }, 1000)
    }
    
    render() {
        const { currentTime } = this.state;
        return (
            <React.Fragment>
                <div className="clock">
                <span className="webdev">{currentTime}</span>
                </div>
            </React.Fragment>
        );
    }    
}
  
export default Timer;