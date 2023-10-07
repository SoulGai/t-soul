<template><div><h2 id="下载python" tabindex="-1"><a class="header-anchor" href="#下载python" aria-hidden="true">#</a> 下载Python</h2>
<p><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python下载<ExternalLinkIcon/></a></p>
<h2 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Added by Python</span>
<span class="token assign-left variable">PYTHON_HOME</span><span class="token operator">=</span>/Library/Frameworks/Python.framework/Versions/3.11
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$PYTHON_HOME</span>/bin:<span class="token environment constant">$PATH</span>:.

<span class="token builtin class-name">export</span> PYTHON_HOME
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>
<span class="token comment"># python软链</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">python</span><span class="token operator">=</span>/Library/Frameworks/Python.framework/Versions/3.11/bin/python3.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 命令行保存配置文件</span>
<span class="token builtin class-name">source</span> .zprofile
<span class="token comment"># 打开新窗口</span>
python <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


