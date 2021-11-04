import express from "express";
import cors from "cors"
import router from "./routes/common.router.js";
import bodyParser from "body-parser";

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use(router)

app.listen(port, () => {
    console.log(`Hearing at ${port}`);
});