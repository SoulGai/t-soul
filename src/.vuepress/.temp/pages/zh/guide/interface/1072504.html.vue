<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>
<p>Postman变量有：全局变量、环境变量、集合变量、局部变量</p>
</li>
<li>
<p>Postman变量的声明、调用、修改、删除</p>
</li>
<li>
<p>Postman变量如何引用</p>
</li>
<li>
<p>Postman中常见的动态变量</p>
</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>
<p>熟练掌握Postman变量的声明、引用、脚本修改及删除</p>
</li>
<li>
<p>掌握常用的动态变量</p>
</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>Postman有哪几种自定义的变量？对应作用域是什么？</p>
</div>
<p>在Postman中，有变量可以使用，它们分别是：</p>
<figure><img src="@source/zh/guide/interface/assets/var-scope-v10.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="全局变量-global-variables" tabindex="-1"><a class="header-anchor" href="#全局变量-global-variables" aria-hidden="true">#</a> 全局变量（Global Variables）</h3>
<p>全局变量是在Postman应用程序级别定义的变量，它们可以在所有环境中共享。</p>
<p>全局变量对于整个Postman应用程序是可见的，而不仅限于特定环境。</p>
<p>全局变量通常用于存储常用的值，如<strong>身份验证令牌</strong>、<strong>密钥</strong>等。</p>
<figure><img src="@source/zh/guide/interface/assets/20230726143944.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量" aria-hidden="true">#</a> 声明变量</h4>
<figure><img src="@source/zh/guide/interface/assets/20230726144114.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="调用变量" tabindex="-1"><a class="header-anchor" href="#调用变量" aria-hidden="true">#</a> 调用变量</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"------- 全局变量 ---------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取全局变量token 此时为初始值</span>
a_token <span class="token operator">=</span> pm<span class="token punctuation">.</span>globals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//命令行输出打印token</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a_token<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726144319.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="修改变量" tabindex="-1"><a class="header-anchor" href="#修改变量" aria-hidden="true">#</a> 修改变量</h4>
<p>在任意一个其它请求修改变量。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//修改全局变量名为token的值</span>
pm<span class="token punctuation">.</span>globals<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">,</span> <span class="token string">"new_token_value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取修改后的token</span>
b_token <span class="token operator">=</span> pm<span class="token punctuation">.</span>globals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打印输出token的初始值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a_token<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打印输出修改后的token值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b_token<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726150121.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="删除变量" tabindex="-1"><a class="header-anchor" href="#删除变量" aria-hidden="true">#</a> 删除变量</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token comment">//unset 删除变量</span>
pm<span class="token punctuation">.</span>globals<span class="token punctuation">.</span><span class="token function">unset</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726151913.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="环境变量-environment-variables" tabindex="-1"><a class="header-anchor" href="#环境变量-environment-variables" aria-hidden="true">#</a> 环境变量（Environment Variables）</h3>
<p>环境变量是在Postman的特定环境中定义的变量。</p>
<p>可以创建多个不同的环境，每个环境都可以有自己的变量。环境变量在不同的环境之间共享，允许您在不同环境中切换并轻松地修改变量值。</p>
<p>例如，可以在开发、测试和生产环境中使用不同的API地址。</p>
<h4 id="声明变量-1" tabindex="-1"><a class="header-anchor" href="#声明变量-1" aria-hidden="true">#</a> 声明变量</h4>
<figure><img src="@source/zh/guide/interface/assets/20230726150406.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="调用变量-1" tabindex="-1"><a class="header-anchor" href="#调用变量-1" aria-hidden="true">#</a> 调用变量</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"------- 环境变量 ---------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取环境变量url 此时为初始值</span>
a_url <span class="token operator">=</span> pm<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//命令行输出打印url</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a_url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726151022.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="修改变量-1" tabindex="-1"><a class="header-anchor" href="#修改变量-1" aria-hidden="true">#</a> 修改变量</h4>
<p>在当前环境下不同的集合的其它请求修改变量。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//修改环境变量名为url的值</span>
pm<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span> <span class="token string">"gitee.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取修改后的url</span>
b_url <span class="token operator">=</span> pm<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打印输出url的初始值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a_url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打印输出修改后的url值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b_url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726150735.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="删除变量-1" tabindex="-1"><a class="header-anchor" href="#删除变量-1" aria-hidden="true">#</a> 删除变量</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//删除变量</span>
pm<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">unset</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726152122.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="集合变量-collection-variables" tabindex="-1"><a class="header-anchor" href="#集合变量-collection-variables" aria-hidden="true">#</a> 集合变量（Collection Variables）</h3>
<p>集合变量在集合中的整个请求中可用，并且独立于环境。集合变量不会根据所选环境而改变。</p>
<p>如果您使用单一环境，例如用于身份验证或 URL 详细信息，则集合变量适用。</p>
<h4 id="声明变量-2" tabindex="-1"><a class="header-anchor" href="#声明变量-2" aria-hidden="true">#</a> 声明变量</h4>
<figure><img src="@source/zh/guide/interface/assets/20230726151328.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="调用变量-2" tabindex="-1"><a class="header-anchor" href="#调用变量-2" aria-hidden="true">#</a> 调用变量</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"------- 集合变量 ---------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取集合变量col 此时为初始值</span>
a_col <span class="token operator">=</span> pm<span class="token punctuation">.</span>collectionVariables<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"col"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//命令行输出打印col</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a_col<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726152643.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="修改变量-2" tabindex="-1"><a class="header-anchor" href="#修改变量-2" aria-hidden="true">#</a> 修改变量</h4>
<p>在当前集合下的其它请求修改变量。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//修改集合变量名为col的值</span>
pm<span class="token punctuation">.</span>collectionVariables<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"col"</span><span class="token punctuation">,</span> <span class="token string">"new_value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b_col <span class="token operator">=</span> pm<span class="token punctuation">.</span>collectionVariables<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"col"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打印输出col的初始值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a_col<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打印输出修改后的col值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b_col<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726152537.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="删除变量-2" tabindex="-1"><a class="header-anchor" href="#删除变量-2" aria-hidden="true">#</a> 删除变量</h4>
<figure><img src="@source/zh/guide/interface/assets/20230726152954.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="局部变量-local-variables" tabindex="-1"><a class="header-anchor" href="#局部变量-local-variables" aria-hidden="true">#</a> 局部变量（Local Variables）</h3>
<p>局部变量是在Postman请求脚本中定义的临时变量。它们只在当前请求的作用域中有效，并且不会在其他请求中共享。</p>
<p>局部变量通常在脚本中用于处理请求的响应，并在后续测试或请求中使用。</p>
<h4 id="声明变量-3" tabindex="-1"><a class="header-anchor" href="#声明变量-3" aria-hidden="true">#</a> 声明变量</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"------- 局部变量 ---------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pm<span class="token punctuation">.</span>variables<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"variable_key"</span><span class="token punctuation">,</span> <span class="token string">"variable_value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230726161335.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="调用变量-3" tabindex="-1"><a class="header-anchor" href="#调用变量-3" aria-hidden="true">#</a> 调用变量</h4>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>局部变量使用测试集运行，正常获取到值。</p>
<figure><img src="@source/zh/guide/interface/assets/20230726153900.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果是单个接口运行，先运行声明变量的接口，再运行获取变量的接口也是无法获取到该变量值。<br>
<img src="@source/zh/guide/interface/assets/20230726153956.png" alt="" loading="lazy"></p>
</div>
<p>通过使用这几种类型的变量，可以在Postman中更好地管理和维护您的请求和测试数据，使测试用例更具灵活性和可重用性。使用变量可以帮助您减少重复工作，并在不同的环境中轻松地切换和配置您的请求。</p>
<h2 id="使用变量" tabindex="-1"><a class="header-anchor" href="#使用变量" aria-hidden="true">#</a> 使用变量</h2>
<p>使用双花括号来引用整个 Postman 中的变量。例如，要在请求授权设置中引用名为“username”的变量，您可以使用以下语法，并在名称周围加上双花括号：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{username}}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当您运行请求时，Postman 将解析变量并将其替换为其当前值。</p>
<p>您可以在请求 URL、参数、标头、授权、正文和标头预设中使用变量。</p>
<figure><img src="@source/zh/guide/interface/assets/var-auth-v8.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>当您将鼠标悬停在变量上时，Postman 会显示其当前状态的概述。当您向请求添加变量时，Postman 会提示您当前定义的任何变量。</p>
<figure><img src="@source/zh/guide/interface/assets/var-prompt-v10.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>提示指示当前值、范围（以颜色突出显示）和相关的覆盖状态。</p>
<figure><img src="@source/zh/guide/interface/assets/overridden-var-v10.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果变量未解析，Postman 会将其突出显示为红色。有关如何修复未解析的变量的信息，请参阅<a href="https://learning.postman.com/docs/sending-requests/variables/#fixing-unresolved-variables" target="_blank" rel="noopener noreferrer">修复未解析的变量<ExternalLinkIcon/></a>。</p>
<figure><img src="@source/zh/guide/interface/assets/unresolved-variable-v10.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="动态变量" tabindex="-1"><a class="header-anchor" href="#动态变量" aria-hidden="true">#</a> 动态变量</h2>
<p>Postman 提供了您可以在请求中使用的动态变量。</p>
<p><a href="https://learning.postman.com/docs/writing-scripts/script-references/variables-list/" target="_blank" rel="noopener noreferrer">动态变量<ExternalLinkIcon/></a>的示例包括：</p>
<ul>
<li><code v-pre>{{$guid}}</code>: 风格的 GUID</li>
<li><code v-pre>{{$timestamp}}</code>：当前 Unix 时间戳（以秒为单位）</li>
<li><code v-pre>{{$randomInt}}</code>: 0 到 1000 之间的随机整数</li>
<li><code v-pre>{{$randomFirstName}}</code>：随机的名字</li>
</ul>
<figure><img src="@source/zh/guide/interface/assets/20230726160911.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>Postman变量的优先级：全局变量 &gt; 测试集变量 &gt; 环境变量 &gt; 局部作用域变量。</p>
</li>
<li>
<p>get()方法获取变量，set(&quot;key&quot;, &quot;value&quot;)方法修改变量，unset()方法删除变量。</p>
</li>
<li>
<p>Postman变量引用：声明的变量引用 <code v-pre>{{变量名}}</code>，随机的变量引用 <code v-pre>{{$随机方法名}}</code>。</p>
</li>
</ul>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>Postman中用于保存全局变量的对象是？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. <code v-pre>pm</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B. <code v-pre>postman</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. <code v-pre>globals</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. <code v-pre>environment</code></label></li>
</ul>
<blockquote>
<p>答案：C</p>
</blockquote>
</li>
<li>
<p>下面哪个选项是Postman用于保存环境变量的对象？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> A. <code v-pre>pm</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> B. <code v-pre>postman</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> C. <code v-pre>globals</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> D. <code v-pre>environment</code></label></li>
</ul>
<blockquote>
<p>答案：D</p>
</blockquote>
</li>
<li>
<p>在Postman中，用于在测试脚本中获取环境变量的方法是？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> A. <code v-pre>pm.environment.get()</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> B. <code v-pre>postman.environment.get()</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> C. <code v-pre>environment.get()</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> D. <code v-pre>pm.globals.get()</code></label></li>
</ul>
<blockquote>
<p>答案：A</p>
</blockquote>
</li>
<li>
<p>在Postman中，可以使用哪个方法在请求中设置参数的值？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> A. <code v-pre>pm.setParam()</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> B. <code v-pre>postman.setParam()</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> C. <code v-pre>pm.request.params.set()</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> D. <code v-pre>pm.request.setParam()</code></label></li>
</ul>
<blockquote>
<p>答案：C</p>
</blockquote>
</li>
<li>
<p>可以使用以下哪个方法在请求头中设置参数的值？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> A. <code v-pre>pm.setHeader()</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> B. <code v-pre>postman.setHeader()</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> C. <code v-pre>pm.request.headers.set()</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> D. <code v-pre>pm.request.setHeader()</code></label></li>
</ul>
<blockquote>
<p>答案：C</p>
</blockquote>
</li>
<li>
<p>在Postman中，引用变量使用以下哪种格式？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> A. <code v-pre>{{variable_name}}</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" disabled="disabled"><label class="task-list-item-label" for="task-item-21"> B. <code v-pre>{variable_name}</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" disabled="disabled"><label class="task-list-item-label" for="task-item-22"> C. <code v-pre>$variable_name</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" disabled="disabled"><label class="task-list-item-label" for="task-item-23"> D. <code v-pre>%variable_name%</code></label></li>
</ul>
<blockquote>
<p>答案：A</p>
</blockquote>
</li>
</ol>
</div></template>


