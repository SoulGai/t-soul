<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>基本注解：@Test、@BeforeEach、@AfterEach、@BeforeAll、@AfterAll</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>熟练掌握使用基本注解便携测试用例</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JUnit 5 有哪些基本的注解，用于标记测试方法和控制测试的行为？</p>
</div>
<h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> @Test</h2>
<p>@Test 注释用于标记单元测试方法。</p>
<p>JUnit 5 中，所有测试方法都必须使用 @Test 注释进行标记，否则它们不会被 JUnit 框架识别为测试方法。</p>
<p>@Test 注释的<strong>参数</strong>包括 <code v-pre>timeout</code> 和 <code v-pre>expected</code> 。</p>
<ul>
<li>
<p>timeout 用于设置测试方法的最大执行时间（单位为毫秒），如果测试方法的执行时间超过了该值，则测试将失败。</p>
</li>
<li>
<p>expected 用于设置测试方法预期的异常类型。</p>
</li>
</ul>
<h2 id="beforeeach" tabindex="-1"><a class="header-anchor" href="#beforeeach" aria-hidden="true">#</a> @BeforeEach</h2>
<p>@BeforeEach 注释用于标记在每个测试方法之前要执行的方法。</p>
<p>@BeforeEach 注释的方法必须是公共的、没有参数的，并且没有返回值。</p>
<p>@BeforeEach 注释的方法将在每个测试方法执行之前被调用。</p>
<h2 id="aftereach" tabindex="-1"><a class="header-anchor" href="#aftereach" aria-hidden="true">#</a> @AfterEach</h2>
<p>@AfterEach 注释用于标记在每个测试方法之后要执行的方法。</p>
<p>@AfterEach 注释的方法必须是公共的、没有参数的，并且没有返回值。</p>
<p>@AfterEach 注释的方法将在每个测试方法执行之后被调用。</p>
<h2 id="注解示例" tabindex="-1"><a class="header-anchor" href="#注解示例" aria-hidden="true">#</a> 注解示例</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">top<span class="token punctuation">.</span>testeru<span class="token punctuation">.</span>basic</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">AfterEach</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Assertions</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">BeforeEach</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">top<span class="token punctuation">.</span>testeru<span class="token punctuation">.</span></span><span class="token class-name">Calculator</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>invoke<span class="token punctuation">.</span></span><span class="token class-name">MethodHandles</span><span class="token punctuation">.</span><span class="token static">lookup</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token static">getLogger</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@program</span>: junit5_tutorial
 * <span class="token keyword">@author</span>: 盖盖
 * <span class="token keyword">@description</span>: 基本注解
 * 执行顺序：
 *      @BeforeEach --> @Test修饰的方法1 --> @AfterEach -->
 *      @BeforeEach --> @Test修饰的方法2 --> @AfterEach
 * @Date: 2023/10/8
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Basic_01_Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lookupClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Calculator</span> calculator<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * @BeforeEach:void返回值
     *  执行顺序：在每一个@Test注解修饰的方法之前运行一次；当前测试类有多少个@Test注解，@BeforeEach注解修饰的方法就运行多少次
     *  应用场景：测试用例中，测试方法需要初始化的内容及属性，比如：app/web端进入固定页面，回退到固定页面；重启app；删除某些产生的测试数据
     */</span>
    <span class="token annotation punctuation">@BeforeEach</span>
    <span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        calculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token string">"[Basic test]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        calculator<span class="token punctuation">.</span><span class="token function">initId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">sumTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"Testing sum method in {}"</span><span class="token punctuation">,</span> calculator<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// exercise 业务调用</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> calculator<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// verify 断言</span>
        <span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">concanateTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"Testing sum concatenate in {} SUT"</span><span class="token punctuation">,</span> calculator<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// exercise</span>
        <span class="token class-name">String</span> phrase <span class="token operator">=</span> calculator<span class="token punctuation">.</span><span class="token function">concatenate</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// verify</span>
        <span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>phrase<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * @AfterEach:void返回值
     *   执行顺序：在每一个@Test注解修饰的方法之后运行一次；前测试类有多少个@Test注解，@AfterEach注解修饰的方法就运行多少次
     *   应用场景：测试用例中，测试方法需要初始化的内容及属性，比如：app/web端进入固定页面，回退到固定页面；重启app；删除某些产生的测试数据
     */</span>
    <span class="token annotation punctuation">@AfterEach</span>
    <span class="token keyword">void</span> <span class="token function">teardown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        calculator<span class="token punctuation">.</span><span class="token function">releaseId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        calculator<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/JUnit5/assets/20231011200350.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


