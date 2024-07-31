import express, { Response, Request } from "express";

const app = express();

//temp
const port = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from nodejs changes this is so cool");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
