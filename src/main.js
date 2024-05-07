import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import './assets/css/icon.css'; // 자바스크립트의 힘으로
import App from './App.vue';
import Layout from "./components/inc/Layout.vue";
import Index from "./components/Index.vue";
import List from "./components/menu/List.vue";
import Detail from "./components/menu/Detail.vue";

import AdminIndex from "./components/admin/Idex.vue";
import AdminLayout from "./components/admin/inc/Layout.vue";
import AdminHeader from "./components/admin/inc/Header.vue";

// 라우터에 붙을 페이지 경로와 해당하는 컴포넌트 설정
const routes = [

    // { path: '/', component: App, children:[
    //     { path: 'index', component: Index },
    //     { path: 'menu', component: Layout, children:[
    //         { path: 'list', component: List },
    //         { path: 'detail', component: Detail }
    //     ]}
    // ] },

    { path:'/', component:Layout, redirect:'/index', children:[
        { path: '/index', component: Index },
        { path: '/menu/list', component: List}

    ]},
    {
        path: '/admin', component:AdminLayout, children: [
            { path: 'index', component: AdminIndex},
        ]
    }


]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
createApp(App)
    .use(router) //라우터 장착
    .mount('#app');
