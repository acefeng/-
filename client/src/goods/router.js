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
    component: () => import(/* webpackChunkName:'goodsMain'*/ './components/goodsMain'),
    name: 'goodsMain',
    meta: {
      title: '商品管理'
    }
  },
  {
    path: '/goods_group',
    component: () => import(/* webpackChunkName:'goodsGroup'*/ './components/goodsGroup'),
    name: 'goodsGroup',
    meta: {
      title: '商品分组'
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
