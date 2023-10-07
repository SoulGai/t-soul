<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>运行模块介绍</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li></li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JMeter中如何模拟用户发送请求？<br>
JMeter中如何向数据库发送sql语句进行压测？</p>
</div>
<h2 id="取样器-采样器" tabindex="-1"><a class="header-anchor" href="#取样器-采样器" aria-hidden="true">#</a> 取样器/采样器</h2>
<p><strong>取样器/采样器</strong>：创建和配置用于执行特定操作的元素。例如：发送HTTP请求、访问数据库等。</p>
<p>这些取样器将在测试场景中使用，生成各种类型负载请求的组件来<strong>模拟用户在实际情况下执行的各种操作</strong>。</p>
<p>取样器的结果可以通过监听器（Listener）分析和可视化，以便找出性能瓶颈并绘制出应用程序的响应时间图。</p>
<h3 id="添加方式" tabindex="-1"><a class="header-anchor" href="#添加方式" aria-hidden="true">#</a> 添加方式</h3>
<p>在JMeter中，在线程组（<code v-pre>Thread Group</code>）下添加取样器（<code v-pre>Sampler</code>）。</p>
<figure><img src="@source/zh/guide/performance/assets/20230609113741.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="常用取样器" tabindex="-1"><a class="header-anchor" href="#常用取样器" aria-hidden="true">#</a> 常用取样器</h2>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuYfCJSr8L30suIZ9BW8od_TEUBTZ-TEOA_PVjxH0MbnP2b4jBI-7vbFdFEYOydT3oV7dlyusxdyxhVh5b_ekzUr-it_viOzFpMItFTxSysRqDfFJfZXtFfwn0rgsbu14I4g0Gb5fOcbfS0XPmIKqgJLT0LUIKcfWNd96QauCcxkNYv8oYESGvG24uCRSW9xK8eY2nB17Y42w7LA0FeRu4iO5-1m00" alt="uml diagram" loading="lazy">
<p>在JMeter中有许多取样器类型，它们覆盖了各种网络协议和访问类型。以下是一些常用的取样器类型及其作用：</p>
<h3 id="http-request" tabindex="-1"><a class="header-anchor" href="#http-request" aria-hidden="true">#</a> HTTP Request</h3>
<p>模拟HTTP/HTTPS请求，广泛应用于Web应用程序和API接口测试中。</p>
<h3 id="debug-取样器" tabindex="-1"><a class="header-anchor" href="#debug-取样器" aria-hidden="true">#</a> Debug 取样器</h3>
<h3 id="beanshell-取样器" tabindex="-1"><a class="header-anchor" href="#beanshell-取样器" aria-hidden="true">#</a> BeanShell 取样器</h3>
<h3 id="jdbc-request" tabindex="-1"><a class="header-anchor" href="#jdbc-request" aria-hidden="true">#</a> JDBC Request</h3>
<p>测试数据库性能，向目标数据库发送SQL查询请求并评估响应时间。</p>
<h3 id="ftp-request" tabindex="-1"><a class="header-anchor" href="#ftp-request" aria-hidden="true">#</a> FTP Request</h3>
<p>检测FTP服务器性能，通过模拟文件上传和下载。</p>
<h3 id="smtp-sampler" tabindex="-1"><a class="header-anchor" href="#smtp-sampler" aria-hidden="true">#</a> SMTP Sampler</h3>
<p>测试邮件服务器性能，通过模拟发送电子邮件的过程。</p>
<h3 id="jms-sampler" tabindex="-1"><a class="header-anchor" href="#jms-sampler" aria-hidden="true">#</a> JMS Sampler</h3>
<p>评估Java消息服务（Java Message Service）性能，模拟JMS发布者和消费者请求。</p>
<h3 id="tcp-sampler" tabindex="-1"><a class="header-anchor" href="#tcp-sampler" aria-hidden="true">#</a> TCP Sampler</h3>
<p>验证TCP协议的性，通过模拟TCP请求和响应。</p>
<h3 id="java请求" tabindex="-1"><a class="header-anchor" href="#java请求" aria-hidden="true">#</a> Java请求</h3>
<p>通过运行自定义Java类来测试应用程序的性能。</p>
<h3 id="bsf-sampler和jsr223-sampler" tabindex="-1"><a class="header-anchor" href="#bsf-sampler和jsr223-sampler" aria-hidden="true">#</a> BSF Sampler和JSR223 Sampler</h3>
<p>使用各种脚本编程语言（如Groovy、Python、Beanshell等）执行自定义脚本，实现非常灵活的测试场景。</p>
<p>这些取样器可以根据实际的测试需求组合使用。</p>
<p>通过为不同的取样器分不同的线程数、持续时间和循环次数，可以模拟各种真实场景的负载情况。与定时器、断言和监听器配合使用，您可以创建强大的性能测试套件。</p>
<p>在整个测试周期中，取样器不仅可以识别性能瓶颈，还可以优化您的应用程序来改善用户体验。</p>
<p>下面先介绍常用的三个：<strong>HTTP请求的取样器</strong>、<strong>Debug 取样器</strong>、<strong>BeanShell 取样器</strong>。</p>
<h2 id="http取样器" tabindex="-1"><a class="header-anchor" href="#http取样器" aria-hidden="true">#</a> HTTP取样器</h2>
<p>JMeter中的HTTP取样器(<code v-pre>Http Request</code>)允许用户在性能测试中模拟<code v-pre>HTTP/HTTPS</code>请求。</p>
<p>它是JMeter中最常用的取样器之一，因为在现代网络应用中，<code v-pre>HTTP/HTTPS</code>通信非常普遍。例如：前后端联调使用的接口就是HTTP协议的接口。</p>
<h3 id="添加" tabindex="-1"><a class="header-anchor" href="#添加" aria-hidden="true">#</a> 添加</h3>
<p>导航到 <strong>线程组</strong>(<code v-pre>Thread Group</code>) -&gt; <strong>添加</strong>(<code v-pre>Add</code>) -&gt; <strong>采样器</strong>(<code v-pre>Sampler</code>) -&gt; <strong>HTTP 请求</strong>(<code v-pre>HTTP Request</code>)。</p>
<figure><img src="@source/zh/guide/performance/assets/20230107094231.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="界面" tabindex="-1"><a class="header-anchor" href="#界面" aria-hidden="true">#</a> 界面</h3>
<figure><img src="@source/zh/guide/performance/assets/20230609173238.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h3>
<p>在“<strong>基本</strong>”选项卡下，可以配置HTTP请求的内容。</p>
<blockquote>
<p>接口信息获取途径：研发提供、抓包、swagger-API。</p>
</blockquote>
<div class="hint-container info">
<p class="hint-container-title">Web服务器</p>
<ol>
<li>
<p>协议：指定 <strong>HTTP</strong> 或 <strong>HTTPS</strong> 。</p>
</li>
<li>
<p>服务器名称或IP：配置测试目标的<strong>IP地址</strong>或<strong>域名</strong>。</p>
<blockquote>
<p>域名：<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">www.baidu.com<ExternalLinkIcon/></a>；IP地址：10.15.14.55。</p>
</blockquote>
</li>
<li>
<p>端口号：配置目标服务器上的端口号，业务自定义指定的端口。</p>
<blockquote>
<p>一般情况下，HTTP为 80，HTTPS为 443。</p>
</blockquote>
</li>
</ol>
</div>
<div class="hint-container info">
<p class="hint-container-title">HTTP请求</p>
<ol>
<li>
<p>请求方法： <strong>GET</strong>，<strong>POST</strong>，PUT，DELETE。</p>
</li>
<li>
<p>路径：目标服务器上的API路径。域名/端口后的路径，以 <code v-pre>/</code> 开头。</p>
</li>
<li>
<p>内容编码：字符集，默认使用UTF-8。</p>
</li>
</ol>
</div>
<div class="hint-container info">
<p class="hint-container-title">参数</p>
<ol>
<li>
<p>请求参数：?拼接的参数key1=value1&amp;key2=value2。</p>
</li>
<li>
<p>消息体数据：body体数据，HTTP POST 请求体Json数据等。</p>
</li>
<li>
<p>文件上传：上传文件，直接填写文件路径。</p>
</li>
</ol>
</div>
<img src="https://www.plantuml.com/plantuml/svg/NL9TIm9157tVNx7iGmzBRgufH93va7r0aU3s0pPTIDAAN9E8GCCoBDkWaX8Z8oEXM0t2BNUj7zFEh3tr5vhPsmVqClUSUy-vSsUueRGghwkPL989kIYLM8cdv3Kc7PEJ2Yjw6JMX4Z0jIH6aLN3TG1TDXl_FUHOR9YhL2U9Pf_lcD0ySi-09VXIB8F44gQFVCl3Z3fMZgowkFRXoLDRwklvfLQdYFPUd8UfMSAsCIjV4ZOxBpbqRxrTc8hJ0izbiLbYK4_6C45jDGKhq2c904Fr2801JtBUGTeCq0ygqAxbZnFj7euJx_SFCD_qTZcVd57LfDGxAgR3qQHr6vgDkMA3dH7WsB8LTPTzeeTS2A6tpTWXPETHuWdVjxIBznR4gJZqFWW_plAytxDwRSzfSa2Oz8-vFQ3luh0tDt0d-4ZmxZWyiV7JhL0kGNLOsnR4DEPbHn062VO1zy5kTVPnlsRqJeiDb7HfiSTJ2ZN9WuWOfz_rm7xSDrahHDZlsSycswk233BmErTheCiU45B8Ptzj1CTcPBm00" alt="uml diagram" loading="lazy">
<h3 id="需求1-get请求不带参数接口" tabindex="-1"><a class="header-anchor" href="#需求1-get请求不带参数接口" aria-hidden="true">#</a> 需求1：GET请求不带参数接口</h3>
<p><a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer">百度首页<ExternalLinkIcon/></a>请求接口的编写。</p>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>请求通过，查看响应数据，为什么响应结果有乱码？</p>
<figure><img src="@source/zh/guide/performance/assets/20230616103601.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p>JMeter本身的编码格式导致，JMeter产品默认的编码格式为ISO-8859-1，但是返回结果的数据默认编码格式为UTF-8。</p>
<p>解决方案：修改<code v-pre>{jmeter_path}/bin/jmeter.properties</code>里面默认的编码格式。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># The encoding to be used if none is provided (default ISO-8859-1)</span>
<span class="token comment">#sampleresult.default.encoding=ISO-8859-1</span>
<span class="token assign-left variable">sampleresult.default.encoding</span><span class="token operator">=</span>UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230616103417.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<h4 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h4>
<figure><img src="@source/zh/guide/performance/assets/20230719201430.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><a href="https://github.com/Nikita-GDev/my-docs/blob/master/src/zh/guide/performance/material/01baidu.jmx" target="_blank" rel="noopener noreferrer">示例脚本<ExternalLinkIcon/></a></p>
<h3 id="需求2-get请求带参数接口" tabindex="-1"><a class="header-anchor" href="#需求2-get请求带参数接口" aria-hidden="true">#</a> 需求2：GET请求带参数接口</h3>
<p><a href="https://reqres.in/" target="_blank" rel="noopener noreferrer">Reqres API<ExternalLinkIcon/></a>请求中 <code v-pre>/users?page=2</code> 接口的编写。</p>
<figure><img src="@source/zh/guide/performance/assets/20230107100649.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>现在有了API，从链接中找出<strong>服务器名称</strong>、<strong>路径</strong>和<strong>参数</strong>。在JMeter 测试计划的 HTTP 请求中复制这些值。</p>
<h4 id="脚本-1" tabindex="-1"><a class="header-anchor" href="#脚本-1" aria-hidden="true">#</a> 脚本</h4>
<p>方式一：</p>
<figure><img src="@source/zh/guide/performance/assets/20230107100941.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>方式二：</p>
<figure><img src="@source/zh/guide/performance/assets/20230719203803.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><a href="https://github.com/Nikita-GDev/my-docs/blob/master/src/zh/guide/performance/material/02reqres_in.jmx" target="_blank" rel="noopener noreferrer">示例脚本<ExternalLinkIcon/></a></p>
<h3 id="实战-商城" tabindex="-1"><a class="header-anchor" href="#实战-商城" aria-hidden="true">#</a> 实战：商城</h3>
<p><RouterLink to="/zh/guide/performance/1071820.html">接口文档</RouterLink></p>
<h4 id="脚本-2" tabindex="-1"><a class="header-anchor" href="#脚本-2" aria-hidden="true">#</a> 脚本</h4>
<figure><img src="@source/zh/guide/performance/assets/20230616104002.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><RouterLink to="/zh/guide/performance/.html">Json提取器</RouterLink></p>
<p><a href="https://github.com/Nikita-GDev/my-docs/blob/master/src/zh/guide/performance/material/03http.jmx" target="_blank" rel="noopener noreferrer">示例脚本<ExternalLinkIcon/></a></p>
<h2 id="debug-取样器-1" tabindex="-1"><a class="header-anchor" href="#debug-取样器-1" aria-hidden="true">#</a> Debug 取样器</h2>
<p>Debug取样器(Debug Sampler)是一种用于在测试计划中插入调试信息的特殊取样器。它不会发送实际的请求给目标服务器，也不会模拟用户行为。相反，它允许您在测试执行期间向结果树(Result Tree)中添加自定义的调试信息，以便进行测试和脚本的调试。</p>
<p>Debug取样器在测试计划中的作用类似于注释，它是一个不执行任何实际操作的占位符，只是为了帮助您在结果树中添加自定义消息或变量的值。这些消息可以用于识别测试计划中的不同阶段，跟踪脚本执行进度，或输出特定变量的值，以确保脚本的正确性和调试过程的便捷性。</p>
<p>要使用Debug取样器，请按照以下步骤操作：</p>
<p>在JMeter的测试计划中，右键单击想要添加Debug取样器的线程组或Sampler，然后选择&quot;Add&quot; &gt; &quot;Sampler&quot; &gt; &quot;Debug Sampler&quot;。</p>
<p>在Debug取样器的属性面板中，可以输入您希望添加到结果树的调试信息。您可以在文本框中添加任何自定义的消息或变量值。</p>
<p>运行测试计划时，Debug取样器将在结果树中显示您添加的调试信息。</p>
<p>Debug取样器对于调试测试脚本非常有用，特别是当您需要跟踪脚本执行过程中的特定信息或变量值时。它可以帮助您快速定位问题，并更有效地调试和优化您的JMeter测试。但请注意，调试完成后，应该删除或禁用Debug取样器，以避免在生产环境中产生不必要的额外开销。</p>
<h2 id="beanshell-取样器-1" tabindex="-1"><a class="header-anchor" href="#beanshell-取样器-1" aria-hidden="true">#</a> BeanShell 取样器</h2>
</div></template>


