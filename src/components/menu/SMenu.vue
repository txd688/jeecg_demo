<template>
  <div class="menu">
    <a-menu 
      v-if="menuList.length"
      theme="light"
      :selectedKeys="[$route.path]"
      :openKeys="openKeysSelect"
      mode="inline"
      @openChange="onOpenChange"
      :inline-collapsed="collapsed"
      @select="subMenuClick">
      <template v-for="item in menuList">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon :type="item.meta.icon" />{{item.meta.title}}
        </a-menu-item>
        <template v-else>
          <s-menu-child :menuInfo="item" :key="item.path"></s-menu-child>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
import SMenuChild from "./SMenuChild.vue"
import { asyncRouterMap } from '@/config/router.config';
export default {
  name: "SMenu",
  components:{
    SMenuChild
  },
  props:{
    // collapsed: {
    //   type: Boolean,
    //   require: false,
    //   default: false
    // }
  },
  data () {
    return {
      openKeysSelect: [], // 默认展开的节点
      rootSubmenuKeys: [],
      openKeys: ['sub1'],
      menuList: [],
      menu:[],
      collapsed:true
    };
  },
  computed: {
  },
  created(){
    const arr = asyncRouterMap[0].children;
    arr.forEach(item=>{
      this.rootSubmenuKeys.push(item.path);
    })
    this.menu = arr;
  },
  watch: {
    menu: {
      handler (n) {
        this.menuList = n;
      },
      // handler会在第一次绑定值时就触发
      immediate: true,
      // 深度监听
      deep: true
    }
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeysSelect.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeysSelect = openKeys;
      } else {
        this.openKeysSelect = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    subMenuClick ({key}) {
      this.$router.push({ path: key });
    }
  },
};
</script>
<style lang="less" scoped>
</style>