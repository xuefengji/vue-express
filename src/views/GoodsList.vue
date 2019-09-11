<template>
  <div id="app">
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <el-container class="main">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavHeader from '@/components/NavHeader'
  import NavBread from '@/components/NavBread'
  import NavFooter from '@/components/NavFooter'
export default {
  name: 'GoodsList',
  components: {
    NavHeader,
    NavBread,
    NavFooter
  }
}
</script>

<style>
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
</style>
