const express = require("express")
const morgan = require("morgan")
// const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const dbConect = require("./config/dbConnect")
const authRouter = require("./routes/authRoute")
dotenv.config()
// dbConect()

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
// app.use(cors())

app.use("/api/v1/auth", authRouter)

const PORT = 5000
app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))