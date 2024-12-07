import React from 'react'
class Employee extends React.Component{
    emp={
        eid:103,
        ename:"Priyanka",
        loc:["Wayanad","New Delhi","Bangalore"],
        address:{
            city:'Noida',
            phone:9591619191,
            pin:300034
    }};
    render(){
        return ( 
        <div>
            <h2>Employee Component</h2>
            <pre>{JSON.stringify(this.emp)}</pre>
            <hr/>
            <h4>Employee Name:{this.emp.ename}</h4>
            <h5>Prefered Loc:{this.emp.loc[1]}</h5>
            <h5>city:{this.emp.address.city}</h5>
            <h5>PIN:{this.emp.address.pin}</h5>

        </div>
        );
    }
}
    

export default Employee;