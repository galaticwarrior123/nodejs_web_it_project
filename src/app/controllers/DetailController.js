const tro = require('../models/Tro')
const { mongooseToObject } = require('../../util/mongoose');
class DetailController {

    // [GET] /news/:slug
    show(req, res,next) {
        tro.findOne({ slug: req.params.slug })
            .then(tro => {
                res.render('detail/show', { tro: mongooseToObject(tro) });
            })
            .catch(next);
    }

}

module.exports = new DetailController;