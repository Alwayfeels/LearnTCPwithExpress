# Content-Type
使用 chrome / postman 观察教程 app.js 中，express 默认的设置
- 请求 localhost:3000 （默认端口）

## 修改初始 response content-type

content-type 遵守 MIME 类型
> MIME (Multipurpose Internet Mail Extensions) 是一种标准，用于在互联网上定义文件的类型和格式。它最初是为电子邮件而设计的，用于标识邮件中附加的文件类型。随后，它被广泛应用于其他互联网协议，例如 HTTP，用于标识传输的数据的类型。

下面是一些常见的MIME类型

```
文本类型：

text/plain：纯文本
text/html：HTML 文档
text/css：CSS 样式表
text/javascript：JavaScript 脚本
text/xml：XML 数据

图像类型：

image/jpeg：JPEG 图像
image/png：PNG 图像
image/gif：GIF 图像
image/svg+xml：SVG 图像

音频类型：

audio/mpeg：MP3 音频
audio/wav：WAV 音频
audio/ogg：OGG 音频

视频类型：

video/mp4：MP4 视频
video/quicktime：QuickTime 视频
video/webm：WebM 视频

应用程序类型：

application/json：JSON 数据
application/xml：XML 数据
application/pdf：Adobe PDF 文件
application/octet-stream：二进制流数据
```