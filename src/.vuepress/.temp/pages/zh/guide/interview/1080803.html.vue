<template><div><h2 id="统计服务器当前tcp的连接状态" tabindex="-1"><a class="header-anchor" href="#统计服务器当前tcp的连接状态" aria-hidden="true">#</a> 统计服务器当前tcp的连接状态？</h2>
<p>在 Linux 系统上，可以使用 <code v-pre>netstat</code> 或 <code v-pre>ss</code> 命令来获取有关 TCP 连接的信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'/^tcp/ {++status[$NF]} END {for(num in status) print num, status[num]}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>统计的结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ESTABLISHED 10
TIME_WAIT 5
CLOSE_WAIT 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="netstat参数" tabindex="-1"><a class="header-anchor" href="#netstat参数" aria-hidden="true">#</a> netstat参数</h3>
<figure><img src="@source/zh/guide/interview/assets/20230808172317.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 1. 显示服务器上的网络连接情况，包括 TCP 和 UDP 连接</span>
<span class="token comment"># -n：以数字形式显示 IP 地址和端口号</span>
<span class="token function">netstat</span> <span class="token parameter variable">-n</span>
<span class="token comment"># 2. 使用管道 | 将输出传递给其他命令</span>
<span class="token comment"># 3. awk：这是一个文本处理工具，用于对文本进行处理和分析。</span>
<span class="token comment"># 4. 正则表达式：/^tcp/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>-n</code>：以数字形式显示 IP 地址和端口号，而不进行主机名和服务名的解析。</p>
</li>
<li>
<p><code v-pre>-a</code>：显示所有的连接，包括监听中和已建立的连接。</p>
</li>
<li>
<p><code v-pre>-t</code>：仅显示 TCP 连接。</p>
</li>
<li>
<p><code v-pre>-u</code>：仅显示 UDP 连接。</p>
</li>
</ul>
<h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 模式-动作语句块，它匹配以 tcp 开头的行，并对连接状态进行统计。</span>
<span class="token function">netstat</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'/^tcp/ {++status[$NF]}'</span>
<span class="token comment"># 2. 使用管道 | 将输出传递给其他命令</span>
<span class="token comment"># 3. awk：这是一个文本处理工具，用于对文本进行处理和分析。</span>
<span class="token comment"># 4. 正则表达式：/^tcp/</span>
<span class="token comment"># 5. ++status 自增操作</span>
<span class="token comment"># 6. $NF 表示当前行的最后一个字段，即连接状态。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正则表达式是一种用于匹配文本模式的工具，用于在字符串中查找和匹配特定的模式。</p>
<ul>
<li>
<p><code v-pre>/</code>：斜杠 <code v-pre>/</code> 是一个<strong>分隔符</strong>，用于界定正则表达式的<strong>开始</strong>和<strong>结束</strong>。也用于界定其他的正则表达式模式，例如 <code v-pre>/pattern/</code> 表示匹配某个特定的模式。</p>
</li>
<li>
<p><code v-pre>^</code>：表示匹配行的开头。</p>
</li>
<li>
<p><code v-pre>tcp</code>：是要匹配的文本模式，表示字符串中包含 tcp。</p>
</li>
<li>
<p><code v-pre>/^tcp/</code>：表示匹配以 tcp 开头的行或字符串。在这个上下文中，它用于筛选出包含 TCP 连接信息的行。</p>
</li>
</ul>
<h3 id="nf" tabindex="-1"><a class="header-anchor" href="#nf" aria-hidden="true">#</a> $NF</h3>
<ul>
<li><code v-pre>$NF</code>：表示当前行的最后一个字段，即连接状态。</li>
</ul>
<p><code v-pre>{++status[$NF]}</code>：这是一个动作部分，它在匹配到符合条件的行时执行。其中的 <code v-pre>++status[$NF]</code> 是一个表达式，用于对数组 status 中对应连接状态的值进行自增操作。</p>
<p>综合起来，这部分代码的作用是对以 tcp 开头的行进行匹配，并对连接状态进行统计。每当匹配到一行时，会自增对应连接状态的数量。这可以用于统计不同 TCP 连接状态的数量，例如 <code v-pre>ESTABLISHED</code>、<code v-pre>TIME_WAIT</code>、<code v-pre>CLOSE_WAIT</code> 等。</p>
<p>这个 awk 命令通常会结合 netstat 命令一起使用，用于在服务器上统计不同连接状态的数量，并输出统计结果。</p>
<h3 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> END</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 这是 awk 中的另一个模式-动作语句块，它在处理完所有行后执行。</span>
<span class="token comment"># 它遍历数组 status 中的每个元素，即连接状态，然后打印连接状态和对应的数量。</span>
END <span class="token punctuation">{</span>for<span class="token punctuation">(</span>num <span class="token keyword">in</span> status<span class="token punctuation">)</span> print num, status<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>END</code>：这是 awk 命令的一个特殊关键字，表示<strong>在处理完所有行后执行的动作</strong>部分。</p>
</li>
<li>
<p><code v-pre>{}</code>：这是一个大括号，用于将动作部分的代码块包裹起来。</p>
</li>
<li>
<p><code v-pre>for(num in status)</code>：这是一个 for 循环，用于遍历数组 status 中的每个元素。num 是遍历过程中的变量，它表示数组中的索引（在这个情况下就是连接状态），而 <code v-pre>status[num]</code> 表示对应连接状态的值（也就是该连接状态的数量）。</p>
</li>
<li>
<p><code v-pre>print num, status[num]</code>：这个部分是 for 循环的动作，用于打印连接状态和对应的数量。num 表示连接状态，<code v-pre>status[num]</code> 表示该连接状态的数量。</p>
</li>
</ul>
</div></template>


