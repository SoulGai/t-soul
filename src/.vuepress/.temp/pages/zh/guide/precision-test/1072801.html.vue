<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>精准测试定义</li>
<li>精准测试作用</li>
<li>精准测试体系介绍</li>
<li>实际案例分享</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li></li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
</div>
<p><a href="https://testerhome.com/topics/36413" target="_blank" rel="noopener noreferrer">https://testerhome.com/topics/36413<ExternalLinkIcon/></a></p>
<p><a href="https://ceshiren.com/t/topic/22735" target="_blank" rel="noopener noreferrer">https://ceshiren.com/t/topic/22735<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/7001534604343509022" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7001534604343509022<ExternalLinkIcon/></a></p>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<div class="hint-container tip">
<p class="hint-container-title">百度百科</p>
<figure><img src="@source/zh/guide/precision-test/assets/20230730134748.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>精准测试是一套计算机测试辅助分析系统。精准测试的核心组件包含的软件测试示波器、用例和代码的双向追溯、智能回归测试用例选取、覆盖率分析、缺陷定位、测试用例聚类分析、测试用例自动生成系统，这些功能完整的构成了精准测试技术体系。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">阿里云效</p>
<figure><img src="@source/zh/guide/precision-test/assets/20230728114252.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>通过建立测试用例与业务方法的关联关系，在代码发生变化时，精准的推荐出需要运行的用例，进行测试执行与结果反馈。通过精准的圈定测试范围，可以带来效率和速度的双重收益。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">网易</p>
<figure><img src="@source/zh/guide/precision-test/assets/20230730143103.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><a href="https://www.infoq.cn/article/xuu91crqa4hcjz8uomjs" target="_blank" rel="noopener noreferrer">网易<ExternalLinkIcon/></a>：借助一定的技术手段、通过辅助算法对传统软件测试过程进行可视化、分析及优化的过程，使得测试过程更加可视化、智能、可信和精准。</p>
</div>
<h2 id="能做什么" tabindex="-1"><a class="header-anchor" href="#能做什么" aria-hidden="true">#</a> 能做什么？</h2>
<p>研发角度：精准测试可以帮助研发分析代码逻辑。可以做主代码的架构分析，特别是在复杂的微服务体系下，可以通过精准测试梳理出来，每个服务之间的依赖关系。</p>
<p>质量测试方面：精准测试可以做两方面的内容，一个是通过静态代码扫描在新的代码发版（commit）的时候做了哪些改动，影响了哪些范围。比如：对于服务端来说，可以知道影响了哪些接口。对于客户端来讲，可以知道影响了哪些页面或者哪些组件。</p>
<h2 id="精准测试落地建设分级模型" tabindex="-1"><a class="header-anchor" href="#精准测试落地建设分级模型" aria-hidden="true">#</a> 精准测试落地建设分级模型</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>如何落地一个企业级的精准测试平台？？</p>
</div>
<p>精准测试落地建设分级模型是一个层次化的测试质量体系建设模型，它帮助测试团队逐步提升测试的深度和广度，以实现更高水平的测试效率和质量。让我们更详细地了解每个层次的主要目标和任务：</p>
<h3 id="l1-代码级别" tabindex="-1"><a class="header-anchor" href="#l1-代码级别" aria-hidden="true">#</a> L1 代码级别</h3>
<p>在代码级别进行测试，主要关注：代码变更差异性，用例的查漏补缺。</p>
<p>比如：</p>
<ul>
<li>
<p>感知代码变更差异，进行代码变更的差异分析。</p>
</li>
<li>
<p>统计代码覆盖率，确保代码被充分测试覆盖。</p>
</li>
<li>
<p>搭配接口自动化，补充自动化测试用例。</p>
</li>
</ul>
<h3 id="l2-链路级别" tabindex="-1"><a class="header-anchor" href="#l2-链路级别" aria-hidden="true">#</a> L2 链路级别</h3>
<p>在链路级别进行测试，主要关注：用例执行失败快速定位，赋能白盒化测试。</p>
<p>比如：</p>
<ul>
<li>
<p>用例测试异常时，可快速定位相关代码，以便及时处理问题，并且打通缺陷提交的环节，形成一个完整的闭环。</p>
</li>
<li>
<p>赋能白盒化测试，通过链路分析和异常测试帮助测试人员深入了解系统。</p>
</li>
</ul>
<h3 id="l3-流程级别" tabindex="-1"><a class="header-anchor" href="#l3-流程级别" aria-hidden="true">#</a> L3 流程级别</h3>
<p>在流程级别进行测试，主要关注：构建用例代码双向绑定关系，精简用例回归范围，提升测试流程效率。</p>
<p>比如：</p>
<ul>
<li>
<p>依赖公司的DevOps平台，在提测阶段进行精准的测试用例推荐和自动化转换。</p>
</li>
<li>
<p>构建用例代码双向绑定关系，确保测试用例和代码的变更保持同步。</p>
</li>
<li>
<p>精简用例回归范围，提高回归测试的效率。</p>
</li>
<li>
<p>通过把手工用例转换为自动化，提升自动化的覆盖率。</p>
</li>
</ul>
<h3 id="l4-体系级别" tabindex="-1"><a class="header-anchor" href="#l4-体系级别" aria-hidden="true">#</a> L4 体系级别</h3>
<p>在体系级别进行测试，主要关注：用例持续自动化回归，精准测试深度融入和提升企业质量体系化建设。</p>
<p>比如：</p>
<ul>
<li>
<p>用例持续自动化回归，确保用例在代码变更后可自动执行。</p>
</li>
<li>
<p>将基于代码变更的精准测试深度融入测试体系内部，形成一个完整的测试体系。</p>
</li>
<li>
<p>在日常迭代过程中，将覆盖率作为准入和准出的卡点，以确保测试的全面性。</p>
</li>
</ul>
<h3 id="l5-全场景级别" tabindex="-1"><a class="header-anchor" href="#l5-全场景级别" aria-hidden="true">#</a> L5 全场景级别</h3>
<p>在全场景级别进行测试，主要关注：覆盖率分母全场景探索，多维手段提升测试充分性。</p>
<p>比如：</p>
<ul>
<li>
<p>探索覆盖率分母全场景，寻找测试未覆盖到的场景。</p>
</li>
<li>
<p>使用多维手段提升测试的充分性，例如基于流量回放、配置文件分析和场景建模等。</p>
<blockquote>
<p>在代码提交的过程中，不只是更改了java代码，还有可能更改了项目对应的配置文件，在配置文件层面进行变更。</p>
</blockquote>
</li>
<li>
<p>确保测试从各个维度对系统进行全面和充分的验证。</p>
</li>
</ul>
<p>通过这样的分级模型，测试团队可以逐步提升测试的能力和质量，形成一个完整的测试闭环，以确保软件交付的稳定性和可靠性。同时，根据不同项目和团队的实际情况，可以灵活调整每个层次的目标和任务，以满足不同项目的测试需求。</p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<h3 id="字节跳动-smarteye" tabindex="-1"><a class="header-anchor" href="#字节跳动-smarteye" aria-hidden="true">#</a> 字节跳动 - SmartEye</h3>
<figure><img src="@source/zh/guide/precision-test/assets/20230731160400.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><a href="https://www.infoq.cn/article/uqnsuc3zm04ydwcjo132" target="_blank" rel="noopener noreferrer">SmartEye<ExternalLinkIcon/></a> 主要分为两部分：</p>
<h4 id="code-graph-代码图谱" tabindex="-1"><a class="header-anchor" href="#code-graph-代码图谱" aria-hidden="true">#</a> Code Graph（代码图谱）</h4>
<p>Code Graph位于左上角，主要负责：</p>
<ol>
<li>
<p>提交代码后根据分支、或者版本对变动对代码进行diff分析。</p>
</li>
<li>
<p>保存代码和测试用例的映射关系，建立代码与测试用例之间的双向绑定关系。</p>
</li>
</ol>
<p>这意味着每个代码的变更都可以追溯到对应的测试用例，同时每个测试用例也可以追溯到相关联的代码。这种双向绑定关系使得代码变更和测试用例之间的关联更加清晰，有助于快速定位和跟踪代码和测试用例的变动。</p>
<h4 id="推荐引擎" tabindex="-1"><a class="header-anchor" href="#推荐引擎" aria-hidden="true">#</a> 推荐引擎</h4>
<p>推荐引擎是SmartEye的核心部分，其工作流程如下：</p>
<ol>
<li>
<p>通过代码的commit提交获取代码的diff分析，得到代码改动的diff源码和改动的数据接口。</p>
</li>
<li>
<p>对代码的变动进行Diff解析，将解析的内容放入推荐引擎。<br>
利用解析的信息，获取代码的调用链信息，并构建代码的拓扑图（知识图谱）。</p>
</li>
<li>
<p>根据代码的分析，获取召回的用例，即与代码变动相关的测试用例。</p>
</li>
<li>
<p>通过机器学习算法对用例进行排序，构建排序模型，最终给出测试用例的推荐结果。</p>
</li>
</ol>
<p>推荐引擎的主要作用是根据代码的变动情况，推荐与之相关的测试用例，从而帮助测试人员快速找到需要执行的测试用例，以验证代码变更的正确性。推荐的结果经过排序模型处理，可以让测试用例的推荐结果更加准确和高效。</p>
<p>SmartEye的这两部分相辅相成，通过代码图谱建立代码与测试用例之间的映射关系，为推荐引擎提供必要的信息，从而实现智能化的测试用例推荐。这样的系统可以大大提高测试效率，减少测试遗漏和重复劳动，同时帮助测试人员更好地应对代码变更和测试挑战。</p>
<h2 id="阿里巴巴-基于代码链路分析的精准测试体系" tabindex="-1"><a class="header-anchor" href="#阿里巴巴-基于代码链路分析的精准测试体系" aria-hidden="true">#</a> 阿里巴巴 - 基于代码链路分析的精准测试体系</h2>
<figure><img src="@source/zh/guide/precision-test/assets/20230731164800.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><a href="https://developer.aliyun.com/article/1177940" target="_blank" rel="noopener noreferrer">https://developer.aliyun.com/article/1177940<ExternalLinkIcon/></a></p>
<h2 id="网易严选-精准测试实践" tabindex="-1"><a class="header-anchor" href="#网易严选-精准测试实践" aria-hidden="true">#</a> 网易严选 - 精准测试实践</h2>
<p><a href="https://www.infoq.cn/article/xuu91crqa4hcjz8uomjs" target="_blank" rel="noopener noreferrer">https://www.infoq.cn/article/xuu91crqa4hcjz8uomjs<ExternalLinkIcon/></a></p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<figure><img src="@source/zh/guide/precision-test/assets/20230615153351.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>代码与用例的绑定关系获取。</p>
<blockquote>
<p>通过静态代码扫描获取到接口的调用路径，利用动态链路追踪等技术，收集运行时的调用路径信息，采集代码与测试用例的绑定关系信息。</p>
</blockquote>
</li>
<li>
<p>代码变更分析及影响范围确定。</p>
<blockquote>
<p>通过分析代码提交，获取代码的差异（diff）信息，即代码的变更内容。根据变更内容，确定对应的影响范围，即哪些功能或模块受到影响。确定受影响的测试用例，即需要执行的测试用例，以验证代码变更的正确性。</p>
</blockquote>
</li>
<li>
<p>用例准确性度量。</p>
<blockquote>
<p>在执行推荐的测试用例之后，对推荐的用例进行准确性度量。使用增量的代码覆盖率来度量推荐用例的准确性，即推荐用例执行后是否增加了代码覆盖率。根据度量结果，评估推荐用例的准确性。</p>
</blockquote>
</li>
<li>
<p>增量代码覆盖率补充测试用例。</p>
<blockquote>
<p>根据增量代码覆盖率的结果，确定代码变更引入的新覆盖路径。根据新覆盖路径，补充测试用例到原有的测试用例集中，以增加对新变更的覆盖，从而提高测试的充分性。</p>
</blockquote>
</li>
</ol>
<p>综上所述，该流程是一个智能化测试用例推荐的过程。通过静态和动态的分析手段，建立代码与用例的绑定关系，并根据代码变更确定受影响的测试用例。执行推荐用例后，通过增量代码覆盖率来评估用例的准确性，并补充测试用例以提高覆盖率和测试的充分性。这样的流程有助于提高测试效率和测试的准确性，帮助团队更好地应对软件开发的挑战。</p>
</div></template>


