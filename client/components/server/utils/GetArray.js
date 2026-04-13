
export default async function GetArray(name, size=10){
    //TODO add a baseURL variable to local props or env to remove the http local host from here.

    //size is not nessasary as there is a default value already on the backend.
    const res = await fetch(`http://localhost:5000/api/array?type=${name}&size=${size}`, 
        {
        method: "GET",
        }
    );

    const data = await res.json();
    const dta = data.map(num => ({uv : num}));


    return dta;
}