<template>
  <div class="app-container">
    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50"/>
      <el-table-column prop="borrowAmount" label="借款额度"/>
      <el-table-column prop="integralStart" label="积分区间开始"/>
      <el-table-column prop="integralEnd" label="积分区间结束"/>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link
            :to="'/core/integral-grade/edit/' + scope.row.id"
            style="margin-right:5px;"
          >
            <el-button type="primary" size="mini" icon="el-icon-edit">
              修改
            </el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeById(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>
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
    // 获取列表数据：
    fetchData() {
      integralGradeApi.list().then(response => {
        this.list = response.data.list
      })
    },
    // 根据ID删除积分等级信息：
    removeById(id) {
      console.log(id)
      this.$confirm('此操作将永久删除该项记录，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // 点击确认按钮时，才执行then中的代码语句
        integralGradeApi.removeById(id).then(response => {
          this.$message({
            showClose: true,
            message: response.message,
            type: 'success'
          })
          this.fetchData()
        })
      })
    }
  }
}
</script>

<!--scoped：指定当前样式只修饰当前组件-->
<style scoped>

</style>
