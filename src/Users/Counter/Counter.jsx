import React from 'react'

function Counter(props) {
    console.log((!props.created_at) + "  !props.created_at")
    console.log(props.created_at + " props.created_at")
    console.log(typeof props.created_at + " typeof props.created_at")

    if (props.created_at === "no data") {
        console.log("не возвращаем компоненту, так как нет надобности");
        return (<></>)
    }

    //How many years accout exist
    console.log(" 111props.created_at.slice(2, 4))  = " + +props.created_at.slice(0, 4))
    let expirienceYears = props.created_at ? (new Date().getFullYear()) - (+(props.created_at.slice(0, 4))) : 0;
    console.log("222expirienceYears  How many years accout exist = " + expirienceYears)

    console.log("(new Date().getFullYear()- 2005)/100 = " + (new Date().getFullYear() - 2005) / 100)
    let expirienceRateInProcents = Math.round((expirienceYears) / ((new Date().getFullYear() - 2005) / 100));

    function changeName() {

    }

    return (
        <div>
            <span>{expirienceYears} years</span><br/>
            <span>{expirienceRateInProcents}%</span>
            <label htmlFor="fuel"></label>
            <meter id="fuel"
                   min="0" max="100"
                   low="33" high="66" optimum="80"
                   value={expirienceRateInProcents}>
            </meter>
        </div>
    );
}

export default Counter;
