'use client'

import { useEffect, useState } from "react";
import GetSteps from "../../utils/GetSteps";
import handleSteps from "../../utils/handleSteps";

export default function({play, setPlay, chartData, setChartData, setSteps, steps, algoName}){
    //should send a request to backend to start soring, will recieve the steps then store in data.
    //will update the play toggle after recieving the data
    //need to think of way to keep track of when we should request data or just control the animation.
    //will be one of the more complex components.
    const [started, setStarted] = useState(false);
    const [count, setCount] = useState(0);
    const [stepSize, setStepSize] = useState(0);
    const [highlightQueue, setHighlightQueue] = useState([]);//put the queue in localstorage
    const [btnSize] = useState(5);

    function pause(){
        if(play){
            setPlay(false);
            console.log("Pausing");
        }
    }

    function resume(){
        if(!play){
            setPlay(true);
            console.log("Resuming");
            if(!started){
                setStarted(true);
            }

        }
    }

    //fetch steps from backend
    useEffect(() => {
        if(started){
            //fetch the steps
            const fetchData = async () => {
                const algoSteps = await GetSteps(algoName, chartData);
                setSteps(algoSteps.steps);// works here need to test in play controls next.
                //console.log(algoSteps.steps)
                setStepSize(algoSteps.steps.length);
                };
                fetchData();// works here need to test in play controls next.
        }

    }, [started]);
//not sure this was needed to solve the unhighlighting problem
    /*
    useEffect(() => {
        setHighlightQueue(localStorage.getItem("highlightQueue"));
        console.log(highlightQueue);
    }, []);*/

    //console.log(steps[0]);
    //read steps
    useEffect(() => {
        if(stepSize === 0) return;

        if(play){//issue only runs once as the original array is tampered with and the indexing is messed up.
            setTimeout(() => {
                setCount((count) => count + 1);
                console.log(steps[count]);
                //console.log(steps[count].indices);

                const updated = handleSteps(steps[count], chartData);
                if(updated != null){
                    setChartData(updated);
                }
                else{
                    setCount((count) => count = 0);
                }
                

                }, 500);//use 250 as default, also should be passed as a parameter
            if(count >= stepSize - 1 || count < 0){
                //count stops after reaching value + 1
                setPlay(false);
                setStarted(false);
                setCount(0);
            }
        }

    }, [play, count, steps]);

    //TODO write method to get steps from backend if not clicked
    //TODO write use effect to test pause play with auto reload if completed.
    //FIXME altering the master data, meaning need to make copy to alter.

    return(
        <div>
            <div className="row">
                <div className="col-auto" id="controlBox">
                    <button className="btn control-btn" onClick={() => resume()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                    </svg>
                    </button>
                    <button className="btn control-btn" onClick={() => pause()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}