# 胸卡打印设置

1. 点击`系统设置`按钮，打开系统参数设置，勾选`会议签到时是否打印胸卡`和`自动打印胸卡`，点击保存，重启签到软件生效。

![image-20220922153756686](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202209221537790.png)

2. 点击选项卡`打印机设置`，设置纸张宽度和纸张高度，选择默认打印机，点击`保存`按钮，设置完成，重启签到软件生效。

![image-20220922153909174](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202209221539227.png)

3. 点击`设置胸卡打印格式`，打开格式设置界面。

![image-20220922154123294](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202209221541372.png)

4. 设置打印格式界面，胸卡格式区域是上面图片里面纸张宽度100*纸张高度40的大小区域，最右边为信息的变量表。排版好打印格式，点击左上角`保存`按钮，就可以签到看打印效果。

![image-20220922154757154](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202209221547214.png)

### 打印设置变量表如下：

| 格式变量             | 人员信息字段 |
| -------------------- | ------------ |
| [EmpInfo."EmpNo"]    | 人员编号     |
| [EmpInfo."Name"]     | 姓名         |
| [EmpInfo."DepName"]  | 分类名称     |
| [EmpInfo."Mobile"]   | 手机号码     |
| [EmpInfo."Company"]  | 单位名称     |
| [EmpInfo."Job"]      | 职务         |
| [EmpInfo."Remark"]   | 备注         |
| [EmpInfo."GroupNo"]  | 座位号       |
| [EmpInfo."Title"]    | 会议主题     |
| [EmpInfo."WeixinId"] | 微信号       |
| [EmpInfo."c1"]       | 备注一       |
| [EmpInfo."c2"]       | 备注二       |
| [EmpInfo."c3"]       | 备注三       |
| [EmpInfo."c4"]       | 备注四       |

