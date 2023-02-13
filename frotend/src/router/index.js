import {createRouter,createWebHistory} from 'vue-router';
import home from '../components/home.vue'
import signin from '../components/signin.vue';
// import form from '../components/form.vue'
import signup from '../components/signup.vue'
import detail from  '../components/detail.vue'
import userDetail from '../components/userDetail.vue'


const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:home
        },
            
{
    path:'/signin',
    name:'signin',
    component:signin
},
    
       {
        path:'/signup',
         name:'signup',
         component:signup
    },

    { 
      path:'/detail',
      name:'detail',
      component:detail
 },
    
 { 
  path:'/userDetail',
   name:'userDetail',
   component:userDetail
}

]
})
export default router