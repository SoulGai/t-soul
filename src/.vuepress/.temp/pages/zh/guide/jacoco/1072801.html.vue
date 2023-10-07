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
<p>什么是代码覆盖率？为什么要做代码覆盖率？测试过程中痛点在哪里？工具选型为什么是jacoco？<br>
代码覆盖率主要做什么？在产品开发流程中的哪个阶段开始做代码覆盖率？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p>发现未被测试到的代码路径，减少潜在的错误和缺陷。<br>
提高代码质量和稳定性，降低软件故障的风险。<br>
指导测试优先级，让测试团队更有针对性地进行测试。<br>
增强软件的可维护性，让代码更容易理解和维护。</p>
</details>
<img src="https://www.plantuml.com/plantuml/svg/NP3TJi9048Nl-nIzxbFqLKZaWeGIe_KU4c0R_bOJ80ID5fIVI7H9YZ_jLfzcPtPxvIkuTYi4xYRVcNDcSjnBltJXNtbLoyqdhr8xyqhdbb_ngsLRy4SPDjIoBM_7Sa04xqhUjnnRV2Q2rqKSw0LWiVfYWh-htJeZL948Mb56-chP-4aVBCSvJJ4QrbTQSsoWDtAmnRjdDT_WMrUn4GHREMqMfWy6tyry4UbrjfaKE3zb_FDxw8G6otK4hzF_PEmHOAd95Ea4Me5CLdjFcfYlWJB9TzXvChRJPtK8XYHtAVO2TB5NJ5BGnY4xPchMEmOuZZ4Q7PXRrXqNFV_DklrV" alt="uml diagram" loading="lazy">
<p>代码覆盖率是用于衡量测试用例在运行过程中覆盖源代码中哪些部分的度量指标。它是一种度量测试用例对于被测软件中代码执行情况的一种评估方式。</p>
<p>代码覆盖率告诉我们在运行测试用例时，代码的哪些部分被执行，哪些部分未被执行，从而帮助评估测试用例的充分性和软件的质量。</p>
<p>代码覆盖率主要用于评估测试用例的充分性以及软件质量。较高的代码覆盖率通常意味着大部分代码都被测试到，有助于提高代码的质量和稳定性。</p>
<h2 id="为什么代码覆盖率对软件质量至关重要" tabindex="-1"><a class="header-anchor" href="#为什么代码覆盖率对软件质量至关重要" aria-hidden="true">#</a> 为什么代码覆盖率对软件质量至关重要？</h2>
<h3 id="发现未被测试到的代码路径" tabindex="-1"><a class="header-anchor" href="#发现未被测试到的代码路径" aria-hidden="true">#</a> 发现未被测试到的代码路径</h3>
<p>代码覆盖率可以帮助开发人员识别测试用例未覆盖到的代码路径，从而发现测试漏洞和可能存在的逻辑错误。</p>
<h3 id="提高代码质量" tabindex="-1"><a class="header-anchor" href="#提高代码质量" aria-hidden="true">#</a> 提高代码质量</h3>
<p>通过提供对代码覆盖情况的可视化，开发人员可以定位未被覆盖的代码段并着手改进这些代码，从而提高代码质量。</p>
<h3 id="增加代码稳定性" tabindex="-1"><a class="header-anchor" href="#增加代码稳定性" aria-hidden="true">#</a> 增加代码稳定性</h3>
<p>高代码覆盖率通常意味着大部分代码都被测试到，这降低了潜在的错误和缺陷，增加了代码的稳定性。</p>
<h3 id="指导测试优先级" tabindex="-1"><a class="header-anchor" href="#指导测试优先级" aria-hidden="true">#</a> 指导测试优先级</h3>
<p>代码覆盖率报告可以帮助测试团队确定测试用例的优先级，重点关注低覆盖率区域，从而提高测试效率。</p>
<h3 id="增强软件可维护性" tabindex="-1"><a class="header-anchor" href="#增强软件可维护性" aria-hidden="true">#</a> 增强软件可维护性</h3>
<p>通过测试代码的各个路径，可以让代码更加容易理解和维护，减少后续维护过程中的困难。</p>
<h2 id="代码覆盖率指标" tabindex="-1"><a class="header-anchor" href="#代码覆盖率指标" aria-hidden="true">#</a> 代码覆盖率指标</h2>
<p>代码覆盖率通常有几种不同类型的指标，主要包括：</p>
<h3 id="语句覆盖率-statement-coverage" tabindex="-1"><a class="header-anchor" href="#语句覆盖率-statement-coverage" aria-hidden="true">#</a> 语句覆盖率（Statement Coverage）</h3>
<p>衡量被测试用例执行过的代码语句所占总代码语句的百分比。</p>
<h3 id="分支覆盖率-branch-coverage" tabindex="-1"><a class="header-anchor" href="#分支覆盖率-branch-coverage" aria-hidden="true">#</a> 分支覆盖率（Branch Coverage）</h3>
<p>衡量被测试用例执行过的代码分支（if、else、switch等）所占总分支数的百分比。</p>
<h3 id="行覆盖率-line-coverage" tabindex="-1"><a class="header-anchor" href="#行覆盖率-line-coverage" aria-hidden="true">#</a> 行覆盖率（Line Coverage）</h3>
<p>衡量被测试用例执行过的代码行所占总代码行数的百分比。</p>
<h3 id="方法覆盖率-method-coverage" tabindex="-1"><a class="header-anchor" href="#方法覆盖率-method-coverage" aria-hidden="true">#</a> 方法覆盖率（Method Coverage）</h3>
<p>衡量被测试用例调用过的方法所占总方法数的百分比。</p>
<p>不同类型的代码覆盖率指标在不同场景下有不同的应用，开发团队可以根据需求和项目特点来选择适合的覆盖率指标进行评估。综合考虑各个覆盖率指标，可以更全面地了解测试覆盖情况，从而有针对性地改进测试用例和代码质量。</p>
</div></template>


