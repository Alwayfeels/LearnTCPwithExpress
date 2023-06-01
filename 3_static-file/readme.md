# static file

通过 Express 中的 express.static 内置中间件函数。提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件

例如，使用以下代码在名为 public 的目录中提供图像、CSS 文件和 JavaScript 文件：
```
app.use(express.static('public'));

app.use('/public', express.static(__dirname + '/public'));
```
