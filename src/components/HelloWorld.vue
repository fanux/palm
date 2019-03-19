<template>
  <div class="hello">
    <p>{{ token }}</p>
  </div>
</template>

<script>
import config from "@/config";

export default {
  data() {
    return { token: "old token" };
  },
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    var url =
      config.data().fistAuthServerToken +
      "?user=fanux&group=sealyun&group=develop";
    console.log(url);
    var options = {
      requestCert: false,
      rejectUnauthorized: false
    };
    this.$http.get(url, options).then(
      function(res) {
        console.log(res.data);
        if (res.data.code == 200) {
          this.token = res.data.data;
        }
      },
      function(res) {
        console.log("fetch token failed");
      }
    );
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
