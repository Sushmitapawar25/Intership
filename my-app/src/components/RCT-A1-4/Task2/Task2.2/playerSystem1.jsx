import React,{Component} from "react";
import Player1 from "./player1";

class PlayerSystem1 extends Component{
    state = {
        players: ["Jack","Steve","Martha","Bob","Katherine"]
    };

    render(){
        const {players} = this.state;
        return(
            <div className="container mt-4">
                <h3 className="text-left">List of Names</h3>
                {players.map((name, index) => (
                    <Player1 key={index} name={name} />
                ))}
            </div>
        );
    }
}
export default PlayerSystem1;