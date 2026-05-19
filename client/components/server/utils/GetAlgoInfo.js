export default async function GetAlgoInfo(name){
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    try{
        const res = await fetch(
            `${baseUrl}/api/algorithm/info?name=${encodeURIComponent(name)}`,
            { method: "GET" }
        );

        if(!res.ok){
            console.warn(`GetAlgoInfo: ${res.status} for ${name}`);
            return null;
        }

        return await res.json();
    }catch(e){
        console.error(`GetAlgoInfo error: ${e.message}`);
        return null;
    }
}
