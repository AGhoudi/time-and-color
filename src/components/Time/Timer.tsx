import React from 'react';

import './Timer.scss';

class Timer extends React.Component<any, any>  {

    constructor(props:any) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        }        
    }

    componentDidMount():void {
        setInterval(():void => {
          this.setState<string>({
            currentTime : new Date().toLocaleTimeString()
          })
        }, 1000)
    }
    
    render() {
        const { currentTime } = this.state;

        return (
            <React.Fragment>
                <div className="clock">
                    <h1>    
                        <span className="webdev">
                            {currentTime}
                        </span> 
                    </h1>                
                </div>
            </React.Fragment>
        );
    }    
}
  
export default Timer;