import React, { Component } from 'react'
export default class Imggalary extends Component {
    state={
        img1:"https://picsum.photos/seed/picsum/200/300",
        img2:"https://source.unsplash.com/200x300/?nature,water",
        img3:"https://source.unsplash.com/300x300/?forest,mountain",
        weblink:"http://mohitweb.epizy.com/"
    }
    render() {
        return (
            <div>
                <h1 contentEditable="true" className="heading">this is img gallary by react</h1>
                <img src={this.state.img1} alt="random" />
                <img src={this.state.img2} alt="random"/>
                <img src={this.state.img3} alt="random"  /><br />
                
                <a href={this.state.weblink} target="_mohit"> 
                    this is my wordpress web link 
                </a>
            </div>
        )
    }
}
