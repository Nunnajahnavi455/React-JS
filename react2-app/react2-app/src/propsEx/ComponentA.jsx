import ComponentB from "./ComponentB";

let ComponentA = () => {
    let ename="Rahul";
    let eid=101;
    let loc=["Bangalore","New Delhi","Wayanad"]
  return (
    <div>
      <h3>Component A</h3>
      <ComponentB />
      <hr/>
      <compB name={ename} id={eid} loc={loc}/>
    </div>
  );
};
export default ComponentA;