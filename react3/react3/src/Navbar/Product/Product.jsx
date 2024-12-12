import React from 'react'
class Product extends React.Component{
    //qty=1
    state={
       product_Name:'Kross Hexa 29T',
       qty:1,
       price:20688,
       image:'https://rukminim2.flixcart.com/image/224/224/xif0q/cycle/d/r/i/hexa-29t-front-suspension-dual-disc-alloy-frame-shimano-gear-15-original-imah2yfq4faabkac.jpeg?q=90'
    }
    incrHandler = ()=>{
      console.log("Inside IncrHandler")
     this.setState({Product:{...this.State.Product,qty:this.state.Product.qty+1}})
    }
    decrHandler = ()=>{
        this.setState({Product:{...this.State.Product,qty:this.state.Product.qty -1}})
    }
    render(){
        
        return <div className='container'>
                    <div className="row">
                    <div className="col-8">
                        <table className='table'>
                            <thead>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                            </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product_Name}</td>
                                <td><img width={"80px"} src={this.state.image} alt="" /></td>
                                <td>{this.state.price}</td>
                                <td>{this.state.qty}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
               </div>
    }
}
export default Product