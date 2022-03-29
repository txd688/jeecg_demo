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
      </a-menu>
    </a-dropdown>
    <span class="action">
      <a href="javascript:;"
         class="logout_title">
        <a-icon type="logout"></a-icon>
        <span>&nbsp;退出登录</span>
      </a>
    </span>
  </div>
</template>
<script>
export default {

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
  }
}
</style>