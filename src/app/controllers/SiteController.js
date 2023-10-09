const tro = require('../models/Tro')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController{

    // [GET] 
    index1(req,res,next){
        var c=req.query.page;
        
        tro.find({page: {$eq:c}})
            .then(dstro => res.render('home',{ 
                dstro: mutipleMongooseToObject(dstro)
            }))
            .catch(next)
        
    }

    index2(req,res,next){
        var c=req.params.slug;
        var d=req.query.page;
        res.json({
            name: c,
            age: d})
        
    }

}

module.exports = new SiteController;