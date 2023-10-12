<template><div><p>arcticons:projectm</p>
<h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>权限管理系统-RBAC 概念</li>
<li></li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li></li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
</div>
<h2 id="rbac" tabindex="-1"><a class="header-anchor" href="#rbac" aria-hidden="true">#</a> RBAC</h2>
<figure><img src="@source/zh/guide/edu/assets/rbac.png" alt="rbac" tabindex="0" loading="lazy"><figcaption>rbac</figcaption></figure>
<h2 id="系统通用架构划分" tabindex="-1"><a class="header-anchor" href="#系统通用架构划分" aria-hidden="true">#</a> 系统通用架构划分</h2>
<figure><img src="@source/zh/guide/edu/assets/20230924153357.png" alt="springcloud基本架构" tabindex="0" loading="lazy"><figcaption>springcloud基本架构</figcaption></figure>
<h2 id="在线教育模块划分" tabindex="-1"><a class="header-anchor" href="#在线教育模块划分" aria-hidden="true">#</a> 在线教育模块划分</h2>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuj1IUpbdnVDV-PrDdlcZQnAMbfV1yoefd7TkVhLZuTEvq4F_5-dtFLtGZyTSjUjex5S5_3jIveW71VpPb_PFTCv3uSvjVpfo0u3_TkV_fn2ua-MqTpnhNG_aEgK1dGPq6OWCT3000" alt="uml diagram" loading="lazy">
<h2 id="开发规约" tabindex="-1"><a class="header-anchor" href="#开发规约" aria-hidden="true">#</a> 开发规约</h2>
<h3 id="服务命名" tabindex="-1"><a class="header-anchor" href="#服务命名" aria-hidden="true">#</a> 服务命名</h3>
<p>规律：edu-XXX(服务名称)-boot</p>
<div class="hint-container warning">
<p class="hint-container-title">服务名</p>
<ul class="task-list-container">
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> <code v-pre>edu-message-boot</code>：留言模块</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> <code v-pre>edu-comment-boot</code>：消息模块</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> <code v-pre>edu-ad-boot</code>：广告模块</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> <code v-pre>edu-user-boot</code>：用户模块</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> <code v-pre>edu-order-boot</code>：订单模块</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> <code v-pre>edu-authority-boot</code>：权限模块</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> <code v-pre>edu-boss-boot</code>：课程模块</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> <code v-pre>edu-pay-boot</code>：支付模块</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> <code v-pre>edu-common</code></label></p>
</li>
</ul>
</div>
<h3 id="url-命名" tabindex="-1"><a class="header-anchor" href="#url-命名" aria-hidden="true">#</a> URL 命名</h3>
<p><strong>查询</strong>: <code v-pre>http://xxx.edu.com/front/course/getlist</code> ---  get 开头</p>
<p><strong>保存</strong>: <code v-pre>http://xxx.edu.com/front/course/saveXx</code>  ---  save 开头</p>
<p><strong>更新</strong>: <code v-pre>http://xxx.edu.com/front/course/updateXx</code> ---  update 开头</p>
<h3 id="接口响应格式" tabindex="-1"><a class="header-anchor" href="#接口响应格式" aria-hidden="true">#</a> 接口响应格式</h3>
<p>该接口规范适用于前端与后端交互，后端各个服务之间交互。</p>
<ul>
<li>
<p><code v-pre>content</code>：用于封装业务数据</p>
</li>
<li>
<p><code v-pre>state</code> 响应码</p>
</li>
<li>
<p><code v-pre>message</code>：提示信息</p>
</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">响应模版</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"自定义业务数据"</span><span class="token punctuation">,</span>
    <span class="token property">"state"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"自定义消息，用于前端显示"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="接口文档" tabindex="-1"><a class="header-anchor" href="#接口文档" aria-hidden="true">#</a> 接口文档</h3>
<p>跟前端交互的接口文档建议选择 <code v-pre>swagger</code>。</p>
<h4 id="手写-api-文档的几个痛点" tabindex="-1"><a class="header-anchor" href="#手写-api-文档的几个痛点" aria-hidden="true">#</a> 手写 Api 文档的几个痛点</h4>
<ol>
<li>文档需要更新的时候，需要再次发送一份给前端，也就是文档更新交流不及时。</li>
<li>接口返回结果不明确。不能直接在线测试接口，通常需要使用工具，比如 postman 接口文档太多，不好管理</li>
</ol>
<h4 id="使用-swagger-的好处" tabindex="-1"><a class="header-anchor" href="#使用-swagger-的好处" aria-hidden="true">#</a> 使用 swagger 的好处</h4>
<p>Swagger 可以整合到代码中，在开发时通过注解，编写注释，自动生成将前端后台分开，不会有过分的依赖。</p>
<p>界面清晰，无论是 editor 的实时展示还是 ui 的展示都十分人性化，如果只用 markdown 来编写，又要纠结该如何展现，十分痛苦。</p>
<p>支持 Json 和 yaml 来编写 API 文档，并且支持导出为 json、yaml、markdown 等格式。</p>
<h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型" aria-hidden="true">#</a> 技术选型</h2>
<table>
<thead>
<tr>
<th>框架&amp;组件</th>
<th>版本</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Nginx</td>
<td>1.17.8</td>
<td>负载/转发</td>
</tr>
<tr>
<td>Spring Cloud</td>
<td>Greenwich.RELEASE</td>
<td>使用到的组件:<br>Eureka<br>Feign<br>Gateway<br>Hytrix<br>Ribbon<br>Config</td>
</tr>
<tr>
<td>RocketMQ</td>
<td>4.7.0</td>
<td>消息队列</td>
</tr>
<tr>
<td>Rabbitmq</td>
<td>3.8.5</td>
<td>消息队列</td>
</tr>
<tr>
<td>Sentinel</td>
<td>1.7.2</td>
<td>限流降级</td>
</tr>
<tr>
<td>Alibaba Cloud OSS</td>
<td>3.1.0</td>
<td>阿里云 OSS</td>
</tr>
<tr>
<td>XXL-job</td>
<td>2.2.0</td>
<td>分布式 job</td>
</tr>
<tr>
<td>MySQL</td>
<td>5.7.28</td>
<td>数据库</td>
</tr>
<tr>
<td>Redis</td>
<td>5.0.8</td>
<td>缓存</td>
</tr>
<tr>
<td>Sharding-jdbc</td>
<td>1.5.4</td>
<td>分库分表</td>
</tr>
<tr>
<td>Swagger</td>
<td>2.9.2</td>
<td>API 接口文档</td>
</tr>
</tbody>
</table>
<p>ssh DSM/SRM luoluo@DSM/SRM IP 地址 -p SSH 端口号</p>
<h2 id="功能模块" tabindex="-1"><a class="header-anchor" href="#功能模块" aria-hidden="true">#</a> 功能模块</h2>
<h3 id="用户模块" tabindex="-1"><a class="header-anchor" href="#用户模块" aria-hidden="true">#</a> 用户模块</h3>
<img src="https://www.plantuml.com/plantuml/svg/NL3DQi904BxlK-JinLV8gmZjeT28jFPkKCJK52ieQeZKK2L1oqQqfQtnvs7CpCQJh-3g9F7dzltDxBUZFXTpJyKNxP6f9wGzvE-qN85b5D7oiFQBdWFz3ikaVEv1rSoANW2hzhRqJW3UvcHiIqsPJSBWLyL0fyX9HgEEzc8tDYDVltPWpSEDWyRaKbOYlXOhdWqt75l_j8tIjJwuTH8e8wkaQwcAi2fnvPc3jX5tiIhxfQb0mm-34KsIaHI_UIhX7mkqluu5TPzYVw_XSW33RoWtBkQm-oFSAKl_8u8cSElC8_TJIaozbqUE3tt4ylm7" alt="uml diagram" loading="lazy">
<h4 id="用户注册-登录" tabindex="-1"><a class="header-anchor" href="#用户注册-登录" aria-hidden="true">#</a> 用户注册/登录</h4>
<p><strong>功能描述</strong>：用户输入手机号、密码，点击登录。调用后端接口开始登录，如果该手机号未注册则会注册并登录(手机号+密码情况下不注册)。</p>
<p><strong>需要校验必要数据</strong>：</p>
<ol>
<li>
<p>手机号是否合法，如校验不通过提示：手机号不合法。</p>
</li>
<li>
<p>密码长度是否合法，如校验不通过提示：密码长度不合法。</p>
</li>
</ol>
<p>登录成功后返回 <code v-pre>access_token</code>、<code v-pre>refresh_token</code>，其他接口每次请求都要携带 <code v-pre>access_token</code>。</p>
<p><strong>功能接口</strong>：/front/user/login·</p>
<h2 id="系统架构图" tabindex="-1"><a class="header-anchor" href="#系统架构图" aria-hidden="true">#</a> 系统架构图</h2>
<figure><img src="@source/zh/guide/edu/assets/20231007225817.png" alt="后台架构" tabindex="0" loading="lazy"><figcaption>后台架构</figcaption></figure>
<figure><img src="@source/zh/guide/edu/assets/20231007230814.png" alt="服务间关系" tabindex="0" loading="lazy"><figcaption>服务间关系</figcaption></figure>
<h2 id="项目创建" tabindex="-1"><a class="header-anchor" href="#项目创建" aria-hidden="true">#</a> 项目创建</h2>
<figure><img src="@source/zh/guide/edu/assets/20231009234344.png" alt="项目创建" tabindex="0" loading="lazy"><figcaption>项目创建</figcaption></figure>
<p>注意：bom项目为所有依赖管理，打包方式改为pom</p>
<figure><img src="@source/zh/guide/edu/assets/20231009235431.png" alt="项目创建" tabindex="0" loading="lazy"><figcaption>项目创建</figcaption></figure>
</div></template>


