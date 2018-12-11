var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll (function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log (hbsObject);
        res.render ("index", hbsObject);
    });
});

// development purpose --> page to see the json object of all burgers
router.get("/api/burgers", function (req, res) {
    burger.selectAll (function (data) {
        res.json(data);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (data) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log ("condition", condition);

    burger.updateOne({devoured: req.body.devoured}, condition, function (data) {
        res.status(200).end();
    });

});

module.exports = router;



