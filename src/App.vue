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
</style>
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>
              <a href="https://github.com/fanux/fist">Fist</a>
            </span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-navigate"></Icon>
            <span>Token</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="settings"></Icon>
            <span><router-link to="/terminal">Terminal</router-link></span>
          </MenuItem>
          <MenuItem name="1-4">
            <Icon type="settings"></Icon>
            <router-link to="/terminal"><span>Render</span></router-link>
          </MenuItem>
          <MenuItem name="1-5">
            <Icon type="settings"></Icon>
            <router-link to="/terminal"><span>Pipeline</span></router-link>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Menu mode="horizontal" :theme="theme" active-name="1">
          <Row>
            <Col span="21">
              <MenuItem name="1">
                <Icon type="ios-paper"/>terminal1
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-paper"/>terminal2
              </MenuItem>
            </Col>
            <Col span="3">
              <MenuItem name="3">
                <Icon type="ios-add"/>create
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-person" />login
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

  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
  </div>

