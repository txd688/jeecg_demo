<template>
  <div>
    <a-form-model ref="form"
                  :model="model"
                  :rules="validatorRules">
      <a-form-model-item required
                         prop="username">
        <a-input v-model="model.username"
                 size="large"
                 placeholder="请输入账号名 / admin">
          <a-icon slot="prefix"
                  type="user"></a-icon>
        </a-input>
      </a-form-model-item>
      <a-form-model-item required
                         prop="password">
        <a-input v-model="model.password"
                 type="password"
                 size="large"
                 placeholder="请输入密码 / 123456">
          <a-icon slot="prefix"
                  type="lock"></a-icon>
        </a-input>
      </a-form-model-item>
      <a-row>
        <a-col :span="16">
          <a-form-model-item required
                             prop="inputCode">
            <a-input v-model="model.inputCode"
                     size="large"
                     type="text"
                     placeholder="请输入验证码">
              <a-icon slot="prefix"
                      type="smile"></a-icon>
            </a-input>
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <div class="codeImg"></div>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>
<script>
export default {
  name: "LoginAccount",
  data () {
    return {
      model: {
        username: '',
        password: '',
        inputCode: ''
      },
      validatorRules: {
        username: [
          { required: true, message: "请输入用户名" }
        ],
        password: [{
          required: true, message: '请输入密码'
        }],
        inputCode: [{
          required: true, message: '请输入验证码'
        }]
      }
    }
  },
  methods: {
    validateFields (arr, callback) {
      let promiseArray = []
      for (let item of arr) {
        let p = new Promise((res, rej) => {
          this.$refs['form'].validateField(item, err => {
            if (!err) {
              res();
            } else {
              rej(err);
            }
          })
        })
        promiseArray.push(p);
      }
      Promise.all(promiseArray).then(() => {
        callback();
      }).catch(err => {
        callback(err);
      })
    },
    handleLogin () {
      this.validateFields(['username', 'password', 'inputCode'], err => {
        if (!err) {
          let loginParams = {
            username: this.model.username,
            password: this.model.password,
            captcha: this.model.inputCode
          }
          console.log(loginParams);
          setTimeout(() => {
            if (Math.random() * 10 > 5) {
              this.$emit('success', '登录成功');
            } else {
              this.$emit('fail', '登录失败');
            }
          }, 2000);
        } else {
          this.$emit('validateFail');
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.codeImg {
  width: 90%;
  margin-left: 10%;
  height: 37px;
  background: red;
}
</style>