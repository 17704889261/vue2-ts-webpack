<template>
  <el-submenu :index="index" popper-class="aside-menu-poper">
    <template #title>
      <img src="@/assets/logo.png" alt="" />
      <span>{{ item.name }}</span>
    </template>
    <template v-for="(ktem, kndex) in item.children">
      <SubMenu
        :key="`${index}-${kndex}`"
        v-if="ktem.children && ktem.children.length > 0"
        :item="ktem"
        :index="`${index}-${kndex}`"
        :isCollapse="collapse"
      />
      <MenuItem v-else :key="`${index}-${kndex}`" :index="`${index}-${kndex}`" :item="ktem" />
    </template>
  </el-submenu>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import MenuItem from './MenuItem.vue'

  @Component({
    components: {
      MenuItem
    }
  })
  export default class extends Vue {
    @Prop({
      type: Object,
      required: true
    })
    item: any

    @Prop({
      type: String,
      required: true
    })
    index!: string
  }
</script>

<style lang="scss">
  /* 在 body中插入 浮窗状态下的菜单 */
  .aside-menu-poper {
    left: var(--layout-base-height) !important;
  }
  .aside-menu-poper,
  .aside-menu-poper .el-menu {
    background: var(--layout-base-color) !important;

    img {
      width: 16px;
      margin-right: 8px;
      transition: width 10.5s;
    }
  }
</style>
