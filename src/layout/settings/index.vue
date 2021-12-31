<template>
  <el-drawer
    custom-class="setting-container"
    :visible="isDrawer"
    :append-to-body="true"
    title="全局设置"
    direction="rtl"
    :before-close="handleClose"
  >
    <!-- 主题区域 -->
    <el-divider content-position="center">切换主题</el-divider>
    <ChangeThemes />
    <!-- 布局区域 -->
    <!-- asider设置区域 -->
    <!-- 动画设置区域 -->
  </el-drawer>
</template>
<script lang="ts">
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
  import ChangeThemes from '@/components/ChangeThemes/index.vue'

  @Component({
    components: {
      ChangeThemes
    }
  })
  export default class extends Vue {
    @Prop({
      type: Boolean,
      default: false
    })
    private drawer!: false

    get isDrawer() {
      return this.drawer
    }

    @Emit('changeStatus')
    handleClose() {
      return false
    }
  }
</script>
<style lang="scss">
  .setting-container .el-drawer__body {
    padding: 0 16px;
  }
</style>
