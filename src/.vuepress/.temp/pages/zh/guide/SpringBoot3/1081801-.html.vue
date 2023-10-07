<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li></li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li></li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>如何使用SpringBoot开发POST请求的Web程序？<br>
POST请求如何携带参数？在代码中如何使用？</p>
</div>
<h2 id="一-post参数传递方式" tabindex="-1"><a class="header-anchor" href="#一-post参数传递方式" aria-hidden="true">#</a> 一.POST参数传递方式</h2>
<p>在 HTTP 请求中，POST 请求通常通过 <strong>请求体（Request Body）</strong> 传递参数，而不是像 GET 请求那样通过路径参数或查询参数。在 POST 请求中，数据会被包含在请求的主体中，而不是直接暴露在 URL 上。</p>
<p>请求体中的数据可以使用不同的数据格式，如 JSON、XML 或表单数据等。具体选择哪种数据格式取决于应用的需求以及服务器端的处理方式。</p>
<p>以下是一些常见的 POST 请求传递参数的方式：</p>
<h3 id="_1-json-数据" tabindex="-1"><a class="header-anchor" href="#_1-json-数据" aria-hidden="true">#</a> 1.JSON 数据</h3>
<p>在 POST 请求中，可以将参数数据序列化为 JSON 格式，然后将其放置在请求体中。服务器端需要解析请求体中的 JSON 数据并将其转换为相应的对象或数据结构进行处理。</p>
<h3 id="_2-表单数据" tabindex="-1"><a class="header-anchor" href="#_2-表单数据" aria-hidden="true">#</a> 2.表单数据</h3>
<p>表单数据通常用于提交表单，如登录表单、注册表单等。这些数据会被编码为 <code v-pre>application/x-www-form-urlencoded</code> 格式，然后放置在请求体中。Spring Boot 默认使用 <code v-pre>@RequestParam</code> 注解来处理表单数据。</p>
<h3 id="_3-multipart-表单数据" tabindex="-1"><a class="header-anchor" href="#_3-multipart-表单数据" aria-hidden="true">#</a> 3.Multipart 表单数据</h3>
<p>当需要上传文件或多种类型的数据时，可以使用 <code v-pre>multipart/form-data</code> 格式。这种格式用于支持<strong>文件上传</strong>等复杂的数据场景。</p>
<h3 id="_4-其他数据格式" tabindex="-1"><a class="header-anchor" href="#_4-其他数据格式" aria-hidden="true">#</a> 4.其他数据格式</h3>
<p>如果应用需要，也可以使用其他数据格式来传递参数，比如 <code v-pre>XML</code> 等。但在实际应用中，JSON 和表单数据是最常见的。</p>
<p>总之，POST 请求通过请求体来传递参数，不同的数据格式可以适用于不同的场景和需求。选择哪种数据格式取决于你的应用要求以及服务器端的处理能力。</p>
<h2 id="二-json格式的请求创建" tabindex="-1"><a class="header-anchor" href="#二-json格式的请求创建" aria-hidden="true">#</a> 二.Json格式的请求创建</h2>
<div class="hint-container tip">
<p class="hint-container-title">需求</p>
<p>通过 POST 请求提交 JSON 数据来注册用户。</p>
</div>
<h3 id="用户实体类创建" tabindex="-1"><a class="header-anchor" href="#用户实体类创建" aria-hidden="true">#</a> 用户实体类创建</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDTO</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> pwd<span class="token punctuation">;</span>

    <span class="token comment">//getter\setter\toString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户注册接口创建" tabindex="-1"><a class="header-anchor" href="#用户注册接口创建" aria-hidden="true">#</a> 用户注册接口创建</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api/users"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PostController</span> <span class="token punctuation">{</span>

    <span class="token comment">//json格式的数据    @PostMapping(produces = "application/json")</span>
    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">UserDTO</span> userDTO<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在这里处理接收到的 user 对象，可以保存到数据库或进行其他业务逻辑处理</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"User created successfully"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，User 类表示用户对象，使用 <code v-pre>@RequestBody</code> 注解将请求体中的 <code v-pre>JSON</code> 数据映射到 User 对象。</p>
<h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3>
<p><strong>Postman</strong>验证：<br>
<img src="@source/zh/guide/springboot3/assets/20230818145230.png" alt="" loading="lazy"></p>
<p><strong>cURL</strong>命令行工具验证：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token parameter variable">-d</span> <span class="token string">'{"username":"user1","password":"password123"}'</span> http://localhost:8990/api/users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三-表单数据" tabindex="-1"><a class="header-anchor" href="#三-表单数据" aria-hidden="true">#</a> 三.表单数据</h2>
<div class="hint-container tip">
<p class="hint-container-title">需求</p>
<p>场景：通过 POST 请求提交表单数据来处理用户登录。</p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//用户登录</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">loginUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这里处理用户登录逻辑，检查用户名和密码是否匹配</span>
    <span class="token keyword">return</span> <span class="token string">"Login successful"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，使用 <code v-pre>@RequestParam</code> 注解来处理表单数据中的参数。</p>
<figure><img src="@source/zh/guide/springboot3/assets/20230818173442.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四-multipart-表单数据" tabindex="-1"><a class="header-anchor" href="#四-multipart-表单数据" aria-hidden="true">#</a> 四.Multipart 表单数据</h2>
<div class="hint-container tip">
<p class="hint-container-title">需求</p>
<p>场景：通过 POST 请求上传文件。</p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//上传文件  a.txt文件内容为abc</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/upload"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"file"</span><span class="token punctuation">)</span> <span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这里处理文件上传逻辑，保存文件到服务器或其他处理</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> bytesRead<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>bytesRead <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytesRead<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token string">"File uploaded successfully"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/zh/guide/springboot3/assets/20230818174416.png" alt="Alt text" loading="lazy"><br>
在这个示例中，使用 <code v-pre>@RequestParam</code> 注解来处理上传的文件。</p>
<h2 id="五-xml格式数据" tabindex="-1"><a class="header-anchor" href="#五-xml格式数据" aria-hidden="true">#</a> 五.XML格式数据</h2>
<div class="hint-container tip">
<p class="hint-container-title">需求</p>
<p>接收用户的订单信息（使用 XML 格式），然后将订单信息保存到数据库。</p>
</div>
<h3 id="_1-pom文件导入对应依赖" tabindex="-1"><a class="header-anchor" href="#_1-pom文件导入对应依赖" aria-hidden="true">#</a> 1.pom文件导入对应依赖</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- 这是 JAXB 实现的核心部分，包含用于处理 JAXB 的基本类和工具 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.sun.xml.bind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jaxb-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.3.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 这是 JAXB 的 API 包，提供了用于绑定 Java 对象与 XML 之间关系的接口和注解 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>javax.xml.bind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jaxb-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 这是 JAXB API 的实际实现，提供执行 XML 绑定操作的运行时类 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.sun.xml.bind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jaxb-impl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- Javassist 是一个字节码操作库，JAXB 使用它来提升对象序列化和反序列化的性能 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.javassist<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>javassist<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.25.0-GA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>这些是与 JAXB（Java Architecture for XML Binding，Java XML 绑定架构）相关的 Maven 依赖项，用于在 Spring Boot 应用程序中处理 XML 数据。</p>
<p>如果你的 Spring Boot 应用程序中使用 JAXB 来进行 XML 绑定操作，这些依赖项是必需的。它们使你能够有效地进行对象的编组（将 Java 对象转换为 XML）和解组（将 XML 转换为 Java 对象）操作。</p>
<p>需要注意的是，尽管 JAXB 在 Java 中是用于 XML 绑定的常见选择，但在 JSON 方面，像 Jackson 这样的更现代的库可能更受青睐。此外，根据项目需求和偏好，你也可以探索其他用于 XML 处理的库。</p>
</div>
<h3 id="_2-创建一个-java-类来表示-xml-数据的结构" tabindex="-1"><a class="header-anchor" href="#_2-创建一个-java-类来表示-xml-数据的结构" aria-hidden="true">#</a> 2.创建一个 Java 类来表示 XML 数据的结构</h3>
<h4 id="xmlelement" tabindex="-1"><a class="header-anchor" href="#xmlelement" aria-hidden="true">#</a> @XmlElement</h4>
<p><code v-pre>@XmlElement</code> 是 Java 中的一个注解，用于在 Java 类中标识字段或方法，指示在将对象序列化为 XML 或反序列化 XML 为对象时，应该如何处理该字段或方法。它是 JAXB（Java Architecture for XML Binding，Java XML 绑定架构）规范的一部分，用于控制 XML 数据与 Java 对象之间的映射关系。</p>
<p>具体来说，@XmlElement 用于以下两种情况：</p>
<h5 id="在-java-类的字段上" tabindex="-1"><a class="header-anchor" href="#在-java-类的字段上" aria-hidden="true">#</a> 在 Java 类的字段上</h5>
<p>当一个类的字段使用 @XmlElement 注解标注时，它告诉 JAXB 在将对象序列化为 XML 数据时，使用指定的字段名称作为 XML 元素的名称。同样，在将 XML 反序列化为对象时，JAXB 会根据 XML 元素名称来找到对应的 Java 类字段，并将值填充到该字段中。</p>
<h5 id="在-java-类的-getter-方法上" tabindex="-1"><a class="header-anchor" href="#在-java-类的-getter-方法上" aria-hidden="true">#</a> 在 Java 类的 getter 方法上</h5>
<p>如果一个类的字段没有直接暴露，而是通过 getter 方法访问，你可以在 getter 方法上使用 @XmlElement 注解。这告诉 JAXB 在将对象序列化为 XML 数据时，使用指定的 getter 方法的名称作为 XML 元素的名称。反过来，在将 XML 反序列化为对象时，JAXB 会使用 getter 方法来设置字段的值。</p>
<h4 id="实体类代码" tabindex="-1"><a class="header-anchor" href="#实体类代码" aria-hidden="true">#</a> 实体类代码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 用于表示订单信息的类</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">XmlElement</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">XmlRootElement</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@XmlRootElement</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"order"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderDTO</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> orderId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> productName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> quantity<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"OrderDTO{"</span> <span class="token operator">+</span>
                <span class="token string">"orderId='"</span> <span class="token operator">+</span> orderId <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", productName='"</span> <span class="token operator">+</span> productName <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", quantity="</span> <span class="token operator">+</span> quantity <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@XmlElement</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getOrderId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> orderId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOrderId</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>orderId <span class="token operator">=</span> orderId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@XmlElement</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getProductName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> productName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setProductName</span><span class="token punctuation">(</span><span class="token class-name">String</span> productName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>productName <span class="token operator">=</span> productName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@XmlElement</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getQuantity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> quantity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setQuantity</span><span class="token punctuation">(</span><span class="token keyword">int</span> quantity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>quantity <span class="token operator">=</span> quantity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-controller-中处理-xml-post-请求" tabindex="-1"><a class="header-anchor" href="#_3-controller-中处理-xml-post-请求" aria-hidden="true">#</a> 3.Controller 中处理 XML POST 请求</h3>
<p>接下来，在你的 Controller 类中，使用 @RequestBody 注解来接收 XML 数据，并使用 Java 的 XML 绑定（JAXB）来将 XML 数据映射到相应的参数对象，然后将订单信息保存到数据库：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/order"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">createOrder</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">String</span> xmlData<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JAXBException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用 JAXB 进行 XML 数据解析</span>
    <span class="token class-name">JAXBContext</span> jaxbContext <span class="token operator">=</span> <span class="token class-name">JAXBContext</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token class-name">OrderDTO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Unmarshaller</span> unmarshaller <span class="token operator">=</span> jaxbContext<span class="token punctuation">.</span><span class="token function">createUnmarshaller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">StringReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringReader</span><span class="token punctuation">(</span>xmlData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">OrderDTO</span> order <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">OrderDTO</span><span class="token punctuation">)</span> unmarshaller<span class="token punctuation">.</span><span class="token function">unmarshal</span><span class="token punctuation">(</span>reader<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将订单信息保存到数据库</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token string">"Order created and saved successfully"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>@PostMapping</code> 注解表示这是一个处理 POST 请求的方法，使用 @RequestBody 注解来接收请求体中的 XML 数据。然后，使用 JAXB 来解析 XML 数据并将其映射到 Order 类的对象，然后将订单信息保存到数据库。</p>
<p>请注意，上述示例直接输出打印订单操作。实际应用中，你需要根据项目的具体情况进行适当的配置和处理，如异常处理、数据验证等。</p>
<h3 id="验证-1" tabindex="-1"><a class="header-anchor" href="#验证-1" aria-hidden="true">#</a> 验证</h3>
<figure><img src="@source/zh/guide/springboot3/assets/20230821101450.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


