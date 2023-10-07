<template><div><figure><img src="@source/zh/guide/performance/assets/ijmeter_calls.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h2>
<p>获取<strong>accesstoken</strong>是调用商城API接口的第一步，相当于创建了一个登录凭证，其它的业务API接口，都需要依赖于<strong>accesstoken</strong>来鉴权调用者身份。</p>
<p><strong>请求方式：</strong> POST（<strong>HTTP</strong>）</p>
<p><strong>请求地址：</strong><code v-pre>http://81.70.96.121:9091/api/v1/user/login</code></p>
<p><strong>请求包体：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  "authRequest": {
      "userName": "user01",
      "password": "pwd"
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>userName</td>
<td>是</td>
<td>用户名，默认user01</td>
</tr>
<tr>
<td>password</td>
<td>是</td>
<td>密码，默认密码pwd</td>
</tr>
</tbody>
</table>
<p><strong>返回结果：</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token string">"3b6754f00bb0063071c5b71ce2b56b4ed0ce56a63493e785bea85b74c41ce200"</span><span class="token punctuation">,</span> 
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"login success"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：<strong>accesstoken</strong> 使用方法：在每个业务接口的headers中添加token键值对，键为“accesstoken”，值为具体的token值。</p>
<table>
<thead>
<tr>
<th>字段</th>
<th>值</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>accesstoken</td>
<td>随机文本，例如“7172bbc7-f81a-4a78-9220-e55e3cfdf98c”</td>
<td>通过登录接口获取</td>
</tr>
</tbody>
</table>
<h2 id="浏览菜单" tabindex="-1"><a class="header-anchor" href="#浏览菜单" aria-hidden="true">#</a> 浏览菜单</h2>
<p><strong>请求方式：</strong> GET（<strong>HTTP</strong>）</p>
<p><strong>请求地址：</strong><code v-pre>http://81.70.96.121:9091/api/v1/menu/list</code></p>
<p><strong>返回结果：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  "breakfast": [
    {
      "menu_name": "小笼包", 
      "menu_nunber": "01", 
      "menu_price": 5.5
    }, 
    {
      "menu_name": "八宝粥", 
      "menu_nunber": "02", 
      "menu_price": 3.0
    }, 
    {
      "menu_name": "油条", 
      "menu_nunber": "03", 
      "menu_price": 1.5
    }, 
    {
      "menu_name": "茶叶蛋", 
      "menu_nunber": "04", 
      "menu_price": 1.0
    }, 
    {
      "menu_name": "豆包", 
      "menu_nunber": "05", 
      "menu_price": 1.5
    }, 
    {
      "menu_name": "烧饼", 
      "menu_nunber": "06", 
      "menu_price": 2.0
    }
  ], 
  "code": "200", 
  "dinner": [
    {
      "menu_name": "辣椒炒肉", 
      "menu_nunber": "13", 
      "menu_price": 21.0
    }, 
    {
      "menu_name": "豌豆肉片汤", 
      "menu_nunber": "14", 
      "menu_price": 15.0
    }, 
    {
      "menu_name": "原味五花肉卷", 
      "menu_nunber": "15", 
      "menu_price": 26.0
    }, 
    {
      "menu_name": "醋溜白菜", 
      "menu_nunber": "16", 
      "menu_price": 20.0
    }, 
    {
      "menu_name": "地三鲜", 
      "menu_nunber": "17", 
      "menu_price": 25.5
    }, 
    {
      "menu_name": "红烧排骨", 
      "menu_nunber": "18", 
      "menu_price": 39.0
    }
  ], 
  "lunch": [
    {
      "menu_name": "宫保鸡丁", 
      "menu_nunber": "07", 
      "menu_price": 17.0
    }, 
    {
      "menu_name": "锅包肉", 
      "menu_nunber": "08", 
      "menu_price": 25.0
    }, 
    {
      "menu_name": "糖醋排骨", 
      "menu_nunber": "09", 
      "menu_price": 35.0
    }, 
    {
      "menu_name": "蒜台炒肉片", 
      "menu_nunber": "10", 
      "menu_price": 30.0
    }, 
    {
      "menu_name": "酸辣土豆丝", 
      "menu_nunber": "11", 
      "menu_price": 25.5
    }, 
    {
      "menu_name": "红烧茄子", 
      "menu_nunber": "12", 
      "menu_price": 32.0
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="乱码解决" tabindex="-1"><a class="header-anchor" href="#乱码解决" aria-hidden="true">#</a> 乱码解决</h3>
<p>Beanshell后置处理器：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String s2 = new String(prev.getResponseData(), "UTF-8");
//---------------一下步骤为转码过程---------------
char aChar;
int len = s2.length();
StringBuffer outBuffer = new StringBuffer(len);
for (int x = 0; x &lt; len;)
{
    aChar = s2.charAt(x++);
    if (aChar == '\\') {
        aChar = s2.charAt(x++);
        if (aChar == 'u') {
            int
            value = 0;
            for (int i = 0;
            i &lt; 4;
            i++
        )
            {
                aChar = s2.charAt(x++);
                switch (aChar) {
                    case'0':
                    case'1':
                    case'2':
                    case'3':
                    case'4':
                    case'5':
                    case'6':
                    case'7':
                    case'8':
                    case'9':
                        value = (value &lt;&lt; 4) + aChar - '0';
                        break;
                    case'a':
                    case'b':
                    case'c':
                    case'd':
                    case'e':
                    case'f':
                        value = (value &lt;&lt; 4) + 10 + aChar - 'a';
                        break;
                    case'A':
                    case'B':
                    case'C':
                    case'D':
                    case'E':
                    case'F':
                        value = (value &lt;&lt; 4) + 10 + aChar - 'A';
                        break;
                    default:
                        throw new IllegalArgumentException(
                            "Malformed   \\uxxxx  encoding.");
                }
            }
            outBuffer.append((char)
            value
        )
            ;
        } else {
            if (aChar == 't')
                aChar = '\t';
            else if (aChar == 'r')
                aChar = '\r';
            else if (aChar == 'n')
                aChar = '\n';
            else if (aChar == 'f')
                aChar = '\f';
            outBuffer.append(aChar);
        }
    } else
        outBuffer.append(aChar);
}
//-----------------以上内容为转码过程---------------------------
//将转成中文的响应结果在查看结果树中显示

prev.setResponseData(outBuffer.toString());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="订单确认" tabindex="-1"><a class="header-anchor" href="#订单确认" aria-hidden="true">#</a> 订单确认</h2>
<p><strong>请求方式：</strong> POST（<strong>HTTP</strong>）</p>
<p><strong>请求地址：</strong><code v-pre>http://81.70.96.121:9091/api/v1/menu/confirm</code></p>
<p><strong>请求包体：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "order_list": [
        {
            "menu_nunber" : "01",
            "number" : 2
        },
        {
            "menu_nunber" : "03",
            "number" : 2
        },
        {
            "menu_nunber" : "04",
            "number" : 2
        },
        {
            "menu_nunber" : "05",
            "number" : 3
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>menu_nunber</td>
<td>是</td>
<td>菜单编号，str</td>
</tr>
<tr>
<td>number</td>
<td>是</td>
<td>数量，int</td>
</tr>
</tbody>
</table>
<p><strong>返回结果：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  "code": "200", 
  "message": "Order success.", 
  "total": 9
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户注销" tabindex="-1"><a class="header-anchor" href="#用户注销" aria-hidden="true">#</a> 用户注销</h2>
<p><strong>请求方式：</strong> DELETE<strong>HTTP</strong>）</p>
<p><strong>请求地址：</strong><code v-pre>http://81.70.96.121:9091/api/v1/user/logout</code></p>
<p><strong>返回结果：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  "code": "200", 
  "message": "logout success"
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


