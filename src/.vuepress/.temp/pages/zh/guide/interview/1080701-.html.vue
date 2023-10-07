<template><div><h2 id="测试用例设计方法-举例说明" tabindex="-1"><a class="header-anchor" href="#测试用例设计方法-举例说明" aria-hidden="true">#</a> 测试用例设计方法，举例说明</h2>
<figure><img src="@source/zh/guide/interview/assets/v2-b7b97d4d46e33612ad72e995f9ed5251_1440w.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="等价类划分法" tabindex="-1"><a class="header-anchor" href="#等价类划分法" aria-hidden="true">#</a> 等价类划分法</h3>
<p>有这样一条测试基本原则：<strong>穷尽测试是不可能的</strong>。即使是看起来规模很小的软件产品，其输入数据的组合或逻辑路径也几乎是无穷的，也就是说，想对测试对象进行完全的检查和覆盖，基本上是不可能的。</p>
<p>划分等价类时遵循以下3个标准：</p>
<ol>
<li>
<p>完备性：划分的子集合的并集是整个集合;</p>
</li>
<li>
<p>无冗余性：子集互不相交;</p>
</li>
<li>
<p>等价性：属于同一等价类的测试数据，映射到”相同的执行路径&quot;。</p>
</li>
</ol>
<blockquote>
<p>在划分等价类的时候不仅要考虑合理的、有意义的输入数据构成的集合，还要考虑不合理的或无意义的输入数据所构成的集合。我们将前者称为有效等价类，它能验证需求是否实现，后者则为无效等价类，能检验是否会出现异常。无效等价类至少应有一个，也可能有多个，视具体情况而定。</p>
</blockquote>
<h4 id="年份" tabindex="-1"><a class="header-anchor" href="#年份" aria-hidden="true">#</a> 年份</h4>
<p>需求：要求用户输入年份，年份限定在2020年~2023年，由4位数字表示。</p>
<p>使用等价类划分法，首先确定<strong>有效等价类</strong>：4位数字字符且年份为2020~2023，然后确定<strong>无效等价类</strong>：如<strong>输入的类型</strong>和<strong>长度不合理</strong>，<strong>年份超出范围</strong>等，具体如下表所示：</p>
<p><strong>有效等价类</strong>：</p>
<p>【1】4位数字字符且年份为2020~2023，比如：2020</p>
<p><strong>无效等价类</strong>：</p>
<p>【2】输入存在英文等非法字符，比如：2A20</p>
<p>【3】输入小于4位数，比如：222</p>
<p>【4】输入大于4位数，比如：20231</p>
<p>【5】输入小于2020的数，比如：2019</p>
<p>【6】输入大于2023的数，比如：2024</p>
<h3 id="边界值" tabindex="-1"><a class="header-anchor" href="#边界值" aria-hidden="true">#</a> 边界值</h3>
<p>从过往的经验来看，大量的错误发生在输入或输出范围的边界上，而不是在输入输出范围的内部。因此针对各种边界情况设计测试用例，有很大的概率可以查出更多的错误。这种<strong>对输入或输出的边界值进行测试的方法就是边界值法</strong>。</p>
<p>边界值法多用于对数据进行测试，在数据测试的时候，除了要关注<strong>边界值</strong>还要关注<strong>默认值</strong>，<strong>空白</strong>，<strong>空值</strong>，<strong>零</strong>值和<strong>无</strong>。除上述常规数据外，非常规的数据还要关注<strong>非法值</strong>、<strong>错误值</strong>、<strong>不正确值</strong>和<strong>垃圾数据</strong>，即<strong>所有可能的无效等价类数据</strong>。</p>
<p>具体应用边界值法时，应当选取正好等于，刚刚大于或刚刚小于边界的值作为测试数据，而不是选取等价类中的典型值或任意值作为测试数据。要特别说明的是，使用边界值法不仅只考虑输入数据，也应该考虑输出数据。</p>
<h4 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h4>
<p><strong>需求</strong>：在首页搜索框内输入关键词搜索感兴趣的内容。如在豆瓣搜索“星际穿越”。</p>
<p>使用边界值法设计测试用例，覆盖输入数据和输出数据：</p>
<p><strong>关键词（输入数据）</strong>：</p>
<p>【1】为空</p>
<p>【2】关键词长度为1（最小长度）</p>
<p>【3】关键词长度为60（最大长度）</p>
<p>【4】关键词长度为61</p>
<p><strong>搜索结果（输出数据）</strong>：</p>
<p>【1】搜索结果为空</p>
<p>【2】有一个搜索结果</p>
<p>【3】有10个搜索结果（一次最多展示10条数据）</p>
<p>【4】有11个搜索结果（通过更多按钮查看）</p>
<h3 id="场景法-流程分析法" tabindex="-1"><a class="header-anchor" href="#场景法-流程分析法" aria-hidden="true">#</a> 场景法/流程分析法</h3>
<p>上面介绍的这两种方法对于单点测试是十分有效的，例如用户想使用Amazon买东西，搜索输入框的测试我们可以运用边界值法。但是搜索可能只是用户使用Amazon的第一步，Ta还可能点击某商品查看详情、将商品加入购物车、从购物车中进行结算或者使用直接购买功能结算，用户的操作会触发事件，不同事件触发的顺序不同，会形成不同的事件结果。</p>
<p><strong>根据场景来设计测试用例</strong>的方法我们称之为场景法，也称为流程分析法。使用场景法的第一步自然是画出业务流程图，通常我们能从BA/UX处获取到流程图，如果没有，那就需要自己去梳理了。</p>
<p>场景法一般包含基本流、备用流和异常流。</p>
<p>基本流表示通过业务流程时输入都正确，能达到目标；</p>
<p>备选流表示通过业务流程时输入错误（或者操作错误）导致流程存在反复，但是经过纠正后仍能达到能达到目标；『登录可以2-3次输入用户密码』</p>
<p>异常流是指通过业务流程时输入错误（或者操作错误）产生异常终止流程 。『登录输入4次密码错误抛出异常锁定账户』</p>
<p>画流程图可以先从基本流开始，也就是先确定Happy Path，然后补充备选流，最后还要考虑异常场景来确定异常流。有了流程图，就可以从中选取测试路径来构造测试用例。</p>
<h4 id="微信登录" tabindex="-1"><a class="header-anchor" href="#微信登录" aria-hidden="true">#</a> 微信登录</h4>
<p>需求：”豆瓣评分“微信小程序支持用户使用微信登录，并在登录时获取用户的手机号码。</p>
<figure><img src="@source/zh/guide/interview/assets/v2-9c5a156e7d6567736c92a4a8561b6af1_r.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="web-app登录页面用例设计" tabindex="-1"><a class="header-anchor" href="#web-app登录页面用例设计" aria-hidden="true">#</a> web/app登录页面用例设计</h2>
<p>简单的登录页面主要包括：用户名text，密码text，以及登录按钮 （有些登录页面也包含了验证码，滑块等登录页面控件）</p>
<h3 id="一、界面ui测试" tabindex="-1"><a class="header-anchor" href="#一、界面ui测试" aria-hidden="true">#</a> 一、界面UI测试</h3>
<ol>
<li>
<p>查看页面布局是否合理，输入框以及按钮是否对齐。</p>
</li>
<li>
<p>验证UI界面中的信息是否能够正确显示，并确保文字等元素在中文显示环境下正常呈现。</p>
</li>
<li>
<p>网站页面大小进行放大或者缩小，页面布局是否进行了自适应（具体到什么程度，还需要看项目需求）。</p>
</li>
<li>
<p>输入框的高度，长度。</p>
</li>
<li>
<p>登录页面是否有错别字，检查文字内容是否清晰、表意明确，避免使用错别字或模糊不清的表达。</p>
</li>
<li>
<p>密码text是否进行加密显示。</p>
</li>
</ol>
<h3 id="二、功能测试" tabindex="-1"><a class="header-anchor" href="#二、功能测试" aria-hidden="true">#</a> 二、功能测试</h3>
<ol>
<li>
<p><strong>正确的用户名和密码</strong>：使用正确的用户名和密码点击登录按钮，登录成功后页面能否正确跳转</p>
</li>
<li>
<p>错误的用户名和密码</p>
<ul>
<li>
<p>测试使用错误的用户名和密码时是否能够正确处理，并给出适当的错误提示</p>
</li>
<li>
<p>系统是否允许多次非法的登录，是否有次数限制<br>
长度限制和格式验证<br>
检查用户名和密码的长度限制和格式验证是否按照要求进行。</p>
</li>
</ul>
</li>
<li></li>
<li>
<p>登录成功之后，页面能否进行正确跳转</p>
</li>
<li>
<p>用户名和密码为空，点击登录按钮，是否有正确的提示信息<br>
用户名和密码是否有进行长度控制</p>
</li>
<li>
<p>输入text的前后都有空格，是否进行处理</p>
</li>
<li>
<p>输入含有特殊字符或其他非英文情况（可以考虑：=，\n、\r、\t、\’，null、NULL，&amp;gt ;,&amp;lt ;￥；$）</p>
</li>
<li>
<p>记住用户名，密码功能（其中根据需求也会涉及到自动登录功能）</p>
</li>
<li>
<p>登录失败之后，没有记住密码功能</p>
</li>
<li>
<p>输入密码或者用户名的时候，大写键盘开启是否有提示（在输入密码和用户名时是否有大小写校验：密码中的字符！的大小写!区分和控制）</p>
</li>
<li>
<p>输入错误的用户名和密码，显示正确的提示信息</p>
</li>
</ol>
<h3 id="三、性能测试" tabindex="-1"><a class="header-anchor" href="#三、性能测试" aria-hidden="true">#</a> 三、性能测试</h3>
<h3 id="四、安全测试" tabindex="-1"><a class="header-anchor" href="#四、安全测试" aria-hidden="true">#</a> 四、安全测试</h3>
<h3 id="五、可用性测试" tabindex="-1"><a class="header-anchor" href="#五、可用性测试" aria-hidden="true">#</a> 五、可用性测试</h3>
<h3 id="六、兼容性测试" tabindex="-1"><a class="header-anchor" href="#六、兼容性测试" aria-hidden="true">#</a> 六、兼容性测试</h3>
<p>验证是否对文本长度进行了适当的限制，并进行输入内容的验证。<br>
验证UI界面中的信息是否能够正确显示，并确保文字等元素在中文显示环境下正常呈现。</p>
<h2 id="如何进行测试用例质量保障" tabindex="-1"><a class="header-anchor" href="#如何进行测试用例质量保障" aria-hidden="true">#</a> 如何进行测试用例质量保障</h2>
<h2 id="百度搜索写个测试用例" tabindex="-1"><a class="header-anchor" href="#百度搜索写个测试用例" aria-hidden="true">#</a> 百度搜索写个测试用例</h2>
<h2 id="支付宝-微信提现逻辑" tabindex="-1"><a class="header-anchor" href="#支付宝-微信提现逻辑" aria-hidden="true">#</a> 支付宝/微信提现逻辑</h2>
<h2 id="购物车模块测试用例" tabindex="-1"><a class="header-anchor" href="#购物车模块测试用例" aria-hidden="true">#</a> 购物车模块测试用例</h2>
<h2 id="朋友圈测试用例" tabindex="-1"><a class="header-anchor" href="#朋友圈测试用例" aria-hidden="true">#</a> 朋友圈测试用例</h2>
</div></template>


