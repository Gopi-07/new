<template>

<div>

<br>
   <el-container class="a">
 <el-header class="h">Sign In</el-header>

<body class="signin">
 <el-form ref="formRef" :model="User" status-icon>
<!-- <el-form-item prop="username" :rules="[{required:true,message:'',trigger:'blur'}]">
   <el-input v-model="User.username" type="text" placeholder="User Name" style="width:200px" required />
  </el-form-item> -->

  <el-form-item  prop="email" :rules="[{required:true,message:'',trigger:'blur'}]">
   <el-input v-model="User.email" type="text" placeholder="Email" style="width:200px;" />
   {{ User.error }}
  </el-form-item>
  
  <el-form-item  prop="password" :rules="[{required:true,message:'',trigger:'blur'}]">
   <el-input v-model="User.password" type="password" placeholder="Password" style="width:200px;" show-password />
  </el-form-item>


<el-form-item class="f1">
<!-- <RouterLink to="/userDetail"> -->
<el-button type="success" round @click="doLogin" style="width:200px">Log in</el-button>
<!-- </RouterLink> -->
</el-form-item>

<el-form-item>
<p>Not a member?
  <RouterLink to="/signup">
<el-button type="primary">Sign up</el-button>

</RouterLink></p></el-form-item>

 </el-form>
</body>

</el-container>
</div>
</template>

<script>

import axios from 'axios'

export default{
    name:'signin',
  data() {
    return{
      User:{
      email:'',
      password:'',
      emptyFields:false,
      error:''
      
    }
  
}
  },
  methods:{

   async doLogin(){
if(this.User.password==="" && this.User.email===""){
  this.emptyFields=true
}
else{

  let user={
  email:this.User.email,
  password:this.User.password,


  }
 console.log(user);
 await axios.post('http://localhost:8000/login',user)

.then(res => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            console.log('success')
            this.$router.push('/userDetail')
          }
        }, err => {
          console.log(err.response);
          this.User.error = err.response.data.error
        })


}
    },

}

}  
</script>

<style>

.a{
  margin-top:10%;
  margin-left:43%
}
.h{
  font-weight: 200;
  font: bold;
  font-size:x-large;
  font-family: Arial, Helvetica, sans-serif;
  color:rgb(0, 68, 255);
  margin-left:4%
}

.f1{
  margin-left:0%;
  

}
</style>