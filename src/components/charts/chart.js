import React from 'react';
import * as d3 from "d3";
export function Chart({width, height, data}){
    
    const viewBox_value = "0 0 " + width + " " + height;
    
    return(
        <>      
            <svg viewBox={viewBox_value}>
                <path d={data} fill="none" stroke="green" strokeWidth="1" strokeMiterlimit="1"></path>
            </svg>
        </>
        
    );
}



export default Chart;
