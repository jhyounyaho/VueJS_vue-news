// routes/index.js router 로직
import Vue from 'vue';
import VueRouter from 'vue-router';
import createListView from '../views/CreateListView.js';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  // url # 제거
  mode: 'history',
  routes: [
    {
      // path: url 주소 
      path: '/',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
    },
    {
      path: '/user/:id',
      component: UserView, 
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});