// Referenced for list component idea of buttons: https://www.robinwieruch.de/react-list-component/
// reference for using this.state and arrays: https://www.robinwieruch.de/react-state-array-add-update-remove/

import './App.css';
import React from 'react';
import DurationExercise from './components/DurationExercise' ;
import RepetitionExercise from './components/RepetitionExcercise'; 
import RapSong from './components/RapSong';
import ElectronicSong from './components/ElectronicSong';
import ExerciseTutorial from './components/ExerciseTutorial';

//using const decleration to initialize a value for the screens
const Menu = "menu"
const Repetition_Exercise = "repetition_execrsie"
const Duration_Exercise = "dusration_exercise"
const Electronic_Song = "electronic_song"
const Rap_Song = "rap_song"
const Exercise_Tutorial = "exercise_tutorial"

class App extends React.Component {
  constructor(props) {
    super(props)

    // creating an array to list the exercise names under each other. name is to name the exercise and exerciseType is to call the type of exercise (repetition or duration), value is used to save the value of 0 as the initial value 
    let exercises = [
      { name: "Plank Hip Dips", exerciseType: "repetition", value: 0},
      { name: "Plank", exerciseType: "duration"},
      { name: "Lunges", exerciseType: "repetition", value: 0},
      { name: "V Sits", exerciseType: "duration"},
      { name: "Side Kicks", exerciseType: "repetition", value: 0},
    ]

    //setting the state of the array and screen and updating it 
    this.state ={
      currentExercise: exercises,
      filterNumberItems: false,
      currentScreen: Menu, 
      selectedItem: undefined
    }
  }

  updateValue(newValue) {
    let propertyName = this.state.selectedItem.exerciseType == "repetition" ? "value" : "duration"

    this.setState((initialState) => {

      let objectToUpdate = initialState.currentExercise.find( (obj) => obj === this.state.selectedItem)

      objectToUpdate[propertyName] = newValue

      return { currentExercise: this.state.currentExercise }
    })
  }

  render() {
    //creating an array for the music selection
    let music = [
      { name: "SAINt JHN", genre: "Electronic", artist: "Roses - remixed by Imanbek", image: "https://resources.tidal.com/images/e2c3556a/ab95/4fa9/9edc/721223a2ac29/640x640.jpg"},
      { name: "Stronger", genre: "Rap", artist: "Kanye West", image: "https://images.genius.com/b9d6cf24ceb76fa5d8ebf02569e16e2f.1000x1000x1.png"},
      { name: "The Business", genre: "Electronic", artist: "Tiësto", image: "https://i.scdn.co/image/ab67616d0000b273f461bbc21a9bcec43a926973"},
      { name: "Remember the Name", genre: "Rap", artist: "Fort Minor (feat. Styles of Beyond)", image: "https://i.scdn.co/image/ab67616d0000b273063fc4921a6d7fbac76e9bba"}
    ]

    //using screen and switch to connect the value of buttons to its execution. Basically, rendering a specific component based on users inputs 
    let screen 
    switch (this.state.currentScreen) {
      case Menu:
        let filteredArray = this.state.filterNumberItems ? this.state.currentExercise.filter(
          (item) => item.exerciseType === "repetition" ) : this.state.currentExercise
        
          screen = (
          <>
          <h1 style={{ color: "#055C9D", textAlign: "center"}}>
           Your Specialized Workout Routine!
          </h1>

          <p style={{textAlign: "center"}}>________________________________________________________________________________________________________________</p>
          
          <h2 style={{ color: "#0E86D4", textAlign: "center" }}>
           Begin here:
          </h2>

          <ul style={{"list-style-type": "none" }}>

            {filteredArray.map((obj, index) => 
            <li key={index}>
              <button style={{ backgroundColor: "#E3735E", 
                            color: "white", 
                            border: "none",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "flex",
                            fontSize: "20px",
                            margin: "0 auto",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px" }}
                onClick={() => this.setState({ currentScreen: obj.exerciseType === "repetition" ? Repetition_Exercise : Duration_Exercise, selectedItem: obj })}>
              {obj.name}</button>
            </li>)}
          </ul>

          <p style={{textAlign: "center"}}>________________________________________________________________________________________________________________</p>

          <h2 style={{ color: "#0E86D4", textAlign: "center"}}>
           Here is a list of fun song to listen to while you workout!
          </h2>

          <ul style={{ textAlign: "center", "list-style-type": "none" }}>
            {music.map((obj) =>
            <li>
              <button style={{ backgroundColor: "#FFC000", 
                            color: "white", 
                            border: "none",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "flex",
                            fontSize: "20px",
                            margin: "0 auto",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px" }}
              onClick={() => this.setState({ currentScreen: obj.genre === "electronic" ? Electronic_Song : Rap_Song, selectedItem: obj })}>
              {obj.name}</button>
            </li>)}
          </ul>

          <p style={{textAlign: "center"}}>________________________________________________________________________________________________________________</p>
          
          <div>
            <h3 style={{textAlign: "center"}}>Need Help?</h3>
            <button style={{ backgroundColor: "#4CAF50", 
                            color: "white", 
                            border: "none",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "flex",
                            fontSize: "15px",
                            margin: "0 auto",
                            marginBottom: "50px",
                            cursor: "pointer",
                            borderRadius: "12px" }}
                onClick = {() => this.setState({currentScreen: Exercise_Tutorial})}>Quick tutorials!</button>
          </div>
          </>
        )
      break 

      case Repetition_Exercise:
        screen = (
          <>
          <RepetitionExercise {...this.state.selectedItem} updateValue={(value) => this.updateValue(value)} />
          <button style={{ backgroundColor: "#89CFF0", 
                            color: "white", 
                            border: "none",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "flex",
                            fontSize: "13px",
                            margin: "0 auto",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px" }}
                onClick={() => this.setState({ currentScreen: Menu})}>
            Return </button>
          </>
        )
      break 

      case Duration_Exercise:
        screen = (
          <>
          <DurationExercise {...this.state.selectedItem} />
          <button style={{ backgroundColor: "#89CFF0", 
                            color: "white", 
                            border: "none",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "flex",
                            fontSize: "13px",
                            margin: "0 auto",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px" }}
                 onClick={() => this.setState({ currentScreen: Menu})}>
            Return </button>
          </>
        )
        break

        case Electronic_Song:
          screen = (
            <>
            <ElectronicSong {...this.state.selectedItem} />
            <button style={{ backgroundColor: "#DB7093", 
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
                              borderRadius: "12px"}}
                   onClick={() => this.setState({ currentScreen: Menu})}>
              Return </button>
            </>
          )
          break
          
          case Rap_Song:
            screen = (
              <>
              <RapSong {...this.state.selectedItem} />
              <button style={{ backgroundColor: "#DB7093", 
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
                                borderRadius: "12px"}}
                     onClick={() => this.setState({ currentScreen: Menu})}>
                Return </button>
              </>
            )
            break 

            case Exercise_Tutorial:
            screen = (
              <>
              <ExerciseTutorial />
              <button style={{ backgroundColor: "#880808", 
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
                                borderRadius: "12px" }}
                     onClick={() => this.setState({ currentScreen: Menu})}>
                Return </button>
              </>
            )
            break 
        
        default: 
        screen = undefined
    }
    return screen
  }
}

export default App;
