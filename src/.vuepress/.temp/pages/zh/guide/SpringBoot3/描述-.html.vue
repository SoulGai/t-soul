<template><div><h1 id="平台项目介绍" tabindex="-1"><a class="header-anchor" href="#平台项目介绍" aria-hidden="true">#</a> 平台项目介绍</h1>
<h2 id="项目的名称" tabindex="-1"><a class="header-anchor" href="#项目的名称" aria-hidden="true">#</a> 项目的名称</h2>
<p>测试开发平台</p>
<h2 id="项目目标" tabindex="-1"><a class="header-anchor" href="#项目目标" aria-hidden="true">#</a> 项目目标</h2>
<p>把当前有关质量的项目集成到一个平台上进行统一化管理及访问。</p>
<h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景</h2>
<p>不同业务线对应的自动化项目都部署在不同的Jenkins上调度，不能进行统一化的管理及查看，以及测试用例无法统一管理。</p>
<p>比如说，营销业务线的App端的自动化项目代码部署在Jenkins-a上，对应的接口自动化项目部署在Jenkins-b上，<br>
如果想要在同一个测试环境下运行两个项目，需要打开不同的Jenkins点击不同的job，并且报告需要在不同平台分别查看，<br>
比较耗时，想要做成平台与手工测试用例进行关联，当在该环境下选中要执行的手工测试用例，对应的接口自动化及UI自动化可以自动执行并生成报告返回给平台查看。</p>
<h2 id="项目阶段" tabindex="-1"><a class="header-anchor" href="#项目阶段" aria-hidden="true">#</a> 项目阶段</h2>
<p>汇总目前公司已有的自动化项目，分析各个项目使用的框架。</p>
<p>第一阶段：改造自动化项目，根据项目的测试框架特性，汇总出来当前项目的所有测试用例。</p>
<p>第二阶段：开发平台，提供后端接口，让自动化项目可直接调用接口把测试用例入库。</p>
<p>第三阶段：开发测试用例管理模块，把手工测试用例与自动化测试用例进行绑定关联。</p>
<p>第四阶段：开发测试用例调度模块，选中的手工测试用例执行时可选择接口、UI是否同时执行，如果同时执行则分别调度不同的Jenkins-job，并分别在执行结果后获取Allure报告回传至平台展示。</p>
<p>第五阶段：开发用户登录、注册模块，添加用户权限，推广平台给</p>
</div></template>


