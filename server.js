const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const path=require('path')
const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//Use routes
app.use("/api/users", users);
//Serve static asses
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
 app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'client','build','index.html'))
 })
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
