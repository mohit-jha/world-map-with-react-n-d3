import React, { Component } from 'react'
export default class marks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastname: "jha",
            examMarks: this.props.ut
        };
        console.log("this is your examMarks", this.state.examMarks);
    }
    static getDerivedStateFromProps(props, state) {
        console.log('get  derived from props')
        console.log(props, state)
        if (state.examMarks !== props.preboardmarks) {
            return { examMarks: props.ut }
            console.log('value updated success by get derived from props');
        }
        return (null);
    }
    shouldComponentUpdate(nextprops, nextstate) {
        if (this.state.examMarks < 101) {
            console.log("marks should component update");
            console.log(nextprops, nextstate)
            return true;
        }
        console.log(nextprops, nextstate);
        return false;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log("marks - get snapshot before update its-run before update");
        console.log(prevprops ,prevstate);
        return 15;
    }

    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log('marks component did updata its run after update');
        console.log(prevprops,prevstate,snapshot);
    }

    
    render() {
        return (
            <div>
                <h1>this is your marks {this.state.examMarks}</h1>
            </div>
        )
    }
}
