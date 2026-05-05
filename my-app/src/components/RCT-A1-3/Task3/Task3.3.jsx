import React, { Component } from 'react';


class Append2 extends Component {
    state = {
        txt: ""
    };

    add = (char) => {
        this.setState({ txt: this.state.txt + char });
    }

    backspace = () => {
        this.setState({ txt: this.state.txt.substring(0, this.state.txt.length - 1) });
    }

    clear = () => {
        this.setState({ txt: "" });
    }

    render() {
        return (
        <div className="container mt-4">
            <button className="btn btn-primary me-2" onClick={() => this.add("A")}>A</button>
            <button className="btn btn-primary me-2" onClick={() => this.add("B")}>B</button>
            <button className="btn btn-primary me-2" onClick={() => this.add("C")}>C</button>
            <button className="btn btn-primary me-2" onClick={() => this.add("D")}>D</button>
            <h3 className="mt-3">Text = {this.state.txt}</h3>
            <button className="btn btn-primary me-2" onClick={this.backspace}>BackSpace</button>
            <button className="btn btn-primary me-2" onClick={this.clear}>Clear</button>
        </div>
    );
  }
}

export default Append2;