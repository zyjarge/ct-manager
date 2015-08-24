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
    console.log(req.body);
    res.json("{info:'success!'}");
});

module.exports = router;
