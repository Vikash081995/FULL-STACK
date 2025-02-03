import {useState,useEffect} from 'react';


function HookMouse(){
    const [x,setX]=useState(0);
    const [y,setY]= useState(0);

    const logMousePositon=e=>{
        console.log('Mouse Event');
        setX(e.clienX);
        setY(e.clientY)
    }
    
    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener("mousemove", logMousePositon);

        return ()=>{
            console.log("Component unmounting code");
            window.removeEventListener("mousemove", logMousePositon);
        }
    },[])

    return (
        <div>
            Hook X - {x} Y-{y}
        </div>
    )
}
export default HookMouse;