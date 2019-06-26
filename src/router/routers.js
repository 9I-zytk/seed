import Main from '@/components/containers'
// import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/Dashboard',
    component: Main,
    meta: {
      notCache: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        url: '/dashboard',
        meta: {
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/theme',
    redirect: '/theme/colors',
    url: '/theme/colors',
    name: 'Theme',
    meta: {
      icon: 'fa fa-theme',
      title: 'theme'
    },
    component: Main,
    children: [
      {
        path: 'colors',
        name: 'Colors',
        url: '/theme/colors',
        meta: {
          title: '颜色',
          icon: 'md-home'
        },
        component: () => import(/* webpackChunkName: "page" */ '@/view/page/barChart')
      },
      {
        path: 'typography',
        name: 'Typography',
        url: '/theme/typography',
        meta: {
          title: 'Typography',
          icon: 'md-home'
        },
        component: () => import(/* webpackChunkName: "page" */ '@/view/page/pieChart')
      }
    ]
  },
  {
    path: 'charts',
    redirect: '/charts/bar',
    name: 'Charts',
    url: '/charts/bar',
    component: Main,
    children: [
      {
        path: 'bar',
        name: 'Bar',
        component: () => import(/* webpackChunkName: "chart" */ '@/view/single-page/home')
      },
      {
        path: 'bar-extra-line',
        name: 'bar-extra-line',
        component: () => import(/* webpackChunkName: "chart" */ '@/view/single-page/home')
      }
    ]
  },
  {
    path: 'widgets',
    name: 'Widgets',
    component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
  },
  {
    path: 'users',
    name: 'User',
    meta: { title: 'Users' },
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '',
        name: 'User List',
        meta: { title: 'User Details' },
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: ':id',
        meta: { title: 'User Details' },
        name: 'User Details',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      }
    ]
  },
  {
    path: 'base',
    redirect: '/base/cards',
    name: 'Base',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: 'cards',
        name: 'Cards',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'forms',
        name: 'Forms',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'switches',
        name: 'Switches',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'tables',
        name: 'Tables',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'breadcrumbs',
        name: 'Breadcrumbs',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'carousels',
        name: 'Carousels',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'collapses',
        name: 'Collapses',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'jumbotrons',
        name: 'Jumbotrons',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'list-groups',
        name: 'List Groups',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'navs',
        name: 'Navs',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'navbars',
        name: 'Navbars',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'paginations',
        name: 'Paginations',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'popovers',
        name: 'Popovers',
        component: () => import(/* webpackChunkName: "page" */ '@/view/single-page/home')
      },
      {
        path: 'progress-bars',
        name: 'Progress Bars'
      },
      {
        path: 'tooltips',
        name: 'Tooltips'
      }
    ]
  },
  {
    path: 'buttons',
    redirect: '/buttons/standard-buttons',
    name: 'Buttons',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: 'standard-buttons',
        name: 'Standard Buttons'
      },
      {
        path: 'button-groups',
        name: 'Button Groups'
      },
      {
        path: 'dropdowns',
        name: 'Dropdowns'
      },
      {
        path: 'brand-buttons',
        name: 'Brand Buttons'
      }
    ]
  },
  {
    path: 'icons',
    redirect: '/icons/font-awesome',
    name: 'Icons',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: 'coreui-icons',
        name: 'CoreUI Icons'
      },
      {
        path: 'flags',
        name: 'Flags'
      },
      {
        path: 'font-awesome',
        name: 'Font Awesome'
      },
      {
        path: 'simple-line-icons',
        name: 'Simple Line Icons'
      }
    ]
  },
  {
    path: 'notifications',
    redirect: '/notifications/alerts',
    name: 'Notifications',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: 'alerts',
        name: 'Alerts'
      },
      {
        path: 'badges',
        name: 'Badges'
      },
      {
        path: 'modals',
        name: 'Modals'
      }
    ]
  },
  {
    path: '/map',
    name: 'map',
    meta: {
      icon: 'md-menu',
      title: 'map'
    },
    component: Main,
    children: [
      {
        path: 'themeless',
        name: 'themeless',
        meta: {
          icon: 'md-funnel',
          title: 'themeless'
        }
      },
      {
        path: 'quantile',
        name: 'quantile',
        meta: {
          icon: 'md-funnel',
          title: 'quantile'
        },
        component: () => import('@/view/error-page/401.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      title: '401',
      icon: 'fa fa-bar-chart'
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '',
    name: 'doc',
    meta: {
      title: '文档',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book'
    }
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      title: '500',
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
