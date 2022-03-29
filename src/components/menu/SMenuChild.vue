<template>
  <a-sub-menu :key="menuInfo.path"  v-bind="$props" v-on="$listeners">
    <span slot="title"><a-icon type="mail" /><span>{{menuInfo.meta.title}}</span></span>
    <a-menu-item v-for="item in menuInfo.children" :key="item.path">
      {{item.meta.title}}
    </a-menu-item>
  </a-sub-menu>
</template>
<script>
import { Menu } from 'ant-design-vue';
export default {
  name:"SMenuChild",
  props:{
    ...Menu.SubMenu.props,
    menuInfo:{
      type:Object,
      default:()=>({})
    }
  }
}
</script>