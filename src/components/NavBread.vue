<template>
    <el-container>
      <div class="bread">
        <div class="fl">
          <span>Home /</span>
          <slot></slot>
        </div>

      </div>
    </el-container>
</template>

<script>
    export default {
        name: "NavBread"
    }
</script>

<style scoped>
  .bread{
    width: 100%;
    height: 60px;
    line-height:40px;
    background-color: #f0f0f0;
  }
  .fl{
    float: left;
    padding: 10px;
  }
</style>
