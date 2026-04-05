'use client';

export default function HistoryTab(){
    //will have its own server counter part that gets the users runtime hist from the database.
    //or will just call a route on the backend that performs a query.

    return(
        <div>
            <div className="offcanvas offcanvas-start" id="hist">
                <div className="offcanvas-header">
                    <h4 className="offcanvas-title">Algo Run History</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Algo name:   Case:   Time:</p>
                </div>
            </div>


            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#hist">
            History
            </button>
        </div>
    );
}