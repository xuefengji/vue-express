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
          <dl>PRICE:
            <dt><a href="javascript:;" :class="{'active':priceChecked=='All'}">All</a></dt>
            <dd v-for="(item,index) in priceFiter" :key="index">
              <a href="javascript:;" @click="priceChecked=index" :class="{'active':priceChecked==index}">{{item.startPrice}}~{{item.endPrice}}</a>
            </dd>
          </dl>
        </el-aside>
        <el-main>
          <el-row>
            <el-col :span="6" v-for="(item,index) in goodsList" :key="index">
              <div class="grid-content bg-purple bg">
                <div >
                  <img v-lazy="'./../static/'+item.productImage" alt="" class="img-top">
                </div>
                <div>
                  {{item.productName}}
                </div>
                <div>
                  {{item.salePrice}}
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
      goodsList: [],
      total:0,
      priceChecked: 'All',
      priceFiter: [
        {
          startPrice:"0",
          endPrice:"100"
        },
        {
          startPrice:"100",
          endPrice:"500"
        },
        {
          startPrice:"500",
          endPrice:"1000"
        },
        {
          startPrice:"1000",
          endPrice:"2000"
        }
      ]
    }
  },
  mounted (){
    this.getGoods();
  },
  methods:{
    getGoods () {
      axios.get('/goods').then((result)=>{
        let res = result.data;
        if(res.status == '0'){
          this.goodsList = res.result.list;
          this.total = res.result.total;
        }
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
  dl dd,dt{
    display: block;
    /*width: 200px;*/
    margin: 10px;
    text-align: center;
  }

  dl a{
    padding: 2px;
    color: #000;
  }
  dl dt:hover,dd:hover{
    transform: scaleX(1.3);
  }
  dl a:hover{

    color: red;
  }
  .active{
    transform: scaleX(1.3);
    color: red;
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
