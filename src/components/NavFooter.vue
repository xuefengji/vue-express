<template>
    <el-container>
      <el-footer>
        <div class="fl">
          <span>Region</span>
          <select>
            <option value="USA">USA</option>
            <option value="China">China</option>
          </select>
        </div>
        <div class="fr">
          <span>Copyright © 2017 IMooc All Rights Reserved.</span>
          <span>About Us</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "NavFooter"
    }
</script>

<style scoped>
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .fr span{
    display: inline-block;
    margin-right: 10px;
  }
</style>
