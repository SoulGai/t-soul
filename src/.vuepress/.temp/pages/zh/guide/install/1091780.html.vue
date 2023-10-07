<template><div><h2 id="安装-gitlab" tabindex="-1"><a class="header-anchor" href="#安装-gitlab" aria-hidden="true">#</a> 安装 GitLab</h2>
<h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">## 通过运行以下命令确保所有系统包都是最新的 apt 终端中的命令。</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential <span class="token function">curl</span> <span class="token function">file</span> <span class="token function">git</span> ca-certificates

<span class="token comment">## 将 GitLab 存储库添加到您的 Ubuntu 系统</span>
<span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
<span class="token comment">## 使用以下命令下载 Gitlab 包</span>
<span class="token function">wget</span> --content-disposition https://packages.gitlab.com/gitlab/gitlab-ce/packages/ubuntu/bionic/gitlab-ce_14.1.2-ce.0_amd64.deb/download.deb
<span class="token comment">## 使用以下命令安装下载的 .deb 包</span>
dpkg <span class="token parameter variable">-i</span> gitlab-ce_14.1.2-ce.0_amd64.deb
<span class="token comment">## 运行以下命令启动 GitLab 实例</span>
gitlab-ctl reconfigure
gitlab-ctl start
<span class="token comment">## 获取 GitLab 服务的状态</span>
gitlab-ctl status
<span class="token comment">## 配置防火墙。Ubuntu 22.04 有 ufw 默认运行的防火墙。 通过端口 HTTP 和 HTTPS 启用连接：</span>
<span class="token function">sudo</span> ufw allow https
<span class="token function">sudo</span> ufw allow http
<span class="token function">sudo</span> ufw allow <span class="token function">ssh</span>
<span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
<span class="token function">sudo</span> ufw status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="端口开放" tabindex="-1"><a class="header-anchor" href="#端口开放" aria-hidden="true">#</a> 端口开放</h3>
<figure><img src="@source/zh/guide/install/assets/20230731182645.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>云服务器入方向开通80端口</p>
<h3 id="打开验证" tabindex="-1"><a class="header-anchor" href="#打开验证" aria-hidden="true">#</a> 打开验证</h3>
<p>浏览器打开：<a href="http://121.36.208.209/users/sign_in" target="_blank" rel="noopener noreferrer">http://121.36.208.209/users/sign_in<ExternalLinkIcon/></a></p>
<figure><img src="@source/zh/guide/install/assets/20230731182737.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="配置gitlab域名-否则项目git-clone的地址时错" tabindex="-1"><a class="header-anchor" href="#配置gitlab域名-否则项目git-clone的地址时错" aria-hidden="true">#</a> 配置GitLab域名，否则项目git clone的地址时错</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span>  /etc/gitlab/gitlab.rb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p>编辑：external_url '你的网址'</p>
<blockquote>
<p>例如：external_url '<a href="http://121.36.208.209/" target="_blank" rel="noopener noreferrer">http://121.36.208.209/<ExternalLinkIcon/></a>'</p>
</blockquote>
</li>
<li>
<p>编辑完成后，再sudo gitlab-ctl reconfigure一下，使配置生效</p>
</li>
</ol>
</div></template>


