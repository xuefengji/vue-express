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
          <a href="javascript:;" @click="sortPrice">
            <span>Default</span>
            <span>Price</span>
          </a>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <dl>PRICE:
            <dt><a href="javascript:;" :class="{'active':priceChecked=='All'}" @click="setPriceFiter('all')">All</a></dt>
            <dd v-for="(item,index) in priceFiter" :key="index">
              <a href="javascript:;" @click="setPriceFiter(index)" :class="{'active':priceChecked==index}">{{item.startPrice}}~{{item.endPrice}}</a>
            </dd>
          </dl>
        </el-aside>
        <el-main>
          <el-row>
            <el-col :span="6" v-for="(item,index) in goodsList" :key="index" class="good-col">
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
                <el-button type="danger" @click="addCart(item.productId)">加入购物车</el-button>
              </div>
            </el-col>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
              加载更多...
            </div>
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
      username:'',
      goodsList: [],
      total:0,
      priceChecked: 'All',
      startPrice:0,
      endPrice:5000,
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
          endPrice:"5000"
        }
      ],
      sortBy: true,
      page:1,
      pageSize:8,
      busy:false
    }
  },
  mounted (){
    // this.checkLogin();
    this.getGoods();
  },
  methods:{
    getGoods (flag) {
      let params = {
        sortBy:this.sortBy?1:-1,
        page:this.page,
        pageSize: this.pageSize,
        // priceLevel:this.priceChecked,
        startPrice:this.startPrice,
        endPrice:this.endPrice

      }
      axios.get('/goods',{params:params}).then((result)=>{
        let res = result.data;
        if(res.status == '0'){
          if(flag){
            this.goodsList = this.goodsList.concat(res.result.list);
            this.total = res.result.total;
            if(res.result.total == 0){
              this.busy = true;
            }else {
              this.busy = false;
            }
          }else {
            this.goodsList = res.result.list;
            this.busy = false
          }
        }else{
          this.goodsList = [];
        }
      })
        .catch(err=>{
          console.log(err)
        })
    },
    sortPrice () {
      this.sortBy = !this.sortBy;
      this.page = 1
      this.getGoods();
    },
    loadMore () {
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.getGoods(true);
      }, 500);
      this.busy = false;
    },
    setPriceFiter(index){
      this.priceChecked = 'All';
      this.startPrice = 0;
      this.endPrice = 5000;
      if(index!='all'){
        this.priceChecked = index
        this.priceChecked = index;
        this.startPrice = this.priceFiter[index].startPrice;
        this.endPrice = this.priceFiter[index].endPrice;
      }
      this.page = 1;
      this.getGoods();
    },
    addCart(productId){
      axios.post('/goods/addCart',{
        productId:productId
      }).then((res)=>{
        let result = res.data;
        if(result.status == 0){
          alert(result.result);
      }else {
          alert('插入失败');
        }
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
    border: 1px solid gray;
    box-shadow: 5px 5px #f0f0f0;
  }
  .bg:hover{
    box-shadow: 5px 5px 5px #888;
    transform: scaleY(1.1);
    border: 1px solid red;
  }
  .img-top{
    width: 220px;
    height: 220px;
  }
  .good-col{
    margin: 10px 0;
  }
</style>
