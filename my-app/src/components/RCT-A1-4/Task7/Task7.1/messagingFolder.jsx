import React, { Component } from 'react';

class MessagingFolder extends Component {

  getIcon = (read) =>
    read ? "✉" : "📧";

  getRowColor = (read) =>
    read ? "bg-light" : "bg-white";

  render() {
    const { messages } = this.props;

    return (
      <div>
        <div className="row border m-1 bg-dark text-white">
          <div className="col-1 p-2 fw-bold"></div>
          <div className="col-4 p-2 fw-bold">From / To</div>
          <div className="col-7 p-2 fw-bold">Subject</div>
        </div>

        {messages.map(m => (
          <div
            key={m.id}
            className={"row border m-1 " + this.getRowColor(m.read)}
          >
            <div className="col-1 p-2">{this.getIcon(m.read)}</div>
            <div className={"col-4 p-2 " + (m.read ? "" : "fw-bold")}>
              {m.sent ? "To: " + m.to : m.from}
            </div>
            <div className={"col-7 p-2 " + (m.read ? "" : "fw-bold")}>
              {m.subject}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MessagingFolder;