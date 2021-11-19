const building = require('../models/building');
const district = require('../models/district');
const renttype = require('../models/renttype');
class HomePageController {

    //[GET] / (HOME PAGE)
    index(req, res) {
        //Pagination
        var page = parseInt(req.query.page) || 1;
        var perPage = 2;
        var start = (page -1) * perPage;
        var end = page * perPage ;
        var sum = 0;
        var residual = 0;
        //=========================================================
        var nameInput = new RegExp(req.query.name, 'i');
        building.find({ name: nameInput }, function (err, data) {
            if (err) throw err
            district.find(function (err, distrcits) {
                renttype.find(function (err, rentypes) {
                    var results = [];
                    var dis;
                    data.forEach(item => {
                        var rents = [];
                        distrcits.forEach(item2 => {
                            if (item2._id == item.districtid)
                                dis = item2.name;
                        })
                        item.renttypeids.forEach(item4 => {
                            rentypes.forEach(item3 => {
                                if (item3._id == item4) {
                                    rents.push(item3.name)
                                }

                            })
                        })
                        // var xuli = unique(rents)
                        var dataBuilding = {
                            "_id": item._id,
                            "name": item.name,
                            "rentarea": item.rentarea,
                            "imagelink": item.imagelink,
                            "address": item.street + "-" + item.ward + "-" + dis,
                            "renttypes": rents,
                            "note": item.note,
                            "managername": item.managername,
                            "managerphone": item.managerphone,
                            "rentprice": item.rentprice,
                            "sellprice": item.sellprice,
                            "rank": item.rank
                        }
                        results.push(dataBuilding)
                    });
                    sum = Math.floor(data.length / (perPage))
                    residual = data.length % (perPage)
                   // res.send("abc"  + data.length/perPage);
                   if(residual > 0 )
                    sum = sum +1 ;
                   //res.send(sum);
                    
                    res.render('index', {listBuilding: results.slice(start,end),SumPage : sum});
                })
            })
        })
        
        
       
       
    }
    
}
function SumPage(ItemPerPage) {
    var sum = 0;
    var residual = 0;
    building.find(function(err,data){
        sum = data.length / parseInt(ItemPerPage)
        residual = data.length % parseInt(ItemPerPage)
    }) 
    if(residual > 0 )
        sum = sum +1 ;
    return sum;      
}
module.exports = new HomePageController;