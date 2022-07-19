<template><div><h2 id="vue3-ts-webpack5打包发布npm" tabindex="-1"><a class="header-anchor" href="#vue3-ts-webpack5打包发布npm" aria-hidden="true">#</a> vue3+ts+webpack5打包发布npm</h2>
<h3 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h3>
<p>在目标文件夹下运行cmd</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue create '你的项目名称'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着选择vue3脚手架，创建新项目完成</p>
<h3 id="安装webpack和webpack-cli" tabindex="-1"><a class="header-anchor" href="#安装webpack和webpack-cli" aria-hidden="true">#</a> 安装webpack和webpack-cli</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn add  webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="初始化设置" tabindex="-1"><a class="header-anchor" href="#初始化设置" aria-hidden="true">#</a> 初始化设置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn webpack-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="which-of-the-following-js-solutions-do-you-want-to-use-您希望使用以下哪种js解决方案" tabindex="-1"><a class="header-anchor" href="#which-of-the-following-js-solutions-do-you-want-to-use-您希望使用以下哪种js解决方案" aria-hidden="true">#</a> Which of the following JS solutions do you want to use?（您希望使用以下哪种JS解决方案？）</h5>
<p>选择Typescript</p>
<h5 id="do-you-want-to-use-webpack-dev-server-y-n-是否使用webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#do-you-want-to-use-webpack-dev-server-y-n-是否使用webpack-dev-server" aria-hidden="true">#</a> Do you want to use webpack-dev-server? (Y/n)（是否使用webpack-dev-server）</h5>
<p>webpack-dev-server主要用来写例子测试，可以watch，比较方便，建议使用</p>
<h5 id="do-you-want-to-simplify-the-creation-of-html-files-for-your-bundle-是否要简化捆绑包html文件的创建" tabindex="-1"><a class="header-anchor" href="#do-you-want-to-simplify-the-creation-of-html-files-for-your-bundle-是否要简化捆绑包html文件的创建" aria-hidden="true">#</a> Do you want to simplify the creation of HTML files for your bundle?（是否要简化捆绑包HTML文件的创建？）</h5>
<p>HtmlWebpackPlugin会把打包好的js文件，自动绑到html 文件，交给wepack 配置，建议使用</p>
<h5 id="do-you-want-to-add-pwa-support-是否要添加pwa支持" tabindex="-1"><a class="header-anchor" href="#do-you-want-to-add-pwa-support-是否要添加pwa支持" aria-hidden="true">#</a> Do you want to add PWA support?（是否要添加PWA支持？）</h5>
<p>这里是一个第三发库，不需要支持</p>
<h5 id="which-of-the-following-css-solutions-do-you-want-to-use-选择css解决方案" tabindex="-1"><a class="header-anchor" href="#which-of-the-following-css-solutions-do-you-want-to-use-选择css解决方案" aria-hidden="true">#</a> Which of the following CSS solutions do you want to use?（ 选择css解决方案）</h5>
<p>根据实际情况选择</p>
<h5 id="will-you-be-using-css-styles-along-with-less-in-your-project-你会在你的项目中使用css样式吗" tabindex="-1"><a class="header-anchor" href="#will-you-be-using-css-styles-along-with-less-in-your-project-你会在你的项目中使用css样式吗" aria-hidden="true">#</a> Will you be using CSS styles along with LESS in your project?（ 你会在你的项目中使用CSS样式吗？）</h5>
<p>建议会，这里会给你loader处理</p>
<h5 id="will-you-be-using-postcss-in-your-project-是否使用postcss" tabindex="-1"><a class="header-anchor" href="#will-you-be-using-postcss-in-your-project-是否使用postcss" aria-hidden="true">#</a> Will you be using PostCSS in your project?（ 是否使用PostCSS）</h5>
<p>postcss可以通过插件机制，预处理css，这里选择里使用。</p>
<h5 id="do-you-want-to-extract-css-for-every-file-是否要为每个文件提取css" tabindex="-1"><a class="header-anchor" href="#do-you-want-to-extract-css-for-every-file-是否要为每个文件提取css" aria-hidden="true">#</a> Do you want to extract CSS for every file?（ 是否要为每个文件提取CSS？）</h5>
<p>根据实际情况选择</p>
<h5 id="pick-a-package-manager-选择包管理器" tabindex="-1"><a class="header-anchor" href="#pick-a-package-manager-选择包管理器" aria-hidden="true">#</a> Pick a package manager（ 选择包管理器）</h5>
<p>推荐选择yarn，又好又快</p>
</div></template>
