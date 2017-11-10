var orm = require("../config/orm.js");

var burger =  {
	selectAll: function(table, callback) {
		orm.selectAll(table, function(res) {
			callback(res);
		});
	},

	insertOne: function(table, cols, vals, callback) {
		orm.insertOne(table, cols, vals, function(res) {
			callback(res);
		});
	},

	updateOne: function(condition, callback) {
		orm.updateOne("burgers", {devoured: true}, condition, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;

