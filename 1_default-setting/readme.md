# express 默认配置
使用 chrome / postman 观察教程 app.js 中，express 默认的设置
- 请求 localhost:3000 （默认端口）

## 初始响应头
```
HTTP/1.1 200 OK                           // 看来express默认还是使用最广泛的http/1.1协议 
X-Powered-By: Express                     // 提示服务端使用的技术是express
Content-Type: text/html; charset=utf-8    // 响应类型 和编码方式 为了在浏览器能直观显示
Content-Length: 12                        // 响应内容长度为11个字节（Content-Length单位为字节Byte）
ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"   // express默认使用ETag作为缓存标识(跳转304的依据)
Date: Wed, 31 May 2023 08:27:39 GMT       // 响应时间
Connection: keep-alive                    // 保持活动状态标识：作用是为了复用TCP链接，可以使得一段时间内http链接不再重复的“三次握手”（http是无状态协议）
Keep-Alive: timeout=5                     // 5秒没有新的http请求后 TCP链接将关闭
```

## 基于ETag的缓存方案
上面发现 ETag 作为缓存标识，查询资料发现：
> ETag（`Entity Tag` 实体标签）是 HTTP 协议中用于缓存验证的机制之一。它是服务器为每个资源分配的唯一标识符，用于标识资源的版本或状态。ETag 的主要作用是在客户端和服务器之间进行缓存验证，以确定资源是否已更改。
>
> 如果两个 ETag 值相匹配，表示客户端拥有的资源版本与服务器上的版本相同，服务器将返回一个 `304 Not Modified` 响应，告知客户端可以使用缓存副本，而无需返回实际的资源内容。这样可以减少网络传输和服务器的负载。

如果两个 ETag 值不匹配，表示客户端拥有的资源版本与服务器上的版本不同，服务器将返回一个正常的 200 OK 响应，同时返回更新后的资源内容。客户端可以使用新的资源进行更新或替换缓存副本。

现在我们默认返回 Hello World，ETag 将一致。所以再次发送请求，应该命中`协商缓存`返回304

- 在 Chrome F12 DevTools Network 中关闭`停用缓存` 打开`保留日志` F5刷新页面 localhost:3000

```
HTTP/1.1 304 Not Modified
X-Powered-By: Express
ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"
Date: Wed, 31 May 2023 08:28:47 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

控制台可以看到，200请求的耗时约400毫秒，304缓存的速度仅为4毫秒左右

如果我们每次返回的数据都不相同，那么按道理 ETag 应该不一致。修改 app.js

```
app.get('/', (req, res) => {
  res.send('Hello World!' + new Date().toString())
})
```

此时发现，由于 new Date().toString() 精确到秒，因此在1秒内的所有请求，除第一个外都会为304, 直到下一秒 ETag 变化后再次转为200。 