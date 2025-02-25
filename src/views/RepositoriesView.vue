<template>

  <div class="repository-list-container">

    <!-- 侧边栏 -->

    <aside class="sidebar">

      <div class="profile">

        <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="头像" class="avatar">

        <p class="username">您的用户名</p>

        <button class="edit-profile-button">编辑个人资料</button>

        <div class="stats">

          <span>2 个关注者</span>

          <span>3 关注</span>

        </div>

      </div>

      <!-- 其他侧边栏内容，例如成就 -->

    </aside>



    <!-- 主要内容区域 -->

    <main class="main-content">

      <!-- 头部 -->

      <div class="header">

        <el-input v-model="searchQuery" placeholder="键入以搜索仓库..." class="search-input"></el-input>

        <div class="filters">

          <el-select placeholder="类型">

            <el-option label="全部" value="all"></el-option>

            <el-option label="公开" value="public"></el-option>

            <el-option label="私有" value="private"></el-option>

          </el-select>

          <el-select placeholder="语言">

            <el-option label="全部" value="all"></el-option>

            <el-option label="JavaScript" value="javascript"></el-option>

            <el-option label="Python" value="python"></el-option>

          </el-select>

          <el-select placeholder="排序">

            <el-option label="最近更新" value="updated"></el-option>

            <el-option label="星标数" value="stars"></el-option>

          </el-select>

          <el-button type="success" @click="dialogVisible = true">创建仓库</el-button>

        </div>

      </div>



      <!-- 仓库列表 -->

      <div class="repository-list">

        <div class="repository-item" v-for="repo in filteredRepositories" :key="repo.id">

          <div class="repo-header">

            <router-link
    :to="{
      name: 'RepositoryDetail',
      params: { repositoryId: repo.id }
    }"
    class="repo-name"
    @click="setRepo(repo)" 
  >{{ repo.name }}</router-link>
            <span class="repo-visibility">公开</span>

          </div>

          <p class="repo-description">{{ repo.description }}</p>

          <div class="repo-footer">

            <span class="repo-language">java</span>

            <span class="repo-updated">更新于 2 天前</span>

            <div class="repo-actions">

              <el-button type="text"><i class="el-icon-star-off"></i> 星标</el-button>

            </div>

          </div>

        </div>

      </div>

    </main>

  </div>

  <el-dialog v-model="dialogVisible" title="创建新仓库" :append-to-body="true">
    <el-form :model="newRepo">
      <el-form-item label="用户名">
        <el-input v-model="newRepo.username"></el-input>
      </el-form-item>
      <el-form-item label="仓库名">
        <el-input v-model="newRepo.repositoryName"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="newRepo.description"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="confirmCreateRepository">确认创建</el-button>
    </div>
    </template>
  </el-dialog>



</template>



<script>
import { mapActions } from 'vuex';
import { listRepositories, createRepository } from '../api/repository';



export default {

  data() {

    return {

      repositories: [],

      filteredRepositories: [],

      dialogVisible: false,

      newRepo: {
        userId:1,

        username: '',

        repositoryName: '',

        description: ''

      },

      currentPage: 1,

      pageSize: 10,

      totalRepositories: 0,

      searchQuery: ''

    }

  },

  watch: {

    searchQuery(newQuery) {

      this.filteredRepositories = this.repositories.filter(repo =>

        repo.name.toLowerCase().includes(newQuery.toLowerCase())

      );

    }

  },

  created() {

    this.fetchRepositories();

  },

  methods: {
    ...mapActions(['setRepo']),
    async fetchRepositories() {

      try {

        const response = await listRepositories();
        if (response.data.code === 200) {

          this.repositories = response.data.data;
          
          this.filteredRepositories = this.repositories;

          this.totalRepositories = response.data.data.length; // 假设返回的数据包含总数

        } else {

          console.error('Failed to fetch repositories:', response.data.message);

        }

      } catch (error) {

        console.error('Error fetching repositories:', error);

      }

    },

    async createRepository(repoData) {

      try {

        const response = await createRepository(repoData);

        if (response.data.code === 0) {

          console.log('Repository created successfully:', response.data.data);

          this.fetchRepositories(); // 重新获取仓库列表

        } else {

          console.error('Failed to create repository:', response.data.message);

        }

      } catch (error) {

        console.error('Error creating repository:', error);

      }

    },

    confirmCreateRepository() {

      this.createRepository(this.newRepo);

      this.dialogVisible = false;

    },

    handlePageChange(page) {

      this.currentPage = page;

      this.fetchRepositories(); // 根据新页码刷新列表

    },

    viewRepository(id) {

      // 查看仓库详情

      console.log('查看仓库', id);

    }

  }

}

</script>



<style scoped>


.repository-list-container {

  display: flex;

  min-height: 100vh;

  font-family: sans-serif;

}



/* 侧边栏样式 */

.sidebar {

  width: 250px;

  padding: 20px;

  background-color: #f7f7f7;

}



.profile {

  text-align: center;

  margin-bottom: 20px;

}



.avatar {

  width: 80px;

  height: 80px;

  border-radius: 50%;

  margin-bottom: 10px;

}



.username {

  font-weight: bold;

}



.edit-profile-button {

  background-color: transparent;

  border: 1px solid #ccc;

  padding: 5px 10px;

  border-radius: 5px;

  cursor: pointer;

}



.stats {

  display: flex;

  justify-content: space-around;

  margin-top: 10px;

}



/* 主要内容区域样式 */

.main-content {

  flex: 1;

  padding: 20px;

}



/* 头部样式 */

.header {

  display: flex;

  flex-direction: column;

  margin-bottom: 20px;

}



.search-input {

  margin-bottom: 10px;

}



.filters {

  display: flex;

  gap: 10px;

}



/* 仓库列表样式 */

.repository-list {

  display: flex;

  flex-direction: column;

  gap: 15px;

}



.repository-item {

  background-color: #fff;

  border: 1px solid #eee;

  padding: 15px;

  border-radius: 5px;

}



.repo-header {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 5px;

}


.repo-name {

  font-weight: bold;

  color: #0366d6;

  text-decoration: none;

}



.repo-visibility {

  color: #586069;

}



.repo-description {

  color: #586069;

}



.repo-footer {

  display: flex;

  justify-content: space-between;

  align-items: center;

  color: #586069;

  font-size: 0.9em;

}



.repo-actions {

  display: flex;

  gap: 5px;

}

</style>
