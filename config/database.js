const mongoose = require("mongoose");


//whatever configurations are there in the env file it will be loaded in the process object 
require("dotenv").config();

const connectWithDb = () => {
        
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("DB has been connected successfully")})
    .catch( (error)=>{
        console.log("Db is not connected");
        console.log(error);
        process.exit(1)
    })
      
}


module.exports = connectWithDb;