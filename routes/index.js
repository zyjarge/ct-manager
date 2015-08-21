var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Content-Tracker Manager' });
});

router.get('/getAllRecords', function (req, res, next) {
    var connection = mysql.createConnection({
        host     : '192.168.16.241',
        user     : 'root',
        password : 'microlens',
        database : 'microlens_master'
    });

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });


    connection.query('select * from content_tracking_base order by id desc', function(err, rows, fields) {
        if (err) throw err;
    });

    connection.end();
});
module.exports = router;
