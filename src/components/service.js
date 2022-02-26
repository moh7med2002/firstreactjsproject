import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Service(props){
    return(
        <div className="box-service">
            <FontAwesomeIcon icon={props.icon} className='serv-icon'/>
            <h3 className="fs-6">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}