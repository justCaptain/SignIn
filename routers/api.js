

var express = require("express");
var router = express.Router();

router.use("/loginAuth",function(req,res,next){
    console.log(req.body);
    res.send(req.body);
});

router.use("/registerAuth",function(req,res,next){
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;