const tro = require('../models/Tro')
const { mongooseToObject } = require('../../util/mongoose');
class TroController{

    
    // [GET] 
    show(req,res,next){
        // tro.findOne({ slug: req.params.slug })
        //     .then(dstro => {
        //         res.render('page',{ dstro: mongooseToObject(dstro) })
        //     })
        //     .catch(next)

        console.log(req.params.slug)
    }

    ret(req,res){
        res.render('search.hbs')
    }

}

module.exports = new TroController;