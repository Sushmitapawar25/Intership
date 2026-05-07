import React,{Component} from "react";

class Book1 extends Component{
    render(){
        const {book,onIssue} = this.props;
        return(

            <div
                className="p-3 mb-2 rounded"
                style={{backgroundColor:"#f8d7da"}}
            >
                <h5>{book.name}</h5>

                <div>{book.author}</div>
                <button
                    className="btn btn-light btn-sm mt-2"
                    onClick={() => onIssue(book.id)}
                >
                    Issue
                </button>
            </div>
        )
    }
}

export default Book1;