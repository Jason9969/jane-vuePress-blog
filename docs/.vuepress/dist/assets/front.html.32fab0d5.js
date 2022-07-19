import{_ as e,o as a,c as s,b as o}from"./app.4fbbc727.js";const n={},i=o(`<h2 id="vue3-ts-webpack5\u6253\u5305\u53D1\u5E03npm" tabindex="-1"><a class="header-anchor" href="#vue3-ts-webpack5\u6253\u5305\u53D1\u5E03npm" aria-hidden="true">#</a> vue3+ts+webpack5\u6253\u5305\u53D1\u5E03npm</h2><h3 id="\u65B0\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u65B0\u5EFA\u9879\u76EE</h3><p>\u5728\u76EE\u6807\u6587\u4EF6\u5939\u4E0B\u8FD0\u884Ccmd</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue create <span class="token string">&#39;\u4F60\u7684\u9879\u76EE\u540D\u79F0&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63A5\u7740\u9009\u62E9vue3\u811A\u624B\u67B6\uFF0C\u521B\u5EFA\u65B0\u9879\u76EE\u5B8C\u6210</p><h3 id="\u5B89\u88C5webpack\u548Cwebpack-cli" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5webpack\u548Cwebpack-cli" aria-hidden="true">#</a> \u5B89\u88C5webpack\u548Cwebpack-cli</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span>  webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u521D\u59CB\u5316\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u8BBE\u7F6E" aria-hidden="true">#</a> \u521D\u59CB\u5316\u8BBE\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> webpack-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="which-of-the-following-js-solutions-do-you-want-to-use-\u60A8\u5E0C\u671B\u4F7F\u7528\u4EE5\u4E0B\u54EA\u79CDjs\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#which-of-the-following-js-solutions-do-you-want-to-use-\u60A8\u5E0C\u671B\u4F7F\u7528\u4EE5\u4E0B\u54EA\u79CDjs\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> Which of the following JS solutions do you want to use?\uFF08\u60A8\u5E0C\u671B\u4F7F\u7528\u4EE5\u4E0B\u54EA\u79CDJS\u89E3\u51B3\u65B9\u6848\uFF1F\uFF09</h5><p>\u9009\u62E9Typescript</p><h5 id="do-you-want-to-use-webpack-dev-server-y-n-\u662F\u5426\u4F7F\u7528webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#do-you-want-to-use-webpack-dev-server-y-n-\u662F\u5426\u4F7F\u7528webpack-dev-server" aria-hidden="true">#</a> Do you want to use webpack-dev-server? (Y/n)\uFF08\u662F\u5426\u4F7F\u7528webpack-dev-server\uFF09</h5><p>webpack-dev-server\u4E3B\u8981\u7528\u6765\u5199\u4F8B\u5B50\u6D4B\u8BD5\uFF0C\u53EF\u4EE5watch\uFF0C\u6BD4\u8F83\u65B9\u4FBF\uFF0C\u5EFA\u8BAE\u4F7F\u7528</p><h5 id="do-you-want-to-simplify-the-creation-of-html-files-for-your-bundle-\u662F\u5426\u8981\u7B80\u5316\u6346\u7ED1\u5305html\u6587\u4EF6\u7684\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#do-you-want-to-simplify-the-creation-of-html-files-for-your-bundle-\u662F\u5426\u8981\u7B80\u5316\u6346\u7ED1\u5305html\u6587\u4EF6\u7684\u521B\u5EFA" aria-hidden="true">#</a> Do you want to simplify the creation of HTML files for your bundle?\uFF08\u662F\u5426\u8981\u7B80\u5316\u6346\u7ED1\u5305HTML\u6587\u4EF6\u7684\u521B\u5EFA\uFF1F\uFF09</h5><p>HtmlWebpackPlugin\u4F1A\u628A\u6253\u5305\u597D\u7684js\u6587\u4EF6\uFF0C\u81EA\u52A8\u7ED1\u5230html \u6587\u4EF6\uFF0C\u4EA4\u7ED9wepack \u914D\u7F6E\uFF0C\u5EFA\u8BAE\u4F7F\u7528</p><h5 id="do-you-want-to-add-pwa-support-\u662F\u5426\u8981\u6DFB\u52A0pwa\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#do-you-want-to-add-pwa-support-\u662F\u5426\u8981\u6DFB\u52A0pwa\u652F\u6301" aria-hidden="true">#</a> Do you want to add PWA support?\uFF08\u662F\u5426\u8981\u6DFB\u52A0PWA\u652F\u6301\uFF1F\uFF09</h5><p>\u8FD9\u91CC\u662F\u4E00\u4E2A\u7B2C\u4E09\u53D1\u5E93\uFF0C\u4E0D\u9700\u8981\u652F\u6301</p><h5 id="which-of-the-following-css-solutions-do-you-want-to-use-\u9009\u62E9css\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#which-of-the-following-css-solutions-do-you-want-to-use-\u9009\u62E9css\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> Which of the following CSS solutions do you want to use?\uFF08 \u9009\u62E9css\u89E3\u51B3\u65B9\u6848\uFF09</h5><p>\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9</p><h5 id="will-you-be-using-css-styles-along-with-less-in-your-project-\u4F60\u4F1A\u5728\u4F60\u7684\u9879\u76EE\u4E2D\u4F7F\u7528css\u6837\u5F0F\u5417" tabindex="-1"><a class="header-anchor" href="#will-you-be-using-css-styles-along-with-less-in-your-project-\u4F60\u4F1A\u5728\u4F60\u7684\u9879\u76EE\u4E2D\u4F7F\u7528css\u6837\u5F0F\u5417" aria-hidden="true">#</a> Will you be using CSS styles along with LESS in your project?\uFF08 \u4F60\u4F1A\u5728\u4F60\u7684\u9879\u76EE\u4E2D\u4F7F\u7528CSS\u6837\u5F0F\u5417\uFF1F\uFF09</h5><p>\u5EFA\u8BAE\u4F1A\uFF0C\u8FD9\u91CC\u4F1A\u7ED9\u4F60loader\u5904\u7406</p><h5 id="will-you-be-using-postcss-in-your-project-\u662F\u5426\u4F7F\u7528postcss" tabindex="-1"><a class="header-anchor" href="#will-you-be-using-postcss-in-your-project-\u662F\u5426\u4F7F\u7528postcss" aria-hidden="true">#</a> Will you be using PostCSS in your project?\uFF08 \u662F\u5426\u4F7F\u7528PostCSS\uFF09</h5><p>postcss\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u673A\u5236\uFF0C\u9884\u5904\u7406css\uFF0C\u8FD9\u91CC\u9009\u62E9\u91CC\u4F7F\u7528\u3002</p><h5 id="do-you-want-to-extract-css-for-every-file-\u662F\u5426\u8981\u4E3A\u6BCF\u4E2A\u6587\u4EF6\u63D0\u53D6css" tabindex="-1"><a class="header-anchor" href="#do-you-want-to-extract-css-for-every-file-\u662F\u5426\u8981\u4E3A\u6BCF\u4E2A\u6587\u4EF6\u63D0\u53D6css" aria-hidden="true">#</a> Do you want to extract CSS for every file?\uFF08 \u662F\u5426\u8981\u4E3A\u6BCF\u4E2A\u6587\u4EF6\u63D0\u53D6CSS\uFF1F\uFF09</h5><p>\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9</p><h5 id="pick-a-package-manager-\u9009\u62E9\u5305\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#pick-a-package-manager-\u9009\u62E9\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a> Pick a package manager\uFF08 \u9009\u62E9\u5305\u7BA1\u7406\u5668\uFF09</h5><p>\u63A8\u8350\u9009\u62E9yarn\uFF0C\u53C8\u597D\u53C8\u5FEB</p>`,27),r=[i];function t(c,d){return a(),s("div",null,r)}var l=e(n,[["render",t],["__file","front.html.vue"]]);export{l as default};
