import React from "react" 

class RapSong extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            genre: this.props.genre,
            artist: this.props.artist,
            image: this.props.image
        }
    }

    render() {
        return (
            <>
            <div>
            <img src = {this.state.image} style={{maxWidth: "30%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "20px"}}></img>
            </div>
            <h1 style={{ color: "#39375B", textAlign: "center"}}>
                SONG: {this.state.name}
            </h1>
            <h2 style={{ color: "#745C97", textAlign: "center"}}> 
                GENRE: {this.state.genre}
            </h2>
            <h3 style={{ color: "#F5B0CB", textAlign: "center" }}>
                ARTIST: {this.state.artist}
            </h3>
            </>
        )
    }
}

export default RapSong;