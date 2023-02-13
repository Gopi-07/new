'use strict';
var mongoose=require('mongoose');
var User=mongoose.model('Users');
// const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
// const role={SuperAdmin,Admin,GeneralUser}

exports.list_all_users=function(req,res){
    User.find({},function(err,user){
        if(err)
            res.send(err);
        res.json(user);
        
    });
};

exports.create_a_user=function(req,res){
    var new_User=new User(req.body)
    new_User.save(function(err,user){
        if(err)
            res.send(err)
        res.json(user);
    });
};


// exports.read_a_user=function(req,res){
//     const fetchEmail=req.params.email

//     User.find(({email:fetchEmail}),function(err,user){
//         if(err)
//             res.send(err);
//         res.json(user);
//     });
// };

// Checking a user in signin pg when posting

exports.check_a_user=function(req,res){
    const emailId=req.body.email
    User.findOne({email:emailId},(err,user)=>{
        if(err) return res.status(500).json({
            title:'server error',
            error:err
        })
        if(!user){
            return res.status(401).json({
                title:'user not found',
                error:'invalid email'
            })
        }
        // if(!bcrypt.compareSync(req.body.password,user.password)){
        //     return res.status(401).json({
        //         title:'login failed',
        //         error:'invalid credential'
        //     })
        // }
        
        let token=jwt.sign({userid:user._id},'secretkey');
        return res.status(200).json({
            title:'login success',
            token:token
        })
    })
}

// getting a user in userDetail pg

exports.read_a_user=(req, res) => {
    let token = req.headers.token;
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'unauthorized'
      })

      //token is valid
      User.findOne({ _id:decoded.userid }, (err, user) => {
        if (err) return console.log(err)
        return res.status(200).json({
          title: 'user identified',
          user: {
            email: user.email,
            username: user.username,
            rolevalue:user.rolevalue,
            genvalue:user.genvalue,
            contact_no:user.contact_no,

          }
        })
      })
  
    })
  }

  // exports.getEmp=(req,res)=>{
  //   const rolevalue1=req.params.rolevalue
  //   if(rolevalue1=='Admin'){
  //     const role="General User"
  //      User.find({rolevalue:role},(err,user)=>{
  //       if(err)
  //         res.send(err)
  //       res.json(user)
  //      })
  //   }
   
  // }


  exports.getEmp=(req,res)=>{

      const role="General User"
       User.find({rolevalue:role},(err,user)=>{
        if(err)
          res.send(err)
        res.json(user)
       })
    }
   
    
  exports.getSp=(req,res)=>{
     User.find({},(err,user)=>{
      if(err)
        res.send(err)
      res.json(user)
     })
  }