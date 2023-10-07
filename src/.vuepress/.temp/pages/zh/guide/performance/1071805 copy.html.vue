<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>运行模块介绍</li>
<li>选项模块介绍</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>运行、选项模块使用。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JMeter</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="jmeter菜单栏-运行-选项" tabindex="-1"><a class="header-anchor" href="#jmeter菜单栏-运行-选项" aria-hidden="true">#</a> JMeter菜单栏-运行&amp;选项</h1>
<h2 id="本章要点-1" tabindex="-1"><a class="header-anchor" href="#本章要点-1" aria-hidden="true">#</a> 本章要点</h2>
<h2 id="运行模块" tabindex="-1"><a class="header-anchor" href="#运行模块" aria-hidden="true">#</a> 运行模块</h2>
<p>本篇文章介绍运行下拉菜单，先不介绍远程相关的知识。在后续使用到时再详细介绍。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230128152343.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3>
<p>启动运行当前的测试计划。</p>
<p>当前测试计划有等待脚本就进行等待，没有等待则直接运行请求。</p>
<p>也可直接点击<strong>工具栏</strong>的<strong>启动</strong>按钮：<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230208145332.png" alt="" loading="lazy"></p>
<h3 id="不停顿开始" tabindex="-1"><a class="header-anchor" href="#不停顿开始" aria-hidden="true">#</a> 不停顿开始</h3>
<p><code v-pre>Start no pauses</code>：脚本无停顿的启动运行当前的测试计划。</p>
<p><strong>注意⚠️</strong>：</p>
<p>不停顿开始选项可以<strong>忽略脚本的定时器</strong>并且运行过一次的脚本<strong>再一次启动时开始运行脚本的速度更快</strong>。</p>
<p>也可直接点击<strong>工具栏</strong>的<strong>不停顿开始</strong>按钮：<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230208145256.png" alt="" loading="lazy"></p>
<h3 id="清除" tabindex="-1"><a class="header-anchor" href="#清除" aria-hidden="true">#</a> 清除</h3>
<p>只清除<strong>选中</strong>监听器的执行结果。</p>
<blockquote>
<p>一个测试脚本内有多个监听器，比如：查看结果树、聚合报告。</p>
</blockquote>
<blockquote>
<p>选中<strong>查看结果树</strong>点击<strong>清除</strong>，发现只清除结果树的运行结果，不清除聚合报告的数据。</p>
</blockquote>
<p>选中某一监听器点击清除，发现只清除了当前选中的监听器的执行结果，没有被选中的监听器对应的执行结果是不会被清除数据。</p>
<p>也可直接点击<strong>工具栏</strong>的<strong>清除</strong>按钮：<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230208145513.png" alt="" loading="lazy"></p>
<h3 id="清除全部" tabindex="-1"><a class="header-anchor" href="#清除全部" aria-hidden="true">#</a> 清除全部</h3>
<p>清除所有监听器的执行结果。</p>
<blockquote>
<p>无论选中哪个监听器组件，对应当前测试计划下的所有监听器的执行结果都会被清除。</p>
</blockquote>
<p>也可直接点击<strong>工具栏</strong>的<strong>清除全部</strong>按钮：<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230208145619.png" alt="" loading="lazy"></p>
<h2 id="选项模块" tabindex="-1"><a class="header-anchor" href="#选项模块" aria-hidden="true">#</a> 选项模块</h2>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230128171027.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="选择语言" tabindex="-1"><a class="header-anchor" href="#选择语言" aria-hidden="true">#</a> 选择语言</h3>
<p>最常用的就是语言的切换，根据自己习惯切换到常用语言。</p>
<h4 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h4>
<p>每次打开界面都需要进行选择语言，不会在<code v-pre>JMeter</code>退出界面后进行保存。</p>
<h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h4>
<p>如果想要解决修改语言并长期保存的问题，可以直接修改配置文件<code v-pre>{jmeter_path}/bin/jmeter.properties </code>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#Preferred GUI language. Comment out to use the JVM default locale's language.</span>
<span class="token comment">#language=en</span>
<span class="token assign-left variable">language</span><span class="token operator">=</span>zh_CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志查看" tabindex="-1"><a class="header-anchor" href="#日志查看" aria-hidden="true">#</a> 日志查看</h3>
<p>选择日志查看，可以看到在右下方有对应的日志框显示。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230128173324.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="全部折叠" tabindex="-1"><a class="header-anchor" href="#全部折叠" aria-hidden="true">#</a> 全部折叠</h3>
<ul>
<li><code v-pre>Collapse All</code>：当前测试计划下的所有组件都折叠起来。</li>
</ul>
<p>也可直接点击<strong>工具栏</strong>的<strong>全部展开</strong>按钮：<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230208145919.png" alt="" loading="lazy"></p>
<h3 id="全部展开" tabindex="-1"><a class="header-anchor" href="#全部展开" aria-hidden="true">#</a> 全部展开</h3>
<ul>
<li><code v-pre>Expand All</code>：当前测试计划下只要是折叠的组件就全部打开。</li>
</ul>
<p>也可直接点击<strong>工具栏</strong>的<strong>全部展开</strong>按钮：<br>
<img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230208145842.png" alt="" loading="lazy"></p>
<h2 id="jmeter界面功能总结" tabindex="-1"><a class="header-anchor" href="#jmeter界面功能总结" aria-hidden="true">#</a> JMeter界面功能总结</h2>
<ul>
<li>
<p>JMeter中常规的菜单功能：新建、保存、查询、配置、帮助 等</p>
</li>
<li>
<p>压测运行相关的功能：开始运行、停止运行、远程运行、停止远程运行 等</p>
</li>
<li>
<p>设定JMeter的界面更改</p>
</li>
<li>
<p>配置语言，建议English</p>
</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>运行下拉菜单中点击<strong>不停顿开始</strong>节省脚本测试时间。</p>
</li>
<li>
<p>选项下拉菜单中可以直接把  所有组件进行折叠或者展开。</p>
</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/TesterDevSoul/pic/manual/20230208145149.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


