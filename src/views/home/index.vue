<template>
  <div class="home">
    <h3>切换主题</h3>
    <ChangeThemes />
    <label for="">请输入测试信息：</label>
    <el-input v-model="msg"></el-input>
    <p>输入框因为没有按需引入，所以无法按需加载</p>
    <p>按需加载 <el-button>button组件</el-button></p>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld :msg="msg2" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
  import ChangeThemes from './components/change-themes/index.vue' // @ is an alias to /src

  @Component({
    components: {
      HelloWorld,
      ChangeThemes
    }
  })
  export default class Home extends Vue {
    private msg = 'Vue.js + TypeScript App'

    msg2 = `Welcome to Your ${this.msg}`
  }
</script>
