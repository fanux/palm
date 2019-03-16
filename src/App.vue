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
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="search"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="settings"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
          <Menu mode="horizontal" :theme="theme" active-name="1">
            <MenuItem name="1">
              <Icon type="ios-paper"/>内容管理
            </MenuItem>
          </Menu>
        <Content :style="{padding: '0 16px 16px'}"></Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false,
       theme: 'light'
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
      <router-link to="/terminal">Terminal</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>

