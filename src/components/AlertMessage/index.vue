<template>
  <el-alert
    class="n-progress-container"
    :title="titleInfo"
    :type="type"
    :effect="options.effect"
    :closable="options.closable"
  >
  </el-alert>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import useAlertMessage from './uses/alertMessage'

  @Component({})
  export default class AlertMessage extends Vue {
    options = {
      effect: 'dark',
      closable: false
    }

    @Prop({
      default: 'warning',
      type: String
    })
    private type!: string

    get titleInfo() {
      return useAlertMessage(this.type)
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

    ::v-deep .el-alert__content {
      margin: 0 auto;
      --el-alert-title-font-size: 18px;
      font-weight: bolder;
    }
  }
</style>
