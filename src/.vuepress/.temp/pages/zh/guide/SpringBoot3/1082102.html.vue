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
<p>为什么要把组件注入到容器中？</p>
<p>容器注入组件都有哪些场景可以用到？</p>
<p>SpringBoot容器中有哪些默认的组件可以查看？</p>
<p>如何往容器中注入自定义组件？有哪几种方式？应用场景及区别是什么？</p>
</div>
<p>在 Spring Boot 中，容器和组件是重要的概念，它们在应用程序的开发和运行过程中起着关键作用。</p>
<h2 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container" aria-hidden="true">#</a> 容器（Container）</h2>
<p>Spring Boot 应用程序基于 Spring 框架构建，而 Spring 框架提供了一个轻量级的容器，称为 Spring 容器（或应用上下文）。容器负责<strong>管理</strong>和<strong>协调</strong>应用程序中各个组件的<strong>生命周期</strong>、<strong>依赖关系</strong>以及<strong>配置</strong>。</p>
<p>容器在应用程序启动时创建并初始化这些组件，然后在应用程序运行过程中维护它们。Spring 容器的<strong>主要目标</strong>是<strong>实现依赖注入</strong>（Dependency Injection，DI），这是一种<strong>通过容器自动注入组件之间依赖关系</strong>的方式，从而实现松耦合和易于测试的代码。</p>
<h2 id="组件-component" tabindex="-1"><a class="header-anchor" href="#组件-component" aria-hidden="true">#</a> 组件（Component）</h2>
<p>在 Spring Boot 中，组件是指<strong>应用程序中的各种对象</strong>，例如服务、控制器、存储库等。这些组件通常由开发人员编写，用于处理应用程序的不同方面。</p>
<div class="hint-container tip">
<p class="hint-container-title">容器</p>
<p>Spring中所有的组件都应该放在容器中，组件之间的关系通过容器来进行自动装配【也就是依赖注入】。<br>
只有容器内有了该组件，才能使用组件的变量或者方法。</p>
</div>
<p>在 Spring 中，通过使用特定的注解来将一个类标记为组件，最常用的注解是 <code v-pre>@Component</code>。除了 @Component，Spring 还提供了其他更具体的注解，如 @Service、@Controller、@Repository 等，它们分别用于表示不同类型的组件，例如服务、控制器和数据访问对象。</p>
<h2 id="概念关系" tabindex="-1"><a class="header-anchor" href="#概念关系" aria-hidden="true">#</a> 概念关系</h2>
<p>Spring Boot 容器是负责管理和组织组件的，它会扫描应用程序中的各个类，识别带有特定注解的类，并将它们实例化成组件。这些组件将由容器管理其生命周期和依赖关系。容器根据组件之间的依赖关系，自动将需要的组件注入到其他组件中，以满足对象间的协作。</p>
<p>在 Spring Boot 中，组件注解用于将 Java 类声明为 Spring 组件（Bean），从而使它们可以被 Spring 容器管理。通过将适当的注解添加到类上，你可以将它们纳入 Spring 容器中，使其可在应用程序的不同部分之间进行注入和共享。</p>
<p>在 Spring Boot 中，容器注入组件（Bean）是一种重要的概念，它使得开发者能够将不同的业务逻辑封装为独立的组件，并交给 Spring 容器来管理和维护。</p>
<p>总之，Spring Boot 的容器和组件之间的关系可以描述为：容器负责管理和创建组件，而组件是构成应用程序功能的基本单元，它们通过容器的依赖注入来相互协作。这种关系使得应用程序的开发变得更加模块化、可维护和可测试。</p>
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
<h2 id="查看springboot容器内默认组件" tabindex="-1"><a class="header-anchor" href="#查看springboot容器内默认组件" aria-hidden="true">#</a> 查看SpringBoot容器内默认组件</h2>
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
<h2 id="容器注入自定义组件" tabindex="-1"><a class="header-anchor" href="#容器注入自定义组件" aria-hidden="true">#</a> 容器注入自定义组件</h2>
<p>下面通过注解的方式来学习，组件的注入及添加、赋值等等。</p>
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
<p><RouterLink to="/zh/guide/springboot3/1082103.html">@Bean注入</RouterLink></p>
<h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> @Import</h3>
<p><RouterLink to="/zh/guide/springboot3/1082104.html">@Import注入</RouterLink></p>
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


