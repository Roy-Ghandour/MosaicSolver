import express, { Response, Request } from "express";
import { showCube } from "./cube";

const cors = require("cors");

const app = express();
app.use(cors());

//temp needs to go in .env file
const port = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send(showCube());
    //console.log("Get Request");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
