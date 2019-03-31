<template>
  <div class="signup">
    <Signup msg="Welcome to signup"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/signup/Signup.vue'

export default {
  name: 'signup',
  components: {
    Signup
  }
}
</script>
