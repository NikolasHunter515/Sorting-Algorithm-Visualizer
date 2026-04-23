
var defaultFill = "#2117ec";
var highlightFill = "#1F77b4";
let queue = [];

function swap(data, a, b){
    const temp = data[a];
    console.log(`swaping ${a} with ${b}`);
    data[a] = data[b];
    data[b] = temp;
    return data;
}

function unhightlight(data){//not working as the fetch is not working as expected.
//maybe this unhightlight should be called elsewhere, before swaping and replacing.
    //queue = localStorage.getItem("highlightQueue");

    console.log(`Current Queue: ${queue}`);
    while(queue.length > 0){
        var index = queue.shift();
        data[index].fill = defaultFill;
        console.log(`unhighlighting: ${data[index]} , ${index}`);

    }
}

function highlight(data, indexes){
    //could look at previous indexes and change back.


    /*if(index > 0 && data[index].fill == "#1F77b4"){
        data[index].fill = "#2117ec";
    }*/

    for(var i = 0; i < indexes.length; i++){
        data[indexes[i]].fill = highlightFill;
        queue.push(indexes[i]);
    }
    console.log(`updated queue: ${queue}`);

    localStorage.setItem("highlightQueue", queue);// this is working just fine

    return data;
}

function replace(data, index, value){
    data[index].uv = value;
    return data;
}

export default function handleSteps(step, data){
    let tempDta = data.map(item => ({ ...item }));
    
    unhightlight(tempDta);

    //console.log(queue[0]);
    //queue.push(12);
    //queue.push(15);
    //tempDta[1].uv = 90;
    //console.log(tempDta[1].uv);
    //console.log(step);

    switch(step.type){
        case "highlight":
            tempDta = highlight(tempDta, step.indices);//issue here
            return tempDta;
        case "swap":
            tempDta = swap(tempDta, step.indices[0], step.indices[1]);
            return tempDta;
        case "replace":
            tempDta = replace(tempDta, step.index, step.value);
            return tempDta;
        case "stop":
            unhightlight(tempDta);
            return null;

        default:
            return null;
    }
}