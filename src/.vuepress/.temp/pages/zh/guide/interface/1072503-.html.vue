<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>
<p>Postman发送Get请求</p>
</li>
<li>
<p>Postman发送不同参数类型的Post请求</p>
</li>
<li>
<p>Postman测试集配置及运行</p>
</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>
<p>熟练使用Postman发送各种数据类型的请求</p>
</li>
<li>
<p>熟练使用Postman运行测试集</p>
</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>如何进行接口的测试？借助什么工具可以发送相关请求？<br>
Postman有哪些优势？Postman如何运行测试集？</p>
</div>
<h2 id="主要功能和特点" tabindex="-1"><a class="header-anchor" href="#主要功能和特点" aria-hidden="true">#</a> 主要功能和特点</h2>
<p>Postman 是一个广受欢迎的API（应用程序编程接口）开发工具，它允许开发人员轻松创建、测试、调试和共享 API。无论是构建Web应用程序、移动应用程序还是其他类型的软件，Postman都是一个非常有用的工具。</p>
<p>以下是 Postman 的一些主要功能和特点：</p>
<h3 id="支持各种平台" tabindex="-1"><a class="header-anchor" href="#支持各种平台" aria-hidden="true">#</a> 支持各种平台</h3>
<p>Postman 提供了桌面应用程序以及支持 Windows、macOS、Linux 平台，也有基于浏览器的 Web 版本。</p>
<h3 id="api-请求" tabindex="-1"><a class="header-anchor" href="#api-请求" aria-hidden="true">#</a> API 请求</h3>
<p>Postman 允许用户发送各种类型的HTTP请求（例如GET、POST、PUT、DELETE等），从而模拟与API进行交互。</p>
<h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h3>
<p>用户可以在请求中添加参数、标头、授权令牌、Cookie等。</p>
<h3 id="请求历史记录" tabindex="-1"><a class="header-anchor" href="#请求历史记录" aria-hidden="true">#</a> 请求历史记录</h3>
<p>Postman 保存之前发送的请求历史记录，方便用户快速访问和重复执行。</p>
<h3 id="自动化测试" tabindex="-1"><a class="header-anchor" href="#自动化测试" aria-hidden="true">#</a> 自动化测试</h3>
<p>用户可以创建和运行自动化测试集合，验证API的响应是否符合预期。</p>
<h3 id="环境和变量" tabindex="-1"><a class="header-anchor" href="#环境和变量" aria-hidden="true">#</a> 环境和变量</h3>
<p>Postman 允许用户创建不同的环境，以便在不同的开发、测试和生产环境之间切换。还可以使用变量来动态地设置请求参数。</p>
<h3 id="数据驱动测试" tabindex="-1"><a class="header-anchor" href="#数据驱动测试" aria-hidden="true">#</a> 数据驱动测试</h3>
<p>可以使用 Postman 的数据驱动功能来批量测试多个数据集。</p>
<h3 id="集成和共享" tabindex="-1"><a class="header-anchor" href="#集成和共享" aria-hidden="true">#</a> 集成和共享</h3>
<p>用户可以将API文档和测试用例共享给团队成员，方便协作和团队开发。</p>
<h3 id="mock-服务器" tabindex="-1"><a class="header-anchor" href="#mock-服务器" aria-hidden="true">#</a> Mock 服务器</h3>
<p>可以使用 Postman 的 Mock 服务器功能来模拟后端API的行为，从而使前端开发可以在后端实际实现之前进行工作。</p>
<h3 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h3>
<p>Postman 可以提供API的性能和监控指标，帮助用户了解API的健康状况。</p>
<p>总体而言，Postman 是一个功能强大、易于使用且广泛使用的工具，对于开发人员、测试人员和API提供者来说都是一种宝贵的资源。它可以大大简化API开发和测试过程，并提高API的可靠性和稳定性。</p>
<figure><img src="@source/zh/guide/interface/assets/20230725173235.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="界面介绍" tabindex="-1"><a class="header-anchor" href="#界面介绍" aria-hidden="true">#</a> 界面介绍</h2>
<figure><img src="@source/zh/guide/interface/assets/20230725180529.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p><em>创建测试集</em>。</p>
<figure><img src="@source/zh/guide/interface/assets/20230725180814.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/interface/assets/20230725180922.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p><em>创建请求界面</em>。</p>
<figure><img src="@source/zh/guide/interface/assets/20230725181318.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h2 id="get请求配置" tabindex="-1"><a class="header-anchor" href="#get请求配置" aria-hidden="true">#</a> GET请求配置</h2>
<div class="hint-container tip">
<p class="hint-container-title">GET请求不带参</p>
<p>访问百度首页、<a href="https://reqres.in/" target="_blank" rel="noopener noreferrer">reqres首页<ExternalLinkIcon/></a>，使用postman编写请求验证。</p>
</div>
<details class="hint-container details"><summary>百度首页</summary>
<p>访问百度首页，是一个GET请求，并且未携带任何参数。复制响应体数据到一个a.html文件中，使用浏览器打开，则显示的内容为百度首页。</p>
<figure><img src="@source/zh/guide/interface/assets/20230726103402.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<details class="hint-container details"><summary>reqres首页</summary>
<p>访问reqres首页，是一个GET请求，并且未携带任何参数。保存响应体数据到一个b.html文件中，使用浏览器打开，则显示的内容为reqres首页。</p>
<figure><img src="@source/zh/guide/interface/assets/20230726112220.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<div class="hint-container tip">
<p class="hint-container-title">GET请求带参数</p>
<ol>
<li>
<p>访问<a href="http://qxqk.nmc.cn/qx/ch/reader/view_abstract.aspx?file_no=20210701&amp;flag=1" target="_blank" rel="noopener noreferrer">中国气象具体页面<ExternalLinkIcon/></a>，使用postman编写请求验证。</p>
</li>
<li>
<p>访问<a href="https://reqres.in/api/users?page=2" target="_blank" rel="noopener noreferrer">reqres用户页面<ExternalLinkIcon/></a>，使用postman编写请求验证。</p>
</li>
<li>
<p>访问<a href="https://github.com/postmanlabs/httpbin" target="_blank" rel="noopener noreferrer">httpbin的get路径请求<ExternalLinkIcon/></a>，请求参数为key=value格式，使用postman编写请求验证。</p>
</li>
</ol>
</div>
<details class="hint-container details"><summary>中国气象具体页面</summary>
<p>访问中国气象具体页面，是一个带路径的GET请求，并且携带参数。复制响应体数据到一个b.html文件中，使用浏览器打开，则显示的内容为中国气象具体页面。</p>
<figure><img src="@source/zh/guide/interface/assets/20230726104827.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/interface/assets/20230726113039.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<details class="hint-container details"><summary>reqres用户页面</summary>
<figure><img src="@source/zh/guide/interface/assets/20230726112759.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<details class="hint-container details"><summary>httpbin-get</summary>
<figure><img src="@source/zh/guide/interface/assets/20230726115404.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<h2 id="post-请求配置" tabindex="-1"><a class="header-anchor" href="#post-请求配置" aria-hidden="true">#</a> POST 请求配置</h2>
<p>常见的 POST请求携带参数类型有三种：FORM 格式</p>
<h3 id="json-格式参数" tabindex="-1"><a class="header-anchor" href="#json-格式参数" aria-hidden="true">#</a> JSON 格式参数</h3>
<p>在JSON格式中，参数以JSON对象的形式进行编码。</p>
<p>这种格式适用于传递复杂的结构化数据，如<strong>对象</strong>、<strong>数组</strong>等。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">Content-Type: application/json</span>

<span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"John Doe"</span><span class="token punctuation">,</span>
  <span class="token string">"age"</span><span class="token punctuation">:</span> 30<span class="token punctuation">,</span>
  <span class="token string">"email"</span><span class="token punctuation">:</span> <span class="token string">"johndoe@example.com"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Postman中参数body体选择：Body --&gt; raw --&gt; JSON</p>
<figure><img src="@source/zh/guide/interface/assets/20230726120340.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">POST请求带JSON参数</p>
<ol>
<li>访问<a href="https://github.com/postmanlabs/httpbin" target="_blank" rel="noopener noreferrer">httpbin的post路径请求<ExternalLinkIcon/></a>，使用postman编写请求验证。<br>
请求body体：</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"uname"</span><span class="token operator">:</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span>
    <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"BeiJing"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>访问<a href="https://reqres.in/api/users" target="_blank" rel="noopener noreferrer">reqres添加用户<ExternalLinkIcon/></a>，使用postman编写请求验证。</li>
</ol>
<p>请求body体：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Gene"</span><span class="token punctuation">,</span>
    <span class="token property">"job"</span><span class="token operator">:</span> <span class="token string">"teacher"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<details class="hint-container details"><summary>httpbin的post</summary>
<figure><img src="@source/zh/guide/interface/assets/20230726122534.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<details class="hint-container details"><summary>reqres添加用户</summary>
<figure><img src="@source/zh/guide/interface/assets/20230726122713.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<h3 id="form-格式参数" tabindex="-1"><a class="header-anchor" href="#form-格式参数" aria-hidden="true">#</a> FORM 格式参数</h3>
<p>在FORM格式中，参数以键值对的形式进行编码，类似于HTML的表单提交。</p>
<p>这种格式适用于发送简单的表单数据，例如<strong>登录信息</strong>、<strong>用户注册</strong>等。</p>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token property">Content-Type</span><span class="token punctuation">:</span> application<span class="token operator">/</span>x<span class="token operator">-</span>www<span class="token operator">-</span>form<span class="token operator">-</span>urlencoded

username=johndoe&amp;password=secretpassword&amp;email=johndoe<span class="token variable">@example</span>.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Postman中参数body体选择：Body --&gt; form-data。</p>
<figure><img src="@source/zh/guide/interface/assets/20230726120106.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">POST请求带JSON参数</p>
<ol>
<li>访问<a href="https://github.com/postmanlabs/httpbin" target="_blank" rel="noopener noreferrer">httpbin的post路径请求<ExternalLinkIcon/></a>，使用postman编写请求验证。<br>
请求body体：</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>username=johndoe&amp;password=secretpassword&amp;email=johndoe@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<details class="hint-container details"><summary>httpbin的post</summary>
<figure><img src="@source/zh/guide/interface/assets/20230726123042.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/interface/assets/20230726135618.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<h3 id="文件格式参数" tabindex="-1"><a class="header-anchor" href="#文件格式参数" aria-hidden="true">#</a> 文件格式参数</h3>
<p>在某些情况下，POST请求需要上传文件，这时候参数会以多部分表单数据的形式进行编码。</p>
<p>通常，这种格式适用于<strong>文件上传</strong>和<strong>表单提交</strong>的混合场景。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token string">"Content-Type"</span><span class="token punctuation">:</span> <span class="token string">"multipart/form-data; boundary=--------------------------202580735451033578270446"</span><span class="token punctuation">,</span>

<span class="token property">Content-Disposition</span><span class="token punctuation">:</span> form-data<span class="token punctuation">;</span> name=<span class="token string">"profile_picture"</span><span class="token punctuation">;</span> filename=<span class="token string">"example.jpg"</span>
<span class="token property">Content-Type</span><span class="token punctuation">:</span> image/jpeg

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Postman中参数body体选择：Body --&gt; form-data --&gt; File</p>
<figure><img src="@source/zh/guide/interface/assets/20230726120735.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">POST请求带JSON参数</p>
<ol>
<li>访问<a href="https://github.com/postmanlabs/httpbin" target="_blank" rel="noopener noreferrer">httpbin的post路径请求<ExternalLinkIcon/></a>，使用postman编写请求验证。<br>
请求body体：</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>example.jpg

a.text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<details class="hint-container details"><summary>httpbin的post</summary>
<figure><img src="@source/zh/guide/interface/assets/20230726123429.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/interface/assets/20230726135802.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>单个请求运行， 选择文件路径可以是电脑的任意路径。<br>
如果运行测试用例集，则选择文件路径，需要为postman默认路径下的文件。默认路径查看：</p>
<figure><img src="@source/zh/guide/interface/assets/20230726120925.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>解决步骤：</p>
<ol>
<li>
<p>文件放入postman默认路径下。</p>
</li>
<li>
<p>postman重新选择文件，去默认路径下选择。</p>
</li>
<li>
<p>测试用例集重新运行。</p>
</li>
</ol>
</div>
<p>根据具体的需求和后端接口的要求，选择合适的参数类型是很重要的。POST请求的参数类型决定了如何将数据传递给服务器，并影响了服务器端的处理方式。在使用POST请求时，需要确保请求头中的Content-Type字段正确设置，以便服务器能够正确解析请求中携带的参数数据。</p>
<h2 id="请求头配置" tabindex="-1"><a class="header-anchor" href="#请求头配置" aria-hidden="true">#</a> 请求头配置</h2>
<div class="hint-container tip">
<p class="hint-container-title">自定义请求头</p>
<ol>
<li>访问<a href="https://github.com/postmanlabs/httpbin" target="_blank" rel="noopener noreferrer">httpbin的post路径请求<ExternalLinkIcon/></a>，使用postman编写请求验证。<br>
请求头：</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>a<span class="token operator">:</span> newHeader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<details class="hint-container details"><summary>httpbin的请求头</summary>
<figure><img src="@source/zh/guide/interface/assets/20230726140206.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/interface/assets/20230726140335.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<h2 id="测试集" tabindex="-1"><a class="header-anchor" href="#测试集" aria-hidden="true">#</a> 测试集</h2>
<figure><img src="@source/zh/guide/interface/assets/20230726140752.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="收藏" tabindex="-1"><a class="header-anchor" href="#收藏" aria-hidden="true">#</a> 收藏</h3>
<figure><img src="@source/zh/guide/interface/assets/20230726141727.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="查看测试集内所有请求" tabindex="-1"><a class="header-anchor" href="#查看测试集内所有请求" aria-hidden="true">#</a> 查看测试集内所有请求</h3>
<figure><img src="@source/zh/guide/interface/assets/20230726140649.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="测试集前置操作" tabindex="-1"><a class="header-anchor" href="#测试集前置操作" aria-hidden="true">#</a> 测试集前置操作</h3>
<figure><img src="@source/zh/guide/interface/assets/20230726141454.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="测试集后置操作" tabindex="-1"><a class="header-anchor" href="#测试集后置操作" aria-hidden="true">#</a> 测试集后置操作</h3>
<p>在每一个请求之后，断言HTTP状态码是否为200。</p>
<figure><img src="@source/zh/guide/interface/assets/20230726141511.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3>
<figure><img src="@source/zh/guide/interface/assets/20230726142652.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="运行结果查看" tabindex="-1"><a class="header-anchor" href="#运行结果查看" aria-hidden="true">#</a> 运行结果查看</h3>
<figure><img src="@source/zh/guide/interface/assets/20230726141629.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/interface/assets/20230726141955.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="断言结果查看" tabindex="-1"><a class="header-anchor" href="#断言结果查看" aria-hidden="true">#</a> 断言结果查看</h3>
<figure><img src="@source/zh/guide/interface/assets/20230726143027.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>Postman使用测试集进行数据驱动测试</p>
</li>
<li>
<p>Postman发送单个请求，不同的请求参数使用不同格式</p>
</li>
<li>
<p>Postman可以把测试集下所有的前置操作和后置操作提取出来</p>
</li>
</ul>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>Postman 中发送body体为 json 格式请求参数，应该通过哪里传入？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. Params</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B. Body --&gt; form data</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. Body --&gt; raw</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. Tests</label></li>
</ul>
<blockquote>
<p>答案：C</p>
</blockquote>
</li>
<li>
<p>在Postman测试集中，可以通过哪个功能发送单个请求并查看其响应？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> A. Collection Runner</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> B. Postman Console</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> C. Request History</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> D. Send Request</label></li>
</ul>
<blockquote>
<p>答案：D</p>
</blockquote>
</li>
<li>
<p>在Postman中，测试集是用来做什么的？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> A. 创建和管理环境变量</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> B. 运行多个请求</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> C. 设置全局变量</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> D. 运行单个请求</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
<li>
<p>当使用Collection Runner运行测试集时，哪些数据来源可以用于数据驱动测试？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> A. CSV文件</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> B. JSON文件</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> C. Excel文件</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> D. 所有以上</label></li>
</ul>
<blockquote>
<p>答案：D</p>
</blockquote>
</li>
<li>
<p>如果在请求中使用环境变量而未设置默认值，当环境变量不存在时，请求将会：</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> A. 继续发送，但不会使用环境变量的值</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> B. 继续发送，但会使用空值代替环境变量的值</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> C. 停止发送，出现错误提示</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> D. 停止发送，但会使用默认值代替环境变量的值</label></li>
</ul>
<blockquote>
<p>答案：A</p>
</blockquote>
</li>
<li>
<p>在Postman中，要发送具有多个不同数据集的请求，您应该如何做？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> A. 分别创建多个请求并手动更改数据</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" disabled="disabled"><label class="task-list-item-label" for="task-item-21"> B. 使用数据文件和Collection Runner进行数据驱动测试</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" disabled="disabled"><label class="task-list-item-label" for="task-item-22"> C. 在每次发送请求前修改请求参数</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" disabled="disabled"><label class="task-list-item-label" for="task-item-23"> D. 使用环境变量保存不同数据集，并在请求中引用</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
</ol>
</div></template>


