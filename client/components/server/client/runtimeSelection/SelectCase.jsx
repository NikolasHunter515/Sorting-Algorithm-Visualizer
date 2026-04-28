'use client';

import GetArray from "../../utils/GetArray";

export default function SelectCase({setRuntimeCase, setShowSort, inputSize, setChartData}){
    //wiil update the usestate value and send backend request to generate some data of size N then sort by runtime case
    //TODO set sedn request to backend to gen some data then sort accprding to this.
    //after sending request it will update the data that is passed here, did not pass it yet.

    async function setCase(selection){
        //TODO only run fetch if selection has been updated, don't apply to random.
        setRuntimeCase(selection);
        setShowSort(false); //may addadition setting to toggle this later.

        //const res = await GetArray(selection, inputSize);
        
        //setChartData(res);
    }

    return(
        <div className="row">
            <div className="col-auto">
                <button onClick={() => setCase("sorted")} className="btn" id="runTimeBtn">Sorted</button>
            </div>
            <div className="col-auto">
                <button onClick={() => setCase("random")} className="btn" id="runTimeBtn">Random</button>
            </div>
            <div className="col-auto">
                <button onClick={() => setCase("reverse")} className="btn" id="runTimeBtn">Reverse</button>
            </div>
        </div>
    );
}