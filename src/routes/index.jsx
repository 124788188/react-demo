import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from 'react'
import KeepAlive from 'react-activation'

const routes = [
  {
    path: '/',
    auth: false,
    component: lazy(() => import('../layout/DefaultLayout')),
    redirect: '/test',
    children: [
      {
        path: '/test',
        name: '测试不使用Redux',
        auth: ['1', '2', '3'],
        component: lazy(() => import('../page/Test'))
      }, {
        path: '/testUseRedux',
        name: '测试使用Redux',
        auth: ['1'],
        component: lazy(() => import('../page/TestUseRedux'))
      },{
        path: '/someTests',
        name: '一些前端试题',
        auth: ['1'],
        component: lazy(() => import('../page/SomeTests'))
      }
    ]
  }, {
    path: '/back',
    auth: false,
    component: lazy(() => import('../layout/BackLayout')),
    redirect: '/back/test',
    children: [
      // {
      //   path: '/back/home',
      //   name: '主页',
      //   auth: ['1', '2', '3'],
      //   component: lazy(() => import('../page/Home'))
      // }, 
      {
        path: '/back/test',
        name: '测试',
        auth: ['1'],
        component: lazy(() => import('../page/TestUseRedux'))
      }
    ]
  }, {
    path: '/login',
    auth: false,
    component: lazy(() => import('../page/Login'))
  }, {
    path: '*',
    auth: false,
    component: lazy(() => import('../page/403'))
  }, {
    path: '/redirect',
    auth: false,
    component: lazy(() => import('../page/Redirect/Redirect')),
  }
]

// 根据路径获取路由
const checkAuth = (routers, path, localAuth) => {
  for (const data of routers) {
    if (data.path === path) {
      if (!localAuth || !data.auth || (data.auth && data.auth.indexOf(localAuth) !== -1)) {
        return data
      }
    }
    if (data.children) {
      const res = checkAuth(data.children, path, localAuth)
      if (res) return res
    }
  }
  return null
}

// 路由处理方式
const generateRouter = (routers) => {
  return routers.map(item => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
    item.element = <Suspense fallback={<div />}>
      {/* <KeepAlive id={item.path}> */}
      <item.component>{item}</item.component>
      {/* </KeepAlive> */}
    </Suspense>
    return item
  })
}

const Router = () => useRoutes(generateRouter(routes))

const checkRouterAuth = (path, localAuth) => {
  return checkAuth(routes, path, localAuth)
}

export { Router, checkRouterAuth, routes }