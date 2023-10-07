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
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2>
<p>自定义属性在 Spring Boot 应用程序中具有广泛的应用场景，它们允许你在配置文件中定义自己的属性，然后在应用程序中使用这些属性值。以下是一些自定义属性的常见应用场景：</p>
<h3 id="应用程序配置" tabindex="-1"><a class="header-anchor" href="#应用程序配置" aria-hidden="true">#</a> 应用程序配置</h3>
<p>自定义属性允许你在应用程序中定义配置信息，如数据库连接参数、API密钥、外部服务的URL等。这些属性可以在整个应用程序中共享，从而使得配置更加集中和易于管理。</p>
<h3 id="外部服务集成" tabindex="-1"><a class="header-anchor" href="#外部服务集成" aria-hidden="true">#</a> 外部服务集成</h3>
<p>当你需要与外部服务进行集成时，可能需要提供一些配置参数，如认证密钥、API端点等。将这些参数定义为自定义属性可以方便地在代码中引用。</p>
<h3 id="第三方库的配置" tabindex="-1"><a class="header-anchor" href="#第三方库的配置" aria-hidden="true">#</a> 第三方库的配置</h3>
<p>某些第三方库可能需要一些配置参数，例如缓存库、消息队列等。使用自定义属性可以将这些参数从代码中分离出来，以便在不同环境中使用不同的配置。</p>
<h3 id="国际化和本地化" tabindex="-1"><a class="header-anchor" href="#国际化和本地化" aria-hidden="true">#</a> 国际化和本地化</h3>
<p>自定义属性可以用于支持国际化和本地化。你可以在属性文件中定义不同语言的消息，然后根据用户的语言设置动态加载对应的消息。</p>
<h3 id="业务规则和设置" tabindex="-1"><a class="header-anchor" href="#业务规则和设置" aria-hidden="true">#</a> 业务规则和设置</h3>
<p>如果应用程序具有可配置的业务规则或设置，你可以将这些规则定义为自定义属性，以便在不同情况下应用不同的规则。</p>
<h3 id="环境切换" tabindex="-1"><a class="header-anchor" href="#环境切换" aria-hidden="true">#</a> 环境切换</h3>
<p>使用不同的自定义属性文件，可以实现应用程序在不同环境中的配置，如开发、测试和生产环境。</p>
<h3 id="调试和日志" tabindex="-1"><a class="header-anchor" href="#调试和日志" aria-hidden="true">#</a> 调试和日志</h3>
<p>自定义属性可以用于配置调试模式和日志级别。这有助于在调试过程中更轻松地启用详细的日志记录。</p>
<h3 id="版本信息" tabindex="-1"><a class="header-anchor" href="#版本信息" aria-hidden="true">#</a> 版本信息</h3>
<p>你可以将应用程序的版本信息定义为自定义属性，以便在不同部分中引用，如页面底部的版权信息。</p>
<p>总之，自定义属性在 Spring Boot 应用程序中提供了一种有效的方式来管理和维护配置信息，使得应用程序的配置更加灵活、易于维护，并且能够适应不同的环境和需求。</p>
<h2 id="component-configurationproperties" tabindex="-1"><a class="header-anchor" href="#component-configurationproperties" aria-hidden="true">#</a> @Component+@ConfigurationProperties</h2>
<h3 id="配置文件自定义属性" tabindex="-1"><a class="header-anchor" href="#配置文件自定义属性" aria-hidden="true">#</a> 配置文件自定义属性</h3>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">&lt;!--</span> <span class="token value attr-value">application.properties --></span>
<span class="token key attr-name">pig.name</span><span class="token punctuation">=</span><span class="token value attr-value">佩奇</span>
<span class="token key attr-name">pig.age</span><span class="token punctuation">=</span><span class="token value attr-value">18</span>
<span class="token key attr-name">pig.id</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明与属性对应实体类" tabindex="-1"><a class="header-anchor" href="#声明与属性对应实体类" aria-hidden="true">#</a> 声明与属性对应实体类</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//实体类注入到容器中</span>
<span class="token annotation punctuation">@Component</span>
<span class="token comment">//配置文件属性以pig开头，只要和属性名一致则可直接赋值映射</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"pig"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pig</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token comment">//getter、setter、toString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">top<span class="token punctuation">.</span>testeru<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span><span class="token class-name">Pig</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasicApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BasicApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Pig</span> pig <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Pig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pig<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230823183633.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="bean-configurationproperties" tabindex="-1"><a class="header-anchor" href="#bean-configurationproperties" aria-hidden="true">#</a> @Bean+@ConfigurationProperties</h2>
<h3 id="配置文件自定义属性-1" tabindex="-1"><a class="header-anchor" href="#配置文件自定义属性-1" aria-hidden="true">#</a> 配置文件自定义属性</h3>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">&lt;!--</span> <span class="token value attr-value">application.properties --></span>
<span class="token key attr-name">pig.name</span><span class="token punctuation">=</span><span class="token value attr-value">佩奇</span>
<span class="token key attr-name">pig.age</span><span class="token punctuation">=</span><span class="token value attr-value">18</span>
<span class="token key attr-name">pig.id</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明与属性对应实体类-1" tabindex="-1"><a class="header-anchor" href="#声明与属性对应实体类-1" aria-hidden="true">#</a> 声明与属性对应实体类</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"pig"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pig</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token comment">//getter、setter、toString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注入组件" tabindex="-1"><a class="header-anchor" href="#注入组件" aria-hidden="true">#</a> 注入组件</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Pig</span> <span class="token function">getPig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证-1" tabindex="-1"><a class="header-anchor" href="#验证-1" aria-hidden="true">#</a> 验证</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">top<span class="token punctuation">.</span>testeru<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span><span class="token class-name">Pig</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasicApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BasicApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Pig</span> pig <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Pig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pig<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230823185658.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h3>
<p>因为<code v-pre>@ConfigurationProperties</code>【<code v-pre>@Target({ElementType.TYPE, ElementType.METHOD})</code>】不只是类注解，还是方法注解。所以，也可以直接在方法上添加该注解。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230823185816.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="configurationproperties-enableconfigurationproperties" tabindex="-1"><a class="header-anchor" href="#configurationproperties-enableconfigurationproperties" aria-hidden="true">#</a> @ConfigurationProperties+@EnableConfigurationProperties</h2>
<h3 id="配置文件自定义属性-2" tabindex="-1"><a class="header-anchor" href="#配置文件自定义属性-2" aria-hidden="true">#</a> 配置文件自定义属性</h3>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">&lt;!--</span> <span class="token value attr-value">application.properties --></span>
<span class="token key attr-name">sheep.name</span><span class="token punctuation">=</span><span class="token value attr-value">小羊</span>
<span class="token key attr-name">sheep.age</span><span class="token punctuation">=</span><span class="token value attr-value">28</span>
<span class="token key attr-name">sheep.id</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明与属性对应实体类-2" tabindex="-1"><a class="header-anchor" href="#声明与属性对应实体类-2" aria-hidden="true">#</a> 声明与属性对应实体类</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"sheep"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sheep</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token comment">//getter、setter、toString</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注入组件-1" tabindex="-1"><a class="header-anchor" href="#注入组件-1" aria-hidden="true">#</a> 注入组件</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token comment">/*
1. 开启Sheep组件的属性绑定
2. 默认会把这个组件自己放到容器中
 */</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">Sheep</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token comment">//@Import({School.class})</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证-2" tabindex="-1"><a class="header-anchor" href="#验证-2" aria-hidden="true">#</a> 验证</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">top<span class="token punctuation">.</span>testeru<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span><span class="token class-name">Pig</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasicApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BasicApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Sheep</span> sheep <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Sheep</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sheep<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230823192914.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="属性绑定步骤" tabindex="-1"><a class="header-anchor" href="#属性绑定步骤" aria-hidden="true">#</a> 属性绑定步骤</h2>
<p>将容器中任意组件（Bean）的属性值和配置文件的配置项的值进行绑定：</p>
<ol>
<li>
<p>给容器中注册组件【<code v-pre>@Component</code>、<code v-pre>@Bean</code>】</p>
</li>
<li>
<p>使用<code v-pre>@ConfigurationProperties</code>声明组件和配置文件的哪些配置项进行绑定</p>
</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>
<p>@ConfigurationProperties：声明组件的属性和配置文件哪些前缀开始进行绑定。</p>
</li>
<li>
<p>@EnableConfigurationProperties：快速注册注解，导入第三方写好的组件进行属性绑定。</p>
<blockquote>
<p>SpringBoot默认只扫描自己主程序所在的包。如果导入第三方包，即使组件上标注了@Component、@ConfigurationProperties注解，也没用。因为组件都扫描不出来，此时使用这个注解就可以快速进行属性绑定并把组件注册进容器。</p>
</blockquote>
</li>
</ol>
</div></template>


