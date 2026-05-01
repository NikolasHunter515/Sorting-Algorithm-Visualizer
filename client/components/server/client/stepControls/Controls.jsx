'use client'

import { useEffect, useState } from "react";
import GetSteps from "../../utils/GetSteps";
import handleSteps from "../../utils/handleSteps";

export default function StepControls({
    play,
    setPlay,
    chartData,
    setChartData,
    setSteps,
    steps,
    algoName
}) {

    const [started, setStarted] = useState(false);
    const [count, setCount] = useState(0);
    const [stepSize, setStepSize] = useState(0);
    const [error, setError] = useState(null);

    // =========================
    // PLAY / PAUSE CONTROLS
    // =========================
    function pause() {
        setPlay(false);
    }

    function resume() {
        if (!algoName) {
            console.error("No algorithm selected");
            return;
        }

        setError(null);
        setPlay(true);
        setStarted(true);
    }

    // =========================
    // FETCH STEPS
    // =========================
    useEffect(() => {
        if (!started || !algoName) return;

        const fetchData = async () => {
            try {
                const res = await GetSteps(algoName);

                console.log("GET STEPS RESPONSE:", res);

                const extractedSteps = res.steps ?? res.data ?? res;

                if (!Array.isArray(extractedSteps)) {
                    throw new Error("Invalid steps format received from backend");
                }

                setSteps(extractedSteps);
                setStepSize(extractedSteps.length);
                setCount(0);

            } catch (err) {
                console.error("Fetch error:", err.message);
                setError(err.message);
                setPlay(false);
                setStarted(false);
            }
        };

        fetchData();
    }, [started, algoName, setSteps]);

    // =========================
    // ANIMATION LOOP
    // =========================
    useEffect(() => {
        if (!play || stepSize === 0 || !steps?.length) return;

        if (count >= stepSize) {
            setPlay(false);
            setStarted(false);
            setCount(0);
            return;
        }

        const timer = setTimeout(() => {
            const step = steps[count];

            if (!step) return;

            const updated = handleSteps(step, chartData);

            if (updated) {
                setChartData(updated);
            }

            setCount(prev => prev + 1);

        }, 250);

        return () => clearTimeout(timer);

    }, [play, count, steps, stepSize, chartData, setChartData, setPlay]);

    // =========================
    // UI
    // =========================
    return (
        <div>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="row">
                <div className="col-auto">
                    <button className="btn" onClick={resume} disabled={!algoName}>
                        Play {count}
                    </button>

                    <button className="btn" onClick={pause}>
                        Pause
                    </button>
                </div>
            </div>
        </div>
    );
}