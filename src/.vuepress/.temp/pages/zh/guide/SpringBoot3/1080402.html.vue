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
<h2 id="条件注解" tabindex="-1"><a class="header-anchor" href="#条件注解" aria-hidden="true">#</a> 条件注解</h2>
<blockquote>
<p>如果注解指定的条件成立，则触发指定行为</p>
</blockquote>
<h3 id="conditionalonxxx" tabindex="-1"><a class="header-anchor" href="#conditionalonxxx" aria-hidden="true">#</a> @ConditionalOnXxx</h3>
<ul>
<li>
<p><code v-pre>@ConditionalOnClass</code>：如果类路径中存在这个类，则触发指定的行为</p>
</li>
<li>
<p><code v-pre>@ConditionalOnMissingClass</code>：如果类路径中不存在这个类，则触发指定行为</p>
</li>
<li>
<p><code v-pre>@ConditionalOnBean</code>：如果容器中存在这个Bean（组件），则触发指定行为</p>
</li>
<li>
<p><code v-pre>@ConditionalOnMissingBean</code>：如果容器中不存在这个Bean（组件），则触发指定行为</p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">场景</p>
<ol>
<li>
<p>如果存在<code v-pre>FastsqlException</code>这个类，则往容器中放一个<code v-pre>Cat</code>组件，名为<code v-pre>cat01</code></p>
</li>
<li>
<p>否则，就给容器中放入一个<code v-pre>Dog</code>组件，名为<code v-pre>dog01</code></p>
</li>
<li>
<p>如果系统中有<code v-pre>dog01</code>这个组件，就给容器中放入一个<code v-pre>User</code>组件，名为<code v-pre>zhangsan</code></p>
</li>
<li>
<p>否则，就放一个<code v-pre>User</code>名叫<code v-pre>lisi</code></p>
</li>
</ol>
</div>
<details class="hint-container details"><summary>Answer</summary>
<ol>
<li>
<p>分别声明类 <code v-pre>Cat</code>、<code v-pre>Dog</code>、<code v-pre>User</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230804180840.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>使用<code v-pre>@ConditionalOnClass</code>、<code v-pre>@ConditionalOnMissingClass</code>判断<code v-pre>FastsqlException</code><br>
<img src="@source/zh/guide/springboot3/assets/20230804175425.png" alt="" loading="lazy"></p>
</li>
</ol>
<p>pom文件导入的依赖注释掉后运行：</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230804175741.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
</div></template>


