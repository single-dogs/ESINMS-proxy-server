# 代理服务器，前端测试用

## 使用

- 静态资源放到 `./public` 下
- 修改 `./config.json`，配置代理

  ```json
  {
    "target": "http://gaolihai.cool:8080", // 目标主机
    "localPort": 80                        // 本地端口
  }
  ```

- 运行

  ```shell
  npm install
  npm run start
  ```
