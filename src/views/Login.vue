<template>
  <div class="login">
    <Login msg="Welcome to login"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/login/Login.vue'

export default {
  name: 'login',
  components: {
    Login
  }
}
</script>
