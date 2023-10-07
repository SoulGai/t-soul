<template><div><p>在AndroidStudio欢迎界面打开SDKmanager,在SDK Tools目录下按照如下选择进行安装，注意其中的Build-Tools部分参考下方的GIF：</p>
<figure><img src="@source/zh/guide/app/assets/sdk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/zh/guide/app/assets/sdk.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="linux-mac-配置环境变量" tabindex="-1"><a class="header-anchor" href="#linux-mac-配置环境变量" aria-hidden="true">#</a> Linux/Mac 配置环境变量</h2>
<p>在环境变量中配置ANDROID_HOME变量，值为SDK的根目录，之后将四个文件夹配置到path变量中，并使用source命令或者重启让配置生效<br>
注意！其中的分隔符是英文的冒号，最后结尾不要忘了加上$PATH，修改PATH变量要慎重，确认没问题再保存，不然容易出现系统挂掉的情况</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"<span class="token variable">$ANDROID_HOME</span>/emulator:<span class="token variable">$ANDROID_HOME</span>/platform-tools:<span class="token variable">$ANDROID_HOME</span>/tools:<span class="token variable">$ANDROID_HOME</span>/tools/bin:<span class="token environment constant">$PATH</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改build-tools版本" tabindex="-1"><a class="header-anchor" href="#修改build-tools版本" aria-hidden="true">#</a> 修改build-tools版本</h2>
<p>由于默认会安装最新版本的bulid-tools，但是30版本开始build-tools配合jdk1.8会报错，所以需要手动降级到29版本，具体降级方法见下图（可以点击查看大图！）</p>
</div></template>


