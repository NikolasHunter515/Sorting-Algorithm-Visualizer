export default async function GetArray(name, size = 10) {
    const basePort = process.env.NEXT_PUBLIC_API_URL;
    console.log(`the base url ${basePort}`);
    
    const res = await fetch(`http://localhost:${basePort}/api/array?type=${name}&size=${size}`, {
        method: "GET",
    });

    const data = await res.json();
    const dta = data.map(num => ({ uv: num, fill: "#3AC3C5" }));

    return dta;
}