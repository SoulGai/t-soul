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
<p>什么是Xpath？为什么要用Xpath？测试过程中痛点在哪里？</p>
</div>
<h2 id="什么是xpath" tabindex="-1"><a class="header-anchor" href="#什么是xpath" aria-hidden="true">#</a> 什么是xpath</h2>
<ul>
<li>xpath 在XML中查找信息的语言</li>
<li>在XML文档中对元素和属性进行遍历</li>
<li>xpath使用路径表达式在XML文档中进行导航</li>
<li>包含一个标准函数库，是一个W3C标准</li>
<li><code v-pre>xpath</code>其实就是一个<code v-pre>path</code>「路径」,一个描述元素位置信息的路径,相当于元素的坐标</li>
<li><code v-pre>xpath</code>基于<code v-pre>XML</code>文档树状结构,是<code v-pre>XML</code>路径语言,用来查询<code v-pre>XML</code>文档中的节点</li>
</ul>
<h2 id="一般语法" tabindex="-1"><a class="header-anchor" href="#一般语法" aria-hidden="true">#</a> 一般语法</h2>
<h3 id="绝对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径" aria-hidden="true">#</a> 绝对路径</h3>
<ul>
<li>从根开始查找</li>
</ul>
<h4 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式" aria-hidden="true">#</a> 表达式</h4>
<ul>
<li><code v-pre>/</code>「根路径」</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//百度搜索页面:</span>
<span class="token operator">/</span>html<span class="token operator">/</span>body<span class="token operator">/</span>div<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">/</span>div<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">/</span>div<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">/</span>div<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">/</span>div<span class="token operator">/</span>form<span class="token operator">/</span>span<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">/</span>input
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h4>
<ul>
<li>绝对路径以单个<code v-pre>/</code>表示,而且是让解析引擎从文档的根节点开始,也就是<code v-pre>html</code>这个节点下开始解析，<strong>逐级往下</strong></li>
<li>对应层级不跳跃</li>
</ul>
<h4 id="下标区分元素" tabindex="-1"><a class="header-anchor" href="#下标区分元素" aria-hidden="true">#</a> 下标区分元素</h4>
<ul>
<li>第一个元素的下标是1不是0</li>
</ul>
<h5 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> <code v-pre>[1]</code></h5>
<ul>
<li>上级节点下的第一个div元素</li>
</ul>
<h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4>
<ul>
<li>一旦页面结构发生变化,「重新设计/路径减少」这个路径也就失效了,必须重新写</li>
<li>不是因为太长，是因为受其他元素影响，关联性太强</li>
</ul>
<h3 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h3>
<ul>
<li>只要不是<code v-pre>/</code>开头的就是相对路径</li>
</ul>
<h4 id="表达式-1" tabindex="-1"><a class="header-anchor" href="#表达式-1" aria-hidden="true">#</a> 表达式</h4>
<ul>
<li><code v-pre>//</code>
<ul>
<li>表示让<code v-pre>xpath</code>从文档中<strong>任意符合元素节点</strong>开始进行解析</li>
</ul>
</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//*

//span

//*[@id="ember62"]/td[1]
//*[@name='wd']

//input[@name='wd']

//input[last()]
//*[@id="ember62"]/td[last()]

//*[@id="ember62"]/td[last()-1]

//*[@id="ember62"]/td[position()&lt;3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基本描述" tabindex="-1"><a class="header-anchor" href="#基本描述" aria-hidden="true">#</a> 基本描述</h4>
<h5 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <code v-pre>//</code></h5>
<ul>
<li>匹配指定节点</li>
</ul>
<h5 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> <code v-pre>*</code></h5>
<ul>
<li>通配符,匹配任意元素节点</li>
</ul>
<h5 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> <code v-pre>@</code></h5>
<ul>
<li>选取属性</li>
</ul>
<h5 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> <code v-pre>[]</code></h5>
<ul>
<li>属性判断条件表达式</li>
</ul>
<h5 id="last" tabindex="-1"><a class="header-anchor" href="#last" aria-hidden="true">#</a> <code v-pre>last()</code></h5>
<ul>
<li>上级节点下的最后一个标签</li>
</ul>
<h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4>
<h5 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> <code v-pre>//*</code></h5>
<ul>
<li>所有标签</li>
</ul>
<h5 id="span" tabindex="-1"><a class="header-anchor" href="#span" aria-hidden="true">#</a> <code v-pre>//span</code></h5>
<ul>
<li>通过元素名定位</li>
<li>所有<code v-pre>span</code>标签</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//input</span>
获取页面所有input元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="id-ember62" tabindex="-1"><a class="header-anchor" href="#id-ember62" aria-hidden="true">#</a> <code v-pre>//*[@id=&quot;ember62&quot;]</code></h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[@属性名='属性值']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>使用元素名+属性</li>
<li>结合路径法</li>
<li>任意属性都支持</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//*[@id='phone']</span>

容易重复的属性建议缩小搜索范围
<span class="token comment">//input[@name='phone']</span>

<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> value<span class="token operator">=</span><span class="token string">"百度一下"</span> id<span class="token operator">=</span><span class="token string">"su"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn self-btn bg s_btn"</span><span class="token operator">></span>

<span class="token comment">//input[@class='btn self-btn bg s_btn']</span>


<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"s-menu-item"</span> data<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>导航<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"s-menu-item-underline"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

所有元素都可以用
<span class="token comment">//span[@data-id='1']</span>

<span class="token operator">/</span>html<span class="token comment">//span[@data-id='1']</span>

运算符
<span class="token comment">//*[@height='16']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-1" tabindex="-1"><a class="header-anchor" href="#_1-1" aria-hidden="true">#</a> <code v-pre>[1]</code></h5>
<ul>
<li>通过元素名+索引定位</li>
<li><code v-pre>id=&quot;ember62&quot;</code>下的第一个td标签</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//*[@id="ember62"]/td[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//form/div[1]/input</span>

获取手机号输入框
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="last-1" tabindex="-1"><a class="header-anchor" href="#last-1" aria-hidden="true">#</a> <code v-pre>[last()]</code></h5>
<ul>
<li><code v-pre>id=&quot;ember62&quot;</code>下的最后一个td标签</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//*[@id="ember62"]/td[last()]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>只有1个的情况下也是最后一个</li>
</ul>
<h5 id="last-1-1" tabindex="-1"><a class="header-anchor" href="#last-1-1" aria-hidden="true">#</a> <code v-pre>[last()-1]</code></h5>
<ul>
<li><code v-pre>id=&quot;ember62&quot;</code>下的倒数第2个<code v-pre>td</code>标签</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//*[@id="ember62"]/td[last()-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="position-3" tabindex="-1"><a class="header-anchor" href="#position-3" aria-hidden="true">#</a> <code v-pre>[position()&lt;3]</code></h5>
<ul>
<li><code v-pre>id=&quot;ember62&quot;</code>下的前2个<code v-pre>td</code>标签</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//*[@id="ember62"]/td[position()&lt;3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4>
<ul>
<li>灵活,方便,耦合性低</li>
</ul>
<h3 id="特殊符号" tabindex="-1"><a class="header-anchor" href="#特殊符号" aria-hidden="true">#</a> 特殊符号</h3>
<h4 id="表达式-2" tabindex="-1"><a class="header-anchor" href="#表达式-2" aria-hidden="true">#</a> 表达式</h4>
<ul>
<li><code v-pre>.</code></li>
<li><code v-pre>..</code></li>
</ul>
<h5 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-hidden="true">#</a> <code v-pre>.</code></h5>
<ul>
<li>当前节点</li>
<li>一般不用</li>
</ul>
<h5 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> <code v-pre>..</code></h5>
<ul>
<li>父节点</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//*[@id="ember62"]/..</span>
找id<span class="token operator">=</span><span class="token string">"ember62"</span>的父节点元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>子代元素可明显、快速定位，且父代元素无明显特征</li>
</ul>
<h4 id="xpath可覆盖的基本定位" tabindex="-1"><a class="header-anchor" href="#xpath可覆盖的基本定位" aria-hidden="true">#</a> xpath可覆盖的基本定位</h4>
<ul>
<li>id</li>
<li>class</li>
<li>name</li>
<li>tagName</li>
</ul>
<h2 id="函数法" tabindex="-1"><a class="header-anchor" href="#函数法" aria-hidden="true">#</a> 函数法</h2>
<p>xpath函数</p>
<h3 id="starts-with-属性名-属性开头的值" tabindex="-1"><a class="header-anchor" href="#starts-with-属性名-属性开头的值" aria-hidden="true">#</a> <code v-pre>starts-with(@属性名,'属性开头的值')</code></h3>
<ul>
<li><code v-pre>start</code>有个<code v-pre>s</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//&lt;input type="text" class="s_ipt" name="wd" id="kw" maxlength="100" autocomplete="off"></span>
<span class="token comment">//百度首页搜索</span>
<span class="token class-name">WebElement</span> element1 <span class="token operator">=</span> webDriver<span class="token punctuation">.</span><span class="token function">findElement</span><span class="token punctuation">(</span><span class="token class-name">By</span><span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span><span class="token string">"//*[starts-with(@id,'k')]"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="contains-属性名-属性包含的值" tabindex="-1"><a class="header-anchor" href="#contains-属性名-属性包含的值" aria-hidden="true">#</a> <code v-pre>contains(@属性名,'属性包含的值')</code></h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//*[contains(@name,'phone')]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>contain</code>有个<code v-pre>s</code></li>
<li>使用元素(html元素--&gt;标签)名+包含部分属性值</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">WebElement</span> element2 <span class="token operator">=</span> webDriver<span class="token punctuation">.</span><span class="token function">findElement</span><span class="token punctuation">(</span><span class="token class-name">By</span><span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span><span class="token string">"//*[contains(@name,'usern')]"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ends-with" tabindex="-1"><a class="header-anchor" href="#ends-with" aria-hidden="true">#</a> ends-with()</h3>
<ul>
<li>Xpath 有但是selenium没有</li>
</ul>
<h3 id="text-文本的值" tabindex="-1"><a class="header-anchor" href="#text-文本的值" aria-hidden="true">#</a> <code v-pre>text()='文本的值'</code></h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//*[@text()='免费注册']</span>

<span class="token comment">//a[text()='抗击肺炎']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>替代<code v-pre>By.linkText(&quot;&quot;)</code></li>
<li>使用元素名+元素的文本内容</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//&lt;a href="http://www.baidu.com/more/" name="tj_briicon" class="s-bri c-font-normal c-color-t" target="_blank">更多&lt;/a></span>
<span class="token comment">//&lt;a href="http://www.baidu.com/more/" class="s-tab-item s-tab-more">更多&lt;/a></span>
<span class="token comment">//百度搜索页面，有2个更多，需要点击最后一个</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">WebElement</span><span class="token punctuation">></span></span> elements <span class="token operator">=</span> webDriver<span class="token punctuation">.</span><span class="token function">findElements</span><span class="token punctuation">(</span><span class="token class-name">By</span><span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span><span class="token string">"//*[text()='更多']"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>elements<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">WebElement</span> more <span class="token operator">=</span> elements<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
more<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="contains-text-文本包含的值" tabindex="-1"><a class="header-anchor" href="#contains-text-文本包含的值" aria-hidden="true">#</a> <code v-pre>contains(text(),'文本包含的值')</code></h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//*[contains(text(),'免费')]</span>

<span class="token comment">//a[contains(text(),'肺炎')]</span>

<span class="token comment">//input[contains(@type,'submi')]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>替代<code v-pre>By.partialLinkText(&quot;&quot;)</code></p>
</li>
<li>
<p>使用元素名+包含元素的部分文本内容</p>
</li>
</ul>
<h2 id="xpath-轴定位" tabindex="-1"><a class="header-anchor" href="#xpath-轴定位" aria-hidden="true">#</a> <code v-pre>Xpath</code> 轴定位</h2>
<ul>
<li>当某个元素的各个属性及其组合都不足定位的时候,可以利用兄弟节点或父节点等各种可以定位的元素进行定位</li>
</ul>
<table>
<thead>
<tr>
<th>轴名称</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ancestor</code></td>
<td>当前节点的所有祖先节点</td>
</tr>
<tr>
<td><code v-pre>parent</code></td>
<td>当前节点的父节点</td>
</tr>
<tr>
<td><code v-pre>preceding</code></td>
<td>当前节点之前的所有节点</td>
</tr>
<tr>
<td><code v-pre>preceding-sibling</code></td>
<td>当前节点之前的所有兄弟节点</td>
</tr>
<tr>
<td><code v-pre>following</code></td>
<td>当前节点后的所有节点</td>
</tr>
<tr>
<td><code v-pre>following-sibling</code></td>
<td>当前节点后的所有兄弟节点</td>
</tr>
</tbody>
</table>
<h3 id="使用语法" tabindex="-1"><a class="header-anchor" href="#使用语法" aria-hidden="true">#</a> 使用语法:</h3>
<p><code v-pre>/轴名称::节点名称[@属性=值]</code></p>
<ul>
<li>当前节点xpath定位表达式/轴名称::二次定位的元素</li>
</ul>
<h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3>
<h4 id="ancestor" tabindex="-1"><a class="header-anchor" href="#ancestor" aria-hidden="true">#</a> <code v-pre>ancestor</code></h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//input[1]/ancestor::*</span>

<span class="token comment">//div[@id='div1']/ancestor::div</span>
找id<span class="token operator">=</span><span class="token char">'div1'</span>的所有先辈（父节点）div
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>儿子有明显特征，找它的上代</li>
<li>上代本身没有可定位的属性</li>
</ul>
<h4 id="following" tabindex="-1"><a class="header-anchor" href="#following" aria-hidden="true">#</a> <code v-pre>following</code></h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//div[@id='div1']/following::*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="following-sibling" tabindex="-1"><a class="header-anchor" href="#following-sibling" aria-hidden="true">#</a> <code v-pre>following-sibling</code></h4>
<p>//input[1]/ancestor::div</p>
<p>//input[1]/ancestor-or-self:😗<br>
//input[1]/attribute::id</p>
<p>//input[1]/attribute::value</p>
<p>//input[1]/attribute:😗</p>
<p>//div[@id='div1']/child:😗</p>
<p>//div[@id='div1']/descendant:😗</p>
<p>//div[@id='div1']/descendant-or-self:😗</p>
<h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h2>
<h3 id="and" tabindex="-1"><a class="header-anchor" href="#and" aria-hidden="true">#</a> <code v-pre>and</code></h3>
<ul>
<li>多个属性拼接</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//input[@name='wd' and @autocomplete='off']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="or" tabindex="-1"><a class="header-anchor" href="#or" aria-hidden="true">#</a> <code v-pre>or</code></h3>
<ul>
<li>一般不用or来扩大元素范围</li>
</ul>
</div></template>


