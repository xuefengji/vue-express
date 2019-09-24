var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');
const User = require('../models/users');


//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_demo');

//监听数据库状态
mongoose.connection.on('connected',function () {
  console.log('MongoDB connected success');
})
mongoose.connection.on('error',function () {
  console.log('MongoDB connected fail');
})
mongoose.connection.on('disconnected',function () {
  console.log('MongoDB connected is disconnected');
})


router.get('/',function (req,res,next) {
  var page = parseInt(req.param('page'));
  var pageSize = parseInt(req.param('pageSize'));
  var sort = parseInt(req.param('sortBy'));
  var startPrice = parseInt(req.param('startPrice'));
  var endPrice = parseInt(req.param('endPrice'));
  var params = {
    salePrice: {
      $gt:startPrice,
      $lte:endPrice
    }
  };
  var count = (page - 1) * pageSize;
  var goodsModel = Goods.find(params);
  goodsModel.sort({'salePrice':sort}).skip(count).limit(pageSize);
  goodsModel.exec({}, function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message,
      })
    }
    else{
      res.json({
        status:'0',
        msg:'',
        result:{
          total:doc.length,
          list:doc
        }
      })
    }
  });
})

router.post('/addCart',function (req,res,next) {
  var userId = '100000077';
  var productId = req.body.productId;
  User.findOne({userId:userId},function (err,userDoc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      if(userDoc){
        var goodsItem = '';
        userDoc.cartList.forEach(function (item) {
          if(item.productId == productId){
            goodsItem = item;
            item.productNum ++;
          }
        });
        if(goodsItem){
          userDoc.save(function (err,doc) {
            if(err){
              res.json({
                status:'1',
                msg:err.message
              });
            }else {
              res.json({
                status:'0',
                msg:'',
                result:'sccucess'
              });
            }
          })
        }else {
          Goods.findOne({productId:productId},function (err,doc) {
            if(err){
              res.json({
                status:'1',
                msg:err.message
              });
            }else{
              if(doc){
                doc.productNum = 1;
                doc.checked = '1';
                userDoc.cartList.push(doc);
                userDoc.save(function (err,doc) {
                  if(err){
                    res.json({
                      status:'1',
                      msg:err.message
                    });
                  }else {
                    res.json({
                      status:'0',
                      msg:'',
                      result:'sccucess'
                    });
                  }
                });
              }else {
                res.json({
                  status:'1',
                  msg:err.message
                });
              }
            }
          })
        }
      }
    }
  });
})

module.exports = router;
