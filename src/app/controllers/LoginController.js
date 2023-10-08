


class LoginController{

    login(req,res){
        res.render('login/log_in.hbs');
    }
}

module.exports = new LoginController;