import React from 'react';

import './Timer.scss';

class Timer extends React.Component {

    constructor(props) {
        super(props);
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
        console.log(this.state.currentTime)
        return (
            <React.Fragment>
                <div className="clock">
                    <h1>
    
    <em class="planet left">O</em>
    
    <span className="webdev">{currentTime}</span>
    <em class="planet right">O</em>
    
    </h1>
                
                </div>
            </React.Fragment>
        );
    }    
}
  
export default Timer;