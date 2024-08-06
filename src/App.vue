<template>
  <div id="app" class="flex flex-col items-center gap-11 bg-partner-color px-5 py-11">
    <div>
      <img class="max-w-52" src="./public/logo-portal-asesores.png" />
    </div>
    <MyForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyForm from './components/MyForm.vue'

export default defineComponent({
  name: 'App',
  components: {
    MyForm
  }
})
</script>
