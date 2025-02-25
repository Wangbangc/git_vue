<template>
  <el-form :model="form" @submit.native.prevent="onSubmit">
    <el-form-item label="邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input type="password" v-model="form.new_password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">更新信息</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        new_password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      // 更新信息逻辑
      console.log('更新信息', this.form);
    }
  }
}
</script> 