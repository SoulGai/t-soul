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
<p>JMeter脚本编写完成后如何运行？对应的界面都是英文显示，不友好，如何把JMeter界面设置为中文？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="测试计划" tabindex="-1"><a class="header-anchor" href="#测试计划" aria-hidden="true">#</a> 测试计划</h2>
<p>测试计划（Test Plan）是JMeter中的 <strong>顶层组件</strong>，用于定义和组织你的性能测试场景。</p>
<p>测试计划（Test Plan）用来<strong>描述一个压力/性能测试脚本和场景设计的基本运行单元</strong>， 使用JMeter进行测试的所有内容都是基于一个测试计划。</p>
<blockquote>
<p>JMeter中一个脚本就是一个测试计划，也是一个管理单元。</p>
</blockquote>
<p>测试计划包含所有要执行的线程组、控制器、监听器、断言、配置元素等，以描述一个完整的性能测试过程。</p>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuYfCJSr8L30suIZ9BW8ndMxjVh9_wOjt2fnsJkBHGk4zdptwnhF7vbWLSMbeAJtOqFDcnoiitjIIrw4NBh6TprZpPiHP5TV-gPtCw8Sf06f3bW4fVj6z-kc4YNCNpNVkVh-X-lhi5f1HDxcd_j6SBjZ-TkGABtFFP4vzEM0EISqW5-WVg9n0Rw5C0" alt="uml diagram" loading="lazy">
<p>描述一个性能/接口测试脚本和对应的场景设计，包含该测试项目的所有相关功能。即，JMeter进行测试的所有内容都在一个测试计划中。</p>
<p>在JMeter中，一个脚本只能编辑一个测试计划。如果需要创建新的测试计划，则需要重新创建一个JMeter脚本。</p>
<h3 id="一个jmeter脚本中测试计划只有一个" tabindex="-1"><a class="header-anchor" href="#一个jmeter脚本中测试计划只有一个" aria-hidden="true">#</a> 一个JMeter脚本中测试计划只有一个</h3>
<ol>
<li><strong>一个脚本只能有一个测试计划</strong>。</li>
</ol>
<p>JMeter中 GUI显示的是树形结构，测试计划是根节点，根节点只能有一个。一棵树只能有一个根。</p>
<h3 id="至少有一个线程组" tabindex="-1"><a class="header-anchor" href="#至少有一个线程组" aria-hidden="true">#</a> 至少有一个线程组</h3>
<ol start="2">
<li><strong>测试计划中至少有一个线程组，没有关联的业务分布在不同的线程组中</strong>。</li>
</ol>
<p>JMeter负载是线程组驱动的，所以测试计划中至少要出现一个线程组，JMeter的测试计划支持有多个线程组。</p>
<h3 id="至少有一个取样器" tabindex="-1"><a class="header-anchor" href="#至少有一个取样器" aria-hidden="true">#</a> 至少有一个取样器</h3>
<ol start="3">
<li><strong>至少一个取样器</strong>。</li>
</ol>
<p>压测脚本的目的就是要模拟用户请求，如果压测脚本中没有取样器则脚本就没有意义，都没有意义了也无需谈论对错。</p>
<h3 id="至少有一个监听器" tabindex="-1"><a class="header-anchor" href="#至少有一个监听器" aria-hidden="true">#</a> 至少有一个监听器</h3>
<ol start="4">
<li><strong>至少一个监听器</strong>，发送完请求后要验证请求是否正确。</li>
</ol>
<p>测试结果是用来衡量服务端性能的，需要从压测的结果中分析性能。</p>
<p>至于其他的组件，都是为以上要素进行服务的。哪些元件下能添加哪些元件，不需要担心，JMeter做了严格的控制。</p>
<h2 id="界面" tabindex="-1"><a class="header-anchor" href="#界面" aria-hidden="true">#</a> 界面</h2>
<figure><img src="@source/zh/guide/performance/assets/20230608145819.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="名称" tabindex="-1"><a class="header-anchor" href="#名称" aria-hidden="true">#</a> 名称</h3>
<p>整个测试脚本保存的名称</p>
<h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3>
<p>备注信息，对整个脚本的一个简短的解释说明，含义等同代码中写的注释。</p>
<h3 id="用户定义的变量" tabindex="-1"><a class="header-anchor" href="#用户定义的变量" aria-hidden="true">#</a> 用户定义的变量</h3>
<p>User Defined Variables。</p>
<p><RouterLink to="/zh/guide/performance/2002B_%E7%94%A8%E6%88%B7%E5%AE%9A%E4%B9%89%E7%9A%84%E5%8F%98%E9%87%8F.html"></RouterLink></p>
<h3 id="独立运行每个线程组" tabindex="-1"><a class="header-anchor" href="#独立运行每个线程组" aria-hidden="true">#</a> 独立运行每个线程组</h3>
<p>用于控制测试计划中的多个线程组的执行顺序。</p>
<p><strong>不勾选</strong>时，默认各线程组<strong>并行</strong>、<strong>随机执行</strong>。当有多个线程组时，线程组1和线程组2的线程是并行执行的，执行过程线程的执行顺序是不可预料的。</p>
<p><strong>勾选</strong>了独立运行每个线程组，可以保证线程组1的执行一定在线程组2之前，线程组1执行完毕，才会执行线程组2，即 <strong>顺序执行各线程组</strong>。</p>
<blockquote>
<p>线程组中的<strong>取样器</strong>的执行顺序：默认是<strong>从上到下执行</strong>。可以通过交替控制器、随机控制器、随机顺序控制器和循环控制器等可以改变取样器的执行顺序。</p>
</blockquote>
<h3 id="主线程结束后运行teardown线程组" tabindex="-1"><a class="header-anchor" href="#主线程结束后运行teardown线程组" aria-hidden="true">#</a> 主线程结束后运行tearDown线程组</h3>
<p>主线程关闭后，可以通过运行tearDown线程组，来关闭某些错误异常的线程。</p>
<p>如：主线程因为错误导致测试停止时，如果<strong>勾选☑</strong>️，会执行tearDown线程组。<strong>不勾选</strong>，就不会执行tearDown线程组。</p>
<h3 id="函数测试模式" tabindex="-1"><a class="header-anchor" href="#函数测试模式" aria-hidden="true">#</a> 函数测试模式</h3>
<p>函数测试模式（Functional Testing）：如果选中了此选项，同时监听组件如“<strong>查看结果树</strong>”配置了保存到一个文件中，那么jmeter会将每次的请求结果保存到文件中。</p>
<blockquote>
<p>比较消耗资源，一般不建议勾选。</p>
</blockquote>
<h3 id="添加目录或jar包到classpath" tabindex="-1"><a class="header-anchor" href="#添加目录或jar包到classpath" aria-hidden="true">#</a> 添加目录或jar包到ClassPath</h3>
<p><code v-pre>Add directory or jar to classpath</code>：添加文件或jar包，此功能最常用于调用外部jar包。</p>
<p>当脚本需要调用外部的java文件或jar包时，可以把jar包路径添加到这里，然后在beanshell中直接import进来，并调用jar包中的方法。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>总结一</li>
<li>总结二</li>
<li>总结三<br>
<a href="https://github.com/Wechat-ggGitHub/Awesome-GitHub-Repo" target="_blank" rel="noopener noreferrer">https://github.com/Wechat-ggGitHub/Awesome-GitHub-Repo<ExternalLinkIcon/></a></li>
</ul>
<p><a href="https://github.com/testeru-pro/junit5-demo/tree/main/junit5-basic" target="_blank" rel="noopener noreferrer">项目演示地址<ExternalLinkIcon/></a></p>
<h1 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h1>
<ol>
<li>
<p>SpringBoot项目的父工程为( )。</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. <code v-pre>spring-boot-starter-parent</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B.<code v-pre>spring-boot-starter-web</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. <code v-pre>spring-boot-starter-father</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. <code v-pre>spring-boot-starter-super</code></label></li>
</ul>
</li>
</ol>
</div></template>



<style>
  strong {
    color: #ea6010;
    font-weight: bolder;
  }
  .reveal blockquote {
    font-style: unset;
  }
</style>