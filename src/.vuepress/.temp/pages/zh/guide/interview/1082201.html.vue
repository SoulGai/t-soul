<template><div><h2 id="华住" tabindex="-1"><a class="header-anchor" href="#华住" aria-hidden="true">#</a> 华住</h2>
<p>测试用例管理，<br>
如何多项目协同管理测试用例<br>
接口测试用例设计，<br>
如何自动生成接口数据，<br>
业务流程关注数据入口以及数据流转，</p>
<h3 id="统计内容编程题" tabindex="-1"><a class="header-anchor" href="#统计内容编程题" aria-hidden="true">#</a> 统计内容编程题</h3>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>统计word文档中<strong>英文单词</strong>及<strong>英文句子</strong>？</p>
</div>
<CodeTabs id="14" :data='[{"id":"java"},{"id":"python"}]' tab-id="shell">
<template #title0="{ value, isActive }">java</template>
<template #title1="{ value, isActive }">python</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>xwpf<span class="token punctuation">.</span>usermodel<span class="token punctuation">.</span></span><span class="token class-name">XWPFDocument</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>xwpf<span class="token punctuation">.</span>usermodel<span class="token punctuation">.</span></span><span class="token class-name">XWPFParagraph</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>xwpf<span class="token punctuation">.</span>usermodel<span class="token punctuation">.</span></span><span class="token class-name">XWPFPicture</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>xwpf<span class="token punctuation">.</span>usermodel<span class="token punctuation">.</span></span><span class="token class-name">XWPFRun</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Matcher</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Pattern</span></span><span class="token punctuation">;</span>
<span class="token comment">/*
&lt;dependency>
    &lt;groupId>org.apache.poi&lt;/groupId>
    &lt;artifactId>poi&lt;/artifactId>
    &lt;version>4.1.2&lt;/version>
&lt;/dependency>
&lt;dependency>
    &lt;groupId>org.apache.poi&lt;/groupId>
    &lt;artifactId>poi-ooxml&lt;/artifactId>
    &lt;version>4.1.2&lt;/version>
&lt;/dependency>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WordCount</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 文件的读取</span>
            <span class="token class-name">FileInputStream</span> fileInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"DHS.docx"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//通过fileInputStream读取Word文件内容并创建一个XWPFDocument对象，</span>
            <span class="token comment">// 这是Apache POI库中用于处理Word文档的类</span>
            <span class="token class-name">XWPFDocument</span> document <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XWPFDocument</span><span class="token punctuation">(</span>fileInputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//用于存储英文单词的数量</span>
            <span class="token keyword">int</span> wordCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token comment">//用于存储英语句子的数量</span>
            <span class="token keyword">int</span> sentenceCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token comment">//正则表达式匹配一个或多个连续的字母、数字或下划线，即一个单词</span>
            <span class="token class-name">Pattern</span> wordPattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">"\\b\\w+\\b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//正则表达式匹配句子的结束标点符号（句号、问号、感叹号） r'[.!?]'</span>
            <span class="token class-name">Pattern</span> sentencePattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">"[.!?]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取文档中的所有段落</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">XWPFParagraph</span><span class="token punctuation">></span></span> paragraphs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getParagraphs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">XWPFParagraph</span> paragraph <span class="token operator">:</span> paragraphs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//获取段落的文本内容</span>
                <span class="token class-name">String</span> text <span class="token operator">=</span> paragraph<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//单词正则表达式创建匹配器，用于匹配单词</span>
                <span class="token class-name">Matcher</span> wordMatcher <span class="token operator">=</span> wordPattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//句子正则表达式创建匹配器，用于匹配句子结束标点符号</span>
                <span class="token class-name">Matcher</span> sentenceMatcher <span class="token operator">=</span> sentencePattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>wordMatcher<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    wordCount<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>sentenceMatcher<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    sentenceCount<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"英文单词数量: "</span> <span class="token operator">+</span> wordCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"英语句子数量: "</span> <span class="token operator">+</span> sentenceCount<span class="token punctuation">)</span><span class="token punctuation">;</span>

            fileInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># pip install docx2txt</span>
<span class="token keyword">import</span> docx2txt
<span class="token keyword">import</span> re

<span class="token comment"># 读取Word文件内容</span>
text <span class="token operator">=</span> docx2txt<span class="token punctuation">.</span>process<span class="token punctuation">(</span><span class="token string">"DHS.docx"</span><span class="token punctuation">)</span>  <span class="token comment"># 替换为您的Word文件路径</span>

<span class="token comment"># 统计英文单词数量 返回一个包含所有单词的列表。</span>
<span class="token comment"># 正则表达式 \b\w+\b 是用来匹配单词的模式。</span>
<span class="token comment"># 匹配一个或多个连续的字母、数字或下划线，且两边都是单词边界。</span>
<span class="token comment"># \b：表示单词边界，即单词的开头或结尾。</span>
<span class="token comment"># \w+：表示一个或多个连续的字母、数字或下划线（即一个单词）。</span>
<span class="token comment"># re.findall()找出文本中的所有单词</span>
words <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r'\b\w+\b'</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>
word_count <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span>

<span class="token comment"># 统计英语句子数量 使用正则表达式分隔句子</span>
sentences <span class="token operator">=</span> re<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">r'[.!?]'</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>
<span class="token comment"># 去除空句子</span>
sentences <span class="token operator">=</span> <span class="token punctuation">[</span>s<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">for</span> s <span class="token keyword">in</span> sentences <span class="token keyword">if</span> s<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

sentence_count <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sentences<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"英文单词数量:"</span><span class="token punctuation">,</span> word_count<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"英语句子数量:"</span><span class="token punctuation">,</span> sentence_count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>


