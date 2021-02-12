import React, {useState, useEffect} from 'react';
import Chart from './components/charts/chart';
import * as d3 from 'd3';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        d3.csv("data.csv", d3.autoType).then(setData);
    }, []);

    
    //margin for the  graph
    var margin =({top: 20, right: 30, bottom: 30, left: 40})

    var width = 954;
    var height = 240;

    //const parseDate = d3.utcParse("%Y-%m-%d");

    var x = d3.scaleUtc()
    .domain(d3.extent(data, d =>d.date))
    .range([margin.left, width - margin.right]);

    var y = d3.scaleLinear()
    .domain([0, d3.max(data, d=> d.upper)])
    .range([height - margin.bottom, margin.top]);

    // drawing the line using d3 line
    var line = d3.line().x(d=>x(d.date)).y(d=>y(d.close));

    //console.log(line(data));

    return(
        <>
            <Chart height={height} width={width} data={line(data)}/>
        </>
    );

}

export default App;