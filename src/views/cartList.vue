<template>
    <el-container class="main">
      <el-main>
        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple">ITEMS</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">PRICE</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">QUANTITY</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">SUBTOTAL</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">EDIT</div></el-col>
        </el-row>
        <el-row class="data-row">
          <el-col :span="8">
            <div class="text-left">
              <a href="javascript:;" class="select"></a>
            </div>
            <img src="../../static/6.jpg" alt="" class="col-img">
            <span class="col-span">智能插线板</span>
          </el-col>
          <el-col :span="4"><div class="col-center">59.00</div></el-col>
          <el-col :span="4">
            <div class="col-center">
              <el-input-number v-model="num" size="small" @change="handleChange" :min="1" label="描述文字"></el-input-number>
            </div>
          </el-col>
          <el-col :span="4"><div class="col-center">59.00</div></el-col>
          <el-col :span="4"><a href="javascript:;"><i class="el-icon-delete col-center"></i></a></el-col>
        </el-row>
        <el-row class="data-row total">
          <el-col :span="14">
            <div class="text-left">
              <a href="javascript:;" class="select1"></a>
            </div>
            <span class=" col-span col-span1">Select All</span>
          </el-col>
          <el-col :span="6">
            <span class="col-span1">Item total:0.00</span>
          </el-col>
          <el-col :span="4">
            <span><a href="javascript:;">CHECKOUT</a></span>
          </el-col>
        </el-row>
      </el-main>

    </el-container>
</template>

<script>
  import axios from 'axios'
  import NavBread from "../components/NavBread";
export default {
  name: 'cartList',
  components: {NavBread},
  data () {
    return {
      num:1
    }
  },
  methods:{
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<style>
  a{
    text-decoration: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gray;
  font-size: 14px;
  background-color: #fff;
  /*margin-top: 60px;*/
}
  .main {
    margin-top: 40px;
  }
  .title-h2{
    margin-left: 40px;
  }
  .el-row {
    /*margin-bottom: 20px;*/
    text-align: center;
    color: white;

  }
  .bg-purple {
    background: #605f5f;
  }
  .grid-content {
    min-height: 36px;
    line-height: 36px;
  }
  .data-row{
    padding: 20px;
    min-height: 72px;
    border: 1px solid #e9e9e9;
  }
  .text-left{
    text-align: left;
    padding-left: 20px;
  }
  .select,.select1{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #999;
    line-height: 20px;
    /*text-align: center;*/
    vertical-align: middle;
    cursor: pointer;
    float: left;
    margin-top: 30px;
  }
  .select1{
    margin-top: 5px;
  }
  .col-img{
    width: 80px;
    height: 80px;
    float: left;
    margin-left: 20px;
    border: 1px solid #e9e9e9;
  }
  .col-span{
    float: left;
    margin-top: 30px;
  }
  .col-span,.col-span1{
    color: #333;
    font-weight: 600;
    vertical-align: middle;
    margin-left: 20px;
  }
  .col-span1{
    margin-top: 5px;
  }
  .col-center{
    margin-top: 30px;
    font-size: 18px;
    color: #333;
   }
  .total{
    margin-top: 20px;
    height: 54px;
  }
</style>
