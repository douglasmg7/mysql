#!/usr/bin/env node
var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'saladino',
	database: 'test'
});

con.connect(function(err) {
	if(err){
		console.log('error connecting to db');
		return;
	}
	console.log('connected');
});

con.query('select * from pet', function(err, rows, fields) {
	if(err) throw err;
	console.log('row count: ' + rows.length);
	console.log(JSON.parse(JSON.stringify(rows)));
	console.log(fields);
	// console.log(rows[2]);
});

con.end(function(err) {

});