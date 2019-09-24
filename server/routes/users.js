var express = require('express');
var router = express.Router();
const User = require('./../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // next();
});

router.post('/login',function (req,res,next) {
  var params = {
    userName:req.body.userName,
    pwd:req.body.pwd
  };
  User.findOne({userName: params.userName},function (err,doc) {
    if(err){
      res.json({
        status: '1',
        msg: '1'
      });
    }else {
      if(doc){
        if(doc.userName == params.userName && doc.userPwd == params.pwd){
          req.session.login = '1';
          req.session.userName = doc.userName;
          res.json({
            status: '0',
            msg: '',
            result: doc.userName
          });
        }else {
          res.json({
            status: '1',
            msg: 'fail',
          });
        }
      }
    }
  });
})

router.post('/logput',function (req,res,next) {
  req.session.login = ''
})

module.exports = router;
