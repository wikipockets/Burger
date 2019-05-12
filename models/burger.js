//import orm 
//import orm from "../config/orm.js";

var orm = require('../config/orm.js')

//this variable (burger) 
var burger = {
   selectAll: function (cb) {
      orm.selectAll("burgers", function (res) {
         cb(res);
      });
   },
   // col and val variables are arrays boi
   // these are for the db creation in mysql
   insertOne: function (cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function (res) {
         cb(res);
      });

   },
   updateOne: function (objValCols, condition, cb) {
      orm.updateOne("burgers", objValCols, condition, function (res) {
         cb(res);
      });
   },
};

//sending db functions to burger_controller.js
module.exports = burger;