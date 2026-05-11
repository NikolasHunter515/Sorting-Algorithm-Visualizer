
export default async function GetArray(name, size=10){
    const basePort = process.env.NEXT_PUBLIC_API_URL;
    console.log(`the base url ${basePort}`);
    const res = await fetch(`http://localhost:${basePort}/api/array?type=${name}&size=${size}`,
        {
        method: "GET",
        }
    );

    //add a fill field for this and use the default that will be defined in the css file. or hardcode it
    const data = await res.json();
    const dta = data.map(num => ({uv : num, fill: "#2117ec"})); // this might be responsible for larger value animation slow down.


    return dta;
}