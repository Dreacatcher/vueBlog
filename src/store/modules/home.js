/*
 * @Author: lucm
 * @Date: 2017-06-08 10:27:45
 * @Last Modified by: lucm
 * @Last Modified time: 2017-11-29 14:15:37
 */
'use strict'
import fetch from 'fetch'
import common from 'common'

/** ************** Setting API接口调用和配置请求环境 ***************************************************/
// test: http://222.85.178.219:7878/gy_jiyuan/
// uat: uat.zhuminsheng.com:7878/gy_jiyuan/
// prd:  http://www.zhuminsheng.com/gy_jiyuan/
let envArr = {
  local: 'http://222.85.178.219:7878/gy_jiyuan/',
  uat: 'http://uat.zhuminsheng.com:7878/gy_jiyuan/',
  prd: 'http://www.zhuminsheng.com/gy_jiyuan/'
}
let env = envArr.prd
let applications = [
  'JIY0001' // 查询吉源驾校简介
]
let _Url = common.setUrl(env, applications)
/** ************ Setting API接口调用和配置请求环境 ***************************************************/

// import Storage from 'storage'
const state = {
  initDatas: [],
  isShow: false
}
const getters = {

}
const mutations = {
  setInitData: (state, payload) => {
    state.initDatas = payload.initDatas
  },
  isShowLoad: (state, payload) => {
    state.isShow = payload.isShow
  }
}
const actions = {
  holleInitInfo({ commit }, payload) {
    commit({
      type: 'isShowLoad',
      isShow: true
    })
    var _param = {}
    fetch.httpRequestPost(_Url.sso.JIY0001, _param, function(
      responseData
    ) {
      commit({
        type: 'isShowLoad',
        isShow: false
      })
      if (
        responseData &&
        responseData.data &&
        responseData.data.body &&
        responseData.data.body.introduction
      ) {
        let newArr = responseData.data.body.introduction.split('<br/>')
        commit({
          type: 'setInitData',
          initDatas: newArr
        })
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
