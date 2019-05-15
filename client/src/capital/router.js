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
    component: () => import(/* capitalAccountSummary:''*/ './components/capitalAccountSummary.vue'),
    name: 'capitalAccountSummary',
    meta: {
      title: '账户总揽'
    }
  },
  {
    path: '/capitalShop',
    component: () => import(/* capitalShopSummary:''*/ './components/capitalShopSummary.vue'),
    name: 'capitalShopSummary',
    meta: {
      title: '店铺总揽'
    }
  },
];

// 初始化路由并定义滚动行为
const router = new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

export default router;
