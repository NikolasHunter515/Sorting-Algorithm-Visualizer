'use client';

import { useEffect, useState } from "react";
import GetAlgoInfo from "../server/utils/GetAlgoInfo";

export default function AlgoInfo({ algoName }){
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!algoName) return;

        let cancelled = false;
        const fetchInfo = async () => {
            setLoading(true);
            const data = await GetAlgoInfo(algoName);
            if(!cancelled){
                setInfo(data);
                setLoading(false);
            }
        };

        fetchInfo();
        return () => { cancelled = true; };
    }, [algoName]);

    return(
        <div>
            <button data-bs-toggle="collapse" data-bs-target="#demo" className="btn desc-btn">
                Description
            </button>

            <div id="demo" className="collapse desc-content">
                {loading && <p>Loading...</p>}

                {!loading && !info && (
                    <p>No description available for {algoName}.</p>
                )}

                {!loading && info && (
                    <div>
                        <h5>{info.name}</h5>
                        {info.category && <p><strong>Category:</strong> {info.category}</p>}
                        {info.description && <p>{info.description}</p>}
                        <ul>
                            {info.best_case && <li><strong>Best:</strong> {info.best_case}</li>}
                            {info.average_case && <li><strong>Average:</strong> {info.average_case}</li>}
                            {info.worst_case && <li><strong>Worst:</strong> {info.worst_case}</li>}
                            {info.space_complexity && <li><strong>Space:</strong> {info.space_complexity}</li>}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
