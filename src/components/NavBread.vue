<template>
    <el-container class="main">
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <slot></slot>
      </el-breadcrumb>
    </el-container>
</template>

<script>
    export default {
        name: "NavBread"
    }
</script>

<style scoped>
  .main{
    margin-top: 20px;
  }
  .bread{
    width: 100%;
    height: 60px;
    line-height:60px;
    background-color: #f0f0f0;
    padding: 0 20px 0;
  }
</style>
