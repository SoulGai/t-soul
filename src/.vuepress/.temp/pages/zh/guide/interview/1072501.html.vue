<template><div><h2 id="tcp与udp的区别" tabindex="-1"><a class="header-anchor" href="#tcp与udp的区别" aria-hidden="true">#</a> tcp与udp的区别</h2>
<ul>
<li>TCP ：面向连接、错误重传、拥塞控制，适用于可靠性高的场景</li>
<li>UDP：不需要提前建立连接，实现简单，适用于实时性高的场景</li>
</ul>
<h2 id="get与post的区别" tabindex="-1"><a class="header-anchor" href="#get与post的区别" aria-hidden="true">#</a> Get与Post的区别</h2>
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
<td>对数据类型没有限制，可以传文件<br>支持form、json、xml、binary等各种数据格式</td>
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
<ul>
<li>http的method字段不同</li>
<li>post可以附加body，可以支持form、json、xml、binary等各种数据格式</li>
<li>行业通用的规范
<ul>
<li>无状态变化的建议使用get请求</li>
<li>数据的写入与状态修改建议用post</li>
</ul>
</li>
</ul>
<h2 id="session与cookie的区别" tabindex="-1"><a class="header-anchor" href="#session与cookie的区别" aria-hidden="true">#</a> Session与Cookie的区别</h2>
<ul>
<li>cookie：浏览器接受服务器的Set-Cookie指令，并把cookie保存到电脑上，每个网站保存的cookie只作用于自己的网站</li>
<li>session：数据存储到服务端，只把关联数据的一个加密串放到cookie中标记</li>
</ul>
<p>token应用场景<br>
凭借认证信息获取token，或者通过后台配置好token<br>
在相关请求中使用token，多数是以query参数的形态提供</p>
<p>参考OAuth认证、企业微信、微信、github、gitlab等相关认证</p>
<ul>
<li>token是一个用户请求时附带的请求字段，用于验证身份与权限</li>
<li>session可以基于cookie，也可以基于query参数，用于关联用户相关数据</li>
<li>跨端应用的时候，比如android原生系统不支持cookie
<ul>
<li>需要用token识别用户</li>
<li>需要用把sessionid保存到http请求中的header或者query字段中</li>
</ul>
</li>
</ul>
<h2 id="打开一个网站会发生什么过程" tabindex="-1"><a class="header-anchor" href="#打开一个网站会发生什么过程" aria-hidden="true">#</a> 打开一个网站会发生什么过程</h2>
<p>浏览器层：cookie、js、css、界面渲染与交互<br>
网络层：浏览器发起网络请求、服务器返回响应</p>
<h2 id="百度-tcp三次握手过程" tabindex="-1"><a class="header-anchor" href="#百度-tcp三次握手过程" aria-hidden="true">#</a> 百度：tcp三次握手过程</h2>
<h2 id="常用的接口测试工具是什么" tabindex="-1"><a class="header-anchor" href="#常用的接口测试工具是什么" aria-hidden="true">#</a> 常用的接口测试工具是什么</h2>
<h2 id="如何抓取手机端的数据包" tabindex="-1"><a class="header-anchor" href="#如何抓取手机端的数据包" aria-hidden="true">#</a> 如何抓取手机端的数据包</h2>
<h2 id="头条-从nginx日志中分析某个接口的平均响应时间" tabindex="-1"><a class="header-anchor" href="#头条-从nginx日志中分析某个接口的平均响应时间" aria-hidden="true">#</a> 头条：从Nginx日志中分析某个接口的平均响应时间</h2>
<h2 id="头条-某地区资讯访问异常如何排查定位问题" tabindex="-1"><a class="header-anchor" href="#头条-某地区资讯访问异常如何排查定位问题" aria-hidden="true">#</a> 头条：某地区资讯访问异常如何排查定位问题</h2>
<h2 id="接口测试怎么做的-收益如何" tabindex="-1"><a class="header-anchor" href="#接口测试怎么做的-收益如何" aria-hidden="true">#</a> 接口测试怎么做的，收益如何</h2>
<h2 id="设计一个代理工具-给出思路" tabindex="-1"><a class="header-anchor" href="#设计一个代理工具-给出思路" aria-hidden="true">#</a> 设计一个代理工具，给出思路</h2>
<h2 id="如果分析接口测试的覆盖率统计数据" tabindex="-1"><a class="header-anchor" href="#如果分析接口测试的覆盖率统计数据" aria-hidden="true">#</a> 如果分析接口测试的覆盖率统计数据</h2>
<h2 id="如何从线上提取日志重放并分析结果" tabindex="-1"><a class="header-anchor" href="#如何从线上提取日志重放并分析结果" aria-hidden="true">#</a> 如何从线上提取日志重放并分析结果</h2>
<p>python 必考题：<br>
1.迭代器和生成器的区别<br>
<a href="http://2.is" target="_blank" rel="noopener noreferrer">2.is<ExternalLinkIcon/></a> 和==号的区别<br>
3.pytest 中如何进行跳过<br>
4.pytest 中如何进行绝对优先<br>
5.pytest 中如何进行请求头鉴权</p>
<p>功能：<br>
1.测试用例设计方法，举例说明<br>
<a href="http://2.web/app%E7%99%BB%E9%99%86%E9%A1%B5%E9%9D%A2%E7%94%A8%E4%BE%8B%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">2.web/app登陆页面用例设计<ExternalLinkIcon/></a><br>
3.如何进行测试用例质量保障<br>
4.百度搜索写个测试用例<br>
5.支付宝/微信提现逻辑<br>
6.购物车模块测试用例<br>
7.朋友圈测试用例</p>
</div></template>


