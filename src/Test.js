import React, { useState } from "react"

const Test = ()=>{
let[test,setTest]=useState(100)
const onClick = ()=>{
    setTest(test+1)
}
return (
    <div>
        test:{test}
        <button onClick={onClick}> +1 </button>
    </div>
)
}


export default Test