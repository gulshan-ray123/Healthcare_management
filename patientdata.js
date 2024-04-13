const mongoose = require("mongoose");
const plm=require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/healthcare");

const PatientSchema= mongoose.Schema({
    First_name:{
    type:String,
    require:true,
   },
   Middle_name:{
    type:String,
   },
   Last_name:{
     type:String,
   },
   Mobile:{
    type:Number,
    require:true,
   },
   username:{
    type:String,
   },
   D_O_B:{
 type:Date,
 require:true,
   },
   Town:{
    type:String,
    require:true,
   },
   Post_office:{
    type:String,
    require:true,
   },
   Locality:{
    type:String,
   },
   District:{
    type:String,
    require:true,
   },
   State:{
    type:String,
   },
   Pincode:{
    type:Number,
    require:true,
   },
   Nominee:{
    type:String,
    require:true,
   },
   Phone:{
    type:Number,
    require:true,
   },
   Relation:{
    type:String,
    require:true,
   },
});
PatientSchema.plugin(plm);
module.exports= mongoose.model("Patientdata", PatientSchema);