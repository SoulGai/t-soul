<template><div><h2 id="junit5介绍" tabindex="-1"><a class="header-anchor" href="#junit5介绍" aria-hidden="true">#</a> JUnit5介绍</h2>
<h3 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h3>
<ul>
<li>JUnit5是什么</li>
<li>JUnit5组成</li>
<li>测试用例主要用到哪部分</li>
</ul>
<h3 id="junit5-特点" tabindex="-1"><a class="header-anchor" href="#junit5-特点" aria-hidden="true">#</a> Junit5 特点</h3>
<ol>
<li><code v-pre>JUnit 5</code> 是面向 <code v-pre>Java 8</code> 及更高版本的开源测试框架，可以完全替换或兼容<code v-pre>JUnit 4</code>。</li>
</ol>
<blockquote>
<p>新的版本肯定要兼容旧的版本以及旧版本的技术，只是新版本增加了自己特有的一些特性，或者是有些使用方式上「比如：导包，对应包的位置及导入的包名方式有改变」有些改变。</p>
</blockquote>
<ol start="2">
<li><code v-pre>JUnit 5</code> 提供了丰富的功能——从改进的<mark>注解</mark>、<mark>标签</mark>和<mark>过滤器</mark>到<mark>条件判断执行</mark>和<mark>分组断言</mark>。</li>
</ol>
<blockquote>
<p>这让基于 TDD 编写单元测试变得轻而易举。</p>
</blockquote>
<ol start="3">
<li>新框架还带来了一个强大的<mark>扩展模型</mark>。开发人员可以使用这个新模型向 <code v-pre>JUnit 5</code> 中添加自定义功能。</li>
</ol>
<blockquote>
<p>这种自定义扩展机制为 Java 程序员提供了一种创建和执行故事和行为（即 BDD 规范测试）的方法。</p>
</blockquote>
<ol start="4">
<li><code v-pre>JUnit 5</code> 在运行时需要 <code v-pre>Java 8</code> 或更高版本。本系列使用的是<mark>Java 11</mark>。</li>
</ol>
<h3 id="junit5组成" tabindex="-1"><a class="header-anchor" href="#junit5组成" aria-hidden="true">#</a> JUnit5组成</h3>
<p>与以前的 <code v-pre>JUnit</code> 版本不同，<code v-pre>JUnit 5</code>由三个部分组成。</p>
<blockquote>
<p>JUnit5不是一个模块里面写完所有的功能及特性，在JUnit 5这个新一代的JUnit框架中，分了3个不同的子模块来进行框架的业务特性的区分。</p>
</blockquote>
<ol>
<li>
<p>一个基础平台</p>
</li>
<li>
<p>一个新的编程和扩展模型 <code v-pre>Jupiter</code></p>
</li>
<li>
<p>一个名为 <code v-pre>Vintage</code> 的向后兼容的测试引擎</p>
</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>JUnit 5 =  JUnit Platform  +  JUnit Jupiter  +  JUnit Vintage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个 <code v-pre>Junit 5</code> 中，专注用于编写测试的 <code v-pre>Junit Jupiter</code> 和用于执行测试的 <code v-pre>Junit</code> 平台。</p>
<p>JUnit5的目标，不仅仅只是瞄准测试框架。JUnit5的重大改进不仅仅只是打破了常规的API，或者引入了新的扩展模型。一个非常重要的目标，是打造一个基于JVM测试框架的基础平台。这意味着什么？我们来看一个图：</p>
<figure><img src="@source/zh/guide/JUnit5/assets/20211128120016.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>你可以看到，就像洋葱一样，JUnit5的架构也是分层的，最核心的就是基础平台。IDE和构建工具都是作为客户端和这个核心平台交互，以达到在项目中运行测试的目的。TestEngine的实现在平台中用于发现和运行测试，并且输出测试报告，并通过核心平台返回给客户端。</p>
<p>核心关注点是扩展能力，但并不仅仅只是存在于测试类级别。在整个测试平台级别，都提供了足够的扩展能力。任何一个框架都可以在JUnit平台上运行他自己的测试，只需要提供框架本身对TestEngine接口的实现即可。只需要一点点工作，通过这一个扩展点，框架就能得到所有IDE和构建工具在测试上的支持。这对于新框架来说绝对是好事，在测试和构建这块的门槛更低。</p>
<p>这些对于一个开发者来说意味着什么呢？这意味着一个测试框架和JVM开发市场上所有主流的工具集成的时候，你能更容易的说服你的经理，开发leader，或者不管是谁阻碍你引入这个测试框架的人。 JUnit Vintage就是一个TestEngine实现，用于执行JUnit4的测试。</p>
<h5 id="junit-platform" tabindex="-1"><a class="header-anchor" href="#junit-platform" aria-hidden="true">#</a> Junit Platform</h5>
<p>它是 <code v-pre>JVM</code> 上测试框架的 <code v-pre>Launcher</code>，定义了用于发现和执行测试的 <code v-pre>TestEngine API</code>，提供了用于运行 <code v-pre>Junit</code> 复古和 <code v-pre>Junit Jupiter</code> 测试的 <code v-pre>ConsoleLauncher</code>，以及对 <code v-pre>IDE</code> 和构建工具（如 <code v-pre>Gradle</code>、<code v-pre>Maven</code> 等）的一流支持。</p>
<h5 id="junit-jupiter" tabindex="-1"><a class="header-anchor" href="#junit-jupiter" aria-hidden="true">#</a> Junit Jupiter</h5>
<p>用于编写单元测试的新编程模型，<code v-pre>Junit 4</code> 的扩展模型并提供标准断言。</p>
<h5 id="junit-vintage" tabindex="-1"><a class="header-anchor" href="#junit-vintage" aria-hidden="true">#</a> Junit Vintage</h5>
<p>一个运行 <code v-pre>JUnit 3</code> 和 <code v-pre>JUnit 4</code> 测试和迁移支持到 <code v-pre>JUnit 5</code> (<code v-pre>JUnit Jupiter</code>) 的测试引擎。</p>
<ul>
<li><code v-pre>JUnit 5 Jupiter</code> 的扩展模型可用于向 <code v-pre>JUnit</code> 中添加自定义功能。</li>
<li>扩展模型 <code v-pre>API</code> 测试生命周期提供了钩子和注入自定义参数的方法（即依赖注入）。</li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<h6 id="junit5组成-1" tabindex="-1"><a class="header-anchor" href="#junit5组成-1" aria-hidden="true">#</a> JUnit5组成</h6>
<ul>
<li><code v-pre>JUnit Platform</code></li>
<li><code v-pre>JUnit Jupiter</code></li>
<li><code v-pre>JUnit Vintage</code></li>
</ul>
<h6 id="测试用例编写用到哪个模块" tabindex="-1"><a class="header-anchor" href="#测试用例编写用到哪个模块" aria-hidden="true">#</a> 测试用例编写用到哪个模块</h6>
<ul>
<li><code v-pre>JUnit Jupiter</code></li>
</ul>
</div></template>


