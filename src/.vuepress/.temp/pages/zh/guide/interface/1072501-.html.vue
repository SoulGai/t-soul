<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>
<p>移动互联网公司技术架构介绍</p>
</li>
<li>
<p>接口测试介绍</p>
</li>
<li>
<p>常见的接口协议</p>
</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>
<p>掌握常见的接口协议</p>
</li>
<li>
<p>了解接口测试的意义</p>
</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>什么是接口？为什么要做接口测试？测试过程中痛点在哪里？工具选型为什么是postman？<br>
接口测试主要做什么？在产品开发流程中的哪个阶段开始做接口测试？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p>在测试过程中，如果只做UI测试，无法把后端研发的所有业务逻辑完全测试，所以为了保证后端的质量，需要做接口测试。</p>
<p>工具选型，JMeter、Postman、APifox是最主流的接口测试工具，但是JMeter学习成本要比Postman高，因为里面组件很多，无法快速的进行一个接口手工测试，主要用在性能测试中。</p>
<p>Apifox是近两年流行的国内的接口测试工具，新生产品正在发展过程中，对应的功能性不如Postman稳定。</p>
</details>
<h2 id="移动互联网公司技术架构" tabindex="-1"><a class="header-anchor" href="#移动互联网公司技术架构" aria-hidden="true">#</a> 移动互联网公司技术架构</h2>
<figure><img src="@source/zh/guide/interface/assets/image.png" alt="移动互联网公司技术架构" tabindex="0" loading="lazy"><figcaption>移动互联网公司技术架构</figcaption></figure>
<p>在这个架构中，用户通过移动端（包括安卓端、iOS端、H5端）与公司的业务产生交互，形成数据行为流，并将这些数据行为流通过接口请求发送到服务端。服务端通过API网关、微服务来汇集各种数据库和大数据处理系统，将用户的数据进行陈列和展示。</p>
<h3 id="移动端测试-前端测试" tabindex="-1"><a class="header-anchor" href="#移动端测试-前端测试" aria-hidden="true">#</a> 移动端测试（前端测试）</h3>
<blockquote>
<p>可以通过架构图发现，移动端和服务端是测试人员关注的两大方向。中间的分界点在哪里呢？比如微信、QQ、抖音、淘宝、京东等等这些产品，用户会在自己的设备上使用它们，比如：手机上使用或者PC端使用。这里面包含了安卓端、iOS端和H5页面。甚至是物联网，比如天猫精灵、小度音箱、智能穿戴设备等等。都是贴近于用户端一侧，称之为用户端测试、客户端测试、移动端测试。</p>
</blockquote>
<p>这个维度主要关注用户在移动端（包括安卓端、iOS端和H5端）与公司业务进行交互时的质量。具体测试内容包括：</p>
<ol>
<li>
<p><strong>用户操作流程</strong>：测试用户在移动端的操作流程是否符合预期，是否顺畅，是否易于使用。</p>
</li>
<li>
<p><strong>界面展现</strong>：测试界面展现是否正确、美观，排版是否合理，是否符合设计和用户体验要求。</p>
</li>
<li>
<p><strong>数据展现</strong>：验证数据展示是否准确，数据是否实时更新，以保证用户获取的信息是准确的。</p>
</li>
</ol>
<p>这里的测试注重于 用户端的体验、功能的流程、产品的性能性、兼容性、安全性等等，在这里面用户的体验是需要放在首位。</p>
<p>从这个纬度开始，页面通过请求发送给公司的后台。公司的后台第一位置通常是DNS网关，通过网关转发请求给后端的微服务，根据不同的业务请求调用不同的服务。</p>
<figure><img src="@source/zh/guide/interface/assets/123456789.jpg" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>
<h3 id="服务端测试" tabindex="-1"><a class="header-anchor" href="#服务端测试" aria-hidden="true">#</a> 服务端测试</h3>
<p>这个维度主要关注数据行为流到达服务端后的处理质量。具体测试内容包括：</p>
<ol>
<li>
<p><strong>接口测试</strong>：测试接口的正确性和稳定性，确保数据能够准确传递和处理。</p>
</li>
<li>
<p><strong>网关和微服务测试</strong>：对网关和微服务进行测试，保证其能够按需调用各种数据库和大数据处理系统，并正确返回数据。</p>
</li>
<li>
<p><strong>数据库测试</strong>：对数据库进行测试，确保数据的存储和读取是正确的。</p>
</li>
<li>
<p><strong>大数据处理测试</strong>：测试大数据处理系统，确保数据能够被高效地处理和分析。</p>
</li>
</ol>
<p>在服务端测时，需要考虑稳定性、性能、安全。有时会发生数据泄露的场景，京东、淘宝、国内用户的身份证信息泄露。如果发生信息泄露，需要从如下几个方面考虑：</p>
<ol>
<li>
<p>服务器能否被他人物理接触；</p>
</li>
<li>
<p>部署的服务链路是否可被他人监控；</p>
</li>
<li>
<p>对外开放的端口，应用层是否暴露了当前服务的端口号，以及权限未进行设置。</p>
</li>
</ol>
<p>整个测试过程旨在保证移动互联网公司产品的质量，包括<strong>用户体验的优化</strong>、<strong>功能的稳定性</strong>以及<strong>数据的准确性</strong>。通过对移动端和服务端进行全面的测试，公司可以提供高质量的产品给用户，提升用户满意度和市场竞争力。同时，持续的测试和优化工作也有助于及早发现问题并进行及时修复，提高产品的稳定性和可靠性。</p>
<h2 id="为什么要做接口测试" tabindex="-1"><a class="header-anchor" href="#为什么要做接口测试" aria-hidden="true">#</a> 为什么要做接口测试？</h2>
<p>接口测试在软件开发中扮演着重要的角色，主要有以下原因：</p>
<h3 id="确保功能正确性" tabindex="-1"><a class="header-anchor" href="#确保功能正确性" aria-hidden="true">#</a> 确保功能正确性</h3>
<p>接口测试帮助确保各个组件之间的通信和交互正常无误。通过测试API的输入和输出，可以验证API是否按照预期执行，并且功能是否正确实现。</p>
<h3 id="提高应用稳定性" tabindex="-1"><a class="header-anchor" href="#提高应用稳定性" aria-hidden="true">#</a> 提高应用稳定性</h3>
<p>应用程序通常由多个组件构成，这些组件相互之间通过API进行通信。如果API存在错误或异常，可能会导致整个应用崩溃或出现不稳定的行为。接口测试有助于发现和修复这些问题，从而提高应用的稳定性和可靠性。</p>
<blockquote>
<p>某些异常场景，由于测试环境和线上环境没有相关账号或前端没有相应步骤走到该场景下，则只用移动端测试无法进行所有应用场景的覆盖。此时，可以通过接口测试，传入特定场景下的参数进行测试，验证研发逻辑是否符合预期。</p>
</blockquote>
<h3 id="早期发现缺陷" tabindex="-1"><a class="header-anchor" href="#早期发现缺陷" aria-hidden="true">#</a> 早期发现缺陷</h3>
<p>在开发过程中进行接口测试可以早期发现潜在的问题和缺陷。及早解决这些问题可以减少后期修复成本，提高开发效率。</p>
<h3 id="支持持续集成和持续交付" tabindex="-1"><a class="header-anchor" href="#支持持续集成和持续交付" aria-hidden="true">#</a> 支持持续集成和持续交付</h3>
<p>在持续集成和持续交付（CI/CD）流程中，接口测试是不可或缺的一部分。它可以确保每次代码提交后，API仍然能够正确运行，从而避免不稳定的代码进入生产环境。</p>
<h3 id="支持团队协作" tabindex="-1"><a class="header-anchor" href="#支持团队协作" aria-hidden="true">#</a> 支持团队协作</h3>
<p>在大型项目中，前端和后端开发团队通常同时进行工作。通过定义清晰的API接口和接口测试契约，可以促进团队之间的协作和沟通。</p>
<h3 id="增加系统可扩展性" tabindex="-1"><a class="header-anchor" href="#增加系统可扩展性" aria-hidden="true">#</a> 增加系统可扩展性</h3>
<p>接口测试可以帮助确定API的限制和性能，从而为系统的扩展性提供有价值的反馈。这样，开发人员可以对系统进行必要的优化和改进，以满足未来的需求。</p>
<h2 id="分层测试体系" tabindex="-1"><a class="header-anchor" href="#分层测试体系" aria-hidden="true">#</a> 分层测试体系</h2>
<img src="https://www.plantuml.com/plantuml/svg/ZLBBJi9G4DttAxfcfNu1BeXnvyOF8Cg218mHtBSYZ_2ml5L0eKQWyK63W49BuMEyS-_jobzmMWXHWecxoRdtd9bpPhoHgFyiUXuE2Lwt2WTFZiF-Ko5ov0y5nEqj8HgCOW6f1FGlw2Z3zGgnIcnW2fwDe4UqamLulGQrJ3KLxZC8UKGoRJ6poIsTcE_4w499PhNB1P6zLbcbpNiptbFTltOo1xaAn6EBzwzfTlTWVr7J5vLCCeXmozmxN88kwIV30JmYLV9aLeVvioqrFoKP5Ds-Qs5NK79s9uKQP5o6teJUbDYq2ebRA6QPEQJfHrTlrN8XPZzbkIwZGNJXQAIRF6Ov36q0lHgLkYxfrqXeUcpoZWpn0HrehApHr0Sn7ebHH1vEuo38SnBZIX-iXvzn6KKkbvbL-4TMTb9XHjSPM5m5Xl4iOHnf0xoUrhfTa6iGr-oxXrNdJVv0UUAT1AjNQKEYhJ7COwm-f5TjiFfGoZdkysqoha5QfIEPQHaKy-tue67GMrtyOsjuKbpAqZSJzonu0tYBotjqQhpIRm00" alt="uml diagram" loading="lazy">
<figure><img src="@source/zh/guide/interface/assets/image2.png" alt="马丁福勒测试金字塔" tabindex="0" loading="lazy"><figcaption>马丁福勒<br>测试金字塔</figcaption></figure>
<blockquote>
<p>越往下产品发现缺陷的成本越低，修复的速度越快。越往上，产品反馈的质量问题越慢，投入维护产品、修复产品的成本会变高。</p>
</blockquote>
<h3 id="金字塔模型" tabindex="-1"><a class="header-anchor" href="#金字塔模型" aria-hidden="true">#</a> 金字塔模型</h3>
<ul>
<li><strong>传统软件产品的测试策略设计。</strong></li>
</ul>
<blockquote>
<p>推崇的是迈克的 <strong>金字塔模型</strong>：<strong>重单元测试，API测试次之，轻GUI测试</strong>。</p>
</blockquote>
<figure><img src="@source/zh/guide/interface/assets/strategy_202208171154562.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>迈克的金字塔模型是一种软件测试策略，强调将重点放在单元测试上，API测试次之，而将GUI测试作为较轻量级的测试。</p>
<p>根据迈克的金字塔模型，测试金字塔的层次结构如下：</p>
<h4 id="单元测试-unit-testing" tabindex="-1"><a class="header-anchor" href="#单元测试-unit-testing" aria-hidden="true">#</a> 单元测试（Unit Testing）</h4>
<p>单元测试是针对软件中最小的可测试单元——函数、方法或类等进行的测试。</p>
<p>它们通常是在隔离的环境中执行，以确保单元的正确性和预期行为。单元测试应该是快速、自动化的，并且在整个开发过程中频繁运行。</p>
<h4 id="api测试" tabindex="-1"><a class="header-anchor" href="#api测试" aria-hidden="true">#</a> API测试</h4>
<p>API测试是对应用程序编程接口（API）进行的测试。</p>
<p>它们验证API的功能、性能和稳定性，并确保各种输入和边界条件下的正确行为。API测试通常涉及对请求和响应的验证，以及对API参数、状态码和错误处理的检查。</p>
<h4 id="gui测试-graphical-user-interface-testing" tabindex="-1"><a class="header-anchor" href="#gui测试-graphical-user-interface-testing" aria-hidden="true">#</a> GUI测试（Graphical User Interface Testing）</h4>
<p>GUI测试是针对应用程序的用户界面进行的测试。</p>
<p>它们模拟用户的交互操作，例如点击按钮、输入文本、选择选项等，并验证应用程序在各种情况下的响应和正确性。GUI测试可以确保应用程序的可用性和用户体验。</p>
<p>迈克的金字塔模型的理念是将更多的测试重点放在底层的单元测试上，因为单元测试可以<strong>提供快速、可靠的反馈，而且相对容易编写和维护</strong>。而<strong>API测试则可以在更高层次上验证系统的功能和稳定性</strong>，GUI测试作为顶层的测试，主要关注用户交互和可用性。</p>
<p>这种金字塔结构的测试策略有助于提高测试效率、减少依赖外部系统和减少测试执行时间。通过合理分配测试资源，优先关注底层的单元测试和API测试，可以更早地发现和解决问题，从而提高软件的质量。</p>
<h3 id="菱形模型" tabindex="-1"><a class="header-anchor" href="#菱形模型" aria-hidden="true">#</a> 菱形模型</h3>
<ul>
<li><strong>互联网产品的测试策略设计</strong>。</li>
</ul>
<blockquote>
<p>互联网产品的研发流程就一个字：“快”，发布周期的巨大差异决定了，传统软件产品的测试策略必然不适用于互联网产品的测试，二者的测试策略必然在测试执行时间和测试执行环境上有巨大差异。</p>
</blockquote>
<p>互联网产品采用 <strong>菱形模型</strong> ，遵循 <strong>重量级 API 测试，轻量级 GUI 测试，轻量级单元测试</strong> 的原则。</p>
<figure><img src="@source/zh/guide/interface/assets/strategy_20230331143400.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>互联网产品的上线周期，决定了<code v-pre>GUI</code>测试不可能大范围开展。</p>
<ol>
<li>互联网<strong>产品的迭代周期</strong>，决定了留给开发<code v-pre>GUI</code>自动化测试用例的时间非常有限</li>
<li>互联网<strong>产品客户端界面的频繁变化</strong>，决定了开展<code v-pre>GUI</code>自动化测试的效率会非常低</li>
</ol>
<p>互联网的产品 以中间层的<code v-pre>API</code>测试为重点做全面的测试；</p>
<p>最上层的<code v-pre>GUI</code>测试，首先只覆盖 <strong>最核心直接影响主营业务流程</strong> 的<code v-pre>E2E</code>『<code v-pre>EndToEnd</code>』场景 「P0级别的回归测试」；</p>
<blockquote>
<p>UI测试可能执行的时间比较长，对应的维护成本比较高，只要前端页面有变化，我们就需要进行对应的脚本维护。所以，我们只选其中的一部分重要的测试用例，P0级别的测试用例来进行</p>
</blockquote>
<blockquote>
<p>有些app在不同的时间段对应的页面布局都会不同，所以，UI自动化就要兼容这个布局的更改，去判断当前页面有哪个模块，就进行哪个模块的UI自动化，如果当前页面没有对应模块则不进行UI自动化测试，但是在服务端并不代表该服务停止。</p>
</blockquote>
<p>单元测试采用「<strong>分而治之</strong>」的思想，只对那些相对稳定并且核心的服务和模块开展全面的单元测试，而应用层或者上层业务只会做少量的单元测试。</p>
<p>菱形模型的理念是将更多的测试重点放在API测试上，因为API是应用程序的核心接口，对系统的功能和稳定性起着关键作用。</p>
<p>GUI测试作为中等层次的测试，关注用户界面和用户体验，而轻量级单元测试作为最底层的测试，验证最小的可测试单元。</p>
<p>这种菱形结构的测试策略<strong>有助于确保API的功能和性能</strong>，并验证应用程序的用户界面和用户体验。通过合理分配测试资源，重点关注API测试，可以在保证系统稳定性的同时，有效地测试用户界面和最小单元的正确性。</p>
<h2 id="接口测试不能取代-ui-测试" tabindex="-1"><a class="header-anchor" href="#接口测试不能取代-ui-测试" aria-hidden="true">#</a> 接口测试不能取代 UI 测试</h2>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>接口测试是否可以取代 UI 测试？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p>不能。</p>
<ul>
<li>
<p>接口测试虽然有很多优点，但是保证的是后端工程师的产出质量，不能解决移动端的质量。</p>
</li>
<li>
<p>大前端工程师的产出质量只能通过前端UI测试保证</p>
</li>
</ul>
</details>
<p><strong>大前端研发团队</strong>：</p>
<ul>
<li>
<p>前端工程师：HTML、JS、CSS、Vue、React</p>
</li>
<li>
<p>移动开发工程师：Java、Kotlin</p>
</li>
<li>
<p>跨端研发工程师：React Native、Flutter、Weex</p>
</li>
</ul>
<p><strong>后端研发团队</strong>：</p>
<ul>
<li>
<p>微服务：SpringCloud</p>
</li>
<li>
<p>单体服务：SpringBoot、Spring</p>
</li>
</ul>
<h2 id="接口测试主要做什么" tabindex="-1"><a class="header-anchor" href="#接口测试主要做什么" aria-hidden="true">#</a> 接口测试主要做什么？</h2>
<p>接口测试主要涵盖以下方面：</p>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuIZ9BSb8LdlKjVTg_-DdMxXVhft9feN6r55wkwdcnlX4Y-hHh_elclHYY_KtFfcvGG1T-iN_AqzdpGA9G8nkM0pKZ38PgNjVvj7K5K0uXyQ9zrTEk5Kzxfg4unI4Lw6Yemq5ie7S0" alt="uml diagram" loading="lazy">
<h3 id="验证接口功能" tabindex="-1"><a class="header-anchor" href="#验证接口功能" aria-hidden="true">#</a> 验证接口功能</h3>
<p>确保API按照预期实现了所需的功能，并返回正确的结果。</p>
<h3 id="验证接口参数" tabindex="-1"><a class="header-anchor" href="#验证接口参数" aria-hidden="true">#</a> 验证接口参数</h3>
<p>测试各种输入参数和请求负载，包括边界情况和错误输入，以确保API能够正确处理各种情况。</p>
<h3 id="验证接口返回" tabindex="-1"><a class="header-anchor" href="#验证接口返回" aria-hidden="true">#</a> 验证接口返回</h3>
<p>验证API的响应是否符合预期，并检查返回的数据是否正确、完整和一致。</p>
<h3 id="接口性能测试" tabindex="-1"><a class="header-anchor" href="#接口性能测试" aria-hidden="true">#</a> 接口性能测试</h3>
<p>评估API的性能，包括响应时间、吞吐量和资源消耗，以确保API能够在负载情况下正常运行。一般使用JMeter进行接口性能测试。</p>
<h3 id="接口安全性测试" tabindex="-1"><a class="header-anchor" href="#接口安全性测试" aria-hidden="true">#</a> 接口安全性测试</h3>
<p>测试API的安全性，包括身份验证、授权、敏感数据保护等，以防止安全漏洞。</p>
<h3 id="自动化接口测试" tabindex="-1"><a class="header-anchor" href="#自动化接口测试" aria-hidden="true">#</a> 自动化接口测试</h3>
<p>使用自动化测试工具编写和执行接口测试，以提高测试效率和覆盖范围。</p>
<h2 id="在产品开发流程中的哪个阶段开始做接口测试" tabindex="-1"><a class="header-anchor" href="#在产品开发流程中的哪个阶段开始做接口测试" aria-hidden="true">#</a> 在产品开发流程中的哪个阶段开始做接口测试？</h2>
<p>接口测试通常在整个产品开发流程中都会进行，只不过不同阶段有不同的重点和目标。</p>
<h3 id="在开发初期" tabindex="-1"><a class="header-anchor" href="#在开发初期" aria-hidden="true">#</a> 在开发初期</h3>
<p>在开发初期，可以使用接口测试来验证API的基本功能和输入输出是否符合预期。这有助于早期发现问题，提高代码质量。</p>
<blockquote>
<p>在开发定义完接口请求路径、请求方式及其参数模版后，就可以编写对应的接口测试用例。</p>
</blockquote>
<h3 id="在集成测试阶段" tabindex="-1"><a class="header-anchor" href="#在集成测试阶段" aria-hidden="true">#</a> 在集成测试阶段</h3>
<p>在集成测试阶段，接口测试主要用于验证不同组件之间的交互是否正常。集成测试旨在测试各个组件之间的协作和兼容性。</p>
<blockquote>
<p>在前后端联调完成后，就可以整体调用接口测试，验证不同业务流程下的响应结果是否正常。</p>
</blockquote>
<h3 id="在持续集成和持续交付流程中" tabindex="-1"><a class="header-anchor" href="#在持续集成和持续交付流程中" aria-hidden="true">#</a> 在持续集成和持续交付流程中</h3>
<p>接口测试是持续集成和持续交付流程的一部分，确保每次代码提交后，API仍然能够正确运行。</p>
<h3 id="在产品发布前后" tabindex="-1"><a class="header-anchor" href="#在产品发布前后" aria-hidden="true">#</a> 在产品发布前后</h3>
<p>在产品发布前后，进行全面的接口测试，以确保API的正确性、稳定性和安全性。</p>
<p>总的来说，接口测试是一个持续进行的过程，在整个产品开发周期中都需要关注和执行。及早发现问题并及时修复，有助于提高产品质量，并确保最终用户获得稳定可靠的应用体验。</p>
<h2 id="常见的接口协议" tabindex="-1"><a class="header-anchor" href="#常见的接口协议" aria-hidden="true">#</a> 常见的接口协议</h2>
<p>常见的接口协议指的是在计算机网络和软件开发中用于实现组件之间通信和交互的协议。这些协议定义了数据传输的规则和格式，确保不同系统、应用程序或模块之间能够正确地进行数据交换。以下是一些常见的接口协议：</p>
<figure><img src="@source/zh/guide/interface/2022-07-11-11-25-39.png" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuIZ9BSb8LdkxOyM9vu_DPBS_wbZxjN_oqj__5kdLSMhZ4jHGyGa82O7Im0eWLdfeKd9-SdLe2ugG71JY3QD_0a10GhQUdn-MG2hGHQYk83NGB0000" alt="uml diagram" loading="lazy">
<h3 id="http-hypertext-transfer-protocol" tabindex="-1"><a class="header-anchor" href="#http-hypertext-transfer-protocol" aria-hidden="true">#</a> HTTP（Hypertext Transfer Protocol）</h3>
<p>HTTP是用于在Web应用程序之间传输数据的协议。它是一种无状态的协议，通过使用请求和响应的方式，客户端可以向服务器请求数据，并接收服务器返回的数据。</p>
<h3 id="https-hypertext-transfer-protocol-secure" tabindex="-1"><a class="header-anchor" href="#https-hypertext-transfer-protocol-secure" aria-hidden="true">#</a> HTTPS（Hypertext Transfer Protocol Secure）</h3>
<p>HTTPS是在HTTP的基础上添加了安全层的协议。它使用SSL/TLS加密来保护数据传输的安全性，适用于涉及敏感信息的场景，如用户登录、支付等。</p>
<h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h3>
<p>WebSocket是一种全双工通信协议，允许客户端和服务器之间进行双向实时通信。相比传统的HTTP请求-响应模型，WebSocket可以实现更高效的实时通信。</p>
<h3 id="grpc-grpc-remote-procedure-calls" tabindex="-1"><a class="header-anchor" href="#grpc-grpc-remote-procedure-calls" aria-hidden="true">#</a> gRPC（gRPC Remote Procedure Calls）</h3>
<p>gRPC是一个高性能、开源的RPC（Remote Procedure Call）框架，使用HTTP/2协议进行通信。支持双向流和数据压缩，支持多种编程语言，用于实现跨平台和跨语言的服务通信。</p>
<h3 id="mqtt-message-queuing-telemetry-transport" tabindex="-1"><a class="header-anchor" href="#mqtt-message-queuing-telemetry-transport" aria-hidden="true">#</a> MQTT（Message Queuing Telemetry Transport）</h3>
<p>MQTT是一种轻量级的消息传输协议，适用于物联网设备和传感器之间的通信。它具有低带宽和低功耗的特性。</p>
<h3 id="rest-representational-state-transfer" tabindex="-1"><a class="header-anchor" href="#rest-representational-state-transfer" aria-hidden="true">#</a> REST（Representational State Transfer）</h3>
<p>REST是一种基于HTTP协议的软件架构风格，它利用HTTP方法（如GET、POST、PUT、DELETE等）来实现对资源的增删改查操作。RESTful API是遵循REST原则的API。</p>
<h3 id="soap-simple-object-access-protocol" tabindex="-1"><a class="header-anchor" href="#soap-simple-object-access-protocol" aria-hidden="true">#</a> SOAP（Simple Object Access Protocol）</h3>
<p>SOAP是一种用于在网络上交换结构化信息的协议。它使用XML格式来封装请求和响应，常用于企业级应用的服务调用。</p>
<h3 id="graphql" tabindex="-1"><a class="header-anchor" href="#graphql" aria-hidden="true">#</a> GraphQL</h3>
<p>GraphQL是一种用于查询和操作数据的查询语言和运行时环境。它允许客户端指定需要的数据结构和内容，从而减少了网络传输的数据量，并提供了更高的灵活性。</p>
<h3 id="amqp-advanced-message-queuing-protocol" tabindex="-1"><a class="header-anchor" href="#amqp-advanced-message-queuing-protocol" aria-hidden="true">#</a> AMQP（Advanced Message Queuing Protocol）</h3>
<p>AMQP是一种高级消息队列协议，用于在应用程序之间进行消息传递。它支持高级消息路由、可靠的消息传递和灵活的消息模型。</p>
<p>这些接口协议在不同的场景和应用中具有不同的优势和适用性。选择适合的接口协议取决于应用的需求和技术栈，以及与其他系统的集成要求。</p>
<p>总之，接口测试是质量保障体系中必不可少的一部分。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>常见的接口协议：HTTP、HTTPS、WebSocket、RPC、MQTT......</p>
</li>
<li>
<p>接口测试可以在开发初期就介入</p>
</li>
<li>
<p>测试策略模型：金字塔模型、菱形模型</p>
</li>
</ul>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>HTTP和HTTPS都是用于什么目的？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A.数据加密</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B.网络通信</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C.文件传输</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. 用户身份验证</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
<li>
<p>HTTP和HTTPS使用的默认端口号分别是什么？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> A.HTTP: 80， HTTPS: 443</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> B.HTTP: 443， HTTPS: 80</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> C.HTTP: 8080， HTTPS: 8443</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> D. HTTP: 8443， HTTPS: 8080</label></li>
</ul>
<blockquote>
<p>答案：A</p>
</blockquote>
</li>
<li>
<p>HTTPS中的&quot;S&quot;代表什么？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> A.Safe</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> B.Security</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> C.Server</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> D. Socket</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
<li>
<p>在HTTP和HTTPS之间的主要区别是什么？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> A.HTTPS比HTTP更快</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> B.HTTPS可以加密数据传输，HTTP不能</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> C.HTTP比HTTPS更安全</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> D. HTTP可以支持多个域名，HTTPS不支持</label></li>
</ul>
<blockquote>
<p>答案：B</p>
</blockquote>
</li>
<li>
<p>HTTPS使用的加密协议是什么？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> A.AES</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> B.RSA</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> C.SHA</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> D. SSL/TLS</label></li>
</ul>
<blockquote>
<p>答案：D</p>
</blockquote>
</li>
</ol>
</div></template>


