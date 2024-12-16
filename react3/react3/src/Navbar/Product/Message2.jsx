//with handlers
    import Message from "./Message";
    
    const Message2 = () => {
        let [msg,setMessage]=React.useState("Hello");
        let gmHandler = () =>{
            setMessage("Good Morning")
        }
        let gnHandler = () =>{
            setMessage("Good Night")
        }
      return  <div>
            <h3>Message Component</h3> 
            <h4>Message Value:{msg}</h4>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GM</button>
      </div>
      
    }
    
    export default Message2
