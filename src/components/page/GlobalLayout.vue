<template>
  <a-layout class="layout">
    <!-- 主体页面左侧 sider -->
    <template>
      <side-menu :collapsed="collapsed"></side-menu>
    </template>
    <!-- 主体页面右侧 header-content-footer -->
    <a-layout>
      <!-- 头部 -->
      <global-header @toggle="toggle" :collapsed="collapsed"></global-header>
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
import SideMenu from '../menu/SideMenu.vue'
export default {
  name: 'GlobalLayout',
  components: {
    GlobalHeader,
    SideMenu
  },
  data(){
    return {
      collapsed: false,
    }
  },
  methods:{
    toggle(){
      this.collapsed = !this.collapsed;
    }
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
<style lang="less">
.layout {
  .light {
    background: #fff;
  }
}
</style>