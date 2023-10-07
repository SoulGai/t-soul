<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>压测工具介绍。</li>
<li>JMeter介绍。</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>JMeter工具特性。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>想要进行压测脚本编写，为什么选择JMeter作为压测脚本的工具？JMeter都有哪些特点？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/20230206105644.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="压测工具介绍" tabindex="-1"><a class="header-anchor" href="#压测工具介绍" aria-hidden="true">#</a> 压测工具介绍</h2>
<p>压测工具是用于模拟高并发、大负载情况下对软件、网络或系统进行性能测试的工具。它们能够模拟多种场景，以验证应用程序的性能、稳定性和可靠性，帮助开发人员和运维人员找出系统的瓶颈和性能问题。以下是一些常见的压测工具及其简介：</p>
<h3 id="apache-jmeter" tabindex="-1"><a class="header-anchor" href="#apache-jmeter" aria-hidden="true">#</a> Apache JMeter</h3>
<p>Apache JMeter是一款开源的Java应用程序，广泛用于测试Web应用程序的性能。它可以模拟多种协议，包括HTTP、HTTPS、FTP、SOAP、REST等，并支持各种负载类型，如并发用户、线程组等。JMeter提供了丰富的测试报告和图表，使用户能够更好地分析测试结果。</p>
<h3 id="gatling" tabindex="-1"><a class="header-anchor" href="#gatling" aria-hidden="true">#</a> Gatling</h3>
<p>Gatling是另一款开源的压测工具，使用Scala编写，专注于高性能和高并发场景。它通过使用异步非阻塞的IO和Akka工具包，支持模拟数万并发用户。Gatling提供了易于阅读的DSL（领域专用语言）脚本，使得创建测试场景和脚本变得简单且直观。</p>
<h3 id="locust" tabindex="-1"><a class="header-anchor" href="#locust" aria-hidden="true">#</a> Locust</h3>
<p>Locust是一个开源的Python压测工具，以简洁和易用著称。它可以通过编写简单的Python脚本来定义用户行为和请求。Locust支持分布式压力测试，可以使用多台计算机来模拟大规模的并发用户。</p>
<h3 id="tsung" tabindex="-1"><a class="header-anchor" href="#tsung" aria-hidden="true">#</a> Tsung</h3>
<p>Tsung是一个开源的多协议分布式压测工具，可以模拟HTTP、WebDAV、SOAP、MySQL等协议。它可以在多个服务器上运行，协调并发用户以模拟真实场景。</p>
<h3 id="siege" tabindex="-1"><a class="header-anchor" href="#siege" aria-hidden="true">#</a> Siege</h3>
<p>Siege是一个简单但功能强大的开源命令行压测工具，主要用于HTTP服务器。它可以模拟并发用户并记录测试结果，但相对于其他工具功能较为基本。</p>
<h3 id="artillery" tabindex="-1"><a class="header-anchor" href="#artillery" aria-hidden="true">#</a> Artillery</h3>
<p>Artillery是一个用Node.js编写的开源压测工具，特别适合测试WebSocket和HTTP服务器。它支持在多个服务器上进行分布式压测，并提供实时的统计信息。</p>
<h3 id="vegeta" tabindex="-1"><a class="header-anchor" href="#vegeta" aria-hidden="true">#</a> Vegeta</h3>
<p>Vegeta是一个开源的命令行压测工具，使用Go编写，具有简单的配置和易于使用的特点。它能够模拟高并发场景，并生成测试报告。</p>
<p>以上仅是一些常见的压测工具，市场上还有很多其他工具供选择。选择合适的压测工具取决于你的需求、技术栈和偏好。在使用压测工具时，务必小心谨慎，避免对生产环境造成不可预料的影响。最好先在测试环境中进行试验，确保你对工具的使用和结果的解释都正确无误。</p>
<h2 id="jmeter介绍" tabindex="-1"><a class="header-anchor" href="#jmeter介绍" aria-hidden="true">#</a> JMeter介绍</h2>
<p>JMeter 是一款用于压力测试、性能测试和负载测试的开源工具，支持多种协议和技术，如 HTTP、HTTPS、FTP、SOAP、REST 等。它最初是为 Web 应用程序设计的，但也可以用于测试其他类型的应用程序。</p>
<h3 id="主要特性" tabindex="-1"><a class="header-anchor" href="#主要特性" aria-hidden="true">#</a> 主要特性</h3>
<img src="https://www.plantuml.com/plantuml/svg/RP3FIeHG5CRtFeNhMVWCaa4rCD32Q2sD2yC_CHgrr6gcXXHhfcaHBGfafZPgz4z7xMNoNE-kL-XU5OfeSpZdu_iEFpxUjAI1jQ-f35zlcgBtDMcFiHHBbTbkJxRaGPbaUEvKunJP2wRphzXX8RVHyWA67dv9wOsk8kGw4DnK2myy7uVXL-x2_8XT5yNDJziH1Jgxgoi2nt5_0sWM8oz4TpdaVXlRDGsT10urjVMlRMsmC75Pk2pABC3tRfa4D3hrok8MNQSa-kljsGYIOoAXrtCSpMhWqR0gmYexAREtCeaXSd_io9yGbNn7uqTuQkmr6FwOmkco0QCgVd-0z1dykCaHrcsbRnmGq9wqGwOWwvPXKc9U9iMsvTATLFuD" alt="uml diagram" loading="lazy">
<p>以下是 JMeter 的主要特性：</p>
<h4 id="开源免费" tabindex="-1"><a class="header-anchor" href="#开源免费" aria-hidden="true">#</a> 开源免费</h4>
<p>JMeter 是一款开源免费的软件，任何人都可以下载和使用它。</p>
<h4 id="支持多种协议" tabindex="-1"><a class="header-anchor" href="#支持多种协议" aria-hidden="true">#</a> 支持多种协议</h4>
<p>JMeter 支持多种协议和技术，如 HTTP、HTTPS、FTP、SOAP、REST 等，可以满足不同类型应用程序的测试需求。</p>
<h4 id="支持多种数据格式" tabindex="-1"><a class="header-anchor" href="#支持多种数据格式" aria-hidden="true">#</a> 支持多种数据格式</h4>
<p>JMeter 支持多种数据格式，如文本、XML、JSON、CSV 等，可以方便地生成测试数据和结果。</p>
<h4 id="gui-和命令行两种操作方式" tabindex="-1"><a class="header-anchor" href="#gui-和命令行两种操作方式" aria-hidden="true">#</a> GUI 和命令行两种操作方式</h4>
<p>JMeter 提供了 GUI 和命令行两种操作方式，用户可以根据需要选择合适的方式进行测试。</p>
<h4 id="内置组件丰富" tabindex="-1"><a class="header-anchor" href="#内置组件丰富" aria-hidden="true">#</a> 内置组件丰富</h4>
<p>JMeter 提供了多种内置组件，如线程组、请求、断言、逻辑控制器等，可以轻松地构建测试计划。</p>
<h4 id="支持插件和扩展" tabindex="-1"><a class="header-anchor" href="#支持插件和扩展" aria-hidden="true">#</a> 支持插件和扩展</h4>
<p>JMeter 支持多种插件和扩展，可以扩展其功能和支持的协议。</p>
<h4 id="多种输出格式" tabindex="-1"><a class="header-anchor" href="#多种输出格式" aria-hidden="true">#</a> 多种输出格式</h4>
<p>JMeter 支持多种输出格式，如 HTML 报告、CSV 文件、聚合报告、XML文件，方便用户查看和分析测试结果。</p>
<h4 id="跨平台支持" tabindex="-1"><a class="header-anchor" href="#跨平台支持" aria-hidden="true">#</a> 跨平台支持</h4>
<p>JMeter 支持多种操作系统，如 Windows、Linux、Mac 等。</p>
<h4 id="支持分布式测试" tabindex="-1"><a class="header-anchor" href="#支持分布式测试" aria-hidden="true">#</a> 支持分布式测试</h4>
<p>JMeter 支持分布式测试，可以将测试负载分配到多个机器上执行，以模拟更真实的场景。</p>
<blockquote>
<p>压测时，要把server端的瓶颈点测试出来。但是如果想要测出瓶颈点，就需要产生巨大的压力。但是运行JMeter的计算机「负载机」，严格意义上来说，并不是很好。当JMeter运行的计算机配置不高时，有可能server端的瓶颈没有压出来，对应的JMeter运行的机器直接就挂掉了。分布式部署，人多力量大。</p>
</blockquote>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>总之，JMeter 是一款功能丰富、易用、灵活的测试工具，可以帮助用户快速构建测试计划，模拟真实的场景，并收集、分析测试结果，从而评估应用程序的性能和稳定性。</p>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>JMeter支持哪些协议？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. <code v-pre>HTTP/HTTPS</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B.<code v-pre>FTP</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. <code v-pre>JDBC</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. <code v-pre>SOAP/REST</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> E. <code v-pre>SMTP</code></label></li>
</ul>
<blockquote>
<p>答案：A、B、C、D、E</p>
</blockquote>
</li>
<li>
<p>JMeter可以生成哪些类型的测试报告？（可多选）</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> A. 聚合报告</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> B. HTML报告</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> C. CSV报告</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> D. XML报告</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> E. PDF报告</label></li>
</ul>
<blockquote>
<p>答案：A、B、C、D</p>
</blockquote>
</li>
<li>
<p>JMeter可以进行以下哪些类型的性能测试？（可多选）</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> A. 负载测试</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> B. 压力测试</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> C. 并发测试</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> D. 随机测试</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> E. 安全测试</label></li>
</ul>
<blockquote>
<p>答案：A、B、C</p>
</blockquote>
</li>
</ol>
</div></template>


