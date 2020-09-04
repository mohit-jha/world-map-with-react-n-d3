import React, { useState } from "react";
export default function DigitalClock() {
    let time = new Date().toLocaleTimeString();
    const [ctime, setctime] = useState(time);
    function handleClick() {
        time = new Date().toLocaleTimeString();
        setctime(time);
    }
    setInterval(handleClick, 1000);
    return (
        <div className="mid">
            <h1>{ctime}</h1>
        </div>
    );
}
