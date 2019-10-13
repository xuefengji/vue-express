<template>
    <div id="app">
      <nav-header></nav-header>
      <nav-bread>
        <el-breadcrumb-item>{{getBread}}</el-breadcrumb-item>
      </nav-bread>
      <router-view></router-view>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
  import NavHeader from '@/components/NavHeader'
  import NavBread from '@/components/NavBread'
  import NavFooter from '@/components/NavFooter'
    export default {
        name: "index",
        data () {
          return {

          }
        },
      computed:{
          getBread(){
            let param = this.$route.path.split('/');
            // console.log(param);
            if(param[1]){
              return param[1];
            }else {
              return 'Goods';
            }
          }
      },
        components:{
          NavHeader,
          NavBread,
          NavFooter
        }
    }
</script>
