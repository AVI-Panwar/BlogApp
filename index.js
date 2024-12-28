const express = require("express");
const app = express();


// load configurations from env file 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());


// import routes 
const blog = require("./routes/blog");
//mount the api's
app.use("/api/v1", blog)


//connect with db
const connectWithDb = require("./config/database")
connectWithDb();

//start the server 
app.listen(PORT, ()=>{
    console.log(`server started successfully at ${PORT}`)
})


//default route
app.get("/", (req, res)=>{
    res.send(`<h1>this is home page</h1>`);
})
