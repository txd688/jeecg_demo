<template>
  <global-layout>
    <a-tabs type="editable-card"
            hide-add
            class="tab-layout-tabs"
            style="height:52px"
            @change="changePage"
            @tabClick="tabCallBack"
            @edit="editPage"
            :activeKey="activePage">
      <a-tab-pane v-for="page in pageList"
                  :key="page.path"
                  :id="page.path"
                  :closable="!(page.meta.title=='首页')">
        <span slot="tab"
              :pagekey="page.path">{{page.meta.title}}</span>
      </a-tab-pane>
    </a-tabs>
    <div style="margin:12px 12px 0;">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

  </global-layout>
</template>

<script>
import GlobalLayout from "@/components/page/GlobalLayout.vue"
const indexKey = '/dashboard/analysis'
export default {
  name: 'TabLayout',
  components: {
    GlobalLayout
  },
  data () {
    return {
      activePage: '',
      pageList: [],
      linkList: []
    }
  },
  created () {
    if (this.$route.path != indexKey) this.addIndexToFirst();
    let currentRoute = Object.assign({}, this.$route)
    currentRoute.meta = Object.assign({}, currentRoute.meta)
    this.pageList.push(currentRoute)
    this.linkList.push(currentRoute.path)
    this.activePage = currentRoute.path;
  },
  methods: {
    changePage (key) {
      this.activePage = key
    },
    tabCallBack () { },
    editPage (targetKey, action) {
      console.log(action, targetKey)
      this[action](targetKey);
    },
    remove (targetKey) {
      // let removeRoute = this.pageList.filter(item=>item.path==targetKey)
      this.pageList = this.pageList.filter(item => item.path !== targetKey)
      let index = this.linkList.indexOf(targetKey)
      this.linkList = this.linkList.filter(item => item !== targetKey)
      index = index >= this.linkList.length ? this.linkList.length - 1 : index
      this.activePage = this.linkList[index]
    },
    // 首页tag添加到第一位
    addIndexToFirst () {
      this.pageList.splice(0, 0, {
        name: 'AnalysisTab',
        path: '/dashboard/analysis',
        meta: {
          title: '首页',
          icon: 'home'
        },
      })
      this.linkList.splice(0, 0, indexKey)
    }
  },
  watch: {
    '$route': function (newRoute) {
      this.activePage = newRoute.fullPath;
      if (this.linkList.indexOf(newRoute.fullPath) < 0) {
        this.linkList.push(newRoute.fullPath)
        this.pageList.push(Object.assign({}, newRoute))
      }
    },
    'activePage':function(key){
      let index = this.linkList.lastIndexOf(key);
      let waitRouter = this.pageList[index]
      if(waitRouter.path !== this.$router.fullPath){
        this.$router.push(Object.assign({},waitRouter))
      }
    }
  }
}
</script>

<style  lang="less">
.tab-layout-tabs.ant-tabs {
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #cc;
  background-color: #fff;
  padding: 0 20px;
  .ant-tabs-bar {
    margin: 4px 0 0;
    border: none;
  }
  &.ant-tabs-card .ant-tabs-tab {
    padding: 0 24px !important;
    background-color: white !important;
    margin-right: 10px !important;
    .ant-tabs-close-x {
      width: 12px !important;
      height: 12px !important;
      opacity: 0 !important;
      cursor: pointer !important;
      font-size: 12px !important;
      margin: 0 !important;
      position: absolute;
      top: 36%;
      right: 6px;
    }
    &:hover .ant-tabs-close-x {
      opacity: 1 !important;
    }
  }
  .ant-tabs-tab {
    border: none !important;
    border-bottom: 1px solid transparent !important;
  }
  .ant-tabs-tab-active {
    border-color: @primary-color!important;
  }
}
</style>