var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create our burger routes and set up logic within those routes where required.
router.post("/api/burgers", function(req, res) {
	console.log(req.body);
	burger.insertOne("burgers", ["burger_name"], [req.body.burger_name], function(result) {
		// res.json({ id: result.insertId});
		res.redirect("/");
	});
});

router.put("/api/update", function(req, res) {
	var condition = " id = " + req.body.burger_id;
	console.log("condition", condition);

	burger.updateOne(condition, function(result) {
		if (result.changedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		}
		else {
			res.redirect("/");
		}
	});
});

module.exports = router;