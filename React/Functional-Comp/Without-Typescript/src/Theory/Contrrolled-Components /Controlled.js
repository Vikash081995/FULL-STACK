import React,{useState} from 'react'

const Controlled = () => {
    const [inutValue,setInputValue] = useState('');

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
  return (
   <input type="text" value={inputValue} onChange={hadleInputChange} placeholder='type text'/>
  )
}

export default Controlled