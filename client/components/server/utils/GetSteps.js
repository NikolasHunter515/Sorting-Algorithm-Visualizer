import shortenName from "./shortenName";

export default async function GetSteps(name, algoData){
    //dont worry for now, but should couple in some auth token for this.
    //retirve sorting steps from backend.
    const tempDta = algoData.map(item => (item.uv));
    const arr = [1,2,3,4];

    try{
        const shortName = shortenName(name);

        if(shortName == null){
            throw new Error(`Incorrect Algo name`);
        }

        console.log(`Shortened name: ${shortName}`);
        //returns some json error if there is no data to sort.
        //const res = await fetch(`http://localhost:5000/api/algorithm?algorithm=${shortName}&array=${data}`);
        const res = await fetch('http://localhost:5000/api/algorithm/', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000/' }, 
            body: JSON.stringify({ 
                algorithm: shortName, 
                array: tempDta
            }) 
            }); 
        console.log(`steps: ${res}`);

        const data = await res.json();

        //console.log(data);// should it just return the steps?
        return data;
    }catch(e){
        console.log(`Error: ${e.message}`);
        //should pass error into a use state to display a error popup to the user.
        //re-throw to be stored in above useState to be displayed to user.
    }
}