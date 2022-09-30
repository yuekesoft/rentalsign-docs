# 批量导入人员信息

::: tip 提示

* 找到越客签到管理软件安装目录下yueke文件夹，有个employee的Excel文件，就是导入人员信息的导入模板；根据软件版本不同，导入模板可能有差异；
* 模板格式文件不能进行删除修改；没有的信息可以留空，但是不能删除该列字段；

:::

![1](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202209291453889.png)

#### 打开批量导入模板Excel文件

* 依次输入人员编号、分类编号、姓名、手机号，其他字段可以留空。

* 人员编号可以采用多位数字(比如：10001或者20001开始)，按序生成，分类编号对应签到软件的人员分类编号（比如：10是对应嘉宾；11是对应工作人员）。

* 模板里面的4个备用字段对应签到软件里面的4个备用字段；

<img src="https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202209201828038.png" alt="image-20220920182828929"  />

#### 批量导入操作

1. 点击`系统设置`，`打开Excel文件`,勾选`模板第一列带编号导入`，点击`批量导入`。

<img src="https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202209201833575.png" alt="image-20220920183305474"  />

2. 显示导入成功。

![image-20220920184509773](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202209201845845.png)

3. 点击`人员信息`按钮，显示导入成功人员信息；

![image-20220920184651002](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202209201846079.png)

::: danger 注意

* 导入是根据人员编号是否重复来判断，如果相同的人员编号，只能导入一次，不能再导入，需要修改为不同的人员编号进行导入。如：第二批，第三批分批导入就需要注意导入的人员编号和excel模板里面的需要导入的人员编号是否重复，不同的人员编号才能被导入。

* 错误提示截取字符串-其中一个字段的内容超出字符数量；（比如职务达到30多字）
* 提示导入成功，但是人员列表还是没有人员信息；（模板第一列是人员编号，但是导入界面没有勾选模板第一列带编号导入或者分类编号没有和签到软件里面的人员类别编号对应；）
* 请不要多次重复导入，可以点击软件左上角系统设置-数据库设置-清空系统所有数据，再导入；

:::