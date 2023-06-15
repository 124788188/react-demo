
# 基于react-router-dom-v6的demo

# 1 项目入口: @/index.jsx

# 2 接口代理配置: @/setupProxy.js

# 3 路由配置 & 权限配置: @/routes/index.jsx

# 4 reducer相关配置:
#       action配置: @/action/XXX.js, type参数以`${对应的文件名}::`开头
#       reducer配置: @/reducer/XXX/index.js, 其中：
#           actionList = [...对应action.js中所有的type]
#           initState: 相关初始数据


