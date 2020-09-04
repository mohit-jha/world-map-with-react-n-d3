// import React, {Component, Fragment} from "react";

// class App extends Component {
//   render(){
//     return (
//     <React.Fragment>
//     {/* <Fragment> */}
// {/* <> */}
//     <h1>hey this is 1st Component</h1>
//     <h1>hey this is 2nd Component</h1>
//     {/* </Fragment> */}
//     {/* </> */}

//     </React.Fragment>
//     )
//   }
// }
// export default App;




//////// composing Comment//
import React, { Component } from 'react'
import Student from './Students'
export default class App extends Component {
  constructor(props){

    super(props);
    console.log('app of mounting',props);
    this.state={
      name:this.props.name,
      class:12
    }
  }
  static getDerivedStateFromProps(props, state){
    console.log('this is get derived state from props ...');
    console.log(props, state);
    return null;
  }
  
  render() {
    return (
      <div>
        <h1>this is react mounting and updating series</h1>
       <Student roll='23'/>
      </div>
    )
  }
}
