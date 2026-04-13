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


export default function Home() {
  //const [arr, setArr] = useState([1,4,5,6]);
  const arr = [1,4,5,6];
  const [algoName, setAlgoName] = useState("quicksort");
  const [description, setDescription] = useState("Select an algorithm for a description");
  const [inputSize, setInputSize] = useState(10); // max size should be 100 for now.
  const [runtimeCase, setRuntimeCase] = useState("random"); // 1: sorted, 2: random, 3: reserse sorted
  const [showSort, setShowSort] = useState(true);
  const [play, setPlay] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect (() => {
    const fetchData = async () => {
      const data = await GetArray(runtimeCase, inputSize);
      console.log(data);
      setChartData(data);
    };
    fetchData();
  }, [inputSize, runtimeCase]);
  //setChartData(GetArray(runtimeCase, inputSize))

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
      homepage

      <div className="row justify-content-center gx-10">
        <div className="col-auto">
          <DisplayAlgoName name={algoName}/>
        </div>
        <div className="col-auto">
          <SelectAlgo setAlgoName={setAlgoName}/>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-1">
          <HistoryTab />
          </div>
        <div className="col-5">
          <ChartRender data={chartData}/>
          <div className="col">
            <SelectCase setRuntimeCase={setRuntimeCase} setShowSort={setShowSort} inputSize={inputSize} setChartData={setChartData}/>
          </div>
          <div className="col">
              <div className="row">
                <div className="col">
                  <SetInputSize inputSize={inputSize} setInputSize={setInputSize} />
                </div>
                <div className="col">
                  <Controls play={play} setPlay={setPlay} inputSize={inputSize} runtimeCase={runtimeCase} setShowSort={setShowSort} />
                </div>
              </div>
          </div>
        </div>
      </div>

      jhfsjkdfh
      <AlgoInfo />
      <p>{runtimeCase} + {inputSize}</p>
    </div>
  );
}
