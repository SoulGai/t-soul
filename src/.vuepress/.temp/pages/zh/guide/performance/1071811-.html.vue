<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>第三方工具BlazeMeter介绍</li>
<li>录制的流程</li>
<li>BlazeMeter录制优点</li>
</ol>
<h2 id="为什么要录制脚本" tabindex="-1"><a class="header-anchor" href="#为什么要录制脚本" aria-hidden="true">#</a> 为什么要录制脚本</h2>
<p>录制脚本的主要<strong>目的</strong>是<strong>捕获实际用户与目标应用程序之间的交互，并将其转换为可在JMeter中执行的测试脚本</strong>。录制脚本的过程是通过将JMeter代理设置为浏览器的代理，捕获浏览器与服务器之间的HTTP或HTTPS请求和响应。</p>
<p>以下是为什么要录制脚本的几个原因：</p>
<p>方便：录制脚本提供了一种快速创建测试脚本的方式，而无需手动编写每个请求。它可以自动捕获用户与应用程序之间的交互，并将其转换为可执行的测试脚本。</p>
<p>准确性：通过录制脚本，您可以捕获实际用户的行为并准确地模拟它们。这可以确保测试脚本与实际用户行为高度一致，从而提高测试的准确性。</p>
<p>节省时间：使用录制脚本可以节省大量的时间，因为您不需要逐个请求地手动编写测试脚本。录制脚本自动生成了大部分测试脚本的代码，您只需根据需要进行调整和优化。</p>
<p>简化复杂操作：对于一些复杂的操作序列，手动编写测试脚本可能会很困难。录制脚本可以帮助您准确地捕获和重现这些复杂操作，而无需深入了解其内部实现。</p>
<p>需要注意的是，录制脚本是测试脚本的起点，您可能需要对录制的脚本进行进一步的编辑和调整，以满足您的测试需求。此外，录制脚本可能无法捕获一些动态生成的参数或加密的交互，您可能需要手动处理这些问题。</p>
<h2 id="blazemeter介绍" tabindex="-1"><a class="header-anchor" href="#blazemeter介绍" aria-hidden="true">#</a> BlazeMeter介绍</h2>
<p><code v-pre>Blazemeter</code>是一个企业级的连续测试平台，可以录制脚本也可以做很多其他的测试相关的事情。<br>
不只是可以做性能测试也可以做功能测试，甚至是模拟你的服务接口进行<code v-pre>mock</code>。</p>
<figure><img src="@source/zh/guide/performance/assets/20230209114238.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以直接在<code v-pre>Chrome</code>浏览器中通过<a href="https://chrome.google.com/webstore/detail/blazemeter-the-continuous/mbopgmdnpcbohhpnfglgohlbhfongabi?hl=zh-CN" target="_blank" rel="noopener noreferrer">应用商店<ExternalLinkIcon/></a>进行安装。</p>
<h2 id="blazemeter安装-注册" tabindex="-1"><a class="header-anchor" href="#blazemeter安装-注册" aria-hidden="true">#</a> BlazeMeter安装&amp;注册</h2>
<p>首先来看一下对应的<code v-pre>BlazeMeter</code>官方对于<a href="https://guide.blazemeter.com/hc/en-us/articles/206732579-Chrome-Extension" target="_blank" rel="noopener noreferrer">Chrome扩展的帮助文档<ExternalLinkIcon/></a>。可以看到在帮助文档页面，不只有对应如何结合<code v-pre>JMeter</code>进行性能测试还有<code v-pre>Blazemeter</code>对应的<code v-pre>API</code>文档。</p>
<p><code v-pre>BlazeMeter</code>是一款与<code v-pre>Apache JMeter</code>兼容的<code v-pre>chrome</code>插件，采用<code v-pre>BlazeMeter</code>可以方便的进行流量录制和脚本生成，作为接口测试脚本编写的一个基础。</p>
<p>记录所有浏览活动以创建<code v-pre>JMeter</code>脚本，并自动将其上传到<code v-pre>BlazeMeter</code>平台。</p>
<h3 id="安装blazemeter" tabindex="-1"><a class="header-anchor" href="#安装blazemeter" aria-hidden="true">#</a> 安装BlazeMeter</h3>
<p><code v-pre>Blazemeter</code>是一个企业级的连续测试平台，可以直接在<code v-pre>Chrome</code>浏览器中通过<a href="https://chrome.google.com/webstore/detail/blazemeter-the-continuous/mbopgmdnpcbohhpnfglgohlbhfongabi?hl=zh-CN" target="_blank" rel="noopener noreferrer">应用商店<ExternalLinkIcon/></a>进行安装。<br>
如果大家由于网络原因不能访问应用商店，可以直接通过扩展程序安装<a href="https://github.com/Nikita-GDev/my-docs/blob/master/src/zh/guide/performance/material/blazeMeter_v5.2.0.crx" target="_blank" rel="noopener noreferrer">Blazemeter<ExternalLinkIcon/></a>。</p>
<p>步骤：</p>
<ol>
<li>
<p>点击Chrome浏览器右上角图标，选择  <strong>更多工具</strong>——&gt;<strong>扩展程序</strong>。</p>
</li>
<li>
<p>将<code v-pre>blazeMeter_v5.2.0.crx</code>文件直接拖拽进入扩展程序空白处，<code v-pre>BlazeMeter</code>插件自动安装。</p>
</li>
</ol>
<h4 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h4>
<p>浏览器标签栏出现红框部分表示插件安装成功：</p>
<figure><img src="@source/zh/guide/performance/assets/20230207153832.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意⚠️：</p>
<ul>
<li><code v-pre>Chrome</code>浏览器版本为<strong>58</strong>以上版本。</li>
<li><code v-pre>BlazeMeter</code>版本：
<ul>
<li>应用商店直接下载版本5.5.0。</li>
<li>crx文件安装5.2.0。</li>
</ul>
</li>
</ul>
<h2 id="录制流程" tabindex="-1"><a class="header-anchor" href="#录制流程" aria-hidden="true">#</a> 录制流程</h2>
<ol>
<li>压测对象。</li>
<li>压测页面。</li>
<li>业务步骤。</li>
<li>录制步骤。</li>
</ol>
<h3 id="压测对象" tabindex="-1"><a class="header-anchor" href="#压测对象" aria-hidden="true">#</a> 压测对象</h3>
<p>选用腾讯的<a href="https://new.qq.com/" target="_blank" rel="noopener noreferrer">新闻<ExternalLinkIcon/></a>页面进行压测脚本的录制。</p>
<figure><img src="@source/zh/guide/performance/assets/20230213155153.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="压测页面" tabindex="-1"><a class="header-anchor" href="#压测页面" aria-hidden="true">#</a> 压测页面</h3>
<p>涉及到的压测页面包括<strong>三</strong>个，分别是：腾讯<strong>新闻首页</strong>、新闻的<strong>财经</strong>页面、新闻的<strong>科技</strong>页面。</p>
<h3 id="业务步骤" tabindex="-1"><a class="header-anchor" href="#业务步骤" aria-hidden="true">#</a> 业务步骤</h3>
<ol>
<li>打开浏览器，访问腾讯<a href="https://new.qq.com/" target="_blank" rel="noopener noreferrer">新闻<ExternalLinkIcon/></a>页面。</li>
<li>点击页面Tab栏中的<a href="https://new.qq.com/ch/finance/" target="_blank" rel="noopener noreferrer">财经<ExternalLinkIcon/></a>跳转到财经新闻页面。</li>
<li>点击页面Tab栏中的<a href="https://new.qq.com/ch/tech/" target="_blank" rel="noopener noreferrer">科技<ExternalLinkIcon/></a>跳转到科技新闻页面。</li>
</ol>
<p>以上为业务的功能测试流程。</p>
<h3 id="录制步骤" tabindex="-1"><a class="header-anchor" href="#录制步骤" aria-hidden="true">#</a> 录制步骤</h3>
<p>下面来看下怎样使用<code v-pre>BlazeMeter</code>的代理服务器来录制脚本。</p>
<ol>
<li>账号登录。</li>
<li>录制执行。
<ol>
<li>脚本命名。</li>
<li>录制执行业务步骤。</li>
<li>脚本更改。</li>
</ol>
</li>
<li>脚本生成。</li>
<li>脚本验证。</li>
</ol>
<h4 id="_1-账号登录" tabindex="-1"><a class="header-anchor" href="#_1-账号登录" aria-hidden="true">#</a> 1. 账号登录</h4>
<ul>
<li>进入BlazeMeter面板登录</li>
</ul>
<p>点击浏览器对应<code v-pre>BlazeMeter</code>图标可以看到录制面板。</p>
<figure><img src="@source/zh/guide/performance/assets/20230207154808.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击右上角的 <strong>登录</strong> 等待几分钟，进入到 <strong>登录/注册</strong> 页面。</p>
<figure><img src="@source/zh/guide/performance/assets/20230207175339.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>进入页面后，如果大家有对应的账号则根据提示填入用户名和邮箱信息，保存即可进入<code v-pre>BlazeMeter</code>界面。</p>
<p>如果没有账号可以直接进行注册，注册页面如下：</p>
<figure><img src="@source/zh/guide/performance/assets/20230209110346.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>也可直接使用<code v-pre>google</code>账号登录，无论是哪种方式，最终进入的页面如下：</p>
<figure><img src="@source/zh/guide/performance/assets/20230209110013.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-录制执行" tabindex="-1"><a class="header-anchor" href="#_2-录制执行" aria-hidden="true">#</a> 2. 录制执行</h4>
<h5 id="录制界面功能简介" tabindex="-1"><a class="header-anchor" href="#录制界面功能简介" aria-hidden="true">#</a> 录制界面功能简介</h5>
<p>登录成功后，再次打开录制面板，可以看到右上角有对应的用户名的<code v-pre>firstName</code>显示。</p>
<figure><img src="@source/zh/guide/performance/assets/20230209112222.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>测试任务名</strong>内输入脚本文件的名称，在录制完成后以此为名字导出脚本。</p>
<blockquote>
<p>输入的英文名无论大小写都显示为大写，如：QQNEW_DEMO。</p>
</blockquote>
<p>点击<strong>停止录制</strong>按钮，<code v-pre>BlazeMeter</code>停止录制。</p>
<p>点击<strong>开始录制</strong>按钮，<code v-pre>BlazeMeter</code>开始当前浏览器的页面录制。</p>
<p>点击<strong>回退</strong>按钮，<code v-pre>BlazeMeter</code>页面恢复默认值。</p>
<h5 id="_2-1-脚本命名" tabindex="-1"><a class="header-anchor" href="#_2-1-脚本命名" aria-hidden="true">#</a> 2.1 脚本命名</h5>
<ul>
<li>输入用例脚本名</li>
</ul>
<p>在页面输入<strong>测试任务名</strong>为<code v-pre>QQNEW_DEMO</code>。录制完成后保存在本地的<code v-pre>JMX</code>脚本文件名为该名称。</p>
<figure><img src="@source/zh/guide/performance/assets/20230209150344.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="_2-2-录制执行业务步骤" tabindex="-1"><a class="header-anchor" href="#_2-2-录制执行业务步骤" aria-hidden="true">#</a> 2.2 录制执行业务步骤</h5>
<ol>
<li>点击<strong>开始录制</strong>按钮。</li>
<li>打开网址进行<strong>业务步骤</strong>操作，每个步骤为一个step。</li>
<li>点击<strong>停止录制</strong>按钮，等待<code v-pre>BlazeMeter</code>生成脚本。</li>
</ol>
<figure><img src="@source/zh/guide/performance/assets/230213143703.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>录制后再点开<code v-pre>BlazeMeter</code>面板如下：</p>
<figure><img src="@source/zh/guide/performance/assets/20230209151846.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="_2-3-脚本更改" tabindex="-1"><a class="header-anchor" href="#_2-3-脚本更改" aria-hidden="true">#</a> 2.3 脚本更改</h5>
<ol>
<li>点击编辑按钮，进入编辑页面。</li>
</ol>
<blockquote>
<p>如果在下载前需要对脚本进行更改，则在保存前点击编辑按钮。</p>
</blockquote>
<figure><img src="@source/zh/guide/performance/assets/20230213145258.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/performance/assets/20230213145545.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到有所有的录制请求，可以进行筛选或编辑，本篇文章不做任何修改。</p>
<h4 id="_3-脚本生成" tabindex="-1"><a class="header-anchor" href="#_3-脚本生成" aria-hidden="true">#</a> 3. 脚本生成</h4>
<ol>
<li>点击<strong>保存</strong>按钮跳转到筛选保存脚本页面。</li>
</ol>
<blockquote>
<p>页面有<code v-pre>JMeter</code>的脚本JMX保存及<code v-pre>Selenium</code>脚本保存。<br>在使用<code v-pre>BlazeMeter</code>录制操作业务步骤时，<code v-pre>BlazeMeter</code>不只是对<strong>接口请求</strong>进行了录制，还对当前<code v-pre>UI</code>界面的操作进行了录制（有点像<code v-pre>Selenium IDE</code>）。<br>在这里我们主要是针对接口进行压测脚本的录制，所以，选择第一个选项JMX保存。<br>如果第一个选项置灰，此时第三个选项的按钮也同样置灰，代表当前业务步骤的接口请求录制失败。</p>
</blockquote>
<figure><img src="@source/zh/guide/performance/assets/20230209152021.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>选择要保存的脚本及包含的请求域名。</li>
</ol>
<blockquote>
<p>当选择<code v-pre>JMeter</code>选项后，还会让我们对录制的过程中的域名进行选择。<br>业务请求的操作步骤中只要涉及到了的请求或当前浏览器窗口打开的标签栏内的地址，对应域名都会在包含进来。<br>如果分不清哪些域名为录制的请求所需域名，建议大家都选中。本篇文章中，对应的域名选中<code v-pre>qq.com</code>。</p>
</blockquote>
<figure><img src="@source/zh/guide/performance/assets/20230213144751.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>脚本生成并下载。</li>
</ol>
<blockquote>
<p>选择完成后，点击<code v-pre>save</code>按钮需要等待几分钟，脚本生成并自动下载到当前电脑。</p>
</blockquote>
<figure><img src="@source/zh/guide/performance/assets/20230209153704.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-脚本验证" tabindex="-1"><a class="header-anchor" href="#_4-脚本验证" aria-hidden="true">#</a> 4. 脚本验证</h4>
<p><a href="QQNEW_DEMO.jmx">QQNEW_DEMO</a></p>
<p><code v-pre>JMeter</code>添加查看结果树，点击运行查看结果。</p>
<figure><img src="@source/zh/guide/performance/assets/20230213151933.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2>
<ol>
<li>
<p><code v-pre>BlazeMeter</code>自动填充全局配置信息，比如：<code v-pre>Http</code>信息头。</p>
</li>
<li>
<p><code v-pre>BlazeMeter</code>抽取出接口环境变量<code v-pre>BASE_URL</code>。</p>
</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li><code v-pre>BlazeMeter</code>界面介绍：
<ul>
<li>命名</li>
<li>启动</li>
<li>暂停</li>
<li>导出脚本</li>
</ul>
</li>
<li>录制步骤：
<ul>
<li>开启<code v-pre>BlazeMeter</code>录制</li>
<li>业务操作</li>
<li>选择域名导出脚本</li>
</ul>
</li>
<li>运行验证：
<ul>
<li>添加查看结果树，运行脚本查看结果</li>
</ul>
</li>
</ul>
<figure><img src="@source/zh/guide/performance/assets/20230213154513.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


