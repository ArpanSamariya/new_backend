var express = require('express');
var router = express.Router();
var URL="mongodb://nodemon:123456@ds131782.mlab.com:31782/vaioti";

const db=require('monk')(URL);

const docs=db.get('pro');
/* GET home page. */
router.get('/find', function(req, res, next) {
  //res.render('index', { title: 'Express' });

    docs.find({"_id":"594bb06db5e01a001147d1a5"},function (err,docs){
        if(err) console.log(err);
        else res.json(docs[0]);
    })
});
router.get('/insert', function(req, res, next) {
    //res.render('index', { title: 'Express' });

    docs.insert({first_name:"Hardik"},function (err,docs){
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