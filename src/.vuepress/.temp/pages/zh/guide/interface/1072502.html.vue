<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>
<p>RestfulAPI原则</p>
</li>
<li>
<p>HTTP请求方法</p>
</li>
<li>
<p>GET与POST请求的区别</p>
</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>
<p>掌握HTTP常见的请求方法有哪几种</p>
</li>
<li>
<p>熟练掌握GET与POST请求的区别</p>
</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>为什么 RESTful API 如此受欢迎？</p>
</div>
<p>REST 是互联网上计算机之间最常见的通信标准。它是什么？为什么它如此受欢迎？</p>
<figure><img src="@source/zh/guide/interface/assets/20230725154400.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>REST（Representational State Transfer）是一种设计风格和通信标准，用于构建分布式系统和Web服务。它是一种基于HTTP协议的架构风格，主要用于在客户端和服务器之间进行资源的交互和通信。RESTful API是遵循REST原则的API设计，通过HTTP请求来进行资源的增删改查操作。</p>
<h2 id="restfulapi主要原则" tabindex="-1"><a class="header-anchor" href="#restfulapi主要原则" aria-hidden="true">#</a> RestfulAPI主要原则</h2>
<figure><img src="@source/zh/guide/interface/assets/20230725160059.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>REST的主要原则包括：</p>
<h3 id="统一接口-uniform-interface" tabindex="-1"><a class="header-anchor" href="#统一接口-uniform-interface" aria-hidden="true">#</a> 统一接口（Uniform Interface）</h3>
<p>RESTful API应该具有统一的接口，包括使用HTTP方法（GET、POST、PUT、DELETE等）对资源进行操作，并使用HTTP状态码来表示请求结果。</p>
<h3 id="客户端-服务器-client-server" tabindex="-1"><a class="header-anchor" href="#客户端-服务器-client-server" aria-hidden="true">#</a> 客户端-服务器（Client-Server）</h3>
<p>REST架构将客户端和服务器之间的关注点分离，客户端负责用户界面和用户体验，而服务器负责数据存储和处理。</p>
<h3 id="无状态-stateless" tabindex="-1"><a class="header-anchor" href="#无状态-stateless" aria-hidden="true">#</a> 无状态（Stateless）</h3>
<p>REST是无状态的，每个请求都应该包含所有必要的信息，服务器不应该保存客户端的状态。</p>
<h3 id="可缓存-cacheable" tabindex="-1"><a class="header-anchor" href="#可缓存-cacheable" aria-hidden="true">#</a> 可缓存（Cacheable）</h3>
<p>RESTful API支持缓存机制，可以对响应进行缓存以提高性能和减少网络传输。</p>
<h3 id="分层系统-layered-system" tabindex="-1"><a class="header-anchor" href="#分层系统-layered-system" aria-hidden="true">#</a> 分层系统（Layered System）</h3>
<p>REST允许通过中间件组件来实现分层系统，从而提高系统的可伸缩性和安全性。</p>
<h3 id="可选代码-code-on-demand" tabindex="-1"><a class="header-anchor" href="#可选代码-code-on-demand" aria-hidden="true">#</a> 可选代码（Code on Demand）</h3>
<p>REST允许服务器在需要时向客户端传递可执行代码（例如JavaScript脚本），以扩展客户端功能。</p>
<p>这些原则是REST架构设计的基石，使得RESTful API具有简洁、可扩展和灵活的特点。通过遵循这些原则，开发人员可以设计出高效、可靠和易于理解的RESTful API，提供优质的用户体验。</p>
<blockquote>
<p>大部分公司的前后端联调使用的就是REST风格的API，如果是公司内部各个微服务之间的调用，使用的是更底层的TCP等协议。</p>
</blockquote>
<h2 id="rest受欢迎原因" tabindex="-1"><a class="header-anchor" href="#rest受欢迎原因" aria-hidden="true">#</a> Rest受欢迎原因</h2>
<p>REST之所以受欢迎，有以下几个主要原因：</p>
<h3 id="简单性" tabindex="-1"><a class="header-anchor" href="#简单性" aria-hidden="true">#</a> 简单性</h3>
<p>REST的设计原则简单明了，易于理解和实现，使得开发人员可以快速构建可靠的API。</p>
<h3 id="可扩展性" tabindex="-1"><a class="header-anchor" href="#可扩展性" aria-hidden="true">#</a> 可扩展性</h3>
<p>RESTful API是松耦合的，可以根据需求逐步增加新的资源和功能，具有良好的可扩展性。</p>
<h3 id="跨平台支持" tabindex="-1"><a class="header-anchor" href="#跨平台支持" aria-hidden="true">#</a> 跨平台支持</h3>
<p>由于REST使用HTTP作为通信协议，因此它可以跨越不同的平台和编程语言进行通信，非常灵活。</p>
<h3 id="易于缓存" tabindex="-1"><a class="header-anchor" href="#易于缓存" aria-hidden="true">#</a> 易于缓存</h3>
<p>REST使用标准的HTTP方法和状态码，支持缓存机制，可以提高系统性能和效率。</p>
<h3 id="超媒体支持" tabindex="-1"><a class="header-anchor" href="#超媒体支持" aria-hidden="true">#</a> 超媒体支持</h3>
<p>REST的HATEOAS原则使得客户端能够动态地发现和访问其他资源，增强了API的可发现性和可用性。</p>
<p>综上所述，REST作为一种通用的Web服务设计风格，具有简单性、可扩展性、跨平台支持和超媒体支持等优势，因此在互联网上计算机之间的通信中得到广泛应用和受到欢迎。</p>
<h2 id="http-请求" tabindex="-1"><a class="header-anchor" href="#http-请求" aria-hidden="true">#</a> HTTP 请求</h2>
<figure><img src="@source/zh/guide/interface/assets/20230725160720.png" alt="HTTP 请求" tabindex="0" loading="lazy"><figcaption>HTTP 请求</figcaption></figure>
<p>HTTP （超文本传输协议）是一种TCP/IP通信协议，用于在 Web 上进行数据交换。<br>
HTTP 请求，它是 API 测试中使用的基本单元之一。</p>
<p>正如在客户端架构模型中已经理解的那样， <em>客户端向服务器发送请求以获取一些信息或数据</em> 。此外，客户端的请求是一个HTTP请求，它在客户端和服务器之间进行通信，或者你可以说是两个不同的计算机系统。此外，它是一个简单的文本文件，格式为XML或JSON，它将客户端的二进制数据发送到服务器。一个简单的 GET HTTP 请求如下所示：</p>
<figure><img src="@source/zh/guide/interface/assets/202208151439110.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法" aria-hidden="true">#</a> 请求方法</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>意义</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>获取资源</td>
</tr>
<tr>
<td>POST</td>
<td>新增或者更新</td>
</tr>
<tr>
<td>PUT</td>
<td>更新资源</td>
</tr>
<tr>
<td>DELETE</td>
<td>删除资源</td>
</tr>
</tbody>
</table>
<p>有哪些不同的 HTTP 请求方法？</p>
<p>HTTP 请求方法指定通过请求执行的操作。这些也称为动词，通常用于CRUD 操作「创建、读取、更新和删除」。<br>
此外，HTTP 请求方法区分大小写，并且应该<strong>始终为大写</strong>。</p>
<p>常用的 HTTP 方法：</p>
<h4 id="_1-get" tabindex="-1"><a class="header-anchor" href="#_1-get" aria-hidden="true">#</a> 1. GET</h4>
<p>顾名思义，Get 方法<strong>从服务器获取信息</strong>。而且，它<strong>是最常用的方法</strong>，<strong>没有请求体</strong>。每次打开网站时，都会触发 Get 请求以检索网站内容。另外，它<strong>相当于读操作</strong>。</p>
<p>GET 方法的一些主要功能是：</p>
<ul>
<li>可以使用 GET 方法轻松地为数据添加书签</li>
<li>对于 GET 方法，<strong>值</strong>的<strong>长度限制</strong>通常为 <strong>255 个字符</strong></li>
<li>GET <strong>仅支持字符串</strong>数据类型</li>
<li>GET 请求是<strong>可缓存</strong>的</li>
<li>GET 方法中<strong>传递的参数</strong>存储在浏览器历史记录中</li>
</ul>
<h4 id="_2-post" tabindex="-1"><a class="header-anchor" href="#_2-post" aria-hidden="true">#</a> 2. POST</h4>
<p>Post 方法用于<strong>向服务器发送数据</strong>。可以使用 Post 请求 <strong>添加</strong> 或<strong>更新数据</strong>。<strong>在请求正文中发送需要更新的信息</strong>。一般，<em>网站上的表单数据</em> 使用 Post 请求进行更新。</p>
<p>POST 方法的一些关键特性是：</p>
<ul>
<li>通过 POST 方法传递的<strong>数据在浏览器 URL 中不可见</strong></li>
<li>通过 POST 传递的值<strong>不会存储在浏览器历史记录中</strong></li>
<li>通过 POST 方法发送的<strong>数据长度没有限制</strong></li>
<li>POST 方法请求<strong>支持不同的数据类型</strong>，如 <em>字符串</em>、<em>二进制</em>、<em>整数</em> 等</li>
</ul>
<h4 id="_3-head" tabindex="-1"><a class="header-anchor" href="#_3-head" aria-hidden="true">#</a> 3. HEAD</h4>
<p>Head 方法与 Get 方法类似，但它<strong>只检索头部数据</strong>，而<strong>不是整个响应体</strong>。</p>
<p>常用场景：在不下载文档的情况下检查文档的文件大小时，会使用HEAD</p>
<h4 id="_4-put" tabindex="-1"><a class="header-anchor" href="#_4-put" aria-hidden="true">#</a> 4. PUT</h4>
<p>Put 方法类似于 Post 方法，因为它更新数据。<br>
唯一的区别：当必须完全替换现有实体时使用Put 。<br>
此外，PUT 方法是幂等的，即它们<strong>在重复执行时返回相同的结果</strong></p>
<h4 id="_5-patch" tabindex="-1"><a class="header-anchor" href="#_5-patch" aria-hidden="true">#</a> 5. PATCH</h4>
<p>类似于 Post 和 Put 方法，当必须更新部分数据时使用它。<br>
此外，与 Post 和 Put 方法不同，可以使用 Patch 方法<strong>仅发送请求正文中需要更新的实体</strong></p>
<h4 id="_6-delete" tabindex="-1"><a class="header-anchor" href="#_6-delete" aria-hidden="true">#</a> 6. DELETE</h4>
<p>就像它的名字一样，Delete 方法通过特定的 URL 删除服务器对应资源。<br>
此外，就像 Get 方法一样，没有请求的body体。</p>
<h4 id="_7-options" tabindex="-1"><a class="header-anchor" href="#_7-options" aria-hidden="true">#</a> 7. OPTIONS</h4>
<p>与其他方法相比，这不是一种广泛使用的方法。它返回指定给定 URL 处服务器支持的不同方法和操作的数据。此外，它使用 Allow 标头进行响应，给出资源允许的 HTTP 方法列表。</p>
<p>简单来说，就是可以用 OPTIONS 请求去嗅探某个请求在对应的服务器中都支持哪种请求方法。</p>
<p>OPTIONS 请求就是预检请求，可用于检测服务器允许的 http 方法。当发起跨域请求时，由于安全原因，触发一定条件时浏览器会在正式请求之前自动先发起 OPTIONS 请求，即 CORS 预检请求，服务器若接受该跨域请求，浏览器才继续发起正式请求。<br>
<img src="https://cdn.jsdelivr.net/gh/testeru-top/top-images/restassured/202208151516918.png" alt="" loading="lazy"></p>
<h2 id="http-字段" tabindex="-1"><a class="header-anchor" href="#http-字段" aria-hidden="true">#</a> HTTP 字段</h2>
<p>HTTP 请求包括：请求行、零个或多个请求头、可选的请求body。</p>
<figure><img src="@source/zh/guide/interface/assets/20230725161253.png" alt="HTTP 字段" tabindex="0" loading="lazy"><figcaption>HTTP 字段</figcaption></figure>
<p>当我们向服务器发送 HTTP 请求时，几个公共字段发挥着关键作用。让我们剖析其中的一些。</p>
<ul>
<li>
<p>Host ：这是服务器的域名。</p>
</li>
<li>
<p>Content-Length ：请求或响应标头中的该字段在数据传输中起着至关重要的作用。它具体指示请求或响应正文的大小（以字节为单位）。这有助于接收方了解当前消息何时结束，并为下一条消息做好准备，特别是在通过同一连接发送多个 HTTP 消息的情况下。</p>
</li>
<li>
<p>User-Agent：让服务器识别应用程序、操作系统、供应商和版本。</p>
</li>
<li>
<p>Connection ：控制网络连接。换句话说，在事务之后终止或继续连接。</p>
</li>
<li>
<p>Content-type ：该字段告诉客户端它正在接收的数据的格式。</p>
</li>
<li>
<p>Content-encoding ：该字段指示数据使用的压缩格式。例如，如果客户端看到“gzip”编码，它就知道需要解压缩数据。</p>
</li>
<li>
<p>Cache-Control：指定浏览器缓存策略。</p>
</li>
<li>
<p>Accept-Language：表示客户可以理解的所有语言（自然）。</p>
</li>
</ul>
<figure><img src="@source/zh/guide/interface/assets/20230725162710.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>打开浏览器开发人员工具「F12」并在地址栏输入 URL 之前开发者工具打开网络。</p>
</blockquote>
<h2 id="get-与-post-区别" tabindex="-1"><a class="header-anchor" href="#get-与-post-区别" aria-hidden="true">#</a> get 与 post 区别</h2>
<p>GET 和 POST 方法的区别是面试中最常见的问题。</p>
<table>
<thead>
<tr>
<th>请求/不同点</th>
<th>GET</th>
<th>POST</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>数据传递方式</strong></td>
<td>数据通过标头传递</td>
<td>数据通过body传递</td>
</tr>
<tr>
<td><strong>数据大小</strong></td>
<td>数据大小限制为 255 个字符</td>
<td>数据大小没有限制</td>
</tr>
<tr>
<td><strong>数据安全性</strong></td>
<td>数据是通过 URL，传递因此不安全</td>
<td>数据是安全的，因为它没有被暴露「表单提交」</td>
</tr>
<tr>
<td><strong>等待响应方式</strong></td>
<td>GET 请求在发送下一个请求之前等待上一个请求的响应</td>
<td>POST 请求在点击下一个请求之前不会等待上一个请求的成功响应</td>
</tr>
<tr>
<td><strong>是否缓存</strong></td>
<td>可以缓存</td>
<td>不能缓存</td>
</tr>
<tr>
<td><strong>是否添加书签</strong></td>
<td>可以加书签</td>
<td>不能添加书签</td>
</tr>
<tr>
<td><strong>性能</strong></td>
<td>与 POST 相比，性能更好，因为这些值默认附加到 URL</td>
<td>与 GET 相比，性能效率较低，因为我们花了一些时间在 POST 请求中包含请求body体</td>
</tr>
<tr>
<td><strong>参数的数据类型</strong></td>
<td>只允许字符串数据类型</td>
<td>对数据类型没有限制</td>
</tr>
<tr>
<td><strong>参数是否存储</strong></td>
<td>参数存储在浏览器历史记录中</td>
<td>参数不会存储在浏览器历史记录中</td>
</tr>
<tr>
<td><strong>点击重新加载按钮，数据变化</strong></td>
<td>如果我们点击重新加载按钮，对数据没有影响</td>
<td>如果我们点击重新加载按钮，表单数据会重置</td>
</tr>
<tr>
<td><strong>编码格式</strong></td>
<td>使用 application/x-www-form-urlencoded 编码</td>
<td>对二进制数据使用 application/x-www-form-urlencoded 或 multipart/form-data</td>
</tr>
</tbody>
</table>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>REST 主要原则：无状态、可缓存、统一接口、客户端-服务器、分层系统、可选代码</p>
</li>
<li>
<p>HTTP 协议常见的请求方式： GET、POST、PUT、DELETE、OPTIONS......</p>
</li>
<li>
<p>HTTP请求字段：Content-type、Connection、Host......</p>
</li>
<li>
<p>GET请求与POST请求区别：数据传递方式、数据大小、数据类型、安全性、性能、缓存......</p>
</li>
</ul>
<h2 id="学习反馈" tabindex="-1"><a class="header-anchor" href="#学习反馈" aria-hidden="true">#</a> 学习反馈</h2>
<ol>
<li>
<p>REST主要原则中，以下哪个不属于其原则？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> A. 无状态</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> B. 可缓存</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> C. 客户端-服务器</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> D. 数据类型</label></li>
</ul>
<blockquote>
<p>答案：D</p>
</blockquote>
</li>
<li>
<p>HTTP协议中，以下哪个不是HTTP的请求方式？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> A. GET</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> B. POST</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> C. PUT</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> D. FETCH</label></li>
</ul>
<blockquote>
<p>答案：D</p>
</blockquote>
</li>
<li>
<p>HTTP请求字段中，用于指定请求数据的类型是？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> A. Content-Type</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> B. Connection</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> C. Host</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> D. Accept-Encoding</label></li>
</ul>
<blockquote>
<p>答案：A</p>
</blockquote>
</li>
<li>
<p>HTTP协议中，用于指定请求的资源位置的字段是：</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> A. Host</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> B. Referer</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> C. User-Agent</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> D. Accept</label></li>
</ul>
<blockquote>
<p>答案：A</p>
</blockquote>
</li>
</ol>
</div></template>


