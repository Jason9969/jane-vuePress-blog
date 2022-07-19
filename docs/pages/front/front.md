## vue3+ts+webpack5打包发布npm

### 新建项目

在目标文件夹下运行cmd

```sh
vue create '你的项目名称'
```

接着选择vue3脚手架，创建新项目完成

### 安装webpack和webpack-cli

```sh
yarn add  webpack webpack-cli -D
```

### 初始化设置

```sh
yarn webpack-cli init
```

##### Which of the following JS solutions do you want to use?（您希望使用以下哪种JS解决方案？）

选择Typescript

##### Do you want to use webpack-dev-server? (Y/n)（是否使用webpack-dev-server）

webpack-dev-server主要用来写例子测试，可以watch，比较方便，建议使用

##### Do you want to simplify the creation of HTML files for your bundle?（是否要简化捆绑包HTML文件的创建？）

HtmlWebpackPlugin会把打包好的js文件，自动绑到html 文件，交给wepack 配置，建议使用

##### Do you want to add PWA support?（是否要添加PWA支持？）

这里是一个第三发库，不需要支持

##### Which of the following CSS solutions do you want to use?（ 选择css解决方案）

根据实际情况选择

##### Will you be using CSS styles along with LESS in your project?（ 你会在你的项目中使用CSS样式吗？）

建议会，这里会给你loader处理

##### Will you be using PostCSS in your project?（ 是否使用PostCSS）

postcss可以通过插件机制，预处理css，这里选择里使用。

##### Do you want to extract CSS for every file?（ 是否要为每个文件提取CSS？）

根据实际情况选择

##### Pick a package manager（ 选择包管理器）

推荐选择yarn，又好又快