<template>
  <div class="about">
    <h1>
      测试axios
      <el-button :loading="loading" @click="getClickFunc">axios接口</el-button>
      <el-button :loading="loading" @click="getClickFunc2">request接口2</el-button>
    </h1>
    <ul class="list" v-loading="loading">
      <li v-for="(item, index) of list" :key="item.id">
        <span style="margin-right: 16px">{{ index }}</span>
        <span style="margin-right: 16px">{{ item.id }}</span>
        <span style="margin-right: 16px">{{ item.name }}</span>
        <span style="margin-right: 16px">{{ item.age }}</span>
        <span style="margin-right: 16px">{{ item.sex }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { debounce } from '@/utils/tool'
  // 引入接口 返回值的接口定义
  import type { Test1Res } from '@/apis/demo'
  // 引入接口
  import { Demo1Fun, Demo2Fun } from '@/apis/demo'

  @Component({
    components: {}
  })
  export default class AxiosTest extends Vue {
    private loading = false

    private list: Test1Res[] = []

    getClickFunc() {
      this.loading = true
      this.modifyType('warning')
      debounce(this.GetDemo, 200, false)
    }

    private async GetDemo() {
      try {
        const res = await Demo1Fun()
        const { code, data } = res
        if (code !== 1000) {
          this.modifyType('error')
        } else {
          this.modifyType('success')
          this.list = data.testInfo
        }
        this.loading = false
      } catch (error) {
        this.modifyType('error')
        this.loading = false
      }
    }

    getClickFunc2() {
      this.loading = true
      this.modifyType('warning')
      debounce(this.GetDemo2, 200, false)
    }

    private async GetDemo2() {
      const { res, data, msg } = await Demo2Fun()
      if (res) {
        this.modifyType('success')
        this.list = data.testInfo
      } else {
        this.$message.error(msg)
        this.modifyType('error')
      }
      this.loading = false
    }

    modifyType(val: string) {
      this.$emit('modify-type', val)
    }
  }
</script>
