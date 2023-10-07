<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>
<p>文件模块介绍</p>
</li>
<li>
<p>文件模块-模版</p>
</li>
<li>
<p>文件模块-合并</p>
</li>
<li>
<p>文件模块-保存为测试片段</p>
</li>
<li>
<p>编辑模块功能介绍：截图</p>
</li>
<li>
<p>查找模块功能介绍</p>
</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>文件模块使用。</li>
<li>编辑模块使用。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>文件模块如何使用？</p>
<p>怎样快速创建一个模版的压测脚本？</p>
<p>多个JMeter脚本是否可以快速合并？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/20230116154447.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h2>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuYfCJSr8L30suIZ9BW0mltzIIrA8N_NEUzavzjg2VIqi1YQsby6nQ-vFTsu0i8BDpyjCz3H3cYeNFvkxNqzC3yO0wMcOzcxFcsRoMfxjtGKGW2fwkdV5iohuNszS_tTS2rlTqGiVJdH3JdkoV2vH6OZxRslrY_TGNwnO-xPZqPCSkgE4ABniwd-nO-x9vnTEEDeX294cu04JpyyxsP-ksGbs0LmHXkvR2yrtxdw_eVhwxvN538weZUbyqxuLRyMH7mvCTgz2DLNYnVyRJllbS3gd0q8M6C8WD37S0" alt="uml diagram" loading="lazy">
<p>首先来看第一个就是文件，在文件这个模块内有多个功能，分别是：<strong>新建</strong>、<strong>模版</strong>、<strong>打开</strong>、<strong>合并</strong>等等，下面根据常用的几个来进行功能的演示说明。</p>
<h3 id="打开" tabindex="-1"><a class="header-anchor" href="#打开" aria-hidden="true">#</a> 打开</h3>
<p>打开一个当前硬盘上的压测脚本即<code v-pre>JMX</code>文件。</p>
<h3 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板...</h3>
<p><strong>模板</strong>是对常用的功能使用指导。</p>
<p>主要有<strong>录制</strong>、<strong>JDBC测试</strong>、<strong>BeanShell使用</strong>、<strong>构建Web测试计划</strong><br>
等等，每个功能界面都分为<strong>基本步骤</strong>和<strong>详细截图</strong>。</p>
<p>也可直接点击<strong>工具栏</strong>的<strong>模板</strong>按钮：</p>
<figure><img src="@source/zh/guide/performance/assets/20230208150013.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h4>
<p>在模板界面选择需要的模版后，点击 <code v-pre>Useful links</code>「用户链接」，则会链接到 <code v-pre>Apache JMeter</code> 官网查看详细步骤和截图。</p>
<figure><img src="@source/zh/guide/performance/assets/20230116155839.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="脚本构建" tabindex="-1"><a class="header-anchor" href="#脚本构建" aria-hidden="true">#</a> 脚本构建</h4>
<h5 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h5>
<p>构建一个web的测试计划模版脚本。</p>
<h5 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h5>
<ol>
<li>
<p>下拉选择模板内的功能，模板界面选择 <strong>构建web测试计划</strong> - <code v-pre>Building a Web Test Plan</code>。<br>
<img src="@source/zh/guide/performance/assets/20230128105709.png" alt="" loading="lazy"></p>
</li>
<li>
<p>点击<code v-pre>create</code>则会直接在<code v-pre>GUI</code>界面创建整体模版，如下：<br>
<img src="@source/zh/guide/performance/assets/20230116160553.png" alt="" loading="lazy"></p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>模版脚本的存放路径？</p>
<p>模版脚本都在<code v-pre>JMeter</code>哪里存在呢？</p>
<p>为什么在模版内选择对应功能就能创建出来相关脚本？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p>打开<code v-pre>JMeter</code>安装路径，可以看到在<code v-pre>{jmeter_path}/bin/templates</code>文件夹下有所有的模板选项下的脚本。</p>
<p>如下图：<br>
<img src="@source/zh/guide/performance/assets/20230116161740.png" alt="" loading="lazy"></p>
</details>
<h3 id="合并" tabindex="-1"><a class="header-anchor" href="#合并" aria-hidden="true">#</a> 合并</h3>
<p>将多个<code v-pre>JMX</code>脚本文件合并为一个，也就是把多个<code v-pre>JMX</code>文件打开放在同一个测试计划下。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>先打开的脚本文件中测试计划下的组件会放在上面。</p>
</div>
<h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4>
<p>功能点分开多个人编写压测脚本，最终链路压测或需求合并压测时，需要把多个压测脚本合并为一个脚本。</p>
<blockquote>
<p>使用文件的合并功能，可以节省复制各种重复组件的时间。</p>
</blockquote>
<h4 id="业务需求" tabindex="-1"><a class="header-anchor" href="#业务需求" aria-hidden="true">#</a> 业务需求</h4>
<p>将<strong>2</strong>个<code v-pre>JMX</code>脚本文件合并为一个脚本文件。</p>
<h5 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h5>
<p>这里准备了<strong>2</strong>个脚本，一个脚本为<code v-pre>ATest.jmx</code>，一个脚本为<code v-pre>BTest.jmx</code>。</p>
<figure><img src="@source/zh/guide/performance/assets/20230128111317.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="步骤-1" tabindex="-1"><a class="header-anchor" href="#步骤-1" aria-hidden="true">#</a> 步骤</h5>
<ol>
<li>
<p>打开新的测试计划，选择文件下的<strong>合并</strong>，根据路径选择<code v-pre>BTest.jmx</code>，可以看到当前脚本的测试计划下添加对应组件，但是该脚本还没有进行保存。</p>
<figure><img src="@source/zh/guide/performance/assets/20230128112255.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/performance/assets/20230128112821.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>再次选择合并，根据路径选择<code v-pre>ATest.jmx</code>，可以看到当前脚本的测试计划下继续添加<code v-pre>ATest</code>脚本的组件。</p>
<figure><img src="@source/zh/guide/performance/assets/20230128113051.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ol>
<li>
<p>合并功能中可以进行多个脚本的合并，<strong>没有个数限制</strong>。</p>
</li>
<li>
<p>合并选择对应文件后，<strong>组件</strong>会一直<strong>往后叠加</strong>。</p>
</li>
</ol>
</div>
<h3 id="保存" tabindex="-1"><a class="header-anchor" href="#保存" aria-hidden="true">#</a> 保存</h3>
<p>仅保存当前<code v-pre>JMeter</code>界面的测试计划。</p>
<h3 id="保存测试计划为" tabindex="-1"><a class="header-anchor" href="#保存测试计划为" aria-hidden="true">#</a> 保存测试计划为</h3>
<p>将<code v-pre>JMeter</code>界面的测试计划另存为在硬盘的指定位置。</p>
<h3 id="选中部分保存为" tabindex="-1"><a class="header-anchor" href="#选中部分保存为" aria-hidden="true">#</a> 选中部分保存为...</h3>
<p>选中的组件，比如线程组，会直接保存为新的测试计划脚本。</p>
<figure><img src="@source/zh/guide/performance/assets/20230116174134.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="保存为测试片段" tabindex="-1"><a class="header-anchor" href="#保存为测试片段" aria-hidden="true">#</a> 保存为测试片段</h3>
<p>选中的组件保存为一个测试片段。</p>
<p><strong>测试片段</strong>：该组件是一种特殊类型的控制器，它存在于测试计划树中，<strong>与线程组元素处于同一级别</strong>。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><strong>线程组</strong>、<strong>测试计划</strong> 组件不能保存为一个测试片段。</p>
<p>若选中<strong>线程组</strong>、<strong>测试计划</strong>组件后点击<strong>保存为测试片段</strong>则会提示如下报错：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>One of the selected nodes cannot be put inside a Test Fragment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/1674012683977.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<h4 id="保存结果" tabindex="-1"><a class="header-anchor" href="#保存结果" aria-hidden="true">#</a> 保存结果</h4>
<p>测试片段保存<code v-pre>HTTP</code>请求组件为新的<code v-pre>JMX</code>脚本文件。</p>
<figure><img src="@source/zh/guide/performance/assets/20230118115120.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="测试片段-vs-线程组" tabindex="-1"><a class="header-anchor" href="#测试片段-vs-线程组" aria-hidden="true">#</a> 测试片段 VS 线程组</h4>
<p><strong>测试片段</strong>与<strong>线程组</strong>的区别在于：</p>
<p>测试片段不会被执行，除非测试片段被<strong>模块控制器</strong>或<code v-pre>Include_Controller</code>引用。但是线程组会被脚本执行。</p>
<p><strong>测试片段</strong>纯粹用于测试计划中的<strong>代码重用</strong>，<strong>线程组</strong>需要调用业务逻辑代码。</p>
<h3 id="还原" tabindex="-1"><a class="header-anchor" href="#还原" aria-hidden="true">#</a> 还原</h3>
<p><code v-pre>Revert</code>：将现在的<code v-pre>jmx</code>还原为已经保存过的<code v-pre>JMX</code>文件。</p>
<p>打开脚本文件，进行修改后不保存，点击还原，则还原为打开前的脚本文件。</p>
<figure><img src="@source/zh/guide/performance/assets/20230128174153.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="编辑" tabindex="-1"><a class="header-anchor" href="#编辑" aria-hidden="true">#</a> 编辑</h2>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuYfCJSr8L30suIZ9BW0mltzIIrA8N_NEUzavzjg2VIqi1YQsby7pFj1Vx9W9PMWfF9tGytRaDp7ooV-xJjJDUT3KzRzhvPCUkfxFtFUziHv9vkh7_wSwfA390etRjVxwY-_dk5eWQYA17I4Z0Y_NRdsriGeWgFEreVzQx2A80mdwoe-_viiRdKrOyxTdrj6CrabL0IvvjxNwnVYhGdcVhjd8vf0Az2VKgY0qC0000" alt="uml diagram" loading="lazy">
<p>首先，来看一下编辑模块下的功能列表。主要介绍：<strong>保存节点为图片</strong>、<strong>保存屏幕为图片</strong>及<strong>切换</strong>功能。</p>
<p>选中测试计划时如图：</p>
<figure><img src="@source/zh/guide/performance/assets/20230128144912.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选中线程组件时如图：</p>
<figure><img src="@source/zh/guide/performance/assets/20230208174047.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以发现，选中的组件不同时，对应的编辑列表的功能点显示不同。本篇文章主要介绍通用部分的编辑功能。</p>
<p><a href="https://github.com/Nikita-GDev/my-docs/blob/master/src/zh/guide/performance/material/gui_png.jmx" target="_blank" rel="noopener noreferrer">示例脚本地址<ExternalLinkIcon/></a></p>
<h3 id="合并-1" tabindex="-1"><a class="header-anchor" href="#合并-1" aria-hidden="true">#</a> 合并</h3>
<p>选中测试计划组件后，选择编辑下拉的合并和文件模块的合并功能一致。</p>
<h3 id="保存节点为图片" tabindex="-1"><a class="header-anchor" href="#保存节点为图片" aria-hidden="true">#</a> 保存节点为图片</h3>
<p><code v-pre>Save Node As Image</code>：将选中组件的具体配置<code v-pre>GUI</code>界面保存为图片，<strong>不显示</strong>左侧树状组件栏。</p>
<p>保存的图片以<code v-pre>png</code>结尾，图片名默认为节点的组件名称。</p>
<figure><img src="@source/zh/guide/performance/assets/20230128145612.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>保存后的图片如下：</p>
<figure><img src="@source/zh/guide/performance/assets/HTTP.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="保存屏幕为图片" tabindex="-1"><a class="header-anchor" href="#保存屏幕为图片" aria-hidden="true">#</a> 保存屏幕为图片</h3>
<p><code v-pre>Save Screen As Image</code>：将整个<code v-pre>JMeter</code>界面保存为图片，<strong>显示</strong>左侧树状组件栏。</p>
<p>保存的图片以<code v-pre>png</code>结尾，图片名默认为当前选中的组件名称。</p>
<p>保存线程组组件图片如下：</p>
<figure><img src="@source/zh/guide/performance/assets/GUI.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>保存<code v-pre>HTTP</code>请求组件图片如下：</p>
<figure><img src="@source/zh/guide/performance/assets/HTTP1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="切换" tabindex="-1"><a class="header-anchor" href="#切换" aria-hidden="true">#</a> 切换</h3>
<p><code v-pre>Toggle</code>：更改选中组件现有状态。</p>
<blockquote>
<p>将启用变为禁用，禁用变为启用。</p>
</blockquote>
<figure><img src="@source/zh/guide/performance/assets/20230128151548.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4>
<ol>
<li>
<p>点击切换后，当前组件的状态进行更改。</p>
</li>
<li>
<p>无论什么组件都可以进行状态的切换，测试计划也可以。</p>
</li>
</ol>
<blockquote>
<p>类似于java中设置断点的意思;网上博客的内容，不准确。</p>
</blockquote>
<h4 id="切换与禁用区别" tabindex="-1"><a class="header-anchor" href="#切换与禁用区别" aria-hidden="true">#</a> 切换与禁用区别</h4>
<ul>
<li>
<p>启用/禁用：选择启用或禁用其执行相应。</p>
</li>
<li>
<p>切换：将启用变为禁用，禁用变为启用。</p>
</li>
</ul>
<h3 id="保存为测试片段-1" tabindex="-1"><a class="header-anchor" href="#保存为测试片段-1" aria-hidden="true">#</a> 保存为测试片段</h3>
<p>选中测试计划下的组件，选择编辑，下拉列表有<strong>保存为测试片段</strong>。</p>
<p>与文件模块的<strong>保存为测试片段</strong>功能一致。</p>
<h2 id="查找模块" tabindex="-1"><a class="header-anchor" href="#查找模块" aria-hidden="true">#</a> 查找模块</h2>
<img src="https://www.plantuml.com/plantuml/svg/JP3DJeDG48NtF0NhhlGDM9lu44HPD2d6jBYd2bfi2PYsiHeIsXe8qLYQQ2oKduSnT-xFgg_WlT25koypPyxC76LWg7tZHkz9IaDwz-fILw-bmONQq-JJ4yde6XpEpZL3wrCl07UEbvxKaVznHyPXX9sQ4yUl15kYAFXvIJTxgARWkAImKF635oduCLr_a7X8PicXdB2x2hmK5H4ljZOmshRZT1onmAJn47--mUW59ZcpNJuYU5mpq_bTF1qo3sMFhO2k4bhNK7gynLRvyORMiraXjgSvx6VjCN1larSBmX1yOOloaCk4njwXQifREFHHzWxUBPvlmIoR_zY3IweDzWFolPOKZQTrJ4mmp_4F" alt="uml diagram" loading="lazy">
<p>可以看到查找下拉列表只有两个选择：查找、重置搜索。</p>
<figure><img src="@source/zh/guide/performance/assets/20230130171251.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h3>
<p><code v-pre>Search</code>: 搜索所有查找条件中匹配的组件。</p>
<p>匹配成功显示为<strong>红色</strong>，匹配组件的上层级组件显示为蓝色。</p>
<figure><img src="@source/zh/guide/performance/assets/20230128151815.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="注意-1" tabindex="-1"><a class="header-anchor" href="#注意-1" aria-hidden="true">#</a> 注意</h4>
<ul>
<li>
<p>无论当前组件是否被禁用，都可以被查找到。</p>
</li>
<li>
<p>如果需要正则匹配，则勾选☑️上正则表达式选项，即可填写正则表达式。<br>
<img src="@source/zh/guide/performance/assets/20230128162156.png" alt="" loading="lazy"></p>
</li>
<li>
<p>查找可以是组件内的域名，也可以是某个参数值，都可以搜索到。</p>
</li>
</ul>
<h3 id="重置搜索" tabindex="-1"><a class="header-anchor" href="#重置搜索" aria-hidden="true">#</a> 重置搜索</h3>
<p><code v-pre>Reset Search</code>：清除搜索结果。</p>
<p>点击后对应匹配组件上的红色框及上一层级的蓝色框消失。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>文件模块包含的功能：打开、模板...、合并、保存、保存为测试片段 等等。</p>
</li>
<li>
<p>模版的使用及脚本的存放位置。</p>
</li>
<li>
<p>合并的步骤及使用场景。</p>
</li>
<li>
<p>测试片段的概念。</p>
</li>
<li>
<p>测试片段与线程组的区别。</p>
</li>
<li>
<p>截图当前界面可以使用编辑下的<code v-pre>保存**为图片</code>，若想要<strong>组件树</strong>则选择<strong>屏幕</strong>，若只是想要当前组件的详细配置则选择<strong>节点</strong>。</p>
</li>
<li>
<p>查找可以使用正则匹配，会匹配出所有包含的节点。</p>
</li>
</ul>
<img src="https://www.plantuml.com/plantuml/svg/VLFDRjf04BxxANpcWDetu5XLgjH3NW2r72A5gahSkm4Jx81Zfq1AKr87Af2L59oeJV0FDk_IxiokJtc5hbahTQegjy_ppNppUMQdSg1KzvKFzJsfiaNrtNTlwzNtqi6RwbvDVlvCKdOL3bw-gYcrVMQDmHpYXIMLv08koNZQ8T4THnmQVLYh0heJFD-Ko-NiYrTePpZ-ZbyrY48H4Gcm6E4WOIiF4crR1xOEWL0ZctDE5o3UTfatPCi9w1-97-RYSgeQn5-aBHVqGv5O81y2efWQ7LpUvWwUZFpjNf9fkA5kbqRQRxNns8J9Ml532-AhnB_yLrPccn4SEzcewFgK9IV__qzsrAJDWAl0buGN5nYuiI0OFc8Abee-N-pil6RU2c-QXTc1ta5pAX849lundJVem8LU2FhLatEIqPcXaOYT_d1Hi_9HVRfWon3YFXXcvYAwmv47zfnDhuJs_RgNjcAmF1BDU538W7wTluVkB1shRDx0nJVGFqClIDicBybmD-4R_JKwkVSjuX-913PnMPB0sk9KEWbo3q9psoBhxWKG3eGPE6pJCmqS1-nCbWGEJyjosYiIzpc5Zirt1LOJXzUWhiL3wfWqNg8zfZ-dabIfyMl8BoB3_4x-0000" alt="uml diagram" loading="lazy">
</div></template>


