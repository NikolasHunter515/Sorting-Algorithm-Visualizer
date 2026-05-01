import shortenName from "./shortenName";

export default async function GetSteps(name) {
    const shortName = shortenName(name);

    if (shortName == null) {
        throw new Error(`Invalid algorithm name: "${name}"`);
    }

    console.log(`Fetching steps for: ${shortName}`);

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/api/algorithm?type=${shortName}`);

    if (!res.ok) {
        throw new Error(`Backend returned ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
}