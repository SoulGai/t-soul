<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>GET请求参数传递方式有几种</li>
<li>路径参数接口开发</li>
<li>查询参数接口开发</li>
<li>参数默认值声明</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>熟练掌握GET请求携带参数编写规范</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>如何使用SpringBoot开发GET请求的Web程序？<br>
GET请求如何携带参数？在代码中如何使用？</p>
</div>
<h2 id="一-get参数传递方式" tabindex="-1"><a class="header-anchor" href="#一-get参数传递方式" aria-hidden="true">#</a> 一.GET参数传递方式</h2>
<p>在 HTTP 请求中，GET 请求可以通过两种方式传递参数：<strong>路径参数</strong>和<strong>查询参数</strong>。</p>
<p>路径参数是<strong>直接附加在 URL 路径中的参数</strong>，而查询参数则是<strong>添加在 URL 的查询字符串中的参数</strong>。</p>
<p>下面我会分别解释这两种方式：</p>
<h3 id="_1-restful-风格的路径参数" tabindex="-1"><a class="header-anchor" href="#_1-restful-风格的路径参数" aria-hidden="true">#</a> 1.RESTful 风格的路径参数</h3>
<p>在 GET 请求中，路径参数是将参数直接嵌入到 URL 路径中的一部分。通常以占位符的形式出现在 URL 路径中，然后在发送请求时会被具体的值替代。</p>
<p>例如，假设你有一个 API 路径为 <code v-pre>https://example.com/users/{userId}</code>，其中的 <code v-pre>{userId}</code> 就是一个路径参数。你可以通过将具体的用户 ID 值嵌入路径中来请求特定用户的信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>https://example.com/users/123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230817140339.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-普通的查询参数" tabindex="-1"><a class="header-anchor" href="#_2-普通的查询参数" aria-hidden="true">#</a> 2.普通的查询参数</h3>
<p>查询参数是附加在 URL 的查询字符串中的键值对参数。在 URL 中，查询参数通常以 <code v-pre>?</code> 开头，然后使用 <code v-pre>&amp;</code> 分隔不同的参数。</p>
<p>例如，请求特定用户的信息并传递查询参数的 GET 请求可能如下所示：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>https://example.com/users?name<span class="token operator">=</span>john<span class="token operator">&amp;</span><span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230817140552.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="二-获取-restful-风格的路径参数" tabindex="-1"><a class="header-anchor" href="#二-获取-restful-风格的路径参数" aria-hidden="true">#</a> 二.获取 RESTful 风格的路径参数</h2>
<div class="hint-container tip">
<p class="hint-container-title">需求</p>
<p>开发一个访问 <code v-pre>/users/{userId}</code> 页面显示&quot;<strong>用户的ID为：{userId}</strong>&quot;的Web程序？</p>
<p>userId为123 页面显示：<code v-pre>用户的ID为：123</code></p>
</div>
<h3 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h3>
<ol>
<li>
<p>浏览器发送请求路径，页面显示内容   ---&gt;   请求为<code v-pre>GET</code>请求</p>
</li>
<li>
<p>对应请求有路径，且有可变参数<code v-pre>{userId}</code></p>
</li>
</ol>
<h3 id="开发流程" tabindex="-1"><a class="header-anchor" href="#开发流程" aria-hidden="true">#</a> 开发流程</h3>
<ol>
<li>
<p>编写业务代码，接口请求类，自定义请求路径为：<code v-pre>/users/{userId}</code>。</p>
<ol>
<li>
<p>方法需要有参数。</p>
</li>
<li>
<p>方法的参数要和前端请求声明参数名绑定。</p>
</li>
<li>
<p><code v-pre>userId</code>作为请求URI后的参数，请求路径需要有该参数。</p>
</li>
</ol>
</li>
<li>
<p>测试，idea启动服务，浏览器访问验证。</p>
</li>
</ol>
<h4 id="_1」业务代码" tabindex="-1"><a class="header-anchor" href="#_1」业务代码" aria-hidden="true">#</a> 1」业务代码</h4>
<ol>
<li>
<p>创建与前端请求交互的<code v-pre>Controller</code>层，包名为：<code v-pre>controller</code>。</p>
</li>
<li>
<p>创建与<code v-pre>/hello</code>请求交互的<code v-pre>Controller</code>接口类，名为：<code v-pre>GetController</code>。</p>
</li>
<li>
<p>添加类注解：<code v-pre>@RestController</code>或者<code v-pre>@Controller+@ResponseBody</code>。【说明这是一个和web请求交互的类】</p>
</li>
<li>
<p>在方法参数中使用 <code v-pre>@PathVariable</code> 注解来获取路径参数的值。</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 带路径参数
 * @PathVariable
 * <span class="token keyword">@param</span> <span class="token parameter">customUserId</span>
 * URI   http://localhost:8080/users/<span class="token punctuation">{</span>userId<span class="token punctuation">}</span>
 * <span class="token keyword">@return</span>
 */</span>

<span class="token comment">//传入的参数名与方法的参数名一致</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/users/{userId}"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"用户的信息："</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">"是一个ID!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//传入的参数名与方法的参数名不一致</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/users/{userId}"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> customUserId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"用户的信息："</span> <span class="token operator">+</span> customUserId <span class="token operator">+</span> <span class="token string">"是一个ID!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>@GetMapping</code> 注解用于映射 <code v-pre>GET</code> 请求的路径。</p>
</li>
<li>
<p><code v-pre>@PathVariable</code> 注解用于获取路径参数的值，并将其注入到 <code v-pre>userId</code> 参数中。</p>
</li>
</ul>
<h4 id="_2」测试" tabindex="-1"><a class="header-anchor" href="#_2」测试" aria-hidden="true">#</a> 2」测试</h4>
<p>当你访问类似 <code v-pre>/users/123</code> 的路径时，Spring Boot 将自动将路径中的 123 注入到 <code v-pre>getUserInfo</code> 方法的 <code v-pre>userId</code> 参数中。你可以在方法内部使用 userId 来查询对应用户的信息，并返回相应的结果。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230817144114.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三-获取普通的查询参数" tabindex="-1"><a class="header-anchor" href="#三-获取普通的查询参数" aria-hidden="true">#</a> 三.获取普通的查询参数</h2>
<div class="hint-container tip">
<p class="hint-container-title">需求1</p>
<p>开发一个访问 <code v-pre>/native?sname={name}</code> 页面携带地址显示&quot;<strong>这是一个本国的地址为：{name} 的内容!</strong>&quot;的Web程序？</p>
<p>sname为北京 页面显示：<code v-pre>这是一个本国的地址为：北京 的内容!</code></p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">需求2</p>
<p>开发一个访问 <code v-pre>/users?name={uname}&amp;id={userId}</code> 页面携带用户名和ID显示&quot;<strong>用户 {uname} 的ID为：{userId}</strong>&quot;的Web程序？</p>
<p>name为John，id为123 页面显示：<code v-pre>用户 John 的ID为：123</code></p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">需求3</p>
<p>开发一个访问 <code v-pre>/u?names=列表</code> 页面携带用户名和ID显示&quot;<strong>User info for names：{names}</strong>&quot;的Web程序？</p>
<p>name为张三, aa 页面显示：<code v-pre>User info for names: [张三, aa]</code></p>
</div>
<h3 id="需求分析-1" tabindex="-1"><a class="header-anchor" href="#需求分析-1" aria-hidden="true">#</a> 需求分析</h3>
<ol>
<li>
<p>浏览器发送请求路径，页面显示内容   ---&gt;   请求为<code v-pre>GET</code>请求。</p>
</li>
<li>
<p>对应请求有路径，且有查询参数。</p>
</li>
</ol>
<h3 id="开发流程-1" tabindex="-1"><a class="header-anchor" href="#开发流程-1" aria-hidden="true">#</a> 开发流程</h3>
<ol>
<li>
<p>编写业务代码，接口请求类，自定义请求路径。</p>
<ol>
<li>
<p>方法需要有参数。</p>
</li>
<li>
<p>方法的参数要和前端请求的查询参数名绑定。</p>
</li>
</ol>
</li>
<li>
<p>测试，idea启动服务，浏览器访问验证。</p>
</li>
</ol>
<h4 id="需求1-单个查询参数" tabindex="-1"><a class="header-anchor" href="#需求1-单个查询参数" aria-hidden="true">#</a> 需求1 - 单个查询参数</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 带查询参数 /native?sname=<span class="token punctuation">{</span>name<span class="token punctuation">}</span>
 * <span class="token keyword">@param</span> <span class="token parameter">name</span>
 * <span class="token keyword">@return</span>
 */</span>

<span class="token comment">//传入的参数名与方法的参数名一致</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/native"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getNative</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> sname<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"这是一个本国的地址为："</span> <span class="token operator">+</span> sname <span class="token operator">+</span> <span class="token string">" 的内容!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//传入的参数名与方法的参数名不一致</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/native"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getNative</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"sname"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"这是一个本国的地址为："</span> <span class="token operator">+</span> name <span class="token operator">+</span><span class="token string">" 的内容!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>@GetMapping</code> 注解来映射 GET 请求的路径为 <code v-pre>/native</code>。通过 @RequestParam(&quot;sname&quot;) 注解，我们将查询参数 <code v-pre>sname</code> 的值绑定到<strong>方法参数</strong> <code v-pre>name</code> 上。</p>
<p>当你访问类似 <code v-pre>/native?s=your_parameter_value</code> 的路径时，Spring Boot 将自动将查询参数中的值传递给 <code v-pre>getNative</code> 方法的 name 参数。</p>
<p>你可以在方法内部使用 name 来处理查询参数的值，例如返回它或进行其他操作。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230817151306.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="需求2-多个查询参数" tabindex="-1"><a class="header-anchor" href="#需求2-多个查询参数" aria-hidden="true">#</a> 需求2 - 多个查询参数</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 带查询参数 /users?name=<span class="token punctuation">{</span>uname<span class="token punctuation">}</span>&amp;id=<span class="token punctuation">{</span>userId<span class="token punctuation">}</span>
 * <span class="token keyword">@param</span> <span class="token parameter">name</span>
 * <span class="token keyword">@return</span>
 */</span>

<span class="token comment">//传入的参数名与方法的参数名一致</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"用户"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"的ID为："</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//传入的参数名与方法的参数名不一致</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> uname<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"用户"</span> <span class="token operator">+</span> uname <span class="token operator">+</span> <span class="token string">"的ID为："</span> <span class="token operator">+</span> userId<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>@GetMapping</code> 注解来映射 GET 请求的路径为 <code v-pre>/users</code>。通过 @RequestParam(&quot;name&quot;)、@RequestParam(&quot;id&quot;) 注解，我们将查询参数 <code v-pre>name</code> 的值绑定到<strong>方法参数</strong> <code v-pre>uname</code> 上，查询参数 <code v-pre>id</code> 的值绑定到<strong>方法参数</strong> <code v-pre>userId</code> 上。</p>
<p>当你访问类似 <code v-pre>/users?name={uname}&amp;id={userId}</code> 的路径时，Spring Boot 将自动将查询参数中的值传递给 <code v-pre>getUser</code> 方法参数。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230817152831.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="需求3-查询参数为多值" tabindex="-1"><a class="header-anchor" href="#需求3-查询参数为多值" aria-hidden="true">#</a> 需求3 - 查询参数为多值</h4>
<p>如果查询参数为多值，可以使用数组或集合来接收。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/u"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据多个名称查询用户信息</span>
    <span class="token keyword">return</span> <span class="token string">"User info for names: "</span> <span class="token operator">+</span> names<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230817155237.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四-参数设置默认值" tabindex="-1"><a class="header-anchor" href="#四-参数设置默认值" aria-hidden="true">#</a> 四.参数设置默认值</h2>
<p>在 Spring Boot 中，你可以为 @PathVariable 和 @RequestParam 注解设置默认值，以<strong>防止请求参数没有传入值时报错</strong>。你可以使用 <code v-pre>defaultValue</code> 属性来为这些注解设置默认值。</p>
<p>在某些情况下，合理设置默认值可以提高应用程序的容错性和用户体验。但在其他情况下，将处理无参数的情况作为特殊情况来处理可能更为合适。</p>
<h3 id="路径参数默认值" tabindex="-1"><a class="header-anchor" href="#路径参数默认值" aria-hidden="true">#</a> 路径参数默认值</h3>
<p>@PathVariable不建议设置默认值，因为<strong>null对于url是无意义的</strong>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 配置多个地址映射</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"/users/{userId}/{id}"</span><span class="token punctuation">,</span><span class="token string">"/users/{userId}"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"userId"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> customUserId<span class="token punctuation">,</span> <span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 id 没有传入值，使用默认值 0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        id <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">"用户的信息："</span> <span class="token operator">+</span> customUserId <span class="token operator">+</span> <span class="token string">"是一个ID!"</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230817164034.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="查询参数默认值" tabindex="-1"><a class="header-anchor" href="#查询参数默认值" aria-hidden="true">#</a> 查询参数默认值</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/native"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getNative</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"sname"</span><span class="token punctuation">,</span>defaultValue <span class="token operator">=</span> <span class="token string">"Guest"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"这是一个本国的地址为："</span> <span class="token operator">+</span> name <span class="token operator">+</span><span class="token string">" 的内容!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230817161613.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="五-特定查询条件方法" tabindex="-1"><a class="header-anchor" href="#五-特定查询条件方法" aria-hidden="true">#</a> 五.特定查询条件方法</h2>
<p>@GetMapping 注解用于映射 HTTP GET 请求到特定的处理方法。<code v-pre>path</code> 属性<strong>指定了请求的路径</strong>，而 <code v-pre>params</code> 属性<strong>指定了请求必须满足的查询参数条件</strong>。</p>
<p>指定了请求必须满足的查询参数条件</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * /test?app=<span class="token punctuation">{</span>name<span class="token punctuation">}</span>&amp;desc=<span class="token punctuation">{</span>desc<span class="token punctuation">}</span>
 * <span class="token keyword">@param</span> <span class="token parameter">name</span>
 * <span class="token keyword">@param</span> <span class="token parameter">desc</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token comment">//任意参数时，走当前的业务逻辑</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">"/test"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTest</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> desc<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"产品 "</span><span class="token operator">+</span> name <span class="token operator">+</span><span class="token string">" 的测试内容为："</span> <span class="token operator">+</span> desc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//参数传入app值为淘宝，desc的值为UI自动化时，运行当前方法</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">"/test"</span><span class="token punctuation">,</span>params <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">"app=淘宝"</span><span class="token punctuation">,</span>
        <span class="token string">"desc=UI自动化"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTest1</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> desc<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"这是一个特定的自动化测试用例："</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">";desc："</span> <span class="token operator">+</span> desc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230818113603.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="六-混合参数" tabindex="-1"><a class="header-anchor" href="#六-混合参数" aria-hidden="true">#</a> 六.混合参数</h2>
<div class="hint-container tip">
<p class="hint-container-title">需求</p>
<p>开发一个访问 <code v-pre>/t/top/{city}/{year}?describe=&amp;money=</code> 页面</p>
<p><code v-pre>/t/top?describe=&amp;money=</code>或者<code v-pre>/t/top</code> 显示：year年city人均支出为：45675元!【粗略判断】</p>
<p><code v-pre>/t/top/北京市/2000?describe=精准&amp;money=85496</code> 显示：2000年北京市人均支出为：85496元!【精准判断】</p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"/t/top/{city}/{year}"</span><span class="token punctuation">,</span><span class="token string">"/t/top"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTop</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">String</span> city<span class="token punctuation">,</span>
                        <span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">String</span> year<span class="token punctuation">,</span>
                        <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"describe"</span><span class="token punctuation">,</span> required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> defaultValue <span class="token operator">=</span> <span class="token string">"粗略"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span>
                        <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>defaultValue <span class="token operator">=</span> <span class="token string">"45675"</span><span class="token punctuation">)</span> <span class="token keyword">double</span> money<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> year<span class="token punctuation">)</span> year <span class="token operator">=</span> <span class="token string">"year"</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> city<span class="token punctuation">)</span> city <span class="token operator">=</span> <span class="token string">"city"</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> year<span class="token operator">+</span><span class="token string">"年"</span><span class="token operator">+</span>city<span class="token operator">+</span><span class="token string">"人均支出为："</span><span class="token operator">+</span>money<span class="token operator">+</span><span class="token string">"元!【"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"判断】"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230818140749.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>注意：默认值只能是字符串格式，会自动根据字符串格式转为double类型的数据。</p>
</blockquote>
<h2 id="四-注解讲解" tabindex="-1"><a class="header-anchor" href="#四-注解讲解" aria-hidden="true">#</a> 四.注解讲解</h2>
<p>GET请求相关注解：<code v-pre>@RequestMapping</code>、<code v-pre>@GetMapping</code>、<code v-pre>@PathVariable</code>、<code v-pre>@RequestParam</code>。</p>
<p>@PathVariable 和 @RequestParam 是 Spring Framework 中用于处理不同类型参数的注解，用于从 URL 中提取路径参数和查询参数。</p>
<h3 id="pathvariable-注解" tabindex="-1"><a class="header-anchor" href="#pathvariable-注解" aria-hidden="true">#</a> @PathVariable 注解</h3>
<p>@PathVariable 用于<strong>从 URL 路径中提取变量值</strong>，通常用于<strong>获取 RESTful 风格的路径参数</strong>。例如，在一个 URL 路径为 /users/{userId} 的请求中，你可以使用 @PathVariable 来获取 userId 的值。</p>
<ul>
<li>name/value：要绑定的请求参数的名称，跟<code v-pre>URI</code>上填写的路径名一样</li>
<li>required：请求参数是否必填，默认<code v-pre>true</code>。</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>请求缺少参数会引发<code v-pre>MethodArgumentTypeMismatchException</code>异常<br>
【请求处理过程中出现类型转换错误时抛出】<br>
比如：请求中路径参数不存在或为<code v-pre>null</code>。</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<ol>
<li><code v-pre>required</code>声明为<code v-pre>false</code>。</li>
<li>配置多个地址映射。</li>
</ol>
<p>具体查看<RouterLink to="/zh/guide/springboot3/1081701.html#%E8%B7%AF%E5%BE%84%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC">路径参数默认值</RouterLink>。</p>
</details>
<h3 id="requestparam-注解" tabindex="-1"><a class="header-anchor" href="#requestparam-注解" aria-hidden="true">#</a> @RequestParam 注解</h3>
<p>@RequestParam 用于<strong>从查询字符串中提取参数值</strong>，即查询参数。它可以用于<strong>获取普通的查询参数</strong>，例如 ?name=value，或者在多值参数情况下获取多个值。</p>
<ul>
<li>
<p>name/value：?后要绑定的请求参数的名称，跟<code v-pre>URL</code>上一样</p>
</li>
<li>
<p>defaultValue：请求参数未提供或空时的默认值，提供默认值会隐式地将 <code v-pre>required</code> 设置为 <code v-pre>false</code>。</p>
</li>
<li>
<p>required：请求参数是否必填，默认<code v-pre>true</code>。</p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>请求缺少参数会引发<code v-pre>MethodArgumentTypeMismatchException</code>异常<br>
【请求处理过程中出现类型转换错误时抛出】<br>
比如：请求中查询参数不存在或为<code v-pre>null</code>。</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<ol>
<li>直接在 @RequestParam 注解上使用defaultValue声明默认值。</li>
</ol>
<p>具体查看<RouterLink to="/zh/guide/springboot3/1081701.html#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC">查询参数默认值</RouterLink>。</p>
</details>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>
<p><code v-pre>@PathVariable</code> 用于获取<strong>路径参数</strong>，<code v-pre>@RequestParam</code> 用于获取<strong>查询参数</strong>。</p>
</li>
<li>
<p><code v-pre>@RequestParam</code>可直接 <code v-pre>defaultValue</code>声明默认值。</p>
</li>
<li>
<p><code v-pre>@PathVariable</code>不建议使用默认值，如果使用则需要写多个请求路径，并标明参数为非必须，在方法中判断<code v-pre>null</code>时声明默认值。</p>
</li>
<li>
<p><code v-pre>@PathVariable</code>、<code v-pre>@RequestParam</code>可同时使用。</p>
</li>
</ol>
</div></template>


