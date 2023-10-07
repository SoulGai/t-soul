<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>录制压测脚本原理</li>
<li>录制的请求流程</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>掌握录制的原理</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="代理服务器录制原理" tabindex="-1"><a class="header-anchor" href="#代理服务器录制原理" aria-hidden="true">#</a> 代理服务器录制原理</h2>
<p>本篇文章主要了解代理服务器的原理，无论是JMeter自带的代理服务器还是第三方代理录制服务器。它是通过怎样的方式把客户端的操作请求生成对应的压测脚本。</p>
<p>简单画了一下原理图，根据原理图来给大家讲解一下对应的流程：</p>
<h3 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h3>
<figure><img src="@source/zh/guide/performance/assets/20230203112219.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>当客户端没有设置代理时，直接发送请求给服务端。</p>
<p>当开启代理服务器后，代理服务器就像屏幕录制功能一样，在客户端的所有操作都会无差别的记录下来。</p>
<p>客户端发送的请求先发送给代理服务器，代理服务器存储后再把请求转发给服务端，请求内容不会进行任何的更改。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>代理服务器的<strong>功能</strong>：<strong>请求的存储并转发</strong>。</p>
</div>
<p>没有代理服务器时，服务端接收请求后，需要进行相关业务逻辑的处理，完成后需要再把响应结果返回给客户端。</p>
<p>当开启代理服务器后，代理服务器不只是对请求进行储存和转发，对应的响应也需要通过代理服务器返回给客户端。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>代理服务器的<strong>功能</strong>：<strong>请求的存储并转发</strong>、返回接口的响应。</p>
</div>
<h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3>
<p>浏览器打开百度网页，在地址栏输入<code v-pre>www.baidu.com</code>域名后回车显示百度首页。</p>
<h4 id="无代理服务器请求流程" tabindex="-1"><a class="header-anchor" href="#无代理服务器请求流程" aria-hidden="true">#</a> 无代理服务器请求流程</h4>
<p>客户端「浏览器」直接发送请求给百度服务器。<br>
对应服务器根据请求路径返回数据给客户端。</p>
<h4 id="代理服务器请求流程" tabindex="-1"><a class="header-anchor" href="#代理服务器请求流程" aria-hidden="true">#</a> 代理服务器请求流程</h4>
<p>客户端「浏览器」发送的请求<strong>通过代理服务器</strong>发送给百度服务器。</p>
<p>对应服务器根据请求的路径返回数据，然后再<strong>通过代理服务器</strong>返回给客户端。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>
<p>客户端配置代理设置后，发送的请求是通过代理服务器和服务端进行的通信。</p>
</li>
<li>
<p>客户端和代理服务器，代理服务器和服务端要能够通信。</p>
</li>
<li>
<p>客户端和代理服务器「<code v-pre>JMeter</code>」可以在同一台机器上{<strong>JMeter录制Web脚本</strong>}，也可以不在同一台机器上{<strong>JMeter录制iOS脚本</strong>}，只要在<strong>同一个网络环境</strong>下就可以。</p>
</li>
</ul>
</div>
<h3 id="代理服务器录制流程" tabindex="-1"><a class="header-anchor" href="#代理服务器录制流程" aria-hidden="true">#</a> 代理服务器录制流程</h3>
<p>无论是JMeter自身的代理服务器还是第三方的代理服务器，对应的流程大致如下：</p>
<ol>
<li>
<p>打开添加代理服务器相关组件。</p>
</li>
<li>
<p>代理服务器进行相关配置：端口、脚本路径、编码格式等等。</p>
</li>
<li>
<p>启动代理服务器，<code v-pre>JMeter</code>自身代理服务器会生成<code v-pre>CA</code>证书。</p>
</li>
<li>
<p>客户端配置证书及相关代理配置。</p>
</li>
<li>
<p>执行业务逻辑。</p>
</li>
<li>
<p>录制结束，关闭代理服务器，脚本保存。</p>
</li>
</ol>
<h4 id="ca证书作用" tabindex="-1"><a class="header-anchor" href="#ca证书作用" aria-hidden="true">#</a> CA证书作用</h4>
<p><code v-pre>CA</code>「<code v-pre>Certificate Authority</code>」：<strong>证书授权中心</strong>，负责管理和签发证书的第三方机构。</p>
<p>一般，<code v-pre>CA</code>证书必须是所有行业和所有公众都信任的、认可的，因此它具有足够的权威性。<code v-pre>CA</code>证书就是权威机构颁发的证书。</p>
<p>在本文中，生成的<code v-pre>CA</code>证书就是客户端与<code v-pre>JMeter</code>代理服务器之间的相互认可的一个信用凭证。</p>
<h2 id="代理服务器介绍" tabindex="-1"><a class="header-anchor" href="#代理服务器介绍" aria-hidden="true">#</a> 代理服务器介绍</h2>
<p>可以录制<code v-pre>JMeter</code>压测脚本的代理服务器分为<strong>两</strong>类：</p>
<ol>
<li>
<p>一类为<code v-pre>JMeter</code>自带的<strong>HTTP代理服务器</strong>；</p>
</li>
<li>
<p>一类为<strong>借助第三方工具</strong>，比如：<code v-pre>Blazemeter</code>。</p>
</li>
</ol>
<ul>
<li>
<p><code v-pre>Blazemeter</code>：是一个<strong>云测平台</strong>，有提供<code v-pre>Chrome</code>插件实现<code v-pre>Chrome</code>浏览器录制功能。</p>
</li>
<li>
<p><code v-pre>badboy</code>：只需要了解，基本弃用。</p>
</li>
</ul>
<h2 id="录制优点" tabindex="-1"><a class="header-anchor" href="#录制优点" aria-hidden="true">#</a> 录制优点</h2>
<p>录制回放上手容易，入门学习的好手段。</p>
<p>首先录制出业务功能的接口信息，再基于录制后的脚本进行优化来提高接口自动化/压测脚本的效率。</p>
<h2 id="总结【补充】" tabindex="-1"><a class="header-anchor" href="#总结【补充】" aria-hidden="true">#</a> 总结【补充】</h2>
</div></template>


