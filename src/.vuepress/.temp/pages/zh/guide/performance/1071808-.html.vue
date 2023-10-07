<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>JMeter运行原理</li>
<li>压测脚本要素</li>
<li>组件执行顺序</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>了解JMeter运行原理</li>
<li>掌握压测脚本要素</li>
<li>掌握组件执行顺序</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<p>在上一篇文章我们了JMeter的组成部分，下面来了解一下对应的JMeter的运行原理。</p>
<p>用过LoadRunner的同学应该知道，对应的LoadRunner运行方式是可以选择的，可以选择时进程也可以选择是线程来运行脚本。JMeter选择的是线程方式来运行。</p>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>为什么JMeter选择线程的方式来运行脚本？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p>JMeter是Java语言开发的软件，所以它的压测脚本都是在JVM虚拟机上运行的，那对应的每个进程的开销就要比LoadRunner的进程开销大。</p>
<p>如果用进程的方式来运行的话，那每台负载机的进程数量就不允许有太多，所以JMeter选择以线程的方式来运行。</p>
<p>JMeter通过线程池「也就是线程组」来驱动多个线程，以此来运行测试脚本对被测服务发起负载。每一个负载机都可以运行多个线程组，如下图测试计划下可以有多个线程组。</p>
<figure><img src="@source/zh/guide/performance/assets/20230221115851.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</details>
<h2 id="运行原理" tabindex="-1"><a class="header-anchor" href="#运行原理" aria-hidden="true">#</a> 运行原理</h2>
<p>JMeter编写的压测脚本运行不仅可以在GUI中运行，还可以使用JMeter的命令行运行，并且命令行运行对于负载机来说资源消耗会更小一些。</p>
<p>JMeter的运行原理是<strong>通过线程组模拟虚拟用户，并通过控制器、操作和处理器等构建测试逻辑</strong>。</p>
<p>在执行测试期间，JMeter会发送请求至目标系统，并将服务器返回的响应与预期结果进行对比。最后，通过<strong>监听器</strong>来展现<strong>测试结果和性能数据</strong>。</p>
<h3 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式" aria-hidden="true">#</a> 分布式</h3>
<p>JMeter也支持远程运行，运行架构如下：</p>
<figure><img src="@source/zh/guide/performance/assets/20230221185918.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>
<p><strong>控制机</strong>：多台JMeter负载机进行压测时，其中一个被选为管理的那台机器。控制机也可参与脚本运行，并且管理远程负载机（远程指挥负载机运行的任务并收集远程负载机的测试结果）。</p>
</li>
<li>
<p><strong>负载机</strong>：向被测服务器发起负载的机器。（控制机同时也是一台负载机）控制机会把要运行的压测脚本发给远程负载机，但是压测脚本中所需的参数文件及依赖的第三方jar包，控制机是不会发给远程负载机，需要自己用工具实现自动拷贝。</p>
</li>
</ul>
<p>在多台电脑上，启动JMeter的Romote Testing模式，然后其中某一台负载机作为Master端「控制机」通过RMI控制Slave端来执行我们的测试脚本。当JMeter Slave端执行完测试脚本后，会将执行结果发送回Master控制端进行汇总，得出整体的测试报表。</p>
<p>JMeter的分布式的好处就是可以用一台终端、一个测试计划在多台服务器端同时对目标服务器进行测试，并且将测试的结果回报给统一的控制终端进行汇总，方便高并发的测试需求。</p>
<h2 id="jmeter脚本生成方式" tabindex="-1"><a class="header-anchor" href="#jmeter脚本生成方式" aria-hidden="true">#</a> JMeter脚本生成方式</h2>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuYfCJSr8L30suIZ9BW0mltzIIrA8NBREUpLdpVChyPnqJdatR-NHFFvSM7YajXQTxfpxjs0OHXQW0YiAqu91ylcRDansT83EsBttQklt5_jal5lOWMmBH1pB--Umjp_gMFjypxMdRJ2GJNZRCUh6__LdNvASzhSY60DK-xL_yV5RBYxxjJ_kdlT_JyxIj5oBrjAFjsRm9JoVqFUli1Xh6vP0A30PeK83Om0020000" alt="uml diagram" loading="lazy">
<h2 id="直接编写脚本" tabindex="-1"><a class="header-anchor" href="#直接编写脚本" aria-hidden="true">#</a> 直接编写脚本</h2>
<p>备注：【缺少】百度编写的测试脚本。</p>
<h2 id="jmeter组件执行顺序" tabindex="-1"><a class="header-anchor" href="#jmeter组件执行顺序" aria-hidden="true">#</a> JMeter组件执行顺序</h2>
<p>JMeter压测脚本中的组件是呈树形结构排列，测试计划下的组件之间的执行顺序是：</p>
<ol>
<li>
<p>先执行根节点，再执行子节点。</p>
<blockquote>
<p>同一个作用范围内有多个同一类型组件，则这些组件按照测试计划中的顺序自上而下依次执行。</p>
</blockquote>
</li>
<li>
<p>在同一作用域范围内（同一层次），各个组件执行顺序逻辑：</p>
<ol>
<li>
<p><strong>配置元件</strong>：影响作用范围内的所有组件。</p>
</li>
<li>
<p><strong>前置处理器</strong>：在作用范围内的<strong>每个取样器</strong>组件前执行。</p>
</li>
<li>
<p><strong>定时器</strong>：对作用范围内<strong>每个取样器</strong>有效。</p>
</li>
<li>
<p><strong>取样器</strong></p>
</li>
<li>
<p><strong>后置处理器</strong>：在作用范围内<strong>每个取样器</strong>组件后执行。</p>
</li>
<li>
<p><strong>断言</strong>：对作用范围内<strong>每个取样器</strong>组件执行后的结果进行校验。</p>
</li>
<li>
<p><strong>监听器</strong>：收集作用范围内的<strong>每个取样器</strong>组件的相关信息并呈现出来。</p>
</li>
</ol>
</li>
</ol>
<blockquote>
<p>以上很多组件都是跟取样器有关联，如果在作用范围内没有取样器，那对应组件则不会被执行，就没有意义。</p>
</blockquote>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>JMeter组件执行顺序： 先执行根节点，再执行子节点； 同一层次中，各个组件执行顺序逻辑： 【配置元件】 --&gt;  【前置处理器】 --&gt; 【定时器】 --&gt; 【取样器】 --&gt; 【后置处理器】 --&gt; 【断言】 --&gt; 【监听器】。</li>
</ul>
</div></template>


