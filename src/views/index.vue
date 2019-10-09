<template>
    <div id="app">
      <nav-header></nav-header>
      <nav-bread>
        <span>Goods</span>
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
        components:{
          NavHeader,
          NavBread,
          NavFooter
        }
    }
</script>
