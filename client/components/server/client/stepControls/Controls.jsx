'use client'

import { useEffect, useState } from "react";
import GetSteps from "../../utils/GetSteps";
import handleSteps from "../../utils/handleSteps";
import GetArray from "../../utils/GetArray";

export default function Controls({play, setPlay, chartData, setChartData, setSteps, steps, algoName, runtime, original, speed}){
    const [started, setStarted] = useState(false);
    const [count, setCount] = useState(0);
    const [stepSize, setStepSize] = useState(0);
    const [highlightQueue, setHighlightQueue] = useState([]);
    const [tempData, setTempData] = useState(chartData);
    const [finished, setFinished] = useState(false);

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
            if(finished){
                setChartData([...original]);
            }
        }
    }

    // Fetch steps from backend
    useEffect(() => {
        if(!started) return;

        if(!original || original.length === 0){
            console.warn("original data is not ready yet");
            setPlay(false);
            return;
        }

        if(!algoName){
            console.warn("algoName is not defined");
            setPlay(false);
            return;
        }

        const fetchData = async () => {
            try {
                console.log("Fetching steps for:", algoName, "with data:", original);

                const algoSteps = await GetSteps(algoName, [...original]);

                console.log("algoSteps response:", algoSteps);

                if(!algoSteps || !algoSteps.steps){
                    console.error("Invalid response from GetSteps:", algoSteps);
                    setPlay(false);
                    return;
                }

                setSteps(algoSteps.steps);
                setStepSize(algoSteps.steps.length);
                setFinished(false);

            } catch(err) {
                console.error("Error fetching steps:", err);
                setPlay(false);
            }
        };

        fetchData();

    }, [started, finished]);

    // Read and apply steps
    useEffect(() => {
        if(!play || stepSize === 0) return;

        if(count >= stepSize){
            setPlay(false);
            setStarted(false);
            setFinished(true);
            setCount(0);
            return;
        }

        const timer = setTimeout(() => {
            const currentStep = steps[count];

            if(!currentStep){
                console.warn("No step found at index:", count);
                return;
            }

            console.log("Current step:", currentStep);

            const updated = handleSteps(currentStep, [...chartData]);

            if(updated){
                setChartData(updated);
            }

            setCount(prev => prev + 1);

        }, speed);

        return () => clearTimeout(timer);

    }, [play, count, stepSize, steps, speed]);

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