'use client';
import Image from "next/image";
import Navbar from "../../components/server/client/navbar/Navbar";
import ChartRender from "../../components/chart/ChartRender";
import AlgoInfo from "../../components/description/AlgoInfo";
import SelectAlgo from "../../components/server/client/algoSelection/SelectAlgo";
import DisplayAlgoName from "../../components/server/client/algoTitle/DisplayAlgoName";
import SelectCase from "../../components/server/client/runtimeSelection/SelectCase";
import SetInputSize from "../../components/server/client/inputSize/SetInputSize";
import Controls from "../../components/server/client/stepControls/Controls";
import HistoryTab from "../../components/server/client/history/HistoryTab";
import { useState, useEffect } from 'react';
import GetArray from "../../components/server/utils/GetArray";
import GetSteps from "../../components/server/utils/GetSteps";
import "../app/home.css";


export default function Home() {
  //const [arr, setArr] = useState([1,4,5,6]);
  const arr = [1,4,5,6];
  const [algoName, setAlgoName] = useState("Quicksort");
  const [description, setDescription] = useState("Select an algorithm for a description");
  const [inputSize, setInputSize] = useState(10); // max size should be 100 for now.
  const [runtimeCase, setRuntimeCase] = useState("random"); // 1: sorted, 2: random, 3: reserse sorted
  const [showSort, setShowSort] = useState(true);
  const [play, setPlay] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [steps, setSteps] = useState([]);
  //localStorage.setItem("highlightQueue", []);

  //does handle change, except when random is clicked ideally it should generate again.
  useEffect (() => { // when this is changed the new array should also be sent to the backend.
    const fetchData = async () => {
      const data = await GetArray(runtimeCase, inputSize);
      console.log(data);
      setChartData(data);// should only update if inputsize has changed and is not null.

      //when calling consider putting in try block to display error to user.
      //should the user see the error or since they have no control over what is sent they cannot make any changes.
      //await GetSteps("Bubble sort");// works here need to test in play controls next.
    };
    fetchData();
    localStorage.setItem("highlightQueue", []) || [];
  }, [inputSize, runtimeCase]);// is a or condition here, meaning would need to put code in an if statement to have finer control over when it executes.

  /*useEffect(() => {
    const step = steps[0];
    console.log(`got steps: ${step}`);
  }, [steps]);*/

  //appears that only the uv value matters meaning will use that to display the data
  const dta = [
  {
    uv: 1,
    
  },
  {
    uv: 3,
    
  },
  {
    uv: 2,
   
  },
  {
    uv: 2,
    fill: "#1F77b4",
  },
  {
    uv: 4,
  },
  {
    uv: 3,
  },
  {
    uv: 4,
  },
];


  return (
    <div className="page">
      <Navbar homePage={true}/>

      <div className="row justify-content-center gx-10" id="homeHeader">
        <div className="col-auto">
          <DisplayAlgoName name={algoName}/>
        </div>
        <div className="col-auto">
          <SelectAlgo setAlgoName={setAlgoName}/>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-1" id="histPlace">
          <HistoryTab />
          </div>
        <div className="col-5" id="chartPlace">
          <ChartRender data={chartData}/>
          <div className="col d-flex justify-content-center" id="runtimePlace">
            <SelectCase setRuntimeCase={setRuntimeCase} setShowSort={setShowSort} inputSize={inputSize} setChartData={setChartData}/>
          </div>
          <div className="col">
              <div className="row" id="controlsPlace">
                <div className="col">
                  <SetInputSize inputSize={inputSize} setInputSize={setInputSize} />
                </div>
                <div className="col">
                  <Controls play={play} setPlay={setPlay} chartData={chartData} setChartData={setChartData} setSteps={setSteps} steps={steps} algoName={algoName}/>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div id="desPlace">
        <AlgoInfo />
        <p>{runtimeCase} + {inputSize}</p>
      </div>
    </div>
  );
}
