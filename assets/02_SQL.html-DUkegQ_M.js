import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as r,c as o,e,w as i,a as n,b as s,d as l}from"./app-C2Ya8jiw.js";const u="/assets/仓库-Bw2pX-9-.png",p="/assets/image-20221205094423367-DoC-3REk.png",v="/assets/软件包位置-CJkLRKUv.png",m="/assets/如何确认mysql安装完成-CkDlBYy-.png",b="/assets/默认安装目录-BJTw6Ft6.png",k="/assets/设置环境变量-BXLs_-Xn.png",h="/assets/软件架构-BYlUP9dn.png",g="/assets/数据库内部组织表形式-DCRs6P2n.png",_="/assets/数据库1-BpSv0Eku.jpg",y="/assets/mysql客户端服务端-C_5Qabqd.png",f="/assets/登录窗口-YVRnkxSd.png",S="/assets/默认自带的库-DPpW_JF4.png",w="/assets/image-20230411110258332-Bd1IrL3z.png",L="/assets/创建库_查询库语句-BTbg8FhW.png",q="/assets/字符集的说明-DqGWdkxO.png",Q="/assets/班级数据初始化-DTYTJvHU.png",x="/assets/image-20220511112342177-LgNtGsLZ.png",M="/assets/image-20220512093032240-CmpJU0g7.png",E="/assets/image-20220512094324425-D1oFNFyJ.png",N="/assets/image-20220512095229401-T-JLRyH7.png",T="/assets/image-20220512101248071-D-nbo1p_.png",R="/assets/image-20220512104553268-EFDkZXsL.png",A="/assets/image-20230410161359471-CKt9jdaQ.png",I="/assets/image-20220512150057177-U_LGIA8c.png",O={},C=l('<h1 id="数据库基础" tabindex="-1"><a class="header-anchor" href="#数据库基础" aria-hidden="true">#</a> 数据库基础</h1><p>学习目标：<span style="color:yellow;background:red;"><strong>SQL是重点，需要重点掌握。</strong></span></p><ul><li>掌握什么是数据库。为什么有数据库这个东西</li><li>了解关系型数据库，非关系型数据库。在工作中的主要区别。</li><li>熟悉库、表、数据，内部组织形式</li><li>掌握对库的增加、删除、查询操作。修改操作了解即可</li><li>掌握对表的增加、删除、查询操作。修改操作了解即可</li><li>掌握对数据的增删改查。<span style="color:yellow;background:red;"><strong>非常重要</strong></span>。</li><li>掌握特殊关键字的使用</li><li>了解多表设计，并能对常见的表格进行建表操作</li><li>了解数据库设计三大范式</li><li>熟练掌握多表查询，内连接和外连接的区别及联系。</li></ul><h2 id="什么是数据库" tabindex="-1"><a class="header-anchor" href="#什么是数据库" aria-hidden="true">#</a> 什么是数据库</h2>',4),D=n("b",null,"数据库，是存储和管理数据的仓库。",-1),B=n("p",null,"什么是仓库，就是有效的组织物品的地方。所谓数据仓库，就是集中存放数据的地方，且可以有效的组织这些数据，利用这些数据。",-1),U=n("figure",null,[n("img",{src:u,alt:"image-20230209171150658",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20230209171150658")],-1),z=n("p",null,"生活中的例子：",-1),Y=n("p",null,"图书馆。 书非常多。 索引。 高效组织图书的仓库。",-1),V=n("p",null,"超市。 山姆。万达超市。",-1),F=n("p",null,"txt也可以存储。excel也可以存储。为什么需要数据库呢？",-1),P=n("p",null,"组织数据的效率不高。",-1),G=n("p",null,"生活中excel，很多单位使用excel来存储一些数据，比如一些仓库，或者班主任让大家填写信息的时候。",-1),H=n("strong",null,"因为excel功能不够强大",-1),J=n("strong",null,"性能太低。",-1),j=l('<blockquote><ol><li><p>Database**：**A database is an organized collection of data,stored and accessed electronically.</p></li><li><p>数据库是按照数据结构来组织、存储和管理数据的仓库。分门别类的来存储数据。</p></li><li><p>数据库是一种结构化信息或数据的有组织的集合。</p></li><li><p>在现实中，数据、<a href="Database%20Management%20System">数据库管理系统 (DBMS)</a> 一起被称为数据库系统，通常简称为数据库。</p></li></ol></blockquote><p>结构化信息： 对于每一行，结构都是一致的。比如第一行 有三列，第10000行，也有三列。</p><h2 id="数据库的历史" tabindex="-1"><a class="header-anchor" href="#数据库的历史" aria-hidden="true">#</a> 数据库的历史</h2><blockquote><p>自 20 世纪 60 年代初诞生至今，数据库已经发生了翻天覆地的变化。最初，人们使用分层数据库（树形模型/一对多）和网络数据库（图模型/多对多）这样的导航数据库来存储和操作数据。这些早期系统虽然简单，但缺乏灵活性。 20 世纪 80 年代，<a href="">关系数据库</a>开始兴起. 20 世纪 90 年代，<a href="">面向对象的数据库</a>开始成为主流。 最近，随着互联网的快速发展，为了更快速地处理非结构化数据，<a href="">NoSQL 数据库</a>应运而生。主要特点就是快。</p></blockquote><p>问题： 数据是存在哪的？ 数据库的数据。 硬盘。</p><p>硬盘： 持久化、速度慢</p><p>内存： 非持久化、速度快。</p><h1 id="数据库分类" tabindex="-1"><a class="header-anchor" href="#数据库分类" aria-hidden="true">#</a> 数据库分类</h1><h2 id="关系型数据库" tabindex="-1"><a class="header-anchor" href="#关系型数据库" aria-hidden="true">#</a> 关系型数据库</h2>',9),W=n("p",null,"关系型数据库表示这种数据库，不仅可以存储数据，还可以存储数据与数据之间的关系。 这种，不仅可以存数据，还可以用存关系的数据库，这就是关系型数据库。比如这个省份表，城市表，以及它们的关系，在关系型数据库中，可以存储这种关联。",-1),X=n("figure",null,[n("img",{src:p,alt:"image-20221205094423367",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20221205094423367")],-1),K=n("p",null,"接下来，我们介绍几款常见的关系型数据库。",-1),Z=n("p",null,"Oracle：甲骨文公司的一个产品，世界上使用最多的收费型数据库。性能较好。",-1),$=n("p",null,"又名Oracle RDBMS(Relational Database Management System)，或简称Oracle。是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。可以说Oracle数据库系统是世界上流行的关系数据库管理系统，系统可移植性好、使用方便、功能强，适用于各类大、中、小微机环境。它是一种高效率的、可靠性好的、适应高吞吐量的数据库方案",-1),nn=n("b",null,"使用公司",-1),sn=n("p",null,[n("span",{style:{color:"red",background:"yellow"}},[n("b",null,"MySQL")]),s("：最流行的关系型数据库，之前是开源的。")],-1),en=n("p",null,"由瑞典MySQL AB公司开发，目前属于Oracle旗下产品。MySQL是最流行的关系型数据库管理系统之一。 目前分为两种版本：社区版，收费版。 注：2008年被Sun公司收购。2009年，Sun公司被Oracle收购。",-1),an=n("b",null,"使用公司",-1),ln=n("li",null,[n("p",null,"MariaDB：MySQL原作者开发的，MySQL被Oracle收购后，考虑到Oracle可能会将其闭源，所以基于MySQL的一个分支，又开发了一个MariaDB。")],-1),dn=n("p",null,"MariaDB数据库管理系统是MySQL的一个分支，主要由开源社区在维护，采用GPL授权许可 MariaDB的目的是完全兼容MySQL，包括API和命令行，使之能轻松成为MySQL的代替品。MariaDB名称来自Michael Widenius的女儿Maria的名字。",-1),tn=n("b",null,"使用公司",-1),cn=n("ul",null,[n("li",null,"Sql server：微软开发的。")],-1),rn=n("p",null,"SQL Server是由微软公司开发的一种关系型据库管理系统，它已广泛用于电子商务、银行、保险、电力等行业。SQLServer提供了对XML和Internet标准的支持，具有强大的、灵活的、基于Web的应用程序管理功能。而且界面友好、易于操作，深受广大用户的喜爱，但它只能在Windows平台上运行(2017 SQL Server后对Linux支持)，并对操作系统的稳定性要求较高，因此很难处理日益增长的用户数量。",-1),on=n("b",null,"使用公司",-1),un=n("ul",null,[n("li",null,"DB2数据库")],-1),pn=n("p",null,"DB2数据库是由IBM公司研制的一种关系型数据库管理系统，主要应用于OS/2、Windows等平台下，具有较好的可伸缩性，可支持从大型计算机到单用户环境。 DB2支持标准的SQL，并且提供了高层次的数据利用性、完整性、安全性和可恢复性，以及从小规模到大规模应用程序的执行能力，适合于海量数据的存储，但相对于其他数据库管理系统而言，DB2的操作比较复杂。",-1),vn=n("b",null,"使用公司",-1),mn=n("ul",null,[n("li",null,"PostgreSQL")],-1),bn=n("p",null,[s("是以"),n("a",{href:""},"加州大学伯克利分校"),s("计算机系开发的 Postgres 版本 4.2 为基础的对象关系型数据库管理系统（ORDBMS）。 因为许可证的灵活，任何人都可以以任何目的免费使用、修改和分发PostgreSQL。")],-1),kn=n("b",null,"使用公司",-1),hn=n("p",null,"去 IOE（阿里提出的） ： IBM的小型机（20-30w），Oracle的数据库，EMC，EMC代表数据存储",-1),gn=n("h2",{id:"非关系型数据库-nosql",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#非关系型数据库-nosql","aria-hidden":"true"},"#"),s(" 非关系型数据库(NoSQL)")],-1),_n=n("b",null,"对关系型数据库的补充",-1),yn=l('<blockquote><p>SQL： Structed Query Lanugage,结构化查询语言。是一种专门用来和数据库通信的标准语言，<strong>用于向数据库存取数据以及查询、更新和管理关系数据库系统</strong>。 每个关系型数据库都支持SQL语言。 <span style="color:red;background:yellow;"><b>为什么有SQL</b></span>：数据库产品纷繁复杂，如果没有一套标准的查询语言，对开发者的学习成本和企业的切换成本很高。</p></blockquote><p>常见的非关系型数据库</p><ul><li>Redis（后面会学）： 最常用的非关系型数据库，数据存在内存，速度快，吞吐量高。单机10w吞吐。</li></ul><blockquote><p>Remote Dictionary Server(Redis) 是一个由 Salvatore Sanfilippo 写的 key-value 存储系统，是跨平台的非关系型数据库。 Redis 是一个开源的使用 ANSI C 语言编写、遵守 BSD 协议、支持网络、可基于内存、分布式、可选持久性的键值对(Key-Value)存储数据库，并提供多种语言的 API。它是一个基于内存实现的键值型非关系（NoSQL）数据库 Redis 遵守 BSD 协议，实现了免费开源，其最新版本是 6.20，常用版本包括 3.0 、4.0、5.0。自 Redis 诞生以来，它以其超高的性能、完美的文档和简洁易懂的源码广受好评，国内外很多大型互联网公司都在使用 Redis，比如腾讯、阿里、Twitter、Github 等等。</p><p>redisCli.put(&quot;name&quot;, &quot;zhangsan&quot;);</p><p>redisCli.get(&quot;name&quot;); Map</p></blockquote><ul><li>Memcached</li></ul><blockquote><p>基于内存的key-value数据库。出现自Redis之前，但有一些问题。</p><ul><li>数据全部在内存中，断电后会挂掉，数据不能超过内存大小</li><li>支持的类型不丰富 所以目前公司使用它的较少，一些老项目可能仍然在使用，新项目无使用它的。</li></ul></blockquote><ul><li>Mongodb：文档数据库。存储大量文档的。</li><li>Hbase：大数据领域使用的比较多的数据库，列式数据库。</li></ul><p>数据库有很多种，这无关孰优孰劣(没有谁好谁差之分)，<span style="color:red;background:yellow;"><b>主要取决于企业希望如何使用数据.</b></span></p><p>企业要求： 钱少，能用。性能差不多就可以。 MySQL</p><p>政府要求： 钱无所谓，千万数据要安全。</p><blockquote><p>关系型数据库和非关系型数据库, 区别很多. 而在关系型和非关系型数据中,最本质的区别是: 关系型数据库以<code>数据和数据之间存在的关系</code>维护数据, 而非关系型数据库是指存储数据的时候<code>数据和数据之间没有什么特定关系</code>. 在大多数时候, 非关系型数据库是在传统关系型数据库基础上(其实已经基本上完全不同), 在功能上简化, 在数据存储结构上大大改变, 在效率上提升. 通过减少用不到或很少用的功能, 在能力弱化的同时也带来产品性能的大幅度提高. 但是本质上讲, 他们都是用来存储数据的. 而对于我们Java后端开发来讲,<span style="color:red;background:yellow;"><b> 我们在工作中基本上是以关系型数据库为主, 非关系型数据库为辅的用法.</b></span></p></blockquote><p>关系型数据库： 存在磁盘上。速度慢；</p><p>非关系型数据库： 存在内存上，速度快。</p><p>主要是用关系型数据库。 在一些辅助的接口上，会用非关系型数据库。</p><p>/good/miaosha 秒杀的接口，对速度的要求非常高，这时候会使用非关系型数据库来做一些事情。</p><h1 id="数据库安装" tabindex="-1"><a class="header-anchor" href="#数据库安装" aria-hidden="true">#</a> 数据库安装</h1><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>怎么确认安装完成了</strong><img src="'+m+'" alt="" loading="lazy"></p><p>需要配置环境变量</p><p><img src="'+b+'" alt="" loading="lazy"> 默认安装目录： <code>C:\\Program Files\\MySQL\\MySQL Server 5.7</code>。里面有一个<code>bin</code>目录，都是启动命令等。</p><p>环境变量的设置 <img src="'+k+'" alt="" loading="lazy"></p><p><span style="color:yellow;background:red;"><strong>对于win7的同学，操作环境变量需要注意。添加Path时候，不要把其他的环境变量全部删除了。</strong></span></p><h1 id="数据库构成" tabindex="-1"><a class="header-anchor" href="#数据库构成" aria-hidden="true">#</a> 数据库构成</h1><h2 id="软件架构" tabindex="-1"><a class="header-anchor" href="#软件架构" aria-hidden="true">#</a> 软件架构</h2><blockquote><p>在互联网的网络交互和数据访问中,一般常见两种网络架构模式: B/S结构或者C/S结构. B/S: Browser-Server即浏览器和服务器, 即通过浏览器和服务器发起网络交互的数据请求. C/S: Client-Server即客户端和服务器, 即通过客户端和服务器发起网络交互的数据请求. <img src="'+h+'" alt="" loading="lazy"></p></blockquote><h2 id="mysql的内部数据组织方式" tabindex="-1"><a class="header-anchor" href="#mysql的内部数据组织方式" aria-hidden="true">#</a> MySQL的内部数据组织方式</h2><blockquote><p>在MySQL中, 我们对数据的组织逻辑上是按照库/表/数据 这种结构组织的. 数据库: 表示一份完整的数据仓库, 在这个数据仓库中分为多张不同的表. 表: 表示某种特定类型数据的的结构化清单, 里面包含多条数据. 数据: 表中数据的基本单元.</p></blockquote><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Server端是 数据库/表/数据这样的形式。 所以学习的顺序是：</p><ul><li>对库的增删改查</li><li>对表的增删改查</li><li>对数据的增删改查</li></ul><h1 id="sql语言" tabindex="-1"><a class="header-anchor" href="#sql语言" aria-hidden="true">#</a> SQL语言</h1><blockquote><p>SQL：结构化查询语言（Structured Query Language）简称SQL，是一种专门用来和数据库通信的语言，<strong>用于向数据库存取数据以及查询、更新和管理关系数据库系统</strong>。 与其他语言(Java, C++...)不同的是, SQL由很少的词构成, 这是希望从数据库读写数据时能以更简单有效的方法进行.</p></blockquote><p><span style="color:red;background:yellow;"><b>SQL有如下优点</b></span></p>',33),fn=n("b",null,"这也就意味着每个关系型数据库都支持SQL语言.",-1),Sn=l('<figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="sql的基础操作" tabindex="-1"><a class="header-anchor" href="#sql的基础操作" aria-hidden="true">#</a> SQL的基础操作</h1><h2 id="登录数据库" tabindex="-1"><a class="header-anchor" href="#登录数据库" aria-hidden="true">#</a> 登录数据库</h2><blockquote><p>MySQL是C/S架构的软件，所以我们的Server是一直启动着的，我们使用官方提供的客户端去连接Server，然后发送命令给server端执行，server端返回执行结果。 <img src="'+y+`" alt="" loading="lazy"></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> 
输入密码
-- 要注意。一定要配置环境变量之后才能执行这个命令。 

$ mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span>
-- 不建议大家直接把密码写在控制台上
不建议这样写。因为按上下键，可能能看到你的密码，不安全。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-SHEL line-numbers-mode" data-ext="SHEL"><pre class="language-SHEL"><code>-- 大家进入企业里面了。注意用户名和密码。 一般不是root
ec2-198-51-100-1.compute-1.amazonaws.com:3306    33060  33061   33062
Qw4Rt9Lp7Kj2HxY
Zs8Xd3Cv6Nm1GbE

有个同学入职了。三天不知道怎么连数据库。

root
123456

-- 环境的问题，可以问同事，不要怕。你不知道，也可以先问同学，问老师。
-- 现在要查看一个机器的CPU和内存。 
-- 问问chatGPT
-- 搜索搜索。 

-- 也要注意度。 

ec2-198-51-100-1.compute-1.amazonaws.com:3306
Qw4Rt9Lp7Kj2HxY
Zs8Xd3Cv6Nm1GbE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="库操作" tabindex="-1"><a class="header-anchor" href="#库操作" aria-hidden="true">#</a> 库操作</h1><h2 id="查看库" tabindex="-1"><a class="header-anchor" href="#查看库" aria-hidden="true">#</a> 查看库</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看所有数据库</span>
<span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span>

<span class="token comment">-- 模糊匹配查找数据库</span>
<span class="token keyword">show</span> <span class="token keyword">databases</span> <span class="token operator">like</span> <span class="token string">&quot;test%&quot;</span><span class="token punctuation">;</span>
<span class="token comment">-- test% 表示以test开头</span>
<span class="token comment">-- %info  表示以info结尾</span>
<span class="token comment">-- %info% 表示 info可以出现在任意位置</span>

<span class="token comment">-- 查看创建数据库命令</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">database</span> db_name<span class="token punctuation">;</span>
<span class="token comment">-- 查看创建db_name 的SQL语句</span>

<span class="token identifier"><span class="token punctuation">\`</span>test2<span class="token punctuation">\`</span></span>
单引号的作用，标识这是一个普通的文本，不是关键字。比如创库的时候，想创建一个<span class="token keyword">select</span>库。

<span class="token keyword">select</span>   <span class="token keyword">create</span> <span class="token keyword">database</span> <span class="token identifier"><span class="token punctuation">\`</span>select<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>

<span class="token identifier"><span class="token punctuation">\`</span><span class="token punctuation">\`</span></span>的位置，在esc的下方，<span class="token number">1</span>的左边，注意输入法是英文的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+`" alt="" loading="lazy"><span style="color:red;background:yellow;"><b>不要删除默认的自带的库。</b></span>尤其是<code>mysql</code> 、<code>performance_schema</code> 、<code>information_schema</code></p><h2 id="创建库" tabindex="-1"><a class="header-anchor" href="#创建库" aria-hidden="true">#</a> 创建库</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建一个叫 db_name 的数据库  注意  库名，表名，列名均不区分大小写</span>
<span class="token comment">-- dbName   db_name</span>
<span class="token comment">-- dbName   dbname  </span>
<span class="token keyword">create</span> <span class="token keyword">database</span> db_name<span class="token punctuation">;</span>

<span class="token comment">-- 取数据库的名字的时候。要用  下划线进行分割。    ---&gt; 库名 表名 字段名，都必须是小写，以下划线进行分割。无论题目怎么要求。 写错了 跑2km。</span>

<span class="token comment">-- 不能这样写</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> teacherInfo<span class="token punctuation">;</span>

<span class="token comment">-- 要用下划线来区分单词</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> teacher_info<span class="token punctuation">;</span>

<span class="token comment">-- 指定字符集和默认校对规则</span>
<span class="token comment">-- 创建一个数据库，字符集是  utf8mb4  校对规则  utf8mb4_general_ci</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> db_name <span class="token keyword">character</span> <span class="token keyword">set</span> utf8mb4 <span class="token keyword">collate</span> utf8mb4_general_ci<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> db_name <span class="token keyword">character</span> <span class="token keyword">set</span> utf8mb4 <span class="token keyword">collate</span> utf8mb4_bin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;background:yellow;"><b>注意 ：库名，表名，列名均不区分大小写，所以如果要区分单词，使用下划线代替。</b></span></p><blockquote><p>比如：希望一个用来存储学生信息的库，应该命名为student_info，而不是studentInfo</p></blockquote><p>阿里编程规范</p><figure><img src="`+w+'" alt="image-20230411110258332" tabindex="0" loading="lazy"><figcaption>image-20230411110258332</figcaption></figure><blockquote><p>MySQL 的字符集（CHARACTER）和校对规则（COLLATION）是两个不同的概念。字符集是用来定义 MySQL 存储字符串的方式，校对规则也可以称为排序规则，是指在同一个字符集内字符之间的比较规则。字符集和校对规则是一对多的关系，每个字符集都有一个默认的校对规则。</p><p>推荐大家使用: utf8mb4 。</p><p>mysql里面有一个utf8 ,但是它是三个字节的，有一些四个字节的表示不了。</p><p>utf8mb4才是真正的utf-8。</p></blockquote><p>字符集，就是MySQL存储数据的方式。比如现在有一个zhansgan 的字符串，需要存储到MySQL中。因为文件系统中，只能存二进制的。所以需要把zhangsan进行编码，编码之后，才能写入到磁盘里面。</p><p>校对规则，是指排序的。比如有一些排序规则区分大小写，有一些排序规则不区分大小写.</p><p>utf-8: 使用4个字节来代表一个字符。 MySQL官方有一个utf8.</p><p>字符集： 就是MySQL存储数据的方式。 比如，要存储 &quot;张三&quot; 进入数据库。</p><p>校对规则： 就是排序的。</p>',23),wn=n("strong",null,"不支持中文。",-1),Ln=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into user values (1, &quot;张三&quot;);

 order by name;
 比如校对规则： 有人 name   abc   Abc  ABC   ABc   

如果大家没有设置字符集的时候，是latin1的字符集。然后不能存储中文。

latin1_swedish_ci (case insensitive)
latin1_general_cs (case sensitive)

区分大小写的 (_cs)
不区分大小写的。(_ci)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;background:yellow;"><b>注意：</b></span>如果不设置字符集，有可能会使用了默认的latin1，导致存储中文报错。</p><figure><img src="`+L+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>标准的utf8: 使用1-4字节来表示字符。</p><p>在MySQL里面有utf8，但是是个假的。3个字节。所以我们一般不用utf8。</p><p>utf8mb4 ，一般使用utf8mb4来当做字符集。</p><p>默认校对规则： utf8mb4_general_ci。</p><p>utf8mb4_bin： 区分大小写。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看所有的字符集</span>
<span class="token keyword">show</span> <span class="token keyword">character</span> <span class="token keyword">set</span><span class="token punctuation">;</span>

<span class="token comment">-- 查看所有的校对规则</span>
<span class="token keyword">show</span> collation <span class="token keyword">where</span> <span class="token keyword">charset</span><span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大小写不敏感是啥意思？ Abc ABC abc 。不是存储的时候会变，只是获取出来时候，排序的规则。</p><ul><li>我存储 Abc 会不会变成 abc.字符集， 校对规则。</li><li>select name from user order by name;</li></ul><h2 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> 删除数据库</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除数据库</span>
<span class="token keyword">drop</span> <span class="token keyword">database</span> db_name<span class="token punctuation">;</span>

<span class="token comment">-- 不要瞎操作。尤其是工作过程中。删库一定要小心再小心。要留证。</span>
<span class="token comment">-- 删库是一个高危动作。 即使有这种操作，也不应该是你来。</span>
<span class="token comment">-- 工作过程中，有的要注意留痕。 </span>
<span class="token comment">-- 在微信上，找他确认。</span>

<span class="token comment">-- 刘总，你刚刚让我删某某库，我确认一下，怕出事担责？ </span>
<span class="token comment">-- 刘总，您刚刚在电话里说，我需要删除某个环境的某个库，我和您确认一下，防止操作错了。</span>

<span class="token comment">-- 是的。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改数据库" tabindex="-1"><a class="header-anchor" href="#修改数据库" aria-hidden="true">#</a> 修改数据库</h2><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 修改指定库的  字符集和校对规则
alter database db_name character set utf8 collate utf8_bin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),qn=n("b",null,"数据库中未提供改库名的操作",-1),Qn=l(`<h2 id="选择数据库" tabindex="-1"><a class="header-anchor" href="#选择数据库" aria-hidden="true">#</a> 选择数据库</h2><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 使用db_name这个库
use db_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>一个MySQL系统中, 管理多个数据库。 我们只有进入对应的数据库中, 才能进一步操作数据库中的数据。 因为表都是在库里面的。所以需要进入库中，再对表进行各种操作。</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- &lt;注释&gt;

-- 使用两个横线进行注释的时候。后面必须跟空格

# &lt;注释&gt;

/*
  &lt;注释&gt;
*/    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),xn=n("b",null,"注意:",-1),Mn=n("p",null,[s("在数据库语句中如果我们需要注释某些内容, 一般有三种方式。 "),n("code",null,"--"),s(" 注释符(要注意的是"),n("code",null,"--"),s("之后要有一个空格再接着书写注释内容) "),n("code",null,"#"),s(" 注释符 (之后不需要空格) "),n("code",null,"/* */"),s(" 注释符 (一般用于多行注释)")],-1),En=l(`<h1 id="表操作" tabindex="-1"><a class="header-anchor" href="#表操作" aria-hidden="true">#</a> 表操作</h1><p>在表格级别的所有操作，都必须要在数据库中，所以必须要先选择数据库。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 选择指定的数据库
use db_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h2><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- create table table_name  --&gt;  固定写法，表名自己写，多个单词，下划线隔开
-- (column_name column_type [ , column_name2 column_type])  --&gt;  括号里面写有哪些列,以及列类型
--  
create table test_table();

-- 创建表格的写法。
create table test_table1( id int , name char(20), )

-- 这个SQL相当于创建了一个test1的表。表里面有一列，列名叫id,列类型叫int
create table test1(id int);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;background:yellow;font-size:30;"><b>类型</b></span></p>`,6),Nn=n("li",null,"tinyint：1字节。",-1),Tn=n("b",null,"int(integer)",-1),Rn=n("li",null,"bigint: 8字节。和long比较像。",-1),An=n("li",null,"float(M,D): 4字节。浮点型",-1),In=n("b",null,"double(M,D)",-1),On=n("li",null,"decimal (M, D),dec: 压缩的“严格”定点数M+2 个字节。定点型。 浮点数相对于定点数的优点是在长度一定的情况下，浮点数能够表示更大的范围；缺点是会引起精度问题。",-1),Cn=l(`<p>M代表的是允许存储的最大位数，D代表是小数位数。也就是留给整数的是 M-D位。如果整数超了，直接报错，如果小数超了，会四舍五入。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>float(M,D) 
    // M代表允许存储的最大位数，D代表小数位数。
    // float(5,2) 代表，最大位数5位，2位小数。 留个整数的就三位
    // 如果整数超了。  ---会报错。Out of range
    // 如果小数超了。  -- 四舍五入   100.6666 --》 100.67
    
double也是类似。
    但是要注意，它们都是浮点型。 不精确
    
存钱的时候： 如果之前是100.331  千万不能存储成后面100.33 
    
对一些精度要求比较高的数据（货币数据、科学数据），使用DECIMAL 。
    或者使用字符串的形式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 MySQL 中，定点数以字符串形式存储，在对精度要求比较高的时候（如货币、科学数据），使用 DECIMAL 的类型比较好，另外两个浮点数进行减法和比较运算时也容易出问题，所以在使用浮点数时需要注意，并尽量避免做浮点数比较。</p>`,3),Dn=n("p",null,"日期",-1),Bn=n("li",null,"year：年(YYYY)。",-1),Un=n("li",null,"time: 时分秒(HH:MM:SS)。",-1),zn=n("b",null,"date",-1),Yn=n("b",null,"datetime",-1),Vn=n("b",null,"timestamp",-1),Fn=n("p",null,"字符串",-1),Pn=n("li",null,"char(M): 定长字符串，设置了长度，无论存储多少长度的字符串，都会占满M。",-1),Gn=n("b",null,"varchar(M)",-1),Hn=n("span",{style:{color:"red",background:"yellow"}},[n("strong",null,"最大长度65535字节。")],-1),Jn=n("li",null,"text：文本字符串，会用2字节来存储长度。最大长度65535字符，约64K。",-1),jn=n("li",null,"longtext：大文本字符串。会使用4字节存储长度。最大长度2^32，约4G。",-1),Wn=n("p",null,"如果你需要存储的字符串在2000以内，可以使用varchar()。如果超过，建议使用text。",-1),Xn=n("p",null,[s("比如我现在有一个电影 3.8G。需要存怎么办？ 把电影，找个电脑存起来，存路径。 "),n("code",null,"D:/data1/学习.mp4"),s("。数据库是存放数据的，但是不能存放这种大的视屏。")],-1),Kn=l(`<p>但是一般使用varchar。不会写太多。 varchar(500) varchar(1000) 这个都是可以的。但是如果要写varchar(5000)。不建议使用varchar。</p><ul><li><span style="color:red;background:yellow;"><b>举例：</b></span><ul><li>现在有一个学生表，需要存储的信息包括，学生id，姓名，年龄，身高，体重，籍贯，身份证号，联系电话</li><li>现在有一个图书信息表，需要存储的信息包括，序号，书名，作者，出版社，出版日期，定价，备注</li></ul></li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 创建一个表，主要是三个问题：
-- 1.表名
-- 2.有哪些字段
-- 3.字段的类型及长度
create table student(
	id int,
	name varchar(200),
	age int,
	height double(10,2),
	weight double(10,2),
	address varchar(500),
	id_card varchar(50),
	phone varchar(20)
);


-- 建表语句的原则。应该留有一定扩展性。

varchar(2) varchar(5) varchar(10) varchar(50) varchar(200) 
写得多，并不一定会直接占用那么多。 varchar(5)。建表的时候留有扩展空间，防止后续数据量变大了之后，频繁去改表。
所以在最开始创建表的时候，直接写大一点点。

-- 现在有一个图书信息表，需要存储的信息包括，序号，书名，作者，出版社，出版日期，定价，备注
create table book(
	id int,
	book_name varchar(200),
	author varchar(100),
	press varchar(200),
	publication_date date,
	price decimal(10,2),
	comment varchar(1000)
);

-- 有一些字段，可以根据上下文进行推断，所以我们也可以做一点省略
-- 比如在书这张表里，出现了name，我们会直接认为name是书的名字，不会认为是作者或者其他人的名字，所以可以省略一点点。
-- book_name
-- 可以根据上下文推断。

class Student{
    String studentName;
    String name;
    String teacherName;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除名为table_name的表</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看表" tabindex="-1"><a class="header-anchor" href="#查看表" aria-hidden="true">#</a> 查看表</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看所有表</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span>

<span class="token comment">-- 查看表格结构(有哪些列，以及列的类型)</span>
<span class="token keyword">desc</span> table_name<span class="token punctuation">;</span>
<span class="token keyword">describe</span> table_name<span class="token punctuation">;</span>

<span class="token comment">-- 查看表的创建语句。获取出来的语句，可以直接运行，（改改表名）</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><span style="color:red;background:yellow;"><b>举例：</b></span><ul><li>查看学生表创建语句: <code>show create table student;</code></li><li>查看图书表创建语句。有哪些列.<code>show create table book_info;</code> <code>desc book_info;</code></li></ul></li></ul><h2 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h2><p>知道有这个东西就可以了，但是在工作中，如果有这种需求，你不要去操作。在自己的数据库上练习一下无所谓。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 修改表名
rename table {old_table_name} to {new_table_name};
alter table {old_table_name} rename to {new_table_name};

-- 修改表字符集 排序规则
alter table table_name character set utf8mb4 collate utf8mb4_bin;

-- 添加列
alter table table_name add column column_name column_type;

-- 删除列
alter table table_name drop column column_name;

-- 修改某列的类型
alter table table_name modify column column_name column_type;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不要觉得它非常简单，可以无脑冲。</p><p>是不是能够直接，把SQL准备好，然后拿上SQL就上生产环境去执行SQL了。</p><p>我一执行SQL，SQL一直卡着。客户这边也卡着。内部的锁造成的。</p><p>凌晨去执行。</p><h2 id="关于字符集和校对规则的说明" tabindex="-1"><a class="header-anchor" href="#关于字符集和校对规则的说明" aria-hidden="true">#</a> 关于字符集和校对规则的说明</h2><p>有四个层次的字符集和校对规则。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 数据库服务层面的。有一个字符集和校对规则，如果没有设置，为latin1。

// 数据库层面的。
// 它也有一个字符集和校对规则。如果创建的时候没有，就会直接继承服务器的参数，即latin1。
 create database test1;   

// 表层面的
它也有一个字符集和校对规则。如果创建的时候没有，就会直接继承数据库的参数。
create table test2(
	id int,
    name varchar(200)
) character set utf8mb4;
    
// 字段层面的
它也有一个字符集，如果创建的时候没有，直接继承表层次的。
create table test3(
	id int,
    name varchar(200) character set utf8mb4
) 
    
创建了一个表之后，它的字段的字符集就固定下来了。现在即使再去改库的字符集，表的字符集，也不会影响列的字符集，所以建议删掉表重新建表。  
    
 // 先创建了一个  test1的数据库，没有指定字符集。  latin1。 
 // 创建一个  test_table的表。也没有指定   latin1
//  表里面的字段也是latin1
    
// alter database test1 character set utf8mb4;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+q+`" alt="image-20230508090539735" tabindex="0" loading="lazy"><figcaption>image-20230508090539735</figcaption></figure><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 第一步，如果创建库的时候，没有指定字符集和校对规则， 会使用数据库服务层面的字符集和校对规则
-- 会使用服务层面的字符集   latin1
create database db1; 

use db1;

-- 没有指定表层级的字符集和校对规则，会使用库层级的。 
-- 表是latin1  列是latin1
create table test1(
	id int,
    name varchar(255)
);

-- 一个表一旦创建，列的字符集已经固定下来了，即使你再去改 库的字符集和表的字符集，也不会影响列的字符集。（中文存不进去。）
-- 建议大家把表删掉，再重新建一个表。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="数据操作" tabindex="-1"><a class="header-anchor" href="#数据操作" aria-hidden="true">#</a> 数据操作</h1><h2 id="添加数据" tabindex="-1"><a class="header-anchor" href="#添加数据" aria-hidden="true">#</a> 添加数据</h2><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 插入数据
-- 方式1，指定需要插入的列名，values需要与之对应。
insert into table_name (column1, column2, ......) values (value1, value2, ......)

-- 直接在表名后，指定需要插入哪几列，然后在后方 values后，直接写列的值。 要一一对应。
insert into test1(id,name,address) values (1, &quot;zhangsan&quot;,&quot;hubei&quot;);

-- 方式2，不指定需要插入的列名。values，必须要写所有value，且与建表语句一一对应
insert into table_name values (value1, value2, ......)

-- 方式3，使用set方式
insert into table_name set column1=value1, column2=value2,...;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><span style="color:red;background:yellow;"><b>举例：</b></span>现在有一个学生表，表里有以下列，写出SQL</p></blockquote><table><thead><tr><th>列名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>整型</td><td>学生编号</td></tr><tr><td>name</td><td>字符串</td><td>学生姓名</td></tr><tr><td>age</td><td>整型</td><td>学生年龄</td></tr><tr><td>address</td><td>字符串</td><td>学生地址</td></tr><tr><td>remark</td><td>字符串</td><td>自我评价</td></tr></tbody></table><blockquote><p>插入几条数据</p></blockquote><ul><li>编号是1，姓名是 &quot;阿妈粽&quot; ，年龄25， 地址上海，自我评价：是一个up主</li><li>编号是2，姓名是 &quot;阿斗归来了&quot; ， 地址湖北，自我评价：是一个视频区up主</li><li>编号是3，姓名是 &quot;盗月社&quot; ， 地址上海，自我评价：做饭up主</li><li>编号是4，姓名是 &quot;李云龙&quot; ， 地址湖北，自我评价：团长</li></ul><p>可以插入多行，只用在values后添加多个括号。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>insert into table_name values (value1, value2, ......),(valuem,valuen,......),(valuem,valuen,......)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 插入语句。 
-- 方式1： 指定插入的列 insert into test_name(列1,列2,列3, ....)  values (值1,值2,值3,...)
--  一定要一一对应。
desc test1;

-- 前面写得列名和后面写得值的顺序，一定要对应上。 数目也一定要一样
insert into test1(id, name, email, address) values (4, &#39;email&#39;, &#39;name&#39;, &#39;address&#39;);

select * from test1;


-- 方式2： 可以不指定插入的列。 需要插入全部列。而且列的值的顺序和 建表语句(desc select ) 
-- insert into test_name values (值1, 值2, 值3, ....) 值的顺序见上
insert into test1 values (5, &#39;jingtian&#39;, &#39;河南&#39;, &#39;jingtian@qq.com&#39;, &#39;110&#39;, null);

-- 方式3： 可以指定插入列
-- insert into test_name set column1=value1, column2=value2, column3=value3;
insert into test1 set id=6, name=&#39;shenlan&#39;, address=&#39;shanxi&#39;;

select * from test1;


-- 学生表的SQL
create table student_info(
	id int,
	name varchar(255),
	age int,
	address varchar(255),
	remark text
);

insert into student_info values (1, &#39;阿妈粽&#39;, &#39;25&#39;, &#39;上海&#39;, &#39;是一个up猪&#39;);
select * from student_info;

-- 可以有两种写法
insert into student_info values (2, &#39;阿斗归来了&#39;, null, &quot;湖北&quot;, &quot;是一个视频区up主&quot;);

insert into student_info(id,name, address, remark) values (3, &#39;盗月社&#39;, &#39;上海&#39;, &#39;做饭up主&#39;);

insert into student_info(id,name, address, remark) values (4, &#39;李云龙&#39;, &#39;湖北&#39;, &#39;独立团团长&#39;);

-- 也可以一次性插入多条数据。直接在括号外面加逗号，加括号
insert into student_info(id,name, address, remark) values (5, &#39;盗月社1&#39;, &#39;上海&#39;, &#39;做饭up主&#39;),(6, &#39;盗月社2&#39;, &#39;上海&#39;, &#39;做饭up主&#39;), (7, &#39;盗月社3&#39;, &#39;上海&#39;, &#39;做饭up主&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h2><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 查询语句 关键词 select ... from 
select * from table_name;

-- select .. from 是查询的关键词

-- * 代表选出所有列
-- 也可以写表中的列，多列使用, 分割
-- 比如 select id,name from students;

-- table_name 是表名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是查询所有数据，我需要特定的数据怎么办呢？ 使用where关键词。where相当于是过滤器。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 找出name是 zs 的表记录
select * from table_name where name=&#39;zs&#39;;

-- 找出年龄大于 18岁的人
select * from table_name where age &gt; 18;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>后面会专门讲where的用法</p></blockquote><p><span style="color:red;background:yellow;"><b>举例：</b></span>：我想找出一些数据</p><ul><li>名字叫做阿妈粽的</li><li>年龄大于18的</li><li>是湖北人的</li></ul><h2 id="修改数据" tabindex="-1"><a class="header-anchor" href="#修改数据" aria-hidden="true">#</a> 修改数据</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 更新满足条件的表记录，设置列值</span>
<span class="token keyword">update</span> table_name <span class="token keyword">set</span> column1<span class="token operator">=</span>value1<span class="token punctuation">,</span> column2<span class="token operator">=</span>value2 <span class="token punctuation">[</span> <span class="token keyword">where</span> 条件<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">update</span> student1 <span class="token keyword">set</span> remark <span class="token operator">=</span> <span class="token string">&#39;测试remark&#39;</span> <span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><span style="color:yellow;background:red;"><strong>记住，要加where条件，否则，所有数据都会被更改。</strong></span></p><p><span style="color:red;background:yellow;"><b>举例：</b></span></p><ul><li>更新湖北的人，地址变成湖北省。自我评价也变成湖北人，能吃辣</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>update student1 set address=&#39;湖北省&#39;,remark=&#39;湖北人，能吃辣&#39; where address=&#39;湖北&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h2><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 删除满足条件的数据
delete from table_name [WHERE 条件];


想删除id=10的人。

delete from student1 where id=10;

想删除 湖北人 
delete from student1  where address = &#39;湖北省&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:yellow;background:red;"><strong>需要加where条件，否则会删除所有数据。</strong></span></p><h1 id="特殊关键字" tabindex="-1"><a class="header-anchor" href="#特殊关键字" aria-hidden="true">#</a> 特殊关键字</h1><p>数据准备</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE TABLE \`student\`  (
	\`id\` int(11)  PRIMARY KEY  AUTO_INCREMENT,
	\`name\` varchar(255)   ,
	\`class\` varchar(255)  ,
	\`chinese\` float  ,
	\`english\` float  ,
	\`math\` float  
) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>INSERT INTO students (id, name, class, chinese, english, math) VALUES (1, &#39;武松&#39;, &#39;一班&#39;, 70, 90, 60);
INSERT INTO students VALUES (2, &#39;林冲&#39;, &#39;一班&#39;, 70, 90, 90);
INSERT INTO students VALUES (3, &#39;松江&#39;, &#39;一班&#39;, 90, 90, 20);
INSERT INTO students VALUES (4, &#39;贾琏&#39;, &#39;二班&#39;, 60, 60, 60);
INSERT INTO students VALUES (5, &#39;贾宝玉&#39;, &#39;二班&#39;, 95, 80, 5); 
INSERT INTO students VALUES (6, &#39;贾环&#39;, &#39;二班&#39;, 25, 25, 5); 
INSERT INTO students VALUES (7, &#39;曹操&#39;, &#39;三班&#39;, 90, 90, 90); 
INSERT INTO students VALUES (8, &#39;曹丕&#39;, &#39;三班&#39;, 90, 80, 80); 
INSERT INTO students VALUES (9, &#39;曹植&#39;, &#39;三班&#39;, 98, 90, 80); 
INSERT INTO students VALUES (10, &#39;刘备&#39;, &#39;三班&#39;, 95, 90, 80); 
INSERT INTO students VALUES (11, &#39;诸葛亮&#39;, &#39;三班&#39;, 98, 95, 95); 
INSERT INTO students VALUES (12, &#39;孙权&#39;, &#39;三班&#39;, 80, 90, 80); 
INSERT INTO students (id) VALUES (13);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+Q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="where-条件" tabindex="-1"><a class="header-anchor" href="#where-条件" aria-hidden="true">#</a> where-条件</h2>',49),Zn=n("p",null,[s("使用 WHERE 关键字并指定"),n("code",null,"查询条件|表达式"),s(", 从"),n("code",null,"数据表"),s("中获得"),n("code",null,"满足条件"),s("的数据内容.")],-1),$n=n("b",null,"使用位置：",-1),ns=n("span",{style:{color:"yellow",background:"red"}},[n("strong",null,"在update里，和delete必须要用。")],-1),ss=l(`<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 在select与剧中的含义。只查询出满足条件的数据
SELECT &lt;查询内容&gt;|列1,... FROM  &lt;表名字&gt; WHERE &lt;查询条件&gt;|表达式

-- 在update里面，只修改满足条件的数据
UPDATE table_name SET column1=value1, column2=value2 where 条件;

-- 在delete里面，只删除满足条件的数据
DELETE FROM TABLE_NAME WHERE 条件;

eg:

-- 想找id为1的
select * from table_name where id=1;

-- 年龄 大于20的
selct * from table_name where age &gt; 20;

-- 想找到id大于10的
select id, name from students where id &gt; 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 WHERE 关键字并指定<code>查询条件|表达式</code>, 从<code>数据表</code>中获得<code>满足条件</code>的数据内容. <strong>在构建Where的<code>查询条件|表达式</code>的过程中, 我们可能需要了解到一些重要的<code>SQL运算符</code></strong></p><p>在where语句的后面，我们可以用到算数运算符。也可以用到逻辑运算符。</p><p>在查询结果中，我们也可以使用算术运算符。</p><ol><li>算术运算符 | 运算符 | 作用 | | ------ | ---- | | + | 加 | | - | 减 | | * | 乘 | | / | 除 | | % | 取余 |</li></ol><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 算数运算符，不仅可以出现在where中，还可以出现在查询列中。

-- 语数外总分 小于180的
-- 语文-数学 分差大于30的
-- 加权平均，按语文0.5 英语0.1 数学0.4求加权平均分
-- 加权平均分，小于等于60的
-- 求每个人的平均分，语数外三科
-- 求每个人的平均分，只筛选出平均分小于60的

-- 找出id是奇数的
-- 找语文成绩是偶数的

-- eg:
-- 语数外总分 小于180的
	select * from students where (chinese + english + math) &lt; 180; 
	
-- 语文和数学 分差大于30的
	select * from students where (chinese - math) &gt; 30; 
	
-- 加权平均，按语文0.5 英语0.1 数学0.4求加权平均分
	select *, (chinese*0.5 + english*0.1 + math *0.4) from students; 
	
-- 加权平均分，小于等于60的
	select *, (chinese*0.5 + english*0.1 + math *0.4)  from students where (chinese*0.5 + english*0.1 + math *0.4) &lt;= 60 ;  
	
-- 求每个人的平均分。语数外
    select *, (chinese + english + math) / 3 from students ;  
    
-- 求每个人的平均分，只筛选出平均分小于60的
    select *, (chinese + english + math) / 3 from students  where (chinese + english + math) /3  &lt; 60; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>比较和逻辑运算符 | 运算符 | 作用 | 运算符 | 作用 | | ----------- | ---------- | ----------- | --------------------------- | | = | 等于 | &lt;=&gt; | 等于(可比较null) | | != | 不等于 | &lt;&gt; | 不等于 | | &lt; | 小于 | &gt; | 大于 | | &lt;= | 小于等于 | &gt;= | 大于等于 | | between and | 在闭区间内 | like | 通配符匹配(%:通配, <code>_</code>占位) | | is null | 是否为null | is not null | 是否不为null | | in | 在列表内 | not in | 不在列表内 | | and | 与 | &amp;&amp; | 与 | | or | 或 | || | 或 |</li></ol><p>需要注意的：</p><ul><li><code>=</code>无法判断null。一般使用 is null来单独处理null</li><li>like中，%表示通配，<code>_</code>表示占位。 一个<code>_</code>代表一个字符。</li></ul><blockquote><p>练习： 查询语数外总成绩大于 180 的同学信息； 查询数学成绩在[80，90]区间的同学姓名； 查询各科都及格的同学姓名；</p><p>查询有一科成绩小于60的同学信息</p><p>查询一班和二班的同学信息；(两种写法)</p><p>查询姓贾的同学（只要姓贾就行）</p><p>查询姓贾的同学，两个字的</p><p>查询语文分数在 60 或90的同学</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 查询语数外总成绩大于 180 的同学信息；
select *,(chinese + english + math) from students where (chinese + english + math) &gt; 180;

-- 查询数学成绩在[80，90]区间的同学姓名；
select * from students where math between 80 and 90;

select * from students where math &gt;= 80 and math &lt;=90;

-- 查询各科都及格的同学姓名；
select * from students where chinese &gt;= 60 and math &gt;= 60 and english &gt;= 60;

-- 查询各科只要有一科及格的同学姓名；
select * from students where chinese &gt;= 60 or math &gt;= 60 or english &gt;= 60;

select * from students where id=6;

-- 查询一班和二班的同学信息；
select * from students where class = &#39;一班&#39; or class = &#39;二班&#39;;
select * from students where class in (&quot;一班&quot;, &quot;二班&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="distinct-过滤" tabindex="-1"><a class="header-anchor" href="#distinct-过滤" aria-hidden="true">#</a> distinct-过滤</h2><p>获取某个列的不重复值。或者是某些列的不重复值</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT DISTINCT &lt;字段名&gt; FROM &lt;表名&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>使用<code>DISTINCT</code>对数据表中<code>一个或多个字段</code>重复的数据进行过滤，重复的数据只返回其<code>一条</code>数据给用户.</p><p>什么叫重复：就是多个列，全部相等,这时候就认为是重复的数据。</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 返回所有的 class
select class from students;

-- 返回不重复的 class
select distinct class from students;


-- 返回所有去重后的英语成绩
-- 6条
select distinct english from students;

-- 返回两列 英语和数学去重后的结果。
-- 10条
select distinct english,math from students;

-- 13条
-- 90.90 重复了一条
-- 90,80 重复了两条
select english,math from students;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="limit-限制结果集" tabindex="-1"><a class="header-anchor" href="#limit-限制结果集" aria-hidden="true">#</a> limit-限制结果集</h2><p>一般用来做，比如限制最大的返回数目。或者是做分页上面。</p><p>select * from students limit 10;</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT &lt;查询内容|列等&gt; FROM  &lt;表名字&gt; LIMIT 记录数目;
SELECT &lt;查询内容|列等&gt; FROM  &lt;表名字&gt; LIMIT 初始位置，记录数目;
SELECT &lt;查询内容|列等&gt; FROM  &lt;表名字&gt; LIMIT 记录数目 OFFSET 初始位置;

eg:
-- 限制数目 为number个
-- 限制最大返回number个，如果表中记录不足number个，只会返回表中的记录数。
select * from tableName where condition limit number;

-- 偏移量为offsetNumber 从0开始
select * from tableName where condition limit offsetNumber, number;

-- 偏移量offsetNumber
select * from tableName where condition limit number offset offsetNumber;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用<code>LIMIT</code>对数据表查询结果集大小进行限定. LIMIT 记录数目: 从第一条开始, 限定记录数目 LIMIT 初始位置，记录数目: 从起始位置开始, 限定记录数目 LIMIT 记录数目 OFFSET 初始位置: 从起始位置开始, 限定记录数目 注意: 数据(默认下标从0开始)</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 从第一条开始拿 
select * from students limit 5;

-- limit offsetNumer,number 偏移数目，需要限制的总数
-- 2,5 代表从第三个开始拿 总共拿回来5个
select * from students limit 2,5;

-- limit number offset offsetNumber
-- limit 5 offset 3 代表 从第四个开始拿，总共最大拿回来五个
select * from students limit 5 offset 3;

一般用它来做分页查询。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="as-别名" tabindex="-1"><a class="header-anchor" href="#as-别名" aria-hidden="true">#</a> as-别名</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&lt;</span>内容<span class="token operator">&gt;</span> <span class="token keyword">AS</span> <span class="token operator">&lt;</span>别名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>AS</code> 关键字用来为表和字段指定别名.</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 可以为取出来的列名 取一个别名
select id,name as student_name,class from students;

-- 可以为一些计算的属性取别名
select (chinese + english + math) as total_score from students;

-- 也可以为表名取别名
select s.name from students as s;

select s.name from students s;

-- as 可以省略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="order-by-排序" tabindex="-1"><a class="header-anchor" href="#order-by-排序" aria-hidden="true">#</a> order by-排序</h2><p>比如我们想根据id进行排序； 或者想根据年龄进行排序。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT &lt;查询内容|列等&gt; FROM  &lt;表名字&gt; ORDER BY &lt;字段名&gt; [ASC|DESC];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>ORDER BY</code>对查询数据结果集进行排序. 不加排序模式: 升序排序. ASC: 升序排序. DESC: 降序排序. 注意: 如上查询, 当我们进行多字段排序的时候, 会先满足第一个列的排序要求, 如果第一列一致的话, 再按照第二列进行排序, 以此类推.</p></blockquote><h2 id="group-by-分组" tabindex="-1"><a class="header-anchor" href="#group-by-分组" aria-hidden="true">#</a> group by-分组</h2><p>按照某个、某些字段分组。 比如想看一个班级有多少学生。班级的最高分，最低分。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT &lt;查询内容|列等&gt; FROM  &lt;表名字&gt; GROUP BY  &lt;字段名...&gt;

eg: 
select class from students group by class;
select class,chinese from students group by class, chinese;
select class, group_concat(name), group_concat(chinese) from students group by class;

-- 获取语文成绩大于90分的，按照班级分组
select class, group_concat(name) from students where chinese &gt; 90 group by class;

-- 获取班级的平均分
select class, group_concat(name), avg(chinese) from students group by class;

-- 获取班级人数大于三个人的班级
select class, group_concat(name) from students group by class having count(*) &gt; 3;

-- 获取班级平均语文成绩大于60分的
select class, group_concat(name), avg(chinese) from students group by class having avg(chinese) &gt; 60;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>GROUP_CONCAT()函数会把每个分组的字段值都拼接显示出来.</p><p>HAVING 可以让我们对分组后的各组数据过滤。(一般和分组+聚合函数配合使用)</p></blockquote>`,34),es=n("p",null,"where主要用于对原始表进行过滤。having是对group by 后的结果进行过滤，一般配合聚合函数一起使用。",-1),as=n("p",null,[n("span",{style:{color:"red",background:"yellow"}},[n("strong",null,"注意点：")])],-1),is=n("code",null,"group by",-1),ls=n("strong",null,"在group中出现的字段",-1),ds=n("strong",null,"聚合函数聚合起来的东西",-1),ts=n("li",null,"多个字段分组查询时，会先按照第一个字段进行分组。如果第一个字段中有相同的值，MySQL 才会按照第二个字段进行分组。如果第一个字段中的数据都是唯一的，那么 MySQL 将不再对第二个字段进行分组.",-1),cs=n("li",null,"如果在select 字段中，可以看出group 字段，后方可以使用数字代替，从1开始",-1),rs=l(`<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 会报错。如果有同学不报错，是因为有一个选项没开
-- select * from students group by class;
-- select id,class from students group by class;

-- 在select中出现的，只能有 group by 后的字段；或者是聚合函数聚合起来的东西
select class from students group by class;

-- 根据英语成绩进行分组
select english from students group by 1;

-- 根据英语成绩，数学成绩进行分组
-- 会先按照英语成绩分组，如果英语成绩相同，则按照数学成绩进行分组
select english,math from students group by english,math;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是因为没有开这个选项。有的同学 <code>SELECT * from students group bu class;</code>不报错。</p>`,2),os={href:"https://www.cnblogs.com/csnjava/p/16531260.html",target:"_blank",rel:"noopener noreferrer"},us=l(`<h2 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h2><p>聚合函数一般用来计算列相关的指定值. <code>通常</code>和<code>分组</code>一起使用</p><table><thead><tr><th>函数</th><th>作用</th><th>函数</th><th>作用</th></tr></thead><tbody><tr><td>COUNT</td><td>计数</td><td>SUM</td><td>和</td></tr><tr><td>AVG</td><td>平均值</td><td>MAX</td><td>最大值</td></tr><tr><td>MIN</td><td>最小值</td><td></td><td></td></tr></tbody></table><ul><li><p>COUNT: 计数</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select count(columnName) from tableName [where 条件];

  eg:
      select count(*) from students;
      select count(name) from students;
      
-- 和分组一起使用。查看每个班级有多少人数

select class,count(*) from students group by class;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p><code>COUNT(*)</code>:表示表中总行数</p><p><code>COUNT(列)</code>: 计算非NULL的总行数。统计这个组，这一列非null的总行数。</p></blockquote><ul><li><p>SUM: 求和</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT &lt;查询内容&gt;|列等 , SUM&lt;列 FROM  &lt;表名字&gt; GROUP BY HAVING SUM&lt;表达式&gt;|条件
  
  eg:
  select sum(chinese) from students;
  select sum(chinese), sum(english), sum(math) from students;
  
  -- 查看每个班级的语文总分
  select class,sum(chinese),group_concat(chinese) from students group by class;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>AVG: 平均值</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT &lt;查询内容&gt;|列等 , AVG&lt;列&gt; FROM  &lt;表名字&gt; GROUP BY HAVING AVG&lt;表达式&gt;|条件

eg:
	select avg(chinese) from students;
    select avg(chinese), avg(english), avg(math) from students;
    
    -- 按班级查看平均分
    select class,avg(chinese), avg(english), avg(math) from students group by 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>MAX: 最大值</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT &lt;查询内容&gt;|列等 , MAX(&lt;列&gt;) FROM  &lt;表名字&gt; GROUP BY HAVING MAX(&lt;表达式&gt;)|条件

eg: 
    select max(chinese) from students;
    select max(chinese), max(english), max(math) from students;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>MIN: 最小值</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT &lt;查询内容&gt;|列等 , MIN(&lt;列&gt;) FROM  &lt;表名字&gt; GROUP BY HAVING MIN(&lt;表达式&gt;)|条件

eg:
    select min(chinese) from students;
    select min(chinese), min(english), max(math) from students;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,6),ps=l(`<ul><li>查询每个同学的总成绩，平均成绩，并用别名表示；</li><li>查询数学最大值，并用别名表示；</li><li>查询外语最小值，并用别名表示；</li><li>查询全体学生的语数外各科平均成绩，并用别名表示；</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 练习：
-- 查询每个同学的总成绩，平均成绩，并用别名表示；
-- ROUND(100.3465,2) 四舍五入
select name, (chinese + english + math) as total_score, ((chinese + english + math)/3) as avg_score from students;

select name, (chinese + math + english) as total_score , round((chinese+math+english) /3, 2) as avg_score from students;

-- 查询数学最大值，并用别名表示；
select max(math) as max_math_score from students;

-- 查询外语最小值，并用别名表示；
select min(english) as min_english_score from students;

-- 查询全体学生的语数外各科平均成绩，并用别名表示；
select avg(chinese),avg(math),avg(english) as avg_english from students;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT &lt;查询内容&gt;|列等 , (聚合函数)|* FROM  &lt;表名字&gt; GROUP BY 列 HAVING (聚合函数)条件 |条件;

  eg:
      select class, group_concat(name), count(*) from students group by class;
      select class, group_concat(name), count(*) from students group by class having count(*) &gt; 3;  
    

-- 获取语文成绩大于90分的，按照班级分组

-- 获取班级的平均分

-- 获取班级人数大于三个人的班级

-- 获取班级平均语文成绩大于60分的

-- 查询班级语文总分大于200的班级(可以显示一下语文总分)

-- 查询班级平均分，学生的限制：数学大于等于60，语文大于等于60的 

-- 查询班级情况，要求学生语文最大的大于等于90，语文最少分大于等于70

-- 查询班级，语文最小成绩大于等于60，数学也是

select class from students group by class having sum(chinese) &gt; 200;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="sql语句执行顺序" tabindex="-1"><a class="header-anchor" href="#sql语句执行顺序" aria-hidden="true">#</a> SQL语句执行顺序</h1><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code> (5) SELECT column_name, ...   
 (1) FROM table_name, ...   
 (2) [WHERE ...]   
 (3) [GROUP BY ...]   
 (4) [HAVING ...]   
 (6) [ORDER BY ...];  
 (7) [Limit ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>（1） 小括号中的数字代表执行顺序</li><li>SQL语句的关键字是有顺序的，需要按照上面的顺序来写</li><li>要注意书写顺序。也要注意执行顺序。</li></ul></blockquote><h1 id="数据完整性" tabindex="-1"><a class="header-anchor" href="#数据完整性" aria-hidden="true">#</a> 数据完整性</h1><p>主要是用来限制MySQL表中的数据，使数据符合规范，也称之为完整。</p><p>比如，你现在，写了一个用户表。希望用户表里面的name这一列，全部都应该有数据。 有时候，如果不加以限制，那会被插入一些无意义的值。</p><h2 id="实体完整性" tabindex="-1"><a class="header-anchor" href="#实体完整性" aria-hidden="true">#</a> 实体完整性</h2><p>缺少了这个字段，实体就不完整。</p><p><span style="color:red;font-size:30;"><b>列约束</b></span></p><blockquote><p>MySQL可以对插入的数据进行特定的验证，只有满足条件才可以插入到数据表中，否则认为是非法插入</p></blockquote><p><strong>主键(primary key)</strong></p>`,14),vs=n("li",null,"一个表只能有一个主键",-1),ms=n("li",null,"声明字段时，用 primary key 标识",-1),bs=n("li",null,"主键可以由多个字段共同组成。此时需要在字段列表后声明的方法",-1),ks=l(`<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table test_primary_key(
    -- 代表这个 columnName是主键
	columnName columnType primary key,
	......
)

create table test_primary_key2(
	columnName columnType,
	......,
	primary key(columnName， columnName2)
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>auto_increment 自动增长约束</strong> 一些序号，没有必须手动生成，想让mysql自动生成。</p><ul><li>自动增长必须为索引(主键或unique)</li><li>只能存在一个字段为自动增长。</li><li>默认为1开始自动增长。</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table test_auto_increment(
	columnName columnType primary key auto_increment,
	......
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table stu(  
   id int PRIMARY KEY auto_increment,  
   name varchar(20),  
   age int,  
   class varchar(20)  
 ) auto_increment=1000 ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上表中，id是主键，是自增的。主键值从1000开始自增，通过auto_increment来指定，假如没有指定，从1开始自增</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 我们可以使用一条命令去看  自动增长目前增长到哪
show create table table_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>面试题： auto_increment是否一定连续？不断的插入，不删除。</p><p>不一定。如果上面有唯一索引，unique 。如果unique重复，这时候，id会跳过。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table test_auto_increment2(
	id int primary key auto_increment,
    name varchar(255) unque
);

insert into test_auto_increment2(name) values (&quot;zhangsan&quot;);
insert into test_auto_increment2(name) values (&quot;lisi&quot;);

insert into test_auto_increment2(name) values (&quot;lisi&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="域完整性" tabindex="-1"><a class="header-anchor" href="#域完整性" aria-hidden="true">#</a> 域完整性</h2><p>域完整性是针对某一具体关系数据库的约束条件，<span style="color:red;background:yellow;"><strong>它保证表中某些列不能输入无效的值。</strong></span></p><p>比如这个人的姓名，不允许输入null这种值。</p><p>比如有一张学生表。 id name id_card。不希望这个id_card有任何的null输入值。</p><p><strong>null约束</strong></p>`,15),hs=n("li",null,"null不是数据类型，是列的一个属性。一个具体的值",-1),gs=n("li",null,"表示当前列是否可以为null，表示什么都没有",-1),_s=n("li",null,"null, 允许为空。默认",-1),ys=n("b",null,"null表示没有数据，但是注意null不是空字符串。",-1),fs=l(`<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table test_null(
	columnName columnType not null,
	columnName2 columnType2 null,
	......
)

-- 这代表null
insert into test_null(column1) values (null);

-- 这个不是null。这是一个普通字符串
insert into test_null(column1) values (&quot;null&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>唯一值约束</strong></p><ul><li><p>unique</p><p>表示值是唯一的，不重复的</p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> teacher<span class="token punctuation">(</span>
	id <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">unique</span><span class="token punctuation">,</span>
	age <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>unique：</p><ol><li>插入的值不能重复</li><li>可以插入null</li><li>null可以重复</li></ol></blockquote><p>unique和primary key的区别：</p><ol><li>主键值不能为空（null），而unique可以为空(null)</li><li>相同点： 都不能插入重复的数据。</li></ol><h2 id="参照完整性" tabindex="-1"><a class="header-anchor" href="#参照完整性" aria-hidden="true">#</a> 参照完整性</h2><p>外键是关系数据库中一个非常重要的概念，用于建立表与表之间的关系。一个表中的外键指向另一个表中的某个字段，这个字段通常是另一个表中的主键。外键的作用是保障数据的完整性和一致性，它可以确保两个表之间的关系正确地维护，防止数据出现不一致或者不完整的情况。</p><p>外键。关系型数据库，不仅可以存储数据，还可以存储数据和数据之间的关系，具体的体现就是外键。</p><figure><img src="`+x+`" alt="image-20220511112342177" tabindex="0" loading="lazy"><figcaption>image-20220511112342177</figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> province<span class="token punctuation">(</span>
	id <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> city<span class="token punctuation">(</span>
	id <span class="token keyword">int</span> <span class="token punctuation">,</span>
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	province_id <span class="token keyword">int</span><span class="token punctuation">,</span>
	<span class="token comment">-- 声明外键</span>
    <span class="token comment">-- CONSTRAINT 外键名称 foreign key(列) references 表名(列名)</span>
    <span class="token comment">-- 在 province_id上建立一个外键，指向   province表的id字段</span>
	<span class="token keyword">CONSTRAINT</span> fk_pid <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>province_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> province<span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 外键的另外一种写法</span>
<span class="token comment">-- foreign key(列) references 表名(列名)</span>
<span class="token comment">-- foreign key(s_id) references school(id)</span>
 
<span class="token keyword">insert</span> <span class="token keyword">into</span> province <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">,</span> <span class="token string">&quot;河南省&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> province <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">43</span><span class="token punctuation">,</span> <span class="token string">&quot;湖南省&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> province <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">&quot;湖北省&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> city<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> province_id<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;武汉&quot;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> city<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> province_id<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token string">&quot;随州&quot;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> city<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> province_id<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;长沙&quot;</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> city<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> province_id<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&quot;岳阳&quot;</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 城市表插入</span>

<span class="token comment">-- 插入城市表的时候会去寻找有没有23对应的省份，如果有，插入</span>
<span class="token comment">-- 如果没有，那么会报错</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> city <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">&#39;哈尔滨&#39;</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 不能删除还有子行的数据</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> province <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">32</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外键的优缺点：</p><ul><li><p>优点：能够限制数据的增加、删除或者是修改操作，来保证数据的正确性。</p></li><li><p>缺点：</p><ol><li>在插入（修改）子行（城市表）的数据的时候，需要去父表（省份表）中找对应的数据</li><li>在删除（修改）父表（省份表）的数据的时候，需要去检查城市表中是否有对应的数据</li></ol><p>总结：有了外键之后，影响了增加、删除、修改的性能</p></li></ul><blockquote><p>在公司中，大家觉得应不应该使用外键呢？看具体的情况</p><ol><li>假如公司比较小，表中的数据量不大（外键对效率的影响比较小，甚至可以忽略），可以考虑使用外键</li><li>假如是大公司，或者是数据库表中的数据很多，（外键对于效率的影响就会很大），不应该使用外键</li></ol></blockquote><p>不建议大家用。如果就是想约束这种关系。不使用外键，怎么保证这种关系。一般使用代码保证。</p><p>其他约束（属性）</p><p><strong>default 默认值属性</strong> 当前字段的默认值。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table test_default(
	columnName timestamp ,
	......
);

create table test_default(
	id int primary key,
    name varchar(200),
    -- 如果你插入数据的时候，没有指定，这时候我就用默认值
    country varchar(200) default &quot;中国&quot;
);


CREATE TABLE \`user_info\`  (
  id int, 
  name varchar(200)
  create_time timestamp DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;,
  update_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT &#39;更新时间&#39;
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>create table tab ( create_time timestamp default current_timestamp ); -- 表示将当前时间的时间戳设为默认值。 current_date, current_time</p><p>ON UPDATE CURRENT_TIMESTAMP(0) COMMENT &#39;更新时间&#39;</p></blockquote><p>表中，一般会有三个字段是固定的（也就是创表必须得有）。id create_time update_time 见阿里编程规范 9条。</p><p><strong>comment 注释</strong></p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 作用是什么？
-- 为了让代码更好理解。
-- SQL里面的注释，是为了让SQL的字段更好理解。如果你进入了一个公司，不懂这个表里面的字段的含义。
-- 可以运行一下这个命令，看一下有没有备注帮你更好的理解这个表。    show create table test_comment;

create table test_comment(
  id int primary key auto_increment,
  name varchar(255) comment &quot;名字&quot;,
  status int comment &quot;0表示未付款，1表示已付款，2&quot;
);

-- 相当于是字段的备注信息
-- 可以使用 show create table test_comment;来查看备注
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="多表设计" tabindex="-1"><a class="header-anchor" href="#多表设计" aria-hidden="true">#</a> 多表设计</h1><p>在关系型数据库中，多表设计是指将数据分散到多个表中，每个表存储不同的数据。这种设计方式可以提高数据存储的效率和灵活性，同时也可以更好地保障数据的完整性和一致性。</p><p>有关系的一些表才需要这种多表设计。</p><p>学生表和订单表。 其实没有关系，所以它们不需要多表设计。</p><p>用户表和用户详情表。 这个有关系，需要多表设计。</p><h2 id="一对一" tabindex="-1"><a class="header-anchor" href="#一对一" aria-hidden="true">#</a> 一对一</h2><p>在关系型数据库中，多表设计中的一对一关系指的是两个表之间的关系，其中一个表的记录只能对应另一个表中的一条记录，反之亦然。<span style="color:yellow;background:red;"><strong>这种关系，在任意一方添加关系即可。</strong></span></p><ul><li><p>人和身份证号</p></li><li><p>学号和学生</p></li><li><p>用户和用户详情</p></li></ul><figure><img src="`+M+'" alt="image-20220512093032240" tabindex="0" loading="lazy"><figcaption>image-20220512093032240</figcaption></figure><blockquote><p>所有的一一对应的表，在逻辑上，都可以合并为一个表。</p></blockquote>',33),Ss=l('<p>主要的原因是效率。如果一个表的列太多，比如有300列。最终数据量太大的时候，效率会很差。但是如果将其拆分成两个表，最终频繁查询的这个表，将其列弄得少一点，会提升查询效率。</p><p>比如，淘宝。用户表，每天都要大量使用。 比如，单表300列，有3亿人都在用。</p><p>可以把这个表拆成一个小表+另一个大表。</p><p>10列。 290列。</p><h2 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多" aria-hidden="true">#</a> 一对多</h2><p>在关系型数据库中，多表设计中的一对多关系指的是两个表之间的关系，其中一个表的记录可以对应另一个表中的多条记录，而另一个表中的每条记录只能对应一个表中的记录。<span style="color:yellow;background:red;"><strong>这种关系，会在多的一方添加字段来表示关系。</strong></span></p><p>一对多是指 存在表A和表B，表A中的一条数据，对应表B中的多条数据；而表B中的一条数据，对应表A中的一条数据。</p><ul><li>班级和学生</li><li>省份和城市</li></ul><figure><img src="'+E+'" alt="image-20220512094324425" tabindex="0" loading="lazy"><figcaption>image-20220512094324425</figcaption></figure><h2 id="多对多" tabindex="-1"><a class="header-anchor" href="#多对多" aria-hidden="true">#</a> 多对多</h2><p>在关系型数据库中，多表设计中的多对多关系指的是两个表之间的关系，其中一个表的记录可以对应另一个表中的多条记录，而另一个表中的每条记录也可以对应另一个表中的多条记录。<span style="color:yellow;background:red;"><strong>这种关系通常需要通过中间表来实现。</strong></span></p><p>多对多其实是指存在表A和表B，表A中的一条数据，对应表B中的多条数据；而表B中的一条数据，对应表A中的多条数据。</p><p><strong>互为一对多</strong></p><ul><li>学生和课程</li><li>订单和商品</li></ul><figure><img src="'+N+'" alt="image-20220512095229401" tabindex="0" loading="lazy"><figcaption>image-20220512095229401</figcaption></figure><h2 id="数据库设计三大范式" tabindex="-1"><a class="header-anchor" href="#数据库设计三大范式" aria-hidden="true">#</a> 数据库设计三大范式</h2><p>数据库表设计的时候，应该遵循的规范。只有遵循了这些范式（规范），设计出来的表才是好的。前人总结出来的一些原则，被称之为范式。</p><h3 id="第一范式" tabindex="-1"><a class="header-anchor" href="#第一范式" aria-hidden="true">#</a> 第一范式</h3><p>每一列应该保持<span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>原子性</strong></span>。在设计表格的时候，要遵守。</p><p>一定要留有一定空间，灵活空间。</p><blockquote><p>原子性：表示表中的数据都是一个不可拆分的最小单元。</p></blockquote><figure><img src="'+T+`" alt="image-20220512101248071" tabindex="0" loading="lazy"><figcaption>image-20220512101248071</figcaption></figure><blockquote><p>第一范式：是跟着业务走的。但是业务是变动的，所以我们在设计表的时候，应该考虑之后业务的变化，来尽量的让每一列保持原子性。</p></blockquote><p>姓名这东西，是否需要分。</p><h3 id="第二范式" tabindex="-1"><a class="header-anchor" href="#第二范式" aria-hidden="true">#</a> 第二范式</h3><p>记录的<span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>唯一性</strong></span>。</p><p>唯一性是指每一条记录都有唯一的标识。例如<span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>主键</strong></span>。表中必须得有一个 主键。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table test1(
	id int primary key auto_increment
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三范式" tabindex="-1"><a class="header-anchor" href="#第三范式" aria-hidden="true">#</a> 第三范式</h3><p>数据不要冗余。</p><figure><img src="`+R+`" alt="image-20220512104553268" tabindex="0" loading="lazy"><figcaption>image-20220512104553268</figcaption></figure><p>在上表中，班主任名字重复存储了，冗余了</p><ul><li><p>缺点：</p><ol><li>重复存储了，需要占用更多的磁盘空间</li><li>如果要去修改某个老师的名字，那么需要在多个地方进行修改，增加了数据的维护成本</li></ol></li><li><p>优点：</p><ol><li>根据学生去查班主任的名字变得更简单了，查询效率变高了</li></ol></li></ul><blockquote><p>总结：冗余数据会使数据的维护成本增加，但是可以在某些场景中，方便数据的查询</p></blockquote><blockquote><p>那么在我们以后的工作中，要不要冗余数据呢？</p><p>要看情况。假如数据的查询需求远大于增删改的需求，那么可以考虑冗余数据；否则，不应该冗余数据，</p><p>这种冗余数据的做法叫“反范式化设计”。</p></blockquote><p>如果你想查的更快，而且你不是特别在意这些磁盘空间，增删改的次数比较少，可以考虑冗余数据。</p><p>冗余了数据之后，会让你查询变得更简单。</p><h2 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h2><p>多表查询是指在关系型数据库中，从多个表中查询数据的操作。多表查询可以帮助我们获得更加丰富的数据，以满足各种不同的需求。</p><h3 id="连接查询" tabindex="-1"><a class="header-anchor" href="#连接查询" aria-hidden="true">#</a> 连接查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 如果这个表存在 就删除</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token keyword">user</span><span class="token punctuation">(</span>
	id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> user_detail<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> user_detail<span class="token punctuation">(</span>
	id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
	user_id <span class="token keyword">int</span><span class="token punctuation">,</span>
	address <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	pic <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;猪八戒&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zhubajie&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;孙悟空&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sunwukong&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;白骨精&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baigujing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;唐僧&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tangseng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;沙僧&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;shaseng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> user_detail <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;高老庄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;猪八戒.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> user_detail <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;花果山&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;孙悟空.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> user_detail <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;白虎岭&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;白骨精.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> user_detail <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;东土大唐&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;唐僧.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_detail<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+A+`" alt="image-20230410161359471" tabindex="0" loading="lazy"><figcaption>image-20230410161359471</figcaption></figure><h4 id="交叉连接" tabindex="-1"><a class="header-anchor" href="#交叉连接" aria-hidden="true">#</a> 交叉连接</h4><p>交叉连接其实就是求多个表的笛卡尔积。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 交叉连接</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">cross</span> <span class="token keyword">join</span> user_detail<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>交叉连接的结果没有实际的意义。</p><p>但是内连接和外连接都是基于交叉连接的结果去筛选的。</p></blockquote><p>比如表A有3条数据，表B中有4条数据，最终会有3*4=12条数据。这个被称为笛卡尔积</p><h4 id="内连接" tabindex="-1"><a class="header-anchor" href="#内连接" aria-hidden="true">#</a> 内连接</h4>`,48),ws=n("strong",null,"内连接只返回两个表中具有相同值的行，也就是说，只有在连接列中存在匹配值的行才会被返回。",-1),Ls=l(`<p>内连接的语法如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT columns
FROM table1
INNER JOIN table2
ON table1.column = table2.column;

-- 其中，columns是要返回的列，table1和table2是要连接的表，column是要连接的列。ON子句指定了连接条件，它指定了table1和table2之间的匹配条件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>inner join</p><ul><li><p>显式</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 显式内连接</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">inner</span> <span class="token keyword">join</span> user_detail 
<span class="token keyword">on</span> <span class="token keyword">user</span><span class="token punctuation">.</span>id <span class="token operator">=</span> user_detail<span class="token punctuation">.</span>user_id<span class="token punctuation">;</span>

<span class="token comment">-- 这个SQL语句将user和user_detail表连接起来，只返回两个表都有相同的id的行。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>隐式</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 隐式内连接。不建议这样写。</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">,</span>user_detail 
<span class="token keyword">where</span> <span class="token keyword">user</span><span class="token punctuation">.</span>id <span class="token operator">=</span>user_detail<span class="token punctuation">.</span>user_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="外连接" tabindex="-1"><a class="header-anchor" href="#外连接" aria-hidden="true">#</a> 外连接</h4>`,5),qs=n("strong",null,"与内连接不同的是，外连接会返回左表或右表中即使没有匹配的行也会被返回，这些没有匹配的行将被填充为NULL值。",-1),Qs=n("p",null,"外连接有左外连接（left outer join）、右外连接（right outer join）和全外连接（full outer join）三种类型。",-1),xs=n("p",null,"说明：但是MySQL不支持全外连接。",-1),Ms=n("p",null,"左右表中的数据都保留。",-1),Es=n("p",null,"outer可以省略掉。",-1),Ns=l(`<p>左外连接返回左表中的所有行以及右表中与左表匹配的行，右表中没有匹配的行将被填充为NULL值。左外连接的语法如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT columns
FROM table1
LEFT OUTER JOIN table2
ON table1.column = table2.column;

-- 左外连接，保留匹配的数据。还会保留左表的所有数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 左外连接
select * from user left outer join user_detail on 
user.id = user_detail.user_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Ts=l(`<p>右外连接返回右表中的所有行以及左表中与右表匹配的行，左表中没有匹配的行将被填充为NULL值。右外连接的语法如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT columns
FROM table1
RIGHT JOIN table2
ON table1.column = table2.column;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 右外连接
select * from user right outer join user_detail on 
user.id = user_detail.user_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>连接查询最重要的，是找到连接的条件。</strong></span></p></blockquote><h2 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h2><p>在关系型数据库中，子查询是指在一个 SQL 语句中嵌套另一个 SQL 语句来实现查询的方式。子查询通常用于在查询结果中过滤、排序、分组或者统计数据，或者作为其他查询语句的一部分。</p><p>子查询可以嵌套多层，每一层都返回一个结果集供上一层使用。</p><p>子查询可以用于实现各种复杂的查询需求，例如，使用子查询查询最大值或最小值，使用子查询实现分组统计等等。但是，由于子查询会增加查询的复杂度和执行时间，因此在使用子查询时需要注意查询性能的影响。</p><p>一个SQL语句的结果可以作为另外一个SQL语句的条件。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 现在想找有哪些同学学了Java。</span>


<span class="token comment">-- 首先先拿到Java的id</span>
<span class="token keyword">select</span> id <span class="token keyword">from</span> tec_cource <span class="token keyword">where</span> name<span class="token operator">=</span><span class="token string">&#39;Java&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- 然后再把这个id=1 放给第二个</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tec_sele_cource <span class="token keyword">where</span> cource_id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tec_stu <span class="token keyword">where</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 看学生信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tec_stu <span class="token keyword">where</span> id <span class="token operator">in</span> <span class="token punctuation">(</span>
    <span class="token comment">-- 看哪些学生选了 Java</span>
	<span class="token keyword">select</span> student_id <span class="token keyword">from</span> tec_sele_cource <span class="token keyword">where</span> cource_id<span class="token operator">=</span><span class="token punctuation">(</span>
        <span class="token comment">-- 获取Java的id</span>
		<span class="token keyword">select</span> id <span class="token keyword">from</span> tec_cource <span class="token keyword">where</span> name<span class="token operator">=</span><span class="token string">&#39;Java&#39;</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不建议大家用。效率差。因为每一层查询会生成临时表</p><h2 id="联合查询-了解" tabindex="-1"><a class="header-anchor" href="#联合查询-了解" aria-hidden="true">#</a> 联合查询（了解）</h2><p>SQL支持把多个SQL语句的结果拼装起来。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 写了两个SQL。把两个SQL的结果拼接起来</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">where</span> class <span class="token operator">=</span> <span class="token string">&#39;一班&#39;</span>
<span class="token keyword">union</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">where</span> class <span class="token operator">=</span> <span class="token string">&#39;二班&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- union要求返回的列数目要一致 </span>

<span class="token comment">-- 我们可以使用union关键字对SQL1和SQL2的结果去做并集，一般来说联合查询作用不大</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">where</span> class <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;一班&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;二班&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 当上面这个SQL语句查询速度很慢的时候，可以考虑union联合查询来提高效率。</span>

<span class="token comment">-- union all  会把sql的结果，直接拼接起来。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库的备份与恢复" tabindex="-1"><a class="header-anchor" href="#数据库的备份与恢复" aria-hidden="true">#</a> 数据库的备份与恢复</h2><p>DBA</p><p>数据库是存储数据的地方。我们不希望数据库丢数据，如果丢了数据，对于企业的损失非常大。</p><p>所以我们需要了解数据库的备份和恢复手段。</p><p>备份产生的SQL，没有建库语句，需要你自己手动建一个库，然后再执行SQL。</p><h3 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 备份</span>
<span class="token comment"># 1. 打开命令行</span>
mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> dbName<span class="token operator">&gt;</span>/path/dbName.sql

mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> test_52th<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>test52th.sql

<span class="token comment"># 在生成的sql文件中，主要做了三件事。 删表，建表，插数据</span>


<span class="token comment"># 恢复</span>
<span class="token comment"># 1. 打开命令行</span>
<span class="token comment"># 2. 连接MySQL服务器</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>

<span class="token comment"># 3. 选中数据库（假如没有合适的数据库，可以新建一个）</span>
use dbName<span class="token punctuation">;</span>
<span class="token comment"># 4. 执行文件中的SQL语句，恢复数据</span>
<span class="token builtin class-name">source</span> /path/dbName.sql

<span class="token builtin class-name">source</span> c:/Users/zhoubing/test52th.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navicat" tabindex="-1"><a class="header-anchor" href="#navicat" aria-hidden="true">#</a> Navicat</h3><figure><img src="`+I+`" alt="image-20220512150057177" tabindex="0" loading="lazy"><figcaption>image-20220512150057177</figcaption></figure><p>备份和恢复操作可能会导致数据丢失，因此在执行这些操作之前，我们需要进行数据完整性和正确性的检查，以确保数据的准确性和完整性。</p><p>首先，我们可以使用以下SQL查询语句来检查数据表中的记录总数：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将返回表中记录的总数。接下来，如果我们想比较某一行数据在备份前后是否发生变化，我们可以考虑以下方法。</p><p>肉眼观察是一种不合适且不可靠的方式，因此我们可以选择对数据进行哈希校验。例如，假设之前某一行的数据是 &quot;zhangsan&quot;，而现在的数据是 &quot;lisi&quot;，我们可以执行以下步骤：</p><ol><li>从数据库中选择该行的数据。</li><li>对这条数据进行MD5哈希算法，生成一个MD5值。</li><li>将备份之前的MD5值与备份之后的MD5值进行比较。</li></ol><p>这样，我们可以通过比较哈希值来确定数据是否发生了变化。如果MD5值相同，则表示数据没有发生变化；如果MD5值不同，则表示数据已被更改。</p><p>整体的MD5可以通过对整个数据表的所有记录进行MD5哈希计算来获得，从而验证整个数据表的一致性。</p><p>总的步骤可以概括为：</p><ol><li>选择需要比较的行数据。</li><li>对该行数据进行MD5哈希计算，得到哈希值。</li><li>比较备份前后的哈希值，以确定数据是否发生变化。</li></ol><p>通过这种方法，我们可以有效地检测数据变化，确保备份和恢复操作的安全性和准确性。</p><p>在企业中，一般不需要我们去备份和恢复数据库。</p><p>程序是可靠的。 写一段代码，让代码自动在周五晚8点去备份，存到一个地方。</p>`,36);function Rs(As,Is){const a=d("font"),t=d("ExternalLinkIcon");return r(),o("div",null,[C,e(a,{color:"red"},{default:i(()=>[D]),_:1}),B,U,z,Y,V,e(a,{color:"red"},{default:i(()=>[s("**存储数据**")]),_:1}),F,P,G,n("p",null,[s("那我们为什么需要学习数据库呢？"),e(a,{color:"red"},{default:i(()=>[H]),_:1}),s("，而且数据量太大的情况下，"),e(a,{color:"red"},{default:i(()=>[J]),_:1}),s(" 和excel类似，数据库也是采用表格来管理数据的。")]),j,e(a,{color:"red"},{default:i(()=>[s("**什么是关系型数据库呢？**")]),_:1}),W,X,K,n("ul",null,[n("li",null,[Z,n("blockquote",null,[$,e(a,{color:"red"},{default:i(()=>[nn]),_:1}),s("：大商业公司，政府使用较多，但近几年由于一些原因，银行，政府机构等正在替换Oracle。")])]),n("li",null,[sn,n("blockquote",null,[en,e(a,{color:"red"},{default:i(()=>[an]),_:1}),s("：中小企业，追求快速发展。性能非常优秀。")])]),ln]),n("blockquote",null,[dn,e(a,{color:"red"},{default:i(()=>[tn]),_:1}),s("：中小企业，追求快速发展。MySQL作者的粉丝。MaxDB")]),cn,n("blockquote",null,[rn,e(a,{color:"red"},{default:i(()=>[on]),_:1}),s("：中大型企业。国内用的不多。")]),un,n("blockquote",null,[pn,e(a,{color:"red"},{default:i(()=>[vn]),_:1}),s("：大公司，政府部门")]),mn,n("blockquote",null,[bn,e(a,{color:"red"},{default:i(()=>[kn]),_:1}),s("：有自研能力的公司使用较多。例如国内的华为。")]),hn,gn,n("p",null,[s("Not only SQL 不仅仅只有SQL。"),e(a,{color:"red"},{default:i(()=>[_n]),_:1}),s("，主要是用来做一些关系型数据库不擅长的事情。关系型数据库的数据，一般是存储在磁盘上，所以速度比较慢。非关系型数据库一般是存在内存中的，所以性能比较好。")]),yn,n("blockquote",null,[n("p",null,[s("SQL语言不是某个特定的数据库提供的语言, 它是一种数据库标准语言.(最初由美国国家标准局 ANSI于1986年完成第一版SQL标准的定义,即SQL-86)."),e(a,{color:"red"},{default:i(()=>[fn]),_:1}),s(" SQL简单易学, 是由多个描述性很强的单词构成, 并且这些单词数量不多. SQL尽管看上去很简单, 但是非常强有力; 灵活的使用SQL, 可以进行比较复杂的和高级的数据库操作.")])]),Sn,n("p",null,[s("latin1: "),e(a,{color:"red"},{default:i(()=>[wn]),_:1})]),Ln,n("blockquote",null,[e(a,{color:"red"},{default:i(()=>[qn]),_:1}),s(",只提供修改字符集和校对规则。")]),Qn,n("blockquote",null,[e(a,{color:"red"},{default:i(()=>[xn]),_:1}),s(),Mn]),En,n("ul",null,[n("li",null,[s("数字(整数型) "),n("ul",null,[Nn,n("li",null,[e(a,{color:"red"},{default:i(()=>[Tn]),_:1}),s(": 4字节。")]),Rn])]),n("li",null,[s("数字(小数) "),n("ul",null,[An,n("li",null,[e(a,{color:"red"},{default:i(()=>[In]),_:1}),s(": 8字节。浮点型")]),On])])]),Cn,n("ul",null,[n("li",null,[Dn,n("ul",null,[Bn,Un,n("li",null,[e(a,{color:"red"},{default:i(()=>[zn]),_:1}),s(": 年月日(YYYY-MM-DD)。")]),n("li",null,[e(a,{color:"red"},{default:i(()=>[Yn]),_:1}),s(": 年月日时分秒。(YYYY-MM-DD HH:MM:SS)。")]),n("li",null,[e(a,{color:"red"},{default:i(()=>[Vn]),_:1}),s(": 年月日时分秒。(YYYY-MM-DD HH:MM:SS)。")])])]),n("li",null,[Fn,n("ul",null,[Pn,n("li",null,[e(a,{color:"red"},{default:i(()=>[Gn]),_:1}),s("：变长字符串，会用1-2字节来存储长度。也就是 实际长度+1(2)。所有的列。"),Hn]),Jn,jn]),Wn,Xn])]),Kn,n("blockquote",null,[Zn,e(a,{color:"red"},{default:i(()=>[$n]),_:1}),s("查询语句（select），更新语句（update），删除语句（delete）。"),ns]),ss,e(a,{color:"red"},{default:i(()=>[s("**having注意和where的区别**")]),_:1}),es,as,n("ul",null,[n("li",null,[is,s("的select列中，只能有两种，"),e(a,{color:"red"},{default:i(()=>[ls]),_:1}),s("，"),e(a,{color:"red"},{default:i(()=>[ds]),_:1})]),ts,cs]),rs,n("p",null,[n("a",os,[s("only_full_group_by"),e(t)])]),us,e(a,{color:"red"},{default:i(()=>[s("**练习：**")]),_:1}),ps,n("ul",null,[vs,n("li",null,[e(a,{color:"red"},{default:i(()=>[s("**主键具有唯一性**")]),_:1})]),n("li",null,[e(a,{color:"red"},{default:i(()=>[s("**主键字段的值不能为null**")]),_:1})]),ms,bs]),ks,n("ul",null,[hs,gs,_s,n("li",null,[s("not null, 不允许为空"),e(a,{color:"red"},{default:i(()=>[ys]),_:1})])]),fs,e(a,{color:"red"},{default:i(()=>[s("**思考一下，为什么本来可以用一张表，却要拆成两张表？**")]),_:1}),Ss,n("p",null,[s("内连接（inner join）是一种SQL中的表连接操作，用于将两个或多个表中的数据进行合并匹配。"),e(a,{color:"red"},{default:i(()=>[ws]),_:1})]),Ls,n("p",null,[s("外连接（outer join）是一种SQL中的表连接操作，用于将两个或多个表中的数据进行合并匹配，"),e(a,{color:"red"},{default:i(()=>[qs]),_:1})]),Qs,xs,Ms,Es,e(a,{color:"red"},{default:i(()=>[s("**左外连接**")]),_:1}),Ns,e(a,{color:"red"},{default:i(()=>[s("**右外连接**")]),_:1}),Ts])}const Ds=c(O,[["render",Rs],["__file","02_SQL.html.vue"]]);export{Ds as default};
