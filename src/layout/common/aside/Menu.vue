<template>
  <!-- 左侧导航 -->
  <el-menu
    class="aside-menu"
    text-color="#fff"
    :default-active="defaultIndex"
    :router="true"
    :collapse="collapse"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="(item, index) in menus">
      <SubMenu
        :key="`${item.name}-${index}`"
        v-if="item.children && item.children.length > 0"
        :item="item"
        :index="`${String(item.name)}-${index}`"
      />
      <MenuItem
        v-else
        :key="`${item.name}-${index}`"
        :index="`${String(item.name)}-${index}`"
        :item="item"
      />
    </template>
  </el-menu>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Inject } from 'vue-property-decorator'
  import { getMenus } from '@/router/menu'
  import SubMenu from './SubMenu.vue'
  import MenuItem from './MenuItem.vue'

  // 获取默认 default-active 值
  function getIndex(path: string, menus: any) {
    const findIndex = getIndexFun(menus, path, null, null)

    function getIndexFun(trees: any, paths: any, currIndex: any, parPath: any) {
      let fIndex = ''
      if (trees) {
        const tIndex = trees.findIndex((item: any) =>
          parPath ? `${parPath}/${item.path}` === paths : item.path === paths
        )
        if (tIndex > -1) {
          fIndex = currIndex ? `${currIndex}-${tIndex}` : `${trees[tIndex].name}-${tIndex}`
          return fIndex
        }
        trees.forEach((ele: any, index: number) => {
          const cuIndex = currIndex ? currIndex - index : `${trees[index].name}-${index}`
          fIndex += getIndexFun(
            ele.children,
            paths,
            cuIndex,
            parPath ? `${parPath}/${ele.path}` : ele.path
          )
        })
      }

      return fIndex
    }
    return findIndex
  }
  @Component({
    components: {
      SubMenu,
      MenuItem
    }
  })
  export default class extends Vue {
    @Prop({
      type: Boolean,
      default: false,
      required: true
    })
    isCollapse = false

    get collapse() {
      return this.isCollapse
    }

    menus = getMenus()

    defaultIndex = 'Index-0'

    handleSelect = (key: any, keyPath: string) => {
      console.log(key, keyPath)
    }

    handleOpen = (key: any, keyPath: string) => {
      console.log(key, keyPath)
    }

    handleClose = (key: any, keyPath: string) => {
      console.log(key, keyPath)
    }

    mounted() {
      this.defaultIndex = getIndex(this.$route.path, this.menus) || 'Index-0'
    }
  }
</script>

<style lang="scss" scoped>
  /* menu区域 */
  .aside-container {
    height: 100%;

    &.aside-logo-active {
      height: calc(100% - 48px - 48px);
    }
  }
</style>

<style lang="scss">
  /* menu区域 */
  .aside-container .el-menu {
    flex: 1;
    border: none;
    background-color: var(--layout-base-color);

    .el-menu-item,
    .el-submenu__title {
      padding-left: 16px !important;
    }

    .el-submenu .el-menu-item {
      padding-left: 36px !important;
    }

    img {
      width: 16px;
      margin-right: 8px;
      transition: width 10.5s;
    }

    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: var(--el-color-primary);
    }
  }

  .aside-container .el-menu--collapse {
    width: 48px;
  }
</style>
