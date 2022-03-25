<template>
  <a-layout class="layout">
    <!-- 主体页面左侧 sider -->
    <a-layout-sider></a-layout-sider>
    <!-- 主体页面右侧 header-content-footer -->
    <a-layout>
      <!-- 头部 -->
      <global-header></global-header>
      <!-- 主体 -->
      <a-layout-content>
        <slot></slot>
      </a-layout-content>
      <!-- 底部 -->
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </a-layout>

</template>

<script>
import GlobalHeader from './GlobalHeader.vue'
export default {
  name: 'GlobalLayout',
  components: {
    GlobalHeader
  }
}
</script>

<style scoped lang="less">
body {
  overflow-y: scroll;
}
.layout {
  min-height: 100vh !important;
  overflow-x: hidden;
}
</style>