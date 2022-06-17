require('dotenv').config()
const express = require('express')
const app = express()

const connection = require('./db')
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const employee = require("./routes/employeeRoute");
const employee2 = require("./routes/educationRoute");
connection()

app.use(express.json())
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use(employee);
app.use(employee2);
const port = process.env.PORT || 8081
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))