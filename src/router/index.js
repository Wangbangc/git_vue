import { createRouter, createWebHashHistory } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import RepositoriesView from '../views/RepositoriesView.vue'
import CreateRepositoryView from '../views/CreateRepositoryView.vue'
import RepositoryDetail from '../views/RepositoryDetailView.vue'
import CommitView from '../views/CommitView.vue'

const routes = [

  
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/repositories',
    name: 'repositories',
    component: RepositoriesView
  },
  {
    path: '/repositories/create',
    name: 'createRepository',
    component: CreateRepositoryView
  },
  {
    path: '/repositories/:repositoryId', // 确保参数名称与router-link 中一致
    name: 'RepositoryDetail',
    component: RepositoryDetail,
    props: true // 允许通过 props 传递参数
  },
  {
    path: '/repositories/:repository_id/commit',
    name: 'commit',
    component: CommitView
  }
]

const router = createRouter({
  history:  createWebHashHistory(), // 或者 createWebHashHistory()
  routes
})


export default router
