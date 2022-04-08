<template>
  <a-card :bordered="false">
    <div class="table-search-wrapper">
      <a-form layout="inline"
              @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6">
            <a-form-item label="账号">
              <m-input placeholder="输入账号模糊查询"
                       v-model="queryParam.username" />
            </a-form-item>
          </a-col>
          <a-col :md="6">
            <a-form-item label="性别">
              <a-select v-model="queryParam.sex"
                        placeholder="请选择性别">
                <a-select-option value="">请选择</a-select-option>
                <a-select-option value="1">男</a-select-option>
                <a-select-option value="2">女</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6">
            <div>
              <a-button type="primary"
                        icon="search">查询</a-button>
              <a-button type="primary"
                        style="margin-left:8px"
                        icon="reload">重置</a-button>
              <a style="margin-left:8px">{{toggleSearchStatus ? '收起' : '展开'}}<a-icon :type="toggleSearchStatus ? 'up' : 'down'"></a-icon></a>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </a-card>
</template>
<script>
import { MInput } from "@/components/ant_design"
export default {
  name: 'UserList',
  components: {
    MInput
  },
  data () {
    return {
      queryParam: {},
      toggleSearchStatus: false
    }
  },
  methods: {
    searchQuery () {

    }
  }
}
</script>
<style  lang="less">
.ant-form-inline {
  .ant-form-item {
    display: flex;
    margin-bottom: 24px;
    margin-right: 0;

    .ant-form-item-control-wrapper {
      flex: 1 1;
      display: inline-block;
      vertical-align: middle;
    }

    > .ant-form-item-label {
      line-height: 32px;
      padding-right: 8px;
      width: auto;
    }
    .ant-form-item-control {
      height: 32px;
      line-height: 32px;
    }
  }
}
</style>