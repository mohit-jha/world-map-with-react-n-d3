// const Fun = (prop)=>{
//     return <h1>hey this is {prop.name} react page</h1>
// }
// import "./mohit.css"
// import React, { Component } from "react";
// import PropTypes from 'prop-types';


// const Comp = (props) => {
//     return (
//         <div>
//             <h1 className="bg">this is composing component by {props.name} {props.children}</h1>
//             <h1 className="bg">this is 2nd from the {props.reac}</h1>

//         </div>)
// };

// class Comp extends Component{
//     render(){
//         return (<div>
//             <h1>hey this is class component and props exaple from {this.props.name} {this.props.children}</h1>
//             <h1>dublicate of component and props exaple from {this.props.reac}</h1>

//         </div>)
//     }
// }

// Comp.propTypes = {
//     // You can declare that a prop is a specific JS primitive. By default, these
//     // are all optional.
//     name: PropTypes.string.isRequired
// };

// Comp.defaultProps = {
//     name: 'mohitkumarJha'
// }

// export default Comp;

import React, { Component } from 'react';

class Students extends Component {

    //     //with constructor
    // constructor(props){
    //     super(props);
    //     this.state={
    //         name:"mohitjha",
    //         roll:23,
    //         skill:this.props.reac
    //     }
    // } 


    //     // // without  constructor
    state = {
        id: 5,
        name: ' mohit ',
        roll: 23,
        skill: this.props.reac
    }
    //     /////// handle click 
    handleClick = (e) => {
        //   this.setState({
        //       name:'jha mohit',
        //       roll:21
        //   })

        // this.setState((state, props) => {

        //     console.log(props.reac);
        // })
        console.log('button clicked', e);
    }
    handleClickArg = (nC) => {
        nC.preventDefault();
        this.handleClick(this.state)
    }
    render() {
        return (
            <div>
                <h1> hey your name is {this.state.name}, your roll number is {this.state.roll} and your skills are {this.state.skill} </h1>
                <a href='https:/www.facebook.com' onClick={this.handleClickArg}>Click Me</a>
            </div>)
    }
};
// export default Students;

// //here i am using function...
// import React from 'react';
// function Students(props) {

//     function handleClick(e){
//         e.preventDefault()
//         console.log('button clicked success');
//     }

//     return(
//         <div>
//         <h1>hey this mohit</h1>
//         <a href='https:/www.google.com' onClick={handleClick}>click me now</a>
//         </div>
//     )
// }

export default Students;

