<template>
  <div class="terminal">
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
