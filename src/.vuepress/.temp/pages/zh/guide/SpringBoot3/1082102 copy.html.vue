<template><div><div class="hint-container tip">
<p class="hint-container-title">容器</p>
<p>Spring中所有的组件都应该放在容器中，组件之间的关系通过容器来进行自动装配【也就是依赖注入】。下面通过注解的方式来学习，组件的注入及添加、赋值等等。</p>
<p>只有容器内有了该组件，才能使用组件的变量或者方法。</p>
</div>
<p>在 Spring Boot 中，组件注解用于将 Java 类声明为 Spring 组件（Bean），从而使它们可以被 Spring 容器管理。通过将适当的注解添加到类上，你可以将它们纳入 Spring 容器中，使其可在应用程序的不同部分之间进行注入和共享。</p>
<p>在 Spring Boot 中，容器注入组件（Bean）是一种重要的概念，它使得开发者能够将不同的业务逻辑封装为独立的组件，并交给 Spring 容器来管理和维护。</p>
<h2 id="容器注入组件应用场景" tabindex="-1"><a class="header-anchor" href="#容器注入组件应用场景" aria-hidden="true">#</a> 容器注入组件应用场景</h2>
<p>以下是一些常见的应用场景，适合使用容器注入组件的方式：</p>
<h3 id="服务层-service" tabindex="-1"><a class="header-anchor" href="#服务层-service" aria-hidden="true">#</a> 服务层（Service）</h3>
<p>服务层是应用程序的核心，它包含了各种业务逻辑。通过使用容器注入，可以将服务层的逻辑封装为可复用的组件，使得不同的控制器或其他组件可以重用相同的服务。</p>
<h3 id="数据访问层-repository" tabindex="-1"><a class="header-anchor" href="#数据访问层-repository" aria-hidden="true">#</a> 数据访问层（Repository）</h3>
<p>数据访问层负责与数据库进行交互。使用容器注入可以将数据访问层的实现细节隐藏起来，从而降低其他层的耦合性。</p>
<h3 id="控制器层-controller" tabindex="-1"><a class="header-anchor" href="#控制器层-controller" aria-hidden="true">#</a> 控制器层（Controller）</h3>
<p>控制器层负责接收和处理用户请求。将控制器作为组件进行注入可以帮助将请求处理逻辑分离出来，使得控制器更加清晰和易于测试。</p>
<h3 id="工具类和辅助类" tabindex="-1"><a class="header-anchor" href="#工具类和辅助类" aria-hidden="true">#</a> 工具类和辅助类</h3>
<p>有些工具类、辅助类或通用功能可以被组件化，通过容器注入来提供统一的方式供应用程序使用。</p>
<h3 id="第三方库的集成" tabindex="-1"><a class="header-anchor" href="#第三方库的集成" aria-hidden="true">#</a> 第三方库的集成</h3>
<p>如果你需要集成第三方库，可以使用容器注入创建对这些库的适配器、代理或包装类。</p>
<h3 id="定时任务和调度" tabindex="-1"><a class="header-anchor" href="#定时任务和调度" aria-hidden="true">#</a> 定时任务和调度</h3>
<p>在 Spring Boot 中，你可以使用容器注入来管理定时任务，从而在指定的时间执行特定的任务。</p>
<h3 id="事件监听器" tabindex="-1"><a class="header-anchor" href="#事件监听器" aria-hidden="true">#</a> 事件监听器</h3>
<p>Spring 提供了事件机制，通过容器注入事件监听器，可以在应用程序中监听和响应各种事件。</p>
<h3 id="自定义配置类" tabindex="-1"><a class="header-anchor" href="#自定义配置类" aria-hidden="true">#</a> 自定义配置类</h3>
<p>使用容器注入来管理自定义的配置类，从而更灵活地管理应用程序的配置。</p>
<p>这些只是一些常见的应用场景，实际上，容器注入组件在 Spring Boot 中几乎可以应用于任何需要管理和维护的逻辑单元。通过将不同的业务逻辑封装为组件，你可以提高代码的可维护性、可测试性和可复用性。</p>
<h2 id="容器内默认组件查看" tabindex="-1"><a class="header-anchor" href="#容器内默认组件查看" aria-hidden="true">#</a> 容器内默认组件查看</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">top<span class="token punctuation">.</span>testeru</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token comment">//明确的告诉Spring当前这是一个SpringBoot程序</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Spring应用要跑起来 传入参数为当前类名，main方法函数的参数</span>
        <span class="token comment">// ConfigurableApplicationContext 为方法返回值类型</span>
        <span class="token comment">// var：java10提供的局部变量类型的自动推断 类似js语句，只能在方法中使用，不能声明为类变量。</span>
        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">AnnotationApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//1. 获取容器中所有的组件名字</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> names <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2. 挨个遍历</span>
        <span class="token comment">//dispatcherServlet、beanNameViewResolver、characterEncodingFilter、multipartResolver</span>
        <span class="token comment">//SpringBoot把Spring/SpringMVC需要配置的核心组件，现在都自动配置好</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token operator">:</span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230824104312.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="注入方式" tabindex="-1"><a class="header-anchor" href="#注入方式" aria-hidden="true">#</a> 注入方式</h2>
<p>SpringBoot 摒弃了XML配置方式，改为<strong>全注解驱动</strong>。在 Spring Boot 中，容器注入组件（Bean）的方式有多种，主要有以下几种：</p>
<blockquote>
<p>组件（Bean）默认是单实例。</p>
</blockquote>
<h3 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> @Component</h3>
<p>在类上添加 <code v-pre>@Component</code> 注解，将其标记为一个 Spring 组件。Spring Boot 会自动将这些组件扫描并纳入容器管理。<strong>使用类的无参构造来生成对象给IOC容器管理。</strong></p>
<p><strong>包扫描</strong> + <strong>组件标注注解</strong>（<code v-pre>@Controller</code>、<code v-pre>@Service</code>、<code v-pre>@Repository</code>、<code v-pre>@Component</code>），运用在自定义的组件上。</p>
<div class="hint-container tip">
<p class="hint-container-title">场景</p>
<p>创建一个 User 组件，用于封装用户实体类。</p>
</div>
<h4 id="创建组件" tabindex="-1"><a class="header-anchor" href="#创建组件" aria-hidden="true">#</a> 创建组件</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// @Repository</span>
<span class="token comment">// @Service</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应用验证" tabindex="-1"><a class="header-anchor" href="#应用验证" aria-hidden="true">#</a> 应用验证</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 默认包扫描</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Spring应用要跑起来 传入参数为当前类名，main方法函数的参数</span>
        <span class="token comment">// ConfigurableApplicationContext 为方法返回值类型</span>
        <span class="token comment">// var：java10提供的局部变量类型的自动推断 类似js语句，只能在方法中使用，不能声明为类变量。</span>
        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BasicApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> userBeans <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBeanNamesForType</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出打印User的容器</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> uBean <span class="token operator">:</span> userBeans<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>uBean<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>可以发现对应的容器只有一个，说明当前组件是一个单实例。默认容器中组件名为类名小写。</p>
</blockquote>
<figure><img src="@source/zh/guide/springboot3/assets/20230824114453.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="controller、-service、-repository" tabindex="-1"><a class="header-anchor" href="#controller、-service、-repository" aria-hidden="true">#</a> @Controller、@Service、@Repository</h3>
<p><code v-pre>@Controller</code>、<code v-pre>@Service</code>、<code v-pre>@Repository</code> 都是特殊类型的 <code v-pre>@Component</code>，它们分别用于标记<strong>控制器层</strong>、<strong>服务</strong>、<strong>仓库</strong>组件。它们与 <code v-pre>@Component</code> 的作用相同，但能更准确地表达组件的角色。</p>
<div class="hint-container tip">
<p class="hint-container-title">场景</p>
<p>创建一个 书产品 整体的组件流程。</p>
</div>
<h4 id="控制器层" tabindex="-1"><a class="header-anchor" href="#控制器层" aria-hidden="true">#</a> 控制器层</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookService</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应用验证-1" tabindex="-1"><a class="header-anchor" href="#应用验证-1" aria-hidden="true">#</a> 应用验证</h4>
<p>遍历当前容器中所有组件，查看是否注入进去。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230824110427.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="bean" tabindex="-1"><a class="header-anchor" href="#bean" aria-hidden="true">#</a> @Bean</h3>
<ul>
<li>使用 <code v-pre>@Configuration</code> 注解 + <code v-pre>@Bean</code> 方法。</li>
</ul>
<p>在配置类上添加 <code v-pre>@Configuration</code> 注解，然后在其中使用 <code v-pre>@Bean</code> 注解创建 Bean 对象。</p>
<p>这种方式可以运用在我们<strong>自定义的组件</strong>或者<strong>自定义第三方库</strong>的 Bean。</p>
<div class="hint-container tip">
<p class="hint-container-title">注意</p>
<p><code v-pre>@Bean</code>修饰方法时，类型就是<strong>返回值类型</strong>；<code v-pre>id</code>默认是<strong>方法名</strong>，也可自行指定<code v-pre>id</code>名称。</p>
</div>
<ol>
<li>首先要有配置类config，把相关组件放入容器中使用@Bean修饰方法</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">场景</p>
<p>创建一个配置类来提供自定义的 App配置 Bean。</p>
</div>
<h4 id="创建组件-1" tabindex="-1"><a class="header-anchor" href="#创建组件-1" aria-hidden="true">#</a> 创建组件</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">//getter、setter、toString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建配置类" tabindex="-1"><a class="header-anchor" href="#创建配置类" aria-hidden="true">#</a> 创建配置类</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//这是一个配置类，替代以前的配置文件</span>
<span class="token comment">//配置类也是容器中的组件</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建自定义的</span>
    <span class="token comment">//替代以前配置文件中的Bean标签。组件在容器中的名字默认是方法名</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230804160852.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="指定组件名" tabindex="-1"><a class="header-anchor" href="#指定组件名" aria-hidden="true">#</a> 指定组件名</h4>
<p>直接在注解声明对应容器名称。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//替代以前配置文件中的Bean标签。</span>
<span class="token comment">// 组件在容器中的名字默认是方法名，可以直接修改注解值</span>
<span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">"hahahahaha"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230804151907.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="设置组件作用域-scope" tabindex="-1"><a class="header-anchor" href="#设置组件作用域-scope" aria-hidden="true">#</a> 设置组件作用域-@Scope</h3>
<p>在 Spring Boot 中，Bean 的单实例和多实例可以通过 <code v-pre>@Scope</code> 注解来控制。</p>
<p>默认情况下，Spring Bean 是单例的，但您可以使用 <strong>@Scope(&quot;prototype&quot;)</strong> 注解将其配置为多实例。</p>
<p>下面是一个简单的示例代码来验证单实例和多实例的情况：</p>
<div class="hint-container tip">
<p class="hint-container-title">@Scope</p>
<p>@Scope注解有四个值可以选择：</p>
<ol>
<li>
<p>singleton：单实例，在ioc容器创建时加载实例</p>
</li>
<li>
<p>prototype：多实例，在ioc容器创建完成后再创建实例</p>
</li>
<li>
<p>request：同一次请求创建一个实例</p>
</li>
<li>
<p>session：同一个session创建一个实例</p>
</li>
</ol>
</div>
<h4 id="单实例" tabindex="-1"><a class="header-anchor" href="#单实例" aria-hidden="true">#</a> 单实例</h4>
<p>默认组件为单实例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">//替代以前配置文件中的Bean标签。</span>
    <span class="token comment">// 组件在容器中的名字默认是方法名，可以直接修改注解值</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">"personHa"</span><span class="token punctuation">)</span>
    <span class="token comment">//@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
        <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">top<span class="token punctuation">.</span>testeru<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span><span class="token class-name">Person</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasicApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BasicApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
       
        <span class="token comment">//组件是单实例还是多实例化</span>
        <span class="token class-name">Object</span> personHa1 <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"personHa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> personHa2 <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"personHa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>personHa1 <span class="token operator">==</span> personHa2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230822161427.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="多实例" tabindex="-1"><a class="header-anchor" href="#多实例" aria-hidden="true">#</a> 多实例</h4>
<p>使用了 <code v-pre>@Scope(&quot;prototype&quot;)</code> 注解，使其成为多实例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">"personHa"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token string">"prototype"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230822161852.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="组件注入节点" tabindex="-1"><a class="header-anchor" href="#组件注入节点" aria-hidden="true">#</a> 组件注入节点</h4>
<div class="hint-container warning">
<p class="hint-container-title">singleton</p>
<p>单实例（默认值）</p>
<p>ioc容器启动会调用方法创建对象放到ioc容器中</p>
<p>以后每次获取就是直接从容器中拿，相当于map.get()的操作，不需要再创建新的实例</p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">"personHa"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Scope</span>
<span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"给容器中添加personHa..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">AnnotationApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230824152739.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">prototype</p>
<p>多实例</p>
<p>ioc容器启动并不会去调用方法创建对象放在容器中</p>
<p>每次获取的时候才会调用方法创建对象，每次调用方法创建对象时创建的都是新的实例</p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">"personHa"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token string">"prototype"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"给容器中添加personHa..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">AnnotationApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ioc容器创建完成..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//组件是单实例还是多实例化</span>
        <span class="token class-name">Object</span> personHa1 <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"personHa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> personHa2 <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"personHa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>personHa1 <span class="token operator">==</span> personHa2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230824154627.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="import快速导入" tabindex="-1"><a class="header-anchor" href="#import快速导入" aria-hidden="true">#</a> @Import快速导入</h3>
<ul>
<li>使用 @Import 注解快速给容器导入一个组件。</li>
</ul>
<p>使用 @Import 注解在一个配置类中引入其他配置类，从而将其中定义的 Bean 加入到容器中。</p>
<p><code v-pre>@Import</code>要导入的组件，容器就会自动注册这个组件，对应<code v-pre>id</code>默认是<strong>全类名</strong>（包名.类名）。</p>
<div class="hint-container tip">
<p class="hint-container-title">场景</p>
<p>在主配置类中引入其他配置类，以将其中定义的 Bean 添加到容器中。</p>
<p>第三方包、快速注册到当前项目容器内</p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">School</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">//getter、setter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">DataSourceConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">School</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">// 主配置类</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230804164640.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这些是 Spring Boot 中常用的容器注入组件的方式。你可以根据不同的业务需求和场景选择适合的方式。需要注意的是，无论使用哪种方式，Spring Boot 都会自动进行组件扫描并将相应的组件纳入到应用程序的 Spring 容器中。</p>
<p><code v-pre>@Import</code>可以把第三方的所有类当作组件导入项目中，直接使用。<code v-pre>@Import</code>导入要在对应配置类中使用。</p>
<h2 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h2>
<p><strong>@Component</strong>：是最通用的组件注解，用于将一个类标记为 Spring 组件。这个注解适用于任何类型的组件，不论是服务、仓库、控制器，还是其他类型。</p>
<p><strong>@Service</strong>：是 @Component 的特例，用于<strong>标记服务层组件</strong>。通常用于将服务层的业务逻辑标记为 Spring 组件。</p>
<p><strong>@Repository</strong>：是 @Component 的特例，用于<strong>标记数据访问层组件</strong>。通常用于将数据库操作相关的组件标记为 Spring 组件。</p>
<p><strong>@Controller</strong>：是 @Component 的特例，用于<strong>标记控制器层组件</strong>。通常用于将处理用户请求的组件标记为 Spring 组件。</p>
<p><strong>@Configuration</strong>：表示一个类是<strong>配置类</strong>，其中可以定义 Spring Beans。通常<strong>与 @Bean 注解一起使用</strong>，用于创建和配置 Spring Bean。</p>
<p><strong>@Bean</strong>：用于在配置类中声明方法，这些方法会返回一个对象，该对象会被注册为 Spring Bean。可以将 @Bean 方法用于创建自定义的 Bean。</p>
<p>这些注解允许你将不同类型的组件声明为 Spring Bean，并在 Spring 容器中进行管理。这样，你可以利用 Spring 的依赖注入机制来将这些组件注入到其他组件中，实现不同层次的代码解耦和重用。例如，在控制器中注入服务，或在服务中注入数据访问层。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<div class="hint-container tip">
<p class="hint-container-title">注解归类</p>
<ul>
<li><code v-pre>@Configuration</code>、<code v-pre>@SpringBootConfiguration</code>【注解通用】</li>
</ul>
<blockquote>
<p>@Configuration可以被替换为@SpringBootConfiguration，源码对应内容没有区别。@SpringBootConfiguration说明是一个SpringBoot的配置注解，自己写的配置类可以使用该注解。如果是通用型的注解可以使用@Configuration。</p>
</blockquote>
<ul>
<li>
<p><code v-pre>@Bean</code>、<code v-pre>@Scope</code>【调整组件的范围，是单实例还是多实例】</p>
</li>
<li>
<p><code v-pre>@Controller</code>、<code v-pre>@Service</code>、<code v-pre>@Repository</code>、<code v-pre>@Component</code></p>
</li>
<li>
<p><code v-pre>@Import</code></p>
</li>
<li>
<p><code v-pre>ComponentScan</code></p>
</li>
</ul>
</div>
<h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3>
<p>SpringBoot项目容器中放入组件的步骤：</p>
<ol>
<li>@Configuration 编写一个配置类</li>
<li>在配置类中，自定义方法给容器中注册组件。配合@Bean注解使用</li>
<li>或者使用@Import导入第三方的组件</li>
</ol>
</div></template>


