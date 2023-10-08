const newsRouter = require('./news');
const siteRouter = require('./site');
const troRouter=require('./dstro')
const createRouter=require('./create')
function routes(app) {
    // app.get('/', (req, res) => {
    //     res.render('home');
    //   })
      
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })
    app.use('/create',createRouter)
    app.use('/page', troRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
      
    // app.get('/search', (req, res) => {
    //   res.render('search');
    // })
      
    // app.post('/search', (req, res) => {
    //   res.send(' ');
    // })
}

module.exports = routes;