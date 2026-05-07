import React,{Component} from "react";
import Player from "./player";

class PlayerSystem extends Component{
    state = {
        players: ["Jack","Steve","Martha","Bob","Katherine"]
    };

    render(){
        const {players} = this.state;
        return(
            <div className="container mt-4">
                <h3 className="text-left">List of Names</h3>
                {players.map((name, index) => (
                    <Player key={index} name={name} />
                ))}
            </div>
        );
    }
}
export default PlayerSystem;