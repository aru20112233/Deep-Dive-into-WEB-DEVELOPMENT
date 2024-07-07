import React, {useState, useEffect} from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        // mounted
        const timer = setInterval(() => setTime(time+1),1000);
        
        return function() {
            clearInterval(timer)
        }
    
    }, [time]);

    return (
        <div>
            <p className="timer">Your time on page is: {time} seconds</p>
        </div>
    );
};

export default Timer;