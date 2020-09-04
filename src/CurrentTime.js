import React, { useState } from 'react'

export default function CurrentTime() {
    const ctime = new Date().toLocaleTimeString();;
    const [time, settime] = useState(ctime)
    function handleClick(){
        settime(new Date().toLocaleTimeString())
    }
    return (
        <div className="mid"> <br />
            <h1>{time}</h1>
            <button onClick ={handleClick} style={{marginLeft :'' }}>GET TIME </button>
        </div>
    )
}
