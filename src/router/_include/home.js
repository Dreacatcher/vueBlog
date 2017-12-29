/*
 * @Author: lucm
 * @Date: 2017-12-12 16:19:58
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-29 17:44:53
 */
import Index from 'index'
import ArticleDetail from 'detail'
export default [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
      path: '/articleDetail',
      component: ArticleDetail
    }]
  }
]

