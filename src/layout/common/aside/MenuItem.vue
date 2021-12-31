<template>
  <!-- 单个子菜单 -->
  <el-menu-item :index="index" :route="item.path">
    <img src="@/assets/logo.png" alt="" />
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({})
  export default class extends Vue {
    @Prop({
      type: Object,
      required: true
    })
    private item: any

    @Prop({
      type: String,
      required: true
    })
    private index!: string
  }
</script>

<style lang="scss" scoped></style>
