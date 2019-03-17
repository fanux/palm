<template>
  <div class="login">
    <Row>
      <Col span="8" offset="8">
        <Card :bordered="false" class="loginCard">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" class="loginForm">
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-key" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                @click="handleSubmit('formInline')"
                style="margin-right:10px"
              >Signin</Button>
              <Button  style="margin-right:10px" type="primary" @click="handleSubmit('formInline')">Signup</Button>
              <Button type="primary" @click="logout('formInline')">Logout</Button>
            </FormItem>
          </Form>
        </Card>
      </Col>
      <Col span="8"></Col>
    </Row>
  </div>
</template>

<script>
import auth from "@/auth";
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    logout(name) {
      auth.logout();
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.$router.push("terminal");
          localStorage.token = Math.random()
            .toString(36)
            .substring(7);
          auth.login(this.email, this.pass, loggedIn => {
            if (!loggedIn) {
              this.error = true;
            } else {
              this.$router.replace(this.$route.query.redirect || "/");
            }
          });
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginCard {
  margin-top: 100px;
  text-align: center;
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
.loginForm {
  margin: 30px;
}
</style>
