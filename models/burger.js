//import orm 
import orm from "../config/orm.js";


var burger = {
   selectAll: function (cb) {
      orm.selectAll("burgers", function (res) {
         cb(res);
      });
   },
   // col and val variables are arrays boi
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