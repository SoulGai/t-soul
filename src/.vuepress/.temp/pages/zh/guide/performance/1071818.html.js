export const data = JSON.parse("{\"key\":\"v-4c3fce6d\",\"path\":\"/zh/guide/performance/1071818.html\",\"title\":\"运行配置7\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"运行配置7\",\"icon\":\"circle-info\",\"order\":1071818,\"description\":\"本章要点 1. 运行模块介绍 2. 选项模块介绍 学习目标 1. 运行、选项模块使用。 思考 Question JMeter脚本编写完成后如何运行？对应的界面都是英文显示，不友好，如何把JMeter界面设置为中文？ 服务的部署： 1. 直接在服务器centos系统上使用Linux命令直接部署； 1. 用 Docker 的方式进行安装部署。「建议使用」 ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/guide/performance/1071818.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"教程\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"运行配置7\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"本章要点 1. 运行模块介绍 2. 选项模块介绍 学习目标 1. 运行、选项模块使用。 思考 Question JMeter脚本编写完成后如何运行？对应的界面都是英文显示，不友好，如何把JMeter界面设置为中文？ 服务的部署： 1. 直接在服务器centos系统上使用Linux命令直接部署； 1. 用 Docker 的方式进行安装部署。「建议使用」 ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"盖盖\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"运行配置7\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"盖盖\\\",\\\"url\\\":\\\"https://github.com/Nikita-GDev\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"本章要点\",\"slug\":\"本章要点\",\"link\":\"#本章要点\",\"children\":[]},{\"level\":2,\"title\":\"学习目标\",\"slug\":\"学习目标\",\"link\":\"#学习目标\",\"children\":[]},{\"level\":2,\"title\":\"思考\",\"slug\":\"思考\",\"link\":\"#思考\",\"children\":[{\"level\":4,\"title\":\"DevOps\",\"slug\":\"devops\",\"link\":\"#devops\",\"children\":[]}]},{\"level\":2,\"title\":\"Docker 介绍\",\"slug\":\"docker-介绍\",\"link\":\"#docker-介绍\",\"children\":[]},{\"level\":2,\"title\":\"基本概念\",\"slug\":\"基本概念\",\"link\":\"#基本概念\",\"children\":[{\"level\":3,\"title\":\"镜像（Image）\",\"slug\":\"镜像-image\",\"link\":\"#镜像-image\",\"children\":[]},{\"level\":3,\"title\":\"容器（Container）\",\"slug\":\"容器-container\",\"link\":\"#容器-container\",\"children\":[]},{\"level\":3,\"title\":\"仓库（Repository）\",\"slug\":\"仓库-repository\",\"link\":\"#仓库-repository\",\"children\":[]}]},{\"level\":2,\"title\":\"Docker 架构\",\"slug\":\"docker-架构\",\"link\":\"#docker-架构\",\"children\":[{\"level\":3,\"title\":\"Docker Daemon\",\"slug\":\"docker-daemon\",\"link\":\"#docker-daemon\",\"children\":[]},{\"level\":3,\"title\":\"Docker Client\",\"slug\":\"docker-client\",\"link\":\"#docker-client\",\"children\":[]},{\"level\":3,\"title\":\"Docker Registries\",\"slug\":\"docker-registries\",\"link\":\"#docker-registries\",\"children\":[]}]},{\"level\":2,\"title\":\"Docker 安装\",\"slug\":\"docker-安装\",\"link\":\"#docker-安装\",\"children\":[{\"level\":3,\"title\":\"Docker服务启动\",\"slug\":\"docker服务启动\",\"link\":\"#docker服务启动\",\"children\":[]},{\"level\":3,\"title\":\"更新docker版本\",\"slug\":\"更新docker版本\",\"link\":\"#更新docker版本\",\"children\":[{\"level\":4,\"title\":\"1. 卸载旧版本\",\"slug\":\"_1-卸载旧版本\",\"link\":\"#_1-卸载旧版本\",\"children\":[]},{\"level\":4,\"title\":\"2. 更新 yum 软件包\",\"slug\":\"_2-更新-yum-软件包\",\"link\":\"#_2-更新-yum-软件包\",\"children\":[]},{\"level\":4,\"title\":\"3. 安装 Docker 的依赖包\",\"slug\":\"_3-安装-docker-的依赖包\",\"link\":\"#_3-安装-docker-的依赖包\",\"children\":[]},{\"level\":4,\"title\":\"4. 添加 Docker 的 YUM 软件源\",\"slug\":\"_4-添加-docker-的-yum-软件源\",\"link\":\"#_4-添加-docker-的-yum-软件源\",\"children\":[]},{\"level\":4,\"title\":\"5. 安装最新版的 Docker\",\"slug\":\"_5-安装最新版的-docker\",\"link\":\"#_5-安装最新版的-docker\",\"children\":[]},{\"level\":4,\"title\":\"6. 启动 Docker 服务\",\"slug\":\"_6-启动-docker-服务\",\"link\":\"#_6-启动-docker-服务\",\"children\":[]}]},{\"level\":3,\"title\":\"总安装命令\",\"slug\":\"总安装命令\",\"link\":\"#总安装命令\",\"children\":[]}]},{\"level\":2,\"title\":\"为什么Docker能比较方便/比较简单的装系统呢？\",\"slug\":\"为什么docker能比较方便-比较简单的装系统呢\",\"link\":\"#为什么docker能比较方便-比较简单的装系统呢\",\"children\":[]},{\"level\":2,\"title\":\"Docker 常用命令\",\"slug\":\"docker-常用命令\",\"link\":\"#docker-常用命令\",\"children\":[{\"level\":3,\"title\":\"版本查看\",\"slug\":\"版本查看\",\"link\":\"#版本查看\",\"children\":[]},{\"level\":3,\"title\":\"镜像相关命令\",\"slug\":\"镜像相关命令\",\"link\":\"#镜像相关命令\",\"children\":[{\"level\":4,\"title\":\"本地镜像查看\",\"slug\":\"本地镜像查看\",\"link\":\"#本地镜像查看\",\"children\":[{\"level\":5,\"title\":\"输出\",\"slug\":\"输出\",\"link\":\"#输出\",\"children\":[]}]},{\"level\":4,\"title\":\"远端镜像查看\",\"slug\":\"远端镜像查看\",\"link\":\"#远端镜像查看\",\"children\":[]},{\"level\":4,\"title\":\"远端镜像下载\",\"slug\":\"远端镜像下载\",\"link\":\"#远端镜像下载\",\"children\":[]}]},{\"level\":3,\"title\":\"容器相关命令\",\"slug\":\"容器相关命令\",\"link\":\"#容器相关命令\",\"children\":[{\"level\":4,\"title\":\"启动容器\",\"slug\":\"启动容器\",\"link\":\"#启动容器\",\"children\":[]},{\"level\":4,\"title\":\"查看所有容器\",\"slug\":\"查看所有容器\",\"link\":\"#查看所有容器\",\"children\":[]}]}]},{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":2,\"title\":\"部署\",\"slug\":\"部署\",\"link\":\"#部署\",\"children\":[{\"level\":4,\"title\":\"1. 进入容器内部\",\"slug\":\"_1-进入容器内部\",\"link\":\"#_1-进入容器内部\",\"children\":[]},{\"level\":4,\"title\":\"2. 创建jmeter数据库\",\"slug\":\"_2-创建jmeter数据库\",\"link\":\"#_2-创建jmeter数据库\",\"children\":[]}]},{\"level\":2,\"title\":\"docker还原 InfluxDB 数据\",\"slug\":\"docker还原-influxdb-数据\",\"link\":\"#docker还原-influxdb-数据\",\"children\":[]},{\"level\":2,\"title\":\"Docker 中导出 InfluxDB 数据\",\"slug\":\"docker-中导出-influxdb-数据\",\"link\":\"#docker-中导出-influxdb-数据\",\"children\":[]},{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍-1\",\"link\":\"#介绍-1\",\"children\":[]},{\"level\":2,\"title\":\"部署\",\"slug\":\"部署-1\",\"link\":\"#部署-1\",\"children\":[{\"level\":3,\"title\":\"优先级：命令行安装\",\"slug\":\"优先级-命令行安装\",\"link\":\"#优先级-命令行安装\",\"children\":[]},{\"level\":3,\"title\":\"1. 创建存储数据目录\",\"slug\":\"_1-创建存储数据目录\",\"link\":\"#_1-创建存储数据目录\",\"children\":[]},{\"level\":3,\"title\":\"2. 创建docker-compose.yml\",\"slug\":\"_2-创建docker-compose-yml\",\"link\":\"#_2-创建docker-compose-yml\",\"children\":[]},{\"level\":3,\"title\":\"3. 启动 Grafana 容器\",\"slug\":\"_3-启动-grafana-容器\",\"link\":\"#_3-启动-grafana-容器\",\"children\":[{\"level\":4,\"title\":\"报错解决1\",\"slug\":\"报错解决1\",\"link\":\"#报错解决1\",\"children\":[{\"level\":5,\"title\":\"安装docker-compose\",\"slug\":\"安装docker-compose\",\"link\":\"#安装docker-compose\",\"children\":[]}]}]}]},{\"level\":2,\"title\":\"验证\",\"slug\":\"验证\",\"link\":\"#验证\",\"children\":[{\"level\":3,\"title\":\"命令行验证\",\"slug\":\"命令行验证\",\"link\":\"#命令行验证\",\"children\":[{\"level\":4,\"title\":\"启动不成功\",\"slug\":\"启动不成功\",\"link\":\"#启动不成功\",\"children\":[]}]},{\"level\":3,\"title\":\"界面验证\",\"slug\":\"界面验证\",\"link\":\"#界面验证\",\"children\":[]}]},{\"level\":2,\"title\":\"Influxdb 数据源配置\",\"slug\":\"influxdb-数据源配置\",\"link\":\"#influxdb-数据源配置\",\"children\":[]},{\"level\":2,\"title\":\"创建JMeter仪表板\",\"slug\":\"创建jmeter仪表板\",\"link\":\"#创建jmeter仪表板\",\"children\":[{\"level\":3,\"title\":\"使用已有的仪表板\",\"slug\":\"使用已有的仪表板\",\"link\":\"#使用已有的仪表板\",\"children\":[]},{\"level\":3,\"title\":\"从头开始创建仪表板\",\"slug\":\"从头开始创建仪表板\",\"link\":\"#从头开始创建仪表板\",\"children\":[]}]},{\"level\":2,\"title\":\"Prometheus数据源配置\",\"slug\":\"prometheus数据源配置\",\"link\":\"#prometheus数据源配置\",\"children\":[]},{\"level\":2,\"title\":\"面板查看\",\"slug\":\"面板查看\",\"link\":\"#面板查看\",\"children\":[]}],\"readingTime\":{\"minutes\":23.04,\"words\":6913},\"filePathRelative\":\"zh/guide/performance/1071818.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
