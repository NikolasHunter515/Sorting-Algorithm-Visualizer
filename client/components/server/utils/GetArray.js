
export default async function GetArray(name, size=10){
    //TODO add a baseURL variable to local props or env to remove the http local host from here.

    //TODO add a try catch block to handle values out of range from 10 to 100. No negative values.
    //size is not nessasary as there is a default value already on the backend.
    const res = await fetch(`http://localhost:5000/api/array?type=${name}&size=${size}`, 
        {
        method: "GET",
        }
    );

    //add a fill field for this and use the default that will be defined in the css file. or hardcode it
    const data = await res.json();
    const dta = data.map(num => ({uv : num, fill: "#3AC3C5"})); // this might be responsible for larger value animation slow down.


    return dta;
}