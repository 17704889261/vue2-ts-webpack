<template>
  <el-container class="app-container">
    <!-- 左侧导航 -->
    <LayoutAside />
    <!-- 右侧主体 -->
    <el-container class="main-container">
      <!-- 顶部header -->
      <LayoutHeader />
      <!-- 核心内容区 -->
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition :name="viewTransition" mode="out-in">
            <div :key="route.name">
              <component :is="Component"></component>
            </div>
          </transition>
        </router-view>
      </el-main>
      <!-- 底部footer -->
      <LayoutFooter v-if="footerActive" />
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import LayoutAside from './common/aside/index.vue'
  import LayoutHeader from './common/header/index.vue'
  import LayoutFooter from './common/footer/index.vue'

  @Component({
    components: {
      LayoutAside,
      LayoutHeader,
      LayoutFooter
    }
  })
  export default class extends Vue {
    private footerActive = false

    private viewTransition = 'slide-fade'

    mounted() {
      this.viewTransition = this.$route.meta.transition || 'slide-fade'
    }
  }
</script>

<style scoped lang="scss">
  .app-container {
    height: 100%;

    .main-container {
      flex-direction: column;
    }
  }
</style>
