import React,{Component} from "react";

class Player extends Component{

    render(){
        const {name} = this.props;
        return(
            <div className="text-primary m-2 text-center">
                {name}
            </div>
        );
    }
}
export default Player;