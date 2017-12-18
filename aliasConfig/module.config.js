/*
* @Author: lcm
* @Date:   2017-04-17 18:01:21
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-12 16:19:11
*/

'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
var components = require('./_include/components')
var home = require('./_include/home')

var base = {
  // lib
  vue$: 'vue/dist/vue.esm',
  // lib
  store: srcDir + '/store/index',
  // tools
  base: srcDir + '/tools/base',
  fetch: srcDir + '/tools/fetch',
  storage: srcDir + '/tools/storage',
  url: srcDir + '/tools/url',
  common: srcDir + '/tools/common',
  base64: srcDir + '/tools/base64',
  placeholder: srcDir + '/tools/jquery.placeholder.min',
  user: srcDir + '/tools/user',

  // --------------------------------通用组件------------------------------------//
   btnVue: srcDir + '/components/ui/btn/btn',


   // --------------------------------通用组件------------------------------------//
  'vue$': 'vue/dist/vue.esm.js',
  '@': path.resolve('src'),
  'src': path.resolve(__dirname, '../src'),
  'assets': path.resolve(__dirname, '../src/assets')
}
var newConfig = Object.assign(base,
  components,
  home
);
module.exports = newConfig


