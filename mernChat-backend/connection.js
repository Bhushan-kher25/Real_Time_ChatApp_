const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// var mongoURI = (`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.fvg1ygz.mongodb.net/chatAppMern?retryWrites=true&w=majority`);
// const connectTOMongo = () =>{
//     mongoose.connect(mongoURI)
//     .then(()=>{
//         console.log("connection successful");
//     })
//     .catch((e)=>{
//         console.log(e);
//         console.log("error occured")
//     })
// }
// module.exports = connectTOMongo;
// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.fvg1ygz.mongodb.net/chatAppMern?retryWrites=true&w=majority`)
// try{
//     console.log("success , connection successful");
// }
// catch(e){
//     console.log(e);
//     console.log("error occured")
// }
// connectiong Mongoose
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log("Connection done"))
.catch((e)=> console.log("error",e));