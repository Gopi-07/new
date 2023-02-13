'use strict';
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    username:{
        type:String,
        Required:'Please enter the field'
    },
    password:{
        type:String,
        Required:'Please enter the field'
    },
    email:{
        type:String,
        Required:'Please enter the field'
    },
    rolevalue:{
        type:String,
        Required:'Please enter the field'
    },
    genvalue:{
        type:String,
        Required:'Please enter the field'
    },
    contact_no:{
        type:Number,
        Required:'Please enter the field'
    }

});
module.exports=mongoose.model('Users',userSchema)