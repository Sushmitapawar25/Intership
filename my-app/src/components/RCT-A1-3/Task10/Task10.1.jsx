import React, { Component } from 'react';


class CodeApp extends Component {
    state = {
        newCode: "",
        codes: []
    };

    addChar = (char) => {
        this.setState({ newCode: this.state.newCode + char });
    }

    addNewCode = () => {
        const { newCode, codes } = this.state;
        if (codes.includes(newCode)) {
            alert("Code already exists");
        } else {
            this.setState({ codes: [...codes, newCode], newCode: "" });
        }
    }

    clearCode = () => {
        this.setState({ newCode: "" });
    }

    render() {
        const { newCode, codes } = this.state;
        const chars = ["A", "B", "C", "1", "2", "3"];

        return (
            <div className="container mt-4">
                <h2>Create New Code</h2>
                <p>Code so far : {newCode}</p>

                <div className="mb-3">
                    {chars.map((c, index) => (
                        <button
                            key={index}
                            className="btn btn-warning me-2 mb-2"
                            onClick={() => this.addChar(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                
                <button className="btn btn-primary me-3" onClick={this.addNewCode}>Add New Code</button>
                <button className="btn btn-primary" onClick={this.clearCode}>Clear Code</button>

            
                <h4 className="mt-4">List of Codes Created</h4>
                <ul>
                    {codes.map((code, index) => (
                        <li key={index}>{code}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CodeApp;