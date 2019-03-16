<template>
  <div class="terminal">
     <iframe width=1400 height=800 frameborder=0 scrolling=auto src="http://fist.lameleg.com:32202"></iframe>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  props: {
    msg: String
  },
  data() {
    return {
      html: ""
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      this.$http
        .get("")
        .then(function(res) {
          this.html = res.data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.terminal {
  margin-top:20px;
  margin-left:10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
