<template>
  <div class="login-container">
    <h1>欢迎回来</h1>

    <el-form class="login-form" :model="form" label-position="top">
      <el-form-item label="登入">
        <el-input v-model="form.username" placeholder="账号"></el-input>
        <el-input v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="login-button">
          继续
        </el-button>
      </el-form-item>
    </el-form>

    <p class="register-link">
      还没有账户？
      <a href="#/register">注册</a>
    </p>
  </div>
</template>

<script>
import { loginUser } from '../api/user';

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        const response = await loginUser(this.form);
        console.log('登录成功:', response.data);
        this.$router.push('/repositories');
      } catch (error) {
        console.error('登录失败:', error);
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 400px; /* 调整宽度 */
  margin: 100px auto; /* 调整上下边距和居中 */
  text-align: center;
}

.login-form {
  margin-top: 30px;
}

.login-button {
  width: 100%;
  background-color: #1abc9c; /* 按钮颜色 (示例) */
  border-color: #1abc9c; /* 按钮边框颜色 (示例) */
  border-radius: 5px;
  font-size: 16px;
  padding: 12px 0; /* 调整按钮高度 */
}

.login-button:hover {
  background-color: #16a085; /* 鼠标悬停时的颜色 (示例) */
  border-color: #16a085;
}

.register-link {
  margin-top: 20px;
}

.register-link a {
  color: #1abc9c; /* 注册链接颜色 (示例) */
  text-decoration: none;
}
</style>