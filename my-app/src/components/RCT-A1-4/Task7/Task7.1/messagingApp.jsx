import React, { Component } from 'react';
import MessagingFolder from './messagingFolder';

class MessagingApp extends Component {
  state = {
    folder: "All",
    messages: [
      {id: 121, sent: false, from: "tweets@twitter.com",  to: "jack@test.com",     subject: "18 tweets from those you follow",         folder: "Social", read: true  },
      {id: 141, sent: true,  from: "jack@test.com",       to: "mary@test.com",     subject: "Bug 461 in Customer Flow",                folder: "Sent",   read: false },
      {id: 158, sent: false, from: "email@facebook.com",  to: "jack@test.com",     subject: "New post from William Jones",             folder: "Social", read: true  },
      {id: 177, sent: true,  from: "jack@test.com",       to: "williams@test.com", subject: "Movie tomorrow",                          folder: "Sent",   read: false },
      {id: 179, sent: false, from: "williams@test.com",   to: "jack@test.com",     subject: "Re: Movie tomorrow",                      folder: "Inbox",  read: false },
      {id: 194, sent: false, from: "retweet@twitter.com", to: "jack@test.com",     subject: "Your tweet has been retweeted by Thomas", folder: "Social", read: false },
      {id: 204, sent: true,  from: "mary@test.com",       to: "jack@test.com",     subject: "To do on Friday",                         folder: "Inbox",  read: false },
      {id: 255, sent: true,  from: "mary@test.com",       to: "jack@test.com",     subject: "Release 0.8.4 deployed",                  folder: "Inbox",  read: false },
      {id: 278, sent: false, from: "mary@test.com",       to: "jack@test.com",     subject: "Re: Bug 461 in Customer Flow",            folder: "Inbox",  read: false },
      {id: 281, sent: true,  from: "jack@test.com",       to: "mary@test.com",     subject: "Re: Re: Bug 461 in Customer Flow",        folder: "Sent",   read: false },
      {id: 289, sent: false, from: "email@facebook.com",  to: "jack@test.com",     subject: "5 Shares, 2 Posts from your friends",     folder: "Social", read: true  }
    ]
  };

  setFolder = (folder) => { this.setState({ folder }); }

  render() {
    const { folder, messages } = this.state;
    const filtered = folder === "All"
      ? messages
      : messages.filter(m => m.folder === folder);

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-2 bg-dark">
            <div className="row m-1 bg-dark text-white">
              <div className="col-12 p-2 fw-bold">Folders</div>
            </div>
            {["All", "Inbox", "Social", "Sent"].map((f, index) => (
              <div
                key={index}
                className={"row border m-1 " + (folder === f ? "bg-light text-black" : "bg-light")}
                onClick={() => this.setFolder(f)}
              >
                <div className="col-12 p-2">{f}</div>
              </div>
            ))}
          </div>
          <div className="col-10">
            <MessagingFolder messages={filtered} />
          </div>
        </div>
      </div>
    );
  }
}

export default MessagingApp;