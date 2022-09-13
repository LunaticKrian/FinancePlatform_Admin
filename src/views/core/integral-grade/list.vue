<template>
  <div class="app-container">
    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50"/>
      <el-table-column prop="borrowAmount" label="借款额度"/>
      <el-table-column prop="integralStart" label="积分区间开始"/>
      <el-table-column prop="integralEnd" label="积分区间结束"/>
    </el-table>
  </div>
</template>

<script>
// 导入integral-grade模块API：
import integralGradeApi from '@/api/core/integral-grade'

export default {
  data() {
    return {
      // 积分等级列表：
      list: []
    }
  },
  // 页面加载时调用created方法：
  created() {
    this.fetchData()
  },
  methods: {
    // 获取数据：
    fetchData() {
      integralGradeApi.list().then(response => {
        this.list = response.data.list
      })
    }
  }
}
</script>

<!--scoped：指定当前样式只修饰当前组件-->
<style scoped>

</style>
