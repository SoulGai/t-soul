<template><div><p>...</p>
<h1 id="安装brew" tabindex="-1"><a class="header-anchor" href="#安装brew" aria-hidden="true">#</a> 安装brew</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
/bin/bash <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/ineo6/homebrew-install/raw/master/install.sh<span class="token variable">)</span></span>"</span>


brew update

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装node" tabindex="-1"><a class="header-anchor" href="#安装node" aria-hidden="true">#</a> 安装node</h2>
<p>node下包含npm。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="下载问题" tabindex="-1"><a class="header-anchor" href="#下载问题" aria-hidden="true">#</a> 下载问题</h4>
<figure><img src="@source/zh/guide/环境安装/assets/20230713143203" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>科学上网，命令行复制到终端进行，未解决。</li>
<li>换brew源。</li>
</ol>
</div></template>


