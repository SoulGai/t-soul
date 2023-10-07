<template><div><h2 id="本章要点【缺少】" tabindex="-1"><a class="header-anchor" href="#本章要点【缺少】" aria-hidden="true">#</a> 本章要点【缺少】</h2>
<ol>
<li>运行模块介绍</li>
<li>选项模块介绍</li>
</ol>
<h2 id="学习目标【缺少】" tabindex="-1"><a class="header-anchor" href="#学习目标【缺少】" aria-hidden="true">#</a> 学习目标【缺少】</h2>
<ol>
<li>运行、选项模块使用。</li>
</ol>
<h2 id="思考【缺少】" tabindex="-1"><a class="header-anchor" href="#思考【缺少】" aria-hidden="true">#</a> 思考【缺少】</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>录制的流程</li>
<li>JMeter相关组件的添加、配置</li>
<li>证书的生成导入</li>
<li>录制中优化</li>
</ol>
<h2 id="录制流程" tabindex="-1"><a class="header-anchor" href="#录制流程" aria-hidden="true">#</a> 录制流程</h2>
<ol>
<li>压测对象。</li>
<li>压测页面。</li>
<li>业务步骤。</li>
<li>录制步骤。</li>
<li>优化脚本。</li>
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
<p>下面来看下怎样使用<code v-pre>JMeter</code>的代理服务器来录制压测脚本。</p>
<ol>
<li>打开JMeter的GUI界面。</li>
<li>保存脚本。</li>
<li>添加HTTP(S) 测试脚本记录器。</li>
<li>录制的请求路径组件。</li>
<li>配置HTTP(S)测试脚本记录器。</li>
<li>启动代理服务器。</li>
<li>证书配置。</li>
<li>浏览器代理配置。</li>
<li>执行。</li>
</ol>
<h4 id="_1-打开jmeter的gui界面" tabindex="-1"><a class="header-anchor" href="#_1-打开jmeter的gui界面" aria-hidden="true">#</a> 1. 打开JMeter的GUI界面</h4>
<p>默认创建测试计划，在界面上方对应当前<code v-pre>JMeter</code>版本号。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203144128.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-保存脚本" tabindex="-1"><a class="header-anchor" href="#_2-保存脚本" aria-hidden="true">#</a> 2. 保存脚本</h4>
<p>当前界面的脚本默认没有保存，为了防止添加的组件及录制的脚本丢失，建议在打开了<code v-pre>GUI</code>界面后先对脚本进行保存。</p>
<p>脚本保存时，默认的文件名为测试计划组件的名称，选择好保存路径后，可在<code v-pre>File</code>对应的输入框内输入新的脚本文件名。</p>
<p>注意⚠️：要<code v-pre>jmx</code>结尾说明当前文件是一个<code v-pre>JMeter</code>脚本。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203145017.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>脚本保存成功后，<code v-pre>JMeter</code>界面会显示文件名称及其路径。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203145110.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-添加http-s-测试脚本记录器" tabindex="-1"><a class="header-anchor" href="#_3-添加http-s-测试脚本记录器" aria-hidden="true">#</a> 3. 添加HTTP(S) 测试脚本记录器</h4>
<p>第一个组件的添加，非测试组件。</p>
<p>导航到 测试计划(<code v-pre>Test Plan</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 非测试元件(<code v-pre>Non-Test Elements</code>) -&gt; HTTP 代理服务器(<code v-pre>HTTP(S) Test Script Recorder</code>)。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203155028.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>HTTP(S)</code> 测试脚本记录器允许 <code v-pre>JMeter</code> 在浏览器浏览 <code v-pre>Web</code> 应用程序时拦截并记录操作。</p>
<h4 id="_4-录制的请求路径组件" tabindex="-1"><a class="header-anchor" href="#_4-录制的请求路径组件" aria-hidden="true">#</a> 4. 录制的请求路径组件</h4>
<p>虽然添加了<code v-pre>HTTP(S)</code> 测试脚本记录器，但是记录下的来的<code v-pre>HTTP</code>请求还没有存放路径。下面来添加录制的请求存放路径组件。</p>
<h5 id="线程组组件" tabindex="-1"><a class="header-anchor" href="#线程组组件" aria-hidden="true">#</a> 线程组组件</h5>
<p>导航到 测试计划(<code v-pre>Test Plan</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 线程(<code v-pre>Threads</code>) -&gt; 线程组(<code v-pre>Thread Group</code>)。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203155118.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="添加录制控制器组件" tabindex="-1"><a class="header-anchor" href="#添加录制控制器组件" aria-hidden="true">#</a> 添加录制控制器组件</h5>
<p>导航到 线程组(<code v-pre>Thread Group</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 逻辑控制器(<code v-pre>Logic Controller</code>) -&gt; 录制控制器(<code v-pre>Recording Controller</code>)。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203155816.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>录制控制器组件下会存放录制的脚本请求内容，主要是对录制的请求可直接一键清空。</p>
<figure><img src="@source/zh/guide/performance/assets/20230205143327.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-配置http-s-测试脚本记录器" tabindex="-1"><a class="header-anchor" href="#_5-配置http-s-测试脚本记录器" aria-hidden="true">#</a> 5. 配置HTTP(S)测试脚本记录器</h4>
<p>组件都添加完成后，需要对<code v-pre>JMeter</code>的录制控制器进行配置。</p>
<h5 id="监听端口配置" tabindex="-1"><a class="header-anchor" href="#监听端口配置" aria-hidden="true">#</a> 监听端口配置</h5>
<p><code v-pre>Port</code>：设置监听浏览器的端口号，默认是8888。</p>
<p>注意⚠️：<br>
端口号设置的前提是要求当前端口号在客户端<strong>没有被占用</strong>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Mac Linux</span>
<span class="token function">netstat</span> -an<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">"端口号"</span>
<span class="token comment"># Window</span>
<span class="token function">netstat</span> -an<span class="token operator">|</span>findstr <span class="token string">"端口号"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230215173059.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果命令行对应结果没有输出，则代表当前端口号没有被占用。</p>
<p>当有相关进程输出时，说明端口号被占用，此时需要修改，比如修改端口号为6666。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203163430.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="脚本存放路径设置" tabindex="-1"><a class="header-anchor" href="#脚本存放路径设置" aria-hidden="true">#</a> 脚本存放路径设置</h5>
<p><strong>目标控制器</strong>：用来指定最终录制<strong>生成的脚本的存放位置</strong>。</p>
<blockquote>
<p>设置<code v-pre>JMeter</code>录制请求的路径，在 测试计划内容(<code v-pre>Test Plan Creation</code>) 下设置目标控制器。</p>
</blockquote>
<p>点击下拉小三角可以看到目标控制器有<strong>三</strong>个选项，建议选择存放路径为：测试计划(<code v-pre>Test Plan</code>) -&gt; 线程组(<code v-pre>Thread Group</code>) -&gt; 录制控制器(<code v-pre>Recording Controller</code>)。</p>
<figure><img src="@source/zh/guide/performance/assets/20230206114527.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>存放在录制控制器下<strong>优点</strong>：</p>
<ol>
<li>
<p>可以与其他编写的请求组件进行区分。</p>
</li>
<li>
<p>要删除录制相关的请求组件时，直接使用录制控制器的一键清除按钮即可。</p>
</li>
<li>
<p>录制的请求组件可直接在该节点下保存为新的测试计划。</p>
</li>
</ol>
<h5 id="脚本编码格式设置" tabindex="-1"><a class="header-anchor" href="#脚本编码格式设置" aria-hidden="true">#</a> 脚本编码格式设置</h5>
<p>录制的页面是中文页面，中文应用一般使用的是<code v-pre>UTF-8</code>的编码格式。</p>
<p>录制脚本时也需要声明编码格式与客户端的编码格式保持一致，否则会出现<strong>乱码</strong>问题。「解决脚本乱码问题」</p>
<p><code v-pre>Recording's default encoding</code>：<code v-pre>JMeter</code>录制时的默认编码，中文应用设置为<strong>utf-8</strong>。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203165425.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="请求类型" tabindex="-1"><a class="header-anchor" href="#请求类型" aria-hidden="true">#</a> 请求类型</h5>
<p><code v-pre>Type</code>：<code v-pre>HTTP</code>请求的实现类型，默认是<code v-pre>httpclient4</code>。</p>
<p>若录制时出现报错，解决方案为：考虑换成<code v-pre>java</code>模式。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203171924.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_6-启动代理服务器" tabindex="-1"><a class="header-anchor" href="#_6-启动代理服务器" aria-hidden="true">#</a> 6. 启动代理服务器</h4>
<p>当所有配置检查完毕后，点击 <strong>HTTP(S)测试脚本记录器</strong> 组件的 启动<code v-pre>Start</code> 按钮，此时才会启动<code v-pre>JMeter</code>的代理服务器。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203172812.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="证书生成" tabindex="-1"><a class="header-anchor" href="#证书生成" aria-hidden="true">#</a> 证书生成</h5>
<p>启动之后会弹出根证书的提示信息。包含如下：</p>
<ol>
<li>根证书保存在<code v-pre>JMeter</code>的<code v-pre>bin</code>目录。</li>
<li>根证书的有效期为<strong>7</strong>天。</li>
<li>如果已安装了旧的根证书，确保删除旧证书并且安装新的。
<blockquote>
<p>说明证书安装至电脑端不会被覆盖。</p>
</blockquote>
</li>
</ol>
<figure><img src="@source/zh/guide/performance/assets/20230203173054.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>代理服务器启动成功时界面如下：</p>
<figure><img src="@source/zh/guide/performance/assets/20230206115736.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="证书验证" tabindex="-1"><a class="header-anchor" href="#证书验证" aria-hidden="true">#</a> 证书验证</h5>
<p>打开<code v-pre>{jmeter_path}/bin</code>路径下查看生成的证书是否存在。</p>
<p>注意⚠️：</p>
<ol>
<li>如果在7天内生成过证书，则对应不会生成新的证书。</li>
<li>如果已存在7天之前的证书，需要删除后重新生成。</li>
</ol>
<figure><img src="@source/zh/guide/performance/assets/20230203173327.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="ca证书作用" tabindex="-1"><a class="header-anchor" href="#ca证书作用" aria-hidden="true">#</a> CA证书作用</h5>
<p><code v-pre>CA</code>「<code v-pre>Certificate Authority</code>」：<strong>证书授权中心</strong>，负责管理和签发证书的第三方机构。<br>
一般，<code v-pre>CA</code>证书必须是所有行业和所有公众都信任的、认可的，因此它具有足够的权威性。<code v-pre>CA</code>证书就是权威机构颁发的证书。</p>
<p>在本文中，生成的<code v-pre>CA</code>证书就是客户端与<code v-pre>JMeter</code>之间的相互认可的一个信用凭证。</p>
<h4 id="_7-证书配置" tabindex="-1"><a class="header-anchor" href="#_7-证书配置" aria-hidden="true">#</a> 7. 证书配置</h4>
<h5 id="mac系统" tabindex="-1"><a class="header-anchor" href="#mac系统" aria-hidden="true">#</a> Mac系统</h5>
<h6 id="_1-导入" tabindex="-1"><a class="header-anchor" href="#_1-导入" aria-hidden="true">#</a> 1. 导入</h6>
<p>钥匙串访问 -&gt; 系统 -&gt; 文件 -&gt; 导入项目，选择对应证书地址导入。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203175249.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h6 id="_2-信任" tabindex="-1"><a class="header-anchor" href="#_2-信任" aria-hidden="true">#</a> 2. 信任</h6>
<p>导入后发现对应证书未被信任。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203180154.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点开证书发现证书配置是使用系统默认，系统为了保证安全性，默认手动添加的证书都是不被信任的。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203180449.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>修改完成后，直接关闭输入密码，此时的证书被完全信任。</p>
<figure><img src="@source/zh/guide/performance/assets/20230203180628.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/performance/assets/20230203181717.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="window系统" tabindex="-1"><a class="header-anchor" href="#window系统" aria-hidden="true">#</a> Window系统</h5>
<h4 id="_8-浏览器代理配置" tabindex="-1"><a class="header-anchor" href="#_8-浏览器代理配置" aria-hidden="true">#</a> 8. 浏览器代理配置</h4>
<h5 id="mac系统-1" tabindex="-1"><a class="header-anchor" href="#mac系统-1" aria-hidden="true">#</a> Mac系统</h5>
<h6 id="chrome浏览器代理配置" tabindex="-1"><a class="header-anchor" href="#chrome浏览器代理配置" aria-hidden="true">#</a> Chrome浏览器代理配置</h6>
<p>使用第三方插件<code v-pre>SwitchyOmega</code>来进行代理配置。</p>
<ol>
<li>
<p>新建名为<code v-pre>jmeter</code>的代理模式，类型为默认的代理服务器选项。<br>
<img src="@source/zh/guide/performance/assets/20230205110359.png" alt="" loading="lazy"></p>
</li>
<li>
<p>代理配置。</p>
<ul>
<li>请求为<code v-pre>HTTP</code>协议的代理，所以配置代理服务器的代理协议为<code v-pre>HTTP</code>。</li>
<li><code v-pre>JMeter</code>代理服务器启动的地址是本地，所以配置代理服务器的<code v-pre>IP</code>时为<strong>127.0.0.1</strong>。</li>
<li><code v-pre>JMeter</code>代理服务器修改的监听端口号为<strong>6666</strong>，这里配置的代理端口与<code v-pre>JMeter</code>的保持一致为<strong>6666</strong>。<br>
<img src="@source/zh/guide/performance/assets/20230205110722.png" alt="" loading="lazy"></li>
</ul>
<blockquote>
<p>最后点击应用选项保存以上配置。</p>
</blockquote>
</li>
<li>
<p>应用代理。</p>
<blockquote>
<p>在浏览器的扩展程序中选中<code v-pre>jmeter</code>模式，此时浏览器的所有请求都会通过该端口进行转发给<code v-pre>JMeter</code>的代理服务器。<br>
<img src="@source/zh/guide/performance/assets/20230205112654.png" alt="" loading="lazy"></p>
</blockquote>
</li>
</ol>
<h6 id="fixfox浏览器代理配置" tabindex="-1"><a class="header-anchor" href="#fixfox浏览器代理配置" aria-hidden="true">#</a> FixFox浏览器代理配置</h6>
<h5 id="window系统-1" tabindex="-1"><a class="header-anchor" href="#window系统-1" aria-hidden="true">#</a> Window系统</h5>
<h4 id="_9-执行" tabindex="-1"><a class="header-anchor" href="#_9-执行" aria-hidden="true">#</a> 9. 执行</h4>
<ol>
<li>
<p>执行业务逻辑。</p>
</li>
<li>
<p>关闭<code v-pre>JMeter</code>代理服务器。<br>
<img src="@source/zh/guide/performance/assets/20230205112932.png" alt="" loading="lazy"></p>
</li>
<li>
<p>关闭浏览器代理配置。</p>
</li>
</ol>
<h4 id="_9-回放验证" tabindex="-1"><a class="header-anchor" href="#_9-回放验证" aria-hidden="true">#</a> 9. 回放验证</h4>
<p>❖ 只是为了检验，所以一个并发、一次循环即可</p>
<ol start="4">
<li>JMeter脚本验证回放。<a href="./%E8%B5%84%E6%96%99/%E4%BB%A3%E7%90%86%E5%BD%95%E5%88%B6/%E5%BD%95%E5%88%B6Web.jmx">录制</a>
<ul>
<li>检验代码等正确性是测试的老本行。</li>
<li>压测代码也是代码。</li>
<li>自己的代码也必须检验。</li>
<li>JMeter添加查看结果树，点击运行查看结果。
<ul>
<li>查看结果树的<strong>⽤途</strong>：看请求和响应「Req/Resp」的详情</li>
</ul>
</li>
</ul>
<blockquote>
<p>为了检验，线程组只设置⼀个并发、⼀次循环即可。<br>
单击开始运⾏按钮，检查请求/响应是否都成功。<br>
<img src="@source/zh/guide/performance/assets/20230215174112.png" alt="" loading="lazy"></p>
</blockquote>
</li>
</ol>
<p>注意⚠️：<br>
当关闭<code v-pre>JMeter</code>代理服务器时一定要同时关闭浏览器代理配置，否则再使用浏览器时无法进行网络访问。</p>
<h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2>
<p>虽然业务逻辑步骤只是点了两个页面，但是录制出来的请求有很多个。</p>
<p>下面我们对这些请求进行一个分析，发现录制的脚本中有很多<code v-pre>js</code>或者<code v-pre>jpg</code>或者<code v-pre>css</code>等等结尾的请求，这些请求统称为静态资源。公司里面的<strong>静态资源</strong>是不会和请求的服务端共同放在一个服务器上。</p>
<h3 id="静态资源优化" tabindex="-1"><a class="header-anchor" href="#静态资源优化" aria-hidden="true">#</a> 静态资源优化</h3>
<h4 id="静态资源概念" tabindex="-1"><a class="header-anchor" href="#静态资源概念" aria-hidden="true">#</a> 静态资源概念</h4>
<p>静态资源就是服务端发送到客户端的文件，比如：<code v-pre>js</code>、<code v-pre>css</code>、图片、音频等等。</p>
<p>静态资源是不会占用服务器的运算资源，所以在压测时不会关注静态资源相关的请求。</p>
<h4 id="静态资源存放位置" tabindex="-1"><a class="header-anchor" href="#静态资源存放位置" aria-hidden="true">#</a> 静态资源存放位置</h4>
<p>静态资源的存放位置，需要问一下前端研发，这块资源的统筹归属为前端研发。</p>
<p>静态资源会存放在<code v-pre>CDN</code>服务器上，<code v-pre>CDN</code>服务包含：<strong>公司自建的CDN服务</strong>、<strong>又拍云</strong>、<strong>阿里云</strong>、<strong>七牛云</strong>等等。</p>
<figure><img src="@source/zh/guide/performance/assets/20230205135626.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="过滤规则" tabindex="-1"><a class="header-anchor" href="#过滤规则" aria-hidden="true">#</a> 过滤规则</h4>
<p>录制的请求需要进行过滤，过滤的原则为去掉请求中的静态资源，只录制服务端的请求URL，不录制其他的图片资源内容。</p>
<ul>
<li><code v-pre>Exclude</code>：过滤的内容，去掉一些静态请求比如：图片、js、css等</li>
<li><code v-pre>Include</code>：包含的内容</li>
</ul>
<figure><img src="@source/zh/guide/performance/assets/20230205142203.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在匹配规则内进行添加，<code v-pre>Include Patterns</code>添加网站的域名包含规则，只录制业务请求的域名，其他请求域名不录制，比如腾讯的<a href="https://new.qq.com/" target="_blank" rel="noopener noreferrer">新闻<ExternalLinkIcon/></a>相关页面表达式为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">(</span>new<span class="token punctuation">\</span>.qq<span class="token punctuation">\</span>.com<span class="token punctuation">)</span>.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>Exclude Patterns</code>添加录制请求的静态资源过滤规则，图片一般为<code v-pre>png</code>/<code v-pre>jpg</code>结尾，前端渲染配置一般为<code v-pre>css</code>/<code v-pre>js</code>/<code v-pre>jsp</code>，视频资源为<code v-pre>mp4</code>，动图一般以<code v-pre>gif</code>结尾。所以，静态资源过滤表达式为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>.*<span class="token punctuation">\</span>.<span class="token punctuation">(</span>png<span class="token operator">|</span>jpg<span class="token operator">|</span>css<span class="token operator">|</span>js<span class="token operator">|</span>jsp<span class="token operator">|</span>mp4<span class="token operator">|</span>gif<span class="token punctuation">)</span>.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意⚠️：在表达式中如果是域名的<code v-pre>.</code>符号，需要添加<code v-pre>\</code>转义字符。</p>
<figure><img src="@source/zh/guide/performance/assets/20230205144143.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="优化验证" tabindex="-1"><a class="header-anchor" href="#优化验证" aria-hidden="true">#</a> 优化验证</h4>
<p><a href="./%E8%B5%84%E6%96%99/%E4%BB%A3%E7%90%86%E5%BD%95%E5%88%B6/%E5%BD%95%E5%88%B6Web%E4%BC%98%E5%8C%96.jmx">优化</a></p>
<p>根据录制步骤重新启动代理服务器，浏览器选择代理配置后，访问腾讯的<a href="https://new.qq.com/" target="_blank" rel="noopener noreferrer">新闻<ExternalLinkIcon/></a>，录制的请求少很多，并且没有相关静态资源的内容加载进来，此时说明对应过滤的匹配规则正确。</p>
<figure><img src="@source/zh/guide/performance/assets/20230205144105.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li><code v-pre>JMeter</code>代理服务器配置内容
<ul>
<li>端口</li>
<li><code v-pre>URL</code>过滤规则：<code v-pre>Include</code>、<code v-pre>Exclude</code></li>
<li>录制脚本的存放位置</li>
</ul>
</li>
<li>不同浏览器端配置代理设置</li>
<li>录制步骤
<ul>
<li>开启JMeter代理</li>
<li>不同系统的JMeter证书导入</li>
<li>不通浏览器的JMeter证书配置</li>
<li>配置浏览器代理</li>
<li>业务操作</li>
<li>使用过滤匹配来优化录制请求中的静态资源</li>
</ul>
</li>
<li>运行验证
<ul>
<li>JMeter录制完成后查看是否有静态资源请求</li>
<li>添加查看结果树，运行脚本查看结果<br>
<img src="@source/zh/guide/performance/assets/20230205150622.png" alt="" loading="lazy"></li>
</ul>
</li>
</ul>
</div></template>


