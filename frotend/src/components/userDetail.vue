
<template>
    <el-button type="primary" @click="logout" class="btn1">logout</el-button>
    <div v-if="User.rolevalue==='General User'" class="detail">
      
      <h1 class="h2">Hiii, {{ User.username }}</h1>
      
      <el-table :data="User" border style="width: 75%" class="table">
    <el-table-column prop="username" label="User Name"  > {{ User.username }}</el-table-column>
    <el-table-column prop="email" label="Email"  >{{ User.email }}</el-table-column>
    <el-table-column prop="rolevalue" label="Role" >{{ User.rolevalue }}</el-table-column>
    <el-table-column prop="genvalue" label="Gender">{{ User.genvalue }}</el-table-column>
    <el-table-column prop="contact_no" label="Contact" >{{ User.contact_no }}</el-table-column>
  </el-table>
</div>
<div v-if="User.rolevalue==='Super Admin'">
  <h1 class="h1">Helloo, {{ User.username }}</h1>
<!-- <detail /> -->
<super-admin />
</div>
<div v-if="User.rolevalue==='Admin'">
  <h1 class="h1">Helloo, {{ User.username }}</h1>
<admin />
</div>

</template>

<script>
import axios from 'axios'
import detail from './detail.vue'
import Admin from './Admin.vue'
import SuperAdmin from './SuperAdmin.vue'
export default{
    name:'userDetail',
    components:{detail,Admin,SuperAdmin},
    data(){
        return {
User:[
{
    username:'',
    email:'',
    rolevalue:'',
    contact_no:'',
    genvalue:'',
   
        }
        ]
      }
    },

    created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
console.log('failed')
    }
  },
  mounted() {
    axios.get('http://localhost:8000/login', { headers: { token: localStorage.getItem('token')}})
      .then(res => { {
        this.User.username = res.data.user.username,
        this.User.email = res.data.user.email,
        this.User.rolevalue=res.data.user.rolevalue,
        this.User.genvalue=res.data.user.genvalue,
        this.User.contact_no=res.data.user.contact_no
      
      }

        })
 
      console.log('fetched')
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/signin')
      alert('Are you logging out?')
      console.log("logged out")
    },

  }

}


</script>

<style scoped>
.detail{
   
   margin-left:15%;
   margin-top:0%;
}
.btn1{
    margin-left:93%;
    margin-top:1%;
    position:fixed
}
.table{
  margin-left:0%;
 
}
.h1{
  margin-left:15%;
  font-weight: bold;
  font-style: italic;
  color:rgb(11, 63, 233);
  margin-top:10%
}
.h2{
  font-style: italic;
  margin-top:10%
}
</style>