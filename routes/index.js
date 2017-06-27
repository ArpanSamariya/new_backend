var express = require('express');
var router = express.Router();
var URL="mongodb://nodemon:123456@ds131782.mlab.com:31782/vaioti";
var URL="mongodb://arpan:arpansam@ds133162.mlab.com:33162/bus";

const db=require('monk')(URL);

const docs=db.get('u');
/* GET home page. */
router.get('/find', function(req, res, next) {
  //res.render('index', { title: 'Express' });

    docs.find({"_id":"594bb06db5e01a001147d1a5"},function (err,docs){
        if(err) console.log(err);
        else res.json(docs[0]);
    })
});
router.post('/insert', function(req, res, next) {
    var username_back=req.body.name; //name is key of json//
    var password_back=req.body.password;

    docs.insert({"name":username_back,"password":password_back},function (err,docs){
        if(err) console.log(err);
        else res.json(docs);
    })
});
router.get('/wel', function(req, res, next) {
    res.send('Sahi Chal rha hai!');
});
router.get('/push',function(req,res,next) {
    docs.update({"id":"5e458"},{$push:{"group":{"name":"Lucky"}}},function (err,docs) {
        if(err) console.log(err);
        else res.json(docs);

    })
});

module.exports = router;