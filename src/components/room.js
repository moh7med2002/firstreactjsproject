import React from "react";
import { Link } from "react-router-dom";
export default function Room(props){
    let str=props.title.split(" ").join("-");
    return(
        <div className="room">
            <img src={props.main_img} alt=""/>
            <h4 className="fs-6">{props.title}</h4>
            <span className="price">$ {props.price} <span>per night</span></span>
            <Link className="room-btn" to={`rooms/${props.id}`}>FEATURES</Link>
        </div>
    )
}