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
<p>JMeter脚本编写完成后如何运行？对应的界面都是英文显示，不友好，如何把JMeter界面设置为中文？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="文章名" tabindex="-1"><a class="header-anchor" href="#文章名" aria-hidden="true">#</a> 文章名</h1>
<h2 id="本章要点-1" tabindex="-1"><a class="header-anchor" href="#本章要点-1" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>要点一</li>
<li>要点</li>
<li>要点</li>
<li><strong>要点</strong></li>
</ol>
<img src="https://www.plantuml.com/plantuml/svg/VP7DJeD058NtF0LhLle6B5ouD14VW2YB9gKsBSQjjJzIAIsArQYjGaCiSG6wqBP3i2ypVxo5KuQeQHftTxvpPyuzS-MweTQC4xqio7cbbof7kbeLweTgMHEtjmIZPB22W2K9BPAqOF8fI6j7ITpNZ8Fg3sH44k4y-UrQMAXhqwL3_LukqkYBf17-i6Wy9FqOJPehB8deqgDfoZaUlc4xuXmF70W2phEspUuAQnRvixo1HZuohyb3Y-dqfP4rGsHsk1xws7fc2ha9iJbZqy0vA9m7L-W2x2hA7erd-FsSKnejixk8JuA0kp9LDBMsStnQ-J-jq_-Jbhb1qCVpDd4w6pARNdOVRCZScA30HkOOJIt-NqL_l2WUILpyDCBTQPxZ38B7R396mItBXpq_U-rXruRfI90rjj9YhQkQBViR" alt="uml diagram" loading="lazy">
<h2 id="学习目标-1" tabindex="-1"><a class="header-anchor" href="#学习目标-1" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>。</li>
</ol>
<h2 id="思考-1" tabindex="-1"><a class="header-anchor" href="#思考-1" aria-hidden="true">#</a> 思考</h2>
<p>在JMeter中，除了标准的线程组之外，还有两种特殊类型的线程组：<strong>SetUp线程组</strong>（SetUp Thread Group）和<strong>TearDown线程组</strong>（TearDown Thread Group）。</p>
<p>它们在测试过程中的<strong>运行顺序</strong>分别是：<strong>SetUp</strong>线程组 -&gt; <strong>主</strong>线程组 -&gt; <strong>TearDown</strong>线程组。</p>
<h2 id="setup线程组" tabindex="-1"><a class="header-anchor" href="#setup线程组" aria-hidden="true">#</a> SetUp线程组</h2>
<p>在<strong>主线程组之前运行</strong>，最初用于<strong>设置测试环境</strong>（例如<strong>加载测试数据</strong>、<strong>提交测试配置</strong>等）。</p>
<p>这些活动可以影响主线程组的执行，故应在主线程组开始之前完成。</p>
<h2 id="主线程组" tabindex="-1"><a class="header-anchor" href="#主线程组" aria-hidden="true">#</a> 主线程组</h2>
<p>是测试计划的主要部分，包含<strong>要模拟的用户行为</strong>，例如<strong>发出HTTP请求</strong>、<strong>访问数据库</strong>等。</p>
<p>主线程组的执行将指示您系统输入各种负载的性能表现。</p>
<h2 id="teardown线程组" tabindex="-1"><a class="header-anchor" href="#teardown线程组" aria-hidden="true">#</a> TearDown线程组</h2>
<p>在<strong>主线程组之后运行</strong>，通常用于<strong>清理测试环境</strong>（例如<strong>删除测试数据</strong>、<strong>恢复初始设置</strong>等）。</p>
<p>TearDown线程组还可以用于<strong>对测试结果执行一些额外的校验</strong>操作。</p>
<img src="https://www.plantuml.com/plantuml/svg/ZLJBRjfG4Dtp5QoHa9fsNx6fr5LLLVa1r6OHARI8aBrf89Wt3I_n2WyfmMeA1ZK1OlFu6S-zroj-eNCzBW4KLTtOuxapPywS6T_0UJGOYLw4pZm1nmgTVlqI2eOzvv-3PoVUerUUw6aK3MjkScFDjGmtunxVmQVFovI1k5oonupGAxmH5uznPXJ5-1ACEpRfoWXhsU9b3IsVLunMV3c2foaKVg2FgJDM6Tl9WdF8yWDGfuTuwwBePGcFeb83TF1XbLTkdVep4z9TEdAInAW7whMV_7xYwj-Z32qD2bNMdK5TiyjreUjGp8kxc0lTY4DQGz8E9ZS7t1nAq-TzVtpyySZ_LhvUluj4laN8VaElbquS22Zg4d2UiUQAM3UH1wn-yhp-Jz0z5y74McpOfqOerLOKI1f2loNdPf6rvZbOJg24pnAaShk2O7r8J2spYltjgl4Nc689MEWpDlcECxAL68ooJ2tYo4H-1giQw4zWbBbPOZSjL0rh7gPx-Nq6Sh__1vKOMui67wPuMt43Hbb8QB87eomhfpjO1wvo12ZdH_HXSeExGXKT1wuI5JhOBycnc6MrAIlbSAoIVbcJ04P1BbYzmJATRR23zoaO2lilmfXYrnus2vKFhZUBb0lUqiWFLmcMJkyrbJGWRvAcpeJPhzwMb3LFs-q-_G3R4H2xxTuzntl1d8fr1zGcc8OxhkO3g6ExfU2ckbIM9JeYvpDCRGfAtG6Mueh-FU7GJvADuKA_s1e1V40NAYv7tExiB30nEbHZeS0WGubIPoV6HS3gf0jfv0cSuFtYtZ7Infld3m00" alt="uml diagram" loading="lazy">
<h2 id="学习目标-2" tabindex="-1"><a class="header-anchor" href="#学习目标-2" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>。</li>
</ol>
<h2 id="思考-2" tabindex="-1"><a class="header-anchor" href="#思考-2" aria-hidden="true">#</a> 思考</h2>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>线程组（Thread Group）是JMeter中一个非常重要的组件，它<strong>定义了测试计划中虚拟用户的行为</strong>。</p>
<p>线程组表示一组交互的虚拟用户，模拟真实环境中的多用户（客户端）访问。</p>
<p>线程组可以帮助你设置 参与人数「并发用户数量」、执行策略「执行过程的逻辑」以及性能测试的运行调度。</p>
<figure><img src="@source/zh/guide/performance/assets/image-20.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="添加" tabindex="-1"><a class="header-anchor" href="#添加" aria-hidden="true">#</a> 添加</h2>
<p>添加线程组，<strong>测试计划</strong>(<code v-pre>Test Plan</code>) -&gt; <strong>添加</strong>(<code v-pre>Add</code>) -&gt; <strong>线程</strong>(<code v-pre>Threads</code>) -&gt; <strong>线程组</strong>(<code v-pre>Thread Group</code>)</p>
<figure><img src="@source/zh/guide/performance/assets/20230107092806.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="界面" tabindex="-1"><a class="header-anchor" href="#界面" aria-hidden="true">#</a> 界面</h2>
<figure><img src="@source/zh/guide/performance/assets/20230608162723.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_1-在取样器错误后要执行的动作" tabindex="-1"><a class="header-anchor" href="#_1-在取样器错误后要执行的动作" aria-hidden="true">#</a> 1. 在取样器错误后要执行的动作</h3>
<blockquote>
<p>JMeter会在发送压测请求后，等待服务器返回响应。如果响应是正确的，此时没有问题，JMeter执行下一步就可以。但是如果响应的结果是错误的，出错了以后，就需要配置一下JMeter应该怎样操作。一般，出错了以后不用管，让JMeter直接执行下一步操作就可以。就是默认的<strong>继续</strong>选项。</p>
</blockquote>
<p>Action to be taken after a Sample error：<strong>在请求取样器执行错误时需要执行的下一步动作</strong>。</p>
<figure><img src="@source/zh/guide/performance/assets/20230608183109.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="继续" tabindex="-1"><a class="header-anchor" href="#继续" aria-hidden="true">#</a> 继续</h4>
<p><strong>continue</strong>：继续执行接下来的操作。</p>
<p>执行：</p>
<p><strong>线程组1</strong></p>
<p>HTTP请求1 --&gt; HTTP请求2 Error --&gt; HTTP请求3 --&gt;</p>
<p>HTTP请求1 --&gt; HTTP请求2 Error --&gt; HTTP请求3</p>
<h4 id="启动下一进程循环" tabindex="-1"><a class="header-anchor" href="#启动下一进程循环" aria-hidden="true">#</a> 启动下一进程循环</h4>
<p><strong>startnextloop</strong>：忽略错误，执行下一个循环。</p>
<blockquote>
<p>错误后的循环不再执行，启动下一个循环。</p>
</blockquote>
<p>执行：</p>
<p><strong>线程组1</strong></p>
<p>HTTP请求1 --&gt; HTTP请求2 Error --&gt;</p>
<p>HTTP请求1 --&gt; HTTP请求2 Error --&gt;</p>
<p>...</p>
<blockquote>
<p>HTTP请求2请求执行错误了，后面的请求则不执行，直接跳到下一个循环继续执行。</p>
</blockquote>
<h4 id="停止线程" tabindex="-1"><a class="header-anchor" href="#停止线程" aria-hidden="true">#</a> 停止线程</h4>
<p><strong>stopthread</strong>：退出该线程（不再进行此线程的任何操作），但是不影响当前测试计划下其他的线程组。</p>
<p>执行：</p>
<p><strong>线程组1</strong></p>
<p>HTTP请求1 --&gt; HTTP请求2 Error --&gt; 停止当前线程</p>
<h4 id="停止测试" tabindex="-1"><a class="header-anchor" href="#停止测试" aria-hidden="true">#</a> 停止测试</h4>
<p><strong>stoptest</strong>：等待当前执行的采样器结束后，结束整个测试。</p>
<p>当前线程中的请求，已经开始发送的请求，会在它请求发送完成并获得对应结果后，停止测试。</p>
<h4 id="立即停止测试" tabindex="-1"><a class="header-anchor" href="#立即停止测试" aria-hidden="true">#</a> 立即停止测试</h4>
<p><strong>stoptestnow</strong>：直接停止整个测试，当前执行的取样器可能会中断。</p>
<p>不会等着请求完全响应成功后再停止。</p>
<h3 id="_2-线程属性" tabindex="-1"><a class="header-anchor" href="#_2-线程属性" aria-hidden="true">#</a> 2. 线程属性</h3>
<h4 id="线程数" tabindex="-1"><a class="header-anchor" href="#线程数" aria-hidden="true">#</a> 线程数</h4>
<p><strong>Number of Thread (users)</strong>：模拟的用户数量，表示并发用户数量（同时操作应用程序的虚拟用户数）。</p>
<p>同时在线的人数，有可能当天访问的人数是10万，但是并不是一直都在线，有可能是7-8点的在线人数是1000，9-10点的在线人数是5万，这样累计起来的在线人数是10万。所以，日活不能作为压测的线程数。</p>
<h4 id="ramp-up时间-秒" tabindex="-1"><a class="header-anchor" href="#ramp-up时间-秒" aria-hidden="true">#</a> Ramp-up时间（秒）</h4>
<p><strong>Ramp-up Period（in seconds）</strong>：达到指定线程数所需要的时间。在<strong>设置时间内启动</strong> 所有线程「<strong>上面设置的线程数</strong>」。</p>
<blockquote>
<p>举例：线程数设置为50，此处设置为5，那么每秒启动的线程数 =&gt; 线程数50/5 = 10</p>
</blockquote>
<blockquote>
<p>JMeter从0产生50的并发需要 5秒的一个时间过程，也就是一秒加10个并发，过了5秒才能压上。真正的业务场景中，并不是系统上来就拥有很大的一个并发数，而是陆续的流量进来，有一个过程。</p>
</blockquote>
<p>在Ramp-up时间内，<strong>把请求发送出去</strong>，但是<strong>不包括请求返回结果的时间</strong>。</p>
<h4 id="循环次数" tabindex="-1"><a class="header-anchor" href="#循环次数" aria-hidden="true">#</a> 循环次数</h4>
<p><strong>Loop Count</strong>：线程组结束前每个线程循环的次数。<strong>上面设置的线程数，执行的次数</strong>。</p>
<p><strong>勾选☑️永远</strong>，若<strong>未设置运行时间</strong>，需要<strong>手动停止</strong>。</p>
<p>在每次循环内，线程组中的所有取样器和逻辑控制器将按顺序执行。</p>
<p>设置为1意味着每个虚拟用户将执行一次完整的测试过程。</p>
<figure><img src="@source/zh/guide/performance/assets/20230609114408.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>10个请求循环5次，一共是50个线程请求。</p>
</blockquote>
<h4 id="same-user-on-each-iteration" tabindex="-1"><a class="header-anchor" href="#same-user-on-each-iteration" aria-hidden="true">#</a> Same user on each iteration</h4>
<p>每次迭代都用相同的用户。</p>
<p><strong>勾选☑️</strong> 那么 JMeter 将使用相同的用户详细信息在每次迭代中运行测试。</p>
<p>如果我们不想要，那么我们可以不选中此字段。</p>
<p>希望在线程组迭代之间保留cookie 和缓存-勾选 Same user on each iteration box。</p>
<p>如果想清除 cookie 和缓存 - 不要勾选此框。</p>
<p>注意：</p>
<figure><img src="@source/zh/guide/performance/assets/20230615142934.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果<strong>线程组</strong>勾选 Same User On Each Iteration 和 <strong>HTTP 缓存管理器</strong>勾选 Clear cache each iteration，则 <strong>HTTP 缓存管理器将覆盖线程组设置</strong>。</p>
<h4 id="延迟创建线程直到需要" tabindex="-1"><a class="header-anchor" href="#延迟创建线程直到需要" aria-hidden="true">#</a> 延迟创建线程直到需要</h4>
<p><code v-pre>Delay Thread creation until needed</code>：当线程需要执行的时候，才会被创建。</p>
<p>如果<strong>不勾选</strong>，那么，在计划开始的时候，所有需要的线程就都被创建好了。</p>
<figure><img src="@source/zh/guide/performance/assets/20230609115004.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>有setUp 线程组时，勾选延迟创建线程直到需要，则运行完setUp 线程组才会创建线程组1的请求。否则会在运行前就创建线程组1的请求。</p>
</blockquote>
<p><strong>场景1:</strong></p>
<figure><img src="@source/zh/guide/performance/assets/20230615143508.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>此时，50个线程会提前创建出来，但是不发送给服务端，每5秒发送10个线程给服务端。</p>
<p><strong>场景2:</strong></p>
<figure><img src="@source/zh/guide/performance/assets/20230615143655.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>此时，50个线程不会提前创建出来，会先创建出10个线程发送给服务端，等过了1秒后再创建10个线程，再过1秒后再创建10个线程.....直到50个线程创建完成。</p>
<h4 id="调度器" tabindex="-1"><a class="header-anchor" href="#调度器" aria-hidden="true">#</a> 调度器</h4>
<p>Scheduler：<strong>勾选☑️</strong>此选项，你可以定制测试持续时间以及线程组的启动和停止时间。这在长时间测试和资源管理时非常有用。</p>
<h4 id="持续时间-秒" tabindex="-1"><a class="header-anchor" href="#持续时间-秒" aria-hidden="true">#</a> 持续时间（秒）</h4>
<p>Duration (seconds)：在此选项填入数字N，说明这个计划，从某个开始时间算起，执行N秒后结束。（会忽略 结束时间 的选项）</p>
<figure><img src="@source/zh/guide/performance/assets/20230609115604.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>100个并发执行5次，如果在60s内还未完成。JMeter也会结束你当前的压测请求，会把当前发出的请求完成，但是不会再创建新的请求实例。</p>
</blockquote>
<figure><img src="@source/zh/guide/performance/assets/20230609115825.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>把JMeter从循环次数的维度控制改编成从持续时间的一个维度去控制。100个线程不管循环请求多少次，持续压60s结束，在60s时，JMeter把当前请求完成，但是不会创建新的请求。</p>
</blockquote>
<h4 id="启动延迟-秒" tabindex="-1"><a class="header-anchor" href="#启动延迟-秒" aria-hidden="true">#</a> 启动延迟（秒）</h4>
<p>Startup delay (seconds)：在此选项填入数字N，手动点击开始执行计划，然后延迟N秒后，线程组才真正开始发送请求执行。</p>
<figure><img src="@source/zh/guide/performance/assets/20230609120342.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>设置了启动延迟20s，则在开始时，前20s是没有请求发送的，等过完20s后，才会发送请求，但是整体时间是60s，也就是发送压测请求也就40s「60-20」的时间。<br>
「<strong>发送并发请求的时间 = 持续时间（秒） - 启动延迟（秒）</strong>」</p>
</blockquote>
<blockquote>
<p>配置持续时间（秒）和启动延迟（秒）来控制每个线程组的持续时间及启动后的秒数。测试开始时，JMeter启动线程组的线程之前等待启动延迟（秒），然后运行配置的持续时间（秒）。</p>
</blockquote>
<blockquote>
<p>10个线程，启动周期为100秒。JMeter花费100秒来启动和运行所有10个线程。每个线程将在上一个线程开始后10秒「100/10」开始。<br>如果有30个线程，启动周期为120s，每个连续线程将延迟4s启动。<br>
、</p>
</blockquote>
</div></template>


