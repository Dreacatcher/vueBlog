/*
 * @Author: lucm
 * @Date: 2017-11-29 10:04:11
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-18 17:38:32
 */
'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
module.exports = {
  // appHead
  appHead: srcDir + '/components/appHead/headVue',
  mainCont: srcDir + '/components/mainCont/mainCont'
}

