<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li></li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li></li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
</div>
<p>根据上篇文章，体会到SpringBoot的开发运行，在项目中主要依赖两个机制：一个为依赖管理，一个为自动配置机制。</p>
<h2 id="依赖如何导入" tabindex="-1"><a class="header-anchor" href="#依赖如何导入" aria-hidden="true">#</a> 依赖如何导入？</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>为什么导入 start-web 所有相关依赖都导入进来？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<ul>
<li>
<p>需要开发什么场景就导入什么场景启动器。</p>
</li>
<li>
<p>maven依赖的传递原则：A-B-C，A依赖就拥有了B和C。</p>
</li>
<li>
<p>导入 <em>场景启动器</em>，场景启动器就会自动把这个场景的所有核心以来全部导入进来。</p>
</li>
</ul>
</details>
<h2 id="版本依赖如何传递" tabindex="-1"><a class="header-anchor" href="#版本依赖如何传递" aria-hidden="true">#</a> 版本依赖如何传递？</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>为什么版本号都不用写？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<ul>
<li>
<p>每个项目中都有一个父项目依赖 <code v-pre>spring-boot-starter-parent</code>，该父项目下还有一个父项目<code v-pre>spring-boot-dependencies</code>。</p>
</li>
<li>
<p>properties标签在该标签内声明了对应的版本号，在下面还有对应的 <em>依赖管理</em> dependencyManagement标签，管理了每一个jar包。这些jar包的版本号都是动态的，对应的版本号引用来自于上面的properties标签。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230803103939.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>父项目 <em>版本仲裁机制</em>，会把所有常见的jar依赖版本都声明好。比如：引入<code v-pre>mysql-connector-j</code>。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230803112609.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
</details>
<h2 id="自定义版本号" tabindex="-1"><a class="header-anchor" href="#自定义版本号" aria-hidden="true">#</a> 自定义版本号</h2>
<ul>
<li>
<p>利用maven的就近原则。</p>
<blockquote>
<p>当前项目的依赖中声明了对应的版本号则直接使用，如果没有声明则使用父项目声明的版本号。</p>
</blockquote>
<ul>
<li>
<p>直接在当前项目 properties 标签中声明父项目用的版本属性的key。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230803113407.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
</li>
<li>
<p>直接在导入依赖的时候声明版本。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230803114007.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
<h2 id="第三方jar包" tabindex="-1"><a class="header-anchor" href="#第三方jar包" aria-hidden="true">#</a> 第三方jar包</h2>
<ul>
<li>SpringBoot父项目没有管理的第三方依赖需要自行声明，例如：</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.alibaba/druid --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230803115047.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


