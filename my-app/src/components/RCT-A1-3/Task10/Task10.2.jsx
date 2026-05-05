import React, { Component } from 'react';

class CodeApp1 extends Component {
    state = {
        codeType: -1,
        codeTypes: [
            { name: "ABC123", label: "Code:ABC123" },
            { name: "0-9", label: "Code:0-9" },
            { name: "MN012", label: "Code:MN012" }
        ],
        codemaker: [
            ["A", "B", "C", "1", "2", "3"],
            ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            ["M", "N", "0", "1", "2"]
        ],
        codes: [],
        newCode: ""
    };

    selectType = (index) => {
        this.setState({ codeType: index, newCode: "" });
    }

    addChar = (char) => {
        this.setState({ newCode: this.state.newCode + char });
    }

    addNewCode = () => {
        const { newCode, codes } = this.state;
        if (newCode === "") {
            alert("Code cannot be empty");
            return;
        }
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
        const { codeType, codeTypes, codemaker, codes, newCode } = this.state;

        return (
            <div className="container mt-4">
                <h2>Create New Code</h2>

                <div className="mb-3">
                    {codeTypes.map((ct, index) => (
                        <button
                            key={index}
                            className="btn btn-primary me-2"
                            onClick={() => this.selectType(index)}
                        >
                            {ct.label}
                        </button>
                    ))}
                </div>

                {codeType !== -1 && (
                    <div>
                        <p>Code Type : {codeTypes[codeType].name}</p>
                        <p>Code so far : {newCode}</p>

                        {/* Character Buttons based on selected code type */}
                        <div className="mb-3">
                            {codemaker[codeType].map((c, index) => (
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
                    </div>
                )}

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

export default CodeApp1;