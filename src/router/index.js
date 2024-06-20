// history模式
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * roles: ['admin', 'common']       // 访问路由的角色权限
 * permissions: ['a:a:a', 'b:b:b']  // 访问路由的菜单权限
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
  }
 */
export const constantRoutes = [
  // 路由的默认路径
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/main",
    name: "",
    meta: {
      requiredPath: true,
    },
    component: () => import("@/components/main.vue"),
    children: [
      // 个人中心
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
      },
      //  表格测试
      {
        path: "/tableTest",
        name: "tableTest",
        component: () => import("@/views/tableTest/index.vue"),
      },
      //  测试页面
      {
        path: "/testPage",
        name: "testPage",
        component: () => import("@/views/testPage/index.vue"),
      },
      //  单选
      {
        path: "/radioPage",
        name: "radioPage",
        component: () => import("@/views/radioPage/index.vue"),
      },
      //  日历
      {
        path: "/wfcalendar",
        name: "wfcalendar",
        component: () => import("@/views/wfcalendar/index.vue"),
      },
      //  日历
      {
        path: "/rili",
        name: "rili",
        component: () => import("@/views/wfcalendar/rili.vue"),
      },
      // 个人中心
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user/index.vue"),
      },
      {
        path: "/study/foreword",
        name: "foreword",
        component: () => import("@/views/study/foreword.vue"),
      },
      {
        path: "/study/intro",
        name: "intro",
        component: () => import("@/views/study/intro.vue"),
      },
    ],
  },
];
// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = [];
// 创建路由对象
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (to, from) => {
  // console.log(to, from, "fff");
});
export default router;
