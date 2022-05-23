const userModel = require("../../../models/userModel");
class UserController {
    
    

    login(req,res){
        res.render("index");
    }

    register(req,res){
        res.render('register');
    }

    async registerSubmit(req,res){
        var query = {userName: req.body.userName};
        var result = await userModel.find(query);

        if(result.length == 0){
            console.log(req.body)
             const obj = await userModel.create(req.body);
             let userName = req.body.userName;
             console.log('ddawng ky thanh cong');
             res.render('index',{userName});
        }else{
           
            let errorMsg = 'UserName ' + req.body.userName + ' đã tồn tại!';
            res.render('register',{errorMsg});
        }

        
       
    }
}

module.exports = new UserController();
