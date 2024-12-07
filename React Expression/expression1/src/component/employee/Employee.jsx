import React from 'react'

class Employee extends React.Component {
    emp={
        eid:103,
        ename:"Priyanka",
        loc:["Wayanad","New Delhi","Bangalore"],
        address:{
            city:'Noida',
            phone:9591619191,
            pin:300034
        }

    }
  render() {
    return (
      <div>Employee</div>
    )
  }
}

export default Employee