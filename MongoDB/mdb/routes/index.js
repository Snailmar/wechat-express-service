/*
 * @Author: vigorzhang
 * @Date: 2020-03-21 10:14:16
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-22 23:44:23
 * @Description: 
 */
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('req',req.hostname)
  res.render('index', { title: 'Express' });
});
router.get('/home',function(req,res,next){
      res.render('home',{title:'myecpress'})
})
module.exports = router;
