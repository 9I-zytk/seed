<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <router-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" :src="maxLogo" width="89" height="25" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" :src="minLogo" width="30" height="30" alt="CoreUI Logo">
      </router-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <el-menu :default-active="activeIndex" mode="horizontal" class="d-md-down-none">
        <el-menu-item index="1" class="px-3">Dashboard</el-menu-item>
        <el-dropdown placement="bottom-start">
          <el-menu-item index="2" class="px-3">
            User<i class="fa fa-caret-down"></i>
          </el-menu-item>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>My project</el-dropdown-item>
            <el-dropdown-item>My messages</el-dropdown-item>
            <el-dropdown-item>My tasks</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-menu-item index="3" class="px-3">Settings</el-menu-item>
        <el-menu-item index="4" class="px-3">消息中心</el-menu-item>
      </el-menu>
      <el-menu :default-active="activeIndex" mode="horizontal" class="ml-auto">
        <el-menu-item index="1" class="d-md-down-none">
          <el-badge :value="5" class="item">
            <i class="fa fa-bell"></i>
          </el-badge>
        </el-menu-item>
        <el-menu-item index="2" class="d-md-down-none">
          <i class="fa fa-list"></i>
        </el-menu-item>
        <el-menu-item index="3" class="d-md-down-none">
          <!--<fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>-->
        </el-menu-item>
        <el-menu-item index="4" class="d-md-down-none">
          <DefaultHeaderDropdownAccnt/>
        </el-menu-item>
      </el-menu>
      <AsideToggler class="d-none d-lg-block" />
      <AsideToggler class="d-lg-none" mobile />
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="menuList" @on-select="turnToPage"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="tag-nav-wrapper">
          <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
        </div>
        <div class="container-fluid">
          <keep-alive :include="cacheList">
            <router-view/>
          </keep-alive>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="http://geodata.ai">武汉数趣科技</a>
        <span class="ml-1">&copy; 2018 creativeLabs.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="http://geodata.ai">武汉数趣科技</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarNav, SidebarMinimizer, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
// import SidebarNav from './components/siderbarNav/siderBar'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import TagsNav from './components/tags-nav'
// import Fullscreen from './components/fullscreen'
import { mapMutations, mapActions } from 'vuex'
import { getNewTagList, getNextRoute, routeEqual } from '@/libs/util'
import minLogo from '@/assets/images/brand/sygnet.svg'
import maxLogo from '@/assets/images/brand/logo.svg'
export default {
  name: 'full',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
    TagsNav
    // Fullscreen
  },
  data () {
    return {
      minLogo,
      maxLogo,
      activeIndex: '1',
      isFullscreen: true
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
    },
    menuList () {
      return this.$store.getters.menuList
    },
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
    tagRouter () {
      return this.$store.state.app.tagRouter
    },
    cacheList () {
      return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb',
      'setTagNavList',
      'addTag',
      'setLocal'
    ]),
    ...mapActions([
      'handleLogin'
    ]),
    handleCloseTag (res, type, route) {
      if (type === 'all') {
        this.turnToPage(this.$config.homeName)
      } else if (routeEqual(this.$route, route)) {
        if (type !== 'others') {
          const nextRoute = getNextRoute(this.tagNavList, route)
          this.$router.push(nextRoute)
        }
      }
      this.setTagNavList(res)
    },
    handleClick (item) {
      this.turnToPage(item)
    },
    turnToPage (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    }
  },
  watch: {
    '$route' (newRoute) {
      const { name, query, params, meta } = newRoute
      this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      })
      this.setBreadCrumb(newRoute)
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
      // this.$refs.sideMenu.updateOpenName(newRoute.name)
    }
  },
  mounted () {
    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    this.setTagNavList()
    this.addTag({
      route: this.$store.state.app.homeRoute
    })
    this.setBreadCrumb(this.$route)
    // 设置初始语言
    // this.setLocal(this.$i18n.locale)
    // 如果当前打开页面不在标签栏中，跳到homeName页
    if (!this.tagNavList.find(item => item.name === this.$route.name)) {
      this.$router.push({
        name: this.$config.homeName
      })
    }
  }
}
</script>
<style lang="scss">
  .app-header .el-menu--horizontal>.el-menu-item {
    height: 55px;
    line-height: 55px;
    border-bottom: none;
  }
  .app-header .el-badge__content.is-fixed {
    top: 10px;
    border-bottom: none;
  }
  .main .tag-nav-wrapper {
    padding: 0;
    height: 40px;
    background: #F0F0F0;
  }
  .main .breadcrumb{
    margin-bottom: 0;
  }
  .app-header .el-dropdown .fa {
    margin-left: 8px;
  }
</style>
