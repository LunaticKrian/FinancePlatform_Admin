// 在utils包下的request.js模块封装了axios功能，引入模块：
import request from '@/utils/request'

// 导出默认模块：
export default {
  // 获取积分等级列表：
  list() {
    return request({
      // 配置了统一的baseURL：http://localhost
      url: '/admin/core/integralGrade/list',
      method: 'get'
    })
  }
}
