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
  },
  // 根据Id删除积分等级信息：
  removeById(id) {
    return request({
      url: '/admin/core/integralGrade/remove/' + id,
      method: 'delete'
    })
  },
  // 新增积分等级数据：
  save(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/save',
      method: 'post',
      data: integralGrade
    })
  },
  // 根据ID获取积分等级信息：
  getById(id) {
    return request({
      url: '/admin/core/integralGrade/get/' + id,
      method: 'get'
    })
  },
  // 根据ID更新积分等级信息：
  updateById(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/update',
      method: 'put',
      data: integralGrade
    })
  }
}
