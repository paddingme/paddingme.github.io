---
title: Wireshare软件安装以及对ICMP、TCP协议的分析
layout: post
tags:
- 工具
- ICMP
- TCP
- 网络
---

## 1. Wireshark (Ethereal)软件安装以及配置步骤
Wireshark是一个网络数据包分析软件。网络数据包分析软件的功能是截取网络数据包，并尽可能显示出最为详细的网络数据包数据，安装以下步骤安装：

1.	在[wireshark官网](http://www.wireshark.org/download.html)上根据自己的系统下载安装文件，这里我的系统是window32位，选择下载windows Installer(32-bit)；
	<figure><img src="http://paddingme.qiniudn.com/0.png" alt="下载"></figure>
2.	下载点击安装，点击next进入下一步；
 <figure><img src="http://paddingme.qiniudn.com/1.png" alt="点击next下一步"></figure>
3.	选择同意协议；
 <figure><img src="http://paddingme.qiniudn.com/2.png" alt="点击同意协议"></figure>
4.	选择要安装的组件，这里默认全选，继续点击“Next”；
 <figure><img src="http://paddingme.qiniudn.com/3.png" alt="选择安装组件点击next"></figure>
5.	这里选择附加任务是否将wireshark添加到菜单以及任务栏，选择默认设置，继续点击“Next”进行下一步安装；
 <figure><img src="http://paddingme.qiniudn.com/4.png" alt="默认设置点击next"></figure>
6.	选择安装目录，继续点击“Next”下一步；
 <figure><img src="http://paddingme.qiniudn.com/5.png" alt="选择安装目录"></figure>
7.	 Wireshark需要安装WinPcap，WinPcap是用于网络封包抓取的一套工具，是Wireshark必要的组件，这里我已经安装过了，如果没有安装请选择Install WinPcap 4.1.3，这里我重新安装次WinPcap，点击“Install”； 
<figure><img src="http://paddingme.qiniudn.com/6.png" alt="安装WinPcap"></figure> 
8.	点击“Next”继续WinPcap安装；
<figure><img src="http://paddingme.qiniudn.com/7.png" alt="点击Next继续安装WinPcap"></figure> 
9.	点击“I agree”同意许可协议；
 <figure><img src="http://paddingme.qiniudn.com/8.png" alt="同意协议"></figure>
10.	选择启动时默认开启WinPcap，点击“Next”继续WinPcap安装；
<figure><img src="http://paddingme.qiniudn.com/9.png" alt="选择启动默认开启WinPcap"></figure> 
11. 点击“Finish”,WinPcap安装成功；
 <figure><img src="http://paddingme.qiniudn.com/10.png" alt="点击Finish，WinPcap安装成功"></figure>
12.	继续安装Wireshark，点击“Next”；
 <figure><img src="http://paddingme.qiniudn.com/11.png" alt="继续安装Wireshark"></figure>
13. 点击“Finish”,WireShark安装成功；
<figure><img src="http://paddingme.qiniudn.com/12.png" alt="wireshark软件安装成功"></figure>
 
## 2. ICMP协议
ICMP协议，是TCP/IP协议栈中的网络层协议之一。ICMP全称是“Internet Control Message Protocol（网间消息控制协议、Internet控制报文协议）”。ICMP协议一般被用来检查网络是否连通，路由是否可用，主机是否可达等，而这些检查的方法，就是通过在IP网络设备之间传递ICMP消息，并且在传递的消息中通过“type（类型）”和“code（代码）”这两个字段来检查和回应。我们一般使用ping命令来检查网络设备之间是否连通，就是调用的ICMP协议。所以这里我们用“ping”命令来分析ICMP协议。
现在我的电脑处于一个无线局域网内，如下图所示：
<figure><img src="http://paddingme.qiniudn.com/13.png" alt="wireshark软件安装成功"></figure>
 
1. 打开wireshark 软件，如下图选择接口列表，选中无线网络连接，点击“Start”开始抓包；
<figure><img src="http://paddingme.qiniudn.com/14.png" alt="wireshark软件安装成功"></figure> 
2. 打开电脑命令行，进行ping 测试：ping 192.168.1.101发现无法ping通，说明局域网内没有分配该IP给局域网内的主机。同学的电脑和我处于一个局域网查看到他的IP是192.168.1.112我们来ping这个IP
<figure><img src="http://paddingme.qiniudn.com/15.png" alt="wireshark软件安装成功"></figure>
3. 在filter里填入ICMP，过滤掉其它的协议产生的数据包，得到下图 
<figure><img src="http://paddingme.qiniudn.com/16.png" alt="wireshark软件安装成功"></figure>
如命令行显示，我们ping 192.168.1.112时，连续收到4个ping 回复，每次ICMP通讯的过程都是一个ICMP request和一个ICMP reply，4次通讯的话，一共有8个数据包。点击第一条数据，这一条是本机IP:192.168.106向目标主机IP为:192.168.1.106发送请求查看详细信息得到如下：
<figure><img src="http://paddingme.qiniudn.com/17.png" alt="wireshark软件安装成功"></figure>
 再点击第二条数据，这里是目标主机:192.168.1.112向本机发回的应答数据，如下图所示：
 <figure><img src="http://paddingme.qiniudn.com/18.png" alt="wireshark软件安装成功"></figure>

ICMP Request和ICMP Reply数据包的详细内容主要包括:

- Type：类型字段，8代表ICMP的请求，0代表ICMP的回应
- Code：代码字段，0代表ICMP的请求
- Checksum：对ICMP头部的校验值
- Identifier：进程ID标识，从哪个进程产生的ICMP数据包
- Sequence Number：序列号，同一个进程中，会产生很多个ICMP数据包，用来描述当前这个数据包是是哪一个，每一对ICMP Request和ICMP Reply这个字段应该要一样
- Data：ICMP中的数据
至此利用WireShark软件分析ICMP协议实验完成。
 
## 3. 分析TCP协议
TCP协议重要的是理解“TCP三次握手”和“TCP四次握手”，我们使用WireShark抓包并分析TCP如何通过三次握手建立TCP连接。

1.	TCP用``三次握手(three-way handshake)``建立连接，可详细参考下图：
<figure><img src="http://paddingme.qiniudn.com/21.gif" alt="tcp三次握手"></figure>
在建立TCP连接的时候，TCP需要三次握手才能建立连接，这里使用我的博客网站[paddingme](http://padding.me),ip地址为203.245.222.133作为测试，如下图所示这里在filter里填写过滤规则为：ip.addr==203.245.222.133 表示只保留IP地址为203.245.222.133有关的数据包。
 <figure><img src="http://paddingme.qiniudn.com/19.png" alt="wireshark软件安装成功"></figure>
如上图所示：序号5,6,7,8,9的数据包一直在发送请求，我们忽略它，从第10条数据包开始跟，本机IP：192.168.1.106向目标地址IP：103.245.222.133发送请求，此时SYN=1，Seq=0；
第14条数据包表示，目标地址收到请求，此时ACK=1，SYN=1,Seq=0;第15条数据表示，本地IP收到这条确认消息，并发送对这条确认消息的确认消息给目标地址,此时ACK=1，Seq=1。此时TCP成功建立，从第16条数据开始发送HTTP请求。

2.	TCP关闭连接时候需要``四次握手``，整个过程如下图所示:
<figure><img src="http://paddingme.qiniudn.com/22.gif" alt="tcp四次握手"></figure>
当浏览器离开[padding.me](http://padding.me)时，目标IP：103.245.222.133会发送关闭连接，如下图所示：
 <figure><img src="http://paddingme.qiniudn.com/20.png" alt="wireshark软件安装成功"></figure>
第424条数据包显示:目标IP：103.245.222.133向本地IP：192.168.1.106发送FIN=1，ACK=1，此时Seq=607;第425条数据包表明，本地IP接收到424条数据，对这条数据发送确认，此时，ACK=608，Seq=1077；第455条和456条数据包表示本地IP发送关闭连接给目标IP，此时ACK=1，FIN=1，Seq=1077；第458条数据表示目标地址：103.245.222.133收到数据包的确认，此时ACK=1078,Seq=608；至此完成四次挥手关闭TCP连接，看上图下面红色部分表示已经无法连接。


参考文章：

+ [互联网控制消息协议](http://zh.wikipedia.org/zh/%E4%BA%92%E8%81%94%E7%BD%91%E6%8E%A7%E5%88%B6%E6%B6%88%E6%81%AF%E5%8D%8F%E8%AE%AE)
+ [传输控制协议](http://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE)
+ [详解“TCP三次握手”建立TCP连接的全过程](http://www.ctowhy.com/201.html)
+ [ICMP数据包解码](http://www.ctowhy.com/363.html)
+ [TCP协议中的三次握手和四次挥手](http://blog.csdn.net/whuslei/article/details/6667471)
