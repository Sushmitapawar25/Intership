import React,{Component} from "react";

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link active">
                                MySystem
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Products(10)
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Quantity(24)
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;