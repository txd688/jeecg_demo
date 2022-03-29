<template>
  <a-layout-sider width="208px"
                  :class="['light']"
                  :trigger="null"
                  :collapsible="collapsible">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="logo"/><span>Logo</span>
    </div>
    <SMenu :collapsed="collapsed"/>
  </a-layout-sider>
</template>
<script>
import SMenu from "./SMenu.vue";
export default {
  name: 'SideMenu',
  components: {
    SMenu
  },
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
  }
}
</script>
<style lang="less" scoped>
.logo {
  background: #128bed;
  width: 100%;
  height: 59px;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  img{
    height: 60%;
    margin-right: 5px;
  }
}
</style>