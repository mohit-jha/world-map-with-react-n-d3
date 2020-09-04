import React, { Component } from 'react'

export default class Calculator extends Component {
    render() {
        const m = 15;
        const s = 13;
        function sum(a, b) {
            let sum = a + b;
            return sum;
        } function sub(a, b) {
            let sub = a - b;
            return sub;
        } function mul(a, b) {
            let mul = a * b;
            return mul;
        } function divide(a, b) {
            let divide = a / b;
            divide = divide.toFixed(2)
            return divide;
        }
        return (
            <div>
                <ul>
                    <li>the sum of {m} and {s} is:  {sum(m, s)} </li>
                    <li> the subtract of {m} and {s} is : {sub(m, s)}  </li>
                    <li>the multiply of {m} and {s} is : {mul(m, s)}</li>
                    <li>the divide of {m} and {s} is : {divide(m, s)} </li>

                </ul>
            </div>
        )
    }
}
