<template>
    

    <h1 class="detail_h"></h1>
    
    <!-- <RouterLink to="/signup">
        <el-button type="primary" class="bt">Add User</el-button>
    </RouterLink> -->
    <div class="detail">
    <el-table :data="User" border style="width: 75%" class="form1" :key="User._id">
        <el-table-column prop="username" label="User Name" style="margin-left:50%"  />
        <el-table-column prop="email" label="Email"  />
        <el-table-column prop="rolevalue" label="Role" />
        <el-table-column prop="genvalue"   label="Gender" />
        <el-table-column prop="contact_no" label="Contact" />
      </el-table>
      
    </div>

    </template>
    
    <script> 

    import axios from 'axios'
    
    export default{
        name:'SuperAdmin',
        data(){
            return {
    User:[]
            }
        },
        mounted(){
            axios.get('http://localhost:8000/superadmin').then((response)=>{
                console.log(response.data);
                this.User=response.data
            })
            .catch((error)=>{
                console.log(error);
            })
        },
    }
    
    </script>
    
    
    <style scoped>
    .detail{
       
        margin-top:1%;
        height:1000px
        
    }
    .detail_h{
        margin-top:0%;
        text-align:center;
        font-weight: bolder;
        font-size: xx-large;
        font-family: Algerian;
    }
    .bt{
    margin-left:80%
    }
    .form1{
        border-color: rgb(0, 0, 0);
        border-style: double;
        margin-left:15%;
        border-width:2px;
        font-weight: bolder;
    }
    .icon:hover{
        color:rgb(33, 33, 212);
        cursor:pointer
    }
    
    </style>