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

function Prototype() {

    let cube = {
        up: Array(9).fill('w'),
        left: Array(9).fill('o'),
        front: Array(9).fill('g'),
        right: Array(9).fill('r'),
        back: Array(9).fill('b'),
        down: Array(9).fill('y')
    }

    return (
    <div className="cube">
        <div></div>
        <div className="up">
            {cube.up.map(charToElement)}
        </div>
        <div></div>

        <div className="left">
            {cube.left.map(charToElement)}
        </div>
        <div className="front">
            {cube.front.map(charToElement)}
        </div>
        <div className="right">
            {cube.right.map(charToElement)}
        </div>

        <div></div>
        <div className="down">
            {cube.down.map(charToElement)}
        </div>
        <div></div>

        <div></div>
        <div className="back">
            {cube.back.map(charToElement)}
        </div>
        <div></div>
    </div>
    )
}

export default Prototype
