/*
* @Author: lcm
* @Date:   2017-05-27 14:36:08
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-12 16:28:10
*/
import axios from 'axios'
import B from 'base'

// ******************************* Setting ***********************************/
let appid = 'BAS5-cxzxc-0001'
let appkey = 'cxzczcxzxc'
let siteid = 'cxzcxzcxzcxzcx'
// ******************************* Setting ***********************************/
class Fetch {
  packageParamBase (param) {
    let _param = param || {}
    let _requestParam = {
      head: {
        appid: appid,
        sign: B.encrypt(appkey, B.toMd5(B.toBase64(appid + B.toJson(_param)))),
        siteid: siteid,
        version: '2.0'
      },
      body: param
    }
    return B.toJson(_requestParam)
  }
  httpRequestPostHasUTF8 (url, data, callback) {
    // POST
    let _data = this.dataEncode(data)
    let _requestParam = this.packageParamBase(_data)
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    axios
      .post(url, _requestParam)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        error.rtnCode = '999999'
        error.rtnMsg = '发生未知异常'
        callback(error)
      })
  }
   httpRequestPostForm (url, contentype , data, callback) {
    // POST
    axios.defaults.headers.post['Content-Type'] = contentype
    axios
      .post(url, data)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        error.rtnCode = '999999'
        error.rtnMsg = '发生未知异常'
        callback(error)
      })
  }
  httpRequestPost (url, data, callback) {
    // POST
    let _data = this.dataEncode(data)
    let _requestParam = this.packageParamBase(_data)
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    axios
      .post(url, _requestParam)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        error.rtnCode = '999999'
        error.rtnMsg = '发生未知异常'
        callback(error)
      })
  }
  httpRequestGet (url, data, callback) {
    // GET
    data = this.dataEncode(data)
    axios
      .get(url, {
        params: data
      })
      .then(function (response) {
        callback(response)
      })
      .catch(function (response) {
        response.rtnCode = '999999'
        response.rtnMsg = '发生未知异常'
        callback(response)
      })
  }
  // ---------------XSS--------------//
  htmlEncode (str) {
    let s = ''
    if (str.length === 0) return ''
    // s = str.replace(/ /g, "&nbsp;");
    // s = str.replace(/&/g, "&amp;");
    s = str.replace(/</g, '%26lt%3B')
    s = s.replace(/%3C/g, '%26lt%3B')
    s = s.replace(/%3c/g, '%26lt%3B')
    s = s.replace(/>/g, '%26gt%3B')
    s = s.replace(/%3E/g, '%26gt%3B')
    s = s.replace(/%3e/g, '%26gt%3B')
    // s = s.replace(/\'/g, "&#39;");
    // s = s.replace(/\"/g, "&quot;");
    // s = s.replace(/\n/g, "<br>");
    return s
  }
  dataEncode (data) {
    // Encode
    let rel = data
    let source = ''
    if (typeof rel === 'object') {
      source = this.htmlEncode(JSON.stringify(rel))
      source = JSON.parse(source)
      rel = source
    } else if (typeof rel === 'string') {
      source = this.htmlEncode(rel)
      rel = source
    }
    return rel
  }
}
export default new Fetch()
