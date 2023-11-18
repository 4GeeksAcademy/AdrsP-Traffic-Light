import React from "react";
import{ useState, useEffect } from 'react';

const Semaforo = (props) => {
    const [luzRoja, setluzRoja] = useState("false")
    const [luzAmarilla, setluzAmarilla] = useState("false")
    const [luzVerde, setluzVerde] = useState("false")

  
        if (luzRoja == true) {
            () => setluzAmarilla("false");
            () => setluzVerde("false");
            console.log("luz roja es "+ luzRoja);
            console.log("luz amarilla es "+ luzAmarilla);
            console.log("luz verde es " + luzVerde);
        }
        if (luzAmarilla == true) {
            () => setluzRoja("false");
            () => setluzVerde("false");
            console.log("luz roja es "+ luzRoja);
            console.log("luz amarilla es "+ luzAmarilla);
            console.log("luz verde es " + luzVerde);
        }
        if (luzVerde == true) {
            () => setluzRoja("false");
            () => setluzAmarilla("false");
            console.log("luz roja es "+ luzRoja);
            console.log("luz amarilla es "+ luzAmarilla);
            console.log("luz verde es " + luzVerde);
        }
    

    

    return (
        <div>
            <div id="topeDelPoste"></div>
            <div id="cajaDelPoste">
                <div onClick={() => setluzRoja("true")} className="red"></div>
                <div onClick={() => setluzAmarilla("true")} className="yellow"></div>
                <div onClick={() => setluzVerde("true")} className="green"></div>
            </div>
        </div>
        );
};

export default Semaforo;