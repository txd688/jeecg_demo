<template>
  <div class="user-wrapper">
    <span class="action">
      <a-icon type="search"></a-icon>
    </span>
    <span class="action">
      <a-icon type="question-circle-o"></a-icon>
    </span>
    <a-dropdown>
      <span class="action action-full">
        <span class="img"></span>
        <span>欢迎您，XXX</span>
      </span>
      <a-menu slot="overlay">
        <a-menu-item key="0">
          <router-link :to="{ name: 'account-center' }">
            <a-icon type="user"
                    style="margin-right:8px;"></a-icon>
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link :to="{ name: 'account-center' }">
            <a-icon type="setting"
                    style="margin-right:8px;"></a-icon>
            <span>账户设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link :to="{ name: 'account-center' }">
            <a-icon type="tool"
                    style="margin-right:8px;"></a-icon>
            <span>系统设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link :to="{ name: 'account-center' }">
            <a-icon type="setting"
                    style="margin-right:8px;"></a-icon>
            <span>密码修改</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link :to="{ name: 'account-center' }">
            <a-icon type="cluster"
                    style="margin-right:8px;"></a-icon>
            <span>切换部门</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <router-link :to="{ name: 'account-center' }">
            <a-icon type="sync"
                    style="margin-right:8px;"></a-icon>
            <span>清理缓存</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <span class="action">
      <a href="javascript:;"
         class="logout_title" @click="handleLogout">
        <a-icon type="logout"></a-icon>
        <span>&nbsp;退出登录</span>
      </a>
    </span>
  </div>
</template>
<script>
export default {
  name:"UserMenu",
  data(){
    return {
      
    }
  },
  methods:{
    handleLogout(){
      let that = this;
      this.$confirm({
        title:'提示',
        content:"真的要注销登录吗？",
        onOk(){
          that.$router.push('/user/login')
        },
        onCancel(){}
      })
    }
  }
}
</script>
<style lang="less" scoped>
.user-wrapper {
  float: right;
  height: 100%;
  .action {
    cursor: pointer;
    padding: 0 14px;
    display: inline-block;
    transition: all 0.3s;
    height: 70%;
    line-height: 46px;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    .logout_title {
      color: inherit;
    }
  }
  .action-full {
    height: 100%;
    line-height: revert;
    .img {
      vertical-align: middle;
      display: inline-block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      border: 1px solid #ccc;
      margin-right: 8px;
    }
  }
}
</style>