import express, {Application} from "express";
import router from "./routing"

const app: Application = express();
const port: number = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`)
});
app.use("/app",router)