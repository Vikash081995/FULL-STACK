    import React from 'react'
    
    const RenderingList = () => {
        const items = ['Item1','Item2','Item3'];
      return (
        <ul>
            {items.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      )
    }
    
    export default RenderingList