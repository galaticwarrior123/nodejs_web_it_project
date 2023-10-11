const tro = require('../models/Tro')

const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController{


    // [GET] 
    index1(req,res,next){
        var page= parseInt(req.query.page) || 1;
        var perpage = 6;
        var start = (page-1)*perpage;
        var end = page*perpage;
        
        tro.find({}).then(dstro => {
            res.render('home',{
                dstro: mutipleMongooseToObject(dstro.slice(start,end)),
                page: page,
                totalPage: Math.ceil(dstro.length/perpage)
            });
        })
        
    }

 

}

module.exports = new SiteController;