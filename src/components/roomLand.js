import React from "react";
import room_2 from '../Image/room-2.jpeg'
import { useNavigate } from "react-router";

export default function Rommland(){
    let navg=useNavigate();
    return(
        <div className="land" style={{backgroundImage: `url(${room_2})`}}>
            <div className="text p-4">
                <h2 className="fs-1">our romms</h2>
                <button onClick={()=>navg(-1)}>return home</button>
            </div>
        </div>
    )
}