type Sticker = "w" | "r" | "o" | "b" | "g" | "y";

type Cube = {
    up: Array<Sticker>;
    left: Array<Sticker>;
    front: Array<Sticker>;
    right: Array<Sticker>;
    back: Array<Sticker>;
    down: Array<Sticker>;
};

const solvedCube: Cube = {
    up: Array(9).fill("w"),
    left: Array(9).fill("o"),
    front: Array(9).fill("g"),
    right: Array(9).fill("r"),
    back: Array(9).fill("b"),
    down: Array(9).fill("y"),
};

const scramble: Sticker[] = ["w", "b", "o", "o", "r", "y", "g", "y", "w"];

function copy(item: any): any {
    return JSON.parse(JSON.stringify(item));
}

function rotateFace(f: Sticker[]): Sticker[] {
    let temp: Sticker;
    let face = copy(f);

    //rotate corners
    temp = face[0];
    face[0] = face[6];
    face[6] = face[8];
    face[8] = face[2];
    face[2] = temp;

    //rotate edges
    temp = face[1];
    face[1] = face[3];
    face[3] = face[7];
    face[7] = face[5];
    face[5] = temp;

    return face;
}

function f(c: Cube): Cube {
    let cube = copy(c);

    //Rotate front face
    cube.front = rotateFace(cube.front);

    let temp = [cube.up[6], cube.up[7], cube.up[8]];
    [cube.up[6], cube.up[7], cube.up[8]] = [
        cube.left[2],
        cube.left[5],
        cube.left[8],
    ];
    [cube.left[2], cube.left[5], cube.left[8]] = [
        cube.down[0],
        cube.down[1],
        cube.down[2],
    ];
    [cube.down[0], cube.down[1], cube.down[2]] = [
        cube.right[0],
        cube.right[3],
        cube.right[6],
    ];
    [cube.right[0], cube.right[3], cube.right[6]] = temp;

    return cube;
}

function fi(c: Cube) {
    // Move x3 = inverse
    return f(f(f(c)));
}

export const showCube = (): Cube => {
    let cube = copy(solvedCube);
    cube.front = [...scramble];

    cube = fi(cube);

    return cube;
};
