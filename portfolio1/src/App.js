// Referenced for list component idea of buttons: https://www.robinwieruch.de/react-list-component/
// reference for using this.state and arrays: https://www.robinwieruch.de/react-state-array-add-update-remove/

import './App.css';
import React from 'react';
import DurationExercise from './components/DurationExercise' ;
import RepetitionExercise from './components/RepetitionExcercise'; 
import RapSong from './components/RapSong';
import ElectronicSong from './components/ElectronicSong';
import Roses from './components/SongClips/';

//using const decleration to initialize a value for the screens
const Menu = "menu"
const Repetition_Exercise = "repetition_execrsie"
const Duration_Exercise = "dusration_exercise"
const Electronic_Song = "electronic_song"
const Rap_Song = "rap_song"

class App extends React.Component {
  constructor(props) {
    super(props)

    // creating an array to list the exercise names under each other. name is to name the exercise and exerciseType is to call the type of exercise (repetition or duration), value is used to save the value of 0 as the initial value 
    let exercises = [
      { name: "Push Ups", exerciseType: "repetition", value: 0},
      { name: "Bicycling", exerciseType: "duration"},
      { name: "Jumping Jacks", exerciseType: "repetition", value: 0},
      { name: "Running", exerciseType: "duration"},
      { name: "Sit Ups", exerciseType: "repetition", value: 0},
    ]

    //let music = [
     // { song: "SAINt JHN", genre: "electronic", artist: "Roses - remixed by Imanbek"},
     // { song: "Stronger", genre: "rap", artist: "Kanye West"},
     // { song: "The Business", genre: "electronic", artist: "Tiësto"},
     // { song: "Stronger", genre: "rap", artist: "Kanye West"}
    //]

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
      let objectToUpdate = initialState.currentExercise.find(
        (obj) => obj === this.state.selectedItem
      )
      objectToUpdate[propertyName] = newValue
      return { currentExercise: this.state.currentExercise }
    })
  }

  render() {
    let music = [
      { name: "SAINt JHN", genre: "Electronic", artist: "Roses - remixed by Imanbek", sound: Roses},
      { name: "Stronger", genre: "Rap", artist: "Kanye West"},
      { name: "The Business", genre: "Electronic", artist: "Tiësto"},
      { name: "Remember the Name", genre: "Rap", artist: "Fort Minor (feat. Styles of Beyond)"}
    ]

    //using screen and switch to connect the value of buttons to its execution. Basically, rendering a specific component based on users inputs 
    let screen 
    switch (this.state.currentScreen) {
      case Menu:
        let filteredArray = this.state.filterNumberItems
        ? this.state.currentExercise.filter(
          (item) => item.exerciseType === "repetition"
        )
        : this.state.currentExercise
        screen = (
          <>
          <h1 style={{
            color: "#055C9D", textAlign: "center"
         }}>Your Specialized Workout Routine!</h1>
          <p style={{
            color: "#0E86D4", marginLeft: "15px"
         }}>Begin here:</p>
          <ul id="exList" style={{ textAlign: "center"
         }}>
            {filteredArray.map((obj, index) => 
            <li key={index} style={{ textAlign: "center"
          }}>
              <button style={{ backgroundColor: "#E3735E", 
                            color: "white", 
                            border: "none",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "flex",
                            fontSize: "12px",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px"
                }}
                 onClick={() => this.setState({
                currentScreen: 
                obj.exerciseType === "repetition"
                ? Repetition_Exercise
                : Duration_Exercise,
                selectedItem: obj
              })
            }
            >{obj.name}</button>
            </li>)}
          </ul>

          <h2 style={{ color: "#0E86D4", marginLeft: "15px"}}>
           Here is a list of fun song to listen to while you workout!</h2>
          <ul>
            {music.map((obj) =>
            <li>
              <button style={{ backgroundColor: "#E3735E", 
                            color: "white", 
                            border: "none",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "flex",
                            fontSize: "12px",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px"
                }}
              onClick={() => this.setState({
                currentScreen: 
                obj.genre === "electronic"
                ? Electronic_Song
                : Rap_Song,
                selectedItem: obj
              }) 
            }>{obj.name}</button>
            </li>)}
          </ul>
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
                            fontSize: "12px",
                            margin: "0 auto",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px"
                }}
                onClick={() => this.setState({ currentScreen: Menu})}>
            Return
          </button>
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
                            fontSize: "12px",
                            margin: "0 auto",
                            marginBottom: "10px",
                            cursor: "pointer",
                            borderRadius: "12px"
                }}
                 onClick={() => this.setState({ currentScreen: Menu})}>
            Return 
          </button>
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
                              borderRadius: "12px"
                  }}
                   onClick={() => this.setState({ currentScreen: Menu})}>
              Return 
            </button>
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
                                borderRadius: "12px"
                    }}
                     onClick={() => this.setState({ currentScreen: Menu})}>
                Return 
              </button>
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
