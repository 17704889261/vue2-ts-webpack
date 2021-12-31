<template>
  <el-color-picker v-model="themes" @change="changeThemes" />
</template>
<script setup lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { Themes } from '@/plugins/themes'

  const themesInstance = new Themes()

  @Component({})
  export default class extends Vue {
    @Prop({
      type: Boolean,
      default: false
    })
    private drawer!: false

    themes = 'green'

    changeThemes() {
      themesInstance.setCurrentTheme(this.themes)
    }

    mounted() {
      this.themes = themesInstance.getCurrentTheme()
    }
  }
</script>
<style lang="scss" scoped></style>
