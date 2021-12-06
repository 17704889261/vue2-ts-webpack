<template>
  <div class="about">
    <h1>测试axios <el-button :loading="loading" @click="getClickFunc">接口</el-button></h1>
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
  import type { Test1Res } from '@/apis/demo'
  import { Demo1Fun } from '@/apis/demo'

  @Component({
    components: {}
  })
  export default class About extends Vue {
    private loading = false

    private list: Test1Res[] = []

    getClickFunc() {
      this.loading = true
      this.modifyType('warning')
      setTimeout(async () => {
        await this.GetDemo()
      }, 200)
    }

    private async GetDemo() {
      try {
        const res = await Demo1Fun()
        const { code, data, msg } = res
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

    modifyType(val: string) {
      this.$emit('modify-type', val)
    }
  }
</script>
