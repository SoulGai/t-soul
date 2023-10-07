<template><div><h2 id="api文档解读" tabindex="-1"><a class="header-anchor" href="#api文档解读" aria-hidden="true">#</a> API文档解读</h2>
<p><a href="https://developer.work.weixin.qq.com/document/path/90205" target="_blank" rel="noopener noreferrer">企业微信API<ExternalLinkIcon/></a></p>
<h2 id="获取权限token" tabindex="-1"><a class="header-anchor" href="#获取权限token" aria-hidden="true">#</a> 获取权限token</h2>
<ol>
<li>
<p>声明集合变量。<br>
<img src="@source/zh/guide/interface/assets/20230727170008.png" alt="" loading="lazy"></p>
</li>
<li>
<p>编写请求。</p>
<div class="language-url line-numbers-mode" data-ext="url"><pre v-pre class="language-url"><code><span class="token scheme">https<span class="token scheme-delimiter">:</span></span><span class="token authority"><span class="token authority-delimiter">//</span><span class="token host">qyapi.weixin.qq.com</span></span><span class="token path"><span class="token path-separator">/</span>cgi-bin<span class="token path-separator">/</span>gettoken</span><span class="token query"><span class="token query-delimiter">?</span><span class="token pair"><span class="token key">corpid</span>=</span></span>{{ID}}&amp;corpsecret={{SECRET}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>编写后置脚本提取响应token放入集合变量中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//获取响应结果 为json格式</span>
<span class="token keyword">var</span> jsonData <span class="token operator">=</span> pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//根据jsonpath路径获取token</span>
<span class="token keyword">var</span> token <span class="token operator">=</span> jsonData<span class="token punctuation">.</span>access_token<span class="token punctuation">;</span>
<span class="token comment">//命令行输出打印token</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"token："</span> <span class="token operator">+</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取的token放入集合变量中</span>
pm<span class="token punctuation">.</span>collectionVariables<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"ACCESS_TOKEN"</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<figure><img src="@source/zh/guide/interface/assets/20230727165942.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="创建部门" tabindex="-1"><a class="header-anchor" href="#创建部门" aria-hidden="true">#</a> 创建部门</h2>
<ol>
<li>编写请求。<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://qyapi.weixin.qq.com/cgi-bin/department/create?access_token={{ACCESS_TOKEN}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>编写请求Body体参数。<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token comment">//随机作业描述符	</span>
   <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"{{$randomJobDescriptor}}"</span><span class="token punctuation">,</span>
   <span class="token property">"parentid"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token comment">//0 到 1000 之间的随机整数	</span>
   <span class="token property">"id"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>$randomInt<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>编写后置脚本提取部门id放入集合变量中，并断言接口响应。<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//------ 获取创建部门的ID -----</span>
<span class="token comment">//获取响应结果 为json格式</span>
<span class="token keyword">var</span> jsonData <span class="token operator">=</span> pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//根据jsonpath路径获取id</span>
<span class="token keyword">var</span> id <span class="token operator">=</span> jsonData<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
<span class="token comment">//命令行输出打印id</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"id："</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取的id放入集合变量中</span>
pm<span class="token punctuation">.</span>collectionVariables<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"depart_id"</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>


pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"创建部门成功"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">.</span>errmsg<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">eql</span><span class="token punctuation">(</span><span class="token string">"created"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/zh/guide/interface/assets/20230727170416.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li>
</ol>
<h2 id="查找部门" tabindex="-1"><a class="header-anchor" href="#查找部门" aria-hidden="true">#</a> 查找部门</h2>
<ol>
<li>
<p>编写请求，获取企业下的所有部门列表。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://qyapi.weixin.qq.com/cgi-bin/department/simplelist?access_token={{ACCESS_TOKEN}}&amp;id=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>编写后置脚本断言接口响应。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"获取部门列表成功"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> jsonData <span class="token operator">=</span> pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">.</span>errmsg<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">eql</span><span class="token punctuation">(</span><span class="token string">"ok"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230727170538.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h2 id="修改部门" tabindex="-1"><a class="header-anchor" href="#修改部门" aria-hidden="true">#</a> 修改部门</h2>
<ol>
<li>
<p>编写请求。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://qyapi.weixin.qq.com/cgi-bin/department/update?access_token={{ACCESS_TOKEN}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>编写请求Body体参数。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"id"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>depart_id<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">//    随机的两个字母的国家/地区代码 (ISO 3166-1 alpha-2)	</span>
   <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"{{$randomCountryCode}}"</span><span class="token punctuation">,</span>
   <span class="token property">"parentid"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写后置脚本断言接口响应。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"更新部门成功"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> jsonData <span class="token operator">=</span> pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">.</span>errmsg<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">eql</span><span class="token punctuation">(</span><span class="token string">"updated"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230727170647.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h2 id="删除部门" tabindex="-1"><a class="header-anchor" href="#删除部门" aria-hidden="true">#</a> 删除部门</h2>
<ol>
<li>
<p>编写请求。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://qyapi.weixin.qq.com/cgi-bin/department/delete?access_token={{ACCESS_TOKEN}}&amp;id={{depart_id}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>编写后置脚本断言接口响应。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"删除部门成功"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> jsonData <span class="token operator">=</span> pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">.</span>errmsg<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">eql</span><span class="token punctuation">(</span><span class="token string">"deleted"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<figure><img src="@source/zh/guide/interface/assets/20230727170705.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="测试集运行" tabindex="-1"><a class="header-anchor" href="#测试集运行" aria-hidden="true">#</a> 测试集运行</h2>
<p>第一次运行带着token生成接口，后续运行不带token生成接口运行：</p>
<figure><img src="@source/zh/guide/interface/assets/20230727165845.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>运行成功后的测试集变量：<br>
<img src="@source/zh/guide/interface/assets/20230727165740.png" alt="" loading="lazy"></p>
</div></template>


