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


exports.addNewCtRecord = function (new_ct) {
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO content_tracking_base  SET ?', new_ct, function (err, result) {
            connection.release();
        });

    });
}

exports.delCtRecord = function (ct_id) {
    pool.getConnection(function (err, connection) {
        connection.query('delete from content_tracking_base where id = ?', ct_id, function (err, result) {
            connection.release();
        });
    });
}