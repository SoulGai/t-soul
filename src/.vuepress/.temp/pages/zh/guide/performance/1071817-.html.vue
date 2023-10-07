<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>运行模块介绍</li>
<li>选项模块介绍</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>运行、选项模块使用。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JMeter脚本编写完成后如何运行？对应的界面都是英文显示，不友好，如何把JMeter界面设置为中文？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="静默压测生成html报告" tabindex="-1"><a class="header-anchor" href="#静默压测生成html报告" aria-hidden="true">#</a> 静默压测生成HTML报告</h1>
<h2 id="课程目标" tabindex="-1"><a class="header-anchor" href="#课程目标" aria-hidden="true">#</a> 课程目标</h2>
<ol>
<li></li>
</ol>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>查看<a href="https://jmeter.apache.org/usermanual/generating-dashboard.html" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>，对应的显示一个HTML的文件报告，但是在这个页面并没有告诉我们应该怎样去生成这样的报告，下面主要就给大家讲解一下对应的如何自动生成HTML报告并且可以自动的多并发执行。</p>
<h3 id="静默压测" tabindex="-1"><a class="header-anchor" href="#静默压测" aria-hidden="true">#</a> 静默压测</h3>
<p>什么是静默压测呢？</p>
<p>其实我们打开JMeter在界面上对应进行脚本调试运行的时候，这就是一个GUI模式。对应的不使用GUI界面化对脚本进行运行就是静默压测。</p>
<p>脱离了GUI模式，压测脚本运行更稳定。</p>
<h3 id="为什么不用gui模式" tabindex="-1"><a class="header-anchor" href="#为什么不用gui模式" aria-hidden="true">#</a> 为什么不用GUI模式</h3>
<ul>
<li>对资源消耗大，浪费严重
<blockquote>
<p>有时压测链接超时，有可能不是对应接受请求服务被压爆了。而是我们的压力机出现了问题。<br>一般的压力机配置，在GUI模式下（Windows），最多支持300左右的模拟请求线程，再大的话，容易造成卡顿、无响应等情况，这是JMeter其本身的机制和硬件配置。</p>
</blockquote>
</li>
<li>GUI不用于负载测试，仅仅用于测试脚本的创建及调试</li>
<li>Linux系统上很难打开一个GUI界面，一般都是命令行使用
<blockquote>
<p>一般服务器都是通过命令行终端，ssh输入对应的命令进行链接操作，很少把Linux服务器做成一个UI界面化的系统去进行操作。</p>
</blockquote>
</li>
</ul>
<h2 id="生成html报告步骤" tabindex="-1"><a class="header-anchor" href="#生成html报告步骤" aria-hidden="true">#</a> 生成HTML报告步骤</h2>
<p>首先，我们先看一下对应生成HTML报告的步骤，依据以下步骤来生成：</p>
<ol>
<li>压测脚本创建 - 使用监听器查看结果（树或表中的结果）</li>
<li>GUI界面运行脚本</li>
<li>将 <code v-pre>jmx</code> 文件运行到非 <code v-pre>GUI</code> 模式并生成 <code v-pre>HTML</code> 报告</li>
</ol>
<h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3>
<ol>
<li>
<p><code v-pre>Java</code>环境安装配置成功。Java 8+，建议jdk11。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230106140728.png" alt="" loading="lazy"></p>
</li>
<li>
<p><code v-pre>Apache JMeter</code>下载安装成功。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230106140822.png" alt="" loading="lazy"></p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bew <span class="token function">install</span> jmeter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认安装的路径为<code v-pre>/usr/local/Cellar/jmeter/5.5</code>。</p>
<p>如果满足以上条件，就可以进行对应的压测脚本的创建及运行。</p>
<h3 id="_1-压测脚本创建" tabindex="-1"><a class="header-anchor" href="#_1-压测脚本创建" aria-hidden="true">#</a> 1. 压测脚本创建</h3>
<p>安装<code v-pre>JMeter</code>，以<code v-pre>GUI</code>模式启动<code v-pre>JMeter</code>并构建测试计划。</p>
<p>如果配置了全局环境变量则直接命令行输入<code v-pre>jmeter</code>启动<code v-pre>JMeter</code>的界面；</p>
<p>如果没有配置全局变量则命令行<code v-pre>cd</code>到<code v-pre>{jmeter_path}/bin</code>路径下，再输入<code v-pre>jmeter</code>以启动<code v-pre>JMeter</code>的界面。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230106115317.png" alt="" loading="lazy"></p>
<h5 id="报错" tabindex="-1"><a class="header-anchor" href="#报错" aria-hidden="true">#</a> 报错</h5>
<p>配置完环境变量后，对应的命令行打开还是不能启动脚本，命令行提示：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter: Permission denied【拒绝访问】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方案</strong>：给<code v-pre>jmeter</code>启动脚本增加权限。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> +x jmeter

<span class="token comment"># 移除对应的执行权限</span>
<span class="token function">chmod</span> <span class="token parameter variable">-x</span> jmeter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>启动JMeter的界面化，其实就是启动的<code v-pre>{jmeter_path}/bin</code>下的<code v-pre>jmeter</code>脚本，Mac/Linux系统下是jmeter，Window系统下是jmeter.bat；<br>看一下脚本的内容：</p>
</blockquote>
<ul>
<li><code v-pre>#! /bin/sh</code>：说明是一个shell脚本。</li>
<li><code v-pre>JAVA_HOME</code>：电脑的环境变量需要配置该变量。</li>
<li><code v-pre>MINIMAL_VERSION=8</code>：启动JMeter的最低Java版本是8。</li>
<li><code v-pre>JAVA9_OPTS=</code>：JMeter也可以使用Java9,但是使用9的时候对应启动命令参数就有变化。</li>
<li><code v-pre>: &quot;${HEAP:=&quot;-Xms1g -Xmx1g -XX:MaxMetaspaceSize=256m&quot;}&quot;</code>：JMeter使用的Java环境的基本堆大小。可以修改。</li>
<li><code v-pre>: &quot;${JMETER_LANGUAGE:=&quot;-Duser.language=en -Duser.region=EN&quot;}&quot;</code>：默认的语言是英语，可以修改为中文。</li>
</ul>
<h4 id="_1-打开jmeter并添加线程组" tabindex="-1"><a class="header-anchor" href="#_1-打开jmeter并添加线程组" aria-hidden="true">#</a> 1）打开JMeter并添加线程组</h4>
<p>要添加线程组，测试计划(<code v-pre>Test Plan</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 线程(<code v-pre>Threads</code>) -&gt; 线程组(<code v-pre>Thread Group</code>)<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107092806.png" alt="" loading="lazy"></p>
<h4 id="_2-添加http请求" tabindex="-1"><a class="header-anchor" href="#_2-添加http请求" aria-hidden="true">#</a> 2）添加HTTP请求</h4>
<p>导航到 线程组(<code v-pre>Thread Group</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 采样器(<code v-pre>Sampler</code>) -&gt; HTTP 请求(<code v-pre>HTTP Request</code>)</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107094231.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-http请求编写" tabindex="-1"><a class="header-anchor" href="#_3-http请求编写" aria-hidden="true">#</a> 3）HTTP请求编写</h4>
<p>接下来搜索可在 Internet 上免费获得的<a href="https://reqres.in/" target="_blank" rel="noopener noreferrer">Reqres API<ExternalLinkIcon/></a>。我们将以 Reqres API 为例。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107100649.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>GET请求如下：<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107100755.png" alt="" loading="lazy"></p>
<p>现在你有了API，从链接中找出<strong>服务器名称</strong>、<strong>路径</strong>和<strong>参数</strong>。在JMeter 测试计划的 HTTP 请求中复制这些值。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107100941.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-查看测试结果" tabindex="-1"><a class="header-anchor" href="#_4-查看测试结果" aria-hidden="true">#</a> 4）查看测试结果</h4>
<p>添加一个监听器（简单的<strong>数据写入器</strong>）并将结果存储在csv文件中。<br>
对于添加侦听器，导航到 测试计划(<code v-pre>Test Plan</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 侦听器(<code v-pre>Listener</code>)  -&gt; 查看结果树(<code v-pre>View Results Tree</code>)</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107101442.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>每个监听器中，都会有一个<strong>所有数据写入一个文件</strong>的功能。在创建查看结果树时需要对写出的文件地址进行配置，选择本地任意一个位置后面跟上数据输出的文件名。</p>
<p>我们可以从弹窗的文件类型中看到，支持的文件类型有三种：<code v-pre>xml</code>、<code v-pre>jtl</code>、<code v-pre>csv</code>。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230108121815.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>哪种类型是JMeter默认的呢？<br>
打开<code v-pre>{jmeter_path}/bin/jmeter.properties</code>文件，可以看到<code v-pre>output_format</code>的参数值默认为<code v-pre>csv</code>，所以<code v-pre>CSV</code>是JMeter的默认类型。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#jmeter.save.saveservice.output_format=csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们选择一个路径时，可以选择<strong>已存在的文件</strong>，也可以选择<strong>未存在的文件</strong>。文件名可以以<code v-pre>.csv</code>或<code v-pre>.jtl</code>结尾，本文使用<code v-pre>.jtl</code>结尾文件。</p>
<p>注意⚠️：建议使用<strong>未存在</strong>文件。</p>
<blockquote>
<p>JMeter默认参数配置中，<code v-pre>resultcollector.action_if_file_exists=ASK</code>，默认是询问用户。还有<code v-pre>APPEND</code>，<code v-pre>DELETE</code>选择使用。</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># Used to control what happens when you start a test and
# have listeners that could overwrite existing result files
# Possible values:
# ASK : Ask user 询问用户
# APPEND : Append results to existing file 在已经存在文件后追加结果
# DELETE : Delete existing file and start a new file  删除已经存在的文件并创建一个新的
#resultcollector.action_if_file_exists=ASK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>若文件为已存在的，则在运行时会弹窗提示，弹窗提示如下图：</p>
</blockquote>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230108121415.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意⚠️：一般请求的参数化使用的是<code v-pre>csv</code>文件，压测结果存储为<code v-pre>jtl</code>文件，进行区分，不建议使用<code v-pre>xml</code>存储结果。</p>
<blockquote>
<p>因为XML结果文件不能像csv、jtl一样直接命令行生成HTML报告，如果生成还需要与ant集成。</p>
</blockquote>
<h3 id="_2-gui界面运行脚本" tabindex="-1"><a class="header-anchor" href="#_2-gui界面运行脚本" aria-hidden="true">#</a> 2. GUI界面运行脚本</h3>
<h4 id="_5-运行" tabindex="-1"><a class="header-anchor" href="#_5-运行" aria-hidden="true">#</a> 5）运行</h4>
<p>保存压测脚本 (<code v-pre>.jmx</code>) 并运行它。只需单击<strong>绿色按钮</strong>或快捷键{<strong>Window</strong>}<code v-pre>Ctrl+R</code>/{<strong>Mac</strong>}<code v-pre>Command+R</code>即可运行。</p>
<p><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107101938.png" alt="" loading="lazy"><br>
上面的测试结果显示了HTTP 请求服务器的请求和响应。</p>
<h4 id="结果文件查看" tabindex="-1"><a class="header-anchor" href="#结果文件查看" aria-hidden="true">#</a> 结果文件查看</h4>
<p>默认配置下，jtl文件保存的字段为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>timeStamp,elapsed,label,responseCode,responseMessage,threadName,dataType,success,failureMessage,bytes,sentBytes,grpThreads,allThreads,URL,Latency,IdleTime,Connect
1673149864221,6824,GET API,200,OK,Thread Group 1-1,text,true,,1744,123,1,1,https://reqres.in/api/users?page=2,6823,0,1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeStamp</td>
<td>时间戳，毫秒；如：1673149864221</td>
</tr>
<tr>
<td>elapsed</td>
<td>耗时，毫秒；从发送请求到收到最后一个响应，所花费的时间；不包括渲染请求所花费的时间，同时也不包括处理客户端脚本所花费的时间</td>
</tr>
<tr>
<td>label</td>
<td>取样器名称 如：GET API</td>
</tr>
<tr>
<td>responseCode</td>
<td>HTTP响应code码；如：200</td>
</tr>
<tr>
<td>responseMessage</td>
<td>响应的message消息；如：OK</td>
</tr>
<tr>
<td>threadName</td>
<td>线程名；如：Thread Group 1-1</td>
</tr>
<tr>
<td>dataType</td>
<td>参数的数据类型；</td>
</tr>
<tr>
<td>success</td>
<td>请求是否成功；</td>
</tr>
<tr>
<td>failureMessage</td>
<td>响应的失败的message消息；</td>
</tr>
<tr>
<td>bytes</td>
<td>请求样本字节数</td>
</tr>
<tr>
<td>sentBytes</td>
<td>发送样本字节数</td>
</tr>
<tr>
<td>grpThreads</td>
<td>当前线程组的线程数</td>
</tr>
<tr>
<td>allThreads</td>
<td>所有线程组的线程数</td>
</tr>
<tr>
<td>URL</td>
<td>请求地址路径</td>
</tr>
<tr>
<td>Latency</td>
<td>延迟的耗时</td>
</tr>
<tr>
<td>IdleTime</td>
<td>空闲时间，毫秒；</td>
</tr>
<tr>
<td>Connect</td>
<td>连接建立的时间</td>
</tr>
</tbody>
</table>
<p>在这里，对应的请求和响应的body参数没有写入文件，因为jtl文件中这些参数主要是为了做性能分析生成图表进行使用。</p>
<h3 id="_3-生成报告" tabindex="-1"><a class="header-anchor" href="#_3-生成报告" aria-hidden="true">#</a> 3. 生成报告</h3>
<p>生成报告有两种方式：一种为使用GUI模式，一种使用命令行模式。</p>
<h4 id="_1-gui-模式生成报告" tabindex="-1"><a class="header-anchor" href="#_1-gui-模式生成报告" aria-hidden="true">#</a> 1) GUI 模式生成报告</h4>
<ul>
<li>也就是GUI界面<strong>从独立的 csv/jtl 文件创建报告</strong>。</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230108150435.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230109170459.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p><code v-pre>Results file</code> 浏览选中存储结果的 <code v-pre>csv</code>/<code v-pre>jtl</code> 文件路径</p>
</li>
<li>
<p><code v-pre>user.properties</code> 浏览选中<code v-pre>{jmeter_path}/bin/jmeter.properties</code>文件</p>
</li>
<li>
<p><code v-pre>Output directory</code> 浏览输入<code v-pre>HTML</code>报告的文件夹路径</p>
<blockquote>
<p>html文件夹可为已存在也可为不存在文件夹；<br>如果存在则生成的文件直接放入该文件夹下，如果不存在则会生成该文件夹再放入生成的报告文件。</p>
</blockquote>
</li>
<li>
<p>点击底部<code v-pre>Gererate report</code>，就可以生成 <code v-pre>HTML</code> 到<code v-pre>Output directory</code>的路径文件夹下。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230109171455.png" alt="" loading="lazy"></p>
</li>
</ol>
<h5 id="报错1" tabindex="-1"><a class="header-anchor" href="#报错1" aria-hidden="true">#</a> 报错1</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Generating report
File '/**/api.jtl' does not contain the field names header, ensure the jmeter.save.saveservice.* properties are the same as when the CSV file was created or the file may be read incorrectly when generating report
An error occurred: null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>由于结果文件没有头信息导致。</li>
</ul>
<p><strong>解决方案</strong>： 需要在结果文件<code v-pre>jtl/csv</code>中添加上以下对应头信息：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>timeStamp,elapsed,label,responseCode,responseMessage,threadName,dataType,success,failureMessage,bytes,sentBytes,grpThreads,allThreads,URL,Latency,IdleTime,Connect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="报错2" tabindex="-1"><a class="header-anchor" href="#报错2" aria-hidden="true">#</a> 报错2</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Output directory :The directory /**/html isnt empty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>若生成HTML的文件夹已存在，需要为空文件夹，否则生成报告会报错。</li>
</ul>
<p><strong>解决方案</strong>： 选中HTML的文件夹为空文件夹。</p>
<h4 id="_2-命令行模式生成报告" tabindex="-1"><a class="header-anchor" href="#_2-命令行模式生成报告" aria-hidden="true">#</a> 2) 命令行模式生成报告</h4>
<p>GUI界面只是为了脚本进行调试时使用，如果想要进行压测，则需要在压测机上使用命令行的模式运行jmx脚本。</p>
<p>可以看到JMeter在启动时，命令行输出打印一条命令，也就是静默压测的命令行。</p>
<p>静默压测，命令可直接⽣成对应HTML压测报告。</p>
<ul>
<li>过程
<ul>
<li>jtl_file的原始数据 ——&gt; html压测报告</li>
</ul>
</li>
<li>优点
<ul>
<li>快，⽅便，省事，节约时间，美观</li>
</ul>
</li>
</ul>
<h5 id="测试脚本生成html报告" tabindex="-1"><a class="header-anchor" href="#测试脚本生成html报告" aria-hidden="true">#</a> 测试脚本生成HTML报告</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>jmx file<span class="token punctuation">]</span> <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token punctuation">[</span>Path to web report folder<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> GETAPI.jmx <span class="token parameter variable">-l</span> get.jtl <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230109185313.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="命令行file含义" tabindex="-1"><a class="header-anchor" href="#命令行file含义" aria-hidden="true">#</a> 命令行file含义</h5>
<ul>
<li><code v-pre>jmx file</code>：<code v-pre>JMeter</code>压测脚本文件
<ul>
<li>压测脚本的运行逻辑及流程控制过程都在<code v-pre>jmx file</code>中</li>
</ul>
</li>
<li><code v-pre>results file</code>：<code v-pre>JMeter</code>压测脚本的结果储存文件
<ul>
<li><code v-pre>JMeter</code>静默压测生成的压测数据，原始的各种压测数据文件</li>
</ul>
<blockquote>
<p>jtl结果文件需要为空文件，否则命令行运行报错：``</p>
</blockquote>
</li>
<li><code v-pre>Path to web report folder</code>：<code v-pre>JMeter</code>压测的<code v-pre>HTML</code>报告文件
<ul>
<li>根据<code v-pre>JMeter</code>静默压测的压测数据生成<code v-pre>HTML</code>报告文件夹</li>
<li>文件夹可为存在也可为不存在，若存在必为空文件夹。</li>
</ul>
</li>
</ul>
<h5 id="运行报错" tabindex="-1"><a class="header-anchor" href="#运行报错" aria-hidden="true">#</a> 运行报错</h5>
<p>示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> GETAPI.jmx <span class="token parameter variable">-l</span> get.jtl <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一次运行该代码没有问题，第二次运行时报错：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>An error occurred: Cannot <span class="token function">write</span> to <span class="token string">'/**/html'</span> as folder is not empty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>原因</strong>：生成报告文件<code v-pre>html</code>时报错，由于生成报告的文件夹不是空文件夹。</p>
<p><strong>解决方案</strong>： 需要<strong>重新指定创建空文件夹</strong>。</p>
<h5 id="参数含义" tabindex="-1"><a class="header-anchor" href="#参数含义" aria-hidden="true">#</a> 参数含义</h5>
<ul>
<li><code v-pre>-n</code>：<code v-pre>nongui</code>;非 GUI 模式，在非 GUI 模式下运行 JMeter 压测脚本。</li>
<li><code v-pre>-t</code>：<code v-pre>testfile</code>;指定JMeter脚本，要运行的 JMeter 测试脚本文件。</li>
<li><code v-pre>-l</code>：<code v-pre>logfile</code>;JMeter压测结果文件，记录结果样本的文件。</li>
<li><code v-pre>-e</code>：<code v-pre>reportatendofloadtests</code>;测试结束后生成报告。
<blockquote>
<p>此时只是生成对应的结果报告HTML，但是并没有保存在硬盘上。</p>
</blockquote>
</li>
<li><code v-pre>-o</code>：<code v-pre>reportoutputfolder</code>;报告的输出文件地址。
<blockquote>
<p>需要把HTML报告保存在当前电脑硬盘上，则需要添加-o参数进行保存。</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>若想要查看<code v-pre>JMeter</code>的所有命令行参数，则在终端输入<code v-pre>jmeter -</code>即可。</p>
</blockquote>
<h5 id="静默压测生成结果文件" tabindex="-1"><a class="header-anchor" href="#静默压测生成结果文件" aria-hidden="true">#</a> 静默压测生成结果文件</h5>
<p>只想通过静默压测生成对应的结果文件，不需生成<code v-pre>HTML</code>报告。</p>
<p><code v-pre>HTML</code>报告等所有的压测脚本运行完后，统一对结果文件生成报告，则使用以下代码进行压测结果的存储：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>jmx file<span class="token punctuation">]</span> <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> GETAPI.jmx <span class="token parameter variable">-l</span> get1.jtl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令行运行如下图：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111175229.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到在当前文件夹下生成了<code v-pre>get1.jtl</code>,并且只是生成该文件，并没有生成<code v-pre>HTML</code>报告的文件夹。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111174904.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="结果文件生成报告" tabindex="-1"><a class="header-anchor" href="#结果文件生成报告" aria-hidden="true">#</a> 结果文件生成报告</h5>
<p>已经有了多个压测结果文件<code v-pre>jtl</code>，想要直接对具体的结果文件<code v-pre>jtl</code>生成对应的<code v-pre>HTML</code>报告，则可以使用如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-g</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token punctuation">[</span>Path to web report folder<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-g</code>：指定测试结果文件路径，仅用于生成测试报表，参数是csv结果文件</li>
</ul>
<blockquote>
<p>拿到结果文件直接生成HTML报告，不需要再发送一次脚本请求。</p>
</blockquote>
<p>示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-g</span> get1.jtl <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> html1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111175827.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到在当前文件夹下生成了名称为<code v-pre>html1</code>的<code v-pre>HTML</code>报告的文件夹。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111175939.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="自动化压测" tabindex="-1"><a class="header-anchor" href="#自动化压测" aria-hidden="true">#</a> 自动化压测</h2>
<p>JMeter压测脚本其实就是一个xml结构的文件，里面根据标签把GUI界面的组件和参数进行拼接。</p>
<h4 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h4>
<p>如何通过非GUI修改线程数？</p>
<blockquote>
<p>每次并发线程数更改就需要 使用<code v-pre>JMeter</code>的<code v-pre>GUI</code>界面或打开<code v-pre>jmx</code>文件找到线程组件的标签去更改线程数，造成不必要的时间成本上的浪费。</p>
</blockquote>
<h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h4>
<p>可以在脚本内自定义对应线程变量，引用后通过参数传递对应值给声明的变量即可进行自动化的压测。</p>
<p>想要对线程组件的变量进行自定义，首先要了解对应的压测脚本的结构，下面我们先来看一下对应的JMX脚本的结构的简单介绍：</p>
<h3 id="jmx脚本解读" tabindex="-1"><a class="header-anchor" href="#jmx脚本解读" aria-hidden="true">#</a> jmx脚本解读</h3>
<p>jmx脚本按结构自上而下：</p>
<h4 id="测试计划" tabindex="-1"><a class="header-anchor" href="#测试计划" aria-hidden="true">#</a> 测试计划</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110112510.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110112854.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>其中<code v-pre>&lt;jmeterTestPlan version=&quot;1.2&quot; properties=&quot;5.0&quot; jmeter=&quot;5.5&quot;&gt;</code>标签中的<code v-pre>jmeter=&quot;5.5&quot;</code>代表的是：<code v-pre>JMeter</code>版本是<code v-pre>5.5</code>,如果你使用的是其他的版本则会显示你使用的版本号。</p>
<h4 id="线程组" tabindex="-1"><a class="header-anchor" href="#线程组" aria-hidden="true">#</a> 线程组</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110115310.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li><code v-pre>HTTPSampler</code>：HTTP取样器</li>
</ul>
<h4 id="具体解析" tabindex="-1"><a class="header-anchor" href="#具体解析" aria-hidden="true">#</a> 具体解析</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jmeterTestPlan</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.2<span class="token punctuation">"</span></span> <span class="token attr-name">properties</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5.0<span class="token punctuation">"</span></span> <span class="token attr-name">jmeter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5.5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hashTree</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 测试计划组件  testname：名称 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TestPlan</span> <span class="token attr-name">guiclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TestPlanGui<span class="token punctuation">"</span></span> <span class="token attr-name">testclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TestPlan<span class="token punctuation">"</span></span> <span class="token attr-name">testname</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>GET请求的测试计划<span class="token punctuation">"</span></span> <span class="token attr-name">enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 字符串 测试计划的注释 注释的内容在标签内显示--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TestPlan.comments<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这是一个get请求的测试计划<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TestPlan.functional_mode<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TestPlan.tearDown_on_shutdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TestPlan.serialize_threadgroups<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>elementProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TestPlan.user_defined_variables<span class="token punctuation">"</span></span> <span class="token attr-name">elementType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Arguments<span class="token punctuation">"</span></span> <span class="token attr-name">guiclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ArgumentsPanel<span class="token punctuation">"</span></span> <span class="token attr-name">testclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Arguments<span class="token punctuation">"</span></span> <span class="token attr-name">testname</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User Defined Variables<span class="token punctuation">"</span></span> <span class="token attr-name">enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collectionProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Arguments.arguments<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>elementProp</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TestPlan.user_define_classpath<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TestPlan</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hashTree</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 查看结果树 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultCollector</span> <span class="token attr-name">guiclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ViewResultsFullVisualizer<span class="token punctuation">"</span></span> <span class="token attr-name">testclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ResultCollector<span class="token punctuation">"</span></span> <span class="token attr-name">testname</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>查看结果树<span class="token punctuation">"</span></span> <span class="token attr-name">enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ResultCollector.error_logging<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>objProp</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>saveConfig<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SampleSaveConfiguration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>latency</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>latency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timestamp</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>timestamp</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>success</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>success</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>message</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>message</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>threadName</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>threadName</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataType</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataType</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoding</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>assertions</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>assertions</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>subresults</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>subresults</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>responseData</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>responseData</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>samplerData</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>samplerData</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xml</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xml</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldNames</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldNames</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>responseHeaders</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>responseHeaders</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>requestHeaders</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>requestHeaders</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>responseDataOnError</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>responseDataOnError</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>saveAssertionResultsFailureMessage</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>saveAssertionResultsFailureMessage</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>assertionsResultsToSave</span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>assertionsResultsToSave</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bytes</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bytes</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sentBytes</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sentBytes</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>threadCounts</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>threadCounts</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>idleTime</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>idleTime</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>connectTime</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>connectTime</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>objProp</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filename<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>/Users/gigai/get.jtl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ResultCollector</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hashTree</span><span class="token punctuation">/></span></span>
      <span class="token comment">&lt;!-- 线程组 testname：名称 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThreadGroup</span> <span class="token attr-name">guiclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroupGui<span class="token punctuation">"</span></span> <span class="token attr-name">testclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroup<span class="token punctuation">"</span></span> <span class="token attr-name">testname</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>线程组<span class="token punctuation">"</span></span> <span class="token attr-name">enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 取样器错误后执行的动作  单词修改
             继续：continue；
             启动下一进程循环：startnextloop；
             停止线程：stopthread；
             停止测试：stoptest；
             立即停止测试：stoptestnow；
         --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroup.on_sample_error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>continue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>elementProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroup.main_controller<span class="token punctuation">"</span></span> <span class="token attr-name">elementType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LoopController<span class="token punctuation">"</span></span> <span class="token attr-name">guiclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LoopControlPanel<span class="token punctuation">"</span></span> <span class="token attr-name">testclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LoopController<span class="token punctuation">"</span></span> <span class="token attr-name">testname</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>循环控制器<span class="token punctuation">"</span></span> <span class="token attr-name">enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 循环次数 是否勾选永远--></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LoopController.continue_forever<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 循环次数 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LoopController.loops<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>elementProp</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 线程数 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroup.num_threads<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- ramp-UP时间 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroup.ramp_time<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 调度器 默认不选中--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroup.scheduler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 持续时间 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroup.duration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 启动延迟 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroup.delay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 循环次数下的选择框 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ThreadGroup.same_user_on_next_iteration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 勾选延迟创建线程直到需要，下列标签出现 --></span>
        <span class="token comment">&lt;!-- &lt;boolProp name="ThreadGroup.delayedStart">true&lt;/boolProp> --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ThreadGroup</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hashTree</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- HTTP请求取样器 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HTTPSamplerProxy</span> <span class="token attr-name">guiclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HttpTestSampleGui<span class="token punctuation">"</span></span> <span class="token attr-name">testclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSamplerProxy<span class="token punctuation">"</span></span> <span class="token attr-name">testname</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTP请求<span class="token punctuation">"</span></span> <span class="token attr-name">enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>elementProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPsampler.Arguments<span class="token punctuation">"</span></span> <span class="token attr-name">elementType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Arguments<span class="token punctuation">"</span></span> <span class="token attr-name">guiclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPArgumentsPanel<span class="token punctuation">"</span></span> <span class="token attr-name">testclass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Arguments<span class="token punctuation">"</span></span> <span class="token attr-name">testname</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户定义的变量<span class="token punctuation">"</span></span> <span class="token attr-name">enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- 请求参数 无参数--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collectionProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Arguments.arguments<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token comment">&lt;!-- 请求参数 有参数--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collectionProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Arguments.arguments<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              <span class="token comment">&lt;!-- 参数key --></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>elementProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span> <span class="token attr-name">elementType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPArgument<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPArgument.always_encode<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
                <span class="token comment">&lt;!-- 参数value --></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Argument.value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Argument.metadata<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>=<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPArgument.use_equals<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
                <span class="token comment">&lt;!-- 参数key --></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Argument.name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>elementProp</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collectionProp</span><span class="token punctuation">></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>elementProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- IP --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.domain<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>reqres.in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 端口 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.port<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 协议 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.protocol<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>https<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 编码格式 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.contentEncoding<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 请求路径 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.path<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>/api/users?page=2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 请求方式 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.method<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>GET<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 跟随重定向 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.follow_redirects<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 自动重定向 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.auto_redirects<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 使用keepalive --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.use_keepalive<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.DO_MULTIPART_POST<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>boolProp</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.embedded_url_re<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>


          <span class="token comment">&lt;!-- 取样器高级配置，只有配置才显示该标签 客户端实现--></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.implementation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 连接时间 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.connect_timeout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>dfs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 响应时间 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.response_timeout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>fsad<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 取样器的注释 只有写了内容才显示该标签--></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TestPlan.comments<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ß<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>


          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.connect_timeout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stringProp</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTPSampler.response_timeout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stringProp</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HTTPSamplerProxy</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hashTree</span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hashTree</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hashTree</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hashTree</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jmeterTestPlan</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静默压测方式" tabindex="-1"><a class="header-anchor" href="#静默压测方式" aria-hidden="true">#</a> 静默压测方式</h3>
<blockquote>
<p>这时可能会疑问：为什么要让大家先来看一下对应JMX文件解读？这不是浪费时间吗？<br>
并不是的，因为后面我们的静默压测是需要用到修改压测脚本JMX。</p>
</blockquote>
<p>自定义线程组相关变量名，传给变量名参数值有两种方式。</p>
<p>方式一：直接<strong>命令行</strong>进行参数值传递；</p>
<blockquote>
<p>使用非<code v-pre>GUI</code>模式执行<code v-pre>JMeter</code>压测脚本，若需更改参数，必须编辑<code v-pre>jmx</code>文件，找到对应的变量进行修改，比较麻烦。<br><br>
因此，可以<code v-pre>GUI</code>界面进行参数化一些常用的变量，直接在<code v-pre>JMeter</code>命令行对该变量参数值进行设置。</p>
</blockquote>
<p>方式二：编写<strong>脚本</strong>进行参数值传递。{<code v-pre>shell</code>+<code v-pre>python</code>}</p>
<p>无论是<strong>命令行</strong>进行参数值传递还是<strong>脚本</strong>进行参数值传递，它们的前置条件是都需要在<code v-pre>GUI</code>界面设置传入参数的变量声明。</p>
<h3 id="自定义变量声明" tabindex="-1"><a class="header-anchor" href="#自定义变量声明" aria-hidden="true">#</a> 自定义变量声明</h3>
<h4 id="_1-添加用户自定义变量" tabindex="-1"><a class="header-anchor" href="#_1-添加用户自定义变量" aria-hidden="true">#</a> 1. 添加用户自定义变量</h4>
<p>导航到 线程组(<code v-pre>Thread Group</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 配置元件(<code v-pre>Config Element</code>) -&gt; 用户定义的变量(<code v-pre>User Defined Variables</code>)</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110150040.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-添加自定义变量表达式" tabindex="-1"><a class="header-anchor" href="#_2-添加自定义变量表达式" aria-hidden="true">#</a> 2. 添加自定义变量表达式</h4>
<p>线程组件中看到对应有3个变量，线程数、Ramp-Up时间、循环次数。</p>
<p>定义<strong>3</strong>个变量和变量对应的默认值。</p>
<blockquote>
<p>定义默认值为了防止没有给变量赋值导致对应脚本出错。</p>
</blockquote>
<h5 id="_1-函数表达式生成" tabindex="-1"><a class="header-anchor" href="#_1-函数表达式生成" aria-hidden="true">#</a> 1） 函数表达式生成</h5>
<ol>
<li>点击函数助手<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110150600.png" alt="" loading="lazy"></li>
<li>使用 <strong>__P</strong> 函数生成对应属性，并复制。</li>
</ol>
<blockquote>
<p>属性与变量不同。<strong>变量</strong>是<strong>线程的局部变量</strong>；<br/><strong>属性</strong>是<strong>对所有线程都是通用</strong>的，需要使用<code v-pre>__P</code>或<code v-pre>__property</code>函数来引用。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110150657.png" alt="" loading="lazy"><br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110151326.png" alt="" loading="lazy"></p>
</blockquote>
<h5 id="_2-函数添加" tabindex="-1"><a class="header-anchor" href="#_2-函数添加" aria-hidden="true">#</a> 2） 函数添加</h5>
<p>添加线程属性相关的三个函数，分别对应线程组的线程属性。</p>
<p>添加服务器名函数，对应在HTTP请求组件的服务器名称。</p>
<blockquote>
<p><code v-pre>${__P(thread,1)}</code>，表示变量<code v-pre>thread</code>的默认值为 <strong>1</strong><br><br>
<code v-pre>${__P(ramp,1)}</code>，表示变量<code v-pre>ramp</code>的默认值为 <strong>1</strong><br><br>
<code v-pre>${__P(loop,1)}</code>，表示变量<code v-pre>loop</code>的默认值为 <strong>1</strong><br><br>
<code v-pre>${__P(domain,reqres.in)}</code>，表示变量<code v-pre>domain</code>的默认值为 <strong><a href="http://reqres.in" target="_blank" rel="noopener noreferrer">reqres.in<ExternalLinkIcon/></a></strong><br></p>
</blockquote>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230201180235.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-引用" tabindex="-1"><a class="header-anchor" href="#_3-引用" aria-hidden="true">#</a> 3. 引用</h4>
<p>线程组的 线程属性 引用自定义的变量。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110152005.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>HTTP请求组件的 服务器名或IP 引用自定义的变量url。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230201180751.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-验证" tabindex="-1"><a class="header-anchor" href="#_4-验证" aria-hidden="true">#</a> 4. 验证</h4>
<p>添加<strong>聚合报告</strong>验证对应的样本请求数，导航到 线程组(<code v-pre>Thread Group</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 监听器(<code v-pre>Listener</code>) -&gt; 聚合报告(<code v-pre>Aggregate Report</code>)</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110160301.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>jmx</code>文件保存，界面化运行，验证变量是否设置成功。</p>
<blockquote>
<p>样本请求的线程数都为<strong>1</strong>，说明设置成功。因为在用户自定义变量中，<strong>变量</strong>的默认值都为<strong>1</strong>。<br>结果文件<code v-pre>jtl</code>中请求的<code v-pre>url</code>是默认地址。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110161950.png" alt="" loading="lazy"></p>
</blockquote>
<h3 id="方式一-命令行传参数变量" tabindex="-1"><a class="header-anchor" href="#方式一-命令行传参数变量" aria-hidden="true">#</a> 方式一：命令行传参数变量</h3>
<p>执行命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>jmx file<span class="token punctuation">]</span> <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> <span class="token parameter variable">-JthreadNum</span><span class="token operator">=</span>整数 <span class="token parameter variable">-JloopNum</span><span class="token operator">=</span>整数 <span class="token parameter variable">-JrampNum</span><span class="token operator">=</span>整数 <span class="token parameter variable">-Jurl</span><span class="token operator">=</span>服务器域名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-J</code>：<code v-pre>jmeterproperty</code>;定义额外的 <code v-pre>JMeter</code> 属性</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>-J, <span class="token parameter variable">--jmeterproperty</span> <span class="token operator">&lt;</span>argument<span class="token operator">>=</span><span class="token operator">&lt;</span>value<span class="token operator">></span>
Define additional JMeter properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 使用默认域名请求</span>
jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> GETAPI.jmx <span class="token parameter variable">-l</span> get.jtl <span class="token parameter variable">-Jthread</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-Jloop</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-Jramp</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># 更换测试环境的域名请求</span>
jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> GETAPI.jmx <span class="token parameter variable">-l</span> get.jtl <span class="token parameter variable">-Jthread</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-Jloop</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-Jramp</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-Jurl</span><span class="token operator">=</span>ceshiren.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2个线程循环2次，运行完成后对应命令行终端显示：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110170321.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果命令行查看不是很明白直观，可以把结果文件导入到<code v-pre>GUI</code>界面的聚合报告中进行查看。</p>
<p>在聚合报告中导入结果文件<code v-pre>jtl</code>时要注意，首先清空一下结果，不然对应的聚合报告界面样本数是在以前的界面上进行叠加不是直接显示导入的结果文件的样本数。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110170348.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="方式二-脚本" tabindex="-1"><a class="header-anchor" href="#方式二-脚本" aria-hidden="true">#</a> 方式二：脚本</h3>
<p>命令行虽然可以直接更改线程数，但是其实压测时我们每次会是不同的并发数，所以一个压测脚本可能需要在命令行输入多次命令才能完成。</p>
<h4 id="并发数规则" tabindex="-1"><a class="header-anchor" href="#并发数规则" aria-hidden="true">#</a> 并发数规则</h4>
<p>压测脚本中压力增量设定的原则为：<strong>在低并发数区域内可以大增量，在高并发数区域内使用小增量</strong>。</p>
<blockquote>
<p>10 50 100 120 140 150 160 170 175</p>
</blockquote>
<p>具体的并发数值根据被测服务不同而不同</p>
<h4 id="脚本业务流程图" tabindex="-1"><a class="header-anchor" href="#脚本业务流程图" aria-hidden="true">#</a> 脚本业务流程图</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110142435.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="并发数组" tabindex="-1"><a class="header-anchor" href="#并发数组" aria-hidden="true">#</a> 并发数组</h4>
<p>shell脚本设置压测并发数</p>
<blockquote>
<p>thread_num_array = (10 50 100 120 140)</p>
</blockquote>
<h4 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h4>
<ol>
<li>判断对应模版压测脚本<code v-pre>PATH</code>是否存在</li>
<li>读取模版压测脚本写入新生成文件
<ol>
<li>文件名唯一性：{}_tn{}_rt{}_lc{}_h{}</li>
</ol>
</li>
<li>对应字段替换</li>
<li>JMeter命令行运行</li>
</ol>
<h3 id="diy-定制化-jmeter-聚合压测报告" tabindex="-1"><a class="header-anchor" href="#diy-定制化-jmeter-聚合压测报告" aria-hidden="true">#</a> DIY 定制化 JMeter 聚合压测报告</h3>
<p>Aggregate Report 是 JMeter 常用的一个 Listener，中文被翻译为“聚合报告”。</p>
<p>如果大家都是做Web应用的性能测试，例如只有一个登录的请求，那么在Aggregate Report中，会显示一行数据，共有10个字段，含义分别如下。</p>
<p>Label：每个 JMeter 的 element（例如 HTTP Request）都有一个 Name 属性，这里显示的就是 Name 属性的值</p>
<p>#Samples：表示你这次测试中一共发出了多少个请求，如果模拟10个用户，每个用户迭代10次，那么这里显示100</p>
<p>Average：平均响应时间——默认情况下是单个 Request 的平均响应时间，当使用了 Transaction Controller 时，也可以以Transaction 为单位显示平均响应时间</p>
<p>Median：中位数，也就是 50％ 用户的响应时间</p>
<p>90% Line：90％ 用户的响应时间</p>
<p>Note：关于 50％ 和 90％ 并发用户数的含义</p>
<p>Min：最小响应时间</p>
<p>Max：最大响应时间</p>
<p>Error%：本次测试中出现错误的请求的数量/请求的总数</p>
<p>Throughput：吞吐量——默认情况下表示每秒完成的请求数（Request per Second），当使用了 Transaction Controller 时，也可以表示类似 LoadRunner 的Transaction per Second 数</p>
<p>KB/Sec：每秒从服务器端接收到的数据量，相当于LoadRunner中的Throughput/Sec</p>
<p><code v-pre>JMeter</code>在<code v-pre>{jmeter_path}/bin</code>目录新增了<code v-pre>reportgenerator.properties</code>文件保存了所有关于图形化<code v-pre>HTML</code>报告生成模块的默认配置。</p>
<p>要变更配置，建议<strong>不要直接编辑</strong><code v-pre>reportgenerator.properties</code>，而是推荐在<code v-pre>user.properties</code>中去配置和覆盖。</p>
<h4 id="报告标题修改" tabindex="-1"><a class="header-anchor" href="#报告标题修改" aria-hidden="true">#</a> 报告标题修改</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111112934.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">jmeter.reportgenerator.report_title</span><span class="token punctuation">=</span><span class="token value attr-value">Apache JMeter Dashboard</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>report_title</code>:定义报告的标题，标题定义为实际测试项名称/公司名</li>
</ul>
<h5 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h5>
<p>在<code v-pre>user.properties</code>中对其进行覆盖，直接在最后进行配置的追加：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">jmeter.reportgenerator.report_title</span><span class="token punctuation">=</span><span class="token value attr-value">testeru.top</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="聚合报告百分位修改" tabindex="-1"><a class="header-anchor" href="#聚合报告百分位修改" aria-hidden="true">#</a> 聚合报告百分位修改</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111114032.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在<code v-pre>jmeter.properties</code>中，有关于聚合报告中的三个百分位的默认值：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment">#---------------------------------------------------------------------------</span>
<span class="token comment"># Aggregate Report and Aggregate Graph - configuration</span>
<span class="token comment">#---------------------------------------------------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Percentiles to display in reports</span>
<span class="token comment"># Can be float value between 0 and 100</span>
<span class="token comment"># First percentile to display, defaults to 90%</span>
<span class="token comment">#aggregate_rpt_pct1=90</span>
<span class="token comment"># Second percentile to display, defaults to 95%</span>
<span class="token comment">#aggregate_rpt_pct2=95</span>
<span class="token comment"># Second percentile to display, defaults to 99%</span>
<span class="token comment">#aggregate_rpt_pct3=99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="步骤-1" tabindex="-1"><a class="header-anchor" href="#步骤-1" aria-hidden="true">#</a> 步骤</h5>
<p>可以在<code v-pre>user.properties</code>中对其进行覆盖，直接在最后进行配置的追加：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">aggregate_rpt_pct2</span><span class="token punctuation">=</span><span class="token value attr-value">70</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111114408.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="响应断言" tabindex="-1"><a class="header-anchor" href="#响应断言" aria-hidden="true">#</a> 响应断言</h2>
<p>一个正确的脚本不只是有请求，还有对应的请求需要基本的断言，才是一个测试用例。</p>
<h3 id="_200" tabindex="-1"><a class="header-anchor" href="#_200" aria-hidden="true">#</a> 200</h3>
<p>200正常请求通过的响应断言添加：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230131170613.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_404" tabindex="-1"><a class="header-anchor" href="#_404" aria-hidden="true">#</a> 404</h3>
<p>HTTP请求中并不是都返回200的响应状态码，还会返回400、404、500、502等错误，下面演示对应的404状态码的响应断言：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230131170746.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在响应断言中，一般都会直接勾选响应代码或响应信息，然后匹配对应内容。<br>
404状态下请求的响应信息应该是<code v-pre>Not Found</code>，但是为什么运行时就是请求失败？？大家有知道的吗？</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230131171358.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这跟JMeter的自有机制有关，只有当前请求成功「HTTP响应状态码为200的时候」JMeter才会去运行断言-响应断言，也就才会去匹配响应信息「response message」。</p>
<p>HTTP中4xx和5xx开头的响应状态码一般是被认为请求不成功的，那JMeter就直接忽略，请求都不成功就不会走断言组件。</p>
<blockquote>
<p>就类似代码写出了Exception，并且你没有抛出异常，那代码是不会继续往下运行的。</p>
</blockquote>
<p>如果非要断言中匹配4xx和5xx开头的响应状态码，则需要在响应断言组件中勾选上<code v-pre>Ignore status</code>,也就是不管当前的请求响应状态码是什么，JMeter都会认为是请求成功。既然请求成功，则可以直接判断响应信息「response message」。</p>
<p>以上就是，断言中判断请求失败的响应代码问题<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230131165028.png" alt="" loading="lazy"></p>
<p><strong>解决</strong>：</p>
<p>忽略状态，强制性让JMeter认为当前请求是成功的。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230202104851.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2>
<h3 id="性能测试在什么环境开展" tabindex="-1"><a class="header-anchor" href="#性能测试在什么环境开展" aria-hidden="true">#</a> 性能测试在什么环境开展？</h3>
<p>性能测试不能与功能测试在同一个测试环境，需要搭建完全的一套独立的环境，这时就需要运维帮忙搭建环境，研发去同步部署环境。</p>
<p>搭建一套独立的性能测试环境进行测试，硬件设施尽量和线上环境保持一致</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230201194759.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="性能测试发现的问题-是开发解决-还是你解决" tabindex="-1"><a class="header-anchor" href="#性能测试发现的问题-是开发解决-还是你解决" aria-hidden="true">#</a> 性能测试发现的问题，是开发解决，还是你解决？</h3>
<p>产研测拉会聊天，确认需求确认场景确认指标后形成文档申请资源搭建环境编写脚本，执行测试然后盯着系统参数接口参数，有问题能解决解决不行找研发。最后输出报告附上结果分析</p>
<ul>
<li>与研发、产品确认需求及指标</li>
<li>申请性能资源搭建环境</li>
<li>测试编写脚本</li>
<li>执行性能测试分析性能参数</li>
<li>若涉及调优，需要与开发、DB、运维一起分析</li>
</ul>
<p>7.与开发，架构，DB 一起去看测试过程，调优</p>
<p>测试：</p>
<p>性能方案、测试脚本编写</p>
<p>性能脚本执行</p>
<p>调优需要协同</p>
<p>性能报告的输出</p>
<h3 id="怎样分析性能测试结果" tabindex="-1"><a class="header-anchor" href="#怎样分析性能测试结果" aria-hidden="true">#</a> 怎样分析性能测试结果</h3>
<p>1）首先查看结果概况，查看事物有没有大面积失败，有没有大量的 Error，响应时间有没有异常波动，如果都正常，表明测试结果可信</p>
<p>2）分析性能指标，比如，响应时间，事务通过率，CPU 等指标是否满足需求；如果测试结果不可信，分析异常的原因，开发修改后进行回归测试</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>Selenium Grid 概念</li>
</ul>
<p><a href="http://www.ishatrainingsolutions.org/2020/06/30/jmeter-html-dashboard-report-generation/" target="_blank" rel="noopener noreferrer">http://www.ishatrainingsolutions.org/2020/06/30/jmeter-html-dashboard-report-generation/<ExternalLinkIcon/></a></p>
<h1 id="静默压测生成html报告-1" tabindex="-1"><a class="header-anchor" href="#静默压测生成html报告-1" aria-hidden="true">#</a> 静默压测生成HTML报告</h1>
<h2 id="课程目标-1" tabindex="-1"><a class="header-anchor" href="#课程目标-1" aria-hidden="true">#</a> 课程目标</h2>
<ol>
<li></li>
</ol>
<h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h2>
<p>查看<a href="https://jmeter.apache.org/usermanual/generating-dashboard.html" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>，对应的显示一个HTML的文件报告，但是在这个页面并没有告诉我们应该怎样去生成这样的报告，下面主要就给大家讲解一下对应的如何自动生成HTML报告并且可以自动的多并发执行。</p>
<h3 id="静默压测-1" tabindex="-1"><a class="header-anchor" href="#静默压测-1" aria-hidden="true">#</a> 静默压测</h3>
<p>什么是静默压测呢？</p>
<p>其实我们打开JMeter在界面上对应进行脚本调试运行的时候，这就是一个GUI模式。对应的不使用GUI界面化对脚本进行运行就是静默压测。</p>
<p>脱离了GUI模式，压测脚本运行更稳定。</p>
<h3 id="为什么不用gui模式-1" tabindex="-1"><a class="header-anchor" href="#为什么不用gui模式-1" aria-hidden="true">#</a> 为什么不用GUI模式</h3>
<ul>
<li>对资源消耗大，浪费严重
<blockquote>
<p>有时压测链接超时，有可能不是对应接受请求服务被压爆了。而是我们的压力机出现了问题。<br>一般的压力机配置，在GUI模式下（Windows），最多支持300左右的模拟请求线程，再大的话，容易造成卡顿、无响应等情况，这是JMeter其本身的机制和硬件配置。</p>
</blockquote>
</li>
<li>GUI不用于负载测试，仅仅用于测试脚本的创建及调试</li>
<li>Linux系统上很难打开一个GUI界面，一般都是命令行使用
<blockquote>
<p>一般服务器都是通过命令行终端，ssh输入对应的命令进行链接操作，很少把Linux服务器做成一个UI界面化的系统去进行操作。</p>
</blockquote>
</li>
</ul>
<h2 id="生成html报告步骤-1" tabindex="-1"><a class="header-anchor" href="#生成html报告步骤-1" aria-hidden="true">#</a> 生成HTML报告步骤</h2>
<p>首先，我们先看一下对应生成HTML报告的步骤，依据以下步骤来生成：</p>
<ol>
<li>压测脚本创建 - 使用监听器查看结果（树或表中的结果）</li>
<li>GUI界面运行脚本</li>
<li>将 <code v-pre>jmx</code> 文件运行到非 <code v-pre>GUI</code> 模式并生成 <code v-pre>HTML</code> 报告</li>
</ol>
<h3 id="前置条件-1" tabindex="-1"><a class="header-anchor" href="#前置条件-1" aria-hidden="true">#</a> 前置条件</h3>
<ol>
<li>
<p><code v-pre>Java</code>环境安装配置成功。Java 8+，建议jdk11。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230106140728.png" alt="" loading="lazy"></p>
</li>
<li>
<p><code v-pre>Apache JMeter</code>下载安装成功。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230106140822.png" alt="" loading="lazy"></p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bew <span class="token function">install</span> jmeter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认安装的路径为<code v-pre>/usr/local/Cellar/jmeter/5.5</code>。</p>
<p>如果满足以上条件，就可以进行对应的压测脚本的创建及运行。</p>
<h3 id="_1-压测脚本创建-1" tabindex="-1"><a class="header-anchor" href="#_1-压测脚本创建-1" aria-hidden="true">#</a> 1. 压测脚本创建</h3>
<p>安装<code v-pre>JMeter</code>，以<code v-pre>GUI</code>模式启动<code v-pre>JMeter</code>并构建测试计划。</p>
<p>如果配置了全局环境变量则直接命令行输入<code v-pre>jmeter</code>启动<code v-pre>JMeter</code>的界面；</p>
<p>如果没有配置全局变量则命令行<code v-pre>cd</code>到<code v-pre>{jmeter_path}/bin</code>路径下，再输入<code v-pre>jmeter</code>以启动<code v-pre>JMeter</code>的界面。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230106115317.png" alt="" loading="lazy"></p>
<h5 id="报错-1" tabindex="-1"><a class="header-anchor" href="#报错-1" aria-hidden="true">#</a> 报错</h5>
<p>配置完环境变量后，对应的命令行打开还是不能启动脚本，命令行提示：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter: Permission denied【拒绝访问】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方案</strong>：给<code v-pre>jmeter</code>启动脚本增加权限。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> +x jmeter

<span class="token comment"># 移除对应的执行权限</span>
<span class="token function">chmod</span> <span class="token parameter variable">-x</span> jmeter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>启动JMeter的界面化，其实就是启动的<code v-pre>{jmeter_path}/bin</code>下的<code v-pre>jmeter</code>脚本，Mac/Linux系统下是jmeter，Window系统下是jmeter.bat；<br>看一下脚本的内容：</p>
</blockquote>
<ul>
<li><code v-pre>#! /bin/sh</code>：说明是一个shell脚本。</li>
<li><code v-pre>JAVA_HOME</code>：电脑的环境变量需要配置该变量。</li>
<li><code v-pre>MINIMAL_VERSION=8</code>：启动JMeter的最低Java版本是8。</li>
<li><code v-pre>JAVA9_OPTS=</code>：JMeter也可以使用Java9,但是使用9的时候对应启动命令参数就有变化。</li>
<li><code v-pre>: &quot;${HEAP:=&quot;-Xms1g -Xmx1g -XX:MaxMetaspaceSize=256m&quot;}&quot;</code>：JMeter使用的Java环境的基本堆大小。可以修改。</li>
<li><code v-pre>: &quot;${JMETER_LANGUAGE:=&quot;-Duser.language=en -Duser.region=EN&quot;}&quot;</code>：默认的语言是英语，可以修改为中文。</li>
</ul>
<h4 id="_1-打开jmeter并添加线程组-1" tabindex="-1"><a class="header-anchor" href="#_1-打开jmeter并添加线程组-1" aria-hidden="true">#</a> 1）打开JMeter并添加线程组</h4>
<p>要添加线程组，测试计划(<code v-pre>Test Plan</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 线程(<code v-pre>Threads</code>) -&gt; 线程组(<code v-pre>Thread Group</code>)<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107092806.png" alt="" loading="lazy"></p>
<h4 id="_2-添加http请求-1" tabindex="-1"><a class="header-anchor" href="#_2-添加http请求-1" aria-hidden="true">#</a> 2）添加HTTP请求</h4>
<p>导航到 线程组(<code v-pre>Thread Group</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 采样器(<code v-pre>Sampler</code>) -&gt; HTTP 请求(<code v-pre>HTTP Request</code>)</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107094231.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-http请求编写-1" tabindex="-1"><a class="header-anchor" href="#_3-http请求编写-1" aria-hidden="true">#</a> 3）HTTP请求编写</h4>
<p>接下来搜索可在 Internet 上免费获得的<a href="https://reqres.in/" target="_blank" rel="noopener noreferrer">Reqres API<ExternalLinkIcon/></a>。我们将以 Reqres API 为例。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107100649.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>GET请求如下：<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107100755.png" alt="" loading="lazy"></p>
<p>现在你有了API，从链接中找出<strong>服务器名称</strong>、<strong>路径</strong>和<strong>参数</strong>。在JMeter 测试计划的 HTTP 请求中复制这些值。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107100941.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-查看测试结果-1" tabindex="-1"><a class="header-anchor" href="#_4-查看测试结果-1" aria-hidden="true">#</a> 4）查看测试结果</h4>
<p>添加一个监听器（简单的<strong>数据写入器</strong>）并将结果存储在csv文件中。<br>
对于添加侦听器，导航到 测试计划(<code v-pre>Test Plan</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 侦听器(<code v-pre>Listener</code>)  -&gt; 查看结果树(<code v-pre>View Results Tree</code>)</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107101442.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>每个监听器中，都会有一个<strong>所有数据写入一个文件</strong>的功能。在创建查看结果树时需要对写出的文件地址进行配置，选择本地任意一个位置后面跟上数据输出的文件名。</p>
<p>我们可以从弹窗的文件类型中看到，支持的文件类型有三种：<code v-pre>xml</code>、<code v-pre>jtl</code>、<code v-pre>csv</code>。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230108121815.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>哪种类型是JMeter默认的呢？<br>
打开<code v-pre>{jmeter_path}/bin/jmeter.properties</code>文件，可以看到<code v-pre>output_format</code>的参数值默认为<code v-pre>csv</code>，所以<code v-pre>CSV</code>是JMeter的默认类型。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#jmeter.save.saveservice.output_format=csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们选择一个路径时，可以选择<strong>已存在的文件</strong>，也可以选择<strong>未存在的文件</strong>。文件名可以以<code v-pre>.csv</code>或<code v-pre>.jtl</code>结尾，本文使用<code v-pre>.jtl</code>结尾文件。</p>
<p>注意⚠️：建议使用<strong>未存在</strong>文件。</p>
<blockquote>
<p>JMeter默认参数配置中，<code v-pre>resultcollector.action_if_file_exists=ASK</code>，默认是询问用户。还有<code v-pre>APPEND</code>，<code v-pre>DELETE</code>选择使用。</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># Used to control what happens when you start a test and
# have listeners that could overwrite existing result files
# Possible values:
# ASK : Ask user 询问用户
# APPEND : Append results to existing file 在已经存在文件后追加结果
# DELETE : Delete existing file and start a new file  删除已经存在的文件并创建一个新的
#resultcollector.action_if_file_exists=ASK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>若文件为已存在的，则在运行时会弹窗提示，弹窗提示如下图：</p>
</blockquote>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230108121415.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意⚠️：一般请求的参数化使用的是<code v-pre>csv</code>文件，压测结果存储为<code v-pre>jtl</code>文件，进行区分，不建议使用<code v-pre>xml</code>存储结果。</p>
<blockquote>
<p>因为XML结果文件不能像csv、jtl一样直接命令行生成HTML报告，如果生成还需要与ant集成。</p>
</blockquote>
<h3 id="_2-gui界面运行脚本-1" tabindex="-1"><a class="header-anchor" href="#_2-gui界面运行脚本-1" aria-hidden="true">#</a> 2. GUI界面运行脚本</h3>
<h4 id="_5-运行-1" tabindex="-1"><a class="header-anchor" href="#_5-运行-1" aria-hidden="true">#</a> 5）运行</h4>
<p>保存压测脚本 (<code v-pre>.jmx</code>) 并运行它。只需单击<strong>绿色按钮</strong>或快捷键{<strong>Window</strong>}<code v-pre>Ctrl+R</code>/{<strong>Mac</strong>}<code v-pre>Command+R</code>即可运行。</p>
<p><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230107101938.png" alt="" loading="lazy"><br>
上面的测试结果显示了HTTP 请求服务器的请求和响应。</p>
<h4 id="结果文件查看-1" tabindex="-1"><a class="header-anchor" href="#结果文件查看-1" aria-hidden="true">#</a> 结果文件查看</h4>
<p>默认配置下，jtl文件保存的字段为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>timeStamp,elapsed,label,responseCode,responseMessage,threadName,dataType,success,failureMessage,bytes,sentBytes,grpThreads,allThreads,URL,Latency,IdleTime,Connect
1673149864221,6824,GET API,200,OK,Thread Group 1-1,text,true,,1744,123,1,1,https://reqres.in/api/users?page=2,6823,0,1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeStamp</td>
<td>时间戳，毫秒；如：1673149864221</td>
</tr>
<tr>
<td>elapsed</td>
<td>耗时，毫秒；从发送请求到收到最后一个响应，所花费的时间；不包括渲染请求所花费的时间，同时也不包括处理客户端脚本所花费的时间</td>
</tr>
<tr>
<td>label</td>
<td>取样器名称 如：GET API</td>
</tr>
<tr>
<td>responseCode</td>
<td>HTTP响应code码；如：200</td>
</tr>
<tr>
<td>responseMessage</td>
<td>响应的message消息；如：OK</td>
</tr>
<tr>
<td>threadName</td>
<td>线程名；如：Thread Group 1-1</td>
</tr>
<tr>
<td>dataType</td>
<td>参数的数据类型；</td>
</tr>
<tr>
<td>success</td>
<td>请求是否成功；</td>
</tr>
<tr>
<td>failureMessage</td>
<td>响应的失败的message消息；</td>
</tr>
<tr>
<td>bytes</td>
<td>请求样本字节数</td>
</tr>
<tr>
<td>sentBytes</td>
<td>发送样本字节数</td>
</tr>
<tr>
<td>grpThreads</td>
<td>当前线程组的线程数</td>
</tr>
<tr>
<td>allThreads</td>
<td>所有线程组的线程数</td>
</tr>
<tr>
<td>URL</td>
<td>请求地址路径</td>
</tr>
<tr>
<td>Latency</td>
<td>延迟的耗时</td>
</tr>
<tr>
<td>IdleTime</td>
<td>空闲时间，毫秒；</td>
</tr>
<tr>
<td>Connect</td>
<td>连接建立的时间</td>
</tr>
</tbody>
</table>
<p>在这里，对应的请求和响应的body参数没有写入文件，因为jtl文件中这些参数主要是为了做性能分析生成图表进行使用。</p>
<h3 id="_3-生成报告-1" tabindex="-1"><a class="header-anchor" href="#_3-生成报告-1" aria-hidden="true">#</a> 3. 生成报告</h3>
<p>生成报告有两种方式：一种为使用GUI模式，一种使用命令行模式。</p>
<h4 id="_1-gui-模式生成报告-1" tabindex="-1"><a class="header-anchor" href="#_1-gui-模式生成报告-1" aria-hidden="true">#</a> 1) GUI 模式生成报告</h4>
<ul>
<li>也就是GUI界面<strong>从独立的 csv/jtl 文件创建报告</strong>。</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230108150435.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230109170459.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p><code v-pre>Results file</code> 浏览选中存储结果的 <code v-pre>csv</code>/<code v-pre>jtl</code> 文件路径</p>
</li>
<li>
<p><code v-pre>user.properties</code> 浏览选中<code v-pre>{jmeter_path}/bin/jmeter.properties</code>文件</p>
</li>
<li>
<p><code v-pre>Output directory</code> 浏览输入<code v-pre>HTML</code>报告的文件夹路径</p>
<blockquote>
<p>html文件夹可为已存在也可为不存在文件夹；<br>如果存在则生成的文件直接放入该文件夹下，如果不存在则会生成该文件夹再放入生成的报告文件。</p>
</blockquote>
</li>
<li>
<p>点击底部<code v-pre>Gererate report</code>，就可以生成 <code v-pre>HTML</code> 到<code v-pre>Output directory</code>的路径文件夹下。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230109171455.png" alt="" loading="lazy"></p>
</li>
</ol>
<h5 id="报错1-1" tabindex="-1"><a class="header-anchor" href="#报错1-1" aria-hidden="true">#</a> 报错1</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Generating report
File '/**/api.jtl' does not contain the field names header, ensure the jmeter.save.saveservice.* properties are the same as when the CSV file was created or the file may be read incorrectly when generating report
An error occurred: null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>由于结果文件没有头信息导致。</li>
</ul>
<p><strong>解决方案</strong>： 需要在结果文件<code v-pre>jtl/csv</code>中添加上以下对应头信息：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>timeStamp,elapsed,label,responseCode,responseMessage,threadName,dataType,success,failureMessage,bytes,sentBytes,grpThreads,allThreads,URL,Latency,IdleTime,Connect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="报错2-1" tabindex="-1"><a class="header-anchor" href="#报错2-1" aria-hidden="true">#</a> 报错2</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Output directory :The directory /**/html isnt empty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>若生成HTML的文件夹已存在，需要为空文件夹，否则生成报告会报错。</li>
</ul>
<p><strong>解决方案</strong>： 选中HTML的文件夹为空文件夹。</p>
<h4 id="_2-命令行模式生成报告-1" tabindex="-1"><a class="header-anchor" href="#_2-命令行模式生成报告-1" aria-hidden="true">#</a> 2) 命令行模式生成报告</h4>
<p>GUI界面只是为了脚本进行调试时使用，如果想要进行压测，则需要在压测机上使用命令行的模式运行jmx脚本。</p>
<p>可以看到JMeter在启动时，命令行输出打印一条命令，也就是静默压测的命令行。</p>
<p>静默压测，命令可直接⽣成对应HTML压测报告。</p>
<ul>
<li>过程
<ul>
<li>jtl_file的原始数据 ——&gt; html压测报告</li>
</ul>
</li>
<li>优点
<ul>
<li>快，⽅便，省事，节约时间，美观</li>
</ul>
</li>
</ul>
<h5 id="测试脚本生成html报告-1" tabindex="-1"><a class="header-anchor" href="#测试脚本生成html报告-1" aria-hidden="true">#</a> 测试脚本生成HTML报告</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>jmx file<span class="token punctuation">]</span> <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token punctuation">[</span>Path to web report folder<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> GETAPI.jmx <span class="token parameter variable">-l</span> get.jtl <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230109185313.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="命令行file含义-1" tabindex="-1"><a class="header-anchor" href="#命令行file含义-1" aria-hidden="true">#</a> 命令行file含义</h5>
<ul>
<li><code v-pre>jmx file</code>：<code v-pre>JMeter</code>压测脚本文件
<ul>
<li>压测脚本的运行逻辑及流程控制过程都在<code v-pre>jmx file</code>中</li>
</ul>
</li>
<li><code v-pre>results file</code>：<code v-pre>JMeter</code>压测脚本的结果储存文件
<ul>
<li><code v-pre>JMeter</code>静默压测生成的压测数据，原始的各种压测数据文件</li>
</ul>
<blockquote>
<p>jtl结果文件需要为空文件，否则命令行运行报错：``</p>
</blockquote>
</li>
<li><code v-pre>Path to web report folder</code>：<code v-pre>JMeter</code>压测的<code v-pre>HTML</code>报告文件
<ul>
<li>根据<code v-pre>JMeter</code>静默压测的压测数据生成<code v-pre>HTML</code>报告文件夹</li>
<li>文件夹可为存在也可为不存在，若存在必为空文件夹。</li>
</ul>
</li>
</ul>
<h5 id="运行报错-1" tabindex="-1"><a class="header-anchor" href="#运行报错-1" aria-hidden="true">#</a> 运行报错</h5>
<p>示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> GETAPI.jmx <span class="token parameter variable">-l</span> get.jtl <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一次运行该代码没有问题，第二次运行时报错：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>An error occurred: Cannot <span class="token function">write</span> to <span class="token string">'/**/html'</span> as folder is not empty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>原因</strong>：生成报告文件<code v-pre>html</code>时报错，由于生成报告的文件夹不是空文件夹。</p>
<p><strong>解决方案</strong>： 需要<strong>重新指定创建空文件夹</strong>。</p>
<h5 id="参数含义-1" tabindex="-1"><a class="header-anchor" href="#参数含义-1" aria-hidden="true">#</a> 参数含义</h5>
<ul>
<li><code v-pre>-n</code>：<code v-pre>nongui</code>;非 GUI 模式，在非 GUI 模式下运行 JMeter 压测脚本。</li>
<li><code v-pre>-t</code>：<code v-pre>testfile</code>;指定JMeter脚本，要运行的 JMeter 测试脚本文件。</li>
<li><code v-pre>-l</code>：<code v-pre>logfile</code>;JMeter压测结果文件，记录结果样本的文件。</li>
<li><code v-pre>-e</code>：<code v-pre>reportatendofloadtests</code>;测试结束后生成报告。
<blockquote>
<p>此时只是生成对应的结果报告HTML，但是并没有保存在硬盘上。</p>
</blockquote>
</li>
<li><code v-pre>-o</code>：<code v-pre>reportoutputfolder</code>;报告的输出文件地址。
<blockquote>
<p>需要把HTML报告保存在当前电脑硬盘上，则需要添加-o参数进行保存。</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>若想要查看<code v-pre>JMeter</code>的所有命令行参数，则在终端输入<code v-pre>jmeter -</code>即可。</p>
</blockquote>
<h5 id="静默压测生成结果文件-1" tabindex="-1"><a class="header-anchor" href="#静默压测生成结果文件-1" aria-hidden="true">#</a> 静默压测生成结果文件</h5>
<p>只想通过静默压测生成对应的结果文件，不需生成<code v-pre>HTML</code>报告。</p>
<p><code v-pre>HTML</code>报告等所有的压测脚本运行完后，统一对结果文件生成报告，则使用以下代码进行压测结果的存储：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>jmx file<span class="token punctuation">]</span> <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> GETAPI.jmx <span class="token parameter variable">-l</span> get1.jtl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令行运行如下图：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111175229.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到在当前文件夹下生成了<code v-pre>get1.jtl</code>,并且只是生成该文件，并没有生成<code v-pre>HTML</code>报告的文件夹。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111174904.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="结果文件生成报告-1" tabindex="-1"><a class="header-anchor" href="#结果文件生成报告-1" aria-hidden="true">#</a> 结果文件生成报告</h5>
<p>已经有了多个压测结果文件<code v-pre>jtl</code>，想要直接对具体的结果文件<code v-pre>jtl</code>生成对应的<code v-pre>HTML</code>报告，则可以使用如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-g</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token punctuation">[</span>Path to web report folder<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-g</code>：指定测试结果文件路径，仅用于生成测试报表，参数是csv结果文件</li>
</ul>
<blockquote>
<p>拿到结果文件直接生成HTML报告，不需要再发送一次脚本请求。</p>
</blockquote>
<p>示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-g</span> get1.jtl <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> html1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111175827.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到在当前文件夹下生成了名称为<code v-pre>html1</code>的<code v-pre>HTML</code>报告的文件夹。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111175939.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="自动化压测-1" tabindex="-1"><a class="header-anchor" href="#自动化压测-1" aria-hidden="true">#</a> 自动化压测</h2>
<p>JMeter压测脚本其实就是一个xml结构的文件，里面根据标签把GUI界面的组件和参数进行拼接。</p>
<h4 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1" aria-hidden="true">#</a> 问题</h4>
<p>每次并发线程数更改就需要 使用<code v-pre>JMeter</code>的<code v-pre>GUI</code>界面或打开<code v-pre>jmx</code>文件找到线程组件的标签去更改线程数，造成不必要的时间成本上的浪费。</p>
<h4 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1" aria-hidden="true">#</a> 解决方案</h4>
<p>可以在脚本内自定义对应线程变量，引用后通过参数传递对应值给声明的变量即可进行自动化的压测。</p>
<p>想要对线程组件的变量进行自定义，首先要了解对应的压测脚本的结构，下面我们先来看一下对应的JMX脚本的结构的简单介绍：</p>
<h3 id="jmx脚本解读-1" tabindex="-1"><a class="header-anchor" href="#jmx脚本解读-1" aria-hidden="true">#</a> jmx脚本解读</h3>
<p>jmx脚本按结构自上而下：</p>
<h4 id="测试计划-1" tabindex="-1"><a class="header-anchor" href="#测试计划-1" aria-hidden="true">#</a> 测试计划</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110112510.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110112854.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>其中<code v-pre>&lt;jmeterTestPlan version=&quot;1.2&quot; properties=&quot;5.0&quot; jmeter=&quot;5.5&quot;&gt;</code>标签中的<code v-pre>jmeter=&quot;5.5&quot;</code>代表的是：<code v-pre>JMeter</code>版本是<code v-pre>5.5</code>,如果你使用的是其他的版本则会显示你使用的版本号。</p>
<h4 id="线程组-1" tabindex="-1"><a class="header-anchor" href="#线程组-1" aria-hidden="true">#</a> 线程组</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110115310.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li><code v-pre>HTTPSampler</code>：HTTP取样器</li>
</ul>
<h3 id="方式" tabindex="-1"><a class="header-anchor" href="#方式" aria-hidden="true">#</a> 方式</h3>
<p>自定义线程组相关变量名，传给变量名参数值有两种方式。</p>
<p>方式一：直接<strong>命令行</strong>进行参数值传递；</p>
<blockquote>
<p>使用非<code v-pre>GUI</code>模式执行<code v-pre>JMeter</code>压测脚本，若需更改参数，必须编辑<code v-pre>jmx</code>文件，找到对应的变量进行修改，比较麻烦。<br><br>
因此，可以<code v-pre>GUI</code>界面进行参数化一些常用的变量，直接在<code v-pre>JMeter</code>命令行对该变量参数值进行设置。</p>
</blockquote>
<p>方式二：编写<strong>脚本</strong>进行参数值传递。{<code v-pre>shell</code>/<code v-pre>python</code>}</p>
<p>无论是<strong>命令行</strong>进行参数值传递还是<strong>脚本</strong>进行参数值传递，它们的前置条件是都需要在<code v-pre>GUI</code>界面设置传入参数的变量声明。</p>
<h3 id="自定义变量" tabindex="-1"><a class="header-anchor" href="#自定义变量" aria-hidden="true">#</a> 自定义变量</h3>
<h4 id="_1-添加用户自定义变量-1" tabindex="-1"><a class="header-anchor" href="#_1-添加用户自定义变量-1" aria-hidden="true">#</a> 1. 添加用户自定义变量</h4>
<p>导航到 线程组(<code v-pre>Thread Group</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 配置元件(<code v-pre>Config Element</code>) -&gt; 用户定义的变量(<code v-pre>User Defined Variables</code>)</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110150040.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-添加自定义变量表达式-1" tabindex="-1"><a class="header-anchor" href="#_2-添加自定义变量表达式-1" aria-hidden="true">#</a> 2. 添加自定义变量表达式</h4>
<p>定义<strong>3</strong>个变量和变量对应的默认值。</p>
<h5 id="_1-函数表达式生成-1" tabindex="-1"><a class="header-anchor" href="#_1-函数表达式生成-1" aria-hidden="true">#</a> 1） 函数表达式生成</h5>
<ol>
<li>点击函数助手<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110150600.png" alt="" loading="lazy"></li>
<li>使用__P函数生成对应属性，并复制。</li>
</ol>
<blockquote>
<p>属性与变量不同。<strong>变量</strong>是<strong>线程的局部变量</strong>；<strong>属性</strong>是<strong>对所有线程都是通用</strong>的，需要使用<code v-pre>__P</code>或<code v-pre>__property</code>函数来引用。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110150657.png" alt="" loading="lazy"><br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110151326.png" alt="" loading="lazy"></p>
</blockquote>
<h5 id="_2-函数添加-1" tabindex="-1"><a class="header-anchor" href="#_2-函数添加-1" aria-hidden="true">#</a> 2） 函数添加</h5>
<p>添加三个函数，对应分别对应线程组的线程属性。</p>
<blockquote>
<p><code v-pre>${__P(thread,1)}</code>，表示变量<code v-pre>thread</code>的默认值为<strong>1</strong></p>
</blockquote>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110151837.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-线程组引用" tabindex="-1"><a class="header-anchor" href="#_3-线程组引用" aria-hidden="true">#</a> 3. 线程组引用</h4>
<p>线程组的线程属性引用上面自定义的变量。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110152005.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-验证-1" tabindex="-1"><a class="header-anchor" href="#_4-验证-1" aria-hidden="true">#</a> 4. 验证</h4>
<p>添加聚合报告验证对应的样本请求数，导航到 线程组(<code v-pre>Thread Group</code>) -&gt; 添加(<code v-pre>Add</code>) -&gt; 监听器(<code v-pre>Listener</code>) -&gt; 聚合报告(<code v-pre>Aggregate Report</code>)</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110160301.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>jmx</code>文件保存，界面化运行，验证变量是否设置成功。</p>
<blockquote>
<p>样本请求的线程数都为<strong>1</strong>，说明设置成功。因为在用户自定义变量中，<strong>变量</strong>的默认值都为<strong>1</strong>。<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110161950.png" alt="" loading="lazy"></p>
</blockquote>
<h3 id="命令行传参" tabindex="-1"><a class="header-anchor" href="#命令行传参" aria-hidden="true">#</a> 命令行传参</h3>
<p>执行命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>jmx file<span class="token punctuation">]</span> <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> <span class="token parameter variable">-JthreadNum</span><span class="token operator">=</span>整数 <span class="token parameter variable">-JloopNum</span><span class="token operator">=</span>整数 <span class="token parameter variable">-JrampNum</span><span class="token operator">=</span>整数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-J</code>：<code v-pre>jmeterproperty</code>;定义额外的 <code v-pre>JMeter</code> 属性</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>-J, <span class="token parameter variable">--jmeterproperty</span> <span class="token operator">&lt;</span>argument<span class="token operator">>=</span><span class="token operator">&lt;</span>value<span class="token operator">></span>
Define additional JMeter properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>/Users/gigai/apache-jmeter-5.5/bin/jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> GETAPI.jmx <span class="token parameter variable">-l</span> get.jtl <span class="token parameter variable">-Jthread</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-Jloop</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-Jramp</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2个线程循环2次，运行完成后对应命令行终端显示：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110170321.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果命令行查看不是很明白直观，可以把结果文件导入到GUI界面的聚合报告中进行查看。</p>
<p>在聚合报告中导入结果文件jtl时要注意，首先清空一下结果，不然对应的聚合报告界面样本数是在以前的界面上进行叠加不是直接显示导入的结果文件的样本数。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110170348.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="脚本-1" tabindex="-1"><a class="header-anchor" href="#脚本-1" aria-hidden="true">#</a> 脚本</h3>
<p>命令行虽然可以直接更改线程数，但是其实压测时我们每次会是不同的并发数，所以一个压测脚本可能需要在命令行输入多次命令才能完成。</p>
<h4 id="并发数规则-1" tabindex="-1"><a class="header-anchor" href="#并发数规则-1" aria-hidden="true">#</a> 并发数规则</h4>
<p>压测脚本中压力增量设定的原则为：<strong>在低并发数区域内可以大增量，在高并发数区域内使用小增量</strong>。</p>
<blockquote>
<p>10 50 100 120 140 150 160 170 175</p>
</blockquote>
<p>具体的并发数值根据被测服务不同而不同</p>
<h4 id="脚本业务流程图-1" tabindex="-1"><a class="header-anchor" href="#脚本业务流程图-1" aria-hidden="true">#</a> 脚本业务流程图</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230110142435.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="并发数组-1" tabindex="-1"><a class="header-anchor" href="#并发数组-1" aria-hidden="true">#</a> 并发数组</h4>
<ol>
<li>在脚本中设置模版压测脚本的地址</li>
<li>获取当前运行的系统环境并赋值给变量os_type</li>
<li>设置压测并发数
<blockquote>
<p>thread_num_array = (10 50 100 120 140)</p>
</blockquote>
</li>
</ol>
<h4 id="脚本-2" tabindex="-1"><a class="header-anchor" href="#脚本-2" aria-hidden="true">#</a> 脚本</h4>
<ol>
<li>判断对应模版压测脚本<code v-pre>PATH</code>是否存在</li>
<li>读取模版压测脚本写入新生成文件</li>
<li>对应字段替换使用$thread</li>
<li>文件名唯一性：使用<code v-pre>sample_并发数</code>。比如：GETAPI_10.jmx</li>
</ol>
<h3 id="diy-定制化-jmeter-聚合压测报告-1" tabindex="-1"><a class="header-anchor" href="#diy-定制化-jmeter-聚合压测报告-1" aria-hidden="true">#</a> DIY 定制化 JMeter 聚合压测报告</h3>
<p>Aggregate Report 是 JMeter 常用的一个 Listener，中文被翻译为“聚合报告”。</p>
<p>如果大家都是做Web应用的性能测试，例如只有一个登录的请求，那么在Aggregate Report中，会显示一行数据，共有10个字段，含义分别如下。</p>
<p>Label：每个 JMeter 的 element（例如 HTTP Request）都有一个 Name 属性，这里显示的就是 Name 属性的值</p>
<p>#Samples：表示你这次测试中一共发出了多少个请求，如果模拟10个用户，每个用户迭代10次，那么这里显示100</p>
<p>Average：平均响应时间——默认情况下是单个 Request 的平均响应时间，当使用了 Transaction Controller 时，也可以以Transaction 为单位显示平均响应时间</p>
<p>Median：中位数，也就是 50％ 用户的响应时间</p>
<p>90% Line：90％ 用户的响应时间</p>
<p>Note：关于 50％ 和 90％ 并发用户数的含义</p>
<p>Min：最小响应时间</p>
<p>Max：最大响应时间</p>
<p>Error%：本次测试中出现错误的请求的数量/请求的总数</p>
<p>Throughput：吞吐量——默认情况下表示每秒完成的请求数（Request per Second），当使用了 Transaction Controller 时，也可以表示类似 LoadRunner 的Transaction per Second 数</p>
<p>KB/Sec：每秒从服务器端接收到的数据量，相当于LoadRunner中的Throughput/Sec</p>
<p><code v-pre>JMeter</code>在<code v-pre>{jmeter_path}/bin</code>目录新增了<code v-pre>reportgenerator.properties</code>文件保存了所有关于图形化<code v-pre>HTML</code>报告生成模块的默认配置。</p>
<p>要变更配置，建议<strong>不要直接编辑</strong><code v-pre>reportgenerator.properties</code>，而是推荐在<code v-pre>user.properties</code>中去配置和覆盖。</p>
<h4 id="报告标题修改-1" tabindex="-1"><a class="header-anchor" href="#报告标题修改-1" aria-hidden="true">#</a> 报告标题修改</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111112934.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">jmeter.reportgenerator.report_title</span><span class="token punctuation">=</span><span class="token value attr-value">Apache JMeter Dashboard</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>report_title</code>:定义报告的标题，标题定义为实际测试项名称/公司名</li>
</ul>
<h5 id="步骤-2" tabindex="-1"><a class="header-anchor" href="#步骤-2" aria-hidden="true">#</a> 步骤</h5>
<p>在<code v-pre>user.properties</code>中对其进行覆盖，直接在最后进行配置的追加：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">jmeter.reportgenerator.report_title</span><span class="token punctuation">=</span><span class="token value attr-value">testeru.top</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="聚合报告百分位修改-1" tabindex="-1"><a class="header-anchor" href="#聚合报告百分位修改-1" aria-hidden="true">#</a> 聚合报告百分位修改</h4>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111114032.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在<code v-pre>jmeter.properties</code>中，有关于聚合报告中的三个百分位的默认值：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment">#---------------------------------------------------------------------------</span>
<span class="token comment"># Aggregate Report and Aggregate Graph - configuration</span>
<span class="token comment">#---------------------------------------------------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Percentiles to display in reports</span>
<span class="token comment"># Can be float value between 0 and 100</span>
<span class="token comment"># First percentile to display, defaults to 90%</span>
<span class="token comment">#aggregate_rpt_pct1=90</span>
<span class="token comment"># Second percentile to display, defaults to 95%</span>
<span class="token comment">#aggregate_rpt_pct2=95</span>
<span class="token comment"># Second percentile to display, defaults to 99%</span>
<span class="token comment">#aggregate_rpt_pct3=99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="步骤-3" tabindex="-1"><a class="header-anchor" href="#步骤-3" aria-hidden="true">#</a> 步骤</h5>
<p>可以在<code v-pre>user.properties</code>中对其进行覆盖，直接在最后进行配置的追加：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">aggregate_rpt_pct2</span><span class="token punctuation">=</span><span class="token value attr-value">70</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230111114408.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>Selenium Grid 概念<br>
1232456</li>
</ul>
<p><a href="http://www.ishatrainingsolutions.org/2020/06/30/jmeter-html-dashboard-report-generation/" target="_blank" rel="noopener noreferrer">http://www.ishatrainingsolutions.org/2020/06/30/jmeter-html-dashboard-report-generation/<ExternalLinkIcon/></a></p>
</div></template>


