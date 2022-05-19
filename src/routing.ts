import * as express from "express";

let router = express.Router();

const userControllers:any = require("./controllers/userController");

router.get("/allUsers" ,userControllers.allUsers);
router.get("/:id", userControllers.getUser)
router.post("/addUser",userControllers.addUser);
router.put("/updateUser/:id",userControllers.updateUser);
router.delete("/deleteUser/:id",userControllers.deleteUser);

export default router