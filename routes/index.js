var express = require('express');
var router = express.Router();
var ctService = require('../service/ct-service.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Content-Tracker Manager'});
});

router.get('/getAllRecords', function (req, res, next) {
    ctService.getAllList(function (rows) {
        res.json(rows);
    });
});

router.post('/addNewRecord', function (req, res, next) {
    var post_data= req.body;
    ctService.addNewCtRecord(post_data);
    res.json("{info:'success!'}");
});

router.post('/deleteCTRecord', function (req, res,next) {
    var ct_id=req.body.id;
    console.log(ct_id);
    ctService.delCtRecord(ct_id)
});

module.exports = router;
