const connectWithSequelize:any = require("./connectiondb")

const sync = connectWithSequelize.sync({alter:true})
.then((result: any)=>{
    console.log(result)
}).catch((error: any)=>{
    console.log(error)
})

export default sync;