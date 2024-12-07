import React from 'react'

class Message1 extends React.Component{
    msg="Good Morning"
    price=700;
    colors=['Red','Blue','Orange']
    render(){
        return <div>
            <h3>Message value:{this.msg}</h3>
            <h4>price:{this.price}</h4>
            <h5>colors:{this.colors[1]}</h5>
        </div>
    }
}
export default Message1