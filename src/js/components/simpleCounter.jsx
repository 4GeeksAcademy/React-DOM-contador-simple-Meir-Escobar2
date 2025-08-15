import React, { useEffect, useState } from "react";

//Inicia secons en 0
const SimpleCounter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((ulau) => ulau + 1);            
        }, 1000);
        return () => clearInterval(timer)
    }, []);

return (
    <div className="text-center">
        <h1>Hola soy simpleCounter</h1>
        <p>el contador esta en : {seconds}</p>
    </div>
);};

export default SimpleCounter;