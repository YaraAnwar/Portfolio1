import React from "react" 

class ElectronicSong extends React.Component{
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
            <h1 style={{ color: "#055C9D", textAlign: "center"}}>
                The song: {this.state.name}</h1>
            <h2 style={{ color: "#0E86D4", textAlign: "center"}}> 
                The genre: {this.state.genre}</h2>
            <h3 style={{ color: "#003060", textAlign: "center" }}>
                The artist: {this.state.artist}</h3>
            </>
        )
    }
}

export default ElectronicSong;