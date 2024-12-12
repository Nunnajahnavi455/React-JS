import React from 'react'
class product extends React.Component{
    //qty=1
    state={
        qty:1
    }
    incrHandler =()=>{
        this.setState({qty:this.state.qty +1})
    }
    decrHandler =()=>{
        this.setState({qty:this.state.qty -1})
    }
    render(){
        console.log("Frist Render")
        return(){
            <h3>Product Comp</h3>
            <h3>Product qty:{this.state.qty</h3>
        }
    }
}