import React from "react" 

class RapSong extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            genre: this.props.genre,
            artist: this.props.artist
        }
    }

    render() {
        return (
            <>
            <h1 style={{ color: "#B87333", textAlign: "center"}}>
                SONG: {this.state.name}
            </h1>
            <h2 style={{ color: "#0E86D4", textAlign: "center"}}> 
                GENRE: {this.state.genre}
            </h2>
            <h3 style={{ color: "#D27D2D", textAlign: "center" }}>
                ARTIST: {this.state.artist}</h3>
            </>
        )
    }
}

export default RapSong;