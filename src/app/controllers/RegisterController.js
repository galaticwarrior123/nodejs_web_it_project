
class RegisterController{
    index(req, res){
        res.render('login');
    }

    
}

module.exports = new RegisterController;