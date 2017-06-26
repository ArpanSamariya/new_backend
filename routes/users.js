var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send('First one '+req.params.id);
});


router.get('/hello', function(req, res, next) {
    res.send('Yes, Done!');
});

module.exports = router;
