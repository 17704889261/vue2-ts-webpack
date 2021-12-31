<template>
  <el-alert
    class="n-progress-container"
    :title="titleInfo"
    :type="typeEnum"
    :effect="options.effect"
    :closable="options.closable"
  >
  </el-alert>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  // 枚举 实现数据枚举展示
  enum MsgEnum {
    'success' = '查询成功',
    'warning' = '查询ing',
    'error' = '接口报错'
  }

  @Component
  export default class extends Vue {
    options = {
      effect: 'dark',
      closable: false
    }

    @Prop({
      default: 'warning',
      type: String,
      required: true
    })
    private types = 'warning'

    get typeEnum() {
      return this.types
    }

    // 定义computed计算数据
    get titleInfo() {
      if (this.typeEnum === 'success') return MsgEnum.success
      if (this.typeEnum === 'warning') return MsgEnum.warning
      return MsgEnum.error
    }
  }
</script>
<style lang="scss" scoped>
  .n-progress-container {
    position: relative;
    margin: 16px auto;
    width: 500px;
    height: 32px;
    text-align: center;

    :deep(.el-alert__content) {
      margin: 0 auto;
      --el-alert-title-font-size: 18px;
      font-weight: bolder;
    }
  }
</style>
