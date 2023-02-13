
<template>
 
<div class="app">
  <el-header class="home_h">AVOW ESOLUTIONS & LOGISTICS PVT LTD</el-header>
 <nav>
  <RouterLink to="/" class="to">Home</RouterLink><br>
<!-- <RouterLink to="/signin"><el-button type="primary">SignIn </el-button> </RouterLink><br> -->
<!-- <RouterLink to ="/signup">SignUp</RouterLink><br><br> -->
</nav>
</div>
<RouterView />
</template>

<script>

import { RouterLink , RouterView } from 'vue-router';

export default {

  name:'App',
 
}

</script>

<style scoped>
/* .app{
  margin-left: 88%;
  text-align: left;
  margin-top:40px
} */
.home_h{
font-size: xx-large;
font-weight: bolder;
font-family: Algerian;
text-align:center;
margin-top:3%;
position:fixed

}
.to{
  margin-left:94%;
  position:fixed
}

</style>

