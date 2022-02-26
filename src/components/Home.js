import React from "react";
import image from '../Image/defaultBcg.jpeg'
import { useNavigate } from "react-router";

export default function Home(){
    let navg=useNavigate();
    return(
        <div className="home" style={{ backgroundImage: `url(${image})` }}>
            <div className="home-text container p-4">
                <h2 className="fs-1">luxurious rooms</h2>
                <h4 className="fs-6">deluxe rooms starting at $299</h4>
                <button className="fs-6" onClick={()=>navg('rooms')}>our rooms</button>
            </div>
        </div>
    )
}