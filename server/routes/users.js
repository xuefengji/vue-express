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
          res.cookie('userId',doc.userId,{path:'/',maxAge:1000*60*60});
          res.cookie("userName",doc.userName,{
            path:'/',
            maxAge:1000*60*60
          });
          // req.session.login = '1';
          // req.session.userName = doc.userName;
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

router.post('/logout',function (req,res,next) {
  res.cookie('userId','');
  res.cookie("userName",'');
  res.json({
    status:'0',
    msg:'',
    result:''
  })
})

router.get('/checklogin',function (req, res, next) {
  if(req.cookies.userName){
    res.json({
      status:'0',
      msg:'',
      result:req.cookies.userName
    })
  }

})

module.exports = router;
