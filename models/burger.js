var orm = require("../config/orm.js");

// will be imported into controllers/burger_controller.js
var burger = {
    // will be used in GET method
    selectAll: function (cb) {
        orm.selectAll ("burgers", function (res) {
            cb (res);
        });
    },
    // will be used in POST method
    insertOne: function (cols, vals, cb) {
        orm.insertOne ("burgers", cols, vals, function (res) {
            cb (res);
        });
    },
    // will be used in PUT method
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne ("burgers", objColVals, condition, function (res) {
            cb (res);
        });
    }
}

module.exports = burger;