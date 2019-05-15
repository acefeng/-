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
    component: () => import(/* webpackChunkName:'dataSummary'*/ './components/dataSummary.vue'),
    name: 'dataSummary',
    meta: {
      title: '数据概览'
    }
  },
  {
    path: '/goodsSummary',
    component: () => import(/* webpackChunkName:'dataGoodsSummary'*/ './components/dataGoodsSummary.vue'),
    name: 'dataGoodsSummary',
    meta: {
      title: '商品概览'
    }
  },
  {
    path: '/tradeSummary',
    component: () => import(/* webpackChunkName:'dataTradeSummary'*/ './components/dataTradeSummary.vue'),
    name: 'dataTradeSummary',
    meta: {
      title: '交易概览'
    }
  },
  {
    path: '/customerSummary',
    component: () => import(/* webpackChunkName:'dataCustomerSummary'*/ './components/dataCustomerSummary.vue'),
    name: 'dataCustomerSummary',
    meta: {
      title: '客户概览'
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
