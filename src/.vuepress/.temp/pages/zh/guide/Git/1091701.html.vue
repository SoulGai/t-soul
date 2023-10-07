<template><div><h2 id="迁出分支" tabindex="-1"><a class="header-anchor" href="#迁出分支" aria-hidden="true">#</a> 迁出分支</h2>
<p>远端新建分支，本地没有，本地使用以下命令同步远端分支到本地</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-获取所有远程分支" tabindex="-1"><a class="header-anchor" href="#_1-获取所有远程分支" aria-hidden="true">#</a> 1. 获取所有远程分支</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>* [new branch]      main       -> origin/main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将从仓库中获取所有远程分支。</p>
<ul>
<li><code v-pre>origin</code> 是要定位的远程名称。</li>
</ul>
<blockquote>
<p>如果有一个上游远程名称 <code v-pre>upstream</code> ，可以直接调用 <code v-pre>git fetch upstream</code></p>
</blockquote>
<p><a href="https://www.freecodecamp.org/chinese/news/git-checkout-remote-branch-tutorial/" target="_blank" rel="noopener noreferrer">https://www.freecodecamp.org/chinese/news/git-checkout-remote-branch-tutorial/<ExternalLinkIcon/></a></p>
<h3 id="更新远端分支" tabindex="-1"><a class="header-anchor" href="#更新远端分支" aria-hidden="true">#</a> 更新远端分支</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote update origin <span class="token parameter variable">--prune</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


