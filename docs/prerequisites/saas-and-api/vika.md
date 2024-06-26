# Vika
import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

### 维格表限制

发送API请求时，你需要注意一下两种限制：频率限制和用量限制

请遵循以下限制以确保在 Tapdata 中成功添加和使用维格表。

### 频率限制

同一个用户对同一张表的API请求频率上线为 5 次/秒

请求频率超过限制时，会提示错误操作太频繁（错误状态码 429 ）

### 用量限制

用量限制包含两种：一是 API 用量的限制；二是空间站资源用量的限制

青铜级和白银级空间站每月可免费调用 10000 次API，累计用量每月账单日清零

公测阶段，你可以创建做多 1000 张维格表。单个维格表做多支持创建 50000 行记录、200 个字段、30 个视图

单个空间站上传附件的容量上限为 1 GB