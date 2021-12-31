<template>
  <!-- 顶部导航 -->
  <el-header class="header-container">
    <!-- 左侧导航按钮区域 -->
    <div class="aside-collapse-active" @click="isCollapse = !isCollapse">
      <span>{{ isCollapse ? '展开' : '收起' }}</span>
    </div>
    <!-- 头像区域 -->
    <el-dropdown @command="handleCommand">
      <div class="user-container">
        <img class="user-img" src="@/assets/logo.png" />
        <div class="user-name">Hello {{ userName }}</div>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="setting">系统设置</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <Settings :drawer="settingActive" @changeStatus="changeSettings" />
  </el-header>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Settings from '@/layout/settings/index.vue'

  @Component({
    components: {
      Settings
    }
  })
  export default class extends Vue {
    userName = 'user'

    settingActive = false

    get isCollapse() {
      return this.$store.getters['SettingModel/getCollapse']
    }

    set isCollapse(val) {
      this.$store.commit('SettingModel/setCollapse', val)
    }

    async handleCommand(params: any) {
      switch (params) {
        case 'setting':
          console.log(' 弹出系统设置弹窗/抽屉， 进行设置')
          this.changeSettings(true)
          break
        case 'logout':
          console.log(' 清空缓存，退出登录 ')
          await this.$store.dispatch('UserModel/logout')
          this.$router.push('/login')
          break
        default:
          break
      }
    }

    changeSettings(val: boolean) {
      this.settingActive = val
    }

    mounted() {
      this.userName = this.$store.getters['UserModel/getName']
    }
  }
</script>

<style lang="scss" scoped>
  .header-container {
    --el-header-padding: 0 16px;
    --el-header-height: var(--layout-base-height);
    line-height: var(--el-header-height);
    color: var(--layout-base-color);

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* 侧导航 展开/收起 按钮 */
    .aside-collapse-active {
      display: inline-block;
      text-align: center;
      cursor: pointer;
      user-select: none;
    }

    .user-img {
      margin-right: 8px;
      width: 32px;
    }
  }

  .user-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;

    &:hover {
      background-color: #f6f6f6;
    }

    .user-img {
      margin-left: 8px;
      width: 32px;
      height: 32px;
    }
  }
</style>
<style lang="scss"></style>
