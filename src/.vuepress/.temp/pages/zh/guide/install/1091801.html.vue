<template><div><h2 id="目录层级多个显示" tabindex="-1"><a class="header-anchor" href="#目录层级多个显示" aria-hidden="true">#</a> 目录层级多个显示</h2>
<h4 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h4>
<p>默认目录层级显示到3，想要显示所有的md文档的目录层级。</p>
<h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h4>
<ol>
<li>
<p>config.ts 配置文件配置markdown默认的目录level。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
        headers<span class="token operator">:</span><span class="token punctuation">{</span>
        level<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>主题配置显示的层级。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> theme<span class="token punctuation">.</span>ts <span class="token operator">--</span><span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
headerDepth<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>重启服务，刷新页面。</p>
</li>
</ol>
<h2 id="使用plantuml" tabindex="-1"><a class="header-anchor" href="#使用plantuml" aria-hidden="true">#</a> 使用plantuml</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>export default defineUserConfig({
  // 扩展 Markdown
  extendsMarkdown: (md) => {
    md.use(markdownItPlantuml,  {
          openMarker: '```plantuml',
          closeMarker: '```',
        })
  },
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清除缓存运行" tabindex="-1"><a class="header-anchor" href="#清除缓存运行" aria-hidden="true">#</a> 清除缓存运行</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> src/.vuepress/.cache 
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> src/.vuepress/.temp 
<span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


