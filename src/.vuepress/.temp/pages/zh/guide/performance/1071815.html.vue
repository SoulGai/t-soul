<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>运行模块介绍</li>
<li>选项模块介绍</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>运行、选项模块使用。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JMeter请求中根据登录请求获取到的token如何传递到下一个请求接口中？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/20230719211800.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在JMeter中，后置处理器是一种用于在请求响应后处理服务器响应数据的组件。Json提取器（JSON Extractor）是后置处理器的一种，专门用于从JSON格式的响应数据中提取特定字段或值，并将其存储为JMeter变量，以供后续的请求或断言使用。</p>
<p>使用Json提取器非常有用，特别是在与RESTful API或其他返回JSON数据的服务进行交互时。通过使用Json提取器，您可以从服务器响应中提取关键信息，例如令牌、会话ID、用户ID等，以便在后续请求中使用。</p>
<figure><img src="@source/zh/guide/performance/assets/20230719211745.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


