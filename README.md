
# 基于react-router-dom-v6的demo
# 配合node分支搭建的后台

  1 项目入口: @/index.jsx

  2 接口代理配置: @/setupProxy.js

  3 路由配置 & 权限配置: @/routes/index.jsx

  4 reducer相关配置:
      action配置: @/action/XXX.js, type参数以`${对应的文件名}::`开头
      reducer配置: @/reducer/XXX/index.js, 其中：
        actionList = [...对应action.js中所有的type]
        initState: 相关初始数据

  5 后续开发流程:
      routes配置新路由
      page新增文件夹XXX, 内建文件index.jsx(使用redux, 内容参考TestUseRedux/index.jsx; 不使用redux, 内容参考Test/index.jsx)
      service新增文件XXX.js(发送后台请求)
      redux配置(不用redux, 可以忽略)
        action新建文件XXX.index, 内容参考testUseRedux.js
        reducer新建文件夹XXX, 在其下新建文件index.js(内容参考TestUseRedux/index.js, 修改actionList和initState即可)


