import express, {Application, Request, Response} from "express"

const {createUserValidation, updateUserValidation} = require("../joiValidation") 

const user = require("../models/user")

const app:Application = express();

let array:any = []

app.use(express.json())

const userControllers = {

    allUsers : async(req:Request,res:Response)=>{
        const users =  await user.findAll()
        res.send(
            {
                status_code: 200,
                message:"Success",
                data: users
            }
        )
    },
    getUser : async(req:Request, res:Response)=> {
        const id = req.params.id
        const oneUser = await user.findOne({where:{id:id}})
        if(oneUser === null){
            res.send(
                {
                    status_code:400,
                    message:"User Not Existed",
                    data:null
                }
            )
        }else{
            res.send(
                {
                    status_code:200,
                    message:"Success",
                    data:oneUser
                }
            )} 
    },

    addUser : async(req:Request,res:Response)=>{
    try{
    const result = await createUserValidation.validateAsync(req.body)

    const postedUser = await user.create({name:result.name, number:result.number, mail:result.mail, address:result.address})
    res.status(200).send(postedUser)

}catch(err:any){
    res.status(422).send(err.message)
    console.log(err)
}
},

updateUser:async(req: Request,res:Response)=>{
    try{
    const {id} = req.params
    const result = await updateUserValidation.validateAsync(req.body)
    await user.update({
        name:result.name,
        number:result.number,
        mail:result.mail, 
        address:result.address
    },{where:{id:id}})
    res.status(200).send("User updated Successfully")
}catch(err: any){
    res.status(422).send(err.message)
    console.log(err)
}
},

deleteUser:async(req:Request,res:Response)=>{
    await user.destroy({
        where:{id:req.params.id}
    })
    res.status(200).send("User Deleted Successfully")
}
}

module.exports = userControllers;
    