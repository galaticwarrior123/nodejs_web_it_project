const course = require('../models/Tro')
const { mongooseToObject } = require('../../util/mongoose');
class CourseController{

    
    // [GET]
    // show(req,res,next){
    //     course.findOne({slug:req.params.slug})
    //         .then(courses => res.render('courses/show',{ 
    //             courses: mongooseToObject(courses)
    //         }))
    //         .catch(next)
        
        
    // }
    search(req, res) {
        res.render('home');
    }
    

}

module.exports = new CourseController;