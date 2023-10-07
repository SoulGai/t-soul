<template><div><h2 id="安装brew" tabindex="-1"><a class="header-anchor" href="#安装brew" aria-hidden="true">#</a> 安装brew</h2>
<p>前置：安装python。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/ineo6/homebrew-install/raw/master/install.sh<span class="token variable">)</span></span>"</span>


brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载问题" tabindex="-1"><a class="header-anchor" href="#下载问题" aria-hidden="true">#</a> 下载问题</h4>
<figure><img src="@source/zh/guide/install/assets/20230713143203.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>科学上网，命令行复制到终端进行，未解决。</li>
<li>换brew源。</li>
</ol>
<h2 id="更换源" tabindex="-1"><a class="header-anchor" href="#更换源" aria-hidden="true">#</a> 更换源</h2>
<h3 id="更换中科大源" tabindex="-1"><a class="header-anchor" href="#更换中科大源" aria-hidden="true">#</a> 更换中科大源</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 替换brew.git:</span>
<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>"</span>
<span class="token function">git</span> remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

<span class="token comment"># 替换homebrew-core.git:</span>
<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>"</span>/Library/Taps/homebrew/homebrew-core
<span class="token function">git</span> remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

<span class="token comment"># 替换homebrew-cask.git:</span>
<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>"</span>/Library/Taps/homebrew/homebrew-cask
<span class="token function">git</span> remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

<span class="token comment"># 替换homebrew-bottles:</span>
<span class="token builtin class-name">echo</span> <span class="token string">'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles'</span> <span class="token operator">>></span> ~/.bash_profile

<span class="token comment">#更新配置</span>
<span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment">#验证</span>
brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重置官方源" tabindex="-1"><a class="header-anchor" href="#重置官方源" aria-hidden="true">#</a> 重置官方源</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#重置brew.git:</span>
<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>"</span>
<span class="token function">git</span> remote set-url origin https://github.com/Homebrew/brew.git

<span class="token comment">#重置homebrew-core.git:</span>
<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>/Library/Taps/homebrew/homebrew-core"</span>
<span class="token function">git</span> remote set-url origin https://github.com/Homebrew/homebrew-core.git

<span class="token comment">#重置homebrew-cask.git：</span>
<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>"</span>/Library/Taps/homebrew/homebrew-cask
<span class="token function">git</span> remote set-url origin https://github.com/Homebrew/homebrew-cask
<span class="token comment">#Caskroom 的 Git 地址在 2018年5月25 日从 https://github.com/caskroom/homebrew-cask 迁移到了 https://github.com/Homebrew/homebrew-cask </span>

<span class="token comment">#最后注释掉/.bash_profile里的homebrew-bottles并保存，以bash为例</span>
<span class="token builtin class-name">cd</span> ~
<span class="token function">open</span> .bash_profile

<span class="token comment">#更新.bash_profile</span>
<span class="token builtin class-name">source</span> .bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node-npm" tabindex="-1"><a class="header-anchor" href="#node-npm" aria-hidden="true">#</a> node/npm</h2>
<p>首先把brew安装成功，再使用brew安装node。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">node</span>


<span class="token function">node</span> <span class="token parameter variable">-v</span>

<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


