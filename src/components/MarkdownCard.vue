<template>
    <div class="markdown-card">
      <div v-html="htmlContent"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      markdown: {
        type: String,
        required: true,
      },
    },
    computed: {
      htmlContent() {
        // 直接返回接收到的 HTML 内容
        return this.markdown;
      },
    },
  };
  </script>
  
  <style scoped>
  .markdown-card {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  </style>