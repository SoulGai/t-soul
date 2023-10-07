<template><div><h2 id="下载jdk" tabindex="-1"><a class="header-anchor" href="#下载jdk" aria-hidden="true">#</a> 下载jdk</h2>
<p><a href="https://www.oracle.com/java/technologies/downloads/#java17" target="_blank" rel="noopener noreferrer">jdk17下载<ExternalLinkIcon/></a></p>
<p><a href="https://www.oracle.com/java/technologies/downloads/#java11" target="_blank" rel="noopener noreferrer">jdk11下载<ExternalLinkIcon/></a></p>
<p><a href="https://www.oracle.com/java/technologies/downloads/#java8" target="_blank" rel="noopener noreferrer">jdk8下载<ExternalLinkIcon/></a></p>
<h2 id="查看java安装路径" tabindex="-1"><a class="header-anchor" href="#查看java安装路径" aria-hidden="true">#</a> 查看Java安装路径</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看Java安装路径</span>
/usr/libexec/java_home <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Added by Java</span>
<span class="token comment">#JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home</span>
<span class="token comment">#JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home</span>
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
<span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:.
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>:.

<span class="token builtin class-name">export</span> JAVA_HOME
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>
<span class="token builtin class-name">export</span> CLASSPATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 命令行保存配置文件</span>
<span class="token builtin class-name">source</span> .zprofile
<span class="token comment"># 打开新窗口</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


