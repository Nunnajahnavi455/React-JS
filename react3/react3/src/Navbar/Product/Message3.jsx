//without handlers
import React from 'react'

const Message3 = () => {
    let [Message,setMessage]=React.useState("Hello");
  return <div>
    <h3>Message Component</h3>
    <h4>Message Value:{msg}</h4>
    <button onClick={()=>{}}>GM</button>
    <button onClick={()=>{}}>GN</button>
  </div>
  
}

export default Message3