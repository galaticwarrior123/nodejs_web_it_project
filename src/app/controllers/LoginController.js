

class LoginController{
    
    // btn=document.querySelector(".btn1");
    // [GET] /login
    login(req,res){
         res.render('login');
    }
}

module.exports = new LoginController;