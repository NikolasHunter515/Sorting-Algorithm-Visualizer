'use client';

import { useState } from "react";
import GetHistory from "../../utils/GetHistory";

export default function HistoryTab(){
    const [runs, setRuns] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadHistory = async () => {
        setLoading(true);
        const data = await GetHistory();
        setRuns(data);
        setLoading(false);
    };

    return(
        <div>
            <div className="offcanvas offcanvas-start" id="hist">
                <div className="offcanvas-header">
                    <h4 className="offcanvas-title">Algo Run History</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    {loading && <p>Loading...</p>}

                    {!loading && runs.length === 0 && (
                        <p>No runs yet.</p>
                    )}

                    {!loading && runs.length > 0 && (
                        <ul className="list-unstyled">
                            {runs.map(run => (
                                <li key={run.id} style={{ marginBottom: "0.75rem" }}>
                                    <div><strong>{run.algorithms?.name || "Unknown"}</strong></div>
                                    <div>Case: {run.array_state}</div>
                                    <div>Time: {run.execution_time}s</div>
                                    <small>{new Date(run.created_at).toLocaleString()}</small>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <button
                className="btn"
                id="hist-btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#hist"
                onClick={loadHistory}
            >
                History
            </button>
        </div>
    );
}
