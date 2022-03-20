// Outside code referense: https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

import React from "react";

/* class DurationExercise extends React.Component {
    constructor(props) {
      super(props)
      this.state = { time: props.seconds, complete: false, interval: undefined }
    }
  
    componentDidMount() {
      this.setState({
        interval: setInterval(() => {
          if (this.state.time > 0) {
            this.setState({ time: this.state.time - 1 })
          } else {
            this.setState({ complete: true })
            clearInterval(this.state.interval)
          }
        }
          , 1000)
      })
    }
  
    render() {
      let minutes = Math.floor(this.state.time / 60)
      let seconds = this.state.time - minutes*60
      return (
        <div>
          {!this.state.complete ?
            <p>You have {String(minutes).padStart(2, 0)}:{String(seconds).padStart(2, "0")} seconds left</p>
            :
            <p>Timer done!</p>
          }
  
        </div>
      );
    }
  };
  */

class DurationExercise extends React.Component {
    // using state to store the timer data, that it does not turn on when started, and that it is initially 0 
    state = {
        timerOn: false,
        timerStart: 0,
        timeOnTimer: 0
    };

    //using the setState to turn the timer on, the value on timeOnTimer is used to show how much time passed and how much to subtract from Date.now() which is used to set the time.
    startingTimer = () => {
        this.setState({
            timerOn: true,
            timeOnTimer: this.state.timeOnTimer,
            timerStart: Date.now() - this.state.timeOnTimer
        });
        this.timer = setInterval(() => {
            this.setState({
                timeOnTimer: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    // here it is setting the timer to false so it does not continue counting and it is clearing the interval with clearInterval
    stopingTimer = () => {
        this.setState({ timerOn: false});
        clearInterval(this.timer);
    };

    // the resetTimer here returns the state to 0 
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timeOnTimer: 0
        });
    };

    render() {
        //const is used here to decalre the initial value of state keeping it constant 
        const { timeOnTimer } = this.state;
        // "0" is used to add a 0 infront of the value and it is spliched by -2 so it does not display or have more than two digits 
        let milliseconds = ("0" + (Math.floor(timeOnTimer / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timeOnTimer / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timeOnTimer / 60000) % 60)).slice(-2);

        return(
            //Here I am first calling the name of the user chosen excerise then I am setting the look of the timer
            //After that I am creating the buttons that are conditioned to the status of the timer i respect to it element (start = startingTimer)
            //Start is false because the timer is off and it equals to 0 because the time is 0 
            //Stop is true because the timer is on 
            //Resume shows that the time is on but it does not equal 0 ( > 0)
            //Reset shows that the timer is off and not equal 0 ( > 0)
            <>
                <p>{this.props.name}</p>
                <p>Timer: {minutes} : {seconds} : {milliseconds}</p>
                {this.state.timerOn === false && this.state.timeOnTimer === 0 && (
                    <button onClick={this.startingTimer}>Start</button>
                )}
                {this.state.timerOn === true && (
                    <button onClick={this.stopingTimer}>Stop</button>
                )}
                {this.state.timerOn === false && this.state.timeOnTimer > 0 && (
                    <button onClick={this.startingTimer}>Resume</button>
                )}
                {this.state.timerOn === false && this.state.timeOnTimer > 0 && (
                    <button onClick={this.resetTimer}>Reset</button>
                )}
            </>
        );
    }

}

export default DurationExercise;