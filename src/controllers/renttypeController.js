const e = require('express');
const renttype = require('../models/renttype');

class renttypeController {
    //[GET] /renttype
    index(req, res) {
        renttype.find(function (err, data) {
            if (err)
                res.send(err);
            else {
                res.render('renttype/index', { listRenttype: data });
                //res.send(data);
            }
        })
    }
    //[GET] /renttype/insert
    insertView(req, res) {
        res.render('renttype/insert');

    }
    //[GET] /renttype/search
    searchName(req, res) {
        var nameRenttype = req.query.nameRenttype.toString();
        renttype.find({ name: nameRenttype }, function (err, data) {
            res.render('renttype/searchRenttype', { list: data });
        });
    }
    //[POST] /renttype/insert
    insertModel(req, res) {
        var data = req.body;
        var dataRenttype = {
            name: data.name
        }
        renttype.create(dataRenttype, function (err) {
            if (err)
                res.send(err);
            else {
                res.json("oke");
            }
        })
    }
    //[GET] /renttype/:id/update
    updateView(req, res) {
        var idRenttype = req.params.id;
        renttype.findOne({ _id: idRenttype }, function (err, data) {
            if (err)
                res.send(err);
            else {
                res.render('Renttype/update', { data: data });
            }

        })


    }
    //[PUT] /renttype/:id/update
    updateModel(req, res) {
        var idRenttype = req.params.id;
        var dataBody = req.body;
        var data = {
            name: dataBody.name
        }
        renttype.updateOne({ _id: idRenttype }, data, function (err, data) {
            if (err)
                res.send(err);
            else {
                res.json("oke");
            }
        })

    }
    //[DELETE] /renttype/:id/delete
    deleteModel(req, res) {
        var id = req.params.id;
        renttype.deleteOne({ _id: id }, function (err, data) {
            if (err)
                res.send(err);
            else {
                res.json("oke");;
            }
        })
    }

}
module.exports = new renttypeController;