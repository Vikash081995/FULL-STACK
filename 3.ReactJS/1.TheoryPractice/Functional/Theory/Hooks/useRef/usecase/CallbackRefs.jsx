import { useState,useRef } from "react"

const DynamicRefs =()=>{
    const [inputs,setInputs]= useState([]);
    const inputRefs = useRef([]);

    return (
        <>
        {
            inputs.map((input,index)=>(
                <input ref={el=>inputRefs.current[index]=el} key={index}/>
            ))
        }
        </>
    )
}   