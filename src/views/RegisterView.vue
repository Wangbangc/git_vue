<template>
  <div class="register-container">
    <h1>创建账户</h1>

    <el-form class="register-form" :model="form" label-position="top">
      <el-form-item label="注册*">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="register-button">
          继续
        </el-button>
      </el-form-item>
    </el-form>

    <p class="login-link">
      已经有账户了？
      <a href="#/login">登录</a>
    </p>
  </div>
</template>

<script>
import { registerUser } from '../api/user';

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
        const response = await registerUser(this.form);
        console.log('注册成功:', response.data);
        this.$router.push('/login');
      } catch (error) {
        console.error('注册失败:', error);
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  width: 400px; /* 调整宽度 */
  margin: 100px auto; /* 调整上下边距和居中 */
  text-align: center;
}

.register-form {
  margin-top: 30px;
}

.register-button {
  width: 100%;
  background-color: #1abc9c; /* 按钮颜色 (示例) */
  border-color: #1abc9c; /* 按钮边框颜色 (示例) */
  border-radius: 5px;
  font-size: 16px;
  padding: 12px 0; /* 调整按钮高度 */
}

.register-button:hover {
  background-color: #16a085; /* 鼠标悬停时的颜色 (示例) */
  border-color: #16a085;
}

.login-link {
  margin-top: 20px;
}

.login-link a {
  color: #1abc9c; /* 登录链接颜色 (示例) */
  text-decoration: none;
}
</style>