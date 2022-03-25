import { UserLayout,TabLayout } from "@/components/layouts";

// 基础路由
export const constantRouterMap = [
    {
        path: '/user',
        component: UserLayout,
        redirect: '/user/login',
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import("@/views/user/Login")
            }
        ]
    },
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
                component: () => import("@/views/dashboard/Analysis")
            }
        ]
    }
]
// 权限控制
export const asyncRouterMap = [
    {
        path:'/',
        name:'dashboard',
        component:TabLayout,
        meta:{
            title:'首页'
        },
        redirect:'/dashboard/analysis',
        children:[

        ]
    }
]