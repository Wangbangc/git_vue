<template>
  <div class="commit-page-container">
    <div class="drag-area">
      <div class="drag-area-content">
        <i class="el-icon-upload"></i>
        <p>拖拽文件到这里来添加到你的仓库</p>
        <p>或者 <a href="#">选择你的文件</a></p>
      </div>
    </div>

    <div class="commit-changes">
      <h3 style="margin-bottom: 10px;">提交更改</h3>
      <el-form :model="form" label-position="top">
        <el-form-item label="添加文件">
          <el-checkbox-group v-model="form.file_changes">
            <el-checkbox label="文件1">文件1</el-checkbox>
            <el-checkbox label="文件2">文件2</el-checkbox>
            <!-- 这里动态生成文件列表 -->
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="添加可选的扩展描述...">
          <el-input type="textarea" v-model="form.description" :rows="3"></el-input>
        </el-form-item>

        <el-form-item>
          <el-radio v-model="form.commit_type" label="master">
            直接提交到 <span>master</span> 分支。
          </el-radio>
          <el-radio v-model="form.commit_type" label="new_branch">
            创建一个新的 branch
          </el-radio>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="onSubmit">提交更改</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        file_changes: [],
        description: '',
        commit_type: 'master'
      }
    }
  },
  methods: {
    onSubmit() {
      // 提交代码逻辑
      console.log('提交代码', this.form);
    },
    onCancel(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.commit-page-container {
  width: 800px;
  margin: 20px auto;
  font-family: sans-serif;
}

/* 拖拽上传区域 */
.drag-area {
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 50px;
  text-align: center;
  color: #586069;
  margin-bottom: 20px;
}

.drag-area-content i {
  font-size: 30px;
}

.drag-area-content a {
  color: #0366d6;
  text-decoration: none;
}

/* 提交信息 */
.commit-changes {
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 5px;
}
</style>