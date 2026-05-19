import shortenName from "./shortenName";

export default async function GetSteps(name, algoData){
    //dont worry for now, but should couple in some auth token for this.
    //retirve sorting steps from backend.
    const tempDta = algoData.map(item => (item.uv));
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    try{
        const shortName = shortenName(name);

        if(shortName == null){
            throw new Error(`Incorrect Algo name: ${name}`);
        }

        console.log(`Shortened name: ${shortName}`);

        const res = await fetch(`${baseUrl}/api/algorithm/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                algorithm: shortName,
                array: tempDta
            })
        });

        if(!res.ok){
            const text = await res.text();
            throw new Error(`API ${res.status}: ${text}`);
        }

        const data = await res.json();
        return data;
    }catch(e){
        console.error(`GetSteps error: ${e.message}`);
        return null;
    }
}