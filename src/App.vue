<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
svg {
  margin-right: 8px;
}
</style>
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <font-awesome-icon icon="fist-raised"/>
            <span>
              <a href="https://github.com/fanux/fist">Fist</a>
            </span>
          </MenuItem>
          <MenuItem name="1-2">
            <font-awesome-icon icon="code"/>
            <span>Token</span>
          </MenuItem>
          <MenuItem name="1-3">
            <font-awesome-icon icon="terminal"/>
            <span>
              <router-link to="/terminal">Terminal</router-link>
            </span>
          </MenuItem>
          <MenuItem name="1-4">
            <font-awesome-icon icon="edit"/>
            <router-link to="/terminal">
              <span>Render</span>
            </router-link>
          </MenuItem>
          <MenuItem name="1-5">
            <font-awesome-icon icon="cogs"/>
            <router-link to="/terminal">
              <span>Pipeline</span>
            </router-link>
          </MenuItem>
          <MenuItem name="1-6">
            <font-awesome-icon icon="store"/>
            <router-link to="/terminal">
              <span>Appstore</span>
            </router-link>
          </MenuItem>
          <MenuItem name="1-7">
            <font-awesome-icon icon="users"/>
            <router-link to="/terminal">
              <span>RBAC</span>
            </router-link>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Menu mode="horizontal" :theme="theme" active-name="1">
          <Row>
            <Col span="22">
              <MenuItem name="1">
            <font-awesome-icon icon="terminal"/>
                terminal1
              </MenuItem>
              <MenuItem name="2">
            <font-awesome-icon icon="terminal"/>
                terminal2
              </MenuItem>
              <MenuItem name="3">
                <font-awesome-icon icon="plus"/>create
              </MenuItem>
            </Col>
            <Col span="2">
              <MenuItem name="4">
                <Icon type="ios-person"/>
                <router-link to="/login">Login</router-link>
              </MenuItem>
            </Col>
          </Row>
        </Menu>
        <Content :style="{padding: '0 16px 16px'}">
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false,
      theme: "light"
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>