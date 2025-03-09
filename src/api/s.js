const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // 引入 cors
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // 启用 cors

app.get('/api/files', (req, res) => {
  const repoPath = req.query.path;

  if (!repoPath) {
    return res.status(400).json({ error: 'Path is required' });
  }

  // 安全验证：确保 repoPath 在允许的范围内
  const allowedBasePaths = [
    'C:\\Users\\74788\\Desktop\\bs\\git\\aaa'  // 允许访问的根目录
  ];

  let isPathSafe = false;
  for (const basePath of allowedBasePaths) {
      if (repoPath.startsWith(basePath)) {
          isPathSafe = true;
          break;
      }
  }

  if (!isPathSafe) {
      return res.status(403).json({ error: 'Path is outside allowed base paths' });
  }

  fs.readdir(repoPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: 'Failed to read directory' });
    }

    const fileList = files.map(file => ({
      name: file.name,
      type: file.isDirectory() ? 'directory' : 'file',
      // 暂时模拟提交信息和更新时间
      commit_message: 'Initial commit',
      updated_at: '2 days ago',
    }));

    res.json(fileList);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});