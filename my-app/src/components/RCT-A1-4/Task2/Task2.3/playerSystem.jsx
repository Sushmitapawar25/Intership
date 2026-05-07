import React,{Component} from "react";
import Player2 from "./player";

class PlayerSystem2 extends Component{
    state = {
        players: [
            {name: "Jack",      score: 21 },
            {name: "Steve",     score: 30 },
            {name: "Martha",    score: 44 },
            {name: "Bob",       score: 15 },
            {name: "Katherine", score: 28 }
        ],
    };

    addPoint = (index) => {
        const {players} = [...this.state];
        players[index] = { ...players[index], score: players[index].score + 1 };
        this.setState(players);
    }
    render(){
        const {players} = this.state;
        return(
            <div className="container">
                <h4 className="m-3">List of Names</h4>
                    {players.map((p, index) => (
                    <Player2 key={index} player={p} onAddPoint={() => this.addPoint(index)}/>
                ))}
            </div>
        );
    }
}
export default PlayerSystem2;