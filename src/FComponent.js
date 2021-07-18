/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-07-19 00:19:50
 * @LastEditTime: 2021-07-19 00:45:40
 * @FilePath: \zhLeon_Frontend\react-hook\src\FComponent.js
 */
import React, { useState, useEffect } from 'react';

function FComponent() {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional Components");


    useEffect(() => {
        console.log("Component Mounted or UpDated！")
        const interval = setInterval(showDate, 1000)

        return () => {
            console.log("Cleanup of interval");
            clearInterval(interval)
            
        }
    }, [time])


    const showDate = () => {
        setTime(new Date().toString());
    };

    return(
        <div className="space-y-5">
            <div>{time}</div>
            <button onClick={showDate}
                className="w-72 h-16 items-flex justify-center rounded-lg bg-red-500 text-white text-xl"
            >Show Time</button>

            <div>{ message}</div>
            <button className="w-72 h-16 items-flex justify-center rounded-lg bg-pink-500 text-white text-xl"
                onClick={() => setMessage("Changed Functional Components")}
            
            >Change Message</button>

        </div>
    )
}

export default FComponent;