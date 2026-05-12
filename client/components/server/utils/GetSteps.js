import shortenName from "./shortenName";

export default async function GetSteps(name){
    //dont worry for now, but should couple in some auth token for this.
    //retirve sorting steps from backend.

    try{
        const shortName = shortenName(name);

        if(shortName == null){
            throw new Error(`Incorrect Algo name`);
        }

        console.log(`Shortened name: ${shortName}`);
        //returns some json error if there is no data to sort.
        const res = await fetch(`http://localhost:5000/api/algorithm?type=${shortName}`);
        const data = await res.json();

        //console.log(data);// should it just return the steps?
        return data;
    }catch(e){
        console.log(`Error: ${e.message}`);
        //should pass error into a use state to display a error popup to the user.
        //re-throw to be stored in above useState to be displayed to user.
    }
}