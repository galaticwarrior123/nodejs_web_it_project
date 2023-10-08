const tro = require('../models/Tro')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController{

    // [GET] 
    index1(req,res,next){
        tro.find({})
            .then(dstro => res.render('home',{ 
                dstro: mutipleMongooseToObject(dstro)
            }))
            .catch(next)
        
    }

    // [GET] /search
    search(req, res) {
        res.render('log_in');
    }

}

module.exports = new SiteController;