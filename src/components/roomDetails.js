import React from "react";
import { useParams,useNavigate  } from "react-router";

import data from "../data";
export default function Roomdetail(props){
    let navg=useNavigate();
    let {usertitle}=useParams();
    console.log(usertitle)
    let[roomsFeatured,setroomFeatured]=React.useState(data[2].allRoomsData);
    let result= roomsFeatured.filter(room=> room.id===parseInt(usertitle));
    console.log(result[0]);
    
    let images=result[0].images.map((img,index)=>{
        return(
            <img alt="" src={img} key={index}/>
        )
    });

    let extras=result[0].extras.map((tex,index)=>{
        return(
            <p key={index}>- {tex}</p>
        )
    })
    return(
        <div className="room-detail">
            <div className="landing-div" style={{ backgroundImage: `url(${result[0].main_img})` }}>
                <div className="landing-text p-4">
                    <h3 className="fs-1">{result[0].title} deluxe room</h3>
                    <button onClick={()=>navg(-1)}>back to rooms</button>
                </div>
            </div>
            <div className="container">
                <div className="images-container">
                    {images}
                </div>
                <div className="details-info">
                    <div className="details">
                        <h4>details</h4>
                        <p>{result[0].details}</p>
                    </div>
                    <div className="info">
                        <h4>info</h4>
                        <p>Price : $ {result[0].price}</p>
                        <p>Size : $ {result[0].size} SQFT</p>
                        <p>Max Capicity : {result[0].capacity}</p>
                        <p>Pets {result[0].isPets?"Allowed" : "Not Allowed"}</p>
                        <p>Free Breakfast {result[0].isBreakfast?"Include":"Not Include"}</p>
                    </div>
                </div>
                <div className="extras">
                    <h5>extras</h5>
                    <div className="extras-content">
                        {extras}
                    </div>
                </div>
            </div>
        </div>
    )
}