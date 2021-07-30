import Vue from 'vue'
import Router from 'vue-router'
import DataLoad from '@/components/DataLoad'
import DataSave from '@/components/DataSave'
import DataDetail from '@/components/DataDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DataLoad',
      component: DataLoad
    },
    {
      path: '/load',
      name: 'DataLoad',
      component: DataLoad
    },
    {
      path: '/save',
      name: 'DataSave',
      component: DataSave
    },
    {
      path: '/detail/:id',
      name: 'DataDetail',
      component: DataDetail
    },
  ]
})
