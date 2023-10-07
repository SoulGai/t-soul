<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>JMeter的bin文件夹：主jar包、启动脚本、配置文件。</li>
<li>JMeter的lib文件夹。</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>了解JMeter目录结构。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JMeter目录结构是怎样的？如何进行区分？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/20230215151817.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<img src="https://www.plantuml.com/plantuml/svg/VLDDRzD04BtdL_WSgHRSEAP749MuSQmsxgAuiXFBku5oIuHBaofHIfj4mLHDAwhIIi5LXKGTsOKVWsVNEVKlCFuG9Ed7RNRUcvatipCbnedDwwPHAAMMgLStJ68Lc4OCgZnzKk0wH-F56kNKbbyyk1d8u40SEONYlSwYKjQhOhWJ1J_XT8hleXBvmIQneRETl8hAgaMq2irYLGHI3knTmkvvxBZYS9BHDis4S1kwQqIJFm8PZEVzAgiWz5AlrhVk0Sk48_eQMwcz-myhqFe8_WS8U_7llVYaSxVQ2gFssuUBvl13wMVRNNdZPRqloB7icaLjhbE6OJYDUU9jsAdpDolFP3YKnqrn7AAyFurcv7z7N5NLB56TBQUH_NFHkfQkSxSgUyyuDPVegKouEXADRqiHoaPDOui_bd-iwwo-Uew8EFcQyEWMjyaIKxGlu6eWUlleonOXOHfwUP4s2qQnTue9DOCmPX5UYQyluPUJWjboGE-Jx8z5Vmgz4Gu5MfzdXutuh3dRwU9oP8f4knibhO_5e9M6egI5GdFIPU2W7qSf9vF8RulXz9yJzZkvOZVTMClMgvoK3Rh-o2Z06s4Ey3tOlSXdKg9uA_cz93PUqLy0" alt="uml diagram" loading="lazy">
<p>本篇文章主要来学习一下对应JMeter应用的目录结构，首先打开JMeter的文件夹，可以看到在下面又多个目录。下面根据常用顺序来说明。</p>
<h2 id="bin文件夹" tabindex="-1"><a class="header-anchor" href="#bin文件夹" aria-hidden="true">#</a> bin文件夹</h2>
<p>第一个就是bin文件夹，打开目录发现里面存放了JMeter的 <strong>主jar包</strong>、<strong>启动脚本</strong> 及 <strong>properties配置文件</strong> 等。</p>
<figure><img src="@source/zh/guide/performance/assets/20230215135833.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="jmeter的主jar包" tabindex="-1"><a class="header-anchor" href="#jmeter的主jar包" aria-hidden="true">#</a> JMeter的主jar包</h3>
<p><strong>ApacheJMeter.jar</strong> 是JMeter应用的主要jar包。</p>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>为什么说是主要jar包而不是其他依赖的jar包呢？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p>因为，JMeter应用的启动及运行都是依赖于该jar包完成。</p>
</details>
<h3 id="jmeter的启动脚本" tabindex="-1"><a class="header-anchor" href="#jmeter的启动脚本" aria-hidden="true">#</a> JMeter的启动脚本</h3>
<h4 id="脚本启动文件" tabindex="-1"><a class="header-anchor" href="#脚本启动文件" aria-hidden="true">#</a> 脚本启动文件</h4>
<p><code v-pre>jmeter</code>、<code v-pre>jmeter.sh</code>、<code v-pre>jmeter.bat</code> 都是JMeter的启动脚本。其中，<strong>Mac</strong>系统启动脚本为<code v-pre>jmeter</code>，<strong>Linux</strong>系统启动脚本为<code v-pre>jmeter.sh</code>，<strong>Window</strong>系统的启动脚本为<code v-pre>jmeter.bat</code>。</p>
<p>配置环境变量后，在命令行输入<code v-pre>jmeter</code>其实就是根据不同的系统判断对应的启动脚本为哪个文件。也可以不配置环境变量，直接点击脚本进行JMeter的启动。</p>
<h4 id="jvm参数修改" tabindex="-1"><a class="header-anchor" href="#jvm参数修改" aria-hidden="true">#</a> JVM参数修改</h4>
<p>如果想要修改JMeter启动时的JVM参数，可以直接编辑启动脚本来进行修改。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># This is the base heap size -- you may increase or decrease it to fit your</span>
<span class="token comment"># system's memory availability:</span>
<span class="token builtin class-name">:</span> <span class="token string">"${HEAP:="</span>-Xms1g <span class="token parameter variable">-Xmx1g</span> <span class="token parameter variable">-XX:MaxMetaspaceSize</span><span class="token operator">=</span>256m<span class="token string">"}"</span>
<span class="token comment"># 修改为2g</span>
<span class="token comment"># : "${HEAP:="-Xms2g -Xmx2g -XX:MaxMetaspaceSize=256m"}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改前的log启动日志：</p>
<figure><img src="@source/zh/guide/performance/assets/20230215143008.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>修改后的log启动日志：</p>
<figure><img src="@source/zh/guide/performance/assets/20230215142855.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>其中，各个参数对应的含义如下：</p>
<ul>
<li>
<p><code v-pre>XX:MaxMetaspaceSize</code>：元空间的最大增加值，该值不建议修改。</p>
</li>
<li>
<p><code v-pre>Xms</code>：JVM堆内存的最<strong>小</strong>值。</p>
</li>
<li>
<p><code v-pre>Xmx</code>：JVM堆内存的最<strong>大</strong>值。</p>
</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>建议<code v-pre>Xms</code>和<code v-pre>Xmx</code>保持一致，一般不超过物理内存最大值的<strong>50%</strong>。</p>
</div>
<h4 id="分布式运行脚本" tabindex="-1"><a class="header-anchor" href="#分布式运行脚本" aria-hidden="true">#</a> 分布式运行脚本</h4>
<p>可以看到还有<code v-pre>jmeter-server</code>相关的文件「<code v-pre>jmeter-server.bat</code>/<code v-pre>jmeter-server</code>」，这些都与JMeter的分布式运行有关，这些启动脚本时在 <code v-pre>slave</code>「负载机」上的启动脚本。</p>
<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>
<p>配置文件都是以<code v-pre>properties</code>结尾，编程语言中约定俗成的一个文件名结尾，主要介绍在bin文件夹下的3个配置文件。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>
<p><code v-pre>#</code>：表示对应行的内容为注释，相关配置信息不生效。</p>
</li>
<li>
<p>若想要对JMeter中某些配置进行更改，建议不要在原有的基础上修改，而是要复制一行进行修改。</p>
</li>
<li>
<p>一旦配置文件修改，则需要重启<code v-pre>JMeter</code>才会生效。</p>
</li>
</ul>
</div>
<h4 id="jmeter-properties" tabindex="-1"><a class="header-anchor" href="#jmeter-properties" aria-hidden="true">#</a> jmeter.properties</h4>
<p>是JMeter的默认配置文件也叫主配置文件，里面为JMeter的一些默认配置信息，其中超过80%的可配置内容都是在该文件中实现。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li><code v-pre>jmeter.properties</code>中被注释掉的原有的配置项，表示是JMeter配置项的默认值。告诉用户对应配置的默认值，并不表示生效。</li>
</ul>
</div>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>如何修改JMeter的语言为中文？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p><code v-pre>jmeter.properties</code>修改：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#Preferred GUI language. Comment out to use the JVM default locale's language.</span>
<span class="token comment">#language=en</span>
<span class="token assign-left variable">language</span><span class="token operator">=</span>zh_CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>如何修改JMeter的编码格式为UTF-8？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p><code v-pre>jmeter.properties</code>修改：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># The encoding to be used if none is provided (default ISO-8859-1)</span>
<span class="token comment">#sampleresult.default.encoding=ISO-8859-1</span>
<span class="token assign-left variable">sampleresult.default.encoding</span><span class="token operator">=</span>utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<div class="hint-container tip">
<p class="hint-container-title">思考</p>
<p>如何在JMeter的语言选择下再添加一个语言？</p>
</div>
<details class="hint-container details"><summary>Answer</summary>
<p><code v-pre>jmeter.properties</code>修改：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Additional locale(s) to add to the displayed list.</span>
<span class="token comment"># The current default list is: en, fr, de, no, es, tr, ja, zh_CN, zh_TW, pl, pt_BR</span>
<span class="token comment"># [see JMeterMenuBar#makeLanguageMenu()]</span>
<span class="token comment"># The entries are a comma-separated list of language names</span>
<span class="token comment"># 中文简体又在最后添加了一遍</span>
<span class="token comment">#locales.add=zu </span>
<span class="token assign-left variable">locales.add</span><span class="token operator">=</span>zh_CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h4 id="user-properties" tabindex="-1"><a class="header-anchor" href="#user-properties" aria-hidden="true">#</a> user.properties</h4>
<p>用户的配置文件。</p>
<h4 id="system-properties" tabindex="-1"><a class="header-anchor" href="#system-properties" aria-hidden="true">#</a> system.properties</h4>
<p>Java 应用程序使用的系统属性配置文件。由于JMeter是一个纯Java应用程序，它继承了所有默认属性并具有访问和覆盖它们的能力。</p>
<h2 id="docs文件夹" tabindex="-1"><a class="header-anchor" href="#docs文件夹" aria-hidden="true">#</a> docs文件夹</h2>
<p>存放的是JMeter的API文档。</p>
<figure><img src="@source/zh/guide/performance/assets/20230215150947.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="extras文件夹" tabindex="-1"><a class="header-anchor" href="#extras文件夹" aria-hidden="true">#</a> extras文件夹</h2>
<p><strong>扩展插件文件夹</strong>，JMeter和第三方工具集成所需的一些文件和模板，比如：<code v-pre>JMeter+ant</code>，<code v-pre>JMeter+influxdb+grafana</code>等。</p>
<figure><img src="@source/zh/guide/performance/assets/20230215151149.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>ant的jar包：提供了对Ant的支持，可以使用Ant来实现自动化测试，例如批量脚本执行，产生html格式的探索，测试运行时，可以把测试数据记录下来，Jmeter会自动生成一个.jtl文件，将该文件放到extras目录下，运行“<code v-pre>ant-Dtest=文件名report</code>&quot;，就可以生成测试统计报表。</p>
<h2 id="lib文件夹" tabindex="-1"><a class="header-anchor" href="#lib文件夹" aria-hidden="true">#</a> lib文件夹</h2>
<p>JMeter启动时的默认的classpath路径。</p>
<figure><img src="@source/zh/guide/performance/assets/20230215151339.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>在使用JMeter的过程中，所有需要引用（import）类都必须以<code v-pre>jar</code>包的方式存在于该目录。</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>一旦lib文件夹下的jar包发生改变，则需要重启JMeter才会生效。</p>
</div>
<h3 id="ext文件夹" tabindex="-1"><a class="header-anchor" href="#ext文件夹" aria-hidden="true">#</a> ext文件夹</h3>
<p>存放JMeter的组件、第三方的组件和插件的。组件、插件都是指继承了JMeter的GUI框架，在GUI模式下可见的类。</p>
<figure><img src="@source/zh/guide/performance/assets/20230215151618.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>自定义的一些加解密业务逻辑也可以写在特定java类中，生成jar包放在ext文件内引用。</p>
</blockquote>
<h2 id="printable-docs文件夹" tabindex="-1"><a class="header-anchor" href="#printable-docs文件夹" aria-hidden="true">#</a> printable_docs文件夹</h2>
<p>JMeter的官方的帮助文档。</p>
<figure><img src="@source/zh/guide/performance/assets/20230215151817.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>
<p>JMeter启动jar包路径为：bin/ApacheJMeter.jar。</p>
</li>
<li>
<p>修改JVM参数可直接在启动脚本中修改。</p>
</li>
<li>
<p>JMeter主配置文件为：bin/jmeter.properties。</p>
</li>
<li>
<p>自定义插件jar包所在目录为：lib/ext。</p>
</li>
</ul>
</div></template>


