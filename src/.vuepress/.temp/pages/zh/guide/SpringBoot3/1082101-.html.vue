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
<p>绑定复杂对象和页面渲染的场景应该选择哪种注解？</p>
</div>
<p>@ModelAttribute 是 Spring Framework 中的注解，用于绑定请求参数到方法的参数或对象上。在 Spring Boot 中，@ModelAttribute 通常用于将请求参数绑定到控制器方法的方法参数或返回的对象上。以下是一些适用场景以及相应的代码示例：</p>
<h2 id="场景-1-将请求参数绑定到方法参数上" tabindex="-1"><a class="header-anchor" href="#场景-1-将请求参数绑定到方法参数上" aria-hidden="true">#</a> 场景 1：将请求参数绑定到方法参数上</h2>
<p>你可以使用 <code v-pre>@ModelAttribute</code> 将请求参数绑定到方法的参数上，从而直接获取请求中的参数值。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ModelAttribute</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在这里使用 userId 获取用户信息</span>
        <span class="token keyword">return</span> <span class="token string">"User ID: "</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，请求参数中的 &quot;userId&quot; 将被绑定到 getUser 方法的 userId 参数上。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230821114309.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="场景-使用默认的-modelattribute-命名" tabindex="-1"><a class="header-anchor" href="#场景-使用默认的-modelattribute-命名" aria-hidden="true">#</a> 场景：使用默认的 @ModelAttribute 命名</h3>
<p>如果没有指定 @ModelAttribute 的 value 属性，Spring Boot 将使用方法参数的类型名称（首字母小写）作为默认的命名。这在绑定参数时非常方便。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//默认的 @ModelAttribute 命名 Spring Boot 将自动创建一个名为 "user" 的 @ModelAttribute，并将请求参数绑定到 UserDTO 对象上。</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/user-details"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserDetails</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ModelAttribute</span> <span class="token class-name">UserDTO</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这里使用 user 获取用户详细信息</span>
    <span class="token keyword">return</span> <span class="token string">"User details: "</span> <span class="token operator">+</span> user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，Spring Boot 将自动创建一个名为 &quot;<strong>user</strong>&quot; 的 <code v-pre>@ModelAttribute</code>，并将请求参数绑定到 User 对象上。</p>
<h2 id="场景-2-将请求参数绑定到对象上" tabindex="-1"><a class="header-anchor" href="#场景-2-将请求参数绑定到对象上" aria-hidden="true">#</a> 场景 2：将请求参数绑定到对象上</h2>
<p>你可以使用 @ModelAttribute 将请求参数绑定到一个对象上，这在<strong>处理复杂的参数结构</strong>时非常有用。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//Spring Boot 将自动创建一个名为 "user" 的 @ModelAttribute，并将请求参数绑定到 UserDTO 对象上。</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/create-user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ModelAttribute</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span> <span class="token class-name">UserDTO</span> userDTO<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这里使用 user 对象创建用户</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"User created: "</span> <span class="token operator">+</span> userDTO<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，请求参数将被绑定到 User 对象上，然后可以在方法内部处理这个对象。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230821113026.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="场景-3-将对象添加到模型-model-中" tabindex="-1"><a class="header-anchor" href="#场景-3-将对象添加到模型-model-中" aria-hidden="true">#</a> 场景 3: 将对象添加到模型(Model)中</h2>
<p>被@ModelAttribute注释的方法会在此controller每个方法执行前被执行，因此对于一个controller映射多个URL的用法来说，要谨慎使用。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@ModelAttribute</span><span class="token punctuation">(</span><span class="token string">"defaultUser"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">UserDTO</span> <span class="token function">getDefaultUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">UserDTO</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDTO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"Guest"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/profile"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">UserDTO</span> <span class="token function">userProfile</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ModelAttribute</span><span class="token punctuation">(</span><span class="token string">"defaultUser"</span><span class="token punctuation">)</span> <span class="token class-name">UserDTO</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在视图中使用 user 对象，可以在页面上显示默认用户信息</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，@ModelAttribute 注解用于 <code v-pre>getDefaultUser</code> 方法，该方法返回一个名为 &quot;<code v-pre>defaultUser</code>&quot; 的模型属性（Model Attribute），该属性在 userProfile 方法中被使用。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230821113525.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>@ModelAttribute 注解允许你方便地在控制器中处理请求参数和准备数据，以供视图使用。这在处理表单、初始化默认数据等方面非常有用。</p>
<p>@ModelAttribute 的使用场景包括了需要将请求参数绑定到方法参数或对象上的各种情况。它可以使代码更简洁，避免手动解析参数。请注意，@ModelAttribute 并不仅限于这些场景，它还可以用于其他复杂的参数绑定需求。</p>
<h2 id="注解区别" tabindex="-1"><a class="header-anchor" href="#注解区别" aria-hidden="true">#</a> 注解区别</h2>
<p>@ModelAttribute、@RequestBody、@RequestParam 和 @PathVariable 都是 Spring Framework 中用于处理请求参数的注解，但它们有不同的用途和适用场景。以下是它们的优缺点和使用场景的对比：</p>
<h3 id="modelattribute" tabindex="-1"><a class="header-anchor" href="#modelattribute" aria-hidden="true">#</a> @ModelAttribute</h3>
<p><strong>优点：</strong></p>
<ol>
<li>
<p>适合将请求参数绑定到对象上，处理复杂的参数结构。</p>
</li>
<li>
<p>可以在多个请求处理方法之间共享模型属性。</p>
</li>
</ol>
<p><strong>缺点：</strong></p>
<p>对于简单的参数绑定，使用 @RequestParam 更简洁。</p>
<p><strong>适用场景：</strong></p>
<ol>
<li>
<p>处理复杂对象，如表单提交。</p>
</li>
<li>
<p>在页面渲染时填充模型属性。</p>
</li>
</ol>
<h3 id="requestbody" tabindex="-1"><a class="header-anchor" href="#requestbody" aria-hidden="true">#</a> @RequestBody</h3>
<p><strong>优点：</strong></p>
<ol>
<li>
<p>用于接收请求体中的数据，适用于多种数据格式。</p>
</li>
<li>
<p>可以用于处理 JSON、XML 等格式的数据。</p>
</li>
</ol>
<p><strong>缺点：</strong></p>
<p>对于简单的查询参数，使用 @RequestParam 更合适。</p>
<p><strong>适用场景：</strong></p>
<ol>
<li>
<p>处理请求体中的数据，如 JSON 或 XML。</p>
</li>
<li>
<p>在 RESTful API 中接收复杂的请求数据。</p>
</li>
</ol>
<h3 id="requestparam" tabindex="-1"><a class="header-anchor" href="#requestparam" aria-hidden="true">#</a> @RequestParam</h3>
<p><strong>优点：</strong></p>
<ol>
<li>
<p>用于处理查询参数，适用于简单的参数绑定。</p>
</li>
<li>
<p>可以指定默认值，处理参数缺失情况。</p>
</li>
</ol>
<p><strong>缺点：</strong></p>
<p>对于复杂对象，需要手动解析和映射。</p>
<p><strong>适用场景：</strong></p>
<ol>
<li>
<p>处理查询参数，如字符串、数字等。</p>
</li>
<li>
<p>处理简单的 GET、POST 参数。</p>
</li>
</ol>
<h3 id="pathvariable" tabindex="-1"><a class="header-anchor" href="#pathvariable" aria-hidden="true">#</a> @PathVariable</h3>
<p><strong>优点：</strong></p>
<ol>
<li>
<p>用于处理 URL 中的路径参数。</p>
</li>
<li>
<p>方便从 URL 中提取参数值。</p>
</li>
</ol>
<p><strong>缺点：</strong></p>
<p>适用于路径参数，不适用于请求体参数。</p>
<p><strong>适用场景：</strong></p>
<p>从 URL 路径中提取参数，通常用于 RESTful API。</p>
<p>在实际使用中，选择合适的注解取决于你的需求和代码的清晰度。例如，如果你<strong>需要处理 JSON 数据</strong>，可以使用 <code v-pre>@RequestBody</code>；如果<strong>需要提取 URL 中的路径参数</strong>，可以使用 <code v-pre>@PathVariable</code>；如果<strong>只是简单的参数绑定</strong>，可以使用 <code v-pre>@RequestParam</code>。</p>
<p><code v-pre>@ModelAttribute</code> 则主要用于<strong>绑定复杂对象和页面渲染的场景</strong>。最终的选择应该根据具体的请求和处理逻辑来决定。</p>
</div></template>


