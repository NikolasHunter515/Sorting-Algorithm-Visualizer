'use client';

export default function AlgoInfo(algoName){
    //based on the algos name this component should fetch the description from the database.
    //job for Amadou, maybe.

    return(
        <div>
            <button data-bs-toggle="collapse" data-bs-target="#demo" className="btn desc-btn">Description</button>

            <div id="demo" className="collapse desc-content">
                I am collapsed information, how do you do?
            </div>
        </div>
    );
}