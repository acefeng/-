/**
 * vue-router 路由配置
 * 除主视图外，其他视图均为异步组件
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName:'customerSearch'*/ './components/customerSearch'),
    name: 'customerSearch',
    meta: {
      title: '客户查询'
    }
  },
  {
    path: '/customerTag',
    component: () => import(/* webpackChunkName:'customerTag'*/ './components/customerTag'),
    name: 'customerTag',
    meta: {
      title: '标签管理'
    }
  },
  {
    path: '/customerLevel',
    component: () => import(/* webpackChunkName:'customerLevel'*/ './components/customerLevel'),
    name: 'customerLevel',
    meta: {
      title: '等级管理'
    }
  }
];

// 初始化路由并定义滚动行为
const router = new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

export default router;
