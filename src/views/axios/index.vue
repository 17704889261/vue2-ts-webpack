<template>
  <div class="about">
    <h1>
      测试axios
      <el-button :loading="loading" @click="getClickFunc">axios接口</el-button>
      <el-button :loading="loading" @click="getClickFunc2">request接口2</el-button>
    </h1>
    <Alert :types="types"></Alert>
    <el-table
      ref="multipleTable"
      stripe
      :max-height="600"
      :data="list"
      v-loading="loading"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        fixed="left"
        width="55"
        header-align="center"
        align="center"
      />
      <el-table-column type="index" width="50" header-align="center" align="center" />

      <el-table-column label="ID" property="id" width="240" header-align="center" align="center" />
      <el-table-column label="姓名" header-align="center" align="center" show-overflow-tooltip>
        <template #default="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="年龄" property="age" header-align="center" align="center" />
      <el-table-column label="性别" header-align="center" align="center">
        <template #default="scope">
          <span v-if="scope.row.sex">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>
      <el-table-column label="性别1-拓展" header-align="center" align="center">
        <template #default="scope"> {{ scope.row.sex1 }}-test </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { debounce } from '@/utils/tool'
  // 引入接口 返回值的接口定义
  import type { Test1Res } from '@/apis/demo'
  // 引入接口
  import { Demo1Fun, Demo2Fun } from '@/apis/demo'

  import Alert from '@/components/Alert/index.vue'

  @Component({
    components: {
      Alert
    }
  })
  export default class extends Vue {
    // 定义页面中使用的响应式数据
    list: Test1Res[] = []

    loading = false

    types = 'warning'

    // 点击每一列选择框触发的方法
    handleSelectionChange(ele: any) {
      console.log(' 当前选中的元素内容是： ele =====> ', this.loading)
    }

    // 点击按钮触发的方法-loading / 防抖
    getClickFunc() {
      this.loading = true
      debounce(this.getDemo1, 200, false)
    }

    // 点击按钮触发的方法-loading / 防抖
    getClickFunc2() {
      this.loading = true
      debounce(this.getDemo2, 200, false)
    }

    // 实际获取接口的数据的方法
    getDemo1() {
      this.types = 'warning'
      setTimeout(async () => {
        try {
          const { code, data } = await Demo1Fun()
          if (code !== 1000) {
            this.types = 'error'
          } else {
            this.types = 'success'
            this.list = data.testInfo
          }
          this.loading = false
        } catch (error) {
          this.types = 'error'
          this.loading = false
        }
      }, 200)
    }

    getDemo2() {
      this.types = 'warning'
      setTimeout(async () => {
        const { res, data, msg } = await Demo2Fun()
        if (res) {
          this.types = 'success'
          this.list = data.testInfo
        } else {
          this.types = 'error'
          this.$message.error(msg)
        }
        this.loading = false
      }, 200)
    }

    // mounted 页面加载时执行的钩子函数
    mounted() {
      this.getClickFunc()
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    min-height: 300px;
  }
</style>
