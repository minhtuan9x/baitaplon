const buildingRoute = require('../routes/building');

function route(app) {

    app.use('/building',buildingRoute); 

    //[GET] / (trang chu)
    app.get('/', (req, res) => {
        res.send("HOME PAGE");
    });
}
module.exports = route;