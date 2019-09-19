var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');


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
  let page = parseInt(req.param('page'));
  let pageSize = parseInt(req.param('pageSize'));
  let sort = parseInt(req.param('sortBy'));
  let startPrice = parseInt(req.param('startPrice'));
  let endPrice = parseInt(req.param('endPrice'));
  let params = {
    salePrice: {
      $gt:startPrice,
      $lte:endPrice
    }
  };
  let count = (page - 1) * pageSize;
  let goodsModel = Goods.find(params);
  goodsModel.sort({'salePrice':sort}).skip(count).limit(pageSize);
  goodsModel.exec({}, function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
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


module.exports = router;
