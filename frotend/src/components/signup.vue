<template>
   <div>
    <br>
<el-container class="b">
    <el-header class="sign_h">Sign Up</el-header>
    <body class="d">
        <el-form class="c"  :model="User" status-icon>

            <!-- :ref="formRef" -->

<el-form-item prop="username" :rules="[{required:true,message:'',trigger:'blur'}]">

           <el-input v-model="User.username" type="text" placeholder="User Name" required/>
</el-form-item>

<el-form-item prop="password" :rules="[{required:true,message:'',trigger:'blur'}]">
           <el-input v-model="User.password" type="password" placeholder="New password" show-password />
        </el-form-item>

           <el-form-item prop="email" :rules="[{required:true,message:'',trigger:'blur'}]">
           <el-input v-model="User.email" type="text" placeholder="Email" required />
           </el-form-item>

 <el-form-item prop="contact_no" :rules="[{required:true,message:'',trigger:'blur'}]">
           <el-input v-model="User.contact_no" type="Number" placeholder="Contact" max:10 min:10  required/>
</el-form-item>

<el-form-item>
           <el-select v-model="User.genvalue" placeholder="Gender" required>
                <el-option value="male">Male</el-option>
                <el-option value="female">Female</el-option>
        </el-select>
    </el-form-item>

    <el-form-item>
        <el-select v-model="User.rolevalue" placeholder="Select role" required>
        <el-option value="Super Admin">Super Admin</el-option>
        <el-option value="Admin">Admin</el-option>
        <el-option value="General User">General User</el-option>
    </el-select>
</el-form-item>

    <!-- <RouterLink to="/detail"> -->
<el-button type="primary" class="btn" @click="doCreate">Create Account</el-button>
<!-- </RouterLink> -->
        </el-form>
    </body>
</el-container>
</div>
</template>


<script>
import axios from 'axios';

export default{
    name:'signup',
    data(){
        return{
            User:
            {
            rolevalue:'',
            genvalue:'',
            username:'',
            password:'',
            email:'',
            contact_no:'',
            emptyField:false,
            empty:false
        }
        }
    },
    methods:{
        // alert(){
        //     alert("created")
        // },
        doCreate(){
if(this.User.username==="" || this.User.password===""||this.User.genvalue===""||this.User.rolevalue===""||this.User.contact_no===""||this.User.email===""){
  this.User.emptyField=true
}
else{

  this.aler()
}
        },
//     }
aler(){
    let newUser={
        username:this.User.username,
        password:this.User.password,
        genvalue:this.User.genvalue,
        rolevalue:this.User.rolevalue,
        email:this.User.email,
        contact_no:this.User.contact_no
    }
    console.log(newUser);
    axios.post('http://localhost:8000/detail',newUser).then((response)=>{
        console.log(response);
        this.$router.push('/detail')
        // this.$router.push('/signin')
    })
    .catch((error)=>{
        console.log(error)
    });
}
}
}
</script>




<style scoped>
.b{
    text-align:center;
    margin-top:5%;
}
.c{
width:200px;
line-height:1.5;


}
.d{
    margin-left:43%;
    /* text-align:center */
}
.sign_h{
    font-weight: 200;
  font: bold;
  font-size:x-large;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color:blue;
}



</style>
<!-- .btn{
    background-color: rgb(14, 131, 240);
    border-color: white;
    padding:4px
}
.btn:hover{
    cursor:pointer
} -->