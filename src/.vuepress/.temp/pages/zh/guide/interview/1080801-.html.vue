<template><div><h2 id="介绍一下你对自动化测试的理解和重要性" tabindex="-1"><a class="header-anchor" href="#介绍一下你对自动化测试的理解和重要性" aria-hidden="true">#</a> 介绍一下你对自动化测试的理解和重要性</h2>
<p>自动化测试是一种使用脚本和工具来执行测试任务的方法，以代替手动执行测试。通过编写自动化测试脚本，可以模拟用户在应用程序中的各种操作和交互，从而自动化地验证软件的功能、性能和稳定性。以下是我对自动化测试的理解和重要性的详细介绍：</p>
<div class="hint-container tip">
<p class="hint-container-title">理解</p>
<p><strong>自动化脚本</strong>：自动化测试依赖于编写脚本或代码，以模拟用户行为并执行测试用例。</p>
<p><strong>自动化工具</strong>：使用专门的测试用例管理框架，如<code v-pre>JUnit</code>、<code v-pre>TestNG</code>、<code v-pre>Pytest</code>等，可以简化测试脚本的编写和执行。</p>
<p><strong>自动化流程</strong>：自动化测试可以自动打开应用程序、输入数据、模拟点击、验证结果等，从而模拟真实用户的操作流程。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">重要性</p>
<p><strong>提高测试效率</strong>：自动化测试可以在短时间内执行大量测试用例，远远超过手动测试的速度。这对于频繁的回归测试和大型项目特别有用。</p>
<p><strong>降低测试成本</strong>：自动化测试可以减少人工测试的工时和成本，特别是在长期项目中。</p>
<p><strong>提高测试覆盖率</strong>：自动化测试可以在不同环境和配置下执行测试，从而增加测试用例的覆盖范围。</p>
<p><strong>持续集成</strong>：自动化测试是持续集成和持续交付流程中的关键组成部分，可以帮助保证每次代码更改后的质量。</p>
<p><strong>减少人为错误</strong>：自动化测试能够精确地执行相同的操作和验证，减少了人为错误的可能性。</p>
<p><strong>快速反馈</strong>：自动化测试可以在开发周期早期发现问题，提供快速反馈，促使及早修复问题。</p>
<p><strong>解放人力</strong>：通过自动化执行重复和冗长的测试任务，测试团队可以将精力集中在更具创造性和复杂性的任务上。</p>
</div>
<p>尽管自动化测试有许多优势，但也需要一定的资源和时间来开发、维护和执行测试脚本。因此，自动化测试需要根据项目的需求和特点进行合理的规划和实施。在软件开发中，自动化测试与手动测试相互补充，共同确保软件的质量和可靠性。</p>
<h2 id="使用过哪些-web-自动化测试工具" tabindex="-1"><a class="header-anchor" href="#使用过哪些-web-自动化测试工具" aria-hidden="true">#</a> 使用过哪些 Web 自动化测试工具？</h2>
<div class="hint-container tip">
<p class="hint-container-title">工具</p>
<p><strong>Selenium</strong>： Selenium 是一个广泛使用的自动化测试工具，支持多种编程语言，如Java、Python、C#等。它可以模拟用户在浏览器中的操作，执行测试用例，并验证 Web 应用程序的功能。</p>
<p><strong>Playwright</strong>： Playwright 是一个由 Microsoft 开发的自动化测试工具，支持多种浏览器（Chrome、Firefox、WebKit）和编程语言（JavaScript、Python、C#）。</p>
<p><strong>Cypress</strong>： Cypress 是一个现代的前端测试工具，专注于快速、稳定的测试。它提供了实时可见性，可以在测试运行期间观察应用程序的变化。</p>
<p><strong>WebDriverIO</strong>： WebDriverIO 是一个用于 Web 自动化测试的 Node.js 框架，它提供了简洁的 API 和丰富的功能，支持多种浏览器和设备。</p>
<p><strong>TestCafe</strong>： TestCafe 是一个跨浏览器的自动化测试工具，它可以在不同的浏览器中执行测试用例，无需额外的配置。</p>
<p><strong>Protractor</strong>： Protractor 是一个专门用于 Angular 应用程序的自动化测试工具，它构建在 WebDriver 之上，并提供了针对 Angular 特性的额外支持。</p>
<p><strong>Puppeteer</strong>： Puppeteer 是一个由 Google 提供的 Node.js 库，用于控制浏览器进行自动化测试和屏幕截图。它支持 Headless Chrome 浏览器。</p>
</div>
<p>对于其中一个工具的使用经验，我可以以 Selenium 为例进行介绍：</p>
<ul>
<li>
<p>对 Selenium 的使用经验是通过模拟用户在 Web 应用程序中的操作，编写测试用例并运行测试，以验证应用程序的各个功能是否按预期工作。</p>
</li>
<li>
<p>可以编写脚本来打开网页、填写表单、点击按钮、验证文本内容等。</p>
</li>
<li>
<p>Selenium 的灵活性使我能够在不同的浏览器上运行测试，确保跨浏览器兼容性。</p>
</li>
<li>
<p>使用PO模式使测试用例编写更加方便。</p>
</li>
<li>
<p>还可以将 Selenium 集成到持续集成流程中，自动运行测试并生成报告，以及与其他工具和框架进行集成，以满足项目需求。</p>
</li>
</ul>
<p>总的来说，Selenium 是一个强大且广泛使用的 Web 自动化测试工具，为测试人员提供了许多有用的功能和选项。</p>
<h2 id="什么是元素定位-web自动化中有哪些常用的元素定位方法" tabindex="-1"><a class="header-anchor" href="#什么是元素定位-web自动化中有哪些常用的元素定位方法" aria-hidden="true">#</a> 什么是元素定位？web自动化中有哪些常用的元素定位方法</h2>
<p>元素定位是在 <strong>Web 自动化测试中用于定位网页上特定元素</strong>（如按钮、文本框、链接等）的技术或方法。在自动化测试中，定位元素是执行操作和验证功能的关键步骤，因此选择适合的元素定位方法至关重要。</p>
<div class="hint-container tip">
<p class="hint-container-title">元素定位</p>
<p>以下是一些常用的元素定位方法，用于在 Web 自动化测试中定位页面元素：</p>
<p><strong>ID 定位</strong>： 使用元素的唯一 ID 属性进行定位。例如：driver.find_element_by_id(&quot;element_id&quot;)。</p>
<p><strong>Name 定位</strong>： 使用元素的 name 属性进行定位。例如：driver.find_element_by_name(&quot;element_name&quot;)。</p>
<p><strong>XPath 定位</strong>： 使用 XPath 表达式来定位元素。XPath 是一种用于在 XML 或 HTML 文档中定位元素的语言。例如：driver.find_element_by_xpath(&quot;//div[@class='example']&quot;)。</p>
<p><strong>CSS 选择器定位</strong>： 使用 CSS 选择器来定位元素。CSS 选择器是一种用于选择元素的模式。例如：driver.find_element_by_css_selector(&quot;.example-class&quot;)。</p>
<p><strong>链接文本定位</strong>： 使用链接文本来定位链接元素。例如：driver.find_element_by_link_text(&quot;Click here&quot;)。</p>
<p><strong>部分链接文本定位</strong>： 使用链接文本的一部分来定位链接元素。例如：driver.find_element_by_partial_link_text(&quot;Click&quot;)。</p>
<p><strong>标签名定位</strong>： 使用元素的标签名进行定位。例如：driver.find_element_by_tag_name(&quot;input&quot;)。</p>
<p><strong>类名定位</strong>： 使用元素的 class 属性进行定位。例如：driver.find_element_by_class_name(&quot;example-class&quot;)。</p>
</div>
<p>这些是一些常用的元素定位方法，每种方法都有其特点和适用场景。在选择元素定位方法时，需要考虑元素的属性和结构，以及稳定性和性能等因素。不同的测试场景可能需要不同的定位方法，因此了解和熟悉这些方法可以帮助您更好地编写稳健的自动化测试脚本。</p>
<h2 id="page-object模式" tabindex="-1"><a class="header-anchor" href="#page-object模式" aria-hidden="true">#</a> Page Object模式</h2>
<details class="hint-container details"><summary>问题</summary>
<p>在做UI自动化中，是否使用了设计模式？什么是Page Object Model？</p>
<p>什么是PO模式，为什么要使用它？为什么使用Page Object模式？Page Object Model需要遵循的规则有哪些？</p>
</details>
<div class="hint-container warning">
<p class="hint-container-title">涉及知识点</p>
<ul>
<li>UI自动化分层概念</li>
<li>是否了解过Page Object Model</li>
<li>Page Object Model 规则</li>
</ul>
<p>参考资料：<a href="https://blog.testproject.io/2021/01/06/test-automation-framework-benefits-pom-selenium-locators-opensdk-junit/" target="_blank" rel="noopener noreferrer">https://blog.testproject.io/2021/01/06/test-automation-framework-benefits-pom-selenium-locators-opensdk-junit/<ExternalLinkIcon/></a></p>
</div>
<p><code v-pre>Page Object Model</code> 也称为 <code v-pre>POM</code>/<code v-pre>PO</code>，是 <code v-pre>Selenium</code> 中的一种设计模式，它创建类对象来存储页面元素及相关操作；</p>
<h3 id="为什么要用po" tabindex="-1"><a class="header-anchor" href="#为什么要用po" aria-hidden="true">#</a> 为什么要用PO</h3>
<div class="hint-container danger">
<p class="hint-container-title">传统 UI 自动化的问题</p>
<ul>
<li>无法适应 UI 频繁变化</li>
<li>无法清晰表达业务用例场景</li>
<li>大量的样板代码 driver/find/click</li>
</ul>
</div>
<h3 id="po优势" tabindex="-1"><a class="header-anchor" href="#po优势" aria-hidden="true">#</a> PO优势</h3>
<div class="hint-container danger">
<p class="hint-container-title">PO的优势</p>
<ul>
<li>降低 UI 变化导致的测试用例脆弱性问题</li>
<li>让用例清晰明朗，与具体实现无关</li>
</ul>
</div>
<h3 id="po设计原则" tabindex="-1"><a class="header-anchor" href="#po设计原则" aria-hidden="true">#</a> PO设计原则</h3>
<figure><img src="@source/zh/guide/interview/assets/Test-Automation-Framework-Benefits.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="元素原则" tabindex="-1"><a class="header-anchor" href="#元素原则" aria-hidden="true">#</a> 元素原则</h4>
<ul>
<li>
<p>不要暴露页面内部的元素给外部</p>
</li>
<li>
<p>不需要建模 UI 内的所有元素</p>
</li>
</ul>
<h4 id="方法原则" tabindex="-1"><a class="header-anchor" href="#方法原则" aria-hidden="true">#</a> 方法原则</h4>
<ul>
<li>
<p>用公共方法代表 UI 所提供的功能</p>
</li>
<li>
<p>同样的行为不同的结果可以建模为不同的方法</p>
</li>
<li>
<p>方法应该返回<code v-pre>return</code>其他的 <code v-pre>PageObject</code> 或者返回用于断言的数据</p>
</li>
<li>
<p>不要在方法内加断言</p>
</li>
</ul>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<ol>
<li>
<p>把元素信息和操作细节封装到 PageObject 类中</p>
</li>
<li>
<p>根据业务逻辑，在测试用例中链式调用</p>
</li>
</ol>
<h2 id="自动化测试中如何处理异步操作" tabindex="-1"><a class="header-anchor" href="#自动化测试中如何处理异步操作" aria-hidden="true">#</a> 自动化测试中如何处理异步操作？</h2>
<h2 id="自动化常见问题" tabindex="-1"><a class="header-anchor" href="#自动化常见问题" aria-hidden="true">#</a> 自动化常见问题</h2>
<h4 id="场景1-点击页面的某个元素-会跳转到新的页面。" tabindex="-1"><a class="header-anchor" href="#场景1-点击页面的某个元素-会跳转到新的页面。" aria-hidden="true">#</a> 场景1: 点击页面的某个元素，会跳转到新的页面。</h4>
<h5 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h5>
<ol>
<li>获取跳转之前，当前页面的句柄</li>
<li>跳转到新页面之后，获取当前driver的所有句柄</li>
<li>for循环所有句柄，判断，不是跳转之前的句柄，则进行句柄切换。</li>
</ol>
<h1 id="场景2-页面操作时-不知道在哪有一个弹窗-如何解决" tabindex="-1"><a class="header-anchor" href="#场景2-页面操作时-不知道在哪有一个弹窗-如何解决" aria-hidden="true">#</a> 场景2: 页面操作时，不知道在哪有一个弹窗，如何解决？</h1>
<h3 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1" aria-hidden="true">#</a> 解决方案：</h3>
<ol>
<li>生成<strong>黑名单</strong>列表。「当前产品里面所有的不确定弹窗，元素定位放黑名单里」</li>
<li>进入到每个页面的时候，进行元素查找，如果有黑名单列表中的元素，则直接进行点击。</li>
</ol>
<h1 id="场景3-页面跳转后元素点击无反应-或者是元素定位不到。" tabindex="-1"><a class="header-anchor" href="#场景3-页面跳转后元素点击无反应-或者是元素定位不到。" aria-hidden="true">#</a> 场景3: 页面跳转后元素点击无反应，或者是元素定位不到。</h1>
<h4 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因：</h4>
<p>当前UI界面没有完全加载成功导致，虽然肉眼可见该元素，但是元素的可点击属性等等，还未加载完成。</p>
<h4 id="解决方案-2" tabindex="-1"><a class="header-anchor" href="#解决方案-2" aria-hidden="true">#</a> 解决方案：</h4>
<ol>
<li>在元素点击无反应 或者 页面进行跳转的时候，添加该元素 或者 该页面的某个元素的显示等待条件。</li>
</ol>
<p>最常用的显示等待判断条件为：</p>
<ul>
<li>当前元素是否可见。</li>
<li>当前元素是否可点击。</li>
</ul>
<h1 id="场景4-元素定位-使用xpath绝对定位时-表达式过长。" tabindex="-1"><a class="header-anchor" href="#场景4-元素定位-使用xpath绝对定位时-表达式过长。" aria-hidden="true">#</a> 场景4: 元素定位 使用xpath绝对定位时，表达式过长。</h1>
<h4 id="解决方案-3" tabindex="-1"><a class="header-anchor" href="#解决方案-3" aria-hidden="true">#</a> 解决方案：</h4>
<p>使用xpath的相对定位，根据父子关系进行元素定位。</p>
<h2 id="显式等待与隐式等待区别" tabindex="-1"><a class="header-anchor" href="#显式等待与隐式等待区别" aria-hidden="true">#</a> 显式等待与隐式等待区别</h2>
<h2 id="selenium原理" tabindex="-1"><a class="header-anchor" href="#selenium原理" aria-hidden="true">#</a> Selenium原理</h2>
<p>什么是 XPath 和 CSS 选择器？它们在自动化测试中有什么作用？</p>
<p>如何处理不稳定的测试环境和随机失败的测试用例？<br>
自动化测试中的断言是什么？为什么使用断言？<br>
介绍一下测试金字塔和测试菱形模型，以及它们之间的区别。<br>
什么是持续集成和持续交付？在自动化测试中，持续集成的作用是什么？<br>
您如何管理测试数据和测试环境的设置？<br>
什么是 BDD（行为驱动开发）？您如何在自动化测试中应用 BDD 方法论？<br>
您在自动化测试中如何处理弹出窗口、框架或 iframe？<br>
介绍一下 API 自动化测试和 UI 自动化测试的区别和适用场景。<br>
您在自动化测试中如何处理动态生成的 ID 或属性？<br>
您在自动化测试中如何管理测试用例和测试报告？有没有使用过测试管理工具？<br>
如何处理 Web 自动化测试的性能问题？<br>
您遇到过哪些挑战或问题，以及您是如何解决它们的？<br>
您如何设计和编写稳定、可维护的自动化测试脚本？<br>
您有没有经验使用版本控制工具进行自动化测试代码的管理？</p>
</div></template>


