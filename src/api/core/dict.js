// 在utils包下的request.js模块封装了axios功能，引入模块：
import request from '@/utils/request'

export default {
  listByParentId(parentId) {
    return request({
      url: `/admin/core/dict/listByParentId/${parentId}`,
      method: 'get'
    })
  }
}
