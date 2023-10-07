<template><div><h2 id="迭代器和生成器的区别" tabindex="-1"><a class="header-anchor" href="#迭代器和生成器的区别" aria-hidden="true">#</a> 迭代器和生成器的区别</h2>
<p>迭代器（Iterators）和生成器（Generators）都是<strong>用于处理和访问序列数据的方法</strong>，但它们在实现和用法上有一些区别。</p>
<img src="https://www.plantuml.com/plantuml/svg/TL9DJo914BtFh_2edjP_m3z1edCW0MDqDd5lZIZByZMZmM4HP4L1YChC40Y10SEFiQkwv-HVi9YUY2RkhRhhlQhtNYfsR2IEZ9_fb1OBgtJoO3-TEDIEzn8fVMFdXsOa3IhaSi3dzr3lmsL9LFzXtg9Qs_xV_wS6FROtm6c9YiVzNFHTDgNZX9ruF6deH_7uvjRRubekgz1eVL2n-IpzfmXse9yONs3Wcv2lyUb0N9_nQP5F6Py-mdbMZ6z3YgZskLy9CcMevF3Amx8JD79WvSCcPZraFHoU0blGH30VeTaFcam-P6WSrYR0wf6VsKJj-tR7V8o5ZX8i2XDa6Hg6hedFRUbbIS7kMlWksZCSNGNP5qwOnXXjJr5KGfqpOUMWquDM4VCsrcw3kgKiAl5QQ6cTC7duwv8WqIkBFpDq2c8u9owf_nezVrcIZbz9FRKltG6ONRpfgZcH6xO8SKhlnmPmPtBOfcbh0qf_25P91Sp2GPVxlHKh54buQFfOTzyMfIXv-pUVJrQgsgLNbf5EMpWrj2qStGMdzz2z829vr68wtLrqUwkQBl8T" alt="uml diagram" loading="lazy">
<h3 id="迭代器-iterators" tabindex="-1"><a class="header-anchor" href="#迭代器-iterators" aria-hidden="true">#</a> 迭代器（Iterators）</h3>
<h4 id="定义和实现" tabindex="-1"><a class="header-anchor" href="#定义和实现" aria-hidden="true">#</a> 定义和实现</h4>
<p>迭代器是一种对象，它实现了迭代协议（Iterator Protocol），即包含<code v-pre>__iter__()</code>和<code v-pre>__next__()</code>方法。</p>
<p><code v-pre>__iter__()</code>方法返回迭代器本身，<code v-pre>__next__()</code>方法返回序列中的下一个元素。</p>
<p>迭代器可以<strong>用于遍历数据集合</strong>，如列表、元组、字典等。</p>
<h4 id="惰性求值" tabindex="-1"><a class="header-anchor" href="#惰性求值" aria-hidden="true">#</a> 惰性求值</h4>
<p>迭代器是一种惰性求值（Lazy Evaluation）的机制，它<strong>只在需要的时候生成并返回下一个元素</strong>，这在处理大型数据集时非常高效，因为不需要一次性将所有数据加载到内存中。</p>
<h4 id="状态维护" tabindex="-1"><a class="header-anchor" href="#状态维护" aria-hidden="true">#</a> 状态维护</h4>
<p>迭代器会<strong>维护迭代状态</strong>，即当前遍历到的位置，每次调用<code v-pre>__next__()</code>方法都会更新状态。</p>
<h3 id="生成器-generators" tabindex="-1"><a class="header-anchor" href="#生成器-generators" aria-hidden="true">#</a> 生成器（Generators）</h3>
<h4 id="定义和实现-1" tabindex="-1"><a class="header-anchor" href="#定义和实现-1" aria-hidden="true">#</a> 定义和实现</h4>
<p>生成器是一种特殊类型的迭代器，可以通过函数来创建。</p>
<p>生成器函数使用<code v-pre>yield</code>语句来生成一个值，并在暂停执行时保存函数的状态，下次调用时从上次暂停的地方继续执行。</p>
<p>生成器函数在<strong>调用时并不立即执行，而是返回一个生成器对象</strong>，通过调用生成器对象的<code v-pre>__next__()</code>方法来逐步获取值。</p>
<h4 id="简洁性和内存效率" tabindex="-1"><a class="header-anchor" href="#简洁性和内存效率" aria-hidden="true">#</a> 简洁性和内存效率</h4>
<p>生成器函数相对于传统的迭代器实现更加简洁，不需要显式地维护状态变量。此外，生成器在处理大型数据集时能够节省内存，因为它们是惰性求值的，只在需要时生成数据。</p>
<h4 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h4>
<p>生成器特别适合于需要<strong>逐步产生数据</strong>的场景，比如<strong>遍历文件的行</strong>、<strong>计算斐波那契数列</strong>等。</p>
<p>总的来说，迭代器和生成器都是处理序列数据的有效方式，但生成器更加灵活和高效，尤其适用于处理大型或无限序列数据。</p>
<h2 id="is和-号的区别" tabindex="-1"><a class="header-anchor" href="#is和-号的区别" aria-hidden="true">#</a> is和==号的区别</h2>
<p>is 和 == 是用来比较对象的操作符，但它们在比较方式和用途上有一些区别。</p>
<h3 id="is-操作符" tabindex="-1"><a class="header-anchor" href="#is-操作符" aria-hidden="true">#</a> is 操作符</h3>
<p>is 操作符用于检查两个对象是否是同一个对象（即是否引用<strong>同一个内存地址</strong>），而不仅仅是值是否相等。<br>
当 is 用于比较两个对象时，它会比较对象的身份标识，也就是<strong>比较它们在内存中的位置</strong>。</p>
<p>在Python中，None 是一个特殊的单例对象，使用 is 来检查一个对象是否为 None 是常见的用法。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
y <span class="token operator">=</span> x

<span class="token keyword">print</span><span class="token punctuation">(</span>x <span class="token keyword">is</span> y<span class="token punctuation">)</span>  <span class="token comment"># True，因为 x 和 y 引用同一个对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> == 操作符</h3>
<p>== 操作符用于<strong>比较两个对象的值是否相等</strong>，而<strong>不关心它们是否是同一个对象</strong>。</p>
<p>当 == 用于比较两个对象时，它会比较对象的内容或值。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>  <span class="token comment"># True，因为 a 和 b 的值相等</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pytest-中如何跳过测试用例" tabindex="-1"><a class="header-anchor" href="#pytest-中如何跳过测试用例" aria-hidden="true">#</a> pytest 中如何跳过测试用例</h2>
<p>使用装饰器 <code v-pre>@pytest.mark.skip</code> 或 <code v-pre>@pytest.mark.skip(reason)</code> 来跳过测试用例。这样做的目的可能是因为测试用例当前不可用、正在进行修复、不适用于特定条件等等。</p>
<figure><img src="@source/zh/guide/interview/assets/20230809214827.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="pytest-中如何进行绝对优先" tabindex="-1"><a class="header-anchor" href="#pytest-中如何进行绝对优先" aria-hidden="true">#</a> pytest 中如何进行绝对优先</h2>
<h2 id="pytest-中如何进行请求头鉴权" tabindex="-1"><a class="header-anchor" href="#pytest-中如何进行请求头鉴权" aria-hidden="true">#</a> pytest 中如何进行请求头鉴权</h2>
</div></template>


