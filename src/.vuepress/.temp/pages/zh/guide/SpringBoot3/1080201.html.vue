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
<p>根据上篇文章，体会到SpringBoot的开发运行，在项目中主要依赖两个机制：一个为依赖管理，一个为自动配置机制。</p>
<h2 id="依赖管理机制" tabindex="-1"><a class="header-anchor" href="#依赖管理机制" aria-hidden="true">#</a> 依赖管理机制</h2>
<ul>
<li>依赖分析</li>
</ul>
<h3 id="依赖如何导入" tabindex="-1"><a class="header-anchor" href="#依赖如何导入" aria-hidden="true">#</a> 依赖如何导入？</h3>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>为什么导入 start-web 所有相关依赖都导入进来？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<ul>
<li>
<p>需要开发什么场景就导入什么场景启动器。</p>
</li>
<li>
<p>maven依赖的传递原则：A-B-C，A依赖就拥有了B和C。</p>
</li>
<li>
<p>导入 <em>场景启动器</em>，场景启动器就会自动把这个场景的所有核心以来全部导入进来。</p>
</li>
</ul>
</details>
<h3 id="版本依赖如何传递" tabindex="-1"><a class="header-anchor" href="#版本依赖如何传递" aria-hidden="true">#</a> 版本依赖如何传递？</h3>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>为什么版本号都不用写？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<ul>
<li>
<p>每个项目中都有一个父项目依赖 <code v-pre>spring-boot-starter-parent</code>，该父项目下还有一个父项目<code v-pre>spring-boot-dependencies</code>。</p>
</li>
<li>
<p>properties标签在该标签内声明了对应的版本号，在下面还有对应的 <em>依赖管理</em> dependencyManagement标签，管理了每一个jar包。这些jar包的版本号都是动态的，对应的版本号引用来自于上面的properties标签。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230803103939.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>父项目 <em>版本仲裁机制</em>，会把所有常见的jar依赖版本都声明好。比如：引入<code v-pre>mysql-connector-j</code>。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230803112609.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
</details>
<h3 id="自定义版本号" tabindex="-1"><a class="header-anchor" href="#自定义版本号" aria-hidden="true">#</a> 自定义版本号</h3>
<ul>
<li>
<p>利用maven的就近原则。</p>
<blockquote>
<p>当前项目的依赖中声明了对应的版本号则直接使用，如果没有声明则使用父项目声明的版本号。</p>
</blockquote>
<ul>
<li>
<p>直接在当前项目 properties 标签中声明父项目用的版本属性的key。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230803113407.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
</li>
<li>
<p>直接在导入依赖的时候声明版本。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230803114007.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
<h3 id="第三方jar包" tabindex="-1"><a class="header-anchor" href="#第三方jar包" aria-hidden="true">#</a> 第三方jar包</h3>
<ul>
<li>SpringBoot父项目没有管理的第三方依赖需要自行声明，例如：</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.alibaba/druid --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230803115047.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="自动配置机制" tabindex="-1"><a class="header-anchor" href="#自动配置机制" aria-hidden="true">#</a> 自动配置机制</h2>
<p>SpringBoot项目中，只要导入场景，容器中就会自动配置好这个场景的核心组件。</p>
<h3 id="初步理解" tabindex="-1"><a class="header-anchor" href="#初步理解" aria-hidden="true">#</a> 初步理解</h3>
<ul>
<li>
<p>以前：需要配置DispatcherServlet、ViewResolver、CharacterEncodingFilter......</p>
</li>
<li>
<p>现在：SpringBoot自动配置好这些组件</p>
</li>
</ul>
<p>在使用Spring框架时，需要配置Tomcat、SpringMVC等等。以前需要配置DispatcherServlet、ViewResolver、CharacterEncodingFilter......</p>
<h4 id="dispatcherservlet" tabindex="-1"><a class="header-anchor" href="#dispatcherservlet" aria-hidden="true">#</a> DispatcherServlet</h4>
<p><code v-pre>DispatcherServlet</code> 是前端控制器（<code v-pre>Front Controller</code>）的核心组件，它是整个 <code v-pre>Spring MVC</code> 框架的入口点，负责处理客户端请求并将请求分发给相应的处理器进行处理。</p>
<ol>
<li>
<p>请求分发：DispatcherServlet 根据客户端发起的请求，将请求分发给相应的控制器（Controller）进行处理。它根据请求的 URL、请求方法（GET、POST 等）等信息来选择适当的控制器。</p>
</li>
<li>
<p>控制器调用：DispatcherServlet 将请求分发给对应的控制器后，控制器会处理请求并生成相应的响应。控制器可以执行业务逻辑、调用服务层或数据访问层，然后返回模型数据和视图信息给 DispatcherServlet。</p>
</li>
<li>
<p>视图解析与渲染：DispatcherServlet 负责根据控制器返回的视图信息进行视图解析和渲染。它会根据视图名找到相应的视图模板，并将模型数据填充到模板中，最终生成完整的视图。</p>
</li>
<li>
<p>异常处理：DispatcherServlet 还负责全局异常处理，如果控制器或视图产生异常，DispatcherServlet 将捕获并执行相应的异常处理策略，例如显示自定义的错误页面或记录异常日志。</p>
</li>
<li>
<p>拦截器调用：DispatcherServlet 在请求处理前后会调用注册的拦截器。拦截器可以对请求进行预处理和后处理，例如记录日志、权限验证、跨域处理等。</p>
</li>
<li>
<p>多视图支持：DispatcherServlet 支持多视图，可以配置多个视图解析器来处理不同类型的视图，例如 JSP 视图解析器、Thymeleaf 视图解析器等。</p>
</li>
</ol>
<h4 id="viewresolver" tabindex="-1"><a class="header-anchor" href="#viewresolver" aria-hidden="true">#</a> ViewResolver</h4>
<p>ViewResolver（视图解析器）是 Spring MVC 框架中的一个重要组件，它负责<strong>将处理器（Controller）返回的逻辑视图名（或视图标识）解析为实际的视图对象</strong>。视图解析器起到了将逻辑视图与具体视图模板的映射作用，从而将模型数据填充到视图模板中，生成最终的响应结果。</p>
<p>在 Spring MVC 中，当处理器（Controller）处理完请求后，它会返回一个逻辑视图名，例如 &quot;home&quot;、&quot;login&quot; 等。接着，Spring MVC 就会将该逻辑视图名传递给注册的视图解析器，然后视图解析器会根据配置和逻辑视图名找到相应的视图模板，并将模型数据填充到模板中，生成最终的响应结果。</p>
<p>常见的视图解析器有以下几种：</p>
<ol>
<li>
<p>InternalResourceViewResolver（内部资源视图解析器）：这是 Spring MVC 默认的视图解析器，它用于解析 JSP 视图。配置了 InternalResourceViewResolver 后，处理器返回的逻辑视图名会映射到一个 JSP 文件的路径，最终将渲染该 JSP 页面。</p>
</li>
<li>
<p>FreeMarkerViewResolver：用于解析 FreeMarker 视图，配置 FreeMarkerViewResolver 后，处理器返回的逻辑视图名会映射到一个 FreeMarker 模板文件的路径，最终将渲染该 FreeMarker 页面。</p>
</li>
<li>
<p>ThymeleafViewResolver：用于解析 Thymeleaf 视图，配置 ThymeleafViewResolver 后，处理器返回的逻辑视图名会映射到一个 Thymeleaf 模板文件的路径，最终将渲染该 Thymeleaf 页面。</p>
</li>
</ol>
<p>视图解析器的配置通常在 Spring MVC 的配置文件中完成。例如，在 XML 配置中，可以使用 <code v-pre>&lt;bean&gt;</code> 元素配置视图解析器；在 Java 配置中，可以通过 <code v-pre>@Bean</code> 注解创建视图解析器的实例并进行配置。</p>
<p>视图解析器的使用使得开发者可以将控制器和视图进行解耦，从而实现更灵活、可维护和可扩展的 Web 应用程序。通过更换不同的视图解析器，可以轻松切换不同的视图技术，例如 JSP、FreeMarker、Thymeleaf 等，而不需要修改处理器代码。</p>
<h4 id="characterencodingfilter" tabindex="-1"><a class="header-anchor" href="#characterencodingfilter" aria-hidden="true">#</a> CharacterEncodingFilter</h4>
<p>CharacterEncodingFilter 是一个 Java Servlet 过滤器，用于解决客户端请求和服务器响应中的字符编码问题。在 Web 应用程序中，由于客户端和服务器的编码设置可能不同，导致传输的数据出现乱码或字符转换问题。CharacterEncodingFilter 可以帮助解决这些问题，确保请求和响应的字符编码一致，从而避免乱码和字符转换错误。</p>
<p>主要作用：</p>
<ol>
<li>
<p>请求编码设置：CharacterEncodingFilter 可以设置请求的字符编码，即设置客户端提交数据时使用的字符编码。通过设置请求编码，可以确保服务器能够正确地解析和处理来自客户端的数据</p>
</li>
<li>
<p>响应编码设置：CharacterEncodingFilter 还可以设置响应的字符编码，即设置服务器返回数据时使用的字符编码。通过设置响应编码，可以确保客户端能够正确地解析和显示服务器返回的数据</p>
</li>
<li>
<p>过滤器链处理：在 Web 应用程序中，可以有多个过滤器，它们按照一定的顺序形成过滤器链。CharacterEncodingFilter 可以作为过滤器链中的一个环节，确保其他过滤器和 Servlet 在处理请求和响应时都使用正确的字符编码</p>
</li>
</ol>
<h4 id="现在" tabindex="-1"><a class="header-anchor" href="#现在" aria-hidden="true">#</a> 现在</h4>
<p>SpringBoot直接自动配置好这些组件。</p>
<h4 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h4>
<p>容器中有了组件，就有了该组件的功能。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//明确的告诉Spring当前这是一个SpringBoot程序</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasicApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Spring应用要跑起来 传入参数为当前类名，main方法函数的参数</span>
        <span class="token comment">// ConfigurableApplicationContext 为方法返回值类型</span>
        <span class="token comment">// var：java10提供的局部变量类型的自动推断 类似js语句，只能在方法中使用，不能声明为类变量。</span>
        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BasicApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认的包扫描规则" tabindex="-1"><a class="header-anchor" href="#默认的包扫描规则" aria-hidden="true">#</a> 默认的包扫描规则</h3>
<ul>
<li>
<p><code v-pre>@SpringBootApplication</code>注解修饰的类就是主程序类「约定大于配置」</p>
</li>
<li>
<p>SpringBoot只会扫描主程序所在的包及其下面的子包，自动的component-scan功能</p>
</li>
<li>
<p>自定义扫描路径</p>
<ul>
<li>
<p><code v-pre>@SpringBootApplication(scanBasePackages = &quot;top.testeru&quot;)</code></p>
<figure><img src="@source/zh/guide/springboot3/assets/20230804110027.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p><code v-pre>@ComponentScan(&quot;top.testeru&quot;)</code>直接指定扫描路径</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230804110340.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
</li>
</ul>
<h3 id="配置默认值" tabindex="-1"><a class="header-anchor" href="#配置默认值" aria-hidden="true">#</a> 配置默认值</h3>
<ul>
<li>
<p>配置文件的所有配置项目是和某各类对象值进行一一绑定的。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230804111600.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>绑定了配置文件中每一项值的类称为<strong>属性类</strong>。比如：</p>
<ul>
<li>
<p><code v-pre>ServerProperties</code>绑定了所有<code v-pre>Tomcat</code>服务器有关的配置</p>
</li>
<li>
<p><code v-pre>MultipartProperties</code>绑定了所有文件上传相关的配置</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230804142143.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
</li>
</ul>
<h3 id="按需加载自动配置" tabindex="-1"><a class="header-anchor" href="#按需加载自动配置" aria-hidden="true">#</a> 按需加载自动配置</h3>
<ul>
<li>
<p>导入场景<code v-pre>spring-boot-starter-web</code></p>
</li>
<li>
<p>场景启动器除了会导入相关功能以来，导入一个<code v-pre>spring-boot-starter</code>，是所有<code v-pre>starter</code>的<code v-pre>starter</code>，即最基础核心的<code v-pre>starter</code></p>
<figure><img src="@source/zh/guide/springboot3/assets/20230804142418.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p><code v-pre>spring-boot-starter</code>导入了一个包<code v-pre>spring-boot-autoconfigure</code>，包里是各种场景的<code v-pre>AutoConfiguration</code>自动配置类</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230804142736.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
<p>虽然全场景的自动配置都在<code v-pre>spring-boot-autoconfigure</code>这个包，但是不是全都开启的。导入哪个场景就开启哪个自动配置。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>导入场景启动器，触发<code v-pre>spring-boot-autoconfigure</code>这个包的自动配置生效、容器中就会具有相关场景功能。</p>
</div></template>


