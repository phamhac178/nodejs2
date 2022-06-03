const req = require("express/lib/request");
const userModel = require("../../../models/userModel");

class UserController {
    
    

    login(req,res){
        
        res.render("index");
    }
    async onLogin(req,res){
        var query = {userName: req.body.userName};
        var result = await userModel.find(query);
        console.log(result)
       if(result.length == 0){
            var errorMsg = 'Tài khoản ' + req.body.userName + ' không tồn tại';
            res.render('index', {errorMsg});
       }else{
            
            if(result[0].password == req.body.password){
                req.session.userId = result[0]._id.toString();
                req.session.userName = result[0].userName;
                res.redirect('/list');
            }else{
                var errorMsg = 'Sai mật khẩu';
                res.render('index', {errorMsg});
            }

        
       }
        
        
       
    }

    logout(req,res){
        req.session.destroy();
        res.redirect("/");
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
