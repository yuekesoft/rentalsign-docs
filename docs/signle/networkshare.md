# 局域网数据共享设置

购买了多套单机版签到软件之后，如果需要多台电脑共享签到数据，比如：只需要导入一台签到电脑人员数据，其他几台电脑都可以共享看到，就需要设置局域网来共享人员信息数据。

::: tip 提示

您需要自己准备一个无线路由器，连接如图所示

:::

局域网连接示意图

![局域网2](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212231216595.jpg)

1、运行了数据库minisql2000和注册了的服务端，就可以作为主机。（能打开单机版签到软件的电脑都可以作为主机，就是我们常说的服务器；客户端电脑不需要打开数据库和注册服务端，就可以使用）

2、主机不用做任何的设置和配置，只需要知道主机的ip地址，比如主机ip地址为：192.168.0.10；

3、客户端设置如下：

![image-20221223122732844](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212231227937.png)

打开签到软件登录界面，点击`配置`按钮

![image-20221223122919588](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212231229659.png)

打开设置联网参数界面，服务器地址改为主机的ip地址，比如：192.168.0.10

点击`确定`按钮，再点击登录界面的`登录`按钮，如果客户端和主机是如图连接的同一个路由器，那就可以正常打开签到软件了，并且客户端的签到人员数据，就是主机里面的签到人员数据，即实现了数据的同步。

::: warning 注意

如果点击登录界面的登录按钮，提示连接服务器无效，那就检查主机和客户端是否是如上图所示的都同时连接了同一个无线路由器；

主机和客户端电脑都设置为自动获取ip地址（电脑默认设置）；

:::

## 如何查看主机的ip地址

我们以windows10为例，查看电脑的ip地址步骤如下：

**打开"Windows设置"窗口**

点击桌面左下角开始菜单，再点击"设置"（小齿轮图标），打开"Windows设置"窗口。

![image-20221223123623563](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212231236704.png)

**打开"网络和Internet"窗口**

在"Windows设置"窗口点击"网络和Internet"，打开"网络和Internet"窗口。

![image-20221223123953043](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212231239124.png)

点击`更改适配器选项`按钮，打开连接设置窗口：

![image-20221223124255704](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212231242869.png)

本电脑使用的是YKSOFT无线网络，所以右键点击WLAN 2 ，再点击`状态`按钮：

![image-20221223124450879](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212231244966.png)

打开WLAN2 状态信息界面，点击`详细信息`按钮：

![image-20221223124645370](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212231246441.png)

打开网络连接详细信息界面，其中IPv4地址就是本机的ip地址，如下：192.168.100.6

![image-20221223124744046](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212231247136.png)