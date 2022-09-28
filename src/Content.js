import {  useState, useRef, useEffect, memo } from "react";


function Content({onIncrease}) {
  

  useEffect(() => {
  
  },[])
    console.log('render')
    return (

            <div>
                <h1>hello</h1>
                <button onClick={onIncrease}>Click!</button>
            </div>
            
        
    )
}

export default memo(Content);