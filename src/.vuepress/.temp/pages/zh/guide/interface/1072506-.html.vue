<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>
<p>数据驱动介绍</p>
</li>
<li>
<p>Postman数据源：CSV文件、Json文件</p>
</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>熟练掌握使用Postman运行接口的数据驱动测试</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>Postman是否支持数据驱动测试？如何进行数据驱动测试？支持哪种数据源格式的数据驱动？</p>
</div>
<p>Postman支持数据驱动测试，使您能够通过不同的数据集运行相同的测试用例，从而提高测试覆盖率和效率。数据驱动测试在Postman中可以通过使用CSV文件、JSON文件不同数据源来实现。您可以使用变量和脚本来读取数据文件中的值，并将它们用于请求参数、预期结果验证等。</p>
<h2 id="数据驱动是什么" tabindex="-1"><a class="header-anchor" href="#数据驱动是什么" aria-hidden="true">#</a> 数据驱动是什么</h2>
<p>数据驱动测试是一种测试方法，其中测试用例的数据从外部数据源（如CSV、JSON、Excel等文件，或数据库）中获取，然后自动将这些数据应用于测试用例，从而在多个数据场景下执行测试。这种方法的主要目的是通过在不同数据集上运行相同的测试用例，提高测试的覆盖率和效率。</p>
<p>在数据驱动测试中，测试用例的逻辑是固定的，但数据是可变的。测试框架会自动遍历数据源中的每一条数据，并将其与测试用例进行关联，然后执行测试。这样一次性地执行多个测试用例，而不需要手动更改测试用例中的数据，从而减少了测试人员的工作量，提高了测试的效率。</p>
<p>数据驱动测试特别适用于以下情况：</p>
<ul>
<li>
<p>当测试用例的逻辑是固定的，但需要在不同数据集上运行测试时。</p>
</li>
<li>
<p>当需要在不同数据场景下验证应用程序的功能是否正确时。</p>
</li>
<li>
<p>当需要测试应用程序的性能和稳定性，例如压力测试场景。</p>
</li>
</ul>
<p>使用数据驱动测试可以帮助测试人员更全面地测试应用程序，并发现潜在的问题和缺陷。此外，数据驱动测试还能够提高测试的可靠性，因为它能够验证应用程序在多个数据场景下的一致性和稳定性。</p>
<h2 id="数据驱动请求编写" tabindex="-1"><a class="header-anchor" href="#数据驱动请求编写" aria-hidden="true">#</a> 数据驱动请求编写</h2>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>POST请求编写时，对应参数值通过外部数据源提供，在Postman中如何进行操作？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<figure><img src="@source/zh/guide/interface/assets/20230727154247.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"{{uname}}"</span><span class="token punctuation">,</span>
    <span class="token property">"note"</span><span class="token operator">:</span> <span class="token string">"{{book}}"</span><span class="token punctuation">,</span>
    <span class="token property">"age"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>uage<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后置脚本断言：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> jsonData <span class="token operator">=</span> pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"响应结果："</span> <span class="token operator">+</span> jsonData<span class="token punctuation">)</span><span class="token punctuation">;</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"姓名断言"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">.</span>json<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">eql</span><span class="token punctuation">(</span>pm<span class="token punctuation">.</span>variables<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"uname"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"年龄断言"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">.</span>json<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">eql</span><span class="token punctuation">(</span>pm<span class="token punctuation">.</span>variables<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"uage"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"note断言"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">.</span>json<span class="token punctuation">.</span>note<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">eql</span><span class="token punctuation">(</span>pm<span class="token punctuation">.</span>variables<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"book"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/interface/assets/20230727154835.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<h2 id="csv文件" tabindex="-1"><a class="header-anchor" href="#csv文件" aria-hidden="true">#</a> CSV文件</h2>
<ol>
<li>
<p>创建data1.csv文件。</p>
<div class="language-csv line-numbers-mode" data-ext="csv"><pre v-pre class="language-csv"><code><span class="token value">uname</span><span class="token punctuation">,</span><span class="token value">book</span><span class="token punctuation">,</span><span class="token value">uage</span>
<span class="token value">张三</span><span class="token punctuation">,</span><span class="token value">迈克狐</span><span class="token punctuation">,</span><span class="token value">8</span>
<span class="token value">莉丝</span><span class="token punctuation">,</span><span class="token value">测试开发全栈</span><span class="token punctuation">,</span><span class="token value">25</span>
<span class="token value">王武</span><span class="token punctuation">,</span><span class="token value">语文</span><span class="token punctuation">,</span><span class="token value">39</span>
<span class="token value">妞妞</span><span class="token punctuation">,</span><span class="token value">数学</span><span class="token punctuation">,</span><span class="token value">44</span>
<span class="token value">米小圈</span><span class="token punctuation">,</span><span class="token value">英语</span><span class="token punctuation">,</span><span class="token value">61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>运行测试集，只选中要运行数据驱动的接口。<br>
<img src="@source/zh/guide/interface/assets/20230727153152.png" alt="" loading="lazy"></p>
</li>
<li>
<p>测试集运行完后查看具体请求参数。<br>
<img src="@source/zh/guide/interface/assets/20230727154228.png" alt="" loading="lazy"></p>
</li>
</ol>
<h2 id="json文件" tabindex="-1"><a class="header-anchor" href="#json文件" aria-hidden="true">#</a> JSON文件</h2>
<ol>
<li>
<p>创建data2.json文件。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
<span class="token punctuation">{</span>
   <span class="token property">"uname"</span><span class="token operator">:</span> <span class="token string">"张三json"</span><span class="token punctuation">,</span>
   <span class="token property">"book"</span><span class="token operator">:</span> <span class="token string">"迈克狐json"</span><span class="token punctuation">,</span>
   <span class="token property">"uage"</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
   <span class="token property">"uname"</span><span class="token operator">:</span> <span class="token string">"莉丝json"</span><span class="token punctuation">,</span>
   <span class="token property">"book"</span><span class="token operator">:</span> <span class="token string">"测试开发全栈json"</span><span class="token punctuation">,</span>
   <span class="token property">"uage"</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
   <span class="token property">"uname"</span><span class="token operator">:</span> <span class="token string">"王武json"</span><span class="token punctuation">,</span>
   <span class="token property">"book"</span><span class="token operator">:</span> <span class="token string">"语文json"</span><span class="token punctuation">,</span>
   <span class="token property">"uage"</span><span class="token operator">:</span> <span class="token number">39</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>运行测试集下的文件夹，只选中要运行数据驱动的接口。<br>
<img src="@source/zh/guide/interface/assets/20230727155618.png" alt="" loading="lazy"></p>
</li>
<li>
<p>运行完后查看具体请求参数。<br>
<img src="@source/zh/guide/interface/assets/20230727155811.png" alt="" loading="lazy"></p>
</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>在Postman中，Collection Runner是用于进行数据驱动测试的功能，它可以让您使用不同的数据集运行相同的请求，从而提高测试覆盖率和效率。</p>
</li>
<li>
<p>数据驱动测试允许您在多个环境中使用不同的数据来自动运行测试，通过关联数据文件与请求，可以在每次运行测试时自动使用不同的数据集。</p>
</li>
</ul>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>在Postman中，用于进行数据驱动测试的功能是？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. Collection Runner</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B. Postman Console</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. Request History</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. Environment Variables</label></li>
</ul>
<blockquote>
<p>答案：A</p>
</blockquote>
</li>
<li>
<p>数据驱动测试是指？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> A. 使用环境变量在不同环境中运行测试</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> B. 使用全局变量在多个测试集中共享数据</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> C. 使用不同数据集运行相同的请求</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> D. 使用数据文件运行多个请求</label></li>
</ul>
<blockquote>
<p>答案：C</p>
</blockquote>
</li>
<li>
<p>在数据驱动测试中，可以使用以下哪种数据文件格式？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> A. CSV文件</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> B. JSON文件</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> C. XML文件</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> D. 所有以上</label></li>
</ul>
<blockquote>
<p>答案：A、B</p>
</blockquote>
</li>
<li>
<p>在Collection Runner中，可以将数据文件与请求关联，以便在每次运行测试时自动使用不同的数据。这个过程称为？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> A. 数据管理</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> B. 数据驱动</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> C. 数据集成</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> D. 数据绑定</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
<li>
<p>使用数据驱动测试的好处是？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> A. 可以减少测试用例的数量</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> B. 可以自动化运行多个测试数据</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> C. 可以在不同环境中运行测试</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> D. 可以设置全局变量的默认值</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
</ol>
</div></template>


