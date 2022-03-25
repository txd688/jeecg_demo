<template>
  <div class="main">
    <!-- 你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 v-on 的 .native 修饰符 -->
    <a-form-model @keyup.enter.native="handleSubmit">
      <a-tabs :tabBarStyle="{textAlign:'center', borderBottom:'unset' }">
        <a-tab-pane key="tab1"
                    tab="账号密码登录">
          <LoginAccount ref="alogin"
                        @success="requestSuccess"
                        @fail="requestFailed"
                        @validateFail="validateFail" />
        </a-tab-pane>
        <a-tab-pane key="tab2"
                    tab="手机号登录">

        </a-tab-pane>
      </a-tabs>
      <a-form-item>
        <a-button type="primary"
                  class="login-button"
                  htmlType="submit"
                  :loading="loginBtn"
                  :disabled="loginBtn"
                  @click.stop.prevent="handleSubmit"
                  size="large">确定</a-button>
      </a-form-item>
    </a-form-model>
  </div>
</template>
<script>
import LoginAccount from "./LoginAccout.vue"
export default {
  name: 'UserLogin',
  components: {
    LoginAccount
  },
  data () {
    return {
      loginBtn: false
    }
  },
  methods: {
    handleSubmit () {
      this.loginBtn = true;
      this.$refs.alogin.handleLogin()
    },
    requestSuccess () {
      this.$router.push({ path: '/dashboard/analysis' }).catch(() => {
        console.log('登录跳转首页出错');
      });
      this.$notification.success({
        message: '欢迎',
        description: `欢迎回来`
      })
    },
    requestFailed (err) {
      let description = err;
      this.$notification['error']({
        message: '登录失败',
        description,
        duration: 4
      })
      this.loginBtn = false;
    },
    validateFail () {
      this.loginBtn = false;
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  margin: 40px auto 0 auto;
  max-width: 368px;
  .login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }
}
</style>