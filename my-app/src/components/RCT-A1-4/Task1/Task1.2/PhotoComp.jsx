import React,{Component} from "react";

class PhotComp extends Component {
    bgColor = (param) => param === "like" ? "bg-success" : param === "dislike" ? "bg-warning": "bg-light";

    render(){
        const {photo, onLike, onDislike,index} = this.props;
        const {img, like, dislike, myOption} = photo;
        return (
            <div className={"col-4 border text-center " + this.bgColor(myOption)}>
                <img src={img} alt="photo"/>
                <br/>
                <i className= {myOption === "like" ? "fas fa-thumbs-up" : "far fa-thumbs-up" } onClick={() => onLike(index)}>{like}</i> 
                <i className={myOption === "dislike" ? "fas fa-thumbs-down" : "far fa-thumbs-down"} onClick={() => onDislike(index)}>{dislike}</i>
            </div>
        );
    }
}
export default PhotComp;