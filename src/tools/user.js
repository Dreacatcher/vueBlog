/*
 * @Author: lucm
 * @Date: 2017-06-01 09:44:59
 * @Last Modified by: lucm
 * @Last Modified time: 2017-08-23 13:44:16
 */
import S from 'storage'
import Fetch from 'fetch'
import Url from 'url'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let router = new Router()
let defaultSystemStorageExpire = 1 * 60 * 60 * 1000 // 1h
class User {
  /******************************设置个人登录和法人登录*******************************************************/
  // 注意此处的方法必须加载框架获取用户信息框架js，否则会报错
  /**
   * 是否绑定省网厅
   * @param {any} accessTicket
   * @param {any} callback
   * isBoundProvincialVip
   * @memberof User
   */
  isBoundProvincialVip(accessTicket, callback) {//是否绑定省网厅
    // var reqs = new Remote(false, false).packageParamBase({
    //   accessTicket: accessTicket
    // });
    // getServiceDate(Url.sso.PRO011, 'POST', reqs, (data) => { // 是否绑定省网厅接口

    // });
    var _param = {
      accessTicket: accessTicket
    }
    Fetch.httpRequestPost(Url.sso.PRO011, _param, function (data) {
      if (data && data.body && data.body.token && data.body.token.code == 200 && data.head.rtnCode === "000000") {
        if (data.body.token && data.body.token.row == 200) {
          S.set('provinceToken', data.body.token.token, 120000);// 太极Token
          S.set('provinceUserId', data.body.token.uid, 120000); // 太极uid
          /*S.set('provinceUserId',data.body.user.user.USER_ID,120000); // 浪潮uid*/
          if (data.body.user && data.body.user.user && data.body.user.user.CORPORATE_CODE) {
            S.set('corporateCode', data.body.user.user.CORPORATE_CODE, 120000); // // 社会信用代码
          } else {
            S.set('corporateCode', '', 120000); // // 社会信用代码
          }
          callback(true)//已授权筑民生授权省网厅用户可以直接进入
          return true;  //已授权筑民生授权省网厅用户可以直接进入
        } else {
          callback(false);
          Dcbaseapi.getUserInfo((data) => {
            if (parseInt(data.level) === 1) {
              Dcbaseapi.toRealName();// 跳转实名认证页
            } else {
              // window.location.href = './authorityLogin.html';  //授权筑民生授权省网厅用户
              router.push(`/authorityLoginVue/`)
            }
          })
        }
      } else {
        callback(false);
        Dcbaseapi.getUserInfo((data) => {
          if (parseInt(data.level) == 1) {
            Dcbaseapi.toRealName();// 跳转实名认证页

          } else {
            // window.location.href = './authorityLogin.html';  //授权筑民生授权省网厅用户
            router.push(`/authorityLoginVue/`)
          }
        })
      }
    })
    var _this = this;
  }
  /**
   * 实名认证
   * isIdCardAuthentication
   * 01表示未认证
   * 0201普通实名认证中
   * 0203/0204/0205高级实名认证中
   * 02普通实名认证
   * 03高级实名认证
   * return
   */
  isIdCardAuthentication(ssFn, examiningFn, errorFn) {
    Dcbaseapi.getUserInfo((data) => {
      // 获取信息成功
      if (~~data.level == 3 || ~~data.level == 2) {
        ssFn()
      } else if (~~data.level == 201 || ~~data.level == 203 || ~~data.level == 204 || ~~data.level == 205) {
        examiningFn()
      } else {
        Dcbaseapi.toRealName() // 跳转实名认证页
      }
    }, (error) => {
      // 获取信息失败
      errorFn()
    })
  }

  /**
   * 返回上一页
   * goBack
   * @memberof User
   */

  goBack() {
    window.location.href = window.history.go(-1);
  }

  /**
   * 登出
   * logout
   * @memberof User
   */
  logout() {
    S.remove('accessticket')
  }

  // 1在需要登陆的页面调用User.isLoginMyApp 验证登录并获取票据accessTicket
  /**
   * 票据accessTicket
   * @memberof User
   */
  isLoginMyApp() { ///获得票据
    Dcbaseapi.getAccessTicket((accessticket) => { //获得票据
      S.set("accessticket", accessticket, 720000);
    }, (fail) => { //未登录，获取票据失败
      //跳转登录
      Dcbaseapi.login((accessticket) => { //登录成功后获取票据
        S.set("accessticket", accessticket, 720000);
      }, (onFai) => { //登录失败，无法获取用户票据
        alert("我没有获取到票据，返回了一个错误" + onFai);
        Dcbaseapi.popViewController();
      });
    });
    console.log(S.get("accessticket"))
  }
  h5GetAccessTicket(callback) { ///获得票据
    Dcbaseapi.getAccessTicket((accessticket) => { //获得票据
      S.set("accessticket", accessticket, 720000);
      callback(accessticket)
    }, (fail) => { //未登录，获取票据失败
      //跳转登录
      Dcbaseapi.login((accessticket) => { //登录成功后获取票据
        S.set("accessticket", accessticket, 720000);
        callback(accessticket)
      }, (onFai) => { //登 录失败，无法获取用户票据
        alert("我没有获取到票据，返回了一个错误" + onFai);
        Dcbaseapi.popViewController();
      });
    });
  }

  // 分享
  /**
   * title：分享的标题
   * url：分享的url地址
   * content：分享的内容
   * image：展示的图片url地址
   * @memberof User
   */
  share(title, url, content, image) {
    Dcbaseapi.sharedContent(title, url, content, image)
  }

  /**
   * 跳转到实名页面
   * 000000: 提交实名认证成功
   * 555555: 用户未登录
   * 666666: 当前用户为已实名认证用户，不需再实名认证操作
   * 999999: 实名认证失败
   * goBack
   * @memberof User
   */
  isIdCaredToRealName(ssFn, notLoginFn, alreadyFn, failFn) {
    Dcbaseapi.toRealName((data) => {
      // 获取信息成功
      if (~~data == '000000') {
        ssFn()
      } else if (~~data == '555555') {
        notLoginFn()
      } else if (~~data == '666666') {
        alreadyFn()
      } else {
        failFn()
      }
    });
  }
  /**
   * 识别筑民生APP内置浏览器内核标识
   */
  isAppId() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/dfhapp/)) {
      return true;
    } else {
      return false;
    }
  }

  // 2调用页面初始化时只需调用 User.isBoundProvincialVip(accessTicket) 即可触发并要求用户登陆
  /***********************设置个人登录和法人登录***********************/
}
export default new User()
