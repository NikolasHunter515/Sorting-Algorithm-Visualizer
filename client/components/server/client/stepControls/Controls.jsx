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
                //todo replace with selected algo.
                const algoSteps = await GetSteps(algoName);
                setSteps(algoSteps.steps);// works here need to test in play controls next.
                //console.log(algoSteps.steps)
                setStepSize(algoSteps.steps.length);
                };
                fetchData();// works here need to test in play controls next.
        }

    }, [started]);

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
                

                }, 250);
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
                <div className="col-auto">
                    <button className="btn" onClick={() => resume()}>Play {count}</button>
                    <button className="btn" onClick={() => pause()}>Pause</button>
                </div>
            </div>
        </div>
    );
}