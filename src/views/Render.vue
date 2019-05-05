<template>
  <div class="render">
    <Render msg="Welcome to render"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Render from '@/render/Render.vue'

export default {
  name: 'render',
  components: {
    Render
  }
}
</script>
