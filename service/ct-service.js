/**
 * Created by zhangyong on 2015/8/24.
 */
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 3,
    host: '192.168.16.241',
    user: 'root',
    password: 'microlens',
    database: 'microlens_master'
});

exports.getAllList = function (cb) {
    pool.getConnection(function (err, connection) {
        connection.query('select * from content_tracking_base order by id desc', function (err, rows) {
            connection.release();
            cb(rows);
        });
    });
}


exports.addNewCtRecord = function(cb){

}