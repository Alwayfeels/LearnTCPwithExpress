const express = require('express');
const app = express();

app.get('/video', (req, res) => {
  const filePath = __dirname + '/resource/video.mp4'; // 指定要返回的 MP4 文件路径
  
  // 设置 Content-Type 为 video/mp4
  res.setHeader('Content-Type', 'video/mp4');
  // 使用 res.sendFile 方法发送文件
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error while sending file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.get('/pdf', (req, res) => {
  const filePath = __dirname + '/resource/pdf.pdf'; // 指定要返回的 MP4 文件路径
  
  // 设置 Content-Type 为 application/pdf
  res.setHeader('Content-Type', 'application/pdf');
  // 使用 res.sendFile 方法发送文件
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error while sending file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.get('/image', (req, res) => {
  const imagePath = __dirname + '/resource/video.mp4'; // 指定要返回的 JPG 图片路径

  // 设置 Content-Type 为 image/jpeg
  res.setHeader('Content-Type', 'image/jpeg');

  // 使用 res.sendFile 方法发送文件
  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error('Error while sending file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});


// 启动服务器，监听指定端口
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});