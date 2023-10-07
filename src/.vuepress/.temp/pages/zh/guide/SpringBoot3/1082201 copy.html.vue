<template><div><p>SpringBoot 摒弃了XML配置方式，改为<strong>全注解驱动</strong>。在 Spring Boot 中，容器注入组件（Bean）的方式有多种，主要有以下几种：</p>
<h3 id="使用-component-注解" tabindex="-1"><a class="header-anchor" href="#使用-component-注解" aria-hidden="true">#</a> 使用 @Component 注解</h3>
<p>在类上添加 <code v-pre>@Component</code> 注解，将其标记为一个 Spring 组件。Spring Boot 会自动将这些组件扫描并纳入容器管理。</p>
<div class="hint-container tip">
<p class="hint-container-title">场景</p>
<p>创建一个 UserService 组件，用于处理用户相关业务逻辑。</p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务逻辑：创建用户</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-service、-repository-和-controller-注解" tabindex="-1"><a class="header-anchor" href="#使用-service、-repository-和-controller-注解" aria-hidden="true">#</a> 使用 @Service、@Repository 和 @Controller 注解</h3>
<p>@Service、@Repository 和 @Controller 都是特殊类型的 @Component，它们分别用于标记服务、仓库和控制器层的组件。它们与 @Component 的作用相同，但能更准确地表达组件的角色。<br>
示例场景：创建一个 ProductService 作为服务层组件。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">getProductById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务逻辑：获取产品信息</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-configuration-注解和-bean-方法" tabindex="-1"><a class="header-anchor" href="#使用-configuration-注解和-bean-方法" aria-hidden="true">#</a> 使用 @Configuration 注解和 @Bean 方法</h3>
<p>在配置类上添加 @Configuration 注解，然后在其中使用 @Bean 注解创建 Bean 对象。这种方式常用于自定义第三方库的 Bean。<br>
示例场景：创建一个配置类来提供自定义的数据库连接池 Bean。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceConfig</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建自定义的数据源</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CustomDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-import-注解" tabindex="-1"><a class="header-anchor" href="#使用-import-注解" aria-hidden="true">#</a> 使用 @Import 注解</h3>
<p>使用 @Import 注解在一个配置类中引入其他配置类，从而将其中定义的 Bean 加入到容器中。<br>
示例场景：在主配置类中引入其他配置类，以将其中定义的 Bean 添加到容器中。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">DataSourceConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">OtherConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">// 主配置类</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些是 Spring Boot 中常用的容器注入组件的方式。你可以根据不同的业务需求和场景选择适合的方式。需要注意的是，无论使用哪种方式，Spring Boot 都会自动进行组件扫描并将相应的组件纳入到应用程序的 Spring 容器中。</p>
</div></template>


