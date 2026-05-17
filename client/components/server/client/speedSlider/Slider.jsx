'use client';
import React from "react";
import {useState} from "react";
import Tips from "../tipPopup/Tips";

export default function Slide({speed, setSpeed}){
    
    function invertSpeed(s){
        return (1001 - s);
    }

    console.log(speed);
    return(
        <div className="slidecontainer">
            <input type="range" min="1" max="1000" value={speed} className="slider" onChange={(e) => setSpeed(e.target.value)}/>
        </div>
    );
}

//kind of working with exception being the slider.
/*
function invertSpeed(s){
        return (1001 - s);
    }

    console.log(speed);
    return(
        <div className="slidecontainer">
            <input type="range" min="1" max="1000" value={-speed} className="slider" onChange={(e) => setSpeed(invertSpeed(e.target.value))}/>
        </div>
    );
*/