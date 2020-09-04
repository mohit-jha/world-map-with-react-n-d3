import React, { Component } from 'react'
import Marks from './marks'
export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'noida',
            ut:81
        }
    }
    handleClick = () => {
        console.log('button clicked succes');
        this.setState({ ut: 82 })
    }
    componentDidMount(){
        console.log('app is did mountd');
    }

    componentWillUpdate(){
        console.log("app is unmounted ");
    }
    render() {
        return ( 
            <div>
                <h1>hey your name is mohit and you are from {this.state.location}</h1>
                <Marks ut={this.state.ut}/>
                <button onClick={this.handleClick}>change</button>
            </div>
        )
    }
}
