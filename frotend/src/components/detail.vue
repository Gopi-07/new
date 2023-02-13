<template>
    

<h1 class="detail_h">Employee Details</h1>

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
    
<!-- <el-table-column  label="Operation"> -->
        <!-- <el-row> -->
        <!-- <el-button @click="alert('hii')" type="primary" style="margin-left:30%;">view</el-button> -->
    <!-- </el-row> -->
    <!-- <el-icon style="margin-left:40%;" type="primary" class="icon"><View @click="dialog=!dialog" /></el-icon> -->
<!-- </el-table-column> -->
  </el-table>


</div>
<!-- <el-dialog v-show="!dialog"> -->
<!-- <el-form :data="User">
    <el-form-item prop="username" label="username" />
    <el-form-item prop="email" label="email" />
</el-form> -->
<!-- 
hiiii

</el-dialog> -->
</template>

<script>
import axios from 'axios'

export default{
    name:'detail',
    data(){
        return {
User:[]
        }
    },
    mounted(){
        axios.get('http://localhost:8000/detail').then((response)=>{
            console.log(response.data);
            this.User=response.data
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    // methods:{
    //     view(id){
            
    //             axios.get('http://localhost/getEmp/:id').then((res)=>{
    //                 console.log(res.data)
    //             }).catch((error)=>{
    //                 console.log(error)
    //             })
                
            
    //     }
    // }
}

</script>


<style scoped>
.detail{
   
    margin-top:1%;
    height:1000px
    
}
.detail_h{
    margin-top:9%;
    text-align:center;
    font-weight: bolder;
    font-size: xx-large;
    font-family: Algerian;
    color:blueviolet
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