<template>
  <div class="user-wrapper">
    <span class="action">
      <a-icon type="search"></a-icon>
    </span>
    <span class="action">
      <a-icon type="question-circle-o"></a-icon>
    </span>
    <a-dropdown>
      <span>
        <span>欢迎您，</span>
      </span>
      <a-menu slot="overlay">
        <a-menu-item>
          <router-link>
            <a-icon type="user"></a-icon>
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
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
  }
}
</style>