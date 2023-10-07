<template><div><h2 id="生成默认目录结构" tabindex="-1"><a class="header-anchor" href="#生成默认目录结构" aria-hidden="true">#</a> 生成默认目录结构</h2>
<h3 id="安装tree" tabindex="-1"><a class="header-anchor" href="#安装tree" aria-hidden="true">#</a> 安装tree</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> tree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成目录" tabindex="-1"><a class="header-anchor" href="#生成目录" aria-hidden="true">#</a> 生成目录</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tree <span class="token parameter variable">-N</span> <span class="token parameter variable">-I</span> <span class="token string">"assets"</span> <span class="token operator">></span> tree.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-I &quot;assets&quot;</code>：忽略文件夹。</li>
<li><code v-pre>-N</code>：防止中文乱码。</li>
<li><code v-pre>&gt; tree.md</code>：输出到文件<code v-pre>tree.md</code>。</li>
</ul>
</div></template>


