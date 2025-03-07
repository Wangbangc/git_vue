<template>
  <div class="github-profile">
    <aside class="sidebar">
      <div class="profile">
        <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="Profile Picture" class="profile-picture">
        <h1 class="name">wangbangc</h1>
        <p class="username">wangbangc</p>
        <p class="bio">悠闲</p>

        <!-- 编辑表单 (Element Plus) -->
        <el-form :model="form" label-width="80px" class="edit-form">
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
        <!-- <ul class="profile-details">
          <li><i class="fas fa-building"></i> Nanchang University</li>
          <li><i class="fas fa-map-marker-alt"></i> China</li>
          <li><i class="far fa-clock"></i> 11:39 (UTC +08:00)</li>
          <li><i class="far fa-envelope"></i> 406100220043@email.ncu.edu.cn</li>
        </ul>
      </div>

      <div class="achievements">
        <h2>Achievements</h2>
        <div class="achievement-icon">
          <i class="fas fa-award"></i>
        </div>
      </div>

      <div class="highlights">
        <h2>Highlights</h2>
        <div class="highlight-icon">
          <i class="fas fa-star"></i>
        </div> -->
      </div> 
    </aside>

    <main class="main-content">
      <section class="am-editor">
 
        <div ref="vditorRef" id="vditor"></div>
      </section>
    
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
// import Engine from '@aomao/engine'; // 移除 @aomao/engine
import Vditor from 'vditor';
import MarkdownCard from '../components/MarkdownCard.vue'; // 导入 MarkdownCard 组件
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';

export default {
  components: {
    MarkdownCard, // 注册 MarkdownCard 组件
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  },
  setup() {
    const form = ref({
      email: '',
      new_password: ''
    });
    const vditorRef = ref(null);
    let vditor = null;
    const markdownText = ref(''); // 用于存储 Markdown 文本

    const onSubmit = () => {
      // 更新信息逻辑
      console.log('更新信息', form.value);
      ElMessage({
        message: '更新信息成功！',
        type: 'success',
      })
    };

    const initEditor = () => {
      if (vditorRef.value) {
        vditor = new Vditor('vditor', {
          height: 500,
          value: '# Hello, world!\n\nThis is a basic Markdown editor.',
          preview: {
            mode: 'both',
          },
          after: () => {
            markdownText.value = vditor.getValue();
          },
          input: (value) => {
            markdownText.value = value;
          },
        });
      }
    };

    const destroyEditor = () => {
      if (vditor) {
        vditor = null;
      }
    };

    onMounted(() => {
      initEditor();
    });

    onBeforeUnmount(() => {
      destroyEditor();
    });

    return {
      form,
      vditorRef,
      onSubmit,
      markdownText, // 将 markdownText 返回给模板
    };
  }
};
</script>
<style>
@import 'vditor/dist/index.css';

/* 你的样式代码 */
.github-profile {
  display: flex;
  font-family: sans-serif;
  height: 100vh;
}
.am-editor{
  height: 100%; /* 占满父元素高度 */
  margin: 0;
  padding: 0;
}
.vditor-toolbar {
    background-color: #ffffff;
    border-bottom: 1px solid var(--border-color);
    padding: 0 5px;
    line-height: 1;
}
#vditor{
  height: 100% !important;/* 占满父元素高度 */
  width: 100% !important;
  margin: 0;
  padding: 0;
}
.sidebar {
  width: 300px;
  padding: 20px;
  background-color: #f7f7f7;
}

/* 样式代码 */
/* 样式代码 */
.github-profile {
  display: flex;
  font-family: sans-serif;
}

.sidebar {
  width: 300px;
  padding: 20px;
  background-color: #f7f7f7;
}

.profile {
  text-align: center;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.name {
  font-size: 24px;
  margin-bottom: 5px;
}

.username {
  color: #666;
  margin-bottom: 10px;
}

.bio {
  margin-bottom: 20px;
}

.profile-details {
  list-style: none;
  padding: 0;
}

.profile-details li {
  margin-bottom: 5px;
  color: #333;
}

.achievements,
.highlights {
  margin-top: 20px;
  text-align: center;
}

.achievement-icon,
.highlight-icon {
  font-size: 30px;
  color: #0366d6;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.markdown-editor h2,
.am-editor h2,
.markdown-preview h2 {
  font-size: 20px;
  margin-bottom: 15px;
}

/* am-editor 样式*/
.editor-container {
  height: 500px;
  border: 1px solid #ccc;
  overflow: auto;
  padding: 10px;
}


.markdown-preview {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* 覆盖 Vditor 样式，使其内容靠左对齐 */
#vditor .vditor-reset {
  text-align: left !important; /* 添加 !important 声明 */
}
</style>
