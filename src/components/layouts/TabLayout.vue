<template>
  <global-layout>
    <router-view/>
  </global-layout>
</template>

<script>
import GlobalLayout from "@/components/page/GlobalLayout.vue"
export default {
  name: 'TabLayout',
  components: {
    GlobalLayout
  }
}
</script>

<style scoped lang="less">
</style>