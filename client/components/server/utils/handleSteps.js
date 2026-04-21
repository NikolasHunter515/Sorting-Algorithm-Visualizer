
function swap(data, a, b){
    const temp = data[a];
    console.log(`swaping ${a} with ${b}`);
    data[a] = data[b];
    data[b] = temp;
    return data;
}

function highlight(data, index){
    data[index].fill = "#1F77b4";
    return data;
}

function replace(data, index, value){
    data[index].uv = value;
    return data;
}

export default function handleSteps(step, data){
    let tempDta = data.map(item => ({ ...item }));
    //tempDta[1].uv = 90;
    //console.log(tempDta[1].uv);
    //console.log(step);

    switch(step.type){
        case "highlight":
            tempDta = highlight(tempDta, step.indices[0]);//issue here
            return tempDta;
        case "swap":
            tempDta = swap(tempDta, step.indices[0], step.indices[1]);
            return tempDta;
        case "replace":
            tempDta = replace(tempDta, step.index, step.value);
            return tempDta;
        case "stop":
            return null;

        default:
            return null;
    }
}