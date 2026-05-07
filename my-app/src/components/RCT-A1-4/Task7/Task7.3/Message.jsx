import React, { Component } from 'react';

class Message1 extends Component {
  render() {
    const { message, onBack, onDelete } = this.props;
    const lines = message.text.split("\n");

    return (
      <div>
        <div className="row border m-1 text-white">
          <div className="col-6 p-2">
            <span
              className="btn btn-light btn-sm"
              onClick={onBack}
            >
              ← Back
            </span>
          </div>
          <div className="col-6 p-2 text-end">
            <span
              className="btn btn-danger btn-sm"
              onClick={onDelete}
            >
              🗑 Delete
            </span>
          </div>
        </div>

        <div className="row border m-1 bg-light">
          <div className="col-12 p-2">
            <div className="row border-bottom mb-1">
              <div className="col-3 fw-bold">From :</div>
              <div className="col-9">{message.from}</div>
            </div>
            <div className="row border-bottom mb-1">
              <div className="col-3 fw-bold">To :</div>
              <div className="col-9">{message.to}</div>
            </div>
            <div className="row border-bottom mb-2">
              <div className="col-3 fw-bold">Subject :</div>
              <div className="col-9">{message.subject}</div>
            </div>
            
            <div className="p-2">
              {lines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message1;