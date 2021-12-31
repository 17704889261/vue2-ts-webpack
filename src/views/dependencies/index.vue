<template>
  <div class="dependencies-container-root">
    <el-card class="dependencies-container">
      <div slot="header" class="clearfix">
        <span>生产依赖</span>
      </div>
      <div v-for="(val, key, index) in packages.dependencies" :key="index">
        {{ key }}
        {{ val }}
      </div>
    </el-card>
    <el-card class="dev-dependencies-container">
      <div slot="header" class="clearfix">
        <span>开发依赖</span>
      </div>
      <div v-for="(val, key, index) in packages.devDependencies" :key="index">
        {{ key }}
        {{ val }}
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  // 声明一下全局变量： APP_PKG
  declare global {
    const APP_PKG: {
      pkg: {
        name: string
        version: string
        dependencies: Record<string, string>
        devDependencies: Record<string, string>
      }
    }
  }

  @Component
  export default class extends Vue {
    // eslint-disable-next-line no-undef
    packages = APP_PKG.pkg
  }
</script>

<style lang="scss" scoped>
  .dependencies-container {
    margin-bottom: 16px;
  }
  .dependencies-container :deep(.el-descriptions__body),
  .dev-dependencies-container :deep(.el-descriptions__body) {
    padding: 16px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }
  .clearfix:after {
    clear: both;
  }
</style>
