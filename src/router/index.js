import { createRouter, createWebHistory } from 'vue-router'
import TaskListView from '../views/TaskListPage.vue'
import AddTaskView from '../views/AddTaskPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AddTaskView 
  },
  {
    path: '/taskList',
    name: 'taskList',
    component: TaskListView
  }
]
const taskList = [];

export {taskList};

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

