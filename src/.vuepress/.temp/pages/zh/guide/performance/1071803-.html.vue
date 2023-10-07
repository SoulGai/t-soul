<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>不同Java版本下JMeter的启动日志。</li>
<li>JMeter界面介绍。</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>JMeter工具的启动命令。</li>
<li>JMeter工具的基本认识。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JMeter界面打开，但是终端提示日志是什么含义？</p>
<p>对应界面应该如何使用才能编写压测脚本？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/20230116145155.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="日志解读" tabindex="-1"><a class="header-anchor" href="#日志解读" aria-hidden="true">#</a> 日志解读</h2>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuYfCJSr8L30suIZ9BW0mltzIIrAAd4zO_xLhnTEBU9xkNl5ZOywn_mlCbkxYqyCjgAM0A0RKabYLQu98mDCGYewNmOksofnEx8EndNKjVJfa9Pcifn8Tu1XJb5wGMbLI69UQKfdeM0wdC50MW7t9IKnJACqio54mKylCKyZ9p59BpyqfIAqeKkHnIWLw5UXV41WO20000" alt="uml diagram" loading="lazy">
<h3 id="java8启动jmeter" tabindex="-1"><a class="header-anchor" href="#java8启动jmeter" aria-hidden="true">#</a> Java8启动JMeter</h3>
<p><code v-pre>Java</code>版本为<strong>8</strong>的<code v-pre>JMeter</code>启动日志：</p>
<figure><img src="@source/zh/guide/performance/assets/20230116145155.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="java11启动jmeter" tabindex="-1"><a class="header-anchor" href="#java11启动jmeter" aria-hidden="true">#</a> Java11启动JMeter</h3>
<p><code v-pre>Java</code>版本为<strong>11</strong>的<code v-pre>JMeter</code>启动日志：</p>
<figure><img src="@source/zh/guide/performance/assets/20230116145606.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="警告" tabindex="-1"><a class="header-anchor" href="#警告" aria-hidden="true">#</a> 警告</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>WARNING: package sun.awt.X11 not <span class="token keyword">in</span> java.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>这个<code v-pre>WARNING</code>警告不需要管。如果想要消除警告，则可以直接使用<code v-pre>Java8</code>的版本启动<code v-pre>JMeter</code>即可。</p>
</div>
<h4 id="报错-tipropertyvalueisvalid-called-with-4-on-nil-context" tabindex="-1"><a class="header-anchor" href="#报错-tipropertyvalueisvalid-called-with-4-on-nil-context" aria-hidden="true">#</a> 报错：_TIPropertyValueIsValid called with 4 on nil context!</h4>
<p>如下图所示报错内容：</p>
<figure><img src="@source/zh/guide/performance/assets/20230116143106.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果遇到<code v-pre>_TIPropertyValueIsValid called with 4 on nil context!</code>的报错信息，可以参考官网的<a href="https://github.com/apache/jmeter/issues/5533" target="_blank" rel="noopener noreferrer">issue<ExternalLinkIcon/></a>提供的解决方案。</p>
<h5 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h5>
<p>方案一：<strong>修改对应<code v-pre>Java</code>版本号</strong>；</p>
<p>方案二：<strong>重新命令行启动</strong><code v-pre>JMeter</code>。</p>
<p>以上两种解决方案选择其中一个即可。</p>
<h3 id="命令行提示" tabindex="-1"><a class="header-anchor" href="#命令行提示" aria-hidden="true">#</a> 命令行提示</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 不要使用GUI模式进行负载测试 GUI模式只是压测脚本的创建和调试</span>
Dont use GUI mode <span class="token keyword">for</span> load testing <span class="token operator">!</span>, only <span class="token keyword">for</span> Test creation and Test debugging.
<span class="token comment"># 如果想要进行负载测试 使用CLI模式 即非GUI模式 -- 静默压测会详细介绍</span>
For load testing, use CLI Mode <span class="token punctuation">(</span>was NON GUI<span class="token punctuation">)</span>:
   jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>jmx file<span class="token punctuation">]</span> <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token punctuation">[</span>Path to web report folder<span class="token punctuation">]</span>
<span class="token comment"># 可以增加Java的堆来满足压测需求</span>
<span class="token operator">&amp;</span> increase Java Heap to meet your <span class="token builtin class-name">test</span> requirements:
<span class="token comment"># 修改JMeter文件的Java堆变量</span>
   Modify current <span class="token function">env</span> variable <span class="token assign-left variable">HEAP</span><span class="token operator">=</span><span class="token string">"-Xms1g -Xmx1g -XX:MaxMetaspaceSize=256m"</span> <span class="token keyword">in</span> the jmeter batch <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="log日志" tabindex="-1"><a class="header-anchor" href="#log日志" aria-hidden="true">#</a> log日志</h3>
<div class="language-log line-numbers-mode" data-ext="log"><pre v-pre class="language-log"><code><span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,565</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.u.JMeterUtils:</span> Setting Locale to zh_CN
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 加载用户配置文件 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,602</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> <span class="token property">Loading user properties from:</span> <span class="token file-path string">/Users/**/apache-jmeter-5.5/bin/user.properties</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 加载系统配置文件 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,602</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> <span class="token property">Loading system properties from:</span> <span class="token file-path string">/Users/**/apache-jmeter-5.5/bin/system.properties</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,610</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> Copyright <span class="token operator">(</span>c<span class="token operator">)</span> <span class="token number">1998</span><span class="token operator">-</span><span class="token number">2022</span> The Apache Software Foundation
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> JMeter的版本号 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> Version <span class="token number">5.5</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> Java的版本号 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> java<span class="token punctuation">.</span>version<span class="token operator">=</span><span class="token number">17.0.7</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> java<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>name<span class="token operator">=</span>Java HotSpot<span class="token operator">(</span>TM<span class="token operator">)</span> <span class="token number">64</span><span class="token operator">-</span>Bit Server VM
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 当前电脑系统 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> os<span class="token punctuation">.</span>name<span class="token operator">=</span>Mac OS X
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 当前电脑系统的架构 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> os<span class="token punctuation">.</span>arch<span class="token operator">=</span>x86_64
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 当前系统版本 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> os<span class="token punctuation">.</span>version<span class="token operator">=</span><span class="token number">13.4.1</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 文件编码格式 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> file<span class="token punctuation">.</span>encoding<span class="token operator">=</span>UTF<span class="token operator">-</span><span class="token number">8</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>headless<span class="token operator">=</span><span class="token boolean">null</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> Max memory     <span class="token operator">=</span><span class="token number">1073741824</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,611</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> Available Processors <span class="token operator">=</span><span class="token number">16</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,622</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> Default Locale<span class="token operator">=</span>English <span class="token operator">(</span>EN<span class="token operator">)</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,622</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> JMeter  Locale<span class="token operator">=</span>Chinese <span class="token operator">(</span>China<span class="token operator">)</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 设置的全局变量中JMeter HOME 路径 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,622</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> JMeterHome<span class="token operator">=</span><span class="token operator">/</span>Users<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">/</span>apache<span class="token operator">-</span>jmeter<span class="token operator">-</span><span class="token number">5.5</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 用户根路径 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,623</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> <span class="token domain constant">user.dir</span>  <span class="token operator">=</span><span class="token operator">/</span>Users<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 当前打开jmeter命令行的路径 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,623</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> PWD       <span class="token operator">=</span><span class="token operator">/</span>Users<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,623</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> <span class="token property">IP:</span> <span class="token ip-address constant">10.1.1.213</span> Name<span class="token operator">:</span> bogon FullName<span class="token operator">:</span> bogon
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:11,635</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeter:</span> Loaded icon properties from org<span class="token operator">/</span>apache<span class="token operator">/</span>jmeter<span class="token operator">/</span>images<span class="token operator">/</span>icon<span class="token punctuation">.</span>properties
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:12,033</span> <span class="token level info keyword">INFO</span> <span class="token property">o.a.j.JMeterGuiLauncher:</span> <span class="token property">Setting LAF to:</span> com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>weisj<span class="token punctuation">.</span>darklaf<span class="token punctuation">.</span>DarkLaf<span class="token operator">:</span>com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>weisj<span class="token punctuation">.</span>darklaf<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>DarculaTheme
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> 占用本地的端口号 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:13,820</span> <span class="token level info keyword">INFO</span> <span class="token property">o.j.r.JARSourceHTTP:</span> Using proxy <span class="token ip-address constant">127.0.0.1</span><span class="token operator">:</span><span class="token number">33210</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:13,824</span> <span class="token level info keyword">INFO</span> <span class="token property">o.j.r.JARSourceHTTP:</span> Using proxy <span class="token ip-address constant">127.0.0.1</span><span class="token operator">:</span><span class="token number">33210</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:13,860</span> <span class="token level info keyword">INFO</span> <span class="token property">o.j.r.JARSourceHTTP:</span> Requesting <span class="token url">https://jmeter-plugins.org/repo/?installID=mac_os_x-284513b6faf7955a1c04cf1ccaf53d79-gui</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:15,707</span> <span class="token level info keyword">INFO</span> <span class="token property">o.j.r.JARSourceHTTP:</span> Using proxy <span class="token ip-address constant">127.0.0.1</span><span class="token operator">:</span><span class="token number">33210</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">-</span><span class="token operator">-</span> JMeter的插件版本号 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:15,707</span> <span class="token level info keyword">INFO</span> <span class="token property">o.j.r.PluginManager:</span> <span class="token property">Plugins Status:</span> <span class="token punctuation">[</span>jpgc<span class="token operator">-</span>graphs<span class="token operator">-</span>basic<span class="token operator">=</span><span class="token number">2.0</span><span class="token punctuation">,</span> jpgc<span class="token operator">-</span>functions<span class="token operator">=</span><span class="token number">2.2</span><span class="token punctuation">,</span> jpgc<span class="token operator">-</span>casutg<span class="token operator">=</span><span class="token number">2.10</span><span class="token punctuation">,</span> jpgc<span class="token operator">-</span>dummy<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">,</span> jpgc<span class="token operator">-</span>ffw<span class="token operator">=</span><span class="token number">2.0</span><span class="token punctuation">,</span> jpgc<span class="token operator">-</span>fifo<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> jpgc<span class="token operator">-</span>perfmon<span class="token operator">=</span><span class="token number">2.1</span><span class="token punctuation">,</span> jpgc<span class="token operator">-</span>plugins<span class="token operator">-</span>manager<span class="token operator">=</span><span class="token number">1.9</span><span class="token punctuation">,</span> jpgc<span class="token operator">-</span>tst<span class="token operator">=</span><span class="token number">2.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>core<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>ftp<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>http<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>jdbc<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>jms<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>junit<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>java<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>ldap<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>mail<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>mongodb<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>native<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>tcp<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jmeter<span class="token operator">-</span>components<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> jpgc<span class="token operator">-</span>standard<span class="token operator">=</span><span class="token number">2.0</span><span class="token punctuation">]</span>
<span class="token date number">2023-07-18</span> <span class="token time number">14:53:15,713</span> <span class="token level info keyword">INFO</span> <span class="token property">o.j.r.PluginManagerMenuItem:</span> <span class="token property">Plugins Manager has upgrades:</span> <span class="token punctuation">[</span>jpgc<span class="token operator">-</span>tst<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jmeter界面工作区介绍" tabindex="-1"><a class="header-anchor" href="#jmeter界面工作区介绍" aria-hidden="true">#</a> JMeter界面工作区介绍</h2>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuYfCJSr8L30suIZ9BW0mltzIIrABdKtjUpbtqP7VtyzszN5nQMjY4jO32B_hdFEsT-cn1FvZtTFlIfwtRORnd2oO-xzhsV7VBaztRO68GtjEsrgVhTeB475A1Ze0w1CG6EWy0" alt="uml diagram" loading="lazy">
<p><code v-pre>JMeter</code>的主界面工作区主要分为<strong>4</strong>部分，如下：<strong>菜单栏</strong>、<strong>工具栏</strong>、<strong>树状组件栏</strong>和<strong>组件内容栏</strong>。</p>
<figure><img src="@source/zh/guide/performance/assets/20230116150926.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下面👇具体介绍下每一部分的具体功能。</p>
<p>首先第一个是最上面的一层<strong>菜单栏</strong>。</p>
<h3 id="菜单栏" tabindex="-1"><a class="header-anchor" href="#菜单栏" aria-hidden="true">#</a> 菜单栏</h3>
<p><code v-pre>JMeter</code>全部的功能的都包含在菜单栏中。</p>
<h3 id="工具栏" tabindex="-1"><a class="header-anchor" href="#工具栏" aria-hidden="true">#</a> 工具栏</h3>
<p>工具栏中的按钮在菜单栏内都可以找到，工具栏就相当于<strong>菜单栏常用功能的快捷按钮</strong>。</p>
<h3 id="树状组件栏" tabindex="-1"><a class="header-anchor" href="#树状组件栏" aria-hidden="true">#</a> 树状组件栏</h3>
<p>用来显示 <strong>测试用例</strong>（计划）及其子组件。</p>
<blockquote>
<p>因为JMeter启动界面化会自动创建一个测试计划，压测脚本中所有的组件都是在测试计划下进行添加。</p>
</blockquote>
<p>树状组件栏就是一个目录树，里面存放的是脚本设计过程中使用到的元件。<br>
在JMeter执行脚本的过程中，默认从根节点开始按顺序遍历树状组件栏上的元件。</p>
<h4 id="元件" tabindex="-1"><a class="header-anchor" href="#元件" aria-hidden="true">#</a> 元件</h4>
<p>比如向百度服务器发送一个HTTP协议的GET请求，这个请求是由一个HTTP请求取样器来完成，这个HTTP请求取样器就是元件。</p>
<p>在树状组件栏中添加进来的都是元件。</p>
<h3 id="组件内容栏" tabindex="-1"><a class="header-anchor" href="#组件内容栏" aria-hidden="true">#</a> 组件内容栏</h3>
<p>组件内容栏显示选中组件的具体内容及配置。</p>
<p><strong>组件内容栏</strong>主要是配合<strong>树状组件栏</strong>来进行使用。在左侧<strong>树状组件栏</strong>中点击具体的某个组件，在右侧<strong>组件内容栏</strong>中就显示该组件的具体内容和配置。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>JMeter启动日志：Java8正常启动，Java11有告警可忽略。</p>
</li>
<li>
<p>JMeter界面工作区分为四部分：<strong>菜单栏</strong>、<strong>工具栏</strong>、<strong>树状组件栏</strong>和<strong>组件内容栏</strong>。</p>
</li>
</ul>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>在JMeter的启动日志中，可以获取以下哪些信息？（可多选）</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. JMeter版本号</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B. Java版本号</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. 系统环境变量</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. 启动参数和选项</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> E. 测试计划名称</label></li>
</ul>
<blockquote>
<p>答案：A、B、C、D</p>
</blockquote>
</li>
<li>
<p>JMeter界面工作区由以下哪些主要组件组成？（可多选）</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> A. Test Plan（测试计划）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> B. Thread Group（线程组）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> C. Sampler（采样器）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> D. Listener（监听器）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> E. Pre-Processor（前置处理器）</label></li>
</ul>
<blockquote>
<p>答案：A、B、C、D</p>
</blockquote>
</li>
<li>
<p>JMeter界面的包括以下哪些？（可多选）</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> A. 工具栏</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> B. 导航树</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> C. 测试计划</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> D. 结果树</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> E. 线程组</label></li>
</ul>
</li>
</ol>
<blockquote>
<p>答案：A、B、C</p>
</blockquote>
</div></template>


