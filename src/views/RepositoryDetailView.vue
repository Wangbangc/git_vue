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
        <el-button type="primary">观察仓库</el-button>
        <el-button type="primary">Fork仓库</el-button>
        <el-button type="primary">标星仓库</el-button>
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
        <div class="file-item" v-for="file in files" :key="file.name">
          <span class="file-name">{{ file.name }}</span>
          <span class="commit-message">{{ file.commit_message }}</span>
          <span class="updated-time">{{ file.updated_at }}</span>
        </div>
        <div class="file-item" @click="commitCode()">
           <el-button type="primary" @click="commitCode">提交代码</el-button>
        </div>
        <div class="file-item"  @click="pullCode">
           <el-button type="primary" @click="pullCode">拉取代码</el-button>
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
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const repositoryId = ref(route.params.repositoryId); // 保留 ID

    // 从 Vuex 中获取 repository 对象
    const repository = ref(store.getters.getRepo || {});

    const files = ref([]);

    onMounted(async () => {
      // 确保能正确获取到 repository
      console.log("repository data from Vuex:", repository.value);

      // 获取文件列表 (本地文件可视化)
      if (repository.value.path) {
          await fetchFiles(repository.value.path);
      } else {
          console.warn("Repository path is undefined.  Cannot fetch files.");
      }
    });

    const fetchFiles = async (path) => {
      // 使用path获取文件列表的逻辑
      console.log('Fetching files from path:', path);
      try {
        const response = await axios.get(`/api/files?path=${encodeURIComponent(path)}`); // 替换为你的 API 端点
        files.value = response.data; // 假设 API 返回文件列表
      } catch (error) {
        console.error('Error fetching files:', error);
        // 处理错误，例如显示错误消息
      }
    };

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
      files,
      cloneRepository,
      deleteRepository,
      commitCode,
      pullCode
    };
  }
}
</script>
<style scoped>
.repository-detail-container {
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