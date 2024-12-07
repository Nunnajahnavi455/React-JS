let Employees=()=>{
    let employees=[
        {"id":2,"name":"Filippo","gender":"Male"},
        {"id":3,"name":"Lyndy","gender":"Female"},
        {"id":4,"name":"Herold","gender":"Male"}
    ]
return <div>
    <h3>Employee Data</h3>
      <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
        </thead>
        <tbody>
            {
                employees.map((emp)=>{
                    return
                    <tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.gender}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
</div>

}
export default Employees;