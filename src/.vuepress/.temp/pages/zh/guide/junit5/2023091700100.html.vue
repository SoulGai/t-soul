<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>JUnit 5 组成</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>熟练掌握 JUnit 5 是由几部分组成，每部分对应的作用</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>编写测试用例时，使用 JUnit 5 中的哪个部分提供注解和断言方法来定义测试用例？</p>
<p>使用 JUnit 5 中的哪个部分编写自定义的扩展，以满足项目特定的需求？</p>
</div>
<h2 id="junit-5特点" tabindex="-1"><a class="header-anchor" href="#junit-5特点" aria-hidden="true">#</a> JUnit 5特点</h2>
<ol>
<li>
<p><code v-pre>JUnit 5</code> 是面向 <code v-pre>Java 8</code> 及更高版本的开源测试框架，可以完全替换或兼容<code v-pre>JUnit 4</code>。</p>
<blockquote>
<p>新的版本肯定要兼容旧的版本以及旧版本的技术，只是新版本增加了自己特有的一些特性，或者是有些使用方式上（比如：导包，对应包的位置及导入的包名方式有改变）有些改变。</p>
</blockquote>
</li>
<li>
<p><code v-pre>JUnit 5</code> 提供了丰富的功能——从改进的注解、标签和过滤器到条件判断执行和分组断言。</p>
<blockquote>
<p>基于 TDD 编写单元测试变得轻而易举。</p>
</blockquote>
</li>
<li>
<p>新框架还带来了一个强大的扩展模型。开发人员可以使用这个新模型向 <code v-pre>JUnit 5</code> 中添加自定义功能。</p>
<blockquote>
<p>这种自定义扩展机制为 Java 程序员提供了一种创建、执行（即 BDD 规范测试）的方法。</p>
</blockquote>
</li>
<li>
<p><code v-pre>JUnit 5</code> 在运行时需要 <code v-pre>Java 8</code> 或更高版本。本系列使用的是Java 11。</p>
</li>
</ol>
<h2 id="junit-5组成" tabindex="-1"><a class="header-anchor" href="#junit-5组成" aria-hidden="true">#</a> JUnit 5组成</h2>
<p>与以前的 <code v-pre>JUnit</code> 版本不同，<code v-pre>JUnit 5</code>由三个部分组成。</p>
<blockquote>
<p>JUnit 5 不是一个模块里面写完所有的功能及特性，在JUnit 5这个新一代的JUnit框架中，分了3个不同的子模块来进行框架的业务特性的区分。</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JUnit 5 不仅仅只是一个测试框架，它的重大改进不仅仅只是打破了常规的API，或者引入了新的扩展模型。还有一个非常重要的目标，就是打造一个基于JVM测试框架的基础平台。我们来看一个图：</p>
<figure><img src="@source/zh/guide/JUnit5/assets/20211128120016.png" alt="JUnit 5组成" tabindex="0" loading="lazy"><figcaption>JUnit 5组成</figcaption></figure>
<p>可以看到，就像洋葱一样，JUnit 5 的架构也是分层的，最核心的就是基础平台 JUnit Platform。IDE和构建工具都是作为<strong>客户端</strong>和这个核心平台交互，以达到在项目中运行测试的目的。TestEngine的实现在平台中用于发现和运行测试、输出测试报告，通过核心平台返回给客户端。</p>
<p>JUnit 5 的核心关注点是扩展能力，但并不仅仅只是存在于测试类级别。在整个测试平台级别，都提供了足够的扩展能力。 <strong>任何一个框架都可以在 JUnit 5 平台上运行他的测试用例，只需要提供框架本身对TestEngine接口的实现即可。</strong> 只需要一点点工作，通过这一个扩展点，框架就能得到所有IDE和构建工具在测试上的支持。这对于新框架来说绝对是好事，在测试和构建这块的门槛更低。</p>
<p>这些对于一个开发者来说意味着什么呢？这意味着一个测试框架和JVM开发市场上所有主流的工具集成的时候，你能更容易的说服你的经理，开发leader，或者不管是谁阻碍你引入这个测试框架的人。 JUnit Vintage就是一个TestEngine实现，用于执行JUnit4的测试。</p>
<h3 id="junit-platform" tabindex="-1"><a class="header-anchor" href="#junit-platform" aria-hidden="true">#</a> Junit Platform</h3>
<p>JUnit 5 的核心，它定义了一种测试平台，允许不同的测试引擎（Test Engines）来运行测试。JUnit 5 本身包含了一个默认的测试引擎，也可以与其他测试引擎一起使用。</p>
<h3 id="junit-jupiter" tabindex="-1"><a class="header-anchor" href="#junit-jupiter" aria-hidden="true">#</a> Junit Jupiter</h3>
<p>JUnit 5 的测试 API，JUnit Jupiter 提供了一系列注解和断言方法，使得编写和执行测试变得更加灵活和强大。</p>
<h3 id="junit-vintage" tabindex="-1"><a class="header-anchor" href="#junit-vintage" aria-hidden="true">#</a> Junit Vintage</h3>
<p>一个运行 <code v-pre>JUnit 3</code> 和 <code v-pre>JUnit 4</code> 测试和迁移支持到 <code v-pre>JUnit 5</code> (<code v-pre>JUnit Jupiter</code>) 的测试引擎。</p>
<blockquote>
<p>迁移现有项目到 JUnit 5 非常有用</p>
</blockquote>
<ul>
<li>
<p><code v-pre>JUnit 5 Jupiter</code> 的扩展模型可用于向 <code v-pre>JUnit</code> 中添加自定义功能。</p>
</li>
<li>
<p>扩展模型 <code v-pre>API</code> 测试生命周期提供了<strong>钩子</strong>和<strong>注入自定义参数的方法</strong>（即依赖注入）。</p>
</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>JUnit 5组成：<code v-pre>JUnit Platform</code>、<code v-pre>JUnit Jupiter</code>、<code v-pre>JUnit Vintage</code>。</p>
</li>
<li>
<p>测试用例编写用到的是<code v-pre>JUnit Jupiter</code>模块。</p>
</li>
</ul>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>JUnit 5 的核心组件是什么？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. JUnit Jupiter</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B. JUnit Vintage</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. JUnit Platform</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. JUnit Neptune</label></li>
</ul>
<details class="hint-container details"><summary>Answer</summary>
<p>答案：C</p>
</details>
</li>
<li>
<p>JUnit Jupiter 提供了什么功能？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> A. 测试引擎</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> B. 断言方法</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> C. 注解</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> D. 所有上述选项</label></li>
</ul>
<details class="hint-container details"><summary>Answer</summary>
<p>答案：D</p>
</details>
</li>
<li>
<p>用于在JUnit 5中运行旧版本测试的是什么？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> A. JUnit Jupiter</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> B. JUnit Vintage</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> C. JUnit Classic</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> D. JUnit Retro</label></li>
</ul>
<details class="hint-container details"><summary>Answer</summary>
<p>答案：B</p>
</details>
</li>
<li>
<p>JUnit 5 的扩展性是通过哪个组件实现的？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> A. JUnit Platform</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> B. JUnit Jupiter</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> C. JUnit Vintage</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> D. 扩展性不是JUnit 5 的一个特性</label></li>
</ul>
<details class="hint-container details"><summary>Answer</summary>
<p>答案：A</p>
</details>
</li>
<li>
<p>在JUnit 5中，如何组织测试用例以便更好地管理和执行它们？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> A. 使用测试引擎</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> B. 使用测试标签</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> C. 使用测试接口</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> D. 所有上述选项</label></li>
</ul>
<details class="hint-container details"><summary>Answer</summary>
<p>答案：D</p>
</details>
</li>
</ol>
</div></template>


