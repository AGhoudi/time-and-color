import React from 'react';
import { getRandomNumber } from '../../functions/getRandomNumber';


import './Timer.scss';

const textColor =[
    '#ffd9e2',
    '#fbffd9',
    '#ffe5d9',
    '#ddffd9',
    '#d9fff7', 
    '#d9f1ff', 
    '#d9ddff', 
    '#e8d9ff', 
    '#f7d9ff', 
    '#fed9ff', 
    '#ffd9f2', 
    '#ffd9de'
];

const borderColor = [
    '#ff003c',
    '#fffb00',
    '#ffae00',
    '#51ff00',
    '#00ffd5', 
    '#00ccff', 
    '#0059ff', 
    '#5900ff', 
    '#b700ff', 
    '#f700ff', 
    '#ff009d', 
    '#ff002b'
];

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
        const randomNumber = getRandomNumber();

        return (
            <React.Fragment>
                <div className="clock">
                    <h1>    
                        <span 
                        className="webdev" 
                        style={{
                            color: `${textColor[randomNumber]}`,
                            textShadow: `0 0 10px ${borderColor[randomNumber]}, 0 0 20px ${borderColor[randomNumber]}, 0 0 40px ${borderColor[randomNumber]}, 0 0 100px ${borderColor[randomNumber]}, 0 0 200px ${borderColor[randomNumber]}, 0 0 300px ${borderColor[randomNumber]}, 0 0 500px ${borderColor[randomNumber]}, 0 0 1000px ${borderColor[randomNumber]}`
                        }}                        
                        >
                            {currentTime}
                        </span> 
                    </h1>                
                </div>
            </React.Fragment>
        );
    }    
}
  
export default Timer;