/*
 * @Author: lucm
 * @Date: 2017-06-05 17:21:34
 * @Last Modified by: lucm
 * @Last Modified time: 2017-10-30 09:12:07
 */

class Service {
  setUrl (serviceName, interfaces) {
    let _size = interfaces.length
    let _newinterfaces = {
      sso: []
    }
    for (let i = 0; i < _size; i++) {
      _newinterfaces.sso[interfaces[i]] = serviceName + 'service/' + interfaces[i]
    }
    return _newinterfaces
  }
}
/** *********************************************** Setting API接口调用 ***************************************************/
/** ****sso接口调用*****/
// test: http://yuhai.tunnel.2bdata.com/service/HEALTH001
// uat://  http://uat.zhuminsheng.com:7878/province_work/EVE015/
// prd:   http://www.zhuminsheng.com/province_work/service/HEALTH001
// http://uat.zhuminsheng.com:7878/handleprogress/service/HAP001

// let env = 'http://www.zhuminsheng.com/province_work/'
// let env = 'http://222.85.156.45/province_work/'

// let env = 'http://222.85.156.45/province_work/'
// let env = 'http://222.85.178.219/provinec_work/'

let env = 'http://www.zhuminsheng.com/province_work/'
let applications = [
  'ADS001',
  'MYB001',
  'AUT001',
  'ADS002',
  'COM0012',
  'ADS003',
  'DEP001',
  'COM0011',
  'EVE001',
  'EVE006',
  'HEALTH019',
  'HEALTH020',
  'NAM001',
  'NAM002',
  'AUT001',
  'PRO013',
  'NAM005',
  'SHA001',
  'NAM006',
  'NAM003',
  'NAM004',
  'PRO011',
  'PRO012',
  'PRO007',
  'EVE011',
  'CLA005',
  'EVE003',
  'EVE012',
  'EVE015',
  'CLA001',
  'CLA002',
  'DEP001',
  'QIZ001',
  'NAM005',
  'COM0011',
  'COM0012',
  'MYB001',
  'MYB002',
  'MYB003',
  'MYB004'
]
let _service = new Service()
export default _service.setUrl(env, applications)
