'use client'

export default function({play, setPlay, inputSize, runtimeCase, setShowSort}){
    //should send a request to backend to start soring, will recieve the steps then store in data.
    //will update the play toggle after recieving the data
    //need to think of way to keep track of when we should request data or just control the animation.
    //will be one of the more complex components.

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
        }
    }

    return(
        <div>
            <div className="row">
                <div className="col-auto">
                    <button className="btn" onClick={() => resume()}>Play</button>
                    <button className="btn" onClick={() => pause()}>Pause</button>
                </div>
            </div>
        </div>
    );
}