'use strict';

module.exports=function(app){
    var userList=require('../controllers/userListControllers');

    app.route('/detail').get(userList.list_all_users).post(userList.create_a_user);

    app.route('/login').post(userList.check_a_user).get(userList.read_a_user);
    
    app.route('/getEmp').get(userList.getEmp)
    
    app.route('/superadmin').get(userList.getSp)

};
