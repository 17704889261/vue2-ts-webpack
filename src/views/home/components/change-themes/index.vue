<template>
  <el-color-picker v-model="themes" @change="changeThemes" />
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { Themes } from '@/plugins/themes'

  @Component({})
  export default class ChangeThemes extends Vue {
    private themes = 'green'

    private themesInstance = new Themes()

    private changeThemes() {
      this.themesInstance.setCurrentTheme(this.themes)
    }

    mounted() {
      this.themes = this.themesInstance.getCurrentTheme()
    }
  }
</script>

<style lang="scss" scoped></style>
