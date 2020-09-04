import React, { useState } from "react";
export default function BgEvents() {
    let btn = "hey!";
    let bg = "black";
    const [button, setbutton] = useState(btn);
    const [bgcolor, setbgcolor] = useState(bg);
    const handleClick = () => {

        setbutton("Himanshu, good morning ");
        setbgcolor("pink");
    };
    const handleDbClick = () => {
        setbutton("Mohit, good morning");
        setbgcolor("tomato");
    };
    return (
        <div className="mid" style={{ backgroundColor: bgcolor }}>
            <button onMouseEnter={handleClick} onMouseLeave={handleDbClick}>
                {button}
            </button>
        </div>
    );
}
