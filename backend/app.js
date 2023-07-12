const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');


// import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const serviceTypeRoute = require('./routes/serviceTypeRoutes');
const serviceRoute = require('./routes/serviceRoutes');



const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");



// database connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    userUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
     .then(() => console.log("DB connection"))
     .catch((err) => console.log(err));

// midoleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
    }));
app.use(cookieParser());
app.use(cors());

// routes
// app.get('/', (req, res) => {
//     res.send("Hello from Nodejs")
// })
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',serviceTypeRoute);
app.use('/api',serviceRoute);




// error middleware
app.use(errorHandler)

// port
const port = process.env.PORT || 9000


app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})

