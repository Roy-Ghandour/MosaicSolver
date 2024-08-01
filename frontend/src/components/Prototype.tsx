import { useEffect, useState } from 'react'
import '../scss/prototype.scss'

function charToElement(c : string) {
    switch (c) {
        case 'w': return <div className="white"></div>
        case 'r' : return <div className="red"></div>
        case 'o': return <div className="orange"></div>
        case 'b': return <div className="blue"></div>
        case 'g': return <div className="green"></div>
        case 'y': return <div className="yellow"></div>
    }
}

type Sticker = "w" | "r" | "o" | "b" | "g" | "y";

    type Cube = {
       up: Array<Sticker>;
        left: Array<Sticker>;
        front: Array<Sticker>;
        right: Array<Sticker>;
        back: Array<Sticker>;
        down: Array<Sticker>;
    };

function Prototype() {

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
            // This gets called twice for some reason
        fetch('http://localhost:8000/')
            .then(response => response.json())
            .then((data) => {console.log(data); setCube(data); setLoading(false)});
    }, []);

    const [cube, setCube] = useState<Cube | null>(null);

    const [loading, setLoading] = useState(true)

    return (
    <>
    {loading ? "loading..." : 
        <div className="cube">
            <div></div>
            <div className="up">
                {cube?.up.map(charToElement)}
            </div>
            <div></div>

            <div className="left">
                {cube?.left.map(charToElement)}
            </div>
            <div className="front">
                {cube?.front.map(charToElement)}
            </div>
            <div className="right">
                {cube?.right.map(charToElement)}
            </div>

            <div></div>
            <div className="down">
                {cube?.down.map(charToElement)}
            </div>
            <div></div>

            <div></div>
            <div className="back">
                {cube?.back.map(charToElement)}
            </div>
            <div></div>
        </div>}
    </>
    
    )
}

export default Prototype
