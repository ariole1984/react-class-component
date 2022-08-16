import React, { Component } from "react";

class ClassComponent extends Component {

  constructor (props) {
        super(props)

        this.state = {
count: props.count,

        }
    }


    count: props.count,
    color: props.color
  }
}
  
    render() {
    return (
      <>
        <h1> this is a class Component</h1>
      </>
    );
  }
}


export default ClassComponent
