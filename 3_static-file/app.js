const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/files'));
app.use('/resource', express.static(__dirname + '/resource'));

// 启动服务器，监听指定端口
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});