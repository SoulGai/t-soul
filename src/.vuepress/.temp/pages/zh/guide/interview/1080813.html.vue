<template><div><h2 id="什么是-adb" tabindex="-1"><a class="header-anchor" href="#什么是-adb" aria-hidden="true">#</a> 什么是 ADB？</h2>
<details class="hint-container details"><summary>Answer</summary>
<p>ADB 是 Android 调试桥的缩写，是 Android 开发工具集的一部分。它是一个命令行工具，用于在计算机和 Android 设备之间建立连接，并提供多种功能，如文件传输、应用程序安装、调试、性能分析等。</p>
</details>
<h2 id="adb-安装路径" tabindex="-1"><a class="header-anchor" href="#adb-安装路径" aria-hidden="true">#</a> adb 安装路径</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">which</span> adb
where adb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adb-版本号" tabindex="-1"><a class="header-anchor" href="#adb-版本号" aria-hidden="true">#</a> adb 版本号</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adb version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="如何连接到-android-设备或模拟器" tabindex="-1"><a class="header-anchor" href="#如何连接到-android-设备或模拟器" aria-hidden="true">#</a> 如何连接到 Android 设备或模拟器？</h2>
<ul>
<li>
<p>模拟器不需要，真机需要</p>
</li>
<li>
<p>前提条件：设备打开开发者模式；启动USB调试</p>
</li>
<li>
<p>连接⽅式：<strong>USB连接</strong>【设备线有认证】；<strong>WI-FI连接</strong>【⼿机和电脑在同⼀个Wi-Fi下】</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 获取设备ID ⼀串字⺟和数字的组合</span>
adb devices
<span class="token comment"># 设备序列号</span>
adb <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>device_serial<span class="token operator">></span> shell
<span class="token comment"># 通过IP和端口连接</span>
adb connect <span class="token number">127.0</span>.0.1:7555
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设备连接状态" tabindex="-1"><a class="header-anchor" href="#设备连接状态" aria-hidden="true">#</a> 设备连接状态</h2>
<ul>
<li>
<p><code v-pre>offline</code>：设备未连接到 adb 或没有响应。</p>
</li>
<li>
<p><code v-pre>device</code>：设备已连接到 adb 服务器。请注意，此状态并不表示 Android 系统已完全启<br>
动并可正常运⾏，因为在设备连接到 adb 时系统仍在启动。系统完成启动<br>
后，设备通常处于此运⾏状态。</p>
</li>
<li>
<p><code v-pre>no device</code>：未连接任何设备。</p>
</li>
</ul>
<details class="hint-container details"><summary>指定设备</summary>
<p><code v-pre>-d</code>：Android真机<br>
<code v-pre>-e</code>：模拟器<br>
<code v-pre>-s</code>：设备序列号</p>
</details>
<h2 id="如何安装应用程序到-android-设备上" tabindex="-1"><a class="header-anchor" href="#如何安装应用程序到-android-设备上" aria-hidden="true">#</a> 如何安装应用程序到 Android 设备上？</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 直接安装</span>
adb <span class="token function">install</span> path_to_apk【apk包路径】
<span class="token comment"># 覆盖安装</span>
adb <span class="token function">install</span> <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>path_to_apk<span class="token operator">></span>
<span class="token comment"># AndroidStudio模拟器覆盖安装失败，报错-113；mumu模拟器正常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何卸载应用程序" tabindex="-1"><a class="header-anchor" href="#如何卸载应用程序" aria-hidden="true">#</a> 如何卸载应用程序？</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 卸载app 直接卸载</span>
adb uninstall <span class="token operator">&lt;</span>package_name<span class="token operator">></span>【应用程序包名】
adb uninstall com.taobao.taobao
<span class="token comment"># 保留配置⽂件和数据卸载</span>
<span class="token comment"># 错误❌：adb uninstall -k &lt;package_name></span>
adb shell cmd package uninstall <span class="token parameter variable">-k</span> <span class="token operator">&lt;</span>package_name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何查看日志输出" tabindex="-1"><a class="header-anchor" href="#如何查看日志输出" aria-hidden="true">#</a> 如何查看日志输出？</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adb logcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="列出已安装的应用程序包" tabindex="-1"><a class="header-anchor" href="#列出已安装的应用程序包" aria-hidden="true">#</a> 列出已安装的应⽤程序包</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 软件包管理器 (pm)</span>
<span class="token comment"># 列出已安装的所有应⽤程序包</span>
adb shell pm list packages
<span class="token comment"># 列出已安装的系统应⽤程序包</span>
adb shell pm list packages -s【system】
<span class="token comment"># 列出已安装的第三⽅应⽤程序包</span>
adb shell pm list packages <span class="token parameter variable">-3</span>


<span class="token comment"># 命令⾏获取帮助⽂档</span>
adb shell pm <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清除应用程序的用户数据和缓存" tabindex="-1"><a class="header-anchor" href="#清除应用程序的用户数据和缓存" aria-hidden="true">#</a> 清除应⽤程序的⽤户数据和缓存</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adb shell pm <span class="token function">clear</span> <span class="token operator">&lt;</span>package_name<span class="token operator">></span>
<span class="token comment"># 包名：公司研发⾃定义，⼀般为公司域名反写</span>
<span class="token comment"># adb shell pm clear com.taobao.taobao</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看软件包的安装程序来源" tabindex="-1"><a class="header-anchor" href="#查看软件包的安装程序来源" aria-hidden="true">#</a> 查看软件包的安装程序来源</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 未知来源 还是 应⽤商店</span>
adb shell pm list packages -i【installer】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用程序启动" tabindex="-1"><a class="header-anchor" href="#应用程序启动" aria-hidden="true">#</a> 应用程序启动</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 活动管理器（am）</span>
<span class="token comment"># 启动app</span>
adb shell am start <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>package_name<span class="token operator">></span>/<span class="token operator">&lt;</span>activity_name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取应用程序启动页面的activity" tabindex="-1"><a class="header-anchor" href="#获取应用程序启动页面的activity" aria-hidden="true">#</a> 获取应用程序启动页面的Activity</h2>
<ol>
<li>
<p>只打开app⾸⻚后输⼊</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adb shell dumpsys activity <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">cmp</span> <span class="token operator">|</span> <span class="token function">grep</span> 包名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>monkey运⾏1次：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adb shell monkey <span class="token parameter variable">-p</span> 包名 <span class="token parameter variable">-vvv</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>logcat⽇志筛选：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adb logcat <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">cmp</span> <span class="token operator">|</span> <span class="token function">grep</span> 包名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="如何强制停止应用程序" tabindex="-1"><a class="header-anchor" href="#如何强制停止应用程序" aria-hidden="true">#</a> 如何强制停止应用程序？</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 活动管理器（am）</span>
<span class="token comment"># 强制停止force-stop</span>
adb shell am force-stop <span class="token operator">&lt;</span>package_name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何模拟来电或发送短信" tabindex="-1"><a class="header-anchor" href="#如何模拟来电或发送短信" aria-hidden="true">#</a> 如何模拟来电或发送短信？</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 模拟来电</span>
adb shell am start <span class="token parameter variable">-a</span> android.intent.action.CALL <span class="token parameter variable">-d</span> tel:1234567890
<span class="token comment"># 发送短信</span>
adb shell am start <span class="token parameter variable">-a</span> android.intent.action.SENDTO <span class="token parameter variable">-d</span> sms:1234567890 <span class="token parameter variable">--es</span> sms_body <span class="token string">"Hello"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何复制文件到设备" tabindex="-1"><a class="header-anchor" href="#如何复制文件到设备" aria-hidden="true">#</a> 如何复制文件到设备？</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 从电脑上提交给设备</span>
adb push local_file_path device_file_path
<span class="token comment"># 从电脑复制到Android设备</span>
adb push <span class="token operator">&lt;</span>电脑本地⽂件路径<span class="token operator">></span> <span class="token operator">&lt;</span>安卓设备⽬标路径<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何从设备复制文件到计算机" tabindex="-1"><a class="header-anchor" href="#如何从设备复制文件到计算机" aria-hidden="true">#</a> 如何从设备复制文件到计算机？</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adb pull device_file_path local_file_path
<span class="token comment"># 从Android设备拉取到电脑</span>
adb pull <span class="token operator">&lt;</span>安卓设备⽂件路径<span class="token operator">></span> <span class="token operator">&lt;</span>电脑本地⽬标路径<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何截取设备屏幕截图？</p>
<p>答：可以使用以下命令获取设备屏幕截图：</p>
<p>bash<br>
Copy code<br>
adb shell screencap -p /sdcard/screenshot.png<br>
adb pull /sdcard/screenshot.png local_path</p>
<p>SHELL<br>
进⼊安卓设备<br>
与Linux命令⼀致<br>
⽂件传递</p>
<p>截屏并下载到电脑<br>
adb shell screencap -p &lt;截图⽂件路径&gt;<br>
adb pull &lt;截图⽂件路径&gt; &lt;电脑本地⽂件路径&gt;<br>
录屏并下载到电脑<br>
adb shell screenrecord &lt;录屏⽂件路径&gt;<br>
adb pull &lt;录屏⽂件路径&gt; &lt;电脑本地⽂件路径&gt;<br>
获取设备上的活动（Activity）<br>
adb shell dumpsys activity</p>
<p>获取当前屏幕的 UI 结构信息<br>
adb shell uiautomator dump<br>
adb pull /sdcard/window_dump.xml &lt;本地路径&gt;</p>
<h2 id="压力测试monkey" tabindex="-1"><a class="header-anchor" href="#压力测试monkey" aria-hidden="true">#</a> 压⼒测试monkey</h2>
<p>启动应⽤并向其发送 500 个伪随机事件</p>
<p>⽇志级别<br>
-v<br>
级别 0（默认值）只提供启动通知、测试完成和最终结果。<br>
-v -v 或者 -vv<br>
级别 1 提供有关测试在运⾏时的更多详细信息，例如发送到您的 Activity 的<br>
各个事件。<br>
-v -v -v 或者 -vvv<br>
级别 2 提供更详细的设置信息，例如已选择或未选择⽤于测试的 Activity。<br>
-s <code v-pre>&lt;seed&gt;</code><br>
伪随机数⽣成器的种⼦值。如果您使⽤相同的种⼦值重新运⾏ Monkey，它将会<br>
⽣成相同的事件序列。</p>
<h2 id="adb-通信原理" tabindex="-1"><a class="header-anchor" href="#adb-通信原理" aria-hidden="true">#</a> ADB 通信原理</h2>
<p><img src="@source/zh/guide/interview/assets/adb.png" alt="" loading="lazy"><br>
<img src="@source/zh/guide/interview/assets/adb2.png" alt="" loading="lazy"></p>
</div></template>


