import { useState } from "react";

export default function LudoBoard(){

    const [moves,setMoves]=useState({blue:0,green:0,
        red:0,yellow:0
    });

    let Updatemoves=()=>{
        console.log(`moves=${moves.blue}`);
        setMoves((Premoves)=>{
             return {...Premoves, blue:moves.blue=+1}
        });
    }

    return(
        <div>
        <p>Blue moves={moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={Updatemoves}>+1</button>
        <p>green moves</p>
        <button style={{backgroundColor:"green"}}>+1</button>
        <p>red moves</p>
        <button style={{backgroundColor:"red"}}>+1</button>
        <p>Yellow moves</p>
        <button style={{backgroundColor:"yellow"}}>+1</button>
        </div>
    )
}