<template><div><h1 id="测试左移介绍" tabindex="-1"><a class="header-anchor" href="#测试左移介绍" aria-hidden="true">#</a> 测试左移介绍</h1>
<h2 id="项目流程" tabindex="-1"><a class="header-anchor" href="#项目流程" aria-hidden="true">#</a> 项目流程</h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 A</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 B</label></li>
</ul>
<img src="https://www.plantuml.com/plantuml/svg/ZPBBJi9058RtynIpX5Se2taL4qiaGJ2sBaowA5PHBe8OG1GJ1D6oAg1831TvcRdrBHpcK4JGnAx-EUTyP_x-cQXXxXwPnmS955qfPFaFDXkSYjuPzLeMKWsaiSh8RsIW5K4QT8DZF8P3e7txNimlTiBOtDUJE7IY6s64iIQyFfrLWt4zOUWub4n1g--mwZ1eOMoOgKEa9_VYCMc5JcrQAbj80q5pJU7CvFLyMgEPEp9vuezfUGGX3R7cCxY12hY1-fOdLhecuqwmuuSdClTevyg_zVnsVSiJUy-BNjKAJC2HLxhaCo-jiAmhMWKm2Yqm1FgFU01Yjhi6OQmmg4rQOlGcNj8oeqruXLClIy-xtpWiWEhlzmAyPWomzIZK2CIntBGAPV6fO1IZmjbaDJAjqq8DVWAO9G7p_m-TVEJuU2v3zvqkdxtIopwlDCdOvSKURJkB5z4eiw9BRmfyCcIvJWIXg6JLWrwABm00" alt="uml diagram" loading="lazy">
<p>在上面简单的项目流程图中，每个阶段都用一个垂直的流程框表示，并使用箭头表示流程的流动。</p>
<p>每个阶段都包含特定的活动和决策点。例如，在需求评审阶段，需求被收集并进行评审。如果需求通过评审，则记录需求；否则，需要进行调整。</p>
<p>在开发阶段，开发人员开发功能并编写代码，然后进行代码审查。如果代码通过审查，则提交代码；否则，需要修复问题。</p>
<p>测试阶段涉及编写测试用例和执行功能测试。如果测试通过，则继续执行系统测试；否则，需要修复问题。</p>
<p>最后，在上线阶段，进行准备发布、部署到生产环境、系统性能测试和上线运行。整个流程在结束时停止。</p>
<h2 id="测试左移、右移的定义" tabindex="-1"><a class="header-anchor" href="#测试左移、右移的定义" aria-hidden="true">#</a> 测试左移、右移的定义</h2>
<h3 id="测试阶段" tabindex="-1"><a class="header-anchor" href="#测试阶段" aria-hidden="true">#</a> 测试阶段</h3>
<p>在项目中，测试的整体工作存在三个阶段：<strong>正常测试</strong>、<strong>测试左移</strong>和<strong>测试右移</strong>。</p>
<h4 id="正常测试阶段" tabindex="-1"><a class="header-anchor" href="#正常测试阶段" aria-hidden="true">#</a> 正常测试阶段</h4>
<p>这个阶段发生在提测后，涉及一系列的测试工作，直到发布验证完成。主要任务包括：</p>
<ol>
<li><strong>执行功能测试</strong>：对软件功能进行全面的测试，确保其符合需求和规格。</li>
<li><strong>发布验证</strong>：将软件部署到目标环境中进行验证，并进行系统性能测试和用户验收测试等。</li>
<li><strong>验证完成</strong>：确认发布验证阶段的测试已经全部完成，并达到预期的质量标准。</li>
</ol>
<h4 id="测试左移阶段" tabindex="-1"><a class="header-anchor" href="#测试左移阶段" aria-hidden="true">#</a> 测试左移阶段</h4>
<p>这个阶段发生在提测之前，旨在进行各种测试活动，以确保在提测之前尽早发现和解决问题。主要任务包括：</p>
<ol>
<li><strong>代码单元测试</strong>：对代码的独立单元进行测试，验证其功能和逻辑的正确性。</li>
<li><strong>代码质量检测</strong>：使用静态代码分析工具检测代码质量问题，如代码规范违规、潜在的错误和安全漏洞等。</li>
<li><strong>代码接口持续测试</strong>：对代码的接口进行测试，确保各组件之间的交互正常。</li>
</ol>
<p>测试左移就是测试的介入往项目的开发阶段移动，进行提前测试。</p>
<h4 id="测试右移阶段" tabindex="-1"><a class="header-anchor" href="#测试右移阶段" aria-hidden="true">#</a> 测试右移阶段</h4>
<p>这个阶段发生在发布验证之后，主要关注发布后的测试和支持工作。主要任务包括：</p>
<ol>
<li><strong>灰度发布测试的问题处理</strong>：针对灰度发布中出现的问题进行测试和修复。</li>
<li><strong>生产服务监测处理</strong>：对发布后的生产环境进行监测和处理，确保系统的稳定性和性能。</li>
<li><strong>用户反馈问题处理</strong>：根据用户的反馈，及时响应并处理问题。</li>
<li><strong>对客户的技术支持</strong>：提供对客户的技术支持，解答问题并提供解决方案。</li>
</ol>
<p>右移是测试的介入往需求发布之后移动，在发布之后也要进行测试。</p>
<h3 id="什么是测试左移" tabindex="-1"><a class="header-anchor" href="#什么是测试左移" aria-hidden="true">#</a> 什么是测试左移？</h3>
<p>测试左移是指<strong>在软件开发过程中，将测试活动尽早移动到开发的早期阶段，早期介入并进行各种测试活动的做法</strong>。其本质是强调在开发过程中测试的重要性，并<strong>在早期发现和解决问题</strong>，以减少后期测试和维护阶段的成本和风险。</p>
<h4 id="本质" tabindex="-1"><a class="header-anchor" href="#本质" aria-hidden="true">#</a> 本质</h4>
<blockquote>
<p>为什么要做测试左移？</p>
</blockquote>
<figure><img src="@source/zh/guide/shift-left/assets/20230717153800.svg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在软件开发过程中提前引入测试活动，以尽早发现和解决问题。测试左移的本质可以归结为以下几个方面：</p>
<ol>
<li>
<p><strong>提早发现问题</strong>：通过在开发早期引入测试活动，例如代码单元测试、代码质量检测和代码接口持续测试等，可以提早发现软件中的问题和缺陷。这有助于减少问题在后续阶段的积累，并提高软件的质量。</p>
</li>
<li>
<p><strong>快速反馈和修复</strong>：通过测试左移，测试人员可以及早向开发人员提供反馈，指出问题所在并建议修复措施。这使得开发人员可以<strong>更快地修复问题</strong>，避免问题在后续阶段的进一步扩大和影响。</p>
</li>
<li>
<p><strong>提高整体效率和质量</strong>：测试左移有助于减少软件开发过程中的问题积累，加速问题解决和修复的速度，从而提高整体的开发效率和软件质量。通过及早发现和解决问题，可以降低后续测试和维护阶段的成本和风险。</p>
</li>
</ol>
<p>测试左移的思想本质是<strong>越早的发现不合理的地方，出问题的几率就越低</strong>。</p>
<p>测试左移的原则支持测试团队在软件开发早期和产品方及开发方合作，通过清晰地理解需求以及设计测试用例去帮助软件“快速失败”，促使团队更早的修改所有的bug。</p>
<p>总之，测试左移的主要目的是通过提前引入测试活动，尽早发现和解决问题，提高软件质量和开发效率、降低成本。它强调测试在软件开发中的重要性，并促使开发人员和测试人员在整个开发周期中紧密合。同时是一种质量保证的重要策略，有助于构建可靠、高质量的软件系统。</p>
<h3 id="什么是测试右移" tabindex="-1"><a class="header-anchor" href="#什么是测试右移" aria-hidden="true">#</a> 什么是测试右移？</h3>
<p>测试右移是<strong>产品上线了之后也可以进行一些测试活动</strong>。当然在生产环境直接做测试是不推荐的，但是我们可以<strong>在生产环境做监控，监控线上性能和可用率</strong>，一旦线上发生任何问题，尽快反应，提前反应，给用户良好的体验。尽量做到技术人员要比业务方先发现问题。</p>
<p>测试右移其实还可以理解为如果线上发生任何问题，我们有没有能力第一时间发现问题并解决问题，并保证线上数据的一致性或尽可能少的影响线上用户，以及并且实时获取用户反馈。</p>
<h2 id="测试左移实践" tabindex="-1"><a class="header-anchor" href="#测试左移实践" aria-hidden="true">#</a> 测试左移实践</h2>
<p>测试左移实践有助于在软件开发的早期阶段提前发现和解决问题，以提高软件质量和开发效率。</p>
<h3 id="_1-需求分析与评审" tabindex="-1"><a class="header-anchor" href="#_1-需求分析与评审" aria-hidden="true">#</a> 1. 需求分析与评审</h3>
<p>在项目开始阶段，对需求进行仔细分析和评审，以确保需求的准确性和完整性。避免在后续阶段出现由于需求误解或遗漏而引起的问题。</p>
<p>这是传统的一种测试左移概念，在公司中测试也是直接介入的。</p>
<h3 id="_2-代码评审" tabindex="-1"><a class="header-anchor" href="#_2-代码评审" aria-hidden="true">#</a> 2. 代码评审</h3>
<p>通过对代码进行仔细审查，发现潜在的问题、缺陷和代码质量问题。代码评审可以由开发团队内部的成员或专门的代码审查小组进行，以确保代码的质量和符合预定的标准。</p>
<h3 id="_3-代码审计和代码静态分析" tabindex="-1"><a class="header-anchor" href="#_3-代码审计和代码静态分析" aria-hidden="true">#</a> 3. 代码审计和代码静态分析</h3>
<p>通过使用代码审计工具和静态代码分析工具，对代码进行全面的检查，发现安全漏洞、潜在的错误和规范违规等问题。这有助于提前发现和解决代码中的问题，并确保代码的质量和安全性。</p>
<blockquote>
<p>比如：使用SonarQube对项目进行扫描，一般情况只关注增量代码。假设，一个新入职的研发，扫描出来旧业务代码的bug，研发是不会直接来修改的，他还不熟悉整体的业务流程及对应架构，有可能发生修改一处导致整个项目无法正常启动或其它未知的错误。</p>
</blockquote>
<h3 id="_4-自动化测试左移" tabindex="-1"><a class="header-anchor" href="#_4-自动化测试左移" aria-hidden="true">#</a> 4. 自动化测试左移</h3>
<p>在开发的早期阶段引入自动化测试，包括自动化单元测试、集成测试和回归测试等。通过自动化测试工具和框架，可以在代码开发过程中自动执行测试，并及时提供反馈。比如：接口自动化测试。</p>
<h3 id="_5-单元测试" tabindex="-1"><a class="header-anchor" href="#_5-单元测试" aria-hidden="true">#</a> 5. 单元测试</h3>
<p>开发人员编写针对代码中独立单元（如函数、方法）的测试用例，并在开发过程中频繁地执行单元测试。这有助于验证代码的功能和逻辑的正确性，并提前发现问题。</p>
<h3 id="_6-覆盖率统计" tabindex="-1"><a class="header-anchor" href="#_6-覆盖率统计" aria-hidden="true">#</a> 6. 覆盖率统计</h3>
<p>在自动化测试中，对代码的覆盖率进行统计和分析。通过衡量代码的覆盖率，可以确定测试的完整性和有效性，并发现测试覆盖不足的地方。</p>
<h3 id="_7-应用监控" tabindex="-1"><a class="header-anchor" href="#_7-应用监控" aria-hidden="true">#</a> 7. 应用监控</h3>
<p>在测试左移中引入应用监控工具，监控应用程序在开发和测试过程中的性能、稳定性和资源使用情况。这有助于及早发现和解决性能问题和瓶颈。</p>
<h3 id="_8-测试用例生成" tabindex="-1"><a class="header-anchor" href="#_8-测试用例生成" aria-hidden="true">#</a> 8. 测试用例生成</h3>
<p>利用自动化测试工具和测试生成技术，自动生成一部分测试用例。这有助于提高测试的覆盖范围和效率，并减少手动编写测试用例的工作量。</p>
<p>通过采用这些实践方法和活动，团队可以在软件开发的早期阶段发现和解决问题，提高软件质量和开发效率。这些方法的选择和应用应根据具体项目和团队的需求进行调整和定制。</p>
</div></template>



<style>
  strong {
    color: red;
    font-weight: bolder;
  }
  .reveal blockquote {
    font-style: unset;
  }
</style>