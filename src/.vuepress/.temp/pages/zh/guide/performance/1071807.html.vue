<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>JMeter体系结构图</li>
<li>八大组件</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>掌握JMeter基本的八大组件。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JMeter组件之间的关系是什么样子？</p>
<p>对应编写的压测脚本是否可以更好的优化用例设计？</p>
<p>如果想要在JMeter中进行自定义开发或者扩展功能，应该如何与JMeter的组建进行集成？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="jmeter基本组件" tabindex="-1"><a class="header-anchor" href="#jmeter基本组件" aria-hidden="true">#</a> JMeter基本组件</h2>
<h3 id="八大组件" tabindex="-1"><a class="header-anchor" href="#八大组件" aria-hidden="true">#</a> 八大组件</h3>
<ol>
<li>Sampler「<strong>采样器/取样器</strong>」</li>
<li>Logic Controller「<strong>控制器</strong>」</li>
<li>Config Elements「<strong>配置元件</strong>」</li>
<li>Timer「<strong>定时器</strong>」</li>
<li>Assertions「<strong>断言</strong>」</li>
<li>Listener「<strong>监听器</strong>」</li>
<li>Pre/Post-processors 「<strong>前置/后置处理器</strong>」</li>
<li>Thread Group「<strong>线程组</strong>」</li>
</ol>
<h4 id="元件" tabindex="-1"><a class="header-anchor" href="#元件" aria-hidden="true">#</a> 元件</h4>
<p>元件代表JMeter工具菜单中一个子菜单/功能，比如：HTTP请求、JDBC 请求、事务控制器、响应断言等，就是一个元件。</p>
<blockquote>
<p>向百度服务器发送一个HTTP协议的GET请求，这个请求是由一个HTTP请求取样器来完成，这个HTTP请求取样器就是元件。</p>
</blockquote>
<p><strong>在树状组件栏中添加进来的都是元件</strong>。</p>
<h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h4>
<p>一组元件的集合（一个/多个），比如逻辑控制器中有事务控制器、仅一次控制器、循环控制器等，这些都是元件。但是它们被归类到逻辑控制器中，<strong>逻辑控制器</strong>就是组件。</p>
<h4 id="元件vs组件" tabindex="-1"><a class="header-anchor" href="#元件vs组件" aria-hidden="true">#</a> 元件VS组件</h4>
<p><strong>易错点！！！</strong></p>
<ul>
<li>
<p>多个元件叫组件。</p>
</li>
<li>
<p>元件是JMeter中最小的添加的内容。</p>
</li>
<li>
<p>组件是一个元件的集合。</p>
</li>
</ul>
<p><strong>不同的元件作用范围不同。</strong></p>
<blockquote>
<p><code v-pre>Header Manager</code>可以影响全局所有的<code v-pre>Http Sampler</code>，也可以只影响某一个<code v-pre>Http Sampler</code>，看<code v-pre>Header Manager</code>所处位置的作用范围而决定。</p>
</blockquote>
<p><strong>不同元件对应执行时序点也不同。</strong></p>
<blockquote>
<p>断言组件Assertions中查看结果树元件，就是为了校验请求是否通过。所以，Assertions元件一定是运行在Sample之后，如果上来就先运行断言组件对应的压测脚本是没有任何意义的。</p>
</blockquote>
<h3 id="jmeter结构图" tabindex="-1"><a class="header-anchor" href="#jmeter结构图" aria-hidden="true">#</a> JMeter结构图</h3>
<p>下图描述了JMeter的体系结构，本篇文章根据体系结构来了解JMeter的组成。</p>
<figure><img src="@source/zh/guide/performance/assets/20230216140127.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>上图是把八大组件拆成放在了一个三维空间中。其中X空间分为5个维度，Y空间分为2个维度，Z空间分为1个维度。</p>
<h4 id="x1-x5" tabindex="-1"><a class="header-anchor" href="#x1-x5" aria-hidden="true">#</a> X1～X5</h4>
<p>X1～X5这5个维度是负载模拟的一个过程。</p>
<blockquote>
<p>使用的就是X空间上这5个维度的组件来完成负载的模拟。</p>
</blockquote>
<h4 id="y1" tabindex="-1"><a class="header-anchor" href="#y1" aria-hidden="true">#</a> Y1</h4>
<p>Y1维度是负载模拟的<strong>部分</strong>，主要负责的是模拟用户的请求。</p>
<h4 id="y2" tabindex="-1"><a class="header-anchor" href="#y2" aria-hidden="true">#</a> Y2</h4>
<p>Y2维度是对结果的一个验证，主要是负责验证负载的结果的正确性。</p>
<blockquote>
<p>测试用例的一个结果验证。</p>
</blockquote>
<h4 id="z" tabindex="-1"><a class="header-anchor" href="#z" aria-hidden="true">#</a> Z</h4>
<p>Z维度是负载结果的收集，实际上只有一个组件<strong>监听器</strong>。</p>
<p>监听器不仅可以放在线程组组件内，也可以放在线程组组件外，所以在图中，线程组和监听器是相交的。</p>
<p>大家通过JMeter源码会发现，其实JMeter就是创建了一个大池子（线程池），然后使用<strong>多线程</strong>运行压测脚本的<strong>取样器</strong>，以此来对<strong>被测服务器</strong>产生大量负载。</p>
<p>在压测脚本运行过程中，发送请求后收到的响应会根据<strong>Y2</strong>维度的<strong>断言</strong>组件来验证结果的正确性，并通过<strong>Z</strong>维度的<strong>监听器</strong>来记录对应请求的测试结果。</p>
<p>如果<strong>取样器</strong>有<strong>参数化</strong>需求，则可通过<strong>X2</strong>维度中<strong>配置元件</strong>或者<strong>前置处理器</strong>来完成。</p>
<p>如果<strong>取样器</strong>有<strong>关联</strong>需求，则可通过<strong>X2</strong>维度中<strong>后置处理器</strong>来完成。</p>
<p>如果想要设置<strong>运行场景</strong>，比如<strong>模拟多少用户</strong>，<strong>运行多长时间</strong>，则直接设置<strong>X5</strong>维度中的<strong>线程组</strong>。</p>
<p>如果想要<strong>模拟并发场景</strong>，可以利用<strong>X4</strong>维度中的<strong>定时器</strong>。</p>
<p>如果想要<strong>控制业务的执行逻辑</strong>，比如登录的业务只运行一次，可以利用<strong>X3</strong>维度中的<strong>控制器</strong>。</p>
<h3 id="x1-取样器-采样器" tabindex="-1"><a class="header-anchor" href="#x1-取样器-采样器" aria-hidden="true">#</a> X1 取样器/采样器</h3>
<p><code v-pre>Sampler</code>也叫<strong>采样器</strong>或<strong>取样器</strong>，JMeter 可以使用采样器将特定类型的请求发送到服务器。</p>
<p>取样器主要是用来<strong>模拟用户的操作请求</strong>，比如向服务器发送HTTP请求、JDBC请求、Java请求等等。不只是<strong>向服务器发送请求</strong>还会<strong>接收服务器的响应数据</strong>。</p>
<blockquote>
<p>可以把HTTP请求元件看作一个没有界面的浏览器，它可以直接向服务器发送HTTP请求并接收服务器响应的数据。</p>
</blockquote>
<p>JMeter中所有的组件都是为取样器进行服务的。</p>
<h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h4>
<ul>
<li>向服务器发送请求</li>
<li>记录响应信息</li>
<li>记录响应时间</li>
</ul>
<p><strong>取样器</strong>是压测脚本中向服务器发送请求、记录响应信息、记录响应时间的<strong>最小单元</strong>。</p>
<h4 id="常用sampler" tabindex="-1"><a class="header-anchor" href="#常用sampler" aria-hidden="true">#</a> 常用Sampler</h4>
<ul>
<li>
<p>HTTP 请求</p>
</li>
<li>
<p>JDBC 请求</p>
</li>
<li>
<p>Java 请求</p>
</li>
<li>
<p>FTP请求</p>
<p>...</p>
</li>
</ul>
<h4 id="访问路径" tabindex="-1"><a class="header-anchor" href="#访问路径" aria-hidden="true">#</a> 访问路径</h4>
<p>取样器是线程组内部的元件，即取样器只能在线程组下添加。</p>
<p>【测试计划】 -&gt; 【线程组】 -&gt; 【添加】-&gt; 【取样器】</p>
<p>注意⚠️：取样器必须在线程组下才能添加。</p>
<figure><img src="@source/zh/guide/performance/assets/20230216153418.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序" aria-hidden="true">#</a> 执行顺序</h4>
<p>按照测试计划树的顺序从上到下执行。</p>
<p>取样器配合控制器，可以修改取样器的执行顺序和次数。</p>
<h3 id="x1-断言" tabindex="-1"><a class="header-anchor" href="#x1-断言" aria-hidden="true">#</a> X1 断言</h3>
<p>在 JMeter 中，断言主要是用来验证发送到服务器的请求的响应，就是用一个预期结果「值、表达式、时间长短等条件」与请求的实际结果进行匹配的过程。如果匹配上则成功，反之就失败。</p>
<blockquote>
<p>写过自动化用例的同学应该对断言这个含义不陌生，对应的每一个测试用例在运行完获取结果后都需要进行断言才能判断当前的用例是通过还是失败。</p>
</blockquote>
<p>如果断言需要应用于特定的取样器（请求），则断言应放在采样器子级路径下。</p>
<h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h4>
<p>JMeter中断言的原理：<br>
在请求的返回中增加一层判断机制。因为哪怕请求成功了，并不代表当前的返回结果是我们的预期结果。</p>
<blockquote>
<p>比如：HTTP请求成功了，只是说这个请求路径及协议成功，并不代表当前请求的业务逻辑正确。</p>
</blockquote>
<p>一个取样器中可以添加多个断言，根据请求需要检查的结果来添加相应的断言，多个断言的添加是并的关系，不是或的关系。<br>
当取样器下所有的断言都通过，该取样器才算请求成功。</p>
<h4 id="常用断言" tabindex="-1"><a class="header-anchor" href="#常用断言" aria-hidden="true">#</a> 常用断言</h4>
<ul>
<li>
<p>响应断言</p>
</li>
<li>
<p>Json断言</p>
</li>
<li>
<p>BeanShell断言</p>
</li>
<li>
<p>Xpath断言</p>
<p>...</p>
</li>
</ul>
<h4 id="访问路径-1" tabindex="-1"><a class="header-anchor" href="#访问路径-1" aria-hidden="true">#</a> 访问路径</h4>
<p>【测试计划】 -&gt; 【断言】</p>
<figure><img src="@source/zh/guide/performance/assets/20230216155406.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="x1-监听器" tabindex="-1"><a class="header-anchor" href="#x1-监听器" aria-hidden="true">#</a> X1 监听器</h3>
<p>监听器是对测试结果进行处理和可视化展示的一系列组件。监听器可以显示取样器的请求和响应细节及请求结果，包括：请求头、响应头、请求的数据、响应的数据。</p>
<p>JMeter中运行的测试结果需要添加监听器来验证，监听器有2个任务：</p>
<ol>
<li>
<p>添加结果的监听，并可以保存测试结果到文件，这样结果数据可供再次分析使用。</p>
</li>
<li>
<p>展示结果，监听器可以以不同的格式显示结果，例如树、表格、图形或日志文件；方便测试人员分析测试结果。</p>
</li>
</ol>
<figure><img src="@source/zh/guide/performance/assets/Listners.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>开发脚本时，不可避免的就是调试，监听器也提供了辅助，比如：查看结果树，可以看到请求与响应数据。</p>
</blockquote>
<p>监听器可以添加到测试计划列表下的任何地方。它会从其范围内定义的元件中收集结果数据。</p>
<h4 id="访问路径-2" tabindex="-1"><a class="header-anchor" href="#访问路径-2" aria-hidden="true">#</a> 访问路径</h4>
<p>【测试计划】 -&gt; 【监听器】</p>
<figure><img src="@source/zh/guide/performance/assets/20230216155847.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4>
<ol>
<li>
<p>监听器位置不同对应查看的结果不同。</p>
<blockquote>
<p>监听器在具体线程组下，只查看该线程组下所有请求的结果；<br>监听器放在具体取样器元件下，只查看该取样器的请求结果；<br>监听器放在某控制节点下，则只查看此控制器下节点所有取样器执行的结果。</p>
</blockquote>
</li>
<li>
<p>监听器是压测脚本调试用，实际压测时禁用。</p>
<blockquote>
<p>压测时大量请求，启用监听器时打印日志比较多，会造成大IO消耗，影响压力机/负载机的性能。</p>
</blockquote>
</li>
<li>
<p>不通监听器通过不通方式展示服务器的响应信息。但是原始的结果数据都一样。</p>
</li>
<li>
<p>JMeter监听器有2种方式存储记录：</p>
<ol>
<li>默认csv格式。占磁盘空间少，推荐。</li>
<li>xml格式保存，数据保存最全面但占内存大。</li>
</ol>
</li>
</ol>
<h3 id="x1总结" tabindex="-1"><a class="header-anchor" href="#x1总结" aria-hidden="true">#</a> X1总结</h3>
<p>【取样器】、【断言】、【监听器】组合在一起就可以帮助我们完成发送请求、验证结果及记录结果三项基本工作。</p>
<p>到此就可以使用以上组件来构建一个简单的压测脚本。</p>
<h3 id="x2-前置处理器" tabindex="-1"><a class="header-anchor" href="#x2-前置处理器" aria-hidden="true">#</a> X2 前置处理器</h3>
<p>前置处理器（Pre-processors）是在取样器执行之<strong>前</strong>运行的一类组件。</p>
<p>一般用来完成一些前置性的工作，所以经常用于在样本请求执行之前去修改样本请求的设置。</p>
<p>测试脚本开发过程中，在请求发送前可能会有一些环境或者参数的准备工作，那就可以用前置处理器来完成这些工作。</p>
<blockquote>
<p>比如 JDBC请求对数据库进行操作前需要建立一个数据库的连接，那前置处理器就可以完成这个数据库建立连接的功能。</p>
</blockquote>
<h4 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1" aria-hidden="true">#</a> 作用</h4>
<p>前置处理器用来处理请求在实际发送之前的一些准备工作，比如：<strong>取样器参数设置</strong>、<strong>环境变量设置</strong>、<strong>脚本预处理</strong>等。</p>
<blockquote>
<p>URL中有sessionID一类的session信息时，可以通过前置处理器填发出请求实际的sessionID。</p>
</blockquote>
<h4 id="常用前置处理器" tabindex="-1"><a class="header-anchor" href="#常用前置处理器" aria-hidden="true">#</a> 常用前置处理器</h4>
<ul>
<li>
<p>用户参数</p>
</li>
<li>
<p>BeanShell 预处理程序</p>
</li>
<li>
<p>JDBC 预处理程序</p>
<p>...</p>
</li>
</ul>
<h4 id="访问路径-3" tabindex="-1"><a class="header-anchor" href="#访问路径-3" aria-hidden="true">#</a> 访问路径</h4>
<p>【测试计划】 -&gt; 【前置处理器】</p>
<p>【测试计划】 -&gt; 【线程组】-&gt; 【前置处理器】</p>
<figure><img src="@source/zh/guide/performance/assets/20230220163446.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="x2-配置元件" tabindex="-1"><a class="header-anchor" href="#x2-配置元件" aria-hidden="true">#</a> X2 配置元件</h3>
<p>提供对静态数据的配置支持，可以为取样器设置默认值和变量。</p>
<blockquote>
<p>JMeter压测脚本中模拟大量用户操作、根据订单号出库等等，都需要做参数化。使用<strong>CSV 数据文件设置</strong>进行JMeter参数化，可以从文件中读取测试数据，将本地数据文件形成JMeter的数据池。<br>配置原件也可以记录请求返回的数据，使用<code v-pre>HTTP Cookie Manager</code>，自动记录服务端返回的<code v-pre>Cookie</code>信息。<br>使用<code v-pre>User Defined Variables</code>，预置一些初始化变量。如果需要生成动态数据可以使用JMeter的函数助手里面的函数表达式。</p>
</blockquote>
<h4 id="作用-2" tabindex="-1"><a class="header-anchor" href="#作用-2" aria-hidden="true">#</a> 作用</h4>
<p>配置元件为取样器提供<strong>预备数据</strong>，然后由取样器发出请求。</p>
<p>提供预备数据有：JMeter参数化、函数助手生成动态数据、记录服务器返回数据。</p>
<p>配置元件的功能: 读取文件数据、设置公共请求参数、赋予变量值等等，方便取样器使用。</p>
<blockquote>
<p>类似项目中的配置文件，如：数据库链接、公用URL等进行配置。</p>
</blockquote>
<h4 id="常用配置元件" tabindex="-1"><a class="header-anchor" href="#常用配置元件" aria-hidden="true">#</a> 常用配置元件</h4>
<ul>
<li>
<p>CSV Data Set Config</p>
</li>
<li>
<p>HTTP信息头管理器</p>
</li>
<li>
<p>用户定义的变量</p>
</li>
<li>
<p>JDBC Connection Configuration</p>
<p>...</p>
</li>
</ul>
<h4 id="访问路径-4" tabindex="-1"><a class="header-anchor" href="#访问路径-4" aria-hidden="true">#</a> 访问路径</h4>
<p>可以通过 测试计划 --&gt; 配置元件 添加Config Element，线程组也可以添加配置元件。</p>
<p>【测试计划】 -&gt; 【配置元件】</p>
<p>【测试计划】 -&gt; 【线程组】-&gt; 【配置元件】</p>
<figure><img src="@source/zh/guide/performance/assets/20230216175446.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="x2-后置处理器" tabindex="-1"><a class="header-anchor" href="#x2-后置处理器" aria-hidden="true">#</a> X2 后置处理器</h3>
<p>后置处理器（Post-processors）是在取样器执行之<strong>后</strong>运行的一类组件。用来对取样器发出请求后得到的服务器响应进行处理。一般用来提取响应中的特定数据「LoadRunner中的关联」。</p>
<p>后置处理器专门用来对响应数据进行处理的组件。关联，JMeter的关联就是通过后置处理器来完成的。</p>
<h4 id="作用-3" tabindex="-1"><a class="header-anchor" href="#作用-3" aria-hidden="true">#</a> 作用</h4>
<p>它的作用是<strong>处理响应数据</strong>提取某个值。比如正则表达式提取器（Regular Expression Extractor），使用正则表达式来匹配响应结果，提取部分数据。</p>
<blockquote>
<p>压测脚本中，不同的接口之间难免会遇到一个接口的请求参数是另一个接口的响应结果，这时就需要用后置处理器来处理请求参数。<br>如系统登录成功后要获取登录的sesesion ID，在后面请求中服务端会验证这个session ID，那JMeter获取session ID这个过程就需要后置处理器中的正则表达式提取器来完成。</p>
</blockquote>
<h4 id="访问路径-5" tabindex="-1"><a class="header-anchor" href="#访问路径-5" aria-hidden="true">#</a> 访问路径</h4>
<p>【测试计划】 -&gt; 【后置处理器】</p>
<p>【测试计划】 -&gt; 【线程组】-&gt; 【后置处理器】</p>
<figure><img src="@source/zh/guide/performance/assets/20230220163334.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="x2总结" tabindex="-1"><a class="header-anchor" href="#x2总结" aria-hidden="true">#</a> X2总结</h3>
<p>【前置处理器】、【配置元件】、【后置处理器】都是为了X1中的取样器<strong>提供数据支持</strong>，取样器关注的是对应的业务逻辑。</p>
<blockquote>
<p>就比如家人是我们的后盾，帮助我们解决工作以外的一切麻烦，让我们全身心的投入到自己的工作中。</p>
</blockquote>
<h3 id="x3-控制器" tabindex="-1"><a class="header-anchor" href="#x3-控制器" aria-hidden="true">#</a> X3 控制器</h3>
<blockquote>
<p>逻辑，主要就是条件和循环。</p>
</blockquote>
<p>控制器默认为<strong>逻辑控制器</strong>，主要对取样器组件起作用，用于控制脚本的执行流程。它用来控制线程中取样器的处理顺序，还可以更改来自其子元素的请求的顺序。</p>
<p>作用域：逻辑控制器只对其子组件有效。</p>
<h4 id="作用-4" tabindex="-1"><a class="header-anchor" href="#作用-4" aria-hidden="true">#</a> 作用</h4>
<p>控制取样器的执行顺序。</p>
<p>控制器与取样器一起使用，否则控制器就不发挥作用。在控制器下的所有取样器会当做一个整体，执行时会一起被执行。</p>
<h4 id="常用逻辑控制器" tabindex="-1"><a class="header-anchor" href="#常用逻辑控制器" aria-hidden="true">#</a> 常用逻辑控制器</h4>
<ul>
<li>仅一次控制器</li>
<li>简单控制器</li>
<li>循环控制器</li>
<li>事务控制器</li>
<li>foreach控制器</li>
<li>if控制器</li>
</ul>
<p>想要脚本中某一组请求比其他请求执行更多次，可以使用控制器来解决此目的。对应场景：接收邮件时，只需要登录一次邮箱就可以查看到多封邮件。app购物时，只需要登录一次就可以多次进行订单的付款。</p>
<p>上述场景如果想要在JMeter中实现，就需要对登录的次数进行控制。在JMeter中使用逻辑控制器中的<strong>仅一次控制器</strong>就可完成。</p>
<p><strong>简单控制器</strong>是根据您的需要存储类似请求的唯一容器。除此之外，它们不提供任何逻辑。</p>
<p>与其他请求相比，<strong>循环控制器</strong>用于使您的请求组运行更多或更少的迭代。添加一个循环控制器并指定循环次数，此元件下的所有请求将执行指定的迭代次数。</p>
<h4 id="访问路径-6" tabindex="-1"><a class="header-anchor" href="#访问路径-6" aria-hidden="true">#</a> 访问路径</h4>
<p>可以通过 测试计划 --&gt; 线程组 --&gt; 逻辑控制器 添加。</p>
<p>【测试计划】 -&gt; 【线程组】-&gt; 【逻辑控制器】</p>
<figure><img src="@source/zh/guide/performance/assets/20230217164205.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h4>
<p>逻辑控制器大概分为2类：</p>
<ul>
<li>一类为控制测试计划中的<strong>取样器</strong>发送请求的<strong>逻辑顺序</strong>的控制器，如：If控制器、switch控制器、Runtime控制器、Loop Controller（循环控制器）等。</li>
<li>一类为组织可控制的取样器节点，<strong>对测试计划中的取样器进行分组</strong>，方便JMeter统计执行结果、及脚本运行时控制操作等。如：事务控制器、吞吐量控制器等。</li>
</ul>
<h3 id="x4-定时器" tabindex="-1"><a class="header-anchor" href="#x4-定时器" aria-hidden="true">#</a> X4 定时器</h3>
<p>用来设定等待时间，可以定义每个请求之间的等待时间。</p>
<p>用户实际操作压测场景时，并不是连续的点击，而是会存在很多停顿的情况。想一下当在网站或应用程序上执行任何操作时，自然会有停顿和延迟，这些都可以用定时器模拟。</p>
<blockquote>
<p>比如：用户需要有一定时间阅读文字、填表、查找需要点击的位置链接等等。这个操作至少等待5秒后会再发送请求；<br>让多个请求等待到同一时刻发送。</p>
</blockquote>
<p>JMeter 发送请求时不会在每个取样器/请求之间有任何的延迟。如果所有取样器的请求都立即发送给服务器，此时将会超载，这不是我们模拟压测时想要的。</p>
<p>为了模拟真正的用户实际情况，在压测脚本中需要考虑用户的操作时间。如果不考虑操作时间很可能导致压测结果的失真，即最终压测报告估计的并发数可能会偏小。</p>
<p>取样器/请求之间的停顿时间称为思考时间。如何模拟思考时间？</p>
<p>可以借助JMeter定时器组件实现，不同定时器有不同功能。可以添加一个<strong>计时器</strong>元件，它<strong>定义每个请求之间的等待时间</strong>。</p>
<h4 id="作用-5" tabindex="-1"><a class="header-anchor" href="#作用-5" aria-hidden="true">#</a> 作用</h4>
<p>定时器其实就是为了足够真实的模拟用户负载。</p>
<p>定时器常用于控制客户端QPS的手段。</p>
<h4 id="常用定时器" tabindex="-1"><a class="header-anchor" href="#常用定时器" aria-hidden="true">#</a> 常用定时器</h4>
<ul>
<li>固定定时器</li>
<li>BeanShell 定时器</li>
<li>高斯随机定时器</li>
<li>统一随机定时器</li>
</ul>
<h4 id="访问路径-7" tabindex="-1"><a class="header-anchor" href="#访问路径-7" aria-hidden="true">#</a> 访问路径</h4>
<p>可以通过 测试计划 --&gt; 线程组 --&gt; 定时器 添加。</p>
<p>【测试计划】 -&gt; 【线程组】-&gt; 【定时器】</p>
<figure><img src="@source/zh/guide/performance/assets/20230217171350.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="执行顺序-1" tabindex="-1"><a class="header-anchor" href="#执行顺序-1" aria-hidden="true">#</a> 执行顺序</h4>
<p>JMeter中的定时器一般用来设置延迟与同步「请求操作之间的等待之间」。</p>
<p>定时器的执行优先级 &gt; 取样器。</p>
<p>如果在同一作用域下（同一个控制器下）有多个定时器存在时，每一个定时器都会执行。</p>
<p>如果想让某一个定时器只对某一个取样器有效，则需要把定时器放在这个取样器节点下。</p>
<h3 id="x5-线程组" tabindex="-1"><a class="header-anchor" href="#x5-线程组" aria-hidden="true">#</a> X5 线程组</h3>
<p>性能测试就是通过模拟大量用户负载的情况，来验证服务器端的性能。那线程组就是用来完成这个工作的，在线程组原件中我们可以设置运行的线程数即模拟用户数，一个线程就相当于一个用户。</p>
<p>线程组元件出了可以设置线程数以外，还可以设置对应的运行的时长及定时运行等。JMeter添加线程组里面虽然选项不同，名字不同但是创建后界面是完成一样的，只不过是不同的选项对应运行的规则不同。</p>
<p>具体的元件使用讲解会在后面给大家详细介绍。</p>
<ul>
<li>
<p>线程组是一个测试流程的起点。</p>
</li>
<li>
<p>线程组中可以有多个线程。</p>
<blockquote>
<p>线程组是一个线程池，即虚拟用户池。线程组中每个线程「取样器」可理解为一个虚拟用户。</p>
</blockquote>
</li>
<li>
<p>线程组中一个取样器代表一个请求链接，一个请求等于一个线程。</p>
</li>
<li>
<p>每个线程之间互不干扰，多个线程模仿对服务器的并发访问。</p>
</li>
<li>
<p>线程组元件可设置 线程数、执行次数、持续时间等操作。</p>
</li>
</ul>
<h4 id="访问路径-8" tabindex="-1"><a class="header-anchor" href="#访问路径-8" aria-hidden="true">#</a> 访问路径</h4>
<p>【测试计划】 -&gt; 【线程组】</p>
<figure><img src="@source/zh/guide/performance/assets/20230220142903.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>JMeter基本组件：取样器、断言、监听器、前置处理器、配置元件、后置处理器、控制器、定时器、线程组。</li>
<li>组件和元件的区别。「易错点！！！」</li>
<li>基本组件的常用元件。</li>
<li>基本组件的访问路径。</li>
</ul>
</div></template>



<style>
  strong {
    color: #ea6010;
    font-weight: bolder;
  }
  .reveal blockquote {
    font-style: unset;
  }
</style>