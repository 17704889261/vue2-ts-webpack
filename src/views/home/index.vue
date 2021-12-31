<template>
  <div class="home">
    <h3>切换主题</h3>
    <ChangeThemes />
    <h3>{{ msg }}</h3>
    <el-input v-model="msg"></el-input>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import ChangeThemes from '@/components/ChangeThemes/index.vue'

  @Component({
    components: {
      ChangeThemes
    }
  })
  export default class Home extends Vue {
    private msg = 'Vue.js + TypeScript App'
  }
</script>
