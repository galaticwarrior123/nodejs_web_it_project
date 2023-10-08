const tro = require('../models/Tro')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController{

    // [GET] 
    index1(req,res,next){
        var c=req.query.page;
        if(c==null){
            tro.find({})
            .then(dstro => res.render('home',{ 
                dstro: mutipleMongooseToObject(dstro)
            }))
            .catch(next)
        }
        else{
            console.log({page:c})
            tro.find({page:c})
                .then(dstro => res.render('home',{ 
                    dstro: mutipleMongooseToObject(dstro)
                }))
                .catch(next)
        }
        
        
        
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