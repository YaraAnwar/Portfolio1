import React from "react"; 

/* class RepetitionExercise extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>)
  }
}  */

class RepetitionExercise extends React.Component {
    constructor(props){
        super(props)
        // value is initialy set to 0 in the App.js file lines 16, 18 ,20, here it is being called using this.props
        this.state = { value: this.props.value }
    }

//adds a click by 1 to the initialState which is the state it was previously, if 3 then adds 1 to become 4 
// it then connects to updateValue which is declared in App.js line 31
addOne() {
    this.setState((initialState) => {
        let newValue = initialState.value + 1
        this.props.updateValue(newValue)
        return {
            value: newValue,
        }
    })
}

// resets the newValue to 0 and updates the current value to resetValue
reset() {
    this.setState((newValue) => {
        let resetValue = newValue.value = 0
        this.props.updateValue(resetValue)
        return {
            value: resetValue,
        }
    })
}

render() {
    return (
        <>
            <p>{this.props.name}</p>
            <p>Reps: {this.state.value}</p>
            <button onClick={() => this.addOne()}>Complete Rep</button>
            <button onClick={() => this.reset()}>Reset</button>
        </>

    )
}
}

export default RepetitionExercise;