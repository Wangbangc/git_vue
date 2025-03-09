<template>
  <div class="repository-detail-container">
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">
        <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="头像" class="owner-avatar">
        <h2 class="repository-name">{{ repository.name }}</h2>
        <span class="repository-visibility">公开</span>
      </div>
      <div class="header-right">
        <el-button type="primary">标星仓库</el-button>
        <el-button type="primary">提交代码</el-button>
        <el-button type="primary" @click="cloneRepository">克隆仓库</el-button>
        <el-button type="primary" @click="deleteRepository">删除仓库</el-button>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="content">
      <!-- 文件列表 -->
      <div class="file-list">
        <div class="file-list-header">
          <span>文件</span>
          <span>最后提交信息</span>
          <span>更新时间</span>
        </div>
        <div class="file-item" v-for="file in repository.files" :key="file">
          <span class="file-name">{{ file }}</span>
          <span class="commit-message">Initial commit</span>
          <span class="updated-time">2 days ago</span>
        </div>
        
      </div>

      <!-- 仓库信息 -->
      <div class="repository-info">
        <h3>关于</h3>
        <p>{{ repository.description }}</p>
        <!-- <p>创建时间: {{ repository.created_at }}</p> -->

        <!-- 其他信息，例如贡献者、语言等 -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getRepositoryDetails } from '../api/repository';

export default {
  setup() {
    const route = useRoute();
    const repository = ref({});

    onMounted(async () => {
     
      const repositoryId = route.params.repositoryId
      console.log("repositoryId:", repositoryId);
      try {
        const response = await getRepositoryDetails(repositoryId);
        if (response.data.code === 200) {
          repository.value = response.data.data;
        } else {
          console.error('Failed to fetch repository details:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching repository details:', error);
      }
    });

    const cloneRepository = () => {
      // 克隆仓库逻辑
      console.log('克隆仓库');
    };

    const deleteRepository = () => {
      // 删除仓库逻辑
      console.log('删除仓库');
    };

    const commitCode = () => {
      // 提交代码逻辑
      console.log('提交代码');
    };

    const pullCode = () => {
      // 拉取代码逻辑
      console.log('拉取代码');
    };

    return {
      repository,
      cloneRepository,
      deleteRepository,
      commitCode,
      pullCode
    };
  }
};
</script>
<style scoped>
.repository-detail-container {
  height: 100vh;
  font-family: sans-serif;
  padding: 20px;
}

/* 头部样式 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-left {
  display: flex;
  align-items: center;
}

.owner-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.repository-name {
  margin: 0;
}

.repository-visibility {
  color: #586069;
  margin-left: 10px;
}

.header-right {
  display: flex;
  gap: 10px;
}

/* 内容区域样式 */
.content {
  display: flex;
  gap: 20px;
  height: 100vh;
}

/* 文件列表样式 */
.file-list {
  flex: 2;
}

.file-list-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f7f7f7;
  font-weight: bold;
}

.file-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

/* 仓库信息样式 */
.repository-info {
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
}
</style>