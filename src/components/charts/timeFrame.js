import React, {useState, useEffect} from 'react';
import Chart from './chart';
import * as d3 from 'd3';

function TimeForm({spacing, display, align, data}){

    var form = <form>
                <label style={{marginRight:spacing + "em"}}>
                    <input type="radio" name="radio" value="all" style="margin-right: 0.5em;" checked/> All
                </label>
                <label style={{marginRight:spacing + "em"}}>
                    <input type="radio" name="radio" value="2009" style="margin-right: 0.5em;"/> 2009
                </label>
            </form>;
    
    form.onChange = () => form.dispatchEvent(new CustomEvent("input")); // for safari
    form.onInput = event => {
        switch (form.radio.value) {
            case "2009": form.value = [new Date("2009-01-01"), new Date("2010-01-01")]; break;
            default: form.value = d3.extent(data, d=> d.date); break;
        }
    }

    form.onInput();
    return form;

} 


export function TimeFrame({data})
{
    return(
        <>
            <TimeForm data = {data}/>
        </>
    )
}


export default TimeFrame;