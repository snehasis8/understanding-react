import React, { Component } from "react";
import UpdateCycle from "../UpdateCycle/UpdateCycle";

export class Creation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showItem : false
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("didmount");
  }

  static getDerivedStateFromProps(prop, state) {
    // it's a static method so it doesen't have the access for the this keyword
    //  it always return an object as a state  if you don't want to return anything return null
    // when a value comes through props and you want to keep it into state this is the lifecycle to work on
    console.log(prop, state, "getDerivedState from props");

    // return null;
    return { count: prop.testVal + state.count };
  }


 
  render() {
    console.log("render");
    const { testVal = "nothing passed" } = this.props;
    const { count = "defaultVal" , showItem } = this.state;

    return (
      <div key="sjahd">
        <button onClick = { ()=>   {this.setState({ count : count +5 , showItem : true  }) }} > Update count by Five </button>
        <button onClick = { ()=>   {this.setState({ showItem : false  }) }} > remove component </button>
       {showItem && <UpdateCycle countVal={count} showItem={showItem} />} 
      </div>
    );
  }
}

export default Creation;
