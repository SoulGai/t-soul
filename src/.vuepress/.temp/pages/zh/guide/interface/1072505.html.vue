<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>
<p>Postman前后置脚本编写</p>
</li>
<li>
<p>后置脚本断言编写</p>
</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>
<p>熟练掌握Postman中如何编写前后置脚本</p>
</li>
<li>
<p>熟练掌握JS语句进行断言</p>
</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>想要编写脚本在Postman请求发送前或请求响应后执行，如何进行操作？</p>
</div>
<p>在Postman中，前置脚本（Pre-request Script）和后置脚本（Tests）是用于请求的两种脚本类型，它们都是用JavaScript编写的，并在请求发送前或请求响应后执行。这些脚本提供了更高级的测试和自动化功能，用于在请求之前或之后执行一些自定义操作。</p>
<h2 id="前置脚本-pre-request-script" tabindex="-1"><a class="header-anchor" href="#前置脚本-pre-request-script" aria-hidden="true">#</a> 前置脚本（Pre-request Script）</h2>
<p>前置脚本是在发送请求之前执行的脚本。</p>
<p>它通常用于 <em>设置请求头</em>、<em>设置环境变量</em>、<em>添加参数</em> 或 <em>进行其他准备工作</em>，以确保请求发送时具有所需的设置和数据。</p>
<p>前置脚本如果写在请求中，只对当前请求有效，不会影响其他请求。如果写在测试集中，对当前测试集的每个请求有效，不影响其他测试集。</p>
<p>您可以在Postman的请求编辑器中的&quot;<code v-pre>Pre-request Script</code>&quot;（预请求脚本）选项卡中编写前置脚本。</p>
<h3 id="脚本设置" tabindex="-1"><a class="header-anchor" href="#脚本设置" aria-hidden="true">#</a> 脚本设置</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 设置请求头</span>
pm<span class="token punctuation">.</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"Authorization"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"Bearer your_token_here"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置环境变量</span>
pm<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"john_doe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加查询参数</span>
pm<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">addQueryParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"search"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"postman"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726173649.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/interface/assets/20230726174044.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="后置脚本-tests" tabindex="-1"><a class="header-anchor" href="#后置脚本-tests" aria-hidden="true">#</a> 后置脚本（Tests）</h2>
<p>后置脚本是在收到请求的响应后执行的脚本。它通常用于验证响应、提取响应数据、设置全局变量、做出断言或其他后处理工作。后置脚本只对当前请求有效，不会影响其他请求。</p>
<h3 id="响应状态码断言" tabindex="-1"><a class="header-anchor" href="#响应状态码断言" aria-hidden="true">#</a> 响应状态码断言</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//HTTP响应状态码断言</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Status code is 200"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span>to<span class="token punctuation">.</span>have<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//HTTP响应状态码是列表中一个</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Successful POST request"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//HTTP响应状态码包含字段 OK</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Status code name has string"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span>to<span class="token punctuation">.</span>have<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token string">"OK"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726191632.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="响应时间断言" tabindex="-1"><a class="header-anchor" href="#响应时间断言" aria-hidden="true">#</a> 响应时间断言</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 响应时间是否小于200ms</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Response time is less than 200ms"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span>responseTime<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token function">below</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726191427.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="响应体断言" tabindex="-1"><a class="header-anchor" href="#响应体断言" aria-hidden="true">#</a> 响应体断言</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//响应body体断言</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Body matches string"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">include</span><span class="token punctuation">(</span><span class="token string">"json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//响应json体路径断言 如果包含-则直接使用字符串</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Your test name"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> jsonData <span class="token operator">=</span> pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">"Content-Type"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">eql</span><span class="token punctuation">(</span><span class="token string">"application/json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//整个响应body体断言</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Body is correct"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span>to<span class="token punctuation">.</span>have<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token string">"response_body_string"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726191815.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/interface/assets/20230726192054.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="随机请求参数获取" tabindex="-1"><a class="header-anchor" href="#随机请求参数获取" aria-hidden="true">#</a> 随机请求参数获取</h3>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>请求body体参数值使用了随机生成数，想要在请求发送出去后，获取当前随机生成数的具体值，如何操作？</p>
<p><a href="http://81.70.96.121/post" target="_blank" rel="noopener noreferrer">post<ExternalLinkIcon/></a>请求携带body体如下：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"{{$randomFirstName}}"</span><span class="token punctuation">,</span>
    <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"BeiJing"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在发出结果后，获取当前body体重的name值。</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<figure><img src="@source/zh/guide/interface/assets/20230726191007.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//获取请求body体参数，返回为字符串类型</span>
body <span class="token operator">=</span> pm<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body<span class="token punctuation">.</span>raw<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"请求body体参数："</span> <span class="token operator">+</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//字符串类型str转换为json实体</span>
<span class="token keyword">let</span> bodyJson <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"Json参数："</span> <span class="token operator">+</span> bodyJson<span class="token punctuation">)</span>
<span class="token comment">//打印输出json体中的name对应值</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"name值："</span> <span class="token operator">+</span> bodyJson<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="debug调试" tabindex="-1"><a class="header-anchor" href="#debug调试" aria-hidden="true">#</a> debug调试</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"debug - log"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"info - log"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"warn - log"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"error - log"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726193447.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>在Postman中，前置脚本在发送请求之前执行，用于预处理请求、设置参数和头部等。</p>
</li>
<li>
<p>后置脚本在请求完成后执行，可以对请求的响应进行断言、验证和数据处理。</p>
</li>
<li>
<p>Postman只支持一个前置脚本和一个后置脚本。</p>
</li>
<li>
<p>前置、后置脚本都是使用JavaScript语言编写的，通过JavaScript代码来实现请求的预处理和响应的处理。</p>
</li>
</ul>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>在Postman中，前置脚本（Pre-request Script）和后置脚本（Tests）分别在以下哪个阶段执行？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. 前置脚本在发送请求之前执行，后置脚本在请求完成后执行</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B. 前置脚本在发送请求之后执行，后置脚本在请求完成前执行</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. 前置脚本在发送请求之前执行，后置脚本在请求过程中执行</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. 前置脚本在发送请求之后执行，后置脚本在请求过程中执行</label></li>
</ul>
<blockquote>
<p>答案：A</p>
</blockquote>
</li>
<li>
<p>前置脚本主要用于做什么？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> A. 进行请求参数的验证和校验</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> B. 对请求进行预处理，设置请求参数、头部等</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> C. 对请求的响应进行断言和验证</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> D. 对请求的响应进行数据处理和存储</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
<li>
<p>后置脚本主要用于做什么？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> A. 进行请求参数的验证和校验</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> B. 对请求进行预处理，设置请求参数、头部等</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> C. 对请求的响应进行断言和验证</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> D. 对请求的响应进行数据处理和存储</label></li>
</ul>
<blockquote>
<p>答案：C、D</p>
</blockquote>
</li>
<li>
<p>可以在Postman中同时添加多个前置脚本和后置脚本吗？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> A. 可以，前置脚本和后置脚本数量没有限制</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> B. 只能添加一个前置脚本和一个后置脚本</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> C. 可以，但是前置脚本和后置脚本只能各添加一个</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> D. 不可以，Postman只支持一个前置脚本或一个后置脚本</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
<li>
<p>在前置脚本或后置脚本中，可以使用哪种语言编写脚本？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> A. Python</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> B. JavaScript</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> C. Ruby</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> D. Java</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
</ol>
</div></template>


