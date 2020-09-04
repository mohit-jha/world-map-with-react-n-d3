import React, { Component } from 'react'
import Functioncomponent from './Functioncomponent'

export default class Greets extends Component {
    state = {
        time: new Date().getHours(),
        greet: "",
        headingCss:{
            color : 'darkBlack',
            // textDecoration:'underLine'
            
        },
        css:{
            color:" ",
            textDecoration:'none'

        },
        divCSs:{
            backGroundColor:'tomato',
            width:'100%',
            height:"100%"

        }

    }
    render() {
        if (this.state.time >= 1 && this.state.time <= 11) {
            this.state.greet = "Good Morning"
            this.state.css.color = "green"
        } else if (this.state.time >= 12 && this.state.time <= 17) {
            this.state.greet = "Good Afternoon"
            this.state.css.color = "yello"
        } else if (this.state.time >= 18 && this.state.time <= 19) {
            this.state.greet = "Good Evening"
            this.state.css.color = "borwn"

        } else {
            this.state.greet = "Good night"
        }
        return (
            <div style={this.state.divCss}>
                <h1 style={this.state.headingCss}>hello sir, <span style={this.state.css}> {this.state.greet}</span>
                </h1>
                {/* <Functioncomponent /> */}
            </div>
        )
    }
}
