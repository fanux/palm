<template>
  <div class="terminal">
    <img alt="Vue logo" src="../assets/logo.png">
    <Terminal msg="Welcome to terminal"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Terminal from '@/terminal/Terminal.vue'

export default {
  name: 'terminal',
  components: {
    Terminal
  }
}
</script>
