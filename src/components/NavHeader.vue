<template>
  <el-container>
    <el-header>
      <a href="/" class="fl">
        <img src="./../../static/logo.png">
      </a>
      <div class="fr">
        <a v-if="getName">{{getName}}</a>
        <a href="javascript:;" class="fr"  @click="isLogin = true" v-if="!getName">Login</a>
        <a href="javascript:;" class="fr" @click="isRegist = true" v-if="!getName">Regist</a>
        <a href="javascript:;" class="fr" v-if="getName" @click="logout">Logout</a>
        <el-badge :value="1" class="item">
          <a href="javascript:;" class="fr el-icon-shopping-cart-2"></a>
        </el-badge>

      </div>
    </el-header>
    <el-dialog
      :visible.sync="isLogin"
      width="30%"
      center>
      <span v-show="tiptool" class="tiptool">用户名或密码错误</span>
      <el-input v-model="Uname" placeholder="请输入用户名" class="form-input" type="text" @input="tiptool = false"></el-input>
      <el-input v-model="Pass" placeholder="请输入密码" class="form-input" type="password" @input="tiptool = false"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="login">登 录</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="isRegist"
      width="30%"
      center>
      <span v-show="tiptool" class="tiptool">我是注册页面</span>
      <el-input v-model="Uname" placeholder="请输入用户名" class="form-input" type="text" @input="tiptool = false"></el-input>
      <el-input v-model="Pass" placeholder="请输入密码" class="form-input" type="password" @input="tiptool = false"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="regist">注 册</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<style scoped>
  .tiptool{
    color: red;
  }
  .form-input{
    margin: 10px 0;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;

  }
  .fr a{
    text-decoration: none;
    color: gray;
    float: left;
    width: 50px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

</style>

<script>
  import axios from 'axios'
  export default {
    name: 'NavHeader',
    data (){
      return {
        centerdialogVisible: false,
        Uname:'',
        Pass:'',
        tiptool:false,
        isLogin:false,
        isRegist:false
      }
    },
    mounted () {
      this.checklogin();
    },
    computed:{
      getName () {
        return this.$store.state.userName
      }
    },
    methods: {
      login(){
        if(this.Uname!='' && this.Pass !=''){
          axios.post('/users/login',{
            userName:this.Uname,
            pwd:this.Pass
          }).then((res)=>{
            let resp = res.data;
            if(resp.status == '0'){
              this.isLogin = false;
              this.Uname = '';
              this.Pass = '';
              this.$message(resp.msg);
              this.$store.commit('setName',resp.result)
            }else {
              this.tiptool = true;
            }
          })
        }else{
          this.tiptool = true;
        }

      },
      regist(){
        axios.post('/users/regist',{Uname:this.Uname,Pwd:this.Pass})
          .then((res) =>{
            let resp = res.data;
            if(resp.status=='0'){
              this.isRegist = false;
              this.Uname = '';
              this.Pass = '';
              this.$message(resp.msg);
            }else{
              this.isRegist = false;
              this.Uname = '';
              this.Pass = '';
              this.$message(resp.msg);

            }
          })
      },
      logout(){
        axios.post('/users/logout').then((res)=>{
          let resp = res.data;
          if(resp.status=='0'){
            this.$store.commit('setName',resp.result);
          }
        })
      },
      checklogin(){
        axios.get('/users/checklogin').then((res)=>{
          let resp = res.data;
          // console.log('1');
          if(resp.status=='0'){
            // console.log(2);
            this.$store.commit('setName',resp.result);
          }
        })
      }
    }
  }
</script>

