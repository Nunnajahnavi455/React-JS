let ComponentB = (props) => {
    return (
      <div>
        <h3>Component B</h3>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>Employee Id:{this.props.id}</h4>
        <h4>Employee Name:{this.props.name}</h4>
        <h5> Location:{this.props.loc[0]}</h5>

        <hr/>
      </div>
    );
  };
  export default ComponentB;