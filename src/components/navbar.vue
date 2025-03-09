<template>
    <nav class="navbar">
      <div class="navbar-left">
        <button class="menu-button">
          <el-icon><Menu /></el-icon>
        </button>
        <a  href='#/deepseek' class="logo">
          <el-icon><Promotion /></el-icon>
        </a>
        <span class="owner-repo">
          <a href="#/profile">用户名</a> / <a href="#/repositories">仓库名</a>
        </span>
      </div>
  
      <div class="navbar-center">
        <el-input placeholder="键入以搜索..." class="search-input" prefix-icon="Search" />
      </div>
  
      <div class="navbar-right">
        <el-button type="text"><el-icon><User /></el-icon></el-button>
        <el-button type="text"><el-icon><Plus /></el-icon></el-button>
        <el-button type="text"><el-icon><Bell /></el-icon></el-button>
         <el-button type="text"><el-icon><Setting /></el-icon></el-button>
        <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="头像" class="avatar" />
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {
    Menu,
    Promotion,
    Search,
    User,
    Plus,
    Bell,
    Setting
  } from '@element-plus/icons-vue'
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    font-family: sans-serif;
  }
  
  .navbar-left,
  .navbar-center,
  .navbar-right {
    display: flex;
    align-items: center;
  }
  
  /* 左侧 */
  .navbar-left .menu-button {
    background: none;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    padding: 0;
  }
  
  .navbar-left .logo {
    font-size: 20px;
    color: black;
    text-decoration: none;
    margin-right: 10px;
  }
  
  .navbar-left .owner-repo a {
    color: #0366d6;
    text-decoration: none;
  }
  
  /* 中间 */
  .navbar-center .search-input {
    width: 400px;
  }
  
  /* 右侧 */
  .navbar-right button{
      padding: 0;
  }
  .navbar-right button:hover {
    background-color: rgba(0, 0, 0, 0.045);
  }
  
  .navbar-right .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
  </style>