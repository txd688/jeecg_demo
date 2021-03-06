import { UserLayout,TabLayout,RouteView } from "@/components/layouts";

// 基础路由
export const constantRouterMap = [
    {
        path: '/user',
        component: UserLayout,
        redirect: '/user/login',
        hidden: true,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import("@/views/user/Login")
            }
        ]
    },

]
// 权限控制
export const asyncRouterMap = [
    {
        path:'/',
        name:'AnalysisTab',
        component:TabLayout,
        meta:{
            title:'首页'
        },
        redirect:'/dashboard/analysis',
        children:[
            {
                path: '/dashboard/analysis',
                name: 'AnalysisTab',
                meta:{
                    title:'首页',
                    permission: 'homepage',
                    icon:'home',
                    hidden:false
                },
                component: () => import("@/views/dashboard/Analysis")
            },
            {
                path:'/result',
                name:'result',
                component:RouteView,
                meta:{
                    title:'结果页面',
                    permission: 'result'
                },
                redirect:'/result/result',
                children:[
                    {
                        meta:{
                            title:'结果页面',
                            permission: 'result:list'
                        },
                        path: '/result/result',
                        name: 'result',
                        component: () => import("@/views/result/Result")
                    }
                ]
            },
            {
                path:'/system',
                name:'system',
                component:RouteView,
                meta:{
                    title:'系统管理',
                    permission:'system',
                    icon:'setting'
                },
                redirect:'/system/userList',
                children:[
                    {
                        meta:{
                            title:'用户管理',
                            permission: 'system:list'
                        },
                        path: '/system/userList',
                        name: 'userList',
                        component: () => import("@/views/system/UserList")
                    }
                ]
            }
        ]
    },
]