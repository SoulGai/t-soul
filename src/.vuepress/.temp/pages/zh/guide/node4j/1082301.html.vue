<template><div><p>关系型数据库：<br>
关系型数据库（RDBMS，Relational Database Management System）是一种结构化数据存储系统，基于表格和关系的概念来组织和管理数据。这些数据库使用 SQL（Structured Query Language）来查询和操作数据。每个表格都有预定义的列和数据类型，而行表示特定的数据项。关系型数据库适用于需要严格数据一致性和事务支持的应用，如银行系统、ERP系统等。常见的关系型数据库包括 MySQL、PostgreSQL、Oracle Database 和 Microsoft SQL Server。</p>
<p>缓存数据库：<br>
缓存数据库是一种专门用于存储高速访问数据的数据库类型。它们的目标是通过将数据存储在内存中，以便更快地提供数据访问。缓存数据库通常用于存储频繁访问的数据，从而减少对慢速永久性存储的访问次数。一些流行的缓存数据库包括 Redis 和 Memcached。它们对于需要快速读取操作的应用程序非常有用，如缓存数据、会话管理等。</p>
<p>文档型数据库 MongoDB：<br>
MongoDB 是一种文档型数据库，它以类似于 JSON 的 BSON 格式（一种二进制 JSON 格式）存储数据。与传统的表格和行模型不同，MongoDB 使用集合（Collections）来组织文档（Documents），每个文档可以包含不同结构的数据。这使得 MongoDB 非常适合存储半结构化或无固定模式的数据。MongoDB 在灵活性和伸缩性方面表现出色，特别适用于需要处理大量非结构化或半结构化数据的应用场景，如日志分析、内容管理和大数据应用。</p>
</div></template>


