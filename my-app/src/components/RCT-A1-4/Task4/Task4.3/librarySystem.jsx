import React,{Component} from "react";
import Book3 from "./book";

class LibrarySystem2 extends Component{
    state = {
        books : [
            {
                id : 1,
                name : "Harry Potter",
                author : "J K Rowling",
                issued : false
            },
            {
                id : 2,
                name : "Wings of Fire",
                author : "A P J Abdul Kalam",
                issued : false
            },
            {
                id : 3,
                name : "The Alchemist",
                author : "Paulo Coelho",
                issued : false
            },
            {
                id : 4,
                name : "Rich Dad Poor Dad",
                author : "Robert Kiyosaki",
                issued : false
            }
        ]
    };

    handleIssue = (id) => {
        let s1 = {...this.state};
        s1.books = s1.books.map((book) =>
            book.id === id
            ? {...book , issued : true}
            : book
        );
        this.setState(s1);
    }

    handleReturn = (id) => {
        let s1 = {...this.state};
        s1.books = s1.books.map((book) =>
            book.id === id
            ? {...book , issued : false}
            : book
        );
        this.setState(s1);
    }

    render(){
        const {books} = this.state;
        const notIssued = books.filter((book) => book.issued === false);
        const issuedBooks = books.filter((book) => book.issued === true);

        return(
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand">
                            Library
                        </a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link text-white">
                                    Issued Books : {issuedBooks.length}
                                </span>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="text-black p-2">
                                Books In Library
                            </h3>
                            {
                                notIssued.map((book) =>
                                    <Book3
                                        key={book.id}
                                        book={book}
                                        onIssue={this.handleIssue}
                                    />
                                )
                            }
                        </div>

                        <div className="col-6">

                            <h3 className="text-black p-2">
                                Issued Books
                            </h3>

                            {
                                issuedBooks.map((book) =>
                                    <div
                                        key={book.id}
                                    >
                                        <ul>
                                            <li>{book.name}&nbsp;
                                                <button
                                                    className="btn btn-warning btn-sm mt-2"
                                                    onClick={() => this.handleReturn(book.id)}
                                                >Return
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LibrarySystem2;