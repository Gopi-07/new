<template>
   <RouterLink to="/signin"><el-button type="primary" class="rt">SignIn </el-button> </RouterLink>
   <el-container class="co">
    <el-header class="home_h">#ABOUT</el-header>
    <el-body  class="cl"><ul class="ul"><br />
        <li>Avow Solutions is a global technology consulting and IT services company that enables enterprises across industries to drive superior competitive advantage, customer experiences and business outcomes by harnessing digital and cloud technologies.</li><br />

        <li>Our technology breakthroughs address some of the world’s biggest challenges by helping industries such as logistics & supply chain, manufacturing, automotive, and education become smarter and more connected for the benefit of us all.</li><br />

        <li>A digital transformation partner to the world’s most pioneering enterprises, Avow Solutions brings extensive domain, technology and consulting expertise to help reimagine business models, accelerate innovation and maximize growth. As a socially and environmentally responsible business, Avow Solutions is focused on growth as well as sustainability in building long-term stakeholder value.</li> 
    </ul>
    </el-body>
</el-container>
</template>

<script>

// import axios from 'axios'
export default{
    name:'home',
}

</script>
<style scoped>
.home_h{
font-size:xx-large;
font-family: Georgia, 'Times New Roman', Times, serif;
font-style:oblique;
font-smooth:initial;
margin-top:5%;
font-size:x-large
}
.rt{
    margin-left:93%;
    margin-top:1%;
    position:fixed
}
.cl{

    height:400px;
    margin-right:30%;
    background-color:navy;
    text-justify: auto;
}
.co{
    height:1500px;
    margin-top: 2%;
}
.ul{
    margin-left:1%;
    font-style: italic;
    font-size: large;
    color:azure;
    line-height:1.5;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    align-content:center;
    margin-top: 0%;
}
</style>