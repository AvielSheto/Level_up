const express = require("express")
const cors =require("cors")
const mongoDB = require("./config/mongoDB")
 require("dotenv").config()


const app = express()

mongoDB()

app.use(cors())
app.use(express.json())


const usersRouter = require("./routes/userRouter/index")
app.use("/users",usersRouter)

const teamRouter = require("./routes/teamRouter/index")
app.use("/teams",teamRouter)

const projectRouter = require("./routes/projectRouter/index")
app.use("/project",projectRouter)




app.listen(8000,()=>console.log("http://localhost:8000"))