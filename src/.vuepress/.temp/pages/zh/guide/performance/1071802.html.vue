<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>JMeter的安装与配置。</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>JMeter工具的安装并打开。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>想要使用JMeter进行压测脚本编写，如何安装并打开JMeter软件？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/20230206105644.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuIZ9BSb8Ll7nJIrABdgxhVB6ubKiBZQkbyBnl_TD5pK_RsvukQGVoWGeIonBH11MUzdK_txFoQK_hY-MBWMouRYq5tyJavvjtFzyz7ymB1zgSNuuau9EPLre1vqCjUxcgvyNwHZJB489Q2bb0KGNTijIYuipyF0M4M3943zW7M7JbWiI1-hWSKe4100q441iOD000" alt="uml diagram" loading="lazy">
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<ol>
<li>jdk下载。</li>
<li>jdk安装。</li>
<li>Java环境变量配置。</li>
</ol>
<h4 id="jdk下载" tabindex="-1"><a class="header-anchor" href="#jdk下载" aria-hidden="true">#</a> jdk下载</h4>
<ol>
<li>下载合适自己系统的 jdk版本。</li>
</ol>
<ul>
<li>
<p><a href="https://pan.baidu.com/s/12HfEKQXioxP-ivk6EjRItw?pwd=1234" target="_blank" rel="noopener noreferrer">Mac系统<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://pan.baidu.com/s/1g_LSigPXSamGiAXUi7oFKw?pwd=1234" target="_blank" rel="noopener noreferrer">Window系统X8<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://pan.baidu.com/s/18yO-y8OO8j8i63Ijg1YGAQ?pwd=1234" target="_blank" rel="noopener noreferrer">Window系统X64<ExternalLinkIcon/></a></p>
</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ol>
<li>
<p>jdk版本需要1.8+。<br>
<img src="@source/zh/guide/performance/assets/20230505180526.png" alt="" loading="lazy"></p>
</li>
<li>
<p>window系统查看。<br>
<img src="@source/zh/guide/performance/assets/20230718144000.png" alt="" loading="lazy"></p>
</li>
</ol>
</div>
<h3 id="mac安装jdk" tabindex="-1"><a class="header-anchor" href="#mac安装jdk" aria-hidden="true">#</a> Mac安装jdk</h3>
<h4 id="jdk安装" tabindex="-1"><a class="header-anchor" href="#jdk安装" aria-hidden="true">#</a> jdk安装</h4>
<ol>
<li>
<p>打开下载的dmg文件，选择<strong>pkg</strong>。<br>
<img src="@source/zh/guide/performance/assets/20230505180523.png" alt="" loading="lazy"></p>
</li>
<li>
<p>点击 继续 。<br>
<img src="@source/zh/guide/performance/assets/20230505180525.png" alt="" loading="lazy"></p>
</li>
<li>
<p>点击 安装 。<br>
<img src="@source/zh/guide/performance/assets/20230505180521.png" alt="" loading="lazy"></p>
</li>
<li>
<p>点击 使用密码，输入电脑开机密码。</p>
<figure><img src="@source/zh/guide/performance/assets/20230505180522.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>等待软件安装完成，点击关闭。</p>
<figure><img src="@source/zh/guide/performance/assets/20230505180522.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h4 id="java环境变量配置" tabindex="-1"><a class="header-anchor" href="#java环境变量配置" aria-hidden="true">#</a> Java环境变量配置</h4>
<ol>
<li>
<p>按 command + 空格 键 输入 ter，选择终端打开。</p>
</li>
<li>
<p>终端确认电脑的bash环境。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230505180520.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>打开环境变量配置文件。</p>
<ul>
<li>
<p>输出为/bin/bash， 则创建 ~/.bash_profile 配置文件。</p>
</li>
<li>
<p>输出为/bin/zsh ，则创建 ~/.zshrc 配置文件。</p>
</li>
</ul>
<figure><img src="@source/zh/guide/performance/assets/20230721175211.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>添加 JAVA_HOME 、CLASSPATH 变量。</p>
</li>
<li>
<p>PATH的变量追加Java配置。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#------------------JAVA------------------</span>
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home

<span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:.

<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>:.

<span class="token builtin class-name">export</span> JAVA_HOME
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>
<span class="token builtin class-name">export</span> CLASSPATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>按 command + 空格 键 输入 ter，选择终端打开。</p>
</li>
<li>
<p>终端输入 <strong>source 配置文件名</strong> 使环境变量生效。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> ～/.zshrc 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230505180518.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h4 id="java环境验证" tabindex="-1"><a class="header-anchor" href="#java环境验证" aria-hidden="true">#</a> Java环境验证</h4>
<ol>
<li>
<p>打开一个新的命令行窗口。</p>
</li>
<li>
<p>输入 java -version 得到版本号相关信息则表示java安装配置成功。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span> 

javac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230505180517.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h3 id="window安装jdk" tabindex="-1"><a class="header-anchor" href="#window安装jdk" aria-hidden="true">#</a> Window安装jdk</h3>
<h4 id="jdk安装-1" tabindex="-1"><a class="header-anchor" href="#jdk安装-1" aria-hidden="true">#</a> jdk安装</h4>
<ol>
<li>
<p>打开下载的exe文件，选择<strong>是</strong>。</p>
<figure><img src="@source/zh/guide/performance/assets/20230206105645.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>点击下一步。</p>
<figure><img src="@source/zh/guide/performance/assets/20230206105646.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>更改jdk安装路径：点击 <strong>安装到:</strong> 的右侧 <strong>更改</strong> 按钮，可选择jdk安装的路径。 如默认则直接点击下一步，直到完成。</p>
<figure><img src="@source/zh/guide/performance/assets/20230206105647.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h4 id="java环境变量配置-1" tabindex="-1"><a class="header-anchor" href="#java环境变量配置-1" aria-hidden="true">#</a> Java环境变量配置</h4>
<ol>
<li>
<p>打开系统属性中的环境变量。</p>
<figure><img src="@source/zh/guide/performance/assets/20230206105648.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>系统环境变量中添加JAVA_HOME系统变量。</p>
<ul>
<li>注意：变量值为自己安装JDK的路径。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>变量名： JAVA_HOME
变量值： C:<span class="token punctuation">\</span>Program Files<span class="token punctuation">\</span>Java<span class="token punctuation">\</span>jdk-1.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230206105649.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>系统环境变量中添加CLASSPATH系统变量。</p>
<ul>
<li>注意：最前面有个点。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>变量名： CLASSPATH
变量值： <span class="token builtin class-name">.</span><span class="token punctuation">;</span>%JAVA_HOME%<span class="token punctuation">\</span>lib<span class="token punctuation">;</span>%JAVA_HOME%<span class="token punctuation">\</span>lib<span class="token punctuation">\</span>tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230206105650.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>系统环境变量的PATH的变量值最后末尾，追加配置。</p>
<ul>
<li>注意：PATH中不能有java的其他版本配置。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>变量名： <span class="token environment constant">PATH</span>
变量值： %JAVA_HOME%<span class="token punctuation">\</span>bin<span class="token punctuation">;</span>%JAVA_HOME%<span class="token punctuation">\</span>jre<span class="token punctuation">\</span>bin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230206105651.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h4 id="java环境验证-1" tabindex="-1"><a class="header-anchor" href="#java环境验证-1" aria-hidden="true">#</a> Java环境验证</h4>
<ol>
<li>
<p>按 win + R 键 输入 cmd 回车，弹出命令行窗口。</p>
</li>
<li>
<p>输入 java -version 得到版本号相关信息则表示java安装配置成功。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span> 

javac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230206105652.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h2 id="jmeter安装" tabindex="-1"><a class="header-anchor" href="#jmeter安装" aria-hidden="true">#</a> JMeter安装</h2>
<ul>
<li>JMeter压缩包安装</li>
</ul>
<h3 id="jmeter压缩包安装" tabindex="-1"><a class="header-anchor" href="#jmeter压缩包安装" aria-hidden="true">#</a> JMeter压缩包安装</h3>
<ol>
<li>
<p>下载Apache JMeter压缩包：<a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>。</p>
<figure><img src="@source/zh/guide/performance/assets/20230116105918.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>解压到当前电脑上指定路径。</p>
<figure><img src="@source/zh/guide/performance/assets/20230721175506.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h3 id="jmeter环境变量配置" tabindex="-1"><a class="header-anchor" href="#jmeter环境变量配置" aria-hidden="true">#</a> JMeter环境变量配置</h3>
<h4 id="mac系统" tabindex="-1"><a class="header-anchor" href="#mac系统" aria-hidden="true">#</a> Mac系统</h4>
<ol>
<li>
<p>按 command + 空格 键 输入 ter，选择终端打开。</p>
</li>
<li>
<p>终端确认电脑的bash环境。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div> <!-- ![](assets/20230505170707.png) -->
</li>
<li>
<p>打开环境变量配置文件。</p>
<ul>
<li>
<p>输出为/bin/bash， 则创建 ~/.bash_profile 配置文件。</p>
</li>
<li>
<p>输出为/bin/zsh ，则创建 ~/.zshrc 配置文件。</p>
</li>
</ul>
<figure><img src="@source/zh/guide/performance/assets/20230505170706.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>添加 JMETER_HOME 变量。</p>
</li>
<li>
<p>PATH的变量追加JMeter配置。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#-------- jmeter ----------</span>
<span class="token assign-left variable">JMETER_HOME</span><span class="token operator">=</span>/解压路径/apache-jmeter-5.5

<span class="token builtin class-name">export</span> JMETER_HOME
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JMETER_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>按 command + 空格 键 输入 ter，选择终端打开。</p>
</li>
<li>
<p>终端输入 <strong>source 配置文件名</strong> 使环境变量生效。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> ～/.zshrc 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230505170705.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h4 id="window系统" tabindex="-1"><a class="header-anchor" href="#window系统" aria-hidden="true">#</a> Window系统</h4>
<ol>
<li>
<p>打开系统属性中的环境变量。</p>
<figure><img src="@source/zh/guide/performance/assets/20230206105653.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>系统环境变量中添加JMETER_HOME系统变量。</p>
<ul>
<li>注意：变量值为自己解压JMeter的路径。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>变量名： JMETER_HOME
变量值： D:<span class="token punctuation">\</span>apache-jmeter-5.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/101683276368.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>系统环境变量的PATH的变量值最后末尾，追加配置。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>变量名： <span class="token environment constant">PATH</span>
变量值： %JMETER_HOME%<span class="token punctuation">\</span>bin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230505165436.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h3 id="jmeter环境验证" tabindex="-1"><a class="header-anchor" href="#jmeter环境验证" aria-hidden="true">#</a> JMeter环境验证</h3>
<h4 id="mac系统-1" tabindex="-1"><a class="header-anchor" href="#mac系统-1" aria-hidden="true">#</a> Mac系统</h4>
<p>1.按 command + 空格 键 输入 ter，选择终端打开。</p>
<ol start="2">
<li>输入 jmeter -v 得到版本号相关信息则表示JMeter安装配置成功。<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<figure><img src="@source/zh/guide/performance/assets/20230505170704.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="window系统-1" tabindex="-1"><a class="header-anchor" href="#window系统-1" aria-hidden="true">#</a> Window系统</h4>
<ol>
<li>
<p>按 win + R 键 输入 cmd 回车，弹出命令行窗口。</p>
</li>
<li>
<p>输入 jmeter -- 得到版本号相关信息则表示JMeter安装配置成功。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jmeter <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/151683277318.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h2 id="界面化启动" tabindex="-1"><a class="header-anchor" href="#界面化启动" aria-hidden="true">#</a> 界面化启动</h2>
<ol>
<li>
<p>打开终端。</p>
<ul>
<li>Mac：command + 空格 键 输入 <code v-pre>ter</code>。</li>
<li>Window：win + R 键 输入 <code v-pre>cmd</code> 回车。</li>
</ul>
</li>
<li>
<p>输入 <code v-pre>jmeter</code> ，命令行启动JMeter的GUI界面。</p>
</li>
</ol>
<figure><img src="@source/zh/guide/performance/assets/20230206105644.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>JMeter可以在以下哪些操作系统上安装？（可多选）</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. Windows</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B. macOS</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. Linux</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. Android</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> E. iOS</label></li>
</ul>
<blockquote>
<p>答案：A、B、C</p>
</blockquote>
</li>
</ol>
</div></template>


