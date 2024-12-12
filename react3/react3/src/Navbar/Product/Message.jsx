import React,{useState} from'react'
let Message =()=>{
    let[state,setMessage]=useState("Hello");
    let gmHandler =()=>{
        setMessage("Good Morning");
    }
    let gnHandler = ()=>{
        setMessage("Good Night")
    }
    return <div>
                 <h3>Message Component</h3>
                 <h4>value:{msg}</h4>
                 <button onClick={gmHandler}>GM</button>
                 <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message