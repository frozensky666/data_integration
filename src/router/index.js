import Vue from 'vue'
import VueRouter from 'vue-router'

const Error = () => import('../components/Error');
const Container = () => import("../components/Container");

const Test = () => import("../views/Test");

Vue.use(VueRouter);

  const routes = [
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/',
      name: "Container",
      component: Container,
      redirect: {
        name: 'Test'
      },
      children: [
        {
          path: 'test',
          name: "Test",
          component: Test
        }
      ]
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next) => {
  if (to.matched.length === 0) {
    next({name: "Error"});
  }else {
    next();
  }
});

export default router
