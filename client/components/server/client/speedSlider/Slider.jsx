'use client';
import React from "react";
import {useState} from "react";
import Tips from "../tipPopup/Tips";

export default function Slide({speed, setSpeed}){
    
    console.log(speed);
    return(
        <div className="slidecontainer">
            <input type="range" min="50" max="1000" value={speed} className="slider" onChange={(e) => setSpeed(e.target.value)}/>
        </div>
    );
}