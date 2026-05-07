import React,{Component} from "react";
import NavBar from "./Navbar";

class MainComponent extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div className="container mt-3">
                    <div>Count : 10</div>
                    <div>Quantity : 24</div>
                </div>

            </div>
        )
    }
}

export default MainComponent;