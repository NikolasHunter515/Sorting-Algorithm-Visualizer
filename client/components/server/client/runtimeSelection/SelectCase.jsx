'use client';

export default function SelectCase({setRuntimeCase, setShowSort}){
    //wiil update the usestate value and send backend request to generate some data of size N then sort by runtime case
    //TODO set sedn request to backend to gen some data then sort accprding to this.
    //after sending request it will update the data that is passed here, did not pass it yet.

    function setCase(selection){
        setRuntimeCase(selection);
        setShowSort(false); //may addadition setting to toggle this later.
    }

    return(
        <div className="row">
            <div className="col-auto">
                <button onClick={() => setCase(1)} className="btn">Sorted</button>
                <button onClick={() => setCase(2)} className="btn">Random</button>
                <button onClick={() => setCase(3)} className="btn">Reverse</button>
            </div>
        </div>
    );
}