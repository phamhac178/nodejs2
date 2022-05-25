const userModel = require("../../../models/userModel");
class UserController {
    
    

    login(req,res){
        res.render("index");
    }
    async onLogin(req,res){
        var query = req.body;
        var result = await userModel.find(query);
       if(result.length == 0){

       }else{
        res.redirect('/list');
       }
        
        
       
    }

    register(req,res){
        res.render('register');
    }

    async registerSubmit(req,res){
        var query = {userName: req.body.userName};
        var result = await userModel.find(query);

        if(result.length == 0){
           
             const obj = await userModel.create(req.body);
             let userName = req.body.userName;
            
             res.render('index',{userName});
        }else{
           
            let errorMsg = 'UserName ' + req.body.userName + ' đã tồn tại!';
            res.render('register',{errorMsg});
        }

        
       
    }
}

module.exports = new UserController();
