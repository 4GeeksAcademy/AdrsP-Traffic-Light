import React from "react";
import{ useState, useEffect } from 'react';

const Semaforo = () => {

    const [selectedColor, setSelectedColor] = useState("");

    return (
        <div>
            <div id="topeDelPoste"></div>
            <div id="cajaDelPoste">
                <div onClick={() => setSelectedColor("red")} className={"light red " + ((selectedColor == "red") ? "glowing" : "" )}></div>
                <div onClick={() => setSelectedColor("yellow")} className={"light yellow " + ((selectedColor == "yellow") ? "glowing" : "" )}></div>
                <div onClick={() => setSelectedColor("green")} className={"light green " + ((selectedColor == "green") ? "glowing" : "" )}></div>
            </div>
        </div>
        );
};

export default Semaforo;