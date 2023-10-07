<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>SpringBoot项目创建及启动</li>
<li>使用注解讲解</li>
<li>SpringBoot项目优点</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>熟练创建SpringBoot项目</li>
<li>熟练掌握项目开发流程</li>
<li>了解项目中的注解使用</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>如何使用SpringBoot开发一个&quot;Hello SpringBoot3！&quot;的Web程序？</p>
</div>
<h2 id="一-简介" tabindex="-1"><a class="header-anchor" href="#一-简介" aria-hidden="true">#</a> 一.简介</h2>
<h3 id="前置知识" tabindex="-1"><a class="header-anchor" href="#前置知识" aria-hidden="true">#</a> 前置知识</h3>
<h3 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h3>
<ol>
<li>验证Java版本，为Java17。</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">java</span> <span class="token parameter variable">-version</span>
openjdk version <span class="token string">"17.0.4.1"</span> <span class="token number">2022</span>-08-12 LTS
OpenJDK Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17.0</span>.4.1+1-LTS<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17.0</span>.4.1+1-LTS, mixed mode, sharing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>验证maven环境。</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ mvn <span class="token parameter variable">-v</span>
Apache Maven <span class="token number">3.8</span>.5 <span class="token punctuation">(</span>3599d3414f046de2324203b78ddcf9b5e4388aa0<span class="token punctuation">)</span>
Maven home: usr/Users/developer/tools/maven/3.8.5
Java version: <span class="token number">17.0</span>.4.1, vendor: BellSoft, runtime: /Users/developer/sdkman/candidates/java/17.0.4.1-librca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="springboot是什么" tabindex="-1"><a class="header-anchor" href="#springboot是什么" aria-hidden="true">#</a> SpringBoot是什么</h3>
<p>官方说明文档：<a href="https://docs.spring.io/spring-boot/docs/current/reference/html/index.html" target="_blank" rel="noopener noreferrer">https://docs.spring.io/spring-boot/docs/current/reference/html/index.html<ExternalLinkIcon/></a></p>
<h2 id="二-快速体验" tabindex="-1"><a class="header-anchor" href="#二-快速体验" aria-hidden="true">#</a> 二.快速体验</h2>
<h3 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h3>
<ol>
<li>
<p>浏览器发送请求路径，页面显示内容   ---&gt;   请求为<code v-pre>GET</code>请求。</p>
</li>
<li>
<p>对应请求只有路径，没有参数。</p>
</li>
<li>
<p>请求返回值是<code v-pre>String</code>的字段。</p>
</li>
</ol>
<h3 id="开发流程" tabindex="-1"><a class="header-anchor" href="#开发流程" aria-hidden="true">#</a> 开发流程</h3>
<ol>
<li>
<p>创建项目。</p>
</li>
<li>
<p>导入依赖。</p>
</li>
<li>
<p>编写启动主程序。</p>
</li>
<li>
<p>编写业务代码，接口请求类，自定义请求路径为：<code v-pre>/hello</code>。</p>
</li>
<li>
<p>测试，idea启动服务，浏览器访问验证。</p>
</li>
</ol>
<h4 id="_1」创建项目" tabindex="-1"><a class="header-anchor" href="#_1」创建项目" aria-hidden="true">#</a> 1」创建项目</h4>
<ol>
<li>
<p>项目创建时选择对应的jdk版本为17。</p>
</li>
<li>
<p>声明坐标groupId。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230801135928.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>选择对应依赖。<br>
<img src="@source/zh/guide/springboot3/assets/20230801142547.png" alt="" loading="lazy"></p>
</li>
</ol>
<h4 id="_2」导入场景依赖" tabindex="-1"><a class="header-anchor" href="#_2」导入场景依赖" aria-hidden="true">#</a> 2」导入场景依赖</h4>
<p>添加必要的依赖项，pom.xml并添加spring-boot-starter-web紧邻该部分下方的依赖项parent：</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230802102528.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- web开发的场景启动器       所有web开发的场景依赖都加载进来--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3」主程序" tabindex="-1"><a class="header-anchor" href="#_3」主程序" aria-hidden="true">#</a> 3」主程序</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> nikita
 * <span class="token keyword">@desc</span> 启动SpringBoot项目的唯一入口
 * <span class="token keyword">@create</span> 2023-08-02 10:31
 */</span>
<span class="token comment">//明确的告诉Spring当前这是一个SpringBoot程序</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasicApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Spring应用要跑起来 传入参数为当前类名，main方法函数的参数</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BasicApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4」业务代码" tabindex="-1"><a class="header-anchor" href="#_4」业务代码" aria-hidden="true">#</a> 4」业务代码</h4>
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
<p>创建方法，编写返回值为页面要显示的内容：<code v-pre>Hello SpringBoot3！</code></p>
</li>
<li>
<p>添加方法注解并携带请求路径：<code v-pre>@GetMapping(&quot;/hello&quot;)</code>。</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">top<span class="token punctuation">.</span>testeru<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Hello SpringBoot3！"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5」测试" tabindex="-1"><a class="header-anchor" href="#_5」测试" aria-hidden="true">#</a> 5」测试</h4>
<p>idea界面运行成功后，浏览器访问：<code v-pre>127.0.0.1:8080/hello</code>。</p>
<ol>
<li>
<p>idea界面化启动，点击<code v-pre>BasicApplication</code>运行。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230801144649.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>浏览器访问，<code v-pre>127.0.0.1:8080/hello</code>。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230801145400.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h4 id="_6」打包上线" tabindex="-1"><a class="header-anchor" href="#_6」打包上线" aria-hidden="true">#</a> 6」打包上线</h4>
<p>命令行运行</p>
<ol>
<li>
<p><code v-pre>pom.xml</code>文件导入<code v-pre>spring-boot-maven-plugin</code>对应的<code v-pre>build</code>依赖。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- SpringBoot应用打包插件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>刷新maven，命令行运行：<code v-pre>mvn package</code>，把项目打成可执行的jar包。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230802105314.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>查看目录target，会看到basic-0.0.1-SNAPSHOT.jar，文件大小应约为 18 MB。<br>
<img src="@source/zh/guide/springboot3/assets/20230802105359.png" alt="" loading="lazy"></p>
</li>
<li>
<p>如果想查看内部，可以使用<code v-pre>jar tvf</code>，如下所示：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jar tvf target/basic-0.0.1-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230802105624.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>在目录<code v-pre>target</code>中看到一个更小的文件<code v-pre>basic-0.0.1-SNAPSHOT.jar.original</code>，这是 <code v-pre>Maven</code> 在被 <code v-pre>Spring Boot</code> 重新打包之前创建的原始 <code v-pre>jar</code> 文件。</p>
</blockquote>
</li>
<li>
<p>要运行该应用程序，请使用<code v-pre>java -jar</code>以下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> basic-0.0.1-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230802114629.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>要退出应用程序，请按ctrl-c。</p>
</li>
</ol>
<h4 id="_7」简化部署" tabindex="-1"><a class="header-anchor" href="#_7」简化部署" aria-hidden="true">#</a> 7」简化部署</h4>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>已经打好的jar包放入新文件夹<code v-pre>app-demo</code>中，由于端口号冲突，需要修改该项目启动端口号为8090，如何解决？</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230802142048.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p>创建<code v-pre>application.properties</code>，在该文件内指定端口号：<code v-pre>server.port=8090</code></p>
<figure><img src="@source/zh/guide/springboot3/assets/20230802142555.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> basic-0.0.1-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230802142818.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>查看启动成功参数对应监听端口改为8090。</p>
</details>
<h2 id="三-注解讲解" tabindex="-1"><a class="header-anchor" href="#三-注解讲解" aria-hidden="true">#</a> 三.注解讲解</h2>
<h3 id="springbootapplication-注解" tabindex="-1"><a class="header-anchor" href="#springbootapplication-注解" aria-hidden="true">#</a> @SpringBootApplication 注解</h3>
<p><code v-pre>@SpringBootApplication</code>注释称为元注释，它结合了<code v-pre>@SpringBootConfiguration</code>,<code v-pre>@EnableAutoConfiguration</code>和<code v-pre>@ComponentScan</code>。</p>
<p>其中，我们最感兴趣的注释是<code v-pre>@EnableAutoConfiguration</code>。<code v-pre>@EnableAutoConfiguration</code>告诉 <code v-pre>SpringBoot</code> 根据添加的 <code v-pre>jar</code> 依赖项“猜测”想要如何配置 <code v-pre>Spring</code>。</p>
<p>由于<code v-pre>spring-boot-starter-web</code>添加了 <code v-pre>Tomcat</code> 和 <code v-pre>Spring MVC</code>，自动配置假定正在开发 <code v-pre>Web</code> 应用程序并相应地设置 <code v-pre>Spring</code>。</p>
<h3 id="restcontroller-注解" tabindex="-1"><a class="header-anchor" href="#restcontroller-注解" aria-hidden="true">#</a> @RestController 注解</h3>
<p><code v-pre>@RestController</code>是类注解，<code v-pre>@Controller</code>+<code v-pre>@ResponseBody</code>的合并注解。</p>
<p>表示该类的方法负责处理 <code v-pre>HTTP</code> 请求并以 <code v-pre>RESTful</code> 的方式返回数据。这个类应该处理传入的 <code v-pre>HTTP</code> 请求，处理所请求的数据或操作，然后以适当的 <code v-pre>HTTP</code> 响应形式返回结果，通常是 <code v-pre>JSON</code> 或 <code v-pre>XML</code> 格式。</p>
<p><code v-pre>@RestController</code> 注解是构建 <code v-pre>Spring RESTful web</code> 服务的起点。</p>
<h4 id="responsebody" tabindex="-1"><a class="header-anchor" href="#responsebody" aria-hidden="true">#</a> @ResponseBody</h4>
<p>@ResponseBody注解是方法注解和类注解，可以放在方法上也可以放在类上。</p>
<p>说明当前返回值直接作为 HTTP 响应的主体内容，而不是作为视图名称进行解析。</p>
<p>它使方法返回的数据可以以原始形式返回给客户端，通常用于构建 RESTful Web 服务或返回 <code v-pre>JSON</code>/<code v-pre>XML</code> 数据。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRestController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Hello, World!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法返回的字符串作为 <code v-pre>HTTP</code> 响应的主体内容，而不会经过视图解析器进行处理，从而实现了返回原始数据的目的。</p>
<h3 id="requestmapping-注解" tabindex="-1"><a class="header-anchor" href="#requestmapping-注解" aria-hidden="true">#</a> @RequestMapping 注解</h3>
<p>以下是 @RequestMapping 注解的用法：</p>
<h4 id="类级别使用" tabindex="-1"><a class="header-anchor" href="#类级别使用" aria-hidden="true">#</a> 类级别使用</h4>
<p>这将为整个控制器类的所有处理器方法定义基本的 URL 映射。例如：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>
    <span class="token comment">// methods...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>所有在 MyController 类中的处理器方法都将映射到以 &quot;/api&quot; 开头的路径。</p>
</blockquote>
<h4 id="方法级别使用" tabindex="-1"><a class="header-anchor" href="#方法级别使用" aria-hidden="true">#</a> 方法级别使用</h4>
<p>这将为单个处理器方法定义更具体的 URL 映射。例如：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMethod</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/hello"</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Hello, World!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>sayHello 方法将映射到 &quot;/hello&quot; 路径，并且仅对 GET 请求进行响应。</p>
</blockquote>
<p>推荐使用特定的 HTTP 方法注解（例如 @GetMapping、@PostMapping 等）来替代 @RequestMapping，因为它们可以提供更清晰和简洁的代码，如下示例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMethod</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Hello, World!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-优点" tabindex="-1"><a class="header-anchor" href="#四-优点" aria-hidden="true">#</a> 四.优点</h2>
<h3 id="_1-简化整合" tabindex="-1"><a class="header-anchor" href="#_1-简化整合" aria-hidden="true">#</a> 1.简化整合</h3>
<ul>
<li>场景启动器 - 导入相关场景，拥有相关的功能。</li>
<li>默认支持所有场景：<a href="https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.build-systems.starters" target="_blank" rel="noopener noreferrer">官网说明<ExternalLinkIcon/></a>
<ul>
<li>
<p>官网提供的场景对应命名为：<code v-pre>spring-boot-start-*</code>。<br>
<img src="@source/zh/guide/springboot3/assets/20230802151401.png" alt="" loading="lazy"></p>
</li>
<li>
<p>第三方提供的场景命名为：<code v-pre>*-spring-boot-start</code>。</p>
</li>
</ul>
</li>
</ul>
<h3 id="_2-简化开发" tabindex="-1"><a class="header-anchor" href="#_2-简化开发" aria-hidden="true">#</a> 2.简化开发</h3>
<p>无需编写任何配置，直接开发业务。</p>
<h3 id="_3-简化配置" tabindex="-1"><a class="header-anchor" href="#_3-简化配置" aria-hidden="true">#</a> 3.简化配置</h3>
<figure><img src="@source/zh/guide/springboot3/assets/20230802151959.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>application.properties</code>：</p>
<ul>
<li>
<p>集中式管理配置，只需要修改这个文件即可。</p>
</li>
<li>
<p>配置基本都有对应默认值。<br>
<img src="@source/zh/guide/springboot3/assets/20230802152850.png" alt="" loading="lazy"></p>
</li>
<li>
<p><a href="https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#appendix.application-properties.core" target="_blank" rel="noopener noreferrer">官网配置说明<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="_4-简化部署" tabindex="-1"><a class="header-anchor" href="#_4-简化部署" aria-hidden="true">#</a> 4.简化部署</h3>
<ul>
<li>
<p>项目打包上传服务器。</p>
</li>
<li>
<p>Linux服务器上有Java环境。</p>
</li>
</ul>
<h3 id="_5-简化运维" tabindex="-1"><a class="header-anchor" href="#_5-简化运维" aria-hidden="true">#</a> 5.简化运维</h3>
<p>修改配置「外部放一个application.properties文件」、监控、健康检查......</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>
<p><code v-pre>GET</code>请求注解有 <strong>2</strong> 种方式：直接<code v-pre>GetMapping</code>【建议使用】；使用<code v-pre>RequestMapping</code>，声明请求类型。</p>
</li>
<li>
<p>打包需要添加<code v-pre>spring-boot-maven-plugin</code>插件，使用<code v-pre>mvn package</code>打包，直接<code v-pre>java -jar</code>运行程序。</p>
</li>
</ol>
</div></template>


