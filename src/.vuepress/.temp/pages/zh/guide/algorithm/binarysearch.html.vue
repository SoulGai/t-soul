<template><div><h2 id="数组中点下标" tabindex="-1"><a class="header-anchor" href="#数组中点下标" aria-hidden="true">#</a> 数组中点下标</h2>
<div class="hint-container warning">
<p class="hint-container-title">下标</p>
<p>避免整数溢出问题，特别是在处理大数值范围时。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token number">2</span> <span class="token operator">+</span> left<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>left 表示数组或列表的<strong>起始</strong>索引。</p>
<p>right 表示数组或列表的<strong>结束</strong>索引。</p>
</div>
<p>在计算中使用的数据类型（如 int、long、float、double 等）都有其取值范围，超出这个范围的计算可能导致溢出。</p>
<p>在上面提到的代码片段中，避免整数溢出的目的是确保 <code v-pre>(right - left) / 2</code> 的结果不会超出整数数据类型的范围，同时保持计算的准确性。通过将计算过程分成两个步骤，首先计算 <code v-pre>(right - left)</code> 部分，然后再<code v-pre>除以 2</code>，可以在避免溢出的同时保持计算的精度。</p>
<h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h2>
<p>给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。</p>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<div class="hint-container tip">
<p class="hint-container-title">示例 1</p>
<p>输入: nums = [-1,0,3,5,9,12], target = 9<br>
输出: 4<br>
解释: 9 出现在 nums 中并且下标为 4</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">示例 2</p>
<p>输入: nums = [-1,0,3,5,9,12], target = 2<br>
输出: -1<br>
解释: 2 不存在 nums 中因此返回 -1</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">提示</p>
<ul>
<li>
<p>你可以假设 nums 中的所有元素是不重复的。</p>
</li>
<li>
<p>n 将在 [1, 10000]之间。</p>
</li>
<li>
<p>nums 的每个元素都将在 [-9999, 9999]之间。</p>
</li>
</ul>
</div>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<p><a href="https://plugin-md-enhance.vuejs.press/guide/code-tabs.html#demo" target="_blank" rel="noopener noreferrer">多种语言代码示例<ExternalLinkIcon/></a></p>
<CodeTabs id="65" :data='[{"id":"java"},{"id":"python"}]' tab-id="shell">
<template #title0="{ value, isActive }">java</template>
<template #title1="{ value, isActive }">python</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1. 定义查找的范围 [left,right]，初始查找范围整个数组</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//2. 数组的中点mid</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> left<span class="token punctuation">;</span>
            <span class="token comment">// 中点值</span>
            <span class="token keyword">int</span> num <span class="token operator">=</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//如果目标值 等于 中点值 直接返回中点下标</span>
                <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">></span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//如果目标值 小于 中点值 在数组左侧 新一轮数组 右 下标改为 中点下标-1</span>
                right <span class="token operator">=</span> mid <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//如果目标值 大于 中点值 在数组右侧 新一轮数组 左 下标改为 中点下标+1</span>
                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="搜索插入位置" tabindex="-1"><a class="header-anchor" href="#搜索插入位置" aria-hidden="true">#</a> 搜索插入位置</h2>
<p>给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。</p>
<p>请必须使用时间复杂度为 <strong>O(log n)</strong> 的算法。</p>
<h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3>
<div class="hint-container tip">
<p class="hint-container-title">示例 1</p>
<p>输入: nums = [1,3,5,6], target = 5<br>
输出: 2</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">示例 2</p>
<p>输入: nums = [1,3,5,6], target = 2<br>
输出: 1</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">示例 3</p>
<p>输入: nums = [1,3,5,6], target = 7<br>
输出: 4</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">提示</p>
<ul>
<li>
<p>1 &lt;= nums.length &lt;= 104。</p>
</li>
<li>
<p>-104 &lt;= nums[i] &lt;= 104。</p>
</li>
<li>
<p>nums 为 无重复元素 的 升序 排列数组。</p>
</li>
<li>
<p>-104 &lt;= target &lt;= 104。</p>
</li>
</ul>
</div>
<h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3>
<CodeTabs id="127" :data='[{"id":"java"},{"id":"python"}]' tab-id="shell">
<template #title0="{ value, isActive }">java</template>
<template #title1="{ value, isActive }">python</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">searchInsert</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token number">2</span> <span class="token operator">+</span> left<span class="token punctuation">;</span>
            <span class="token keyword">int</span> num <span class="token operator">=</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">&lt;</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="寻找比目标字母大的最小字母" tabindex="-1"><a class="header-anchor" href="#寻找比目标字母大的最小字母" aria-hidden="true">#</a> 寻找比目标字母大的最小字母</h2>
<p>给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。</p>
<p>返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。</p>
<h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3>
<div class="hint-container tip">
<p class="hint-container-title">示例 1</p>
<p>输入: letters = [&quot;c&quot;, &quot;f&quot;, &quot;j&quot;]，target = &quot;a&quot;<br>
输出: &quot;c&quot;<br>
解释：letters 中字典上比 'a' 大的最小字符是 'c'。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">示例 2</p>
<p>输入: letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;c&quot;<br>
输出: &quot;f&quot;<br>
解释：letters 中字典顺序上大于 'c' 的最小字符是 'f'。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">示例 3</p>
<p>输入: letters = [&quot;x&quot;,&quot;x&quot;,&quot;y&quot;,&quot;y&quot;], target = &quot;z&quot;<br>
输出: &quot;x&quot;<br>
解释：letters 中没有一个字符在字典上大于 'z'，所以我们返回 letters[0]。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">提示</p>
<ul>
<li>
<p>2 &lt;= letters.length &lt;= 104</p>
</li>
<li>
<p>letters[i] 是一个小写字母</p>
</li>
<li>
<p>letters 按非递减顺序排序</p>
</li>
<li>
<p>letters 最少包含两个不同的字母</p>
</li>
<li>
<p>target 是一个小写字母</p>
</li>
</ul>
</div>
<h3 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h3>
<CodeTabs id="194" :data='[{"id":"java"},{"id":"python"}]' tab-id="shell">
<template #title0="{ value, isActive }">java</template>
<template #title1="{ value, isActive }">python</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><a href="https://leetcode.cn/problems/find-smallest-letter-greater-than-target/solutions/1385592/xun-zhao-bi-mu-biao-zi-mu-da-de-zui-xiao-lhm7/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/find-smallest-letter-greater-than-target/solutions/1385592/xun-zhao-bi-mu-biao-zi-mu-da-de-zui-xiao-lhm7/<ExternalLinkIcon/></a></p>
</div></template>


