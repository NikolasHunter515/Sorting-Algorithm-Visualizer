export default async function GetHistory(userId = null, limit = 50){
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const params = new URLSearchParams({ limit });
    if(userId) params.append("user_id", userId);

    try{
        const res = await fetch(
            `${baseUrl}/api/algorithm/history?${params.toString()}`,
            { method: "GET" }
        );

        if(!res.ok){
            console.warn(`GetHistory: ${res.status}`);
            return [];
        }

        return await res.json();
    }catch(e){
        console.error(`GetHistory error: ${e.message}`);
        return [];
    }
}
