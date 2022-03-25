<template>
  <a-layout-header style="padding:0;">
    <div class="header">
      <a-icon class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="toggle" />
      <span>欢迎进入</span>
      <!-- 右侧用户登录控制台 -->
      <user-menu></user-menu>
    </div>
  </a-layout-header>
</template>
<script>
import UserMenu from "../tools/UserMenu.vue"
export default {
  name: 'GlobalHeader',
  components: {
    UserMenu
  },
  props: {
    collapsed: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  methods: {
    toggle () {
      this.$emit("toggle");
    }
  }
}
</script>
<style lang="less" scoped>
@height: 59px;
.ant-layout-header {
  height: @height;
  line-height: @height;
}
.header {
  color: white;
  height: @height;
  background: @primary-color;
  padding: 0 12px 0 0;
  .trigger {
    font-size: 22px;
    line-height: 42px;
    padding: 0 18px;
    cursor: pointer;
    transition: color 300ms, background 300ms;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
