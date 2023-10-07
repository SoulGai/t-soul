<template><div><h2 id="本章要点" tabindex="-1"><a class="header-anchor" href="#本章要点" aria-hidden="true">#</a> 本章要点</h2>
<ol>
<li>运行模块介绍</li>
<li>选项模块介绍</li>
</ol>
<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2>
<ol>
<li>运行、选项模块使用。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<div class="hint-container tip">
<p class="hint-container-title">Question</p>
<p>JMeter脚本编写完成后如何运行？对应的界面都是英文显示，不友好，如何把JMeter界面设置为中文？</p>
</div>
<figure><img src="@source/zh/guide/performance/assets/.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1>
<p>服务的部署：</p>
<ol>
<li>
<p>直接在服务器centos系统上使用Linux命令直接部署；</p>
</li>
<li>
<p>用 Docker 的方式进行安装部署。「建议使用」</p>
</li>
</ol>
<blockquote>
<p>因为现在整个互联网，为了更快的 DevOps /更好的运维，已经大部分的公司往容器化部署方向改进，能使用容器部署的都会使用容器部署服务。包括很多公司<strong>测试环境</strong>都在用 Docker 的方式来去实现。</p>
</blockquote>
<h4 id="devops" tabindex="-1"><a class="header-anchor" href="#devops" aria-hidden="true">#</a> DevOps</h4>
<p>DevOps（Development and Operations）是一种<strong>软件开发和运维的方法论</strong>，旨在通过协作、自动化和迭代来提高软件开发和运维的效率、质量和可靠性。DevOps的<strong>核心思想</strong>是 <strong>将软件开发和运维团队紧密协作，建立自动化的工具链和流程，促进快速开发、持续交付和快速反馈</strong> 。</p>
<p>DevOps方法论的实践需要借助一系列工具和技术，包括源代码管理、持续集成、持续交付、配置管理、<strong>容器化</strong>、自动化测试、监控和日志分析等。这些工具和技术帮助开发和运维团队更高效地协作，更快速地交付软件，并且在软件运行期间提供实时的性能监控和故障排查。</p>
<p>DevOps的实践对于现代软件开发和运维至关重要，可以提高软件开发的质量和效率，缩短软件交付周期，减少故障率和修复时间，降低成本，提升客户满意度。</p>
<h2 id="docker-介绍" tabindex="-1"><a class="header-anchor" href="#docker-介绍" aria-hidden="true">#</a> Docker 介绍</h2>
<p><strong>Docker是什么？？</strong></p>
<p>Docker是一个开源的容器化平台，用于构建、打包、发布和运行应用程序。它可以让开发人员将应用程序及其依赖项打包成一个轻量级、可移植的容器，并在不同的环境中运行，保证应用程序在不同环境中的一致性和可重复性。</p>
<p>Docker基于Linux容器技术，但是提供了更高级别的抽象和工具，使得容器化应用程序变得更加简单和易于使用。</p>
<p>使用Docker，开发人员可以快速创建和部署应用程序，并且可以在不同的计算机、云平台和数据中心中移植应用程序。Docker已经成为现代应用程序开发和部署的重要组成部分，被广泛使用在开发、测试、生产等各个环节中。</p>
<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2>
<p>Docker 包括三个基本概念:</p>
<h3 id="镜像-image" tabindex="-1"><a class="header-anchor" href="#镜像-image" aria-hidden="true">#</a> 镜像（Image）</h3>
<p>Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。</p>
<h3 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container" aria-hidden="true">#</a> 容器（Container）</h3>
<p>镜像（Image）和容器（Container）的关系，就像是 <strong>面向对象程序设计中的类和实例一样</strong> ，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。</p>
<h3 id="仓库-repository" tabindex="-1"><a class="header-anchor" href="#仓库-repository" aria-hidden="true">#</a> 仓库（Repository）</h3>
<p>仓库可看着一个代码控制中心，用来保存镜像。</p>
<p>Docker 使用客户端-服务器 (C/S) 架构模式，使用远程API来管理和创建Docker容器。</p>
<p>Docker 容器通过 Docker 镜像来创建。</p>
<p>容器与镜像的关系类似于面向对象编程中的对象与类。</p>
<figure><img src="@source/zh/guide/performance/assets/576507-docker1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="docker-架构" tabindex="-1"><a class="header-anchor" href="#docker-架构" aria-hidden="true">#</a> Docker 架构</h2>
<figure><img src="@source/zh/guide/performance/assets/20230508162202.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如上图所示，Docker使用CS体系结构，Client通过和Docker的Daemon来完成Docker容器的构建、发布、运行工作，Client和Daemon可以在同一台主机，也可以在不同主机上(通过网络进行交互）。</p>
<h3 id="docker-daemon" tabindex="-1"><a class="header-anchor" href="#docker-daemon" aria-hidden="true">#</a> Docker Daemon</h3>
<p>Docker Daemon(dockerd)监听 通过 Docker API 过来的请求，并管理 Docker 对象，如图像、容器、网络和卷。 守护进程还可以与其他守护进程通信，用来管理 Docker 服务。</p>
<h3 id="docker-client" tabindex="-1"><a class="header-anchor" href="#docker-client" aria-hidden="true">#</a> Docker Client</h3>
<p>Docker Client(Docker命令)是许多 Docker 用户与 Docker 交互的主要方式。 当使用诸如 docker run 之类的命令时，客户机将这些命令发送给 dockerd，然后又dockerd执行这些命令。 Docker 命令使用 Docker API和dockerd进行通信。 Docker 客户机可以与多个守护进程通信。</p>
<h3 id="docker-registries" tabindex="-1"><a class="header-anchor" href="#docker-registries" aria-hidden="true">#</a> Docker Registries</h3>
<p>Docker Registries 用来存储Docker Image， Docker Hub是一个公共Docker Regstires, 类似于公用的maven仓库，是Docker默认配置的。 你也可以注册自己的私有Regsitries</p>
<p>当您使用 docker pull 或 docker 运行命令时，所需的映像将从您配置的Regsitries中提取出来。 当您使用 docker push 命令时，您的映像将被推送到您配置的Regsitries中。</p>
<h2 id="docker-安装" tabindex="-1"><a class="header-anchor" href="#docker-安装" aria-hidden="true">#</a> Docker 安装</h2>
<p>云服务上安装Docker服务，使用 yum命令安装Docker。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 直接安装最新版本的docker</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>-y</strong>：所有选择 Y/N 的地方都默认为 Y。</p>
<figure><img src="@source/zh/guide/performance/assets/20230508160308.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>最后结果为：Complete!说明安装成功。</p>
<figure><img src="@source/zh/guide/performance/assets/20230508160124.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果是mac电脑可以直接使用brew命令行安装docker，但是不建议大家在window系统或者mac系统上使用docker。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker服务启动" tabindex="-1"><a class="header-anchor" href="#docker服务启动" aria-hidden="true">#</a> Docker服务启动</h3>
<p>如果不启动Docker服务直接运行docker命令，会在命令行终端提示当前 docker 进程是否正在运行？如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the <span class="token function">docker</span> daemon running?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508160822.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 启动docker服务</span>
systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>docker安装就相当于我们在电脑端安装了qq音乐的软件，但是这个时候qq音乐就能使用了吗？并不是的，我们需要打开qq音乐软件才能进入软件里面。这就是为什么docker需要分为2个步骤。</p>
</blockquote>
<h3 id="更新docker版本" tabindex="-1"><a class="header-anchor" href="#更新docker版本" aria-hidden="true">#</a> 更新docker版本</h3>
<h4 id="_1-卸载旧版本" tabindex="-1"><a class="header-anchor" href="#_1-卸载旧版本" aria-hidden="true">#</a> 1. 卸载旧版本</h4>
<p>卸载旧版本的 Docker，可以使用以下命令卸载：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508210138.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-更新-yum-软件包" tabindex="-1"><a class="header-anchor" href="#_2-更新-yum-软件包" aria-hidden="true">#</a> 2. 更新 yum 软件包</h4>
<p>更新 yum 软件包列表：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum update <span class="token parameter variable">-y</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508210211.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-安装-docker-的依赖包" tabindex="-1"><a class="header-anchor" href="#_3-安装-docker-的依赖包" aria-hidden="true">#</a> 3. 安装 Docker 的依赖包</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508210300.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-添加-docker-的-yum-软件源" tabindex="-1"><a class="header-anchor" href="#_4-添加-docker-的-yum-软件源" aria-hidden="true">#</a> 4. 添加 Docker 的 YUM 软件源</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508210514.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-安装最新版的-docker" tabindex="-1"><a class="header-anchor" href="#_5-安装最新版的-docker" aria-hidden="true">#</a> 5. 安装最新版的 Docker</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508210638.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_6-启动-docker-服务" tabindex="-1"><a class="header-anchor" href="#_6-启动-docker-服务" aria-hidden="true">#</a> 6. 启动 Docker 服务</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>

<span class="token comment">#设置开机启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508210742.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="总安装命令" tabindex="-1"><a class="header-anchor" href="#总安装命令" aria-hidden="true">#</a> 总安装命令</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum update <span class="token parameter variable">-y</span> 
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
<span class="token function">sudo</span> yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么docker能比较方便-比较简单的装系统呢" tabindex="-1"><a class="header-anchor" href="#为什么docker能比较方便-比较简单的装系统呢" aria-hidden="true">#</a> 为什么Docker能比较方便/比较简单的装系统呢？</h2>
<p>Docker不像我们Mac电脑或者Window系统的电脑上安装的时候有很多软件或者工具都需要我们自己手动去装。</p>
<p>Docker 维护一个 <strong>镜像</strong> 的概念。这个镜像实际上它包含了一是<strong>操作系统</strong>，二是在<strong>操作系统中已经内置好的一些应用或者软件</strong>，都可以帮我们去提前安装完成。</p>
<p>然后在每次运行的时候，我们只需要去做 <strong>两</strong>件事情：</p>
<ol>
<li>
<p><strong>找到镜像</strong>。比如从 <strong>远端</strong> 或者从<strong>本地制作镜像</strong>找需要的镜像；</p>
</li>
<li>
<p><strong>启动镜像</strong>。就像我们在启动一个系统一样，然后在本地通过 <strong>docker file</strong> 或者<strong>docker run命令行</strong>的方式，把它启动起来</p>
</li>
</ol>
<p>这样我们就能使用 <strong>Docker</strong> ，即使不通过很多的配置，就可以快速去启动一个基本的 我们需要的服务。</p>
<blockquote>
<p>无论是 <strong>Prometheus</strong>「普罗米修斯」、 <strong>JMeter</strong> ，还是<strong>JVM服务</strong>，都可以用这种方式启动。</p>
</blockquote>
<h2 id="docker-常用命令" tabindex="-1"><a class="header-anchor" href="#docker-常用命令" aria-hidden="true">#</a> Docker 常用命令</h2>
<figure><img src="@source/zh/guide/performance/assets/20230508143130.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下面来介绍一下docker的常见命令。</p>
<h3 id="版本查看" tabindex="-1"><a class="header-anchor" href="#版本查看" aria-hidden="true">#</a> 版本查看</h3>
<p>无需启动docker服务就可以验证版本号。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">-v</span>

<span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508160632.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/performance/assets/20230510174212.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="镜像相关命令" tabindex="-1"><a class="header-anchor" href="#镜像相关命令" aria-hidden="true">#</a> 镜像相关命令</h3>
<h4 id="本地镜像查看" tabindex="-1"><a class="header-anchor" href="#本地镜像查看" aria-hidden="true">#</a> 本地镜像查看</h4>
<p>Docker镜像是一个轻量级、可移植的容器化软件打包格式，包含了应用程序及其所有的依赖项和配置信息。Docker镜像可以被部署到任何支持Docker的平台上，如Docker引擎、Kubernetes等，从而实现快速、可重复、可移植的应用程序部署和运行。</p>
<p>Docker镜像是通过Dockerfile定义的，Dockerfile是一种文本文件，其中包含了应用程序的构建、配置和部署指令。Dockerfile可以使用一系列基础镜像和构建步骤来构建应用程序的镜像。基础镜像是指Docker镜像的基础，它包含了一些常用的操作系统、应用程序、工具和库等。构建步骤是指Dockerfile中的每个指令，如COPY、RUN、EXPOSE等，用于构建和配置应用程序的镜像。</p>
<p>Docker镜像的优势在于它可以实现轻量级、快速、可重复的应用程序部署和运行。通过Docker镜像，应用程序的所有依赖项和配置信息都被打包到镜像中，从而避免了应用程序在不同环境中的依赖冲突和配置问题。另外，Docker镜像的构建和部署过程都可以通过自动化脚本和工具来实现，提高了软件开发和运维的效率和可靠性。</p>
<blockquote>
<p>所有docker的一个描述都是以 <strong>docker file</strong> 来去描述和形容的，每次 docker file 通过docker build的命令，能生成一个镜像。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Docker images命令只能列出本地计算机上的Docker镜像列表</strong>。</p>
<figure><img src="@source/zh/guide/performance/assets/20230508161857.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>启动 Docker 服务后，再次查看镜像为空，不报错。</p>
<p>由于我们刚刚安装好docker并没有在docker内下载、安装其他的软件，所以，当前docker的镜像里面是空的。</p>
<h5 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>REPOSITORY     TAG          IMAGE ID       CREATED       SIZE
nginx          latest     9d8f398e63ed    2 weeks ago    133MB
redis          latest     fdd3c10f3f68    3 weeks ago    105MB
mysql          latest     4a4f4c72f741    4 weeks ago    556MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>REPOSITORY</strong>：Docker镜像的仓库名称，格式为 <strong>&lt;仓库名称&gt;</strong> 。仓库名称可以是Docker Hub上的公共仓库名称或私有仓库名称，标签一般为Docker镜像的版本号或标识符。</p>
<p><strong>TAG</strong>：标记 Docker 镜像的标签。同一个仓库可以有多个标签，每个标签对应一个不同的镜像版本。</p>
<blockquote>
<p>例如，nginx:latest表示Docker Hub上的公共nginx仓库中的最新版本镜像。</p>
</blockquote>
<p><strong>IMAGE ID</strong>：每个 Docker 镜像都有一个唯一的 ID 标识符，它由一串长字符串表示，用于标识该镜像的唯一性。</p>
<p><strong>CREATED</strong>：Docker镜像的创建时间。</p>
<p><strong>SIZE</strong>：Docker 镜像的大小，以<strong>字节</strong>为单位显示。该值指 Docker 镜像在本地计算机上占用的磁盘空间大小，包括镜像的各个层和元数据信息。</p>
<h4 id="远端镜像查看" tabindex="-1"><a class="header-anchor" href="#远端镜像查看" aria-hidden="true">#</a> 远端镜像查看</h4>
<p>需要注意的是，Docker images命令只能列出本地计算机上的Docker镜像列表，如果需要<strong>查看远程Docker仓库</strong>中的镜像列表，可以使用<strong>Docker search</strong>命令。</p>
<p>在 Docker Hub 上搜索公共镜像，并且可以根据不同的搜索条件进行过滤，从而找到需要的镜像。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> search <span class="token parameter variable">--limit</span> <span class="token number">10</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>该命令将返回 Docker Hub 上名称包含 nginx 的前 10 个镜像的相关信息。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> search influxdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>该命令将返回 Docker Hub 上名称包含 influxdb 的镜像的相关信息。</p>
</blockquote>
<figure><img src="@source/zh/guide/performance/assets/20230508174151.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="远端镜像下载" tabindex="-1"><a class="header-anchor" href="#远端镜像下载" aria-hidden="true">#</a> 远端镜像下载</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull influxdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>下载完成后，使用本地镜像查看命令验证。</p>
</blockquote>
<figure><img src="@source/zh/guide/performance/assets/20230508175950.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>docker pull就把查找到的远端镜像下载到本地，如果没有加上具体的版本号的话默认下载最新版本的镜像。</p>
<blockquote>
<p>如果说我们自己的服务开发了一个新的镜像，可以用 Docker push 的方式，把它上传到远端，这样在日后其他的机器上也可以让需要的人使用到。</p>
</blockquote>
<h3 id="容器相关命令" tabindex="-1"><a class="header-anchor" href="#容器相关命令" aria-hidden="true">#</a> 容器相关命令</h3>
<p>看一下常用命令这张图，对应下面的一层是docker容器的命令。</p>
<h4 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器" aria-hidden="true">#</a> 启动容器</h4>
<p>docker run 会基于一个已有的镜像启动一个container容器。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Docker 中用于创建和运行容器的命令。它会根据指定的镜像创建一个新的容器，并在容器内运行指定的命令或应用程序。</p>
<p>具体如何启动在后面给大家说，因为启动的参数太多。</p>
<p>容器有三种状态：<strong>运行中、被终止、被停止</strong>。</p>
<p><strong>运行中（Running）</strong>：指容器正在运行中，正在执行相应的命令或应用程序。可以通过 <strong>docker ps</strong> 命令查看所有正在运行的容器。</p>
<p><strong>停止（Stopped）</strong>：指容器已经停止运行，但是仍然存在于 Docker 容器环境中。可以通过 <strong>docker ps -a</strong> 命令查看所有的容器，包括停止的容器。</p>
<h4 id="查看所有容器" tabindex="-1"><a class="header-anchor" href="#查看所有容器" aria-hidden="true">#</a> 查看所有容器</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 所有正在运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># 查看所有的容器，包括停止的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="influxdb" tabindex="-1"><a class="header-anchor" href="#influxdb" aria-hidden="true">#</a> InfluxDB</h1>
<p>InfluxDB时序性数据库。</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>InfluxDB是一个开源的时间序列数据库，特别适合用于存储和查询大量时间序列数据，例如监控数据、传感器数据、日志数据等。它使用Go语言编写，具有高性能、水平可扩展、易于使用等特点。InfluxDB的主要特点包括：</p>
<p>时间序列数据库：InfluxDB是专门为时间序列数据设计的数据库，可以高效地存储和查询大量时间序列数据。</p>
<p>高性能：InfluxDB使用自己开发的TSDB（Time Series Database）引擎，可以高效地处理时间序列数据。</p>
<p>水平可扩展：InfluxDB可以通过集群方式进行水平扩展，以支持大规模的数据存储和查询。</p>
<p>易于使用：InfluxDB提供了简单易用的API和查询语言，可以方便地进行数据的存储、查询和可视化。</p>
<p>插件化架构：InfluxDB采用插件化架构，可以方便地扩展功能，例如添加新的数据源、数据输出等。</p>
<p>InfluxDB广泛应用于监控、物联网、日志分析等领域，例如Prometheus、Grafana等开源项目都可以与InfluxDB进行集成，提供完整的监控和可视化解决方案。</p>
<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2>
<figure><img src="@source/zh/guide/performance/assets/20230508224035.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 必须指定版本</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8083</span>:8083 <span class="token parameter variable">-p8086:8086</span> <span class="token parameter variable">--name</span> influxdb influxdb:1.8


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Docker 中启动 InfluxDB 容器。下面是各个参数的含义：</p>
<p><strong>-d</strong>：以后台模式启动容器。<br>
<strong>-p 8083:8083</strong>：将本地机器的 8083 端口映射到容器内的 8083 端口，用于 InfluxDB 的 <strong>Web 管理界面</strong>。<br>
<strong>-p 8086:8086</strong>：将本地机器的 8086 端口映射到容器内的 8086 端口，用于 InfluxDB 的 <strong>HTTP API</strong>。</p>
<p><strong>--expose 8086</strong>：向 Docker 网络暴露容器的 8090 端口。<br>
<strong>--name influxsrv</strong>：给容器指定一个名称。<br>
<strong>influxdb:1.8</strong>：要启动的 InfluxDB 镜像。最新版本可能数据兼容上有问题。没有界面化，无法通过界面化访问。</p>
<h4 id="_1-进入容器内部" tabindex="-1"><a class="header-anchor" href="#_1-进入容器内部" aria-hidden="true">#</a> 1. 进入容器内部</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> influxdb <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508224437.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-创建jmeter数据库" tabindex="-1"><a class="header-anchor" href="#_2-创建jmeter数据库" aria-hidden="true">#</a> 2. 创建jmeter数据库</h4>
<p>在容器内部创建jmeter数据库，用于收集JMeter发送的压测数据：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 执行 influx命令进入命令台</span>
influx
<span class="token comment"># 查看当前所有数据库</span>
show databases<span class="token punctuation">;</span>
<span class="token comment"># 执行类sql语句 创建jmeter数据库：</span>
create database jmeter<span class="token punctuation">;</span>
<span class="token comment"># 创建完jmeter数据库之后执行如下命令验证数据库已经创建成功: </span>
show databases<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508224820.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/performance/assets/20230508224635.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/performance/assets/20230510155002.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="docker还原-influxdb-数据" tabindex="-1"><a class="header-anchor" href="#docker还原-influxdb-数据" aria-hidden="true">#</a> docker还原 InfluxDB 数据</h2>
<p>要在 Docker 中还原 InfluxDB 数据，你需要使用 influxd 命令行工具的还原功能。以下是一个示例命令行序列，用于在 Docker 中还原 InfluxDB 数据：</p>
<ol>
<li>将包含要还原的数据的备份文件复制到 InfluxDB 容器中：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> /path/to/backup <span class="token operator">&lt;</span>container_id_or_name<span class="token operator">></span>:/backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> /root/influxdb influxdb:/backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 /path/to/backup 替换为包含要还原的数据的备份文件路径。将 &lt;container_id_or_name&gt; 替换为 InfluxDB 容器的 ID 或名称。这将从主机复制备份文件到容器内的 /backup 目录。</p>
<ol start="2">
<li>在容器内执行还原命令：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container_id_or_name<span class="token operator">></span> influxd restore <span class="token parameter variable">-portable</span> <span class="token parameter variable">-db</span> <span class="token operator">&lt;</span>database_name<span class="token operator">></span> /backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 <code v-pre>&lt;container_id_or_name&gt;</code> 替换为 InfluxDB 容器的 ID 或名称。将 &lt;database_name&gt; 替换为要还原数据的目标数据库名称。此命令将在容器内执行还原操作，并将备份文件中的数据还原到指定的数据库中。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> influxdb influxd restore <span class="token parameter variable">-portable</span> <span class="token parameter variable">-db</span> jmeter /backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入容器验证是否有jmeter数据库以及是否有数据。</p>
<figure><img src="@source/zh/guide/performance/assets/20230510162351.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>请确保备份文件的格式与 InfluxDB 版本兼容，并且在还原之前已经在容器内复制了正确的备份文件。在执行还原操作之前，你可以使用 docker exec 命令进入 InfluxDB 容器，检查 /backup 目录中是否存在正确的备份文件。</p>
<p>请注意，上述示例中使用的是 InfluxDB 1.x 版本的还原命令。如果你使用的是 InfluxDB 2.x 版本，还原过程会有所不同。在 InfluxDB 2.x 中，你可以使用 influxd restore 命令行工具来还原数据。请参考 InfluxDB 官方文档以获取适用于你的版本的详细信息和示例。</p>
<h2 id="docker-中导出-influxdb-数据" tabindex="-1"><a class="header-anchor" href="#docker-中导出-influxdb-数据" aria-hidden="true">#</a> Docker 中导出 InfluxDB 数据</h2>
<p>要在 Docker 中导出 InfluxDB 数据，你可以使用 influxd 命令行工具的备份和还原功能。以下是一个示例命令行序列，用于在 Docker 中导出 InfluxDB 数据：</p>
<ol>
<li>获取正在运行 InfluxDB 容器的 ID 或名称：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从输出中找到 InfluxDB 容器的 ID 或名称。</p>
<ol start="2">
<li>在容器内执行备份命令：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container_id_or_name<span class="token operator">></span> influxd backup <span class="token parameter variable">-portable</span> /backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> influxdb influxd backup <span class="token parameter variable">-portable</span> /backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 <code v-pre>&lt;container_id_or_name&gt;</code> 替换为 InfluxDB 容器的 ID 或名称。此命令将在容器内执行 InfluxDB 备份，并将备份文件保存在容器内部的 /backup 目录中。</p>
<ol start="3">
<li>将备份文件从容器复制到主机：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> <span class="token operator">&lt;</span>container_id_or_name<span class="token operator">></span>:/backup /path/on/host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> influxdb:/backup /root/influxdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 <code v-pre>&lt;container_id_or_name&gt;</code> 替换为 InfluxDB 容器的 ID 或名称，并将 /path/on/host 替换为主机上用于保存备份文件的目录路径。这将从容器中复制备份文件到主机。</p>
<p>现在，你可以在主机上的指定目录中找到 InfluxDB 的备份文件。这个备份文件可以用于还原或迁移 InfluxDB 数据。</p>
<p>请注意，上述示例中使用的是 InfluxDB 1.x 版本的备份命令。如果你使用的是 InfluxDB 2.x 版本，备份和还原过程会有所不同。在 InfluxDB 2.x 中，你可以使用 influxd backup 和 influxd restore 命令行工具来备份和还原数据。请参考 InfluxDB 官方文档以获取适用于你的版本的详细信息和示例。</p>
<figure><img src="@source/zh/guide/performance/assets/20230510163114.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="搭建数据分析展示系统-grafana" tabindex="-1"><a class="header-anchor" href="#搭建数据分析展示系统-grafana" aria-hidden="true">#</a> 搭建数据分析展示系统 Grafana</h1>
<p>Prometheus普罗米修斯搭建成功后，它有一个缺点，就是数据展示不是很好看，所以我们去搭建一个数据分析展示的系统，也就是Grafana。</p>
<p>Grafana现在已经是非常常用 并且 非常成熟的一个可视化工具。不止运维在用，很多QA和研发自己来用这个Grafana。</p>
<p>它最大的优点就是支持各种各样的数据源，比如Prometheus、InfluxDB、MySQL 等。通过数据源，Grafana 可以获取并展示来自这些数据系统的数据，用于创建各种类型的仪表盘和图表。</p>
<blockquote>
<p>Grafana 支持多种类型的数据源，每种数据源都有不同的配置参数和使用方法。例如，对于 Prometheus 数据源，需要配置 Prometheus 服务的 URL 地址和查询语言；对于 InfluxDB 数据源，需要配置 InfluxDB 的 URL 地址、用户名和密码等。</p>
</blockquote>
<p>在 Grafana 中添加数据源时，需要指定<strong>数据源类型</strong>、<strong>名称</strong>、<strong>地址</strong>和<strong>授权信息</strong>等参数。</p>
<p>一旦数据源配置完成，就可以在 Grafana 中创建仪表盘和图表，并通过查询语句从数据源中获取数据。通过 Grafana 的数据源功能，可以方便地将多个数据系统和存储集成到一个统一的监控和数据分析平台中，为用户提供全面的数据可视化和分析功能。</p>
<h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h2>
<p>Grafana是一个跨平台的开源的度量分析和可视化工具，可以通过将采集的数据查询然后可视化的展示，并及时通知。它主要有以下特点：</p>
<p>1、展示方式：快速灵活的客户端图表，面板插件有许多不同方式的可视化指标和日志，官方库中具有丰富的仪表盘插件，比如热图、折线图、图表等多种展示方式；</p>
<p>2、数据源：Graphite，InfluxDB，OpenTSDB，Prometheus，Elasticsearch，CloudWatch和KairosDB等；</p>
<p>3、通知提醒：以可视方式定义最重要指标的警报规则，Grafana将不断计算并发送通知，在数据达到阈值时通过Slack、PagerDuty等获得通知；</p>
<p>4、混合展示：在同一图表中混合使用不同的数据源，可以基于每个查询指定数据源，甚至自定义数据源；</p>
<p><a href="https://github.com/grafana/grafana" target="_blank" rel="noopener noreferrer">https://github.com/grafana/grafana<ExternalLinkIcon/></a></p>
<h2 id="部署-1" tabindex="-1"><a class="header-anchor" href="#部署-1" aria-hidden="true">#</a> 部署</h2>
<h3 id="优先级-命令行安装" tabindex="-1"><a class="header-anchor" href="#优先级-命令行安装" aria-hidden="true">#</a> 优先级：命令行安装</h3>
<figure><img src="@source/zh/guide/performance/assets/20230508220916.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-idt</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>grafana <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 docker.io/grafana/grafana

<span class="token comment"># docker run -d --name=&lt;容器名称> -p 3000:3000 grafana/grafana</span>

<span class="token comment"># docker run -d --name=grafana -p 3000:3000 grafana/grafana</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker run</strong>: 这是 Docker 命令，用于创建并运行一个新的容器。</p>
<p><strong>-idt</strong>: 这些是 docker run 命令的选项。它们的含义如下：</p>
<p><strong>-i</strong>：保持标准输入 (STDIN) 打开，使容器的标准输入保持可用。</p>
<p><strong>-d</strong>：将容器运行在后台（分离模式）。</p>
<p><strong>-t</strong>：在容器中分配一个伪终端 (pseudo-TTY)，以便可以与容器进行交互。</p>
<p><strong>--name=grafana</strong>: 使用 grafana 作为容器的名称。</p>
<p><strong>-p 3000:3000</strong>: 将主机的 3000 端口映射到容器的 3000 端口。这样可以通过主机的 3000 端口访问容器内运行的 Grafana 服务。</p>
<p><strong><a href="http://docker.io/grafana/grafana" target="_blank" rel="noopener noreferrer">docker.io/grafana/grafana<ExternalLinkIcon/></a></strong>: 容器的镜像名称。在这种情况下，使用的是 Docker Hub 上的 grafana/grafana 镜像。</p>
<h1 id="docker-compose安装" tabindex="-1"><a class="header-anchor" href="#docker-compose安装" aria-hidden="true">#</a> Docker Compose安装</h1>
<p>使用 Docker Compose 启动 Grafana 容器并将数据保存到本地目录</p>
<h3 id="_1-创建存储数据目录" tabindex="-1"><a class="header-anchor" href="#_1-创建存储数据目录" aria-hidden="true">#</a> 1. 创建存储数据目录</h3>
<ol>
<li>在主机上创建用于存储 Grafana 数据的目录：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root

<span class="token function">mkdir</span> grafanadata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508205342.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-创建docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#_2-创建docker-compose-yml" aria-hidden="true">#</a> 2. 创建docker-compose.yml</h3>
<ol>
<li>在root下创建 docker-compose.yml 文件，内容如下：</li>
</ol>
<figure><img src="@source/zh/guide/performance/assets/20230508212512.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">grafana</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> grafana/grafana
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">"3000:3000"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用官方 Grafana 镜像，将容器内部的端口 3000 映射到主机的端口 3000。</p>
<blockquote>
<p>不实现：将主机上的 ~/grafanadata 目录挂载到容器内部的 /var/lib/grafana 目录中。</p>
</blockquote>
<h3 id="_3-启动-grafana-容器" tabindex="-1"><a class="header-anchor" href="#_3-启动-grafana-容器" aria-hidden="true">#</a> 3. 启动 Grafana 容器</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token builtin class-name">cd</span> /root

<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-d 参数表示在<strong>后台运行容器</strong>。</p>
<p>启动后，Grafana 容器中的数据将保存在本地目录 ~/grafanadata 中，重启容器时不会丢失数据。如果需要备份数据，可以将 ~/grafanadata 目录复制到其他位置即可。</p>
<h4 id="报错解决1" tabindex="-1"><a class="header-anchor" href="#报错解决1" aria-hidden="true">#</a> 报错解决1</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>-bash: docker-compose: <span class="token builtin class-name">command</span> not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果在执行 docker-compose 命令时出现 -bash: docker-compose: command not found 的错误，可能是因为您没有安装 Docker Compose 或者没有将其添加到 PATH 环境变量中。</p>
<h5 id="安装docker-compose" tabindex="-1"><a class="header-anchor" href="#安装docker-compose" aria-hidden="true">#</a> 安装docker-compose</h5>
<ol>
<li>安装</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># sudo curl -L "https://github.com/docker/compose/releases/download/{version}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508214445.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>设置权限，添加可执行权限：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 给 docker-compose 授权</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508213444.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>检查是否安装成功</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看docker-compose版本</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508214507.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装成功后后再运行启动Grafana容器。</p>
<h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2>
<h3 id="命令行验证" tabindex="-1"><a class="header-anchor" href="#命令行验证" aria-hidden="true">#</a> 命令行验证</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看到已经启动了。</p>
<h4 id="启动不成功" tabindex="-1"><a class="header-anchor" href="#启动不成功" aria-hidden="true">#</a> 启动不成功</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">GF_PATHS_DATA</span><span class="token operator">=</span><span class="token string">'/var/lib/grafana'</span> is not writable.
You may have issues with <span class="token function">file</span> permissions, <span class="token function">more</span> information here: http://docs.grafana.org/installation/docker/<span class="token comment">#migrate-to-v51-or-later</span>
mkdir: can<span class="token string">'t create directory '</span>/var/lib/grafana/plugins': Permission denied
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/guide/performance/assets/20230508214753.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这个问题通常是由于 GF_PATHS_DATA 指定的目录没有写权限引起的。可以尝试以下步骤解决该问题：</p>
<ol>
<li>确认 /var/lib/grafana 目录存在。如果不存在，请先创建该目录：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/lib/grafana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>确认该目录的权限设置正确。可以使用以下命令将该目录的所有者设置为当前用户，并赋予读写执行权限：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable">$root</span><span class="token builtin class-name">:</span><span class="token variable">$root</span> /var/lib/grafana
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">775</span> /var/lib/grafana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>重新启动 Grafana 容器。如果容器已经在运行，请先停止容器，然后重新启动：</li>
</ol>
<h3 id="界面验证" tabindex="-1"><a class="header-anchor" href="#界面验证" aria-hidden="true">#</a> 界面验证</h3>
<p>访问验证 <code v-pre>http://&lt;外网ip&gt;:3000</code>。</p>
<p><a href="http://81.70.96.121:3000/" target="_blank" rel="noopener noreferrer">界面验证<ExternalLinkIcon/></a>。输入账号密码为：admin/admin。第一次启动比较慢，需要等待。</p>
<figure><img src="@source/zh/guide/performance/assets/20230508221055.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="influxdb-数据源配置" tabindex="-1"><a class="header-anchor" href="#influxdb-数据源配置" aria-hidden="true">#</a> Influxdb 数据源配置</h2>
<p><a href="https://grafana.com/docs/grafana/latest/datasources/influxdb/" target="_blank" rel="noopener noreferrer">Influxdb<ExternalLinkIcon/></a></p>
<ol>
<li>
<p>打开Grafana仪表板，并登录到您的账户。</p>
</li>
<li>
<p>在Grafana界面的左侧导航栏中，Home --&gt; Administration --&gt; Data sources --&gt; Add data source。</p>
<p><img src="@source/zh/guide/performance/assets/20230510163735.png" alt="" loading="lazy"><br>
<img src="@source/zh/guide/performance/assets/20230508221324.png" alt="" loading="lazy"></p>
</li>
<li>
<p>在 &quot;Data Sources&quot; 页面上，点击 &quot;Add data source&quot;（添加数据源）按钮。</p>
<figure><img src="@source/zh/guide/performance/assets/20230510164102.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>在 &quot;Add data source&quot; 页面上，您需要填写以下信息：<br>
<img src="@source/zh/guide/performance/assets/20230510164610.png" alt="" loading="lazy"></p>
<figure><img src="@source/zh/guide/performance/assets/20230510164732.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>Name（名称）：输入您要为数据源指定的名称，例如 &quot;InfluxDB&quot;。</li>
<li>URL：输入InfluxDB的URL地址，例如 <a href="http://localhost:8086" target="_blank" rel="noopener noreferrer">http://localhost:8086<ExternalLinkIcon/></a>。</li>
<li>Database（数据库）：输入要连接的InfluxDB数据库的名称。</li>
</ul>
</li>
<li>
<p>在填写完所有必要信息后，点击页面底部的 &quot;Save &amp; Test&quot;（保存并测试）按钮。</p>
</li>
<li>
<p>Grafana将尝试连接到InfluxDB，并验证提供的信息。如果一切设置正确，您将看到一个成功的测试消息。</p>
<figure><img src="@source/zh/guide/performance/assets/20230510164858.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>点击 &quot;Back&quot;（返回数据源）链接，返回到 &quot;Data Sources&quot; 页面。</p>
</li>
<li>
<p>在 &quot;Data Sources&quot; 页面上，您应该能够看到刚刚添加的InfluxDB数据源。</p>
</li>
</ol>
<p>完成上述步骤后，您就成功地将InfluxDB配置为Grafana的数据源。您可以在创建仪表板时使用该数据源来查询和可视化InfluxDB中的数据。</p>
<h2 id="创建jmeter仪表板" tabindex="-1"><a class="header-anchor" href="#创建jmeter仪表板" aria-hidden="true">#</a> 创建JMeter仪表板</h2>
<p>这个时候回到首页，没有显示出来刚刚配置的数据源的内容，也就是我们需要创建一个仪表板来显示数据。</p>
<p>要在Grafana中创建JMeter仪表板来监控和可视化JMeter测试结果，您可以按照以下步骤进行操作：</p>
<ol>
<li>
<p>首先，确保您已经安装并配置了Grafana和InfluxDB，并且已经运行了JMeter测试并将结果保存到InfluxDB中。</p>
</li>
<li>
<p>打开Grafana仪表板，并登录到您的账户。</p>
</li>
<li>
<p>在Grafana界面的导航栏中，找到并点击 &quot;直接添加仪表板&quot;选项。</p>
<figure><img src="@source/zh/guide/performance/assets/20230510165514.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>在 &quot;New Dashboard&quot; 页面上，您可以选择从头开始创建仪表板，或者使用现有的模板。<br>
<img src="@source/zh/guide/performance/assets/20230510165533.png" alt="" loading="lazy"></p>
</li>
</ol>
<h3 id="使用已有的仪表板" tabindex="-1"><a class="header-anchor" href="#使用已有的仪表板" aria-hidden="true">#</a> 使用已有的仪表板</h3>
<ol>
<li>
<p>进入仪表板界面，并点击右上角导入仪表板。</p>
<figure><img src="@source/zh/guide/performance/assets/20230510172241.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>输入已有的仪表板的ID:<a href="https://grafana.com/grafana/dashboards/4026" target="_blank" rel="noopener noreferrer">4026<ExternalLinkIcon/></a>，配置grafana已有的数据源。</p>
<figure><img src="@source/zh/guide/performance/assets/20230510172813.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>点击导入后页面跳转到刚刚创建的仪表盘。<br>
<img src="@source/zh/guide/performance/assets/20230510172638.png" alt="" loading="lazy"></p>
</li>
</ol>
<figure><img src="@source/zh/guide/performance/assets/20230510175110.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="从头开始创建仪表板" tabindex="-1"><a class="header-anchor" href="#从头开始创建仪表板" aria-hidden="true">#</a> 从头开始创建仪表板</h3>
<ol>
<li>选择 &quot;Blank&quot;（空白）选项，以从头开始创建仪表板。</li>
</ol>
<p>在 &quot;New Dashboard&quot; 页面上，您将进入仪表板编辑模式。您可以使用左上角的 &quot;Add panel&quot;（添加面板）按钮来添加图表和面板来显示JMeter测试结果。</p>
<p>在添加面板之前，您需要配置面板的数据源。点击面板上的 &quot;Panel title&quot;（面板标题）旁边的下拉箭头，然后选择 &quot;Edit&quot;（编辑）选项。</p>
<p>在面板编辑模式中，找到 &quot;Query&quot;（查询）选项卡，并点击 &quot;Data Source&quot;（数据源）下拉菜单。</p>
<p>从下拉菜单中选择您之前配置的InfluxDB数据源。</p>
<h2 id="prometheus数据源配置" tabindex="-1"><a class="header-anchor" href="#prometheus数据源配置" aria-hidden="true">#</a> Prometheus数据源配置</h2>
<ol>
<li>
<p>Home --&gt; Administration --&gt; Data sources --&gt; Add data source</p>
<p><img src="@source/zh/guide/performance/assets/20230510163735.png" alt="" loading="lazy"><br>
<img src="@source/zh/guide/performance/assets/20230508221324.png" alt="" loading="lazy"></p>
</li>
<li>
<p>配置Prometheus数据源</p>
<figure><img src="@source/zh/guide/performance/assets/20230508221529.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/performance/assets/20230508222113.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>返回查看验证。</p>
<figure><img src="@source/zh/guide/performance/assets/202305082221131.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<h2 id="面板查看" tabindex="-1"><a class="header-anchor" href="#面板查看" aria-hidden="true">#</a> 面板查看</h2>
<figure><img src="@source/zh/guide/performance/assets/20230508222508.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/performance/assets/20230508222931.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/performance/assets/20230508222954.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这就是最简单的一个Prometheus的配置页面。</p>
<p>这个主要就是做UI的展示，和性能指标的可视化。不再做过多介绍，就相当于写了一个前段页面。</p>
<h1 id="搭建服务端监控系统-prometheus" tabindex="-1"><a class="header-anchor" href="#搭建服务端监控系统-prometheus" aria-hidden="true">#</a> 搭建服务端监控系统 Prometheus</h1>
</div></template>


