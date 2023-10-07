<template><div><h1 id="ssh配置多个账号" tabindex="-1"><a class="header-anchor" href="#ssh配置多个账号" aria-hidden="true">#</a> SSH配置多个账号</h1>
<h2 id="生成配置文件" tabindex="-1"><a class="header-anchor" href="#生成配置文件" aria-hidden="true">#</a> 生成配置文件</h2>
<ul>
<li><code v-pre>ssh-keygen -t rsa -C 邮箱</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"18612725214@163.com"</span>

Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/Users/gaigai/.ssh/id_rsa<span class="token punctuation">)</span>: 

/Users/gaigai/.ssh/25214_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ssh-keygen -t rsa -C &quot;<a href="mailto:gaijinfeng@ceshiren.com">gaijinfeng@ceshiren.com</a>&quot;<br>
/Users/gaigai/.ssh/ceshiren_id_rsa</p>
<h2 id="配置config" tabindex="-1"><a class="header-anchor" href="#配置config" aria-hidden="true">#</a> 配置config</h2>
<ul>
<li>.ssh/config</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Host github25214
AddKeysToAgent yes
UseKeychain yes
LogLevel ERROR
HostName github.com
User git
IdentityFile ~/.ssh/25214_id_rsa



# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
AddKeysToAgent yes
UseKeychain yes
LogLevel ERROR
IdentityFile ~/.ssh/ceshiren_id_rsa

Host gitlab.ceshiren.com
HostName gitlab.ceshiren.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/ceshiren_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ssh连接验证</p>
</div></template>


