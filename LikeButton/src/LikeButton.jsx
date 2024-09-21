import { useState } from "react";

export default function LikeButton(){
    let [isLiked,setisLiked]=useState(false);

    let toggleLike=()=>{
        setisLiked(!isLiked);
    };
    let styles={
        color:"red",
    }
    return(
        <div style={styles}>
            <p onClick={toggleLike}>
                {isLiked ?
                (<i className="fa-regular fa-heart"></i> ) :
                (<i className="fa-solid fa-heart"></i>) 
                
                }
            </p>
        </div>
    )
}