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
<p>SpringBoot 摒弃XML配置方式，改为<strong>全注解驱动</strong></p>
<h2 id="包-组件注解" tabindex="-1"><a class="header-anchor" href="#包-组件注解" aria-hidden="true">#</a> 包+组件注解</h2>
<p><strong>包扫描</strong> + <strong>组件标注注解</strong>（<code v-pre>@Controller</code>、<code v-pre>@Service</code>、<code v-pre>@Repository</code>、<code v-pre>@Component</code>），运用在自定义的组件上</p>
<h3 id="自定义组件-component" tabindex="-1"><a class="header-anchor" href="#自定义组件-component" aria-hidden="true">#</a> 自定义组件 - @Component</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// @Repository</span>
<span class="token comment">// @Service</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">//getter、setter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasicApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Spring应用要跑起来 传入参数为当前类名，main方法函数的参数</span>
        <span class="token comment">// ConfigurableApplicationContext 为方法返回值类型</span>
        <span class="token comment">// var：java10提供的局部变量类型的自动推断 类似js语句，只能在方法中使用，不能声明为类变量。</span>
        <span class="token keyword">var</span> ioc <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BasicApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> forType <span class="token operator">=</span> ioc<span class="token punctuation">.</span><span class="token function">getBeanNamesForType</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出打印Person的容器</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> forType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230804160013.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="bean注册组件" tabindex="-1"><a class="header-anchor" href="#bean注册组件" aria-hidden="true">#</a> @Bean注册组件</h2>
<p>使用<code v-pre>@Bean</code>注册组件可以运用在我们<strong>自定义的组件</strong>或者<strong>第三方组件</strong>上。<code v-pre>@Bean</code>修饰方法时，类型就是<strong>返回值类型</strong>；<code v-pre>id</code>默认是<strong>方法名</strong>，也可自行指定<code v-pre>id</code>名称。</p>
<h3 id="自定义配置类" tabindex="-1"><a class="header-anchor" href="#自定义配置类" aria-hidden="true">#</a> 自定义配置类</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//这是一个配置类，替代以前的配置文件</span>
<span class="token comment">//配置类也是容器中的组件</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>

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
<h3 id="指定组件名" tabindex="-1"><a class="header-anchor" href="#指定组件名" aria-hidden="true">#</a> 指定组件名</h3>
<p>直接在注解声明对应容器名称。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//替代以前配置文件中的Bean标签。</span>
<span class="token comment">// 组件在容器中的名字默认是方法名，可以直接修改注解值</span>
<span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">"hahahahaha"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">setPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230804151907.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="import快速导入" tabindex="-1"><a class="header-anchor" href="#import快速导入" aria-hidden="true">#</a> @Import快速导入</h2>
<p>使用<code v-pre>@Import</code>快速给容器导入一个组件。</p>
<p><code v-pre>@Import</code>要导入的组件，容器就会自动注册这个组件，对应<code v-pre>id</code>默认是<strong>全类名</strong>（包名.类名）。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">School</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">//getter、setter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">School</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/springboot3/assets/20230804164640.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p><code v-pre>@Import</code>可以把第三方的所有类当作组件导入项目中，直接使用。<code v-pre>@Import</code>导入要在对应配置类中使用。</p>
<h2 id="组件注解" tabindex="-1"><a class="header-anchor" href="#组件注解" aria-hidden="true">#</a> 组件注解</h2>
<ul>
<li>
<p><code v-pre>@Configuration</code>、<code v-pre>@SpringBootConfiguration</code></p>
</li>
<li>
<p><code v-pre>@Bean</code>、<code v-pre>@Scope</code></p>
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
<h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>
<p><code v-pre>@Configuration</code>编写一个配置类</p>
</li>
<li>
<p>在配置类中，自定义方法给容器中注册组件，配合<code v-pre>@Bean</code>；或者使用<code v-pre>@Import</code>导入第三方的组件</p>
</li>
</ol>
</div></template>


