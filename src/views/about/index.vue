<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AlertMessage :type="type" />
    <AxiosTest ref="axiosTest" @modify-type="modifyType" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Ref } from 'vue-property-decorator'
  import AlertMessage from '@/components/AlertMessage/index.vue'
  import AxiosTest from './components/AxiosTest.vue' // @ is an alias to /src

  @Component({
    components: {
      AlertMessage,
      AxiosTest
    }
  })
  export default class About extends Vue {
    private type = 'warning'

    @Ref() axiosTest: any

    modifyType(val: string) {
      this.type = val
    }

    mounted() {
      this.axiosTest.getClickFunc()
    }
  }
</script>
