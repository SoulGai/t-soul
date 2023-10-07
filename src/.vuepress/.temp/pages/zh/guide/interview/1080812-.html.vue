<template><div><ol>
<li>什么是OSI模型？</li>
</ol>
<p>OSI（Open Systems Interconnection）模型是一个用于理解和描述计算机网络通信的概念框架。它将网络通信过程划分为七个层次，从物理传输到应用处理，每个层次负责不同的功能。这些层次分别是物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。</p>
<ol start="2">
<li>解释一下TCP/IP模型。</li>
</ol>
<p>TCP/IP模型是实际使用最广泛的网络通信模型，它由四个层次组成：网络接口层、网络层、传输层和应用层。这个模型与OSI模型有些类似，但层次略有不同。</p>
<p>网络接口层：处理物理连接细节和数据帧在网络媒介上的传输。<br>
网络层：负责数据包的路由和转发，使用IP地址来定位设备。<br>
传输层：提供端到端的通信，主要有TCP和UDP协议，处理数据分段和流控制。<br>
应用层：包含各种应用协议，如HTTP、SMTP、FTP等，处理用户应用数据。<br>
3. 什么是IP地址和MAC地址？</p>
<p>IP地址（Internet Protocol Address）是一个在TCP/IP网络中用于唯一标识设备的数字地址。它分为IPv4和IPv6两个版本。IPv4使用32位地址，IPv6使用128位地址。</p>
<p>MAC地址（Media Access Control Address）是一个在数据链路层使用的物理地址，用于唯一标识网络设备。每个网络接口卡都有一个唯一的MAC地址，通常由48位二进制数组成。</p>
<ol start="4">
<li>解释一下TCP和UDP的区别。</li>
</ol>
<p>TCP（Transmission Control Protocol）和UDP（User Datagram Protocol）是传输层协议。</p>
<p>TCP：提供可靠的、面向连接的通信。它确保数据的顺序和完整性，但可能会引入一定的延迟。常用于需要数据准确传输的应用，如网页浏览、文件传输等。</p>
<p>UDP：提供不可靠的、面向无连接的通信。它没有数据确认机制，数据传输速度较快，但无法保证数据的顺序和完整性。常用于实时性要求较高的应用，如实时音视频通信、在线游戏等。</p>
<ol start="5">
<li>什么是HTTP和HTTPS？有什么区别？</li>
</ol>
<p>HTTP（Hypertext Transfer Protocol）是用于在Web浏览器和Web服务器之间传输数据的协议，它是明文传输的，安全性较低。</p>
<p>HTTPS（Hypertext Transfer Protocol Secure）是在HTTP上添加了安全性层的协议。它通过使用SSL（Secure Sockets Layer）或TLS（Transport Layer Security）加密协议来保护数据传输的安全性，通常用于敏感信息传输，如在线支付、登录等。</p>
<ol>
<li>请解释一下TCP三次握手和四次挥手过程。</li>
</ol>
<blockquote>
<p>什么是TCP什么是UDP？ TCP 和 UDP之间的区别是什么？TCP是怎样建立起来连接的？ 为什么TCP需要三次握手才能建立连接？TCP是怎样断开连接的？为什么TCP需要四次挥手才能真正的断开连接？TCP为什么最后挥手后会有time_wait</p>
</blockquote>
<p><img src="@source/zh/guide/interview/assets/01网络模型.png" alt="" loading="lazy"><br>
<img src="@source/zh/guide/interview/assets/02TCP三次握手.png" alt="" loading="lazy"><br>
<img src="@source/zh/guide/interview/assets/03TC四次挥手.png" alt="" loading="lazy"><br>
<img src="@source/zh/guide/interview/assets/04基于tcp协议的编程模型.png" alt="" loading="lazy"><br>
<img src="@source/zh/guide/interview/assets/05任务总结.png" alt="" loading="lazy"></p>
<p>**TCP三次握手（TCP Three-Way Handshake）**用于建立一个TCP连接：</p>
<p>客户端发送一个带有SYN标志的数据包到服务器。<br>
服务器收到后，回复一个带有SYN/ACK标志的数据包。<br>
客户端再回复一个带有ACK标志的数据包，此时连接建立完成。<br>
**TCP四次挥手（TCP Four-Way Handshake）**用于关闭一个TCP连接：</p>
<p>客户端发送一个带有FIN标志的数据包，请求关闭连接。<br>
服务器收到后，回复一个带有ACK标志的数据包，表示接受关闭请求。<br>
服务器完成关闭后，发送一个带有FIN标志的数据包。<br>
客户端收到后，回复一个带有ACK标志的数据包，连接关闭。</p>
<ol>
<li>什么是数据包，它在网络中的传输过程是怎样的？</li>
</ol>
<p>数据包是网络通信中的基本单位，包含了传输的数据、源地址、目标地址、控制信息等。数据包的传输过程一般包括以下步骤：</p>
<p>封装： 源主机将数据包封装为一个网络数据包，添加源和目标地址等信息。<br>
发送： 数据包经由数据链路层传输到目标主机，经过中间设备（如交换机、路由器）转发。<br>
路由： 中间设备根据目标地址进行路由选择，将数据包传输到下一个节点。<br>
解封装： 目标主机接收到数据包后，解封装数据，提取出传输的有效数据。<br>
3. 请解释什么是网络拓扑？列举几种常见的网络拓扑类型。</p>
<p>网络拓扑指的是网络中设备和连接之间的物理或逻辑布局。常见的网络拓扑类型包括：</p>
<p>总线拓扑： 所有设备连接在单一的中央传输线上。<br>
星型拓扑： 所有设备连接到一个中央集线器、交换机或路由器。<br>
环型拓扑： 设备通过连接形成一个环。<br>
树型拓扑： 设备通过层次结构的方式连接，类似树的形状。<br>
网状拓扑： 设备之间多对多相互连接，具有高度冗余性。<br>
4. 解释一下网络安全中的防火墙和入侵检测系统（IDS）的作用。</p>
<p>防火墙： 防火墙是网络安全的关键组件，用于保护网络免受未授权访问和恶意攻击。它可以根据规则过滤、监控和控制进出网络的流量，阻止潜在的威胁和攻击。</p>
<p>入侵检测系统（IDS）： IDS监视网络流量，识别异常或恶意行为，以及未经授权的访问。它可以分为两种类型：基于签名的IDS（检测已知攻击模式）和基于行为的IDS（检测异常行为）。</p>
<ol start="5">
<li>什么是加密和密钥交换？</li>
</ol>
<p>加密： 加密是将原始数据（称为明文）通过某种算法转化为不可读的形式（称为密文），以保护数据的机密性。只有拥有解密密钥的人才能将密文还原为明文。</p>
<p>密钥交换： 密钥交换是确保通信双方可以安全地共享加密密钥的过程。常用的密钥交换协议包括Diffie-Hellman密钥交换和RSA密钥交换。</p>
</div></template>


