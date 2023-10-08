<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>基本注解：@Test、@BeforeEach、@AfterEach、@BeforeAll、@AfterAll</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>熟练掌握使用基本注解便携测试用例</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JUnit 5 有哪些基本的注解，用于标记测试方法和控制测试的行为？</p>
</div>
<table>
<thead>
<tr>
<th>注解</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>@Test</td>
<td>表示方法是测试方法</td>
</tr>
<tr>
<td>@BeforeEach</td>
<td>表示该注释的方法应该被执行之前 的每个 @Test，@RepeatedTest，@ParameterizedTest，或@TestFactory方法在当前类;可被继承</td>
</tr>
<tr>
<td>@AfterEach</td>
<td>表示被注解的方法应该在当前类中的每个每个 @Test，@RepeatedTest，@ParameterizedTest，或@TestFactory方法之后执行;可被继承</td>
</tr>
<tr>
<td>@BeforeAll</td>
<td>必须是static;可被继承;最早执行</td>
</tr>
<tr>
<td>@AfterAll</td>
<td>必须是static;可被继承;最后执行</td>
</tr>
</tbody>
</table>
<h2 id="被测代码" tabindex="-1"><a class="header-anchor" href="#被测代码" aria-hidden="true">#</a> 被测代码</h2>
<h3 id="pom文件" tabindex="-1"><a class="header-anchor" href="#pom文件" aria-hidden="true">#</a> pom文件</h3>
<p><RouterLink to="/zh/guide/JUnit5/project/pom.html">pom文件</RouterLink></p>
<h2 id="test注解" tabindex="-1"><a class="header-anchor" href="#test注解" aria-hidden="true">#</a> @Test注解</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>什么是 @Test 注解？</p>
<p>如何使用 @Test 注解标记测试方法？</p>
<p>可以使用 @Test 注解标记哪些类型的方法？</p>
</div>
<p>当使用JUnit 5的@Test注解时，可以用它来标记一个测试方法。</p>
<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3>
<p>下面是一个简单的示例代码，展示了如何使用@Test注解来定义和运行一个测试方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">top<span class="token punctuation">.</span>testeru<span class="token punctuation">.</span>basic</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">top<span class="token punctuation">.</span>testeru<span class="token punctuation">.</span></span><span class="token class-name">MyMath</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token static">assertEquals</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span>  <span class="token class-name">TestAnnotation</span><span class="token punctuation">{</span>

    <span class="token comment">//使用@Test注解时，确保测试方法不会产生副作用，并且可以独立运行，以便重复执行和验证代码的正确性。</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAddition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Arrange 安排（Arrange）：准备测试所需的输入数据。</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
        <span class="token class-name">MyMath</span> math <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyMath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Act 操作（Act）：执行要测试的操作，即调用math.add(a, b)来计算结果。</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Assert 断言（Assert）：使用assertEquals方法来断言预期结果和实际结果是否相等。</span>
        <span class="token comment">//JUnit Jupiter提供的assertEquals方法</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="beforeeach" tabindex="-1"><a class="header-anchor" href="#beforeeach" aria-hidden="true">#</a> @BeforeEach</h2>
<ul>
<li>
<p>每个@Test之前执行</p>
</li>
<li>
<p>有成绩之前是提醒大家来考试</p>
</li>
<li>
<p>编写多个test验证是否在每个之前执行</p>
</li>
</ul>
<p>java<br>
package com.testeru.class1;</p>
<p>import org.junit.jupiter.api.BeforeEach;<br>
import org.junit.jupiter.api.Test;</p>
<p>/**</p>
<ul>
<li>
<p>@program: xunit</p>
</li>
<li>
<p>@author: 盖盖</p>
</li>
<li>
<p>@description:  @BeforeEach 在每个Test之前执行</p>
</li>
<li>
<p>@Version 1.0</p>
</li>
<li>
<p>@create: 2021/12/9 11:28 上午<br>
*/<br>
public class Demo2Test {</p>
<p>@BeforeEach<br>
public void beforEach1(){<br>
System.out.println(&quot;要开始进行升级考试啦！&quot;);</p>
<p>}<br>
@Test<br>
public void testMethod01() {<br>
System.out.println(&quot;大一的数学考了95分！&quot;);<br>
}</p>
<p>@Test<br>
public void testMethod02() {<br>
System.out.println(&quot;大二的数学考了98分！&quot;);<br>
}<br>
}</p>
</li>
</ul>
<h2 id="aftereach" tabindex="-1"><a class="header-anchor" href="#aftereach" aria-hidden="true">#</a> @AfterEach</h2>
<ul>
<li>
<p>每个@Test之后执行</p>
</li>
<li>
<p>有成绩之前是提醒大家来考试</p>
</li>
<li>
<p>编写多个test验证是否在每个之后执行</p>
</li>
</ul>
<p>java<br>
package com.testeru.class1;</p>
<p>import org.junit.jupiter.api.AfterEach;<br>
import org.junit.jupiter.api.BeforeEach;<br>
import org.junit.jupiter.api.Test;</p>
<p>/**</p>
<ul>
<li>
<p>@program: xunit</p>
</li>
<li>
<p>@author: 盖盖</p>
</li>
<li>
<p>@description: @AfterEach 在每个Test之后执行</p>
</li>
<li>
<p>@Version 1.0</p>
</li>
<li>
<p>@create: 2021/12/9 11:28 上午<br>
*/<br>
public class Demo3Test {</p>
<p>private static double score;</p>
<p>@BeforeEach<br>
public void beforEach1(){<br>
System.out.println(&quot;要开始进行升级考试啦！&quot;);<br>
}</p>
<p>@AfterEach<br>
public void afterEach1(){<br>
//三目运算符判断考试成绩<br>
System.out.println(score &lt; 60 ? &quot;挂科了，等下学期补考吧！&quot; : &quot;没挂，不用补考咯！&quot;);<br>
}</p>
<p>@Test<br>
public void testMethod01() {<br>
score = 55;<br>
System.out.println(&quot;大一的数学考了&quot; + score + &quot;分！&quot;);</p>
<p>}</p>
<p>@Test<br>
public void testMethod02() {<br>
score = 98;<br>
System.out.println(&quot;大二的数学考了&quot; + score + &quot;分！&quot;);<br>
}<br>
}</p>
</li>
</ul>
<h2 id="beforeall" tabindex="-1"><a class="header-anchor" href="#beforeall" aria-hidden="true">#</a> @BeforeAll</h2>
<ul>
<li>
<p>方法是static</p>
</li>
<li>
<p>在类里面最先执行的方法</p>
</li>
<li>
<p>先上了大学才能进行大学里的考试</p>
</li>
</ul>
<p>java<br>
package com.testeru.class1;</p>
<p>import org.junit.jupiter.api.AfterEach;<br>
import org.junit.jupiter.api.BeforeAll;<br>
import org.junit.jupiter.api.BeforeEach;<br>
import org.junit.jupiter.api.Test;</p>
<p>/**</p>
<ul>
<li>
<p>@program: xunit</p>
</li>
<li>
<p>@author: 盖盖</p>
</li>
<li>
<p>@description: @Test</p>
</li>
<li>
<p>@Version 1.0</p>
</li>
<li>
<p>@create: 2021/12/9 11:28 上午<br>
*/<br>
public class Demo4Test {</p>
<p>private static double score;</p>
<p>@BeforeAll<br>
public static void beforeAll1(){<br>
System.out.println(&quot;我上大学啦！&quot;);<br>
}<br>
@BeforeEach<br>
public void beforEach1(){<br>
System.out.println(&quot;要开始进行升级考试啦！&quot;);<br>
}</p>
<p>@AfterEach<br>
public void afterEach1(){<br>
System.out.println(score &lt; 60 ? &quot;挂科了，等下学期补考吧！&quot; : &quot;没挂，不用补考咯！&quot;);<br>
}</p>
<p>@Test<br>
public void testMethod01() {<br>
score = 55;<br>
System.out.println(&quot;大一的数学考了&quot; + score + &quot;分！&quot;);</p>
<p>}</p>
<p>@Test<br>
public void testMethod02() {<br>
score = 98;<br>
System.out.println(&quot;大二的数学考了&quot; + score + &quot;分！&quot;);</p>
<p>}<br>
}</p>
</li>
</ul>
<h2 id="afterall" tabindex="-1"><a class="header-anchor" href="#afterall" aria-hidden="true">#</a> @AfterAll</h2>
<ul>
<li>
<p>方法是static</p>
</li>
<li>
<p>在类里面最后执行的方法</p>
</li>
<li>
<p>最后不管是毕业还是肄业都要从大学离开</p>
</li>
</ul>
<p>java<br>
package com.testeru.class1;</p>
<p>import org.junit.jupiter.api.*;</p>
<p>/**</p>
<ul>
<li>
<p>@program: xunit</p>
</li>
<li>
<p>@author: 盖盖</p>
</li>
<li>
<p>@description: @Test</p>
</li>
<li>
<p>@Version 1.0</p>
</li>
<li>
<p>@create: 2021/12/9 11:28 上午<br>
*/<br>
public class Demo5Test {</p>
<p>private static double score;</p>
<p>@BeforeAll<br>
public static void beforeAll1(){<br>
System.out.println(&quot;我上大学啦！&quot;);<br>
}<br>
@AfterAll<br>
public static void afterAll1(){<br>
System.out.println(&quot;我毕业了，要离开这所学校了！&quot;);<br>
}<br>
@BeforeEach<br>
public void beforEach1(){<br>
System.out.println(&quot;要开始进行升级考试啦！&quot;);<br>
}</p>
<p>@AfterEach<br>
public void afterEach1(){<br>
System.out.println(score &lt; 60 ? &quot;挂科了，等下学期补考吧！&quot; : &quot;没挂，不用补考咯！&quot;);<br>
}</p>
<p>@Test<br>
public void testMethod01() {<br>
score = 55;<br>
System.out.println(&quot;大一的数学考了&quot; + score + &quot;分！&quot;);</p>
<p>}</p>
<p>@Test<br>
public void testMethod02() {<br>
score = 98;<br>
System.out.println(&quot;大二的数学考了&quot; + score + &quot;分！&quot;);</p>
<p>}</p>
<p>@Test<br>
public void testMethod03() {<br>
score = 78;<br>
System.out.println(&quot;大三的专业课考了&quot; + score + &quot;分！&quot;);</p>
<p>}</p>
<p>@Test<br>
public void testMethod04() {<br>
score = 66;<br>
System.out.println(&quot;大四的专业课考了&quot; + score + &quot;分！&quot;);</p>
<p>}<br>
}</p>
</li>
</ul>
<p>运行结果：</p>
<p>我上大学啦！<br>
要开始进行升级考试啦！<br>
大一的数学考了55.0分！<br>
挂科了，等下学期补考吧！<br>
要开始进行升级考试啦！<br>
大二的数学考了98.0分！<br>
没挂，不用补考咯！<br>
要开始进行升级考试啦！<br>
大三的专业课考了78.0分！<br>
没挂，不用补考咯！<br>
要开始进行升级考试啦！<br>
大四的专业课考了66.0分！<br>
没挂，不用补考咯！<br>
我毕业了，要离开这所学校了！</p>
<h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2>
<ul>
<li>
<p>如果是两个Test类ATest、BTest，都有beforeall,beforeEach,afterAll,afterEach</p>
</li>
<li>
<p>BTest extends ATest</p>
</li>
<li>
<p>执行顺序？？？</p>
</li>
<li>
<p>注解是否继承</p>
</li>
</ul>
<h2 id="多个类继承执行流程图" tabindex="-1"><a class="header-anchor" href="#多个类继承执行流程图" aria-hidden="true">#</a> 多个类继承执行流程图</h2>
<figure><img src="https://gitee.com/testeru/pichub/raw/master/images/202111091456229.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="练习demo" tabindex="-1"><a class="header-anchor" href="#练习demo" aria-hidden="true">#</a> 练习demo</h2>
<figure><img src="https://gitee.com/datau001/picgo/raw/master/images/202112091419202.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我上大学啦！<br>
我要去找宿舍的同伴！<br>
要开始进行升级考试啦！<br>
我要熬夜奋战复习啦！<br>
大一的数学考了55.0分！<br>
挂科了，等下学期补考吧！<br>
成绩出来了，补考不补考都不重要，我们去happy！<br>
要开始进行升级考试啦！<br>
我要熬夜奋战复习啦！<br>
大二的数学考了98.0分！<br>
挂科了，等下学期补考吧！<br>
成绩出来了，补考不补考都不重要，我们去happy！<br>
要开始进行升级考试啦！<br>
我要熬夜奋战复习啦！<br>
大三的专业课考了78.0分！<br>
没挂，不用补考咯！<br>
成绩出来了，补考不补考都不重要，我们去happy！<br>
要开始进行升级考试啦！<br>
我要熬夜奋战复习啦！<br>
大四的专业课考了66.0分！<br>
没挂，不用补考咯！<br>
成绩出来了，补考不补考都不重要，我们去happy！<br>
我从宿舍搬出来啦！<br>
我毕业了，要离开这所学校了！</p>
<figure><img src="https://gitee.com/datau001/picgo/raw/master/images/202112091415075.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="junit5常用注解" tabindex="-1"><a class="header-anchor" href="#junit5常用注解" aria-hidden="true">#</a> JUnit5常用注解</h1>
<table>
<thead>
<tr>
<th>注解</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>@DisplayName</td>
<td>测试类或测试方法的自定义显示名称;类注释不会被继承</td>
</tr>
<tr>
<td>@RepeatedTest</td>
<td>重复测试测试；这些方法是继承的，除非它们被覆盖</td>
</tr>
<tr>
<td>@Disabled</td>
<td>禁用测试类或测试方法</td>
</tr>
<tr>
<td>@TestMethodOrder</td>
<td>配置排序器</td>
</tr>
<tr>
<td>@Order</td>
<td>方法顺序</td>
</tr>
</tbody>
</table>
<h2 id="displayname" tabindex="-1"><a class="header-anchor" href="#displayname" aria-hidden="true">#</a> @DisplayName</h2>
<ul>
<li>
<p>可以在类上</p>
</li>
<li>
<p>可以放在方法上</p>
</li>
<li>
<p>类继承的时候没有继承该方法</p>
</li>
<li>
<p>可以包含空格、特殊字符甚至表情符号</p>
</li>
</ul>
<figure><img src="https://gitee.com/datau001/picgo/raw/master/images/202111221153227.png" alt="截屏2021-11-22 上午11.52.39" tabindex="0" loading="lazy"><figcaption>截屏2021-11-22 上午11.52.39</figcaption></figure>
<p>java<br>
package com.testeru.class3;</p>
<p>import org.junit.jupiter.api.*;</p>
<p>/**</p>
<ul>
<li>
<p>@program: xunit</p>
</li>
<li>
<p>@author: 盖盖</p>
</li>
<li>
<p>@description: @DisplayName</p>
</li>
<li>
<p>测试类或测试方法的自定义显示名称;不会被继承</p>
</li>
<li>
<p>@Version 1.0</p>
</li>
<li>
<p>@create: 2021/12/9 11:28 上午<br>
*/<br>
@DisplayName(&quot;米小圈上学记&quot;)<br>
public class Demo6Test {</p>
<p>private static double score;</p>
<p>@BeforeAll<br>
public static void beforeAll1(){<br>
System.out.println(&quot;我上大学啦！&quot;);<br>
}<br>
@AfterAll<br>
public static void afterAll1(){<br>
System.out.println(&quot;我毕业了，要离开这所学校了！&quot;);<br>
}<br>
@BeforeEach<br>
public void beforEach1(){<br>
System.out.println(&quot;要开始进行升级考试啦！&quot;);<br>
}</p>
<p>@AfterEach<br>
public void afterEach1(){<br>
System.out.println(score &lt; 60 ? &quot;挂科了，等下学期补考吧！&quot; : &quot;没挂，不用补考咯！&quot;);<br>
}</p>
<p>@Test<br>
@DisplayName(&quot;大一&quot;)<br>
public void testMethod01() {<br>
score = 55;<br>
System.out.println(&quot;大一的数学考了&quot; + score + &quot;分！&quot;);</p>
<p>}</p>
<p>@Test<br>
@DisplayName(&quot;大二&quot;)<br>
public void testMethod02() {<br>
score = 98;<br>
System.out.println(&quot;大二的数学考了&quot; + score + &quot;分！&quot;);</p>
<p>}<br>
}</p>
</li>
</ul>
<h3 id="类注解不能被继承" tabindex="-1"><a class="header-anchor" href="#类注解不能被继承" aria-hidden="true">#</a> 类注解不能被继承</h3>
<p>java<br>
package com.testeru.class3;</p>
<p>import org.junit.jupiter.api.*;</p>
<p>/**</p>
<ul>
<li>
<p>@program: xunit</p>
</li>
<li>
<p>@author: 盖盖</p>
</li>
<li>
<p>@description: @DisplayName</p>
</li>
<li>
<p>测试类或测试方法的自定义显示名称;不会被继承</p>
</li>
<li>
<p>@Version 1.0</p>
</li>
<li>
<p>@create: 2021/12/9 11:28 上午<br>
*/<br>
public class Demo7Test extends Demo6Test{<br>
private static double score;</p>
<p>@Test<br>
@DisplayName(&quot;😊&quot;)<br>
public void testMethod03() {<br>
score = 78;<br>
System.out.println(&quot;大三的专业课考了&quot; + score + &quot;分！&quot;);</p>
<p>}</p>
<p>@Test<br>
@DisplayName(&quot;\uD83D\uDE31&quot;)<br>
public void testMethod04() {<br>
score = 66;<br>
System.out.println(&quot;大四的专业课考了&quot; + score + &quot;分！&quot;);</p>
<p>}<br>
}</p>
</li>
</ul>
<h2 id="repeatedtest" tabindex="-1"><a class="header-anchor" href="#repeatedtest" aria-hidden="true">#</a> @RepeatedTest</h2>
<ul>
<li>
<p>方法重复进行测试</p>
</li>
<li>
<p>有该注解不需要@Test</p>
</li>
</ul>
<p>java<br>
package com.testeru.class3;</p>
<p>import org.junit.jupiter.api.*;</p>
<p>/**</p>
<ul>
<li>
<p>@program: xunit</p>
</li>
<li>
<p>@author: 盖盖</p>
</li>
<li>
<p>@description: @DisplayName</p>
</li>
<li>
<p>测试类或测试方法的自定义显示名称;不会被继承</p>
</li>
<li>
<p>@Version 1.0</p>
</li>
<li>
<p>@create: 2021/12/9 11:28 上午<br>
*/<br>
@DisplayName(&quot;米小圈上学记&quot;)<br>
public class Demo8Test {</p>
<p>private static double score;</p>
<p>@BeforeAll<br>
public static void beforeAll1(){<br>
System.out.println(&quot;我上大学啦！&quot;);<br>
}<br>
@AfterAll<br>
public static void afterAll1(){<br>
System.out.println(&quot;我毕业了，要离开这所学校了！&quot;);<br>
}<br>
@BeforeEach<br>
public void beforEach1(){<br>
System.out.println(&quot;要开始进行升级考试啦！&quot;);<br>
}</p>
<p>@AfterEach<br>
public void afterEach1(){<br>
System.out.println(score &lt; 60 ? &quot;挂科了，等下学期补考吧！&quot; : &quot;没挂，不用补考咯！&quot;);<br>
}</p>
<p>@Test<br>
@DisplayName(&quot;大一&quot;)<br>
public void testMethod01() {<br>
score = 55;<br>
System.out.println(&quot;大一的数学考了&quot; + score + &quot;分！&quot;);</p>
<p>}</p>
<p>@DisplayName(&quot;大二&quot;)<br>
@RepeatedTest(2)<br>
public void testMethod02() {<br>
score = 98;<br>
System.out.println(&quot;大二的数学考了&quot; + score + &quot;分！&quot;);</p>
<p>}</p>
</li>
</ul>
<p>}</p>
<figure><img src="https://gitee.com/datau001/picgo/raw/master/images/test/202112091902677.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled" aria-hidden="true">#</a> @Disabled</h2>
<ul>
<li>
<p>禁用测试类或测试方法</p>
</li>
<li>
<p>不会被继承</p>
<ul>
<li>Demo11Test继承Demo10Test「Demo10Test类上添加@Disabled」，运行Demo11Test，对应只运行Demo11Test的内容</li>
</ul>
</li>
<li>
<p>用maven命令行来区分类是否被禁用</p>
</li>
</ul>
<p>mvn test -Dtest=com.testeru.class3.Demo10Test</p>
<figure><img src="https://gitee.com/datau001/picgo/raw/master/images/test/202112091458065.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>20231008203023</p>
</div></template>


