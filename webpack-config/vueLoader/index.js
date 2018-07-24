module.exports = (isDev) => {
  return {
    //清楚单文件组件模板中的空格
    preserveWhiteSpace: true

    //将所有单文件组件的css打包到抽离出的那个单独的css文件中
    //默认是和组件绑定的，这是为了让异步加加载更完美(类似于styled-components)
    , extractCSS: !isDev

    //Vue的单文件组件的css默认并不支持热更新
    //需要->vue-style-loader(-D)替代style-loader

    //css模块化
    , cssModules: {
      // localIndentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]'
      //默认为串烧，这里改成小驼峰命名，便于js操作
      // , camelCase: true
    }

    //一般不用 因为一般会用postcss.config.js单独配置
    // ,postcss

    //热加载
    //但无法限制单文件组件的css的热加载
    , hotReload: isDev

    //Vue单文件组件内一般有3个模块，template、script、style
    //，想要解析他们，都可以设置对应的loader
    //，除此之外也可以自定义模块
    //，这时候想要解析也需要对应的loader
    , loaders: {
      // js
      // ,html
      // ,style
      // ,'docs':docsLoader
    }

    //vue调用babel-loader之前
    //比如Type-script
    , preLoader: {}
    //Vue指定loader解析完之后
    , postLoader: {}
  };
};
