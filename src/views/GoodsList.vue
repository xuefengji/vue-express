<template>
  <div id="app">
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <el-container class="main">
      <el-header>
        <div class="top">
          <span>Sort by:</span>
          <a href="javascript:;">Default</a>
          <a href="javascript:;">Price</a>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div>PRICE:</div>
          <ul>
            <li class="active"><a href="javascript:;">All</a></li>
            <li><a href="javascript:;">0.00-100.00</a></li>
            <li><a href="javascript:;">0.00-100.00</a></li>
            <li><a href="javascript:;">0.00-100.00</a></li>
            <li><a href="javascript:;">0.00-100.00</a></li>
            </ul>
        </el-aside>
        <el-main>
          <el-row>
            <el-col :span="6" v-for="(item,index) in goodsList" :key="index">
              <div class="grid-content bg-purple bg">
                <div >
                  <img :src="'./../static/'+item.productImage" alt="" class="img-top">
                </div>
                <div>
                  {{item.productName}}
                </div>
                <div>
                  {{item.productPrice}}
                </div>
                <el-button type="danger">加入购物车</el-button>
              </div>
            </el-col>
          </el-row>

        </el-main>
      </el-container>
    </el-container>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavHeader from '@/components/NavHeader'
  import NavBread from '@/components/NavBread'
  import NavFooter from '@/components/NavFooter'
  import axios from 'axios'
export default {
  name: 'GoodsList',
  data () {
    return {
      goodsList:[]
    }
  },
  mounted (){
    this.getGoods();
  },
  methods:{
    getGoods () {
      axios.get('/goods').then((result)=>{
        let res = result.data;
        this.goodsList = res.result;
      })
        .catch(err=>{
          console.log(err)
        })
    }
  },
  components: {
    NavHeader,
    NavBread,
    NavFooter
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
  .top{
    float: right;
  }
  ul li{
    list-style: none;
    text-align: center;
    margin: 10px;
    text-align: left;
  }
  .active{
    border-left: 2px solid red;
  }
  ul li a{
    padding: 2px;
    color: #000;
  }
  .bg{
    width: 85%;
    height: 300px;
    /*background-color: red;*/
    border: 1px solid red;
    box-shadow: 5px 5px #f0f0f0;
  }
  .bg:hover{
    box-shadow: 5px 5px 5px #888;
    transform: scaleY(1.1);
  }
  .img-top{
    width: 220px;
    height: 220px;
  }
</style>
