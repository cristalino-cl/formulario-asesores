<template>
  <div id="app">
    <MyForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyForm from './components/MyForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    MyForm
  }
});
</script>
