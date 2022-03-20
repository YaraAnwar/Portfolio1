import React from "react"; 

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
            <h2 style={{ color: "#003060", textAlign: "center" }}>{this.props.name}</h2>
            <h3 style={{
            color: "#0E86D4", textAlign: "center"
         }}>Reps: {this.state.value}</h3>
            <button style={{ backgroundColor: "#FFC000", 
                            color: "white", 
                            border: "none",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "flex",
                            fontSize: "12px",
                            margin: "0 auto",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px",
                }}
                onClick={() => this.addOne()}>Complete Rep</button>
            <button style={{ backgroundColor: "#4CAF50", 
                            color: "white", 
                            border: "none",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "flex",
                            fontSize: "12px",
                            margin: "0 auto",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px",
                }}
                 onClick={() => this.reset()}>Reset</button>
        </>

    )
}
}

export default RepetitionExercise;