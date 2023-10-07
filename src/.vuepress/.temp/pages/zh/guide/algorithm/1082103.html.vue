<template><div><p>LinearTable</p>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<p>线性表是具有<strong>相同数据类型</strong>【每个数据元素所占空间一样大】的n（n≥0）个数据元素的<strong>有限序列</strong>【各个元素之间有先后的次序】，其中n为<strong>表长</strong>，当n = 0时线<br>
性表是一个<strong>空表</strong>。若用L命名线性表，则其一般表示为：</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>L = (a<sub>1</sub>, a<sub>2</sub>, … , a<sub>i</sub>, a<sub>i+1</sub>, … , a<sub>n</sub>)</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<ol>
<li>所有的整数按递增次序排列，是线性表吗？</li>
</ol>
</div>
<details class="hint-container details"><summary>Answer</summary>
<ol>
<li>所有的整数是无限的，虽然满足了<strong>整数</strong>代表是相同数据类型、<strong>递增</strong>次序代表是有先后次序，但是不满足<strong>有限</strong>。因此，不能算是一个线性表</li>
</ol>
</details>
<h3 id="几个概念" tabindex="-1"><a class="header-anchor" href="#几个概念" aria-hidden="true">#</a> 几个概念</h3>
<p>a<sub>i</sub>是线性表中的“第i个”元素线性表中的位序<br>
a<sub>1</sub>是表头元素；an是表尾元素。<br>
除第一个元素外，每个元素有且仅有一个直接前驱；除最后一个元素外，每个元素有且仅<br>
有一个直接后继<br>
a1 a2 a3 a4 a5<br>
数据结构三要素——逻辑结构<br>
有次序<br>
Eg：所有的整数按递增次<br>
序排列，是线性表吗？<br>
注意：位序从1开始<br>
数组下标从0开始<br>
每个数据元素所<br>
占空间一样大</p>
</div></template>


