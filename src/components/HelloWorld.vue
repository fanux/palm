<template>
  <div class="hello">
    <div style="background:#eee;padding: 20px; margin: 10px;word-break:break-all;">
      <Card :bordered="false">
        <p slot="title">User token</p>
        <p>{{ token }}</p>
      </Card>
    </div>

    <div style="background:#eee;padding: 20px; margin: 10px;word-break:break-all;">
      <Card :bordered="false">
        <p slot="title">Using token in http</p>
        <p>
          curl -H "Authorization: Bearer {your token}"
          -k https://172.31.12.61:6443/api/v1/namespaces/default/pods
        </p>
        <code>
          {
          <br>&nbsp;"kind": "Status",
          <br>&nbsp;"apiVersion": "v1",
          <br>&nbsp;"metadata": {
          <br>&nbsp;},
          <br>&nbsp;"status": "Failure",
          <br>&nbsp;"message": "pods is forbidden: User \"fanux\" cannot list resource \"pods\" in API group \"\" in the namespace \"default\"",
          <br>&nbsp;"reason": "Forbidden",
          <br>&nbsp;"details": {
          <br>&nbsp;&nbsp;"kind": "pods"
          <br>&nbsp;},
          <br>&nbsp;"code": 403
          <br>}
        </code>
      </Card>
    </div>

    <div style="background:#eee;padding: 20px; margin: 10px;word-break:break-all;">
      <Card :bordered="false">
        <p slot="title">Using token in kubeconfig</p>
        <p>kubectl config set-credentials fanux --token={your token}</p>
        <p>kubectl config set-context fanux --cluster=kubernetes --user=fanux</p>
        <p>kubectl config use-context fanux</p>
      </Card>
    </div>

    <div style="background:#eee;padding: 20px; margin: 10px;word-break:break-all;">
      <Card :bordered="false">
        <p
          slot="title"
        >Bind a role: kubectl --kubeconfig /etc/kubernetes/admin.conf create -f rolebind.yaml</p>
        <code>
        [root@iZj6cegflzze2l7fpcqoerZ ~]# cat rolebind.yaml <br />
        kind: ClusterRoleBinding<br />
        apiVersion: rbac.authorization.k8s.io/v1<br />
        metadata:<br />
        &nbsp; name: read-secrets-global<br />
        subjects:<br />
        - kind: User<br />
        &nbsp; name: "fanux" # Name is case sensitive<br />
        &nbsp; apiGroup: rbac.authorization.k8s.io<br />
        roleRef:<br />
        &nbsp; kind: ClusterRole<br />
        &nbsp; name: cluster-admin # using admin role<br />
        &nbsp; apiGroup: rbac.authorization.k8s.io<br />
        <br />
        [root@iZj6cegflzze2l7fpcqoerZ ~]# kubectl get pod <br />
No resources found.
        </code>
      </Card>
    </div>
  </div>
</template>

<script>
import config from "@/config";

export default {
  data() {
    return {
      token: "old token"
    };
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
