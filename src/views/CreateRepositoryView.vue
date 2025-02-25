<template>
  <div class="create-repository-container">
    <h1>创建新的仓库</h1>
    <p>一个仓库包含所有的项目文件，包括版本历史记录。</p>

    <el-form :model="form" label-position="top">
      <el-form-item label="所有者 *" class="owner-item">
        <div class="owner-info">
          <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="用户头像" class="owner-avatar">
          <span>您的用户名</span>
        </div>
      </el-form-item>

      <el-form-item label="仓库名 *" :rules="[{ required: true, message: '请输入仓库名', trigger: 'blur' }]">
        <el-input v-model="form.repository_name"></el-input>
        <p class="tips">好的仓库名应该简短易记。</p>
      </el-form-item>

      <el-form-item label="描述 (可选)">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>

      <el-form-item label="可见性">
        <el-radio-group v-model="form.visibility">
          <el-radio label="public">公开</el-radio>
          <el-radio label="private">私有</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-checkbox v-model="form.add_readme">使用 README 文件初始化此仓库</el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="create-button">创建仓库</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        repository_name: '',
        description: '',
        visibility: 'public',
        add_readme: false
      }
    }
  },
  methods: {
    onSubmit() {
      // 创建仓库逻辑
      console.log('创建仓库', this.form);
    }
  }
}
</script>

<style scoped>
.create-repository-container {
  width: 600px;
  margin: 20px auto;
  font-family: sans-serif;
}

/* 所有者信息 */
.owner-item {
  margin-bottom: 0;
}

.owner-info {
  display: flex;
  align-items: center;
}

.owner-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

/* 提示文字 */
.tips {
  color: #586069;
  font-size: 0.9em;
}

/* 创建按钮 */
.create-button {
  width: 100%;
  background-color: #28a745;
  border-color: #28a745;
}

.create-button:hover {
  background-color: #24963e;
  border-color: #24963e;
}
</style>