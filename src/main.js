import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import {createPinia} from "pinia";

import './assets/css/icon.css'; // 자바스크립트의 힘으로


import App from './App.vue';
import Layout from "./components/inc/Layout.vue";
import Index from "./components/Index.vue";
import List from "./components/menu/List.vue";
import Login from "./components/user/Login.vue";
import Detail from "./components/menu/Detail.vue";

import AdminIndex from "./components/admin/Idex.vue";
import AdminLayout from "./components/admin/inc/Layout.vue";
import AdminHeader from "./components/admin/inc/Header.vue";

import GoogleLogin from "vue3-google-login";



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
        { path: '/menu/list', component: List},
        { path: '/login', component: Login},
        { path: '/login', component: GoogleLogin},

    ]},
    {
        path : '/admin', children: [
            {path: 'index', component: AdminIndex}
        ],
        component  : AdminLayout,
        beforeEnter: (to, from, next) => {
            // Routing 되기 이전에 해야할 작업들을 작성하는 공간
            console.log("beforeEnter...")
            if (!userDetails.isAuthenticated()) {
                next("/user/login");
                // beforeEnter는 기본적으로 3개의 속성을 가지고 있음.
                // to: 원래 가려던 경로
                // from: 어디서 부터 왔는지에대한 경로
                // next: 어디로 보낼지에 대한 명령
            }

        }
    }



]

const router = createRouter({
    // history: createMemoryHistory(),
    history: createWebHistory(),
    routes,
})

const pinia = createPinia();

const app = createApp(App)
// createApp(App)
    app.use(pinia)
    app.use(GoogleLogin, {
        clientId: '74775585343-f68vqr1f2ovrm0jvr9d79hots1didhai.apps.googleusercontent.com'
    })
    app.use(router) //라우터 장착
    app.mount('#app');
