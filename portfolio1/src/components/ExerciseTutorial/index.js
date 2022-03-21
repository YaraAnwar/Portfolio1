import React from "react"

class ExerciseTutorial extends React.Component {
    constructor (props) {
        super(props)

        let tutorial = [
            { name: "Plank Hip Dips", gif: "https://media.giphy.com/media/Pihv2leEf9UKQdloXA/giphy.gif"},
            { name: "Plank", gif: "https://media.giphy.com/media/39wjDz1y3UI51qgv4K/giphy-downsized-large.gif"},
            { name: "Lunges", gif: "https://media.giphy.com/media/5q2b8XsvQaebSthZgi/giphy.gif"},
            { name: "V Sits", gif: "https://media.giphy.com/media/wHdHWMoSOkKpCP7u1E/giphy.gif"},
            { name: "Side Kicks", gif: "https://media.giphy.com/media/4acW5ZrEoFzaX5kVPe/giphy.gif"}
          ]

        this.state = {
            tutorial
          }
    }

    render() {
        let exerciseTutorial = this.state.tutorial

        return(
            <div>
            <h1 style={{ color: "#055C9D", textAlign: "center"}}>
             Here are quick tutorials on how to do each excersie!
            </h1>

            <h3 style={{paddingLeft: "15px"}}>Check the box once you have practiced the exercise.</h3>

            <ul>
                {exerciseTutorial.map((obj, tut) => (
                    <li key={tut}> 
                        <input type="checkbox"></input>
                        <div>
                            <h2>{obj.name}: </h2>
                            <img src = {obj.gif}></img>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        )
    }
}

export default ExerciseTutorial;