import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as u,a as n,b as s,d as a,w as t,f as p}from"./app-1Qf3snIj.js";const d="/assets/image-20220512151118861-Ce2GBuDS.png",r="/assets/image-20220512154214534-BVMFBX3U.png",k="/assets/image-20220512160152575-BTLOdl3U.png",m="/assets/image-20220512174407319-Bo60hydG.png",v="/assets/image-20220512174948330-Dt5vPApi.png",b="/assets/image-20220513112333234-LaWLf9k8.png",g="/assets/image-20220513175504026-CjKnewW6.png",h="/assets/image-20221226112408097-BrlvR72g.png",f={},S=p('<h1 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc" aria-hidden="true">#</a> JDBC</h1><p>学习目标：</p><ul><li>了解JDBC是什么，以及定义它有什么好处</li><li>掌握使用JDBC访问数据库</li><li>掌握使用JDBC进行增删改查</li><li>掌握数据库注入问题，以及怎么解决数据库注入问题。面试经常问到的问题</li><li>掌握事务的使用，以及为什么需要事务。</li><li><span style="color:red;background:yellow;"><strong>理解事务的四大特性，ACID。能用自己的话讲出来</strong></span></li><li>事务的隔离级别（面试）</li></ul><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><h2 id="数据库的访问过程" tabindex="-1"><a class="header-anchor" href="#数据库的访问过程" aria-hidden="true">#</a> 数据库的访问过程</h2><figure><img src="'+d+'" alt="image-20220512151118861" tabindex="0" loading="lazy"><figcaption>image-20220512151118861</figcaption></figure><h2 id="jdbc是什么" tabindex="-1"><a class="header-anchor" href="#jdbc是什么" aria-hidden="true">#</a> JDBC是什么</h2><p>JDBC（Java Database Connectivity）是Java程序与数据库进行交互的一种标准接口。它定义了一组Java API，使得Java程序可以通过这些API来连接和操作各种关系型数据库（如MySQL、Oracle、SQL Server等），执行SQL语句并处理查询结果。JDBC提供了一种跨平台、可移植的方式来访问数据库，使得Java程序可以与不同的数据库进行通信而无需改变代码。JDBC的主要优点包括：可移植性、可靠性、安全性和易于使用。</p><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>JDBC具体指的就是 Java的一套标准的连接数据库的接口。</strong></span></p><figure><img src="'+r+'" alt="image-20220512154214534" tabindex="0" loading="lazy"><figcaption>image-20220512154214534</figcaption></figure><p>那么标准的接口具体在哪儿呢？指的是哪些接口呢？（rt.jar内部的）</p><ul><li><code>java.sql</code></li><li><code>javax.sql</code></li></ul><h1 id="jdbc怎么用" tabindex="-1"><a class="header-anchor" href="#jdbc怎么用" aria-hidden="true">#</a> JDBC怎么用</h1><h2 id="第一个jdbc程序" tabindex="-1"><a class="header-anchor" href="#第一个jdbc程序" aria-hidden="true">#</a> 第一个JDBC程序</h2>',14),y=n("li",null,[n("p",null,"新建项目")],-1),w=n("p",null,"导包",-1),q=n("p",null,"导包是指导入其他的人或者是组织写的代码。",-1),x=n("p",null,"如何导包呢？",-1),_=n("p",null,"下载包",-1),L={href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java/5.1.47",target:"_blank",rel:"noopener noreferrer"},j=p('<li><p>把包复制到项目中，并且加载进来</p><p><code>.jar</code>： 这个格式是一种压缩格式，和 .zip，.rar是类似的，这种类型的文件，可以被Java识别并且运行。</p><p><code>.jar</code>文件中都是一些 <code>.class</code>文件，是可以直接运行的</p><p>接下来，需要把对应的jar包添加到library里面去。对着jar包右键</p><figure><img src="'+k+'" alt="image-20220512160152575" tabindex="0" loading="lazy"><figcaption>image-20220512160152575</figcaption></figure></li>',1),C=p(`<li><p>编写应用程序</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 1. 加载驱动  {@Link java.sql.Driver   impl : com.mysql.jdbc.Driver}
        DriverManager.registerDriver(new Driver());


//        String url = &quot;协议 + ip + 端口 + 路径 + 参数&quot;;
        String url = &quot;jdbc:mysql://localhost:3306/40th?useSSL=false&amp;characterEncoding=utf8&quot;;
        String username = &quot;root&quot;;
        String password = &quot;123456&quot;;

        // 2. 发送用户名和密码，建立连接
        // 返回的当前是一个Connection接口，但是实际上在运行的时候，返回是Connection接口的实现类的实例
        Connection connection = DriverManager.getConnection(url, username, password);

        // 3. 获取statement对象
        Statement statement = connection.createStatement();

        // 4. 发送SQL语句
        int affectedRows = statement.executeUpdate(&quot;insert into stu values (4,&#39;云飞兄&#39;,20,&#39;358班&#39;)&quot;);

        // 5. 解析结果集
        System.out.println(&quot;affectedRows:&quot; + affectedRows);

        // 6. 断开连接
        statement.close();
        connection.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),B=p(`<p>MySQL版本5.7。我们选驱动 可以选 5.1.47 48 49；都可以。 8的也可以。</p><p>MySQL8的版本。只能选8，不要选5的版本。</p><h2 id="使用jdbc进行增删改查" tabindex="-1"><a class="header-anchor" href="#使用jdbc进行增删改查" aria-hidden="true">#</a> 使用JDBC进行增删改查</h2><h3 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 3. 发送SQL语句
// 返回值是个int，代表影响的行数。 新增的行数
int affectedRows = statement.executeUpdate(&quot;insert into stu values (1, &#39;zhangsan&#39;, 22)&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h3><blockquote><p>增、删、改都是一样的，都是使用 <code>statement.executeUpdate(String sql)</code> 来执行SQL语句，返回的结果也是一样的，都是影响的行数。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 3. 发送SQL语句</span>
<span class="token comment">// 返回值是个int，代表影响的行数。 删除的行数</span>
<span class="token keyword">int</span> affectedRows <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">&quot;delete from stu where id = 3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="改" tabindex="-1"><a class="header-anchor" href="#改" aria-hidden="true">#</a> 改</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">int</span> affectedRows <span class="token operator">=</span> statement<span class="token punctuation">.</span>executeUpdate<span class="token punctuation">(</span><span class="token string">&quot;update stu set name = &#39;孔二愣子&#39;,class=&#39;五班&#39; where id = 4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 3. 发送SQL语句</span>
<span class="token comment">// resultSet指结果集对象，具体指代查询返回的临时表对象</span>
<span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token string">&quot;select * from stu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//  解析结果集</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">int</span> id <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> name <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token keyword">int</span> age <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> className <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;age:&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;className:&quot;</span> <span class="token operator">+</span> className<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><blockquote><p>查看类中所有方法的快捷键：ctrl + F12</p></blockquote><h3 id="drivermanager" tabindex="-1"><a class="header-anchor" href="#drivermanager" aria-hidden="true">#</a> DriverManager</h3><p>驱动管理器。可以帮助我们管理驱动，获取连接</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 注册驱动</span>
<span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">registerDriver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Driver</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取连接</span>
<span class="token comment">// 在代码实际运行的时候，一定不可能光是一个接口，一定是一个实现类。（是MySQL提供的一个实现类。）</span>
<span class="token comment">// 获取到的连接对象实际上是 JDBC4Connection 对象</span>
<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span><span class="token class-name">String</span> username<span class="token punctuation">,</span><span class="token class-name">String</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h3><p>指代连接对象。在JDBC中是一个接口，在我们使用JDBC的时候，实际上实现类是 <code> com.mysql.jdbc.JDBC4Connection</code> 对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 获取statement</span>
<span class="token comment">// 通过statement对象来执行SQL</span>
<span class="token class-name">Statement</span> stat <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 关闭连接</span>
connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 事务相关的API</span>
connection<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
connection<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="statement" tabindex="-1"><a class="header-anchor" href="#statement" aria-hidden="true">#</a> Statement</h3><blockquote><p>The object used for executing a static SQL statement and returning the results it produces.</p></blockquote><p>statement对象其实就是用来去执行SQL语句，并且返回这个SQL语句产生的结果集。实际上我们在使用的时候，其实是用的Statement接口的实现类 <code>com.mysql.jdbc.StatementImpl</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 执行增删改的方法。新增数据的SQL，删除数据的SQL，修改数据的SQL</span>
<span class="token keyword">int</span> affectedRows <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token class-name">String</span> updateSql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 执行查询的方法</span>
<span class="token class-name">ResultSet</span> rs  <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> querySql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 拿到一个ResultSet，怎么从里面获取数据。 当一个迭代器的方法使用。</span>

<span class="token comment">// 关闭</span>
statement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 执行sql语句</span>
<span class="token class-name">Boolean</span> ret <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 如果 ret == true，那么说明执行的是查询语句  statement.getResultSet();</span>
<span class="token comment">// 如果 ret == false，那么说明执行的是增删改语句 statement.getUpdateCount();</span>
<span class="token comment">// 获取影响的行数: statement.getUpdateCount();</span>
<span class="token comment">// 获取返回的结果集：statement.getResultSet();</span>


<span class="token comment">// 练习一下怎么去组织语言（prompt）</span>
<span class="token comment">// 我是Java学习者，我在学习JDBC的时候，遇到了一个Statement接口，里面有一个execute()方法，我不知道如何去使用</span>
你的任务如下： <span class="token number">1.</span>简单告诉一下我它的大致作用   <span class="token number">2.</span>给我写个demo，示例，让我快速知道如何去使用它。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resultset" tabindex="-1"><a class="header-anchor" href="#resultset" aria-hidden="true">#</a> ResultSet</h3><p>这个对象表示查询的结果集。</p><figure><img src="`+m+`" alt="image-20220512174407319" tabindex="0" loading="lazy"><figcaption>image-20220512174407319</figcaption></figure><blockquote><p>在查询的结果集中，有一个游标，游标可以移动，移动的时候会扫描一些行，那么对于这些扫描到的行，我们就可以获取对应的列的值。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 移动游标方法</span>

<span class="token comment">// 向下移动</span>
<span class="token class-name">Boolean</span> ret <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 向上移动</span>
<span class="token class-name">Boolean</span> ret <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">previous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定位到第一行之前</span>
resultSet<span class="token punctuation">.</span><span class="token function">beforeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义到最后一行之后</span>
resultSet<span class="token punctuation">.</span><span class="token function">afterLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 获取值的方法</span>
resultSet<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token class-name">String</span> columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>
resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token class-name">String</span> columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>
resultSet<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token class-name">String</span> columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="image-20220512174948330" tabindex="0" loading="lazy"><figcaption>image-20220512174948330</figcaption></figure><h2 id="jdbc的优化" tabindex="-1"><a class="header-anchor" href="#jdbc的优化" aria-hidden="true">#</a> JDBC的优化</h2><ul><li>提取工具类</li><li>连接配置放入到配置文件中</li><li>注册驱动利用反射，解耦</li><li>关闭资源（提取公共方法）</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCUtils</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span> driver<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>

        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        url <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        username <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        password <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        driver <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;driverClassName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// 获取连接</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">;</span>
            connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ex<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> connection<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



    <span class="token comment">// 关闭资源</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span>  <span class="token function">close</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> connection<span class="token punctuation">,</span> <span class="token class-name">Statement</span> statement<span class="token punctuation">,</span> <span class="token class-name">ResultSet</span> resultSet<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>resultSet <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> resultSet<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>statement<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> statement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ex<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库注入问题" tabindex="-1"><a class="header-anchor" href="#数据库注入问题" aria-hidden="true">#</a> 数据库注入问题</h2><blockquote><p>数据库注入是一种常见的网络安全漏洞，攻击者利用这种漏洞向网站或应用程序的数据库中插入恶意代码，从而获取敏感信息、执行非法操作等。例如：</p><p>假设有一个登录页面，用户需要输入用户名和密码才能登录。该页面的后端代码使用SQL查询语句来验证用户的身份，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM user WHERE username = &#39;input_username&#39; AND password = &#39;input_password&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，&#39;input_username&#39;和&#39;input_password&#39;是用户在登录页面上输入的值。如果用户输入的值与数据库中的值匹配，则允许用户登录，否则拒绝登录。</p><p>然而，攻击者可以在输入框中输入一些恶意代码，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input_username: root
input_password: xxx&#39; or &#39; 1=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个输入会更改SQL查询语句，变成：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>
-- 下面这条SQL的含义，是这样的   1=1是恒等的，所以where条件相当于会没有任何条件
-- SELECT * FROM users WHERE (username = &#39;admin&#39; AND password = &#39;xxx&#39;) or &#39;1=1&#39;;
SELECT * FROM users WHERE username = &#39;admin&#39; AND password = &#39;xxx&#39; or &#39; 1=1&#39;;

SELECT * FROM users WHERE username = &#39;admin&#39; AND password = &#39;xxx&#39; ;drop database test1&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个SQL语句的含义是“从users表中选择任何一个行，其中用户名为空或1等于1，并且密码为空”。由于1等于1始终为真，因此这个SQL语句将返回users表中的所有行，从而绕过了身份验证，攻击者可以以任何用户的身份登录系统。这就是一个典型的SQL注入攻击。</p><p>为了避免SQL注入攻击，必须对用户输入的值进行过滤和转义，或使用预处理语句等安全措施来防范这种攻击。</p><p>主要的原因是字符串拼接，把用户的一些输入当做了关键字。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

<span class="token comment">//        Boolean ret = login(&quot;天明&quot;, &quot;upan&quot;);</span>

        <span class="token comment">// select * from user where name = &#39;xxx&#39; and password = &#39;xxx&#39;;</span>
        <span class="token comment">// select * from user where name = &#39;xxx&#39; and password = &#39;xxx&#39; or &#39;1=1&#39;;</span>

        <span class="token class-name">Boolean</span> ret <span class="token operator">=</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xxx&#39; or &#39;1=1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">if</span> <span class="token punctuation">(</span>ret<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;登录成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;登录失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 登录方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

        <span class="token comment">// 传入用户名和密码。根据用户名和密码查询用户，假如查询到了，说明登录成功；如果没查到，登录失败</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from user where name = &#39;&quot;</span><span class="token operator">+</span>username<span class="token operator">+</span><span class="token string">&quot;&#39; and password = &#39;&quot;</span><span class="token operator">+</span>password<span class="token operator">+</span><span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>  <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>数据库注入问题产生的原因：因为SQL语句是通过字符串拼接的，这个时候用户可能输入一些字符，这些字符中包含有SQL语句中的关键字，那么通过字符串拼接SQL语句之后，可能会改变SQL语句的格式，进而引发安全性的问题。</p><p>根本的原因：MySQL把用户输入的参数当做关键字来解析了</p></blockquote><blockquote><p>如何解决数据库注入问题呢？</p><ul><li>PrepareStatement（预编译的Statement）</li></ul></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 登录方法2</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">login2</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

        <span class="token comment">// 1. 获取连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 获取PreparedStatement</span>
        <span class="token comment">// 这一步，在创建PreparedStatement的时候，PreparedStatement会把当前这个没有参数的SQL语句，发送给MySQL服务器，执行预编译</span>
        <span class="token comment">// 预编译：其实就是去解析这个SQL语句中的关键字，变成MySQL可以执行的命令</span>
        <span class="token comment">// 在预编译之后，后续输入的字符串，就只会被MySQL当成纯文本来解析</span>
        <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user where name = ? and password = ?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 3. 设置参数</span>
        <span class="token comment">// 序号从 1 开始</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 4. 传递参数，执行SQL语句</span>
        <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ol><li><p>在安全性方法，PreparedStatement比Statement要好很多，没有数据库的注入问题</p></li><li><p>在效率方面，执行单次SQL语句的时候，Statement的效率比PreparedStatement要好一些</p><p>因为Statement在执行一条SQL语句的时候，只会与数据库通信一次，而PreparedStatement要通信两次</p><p>prepareStatement使用的比statement多很多。statement几乎不用。</p></li></ol></blockquote><figure><img src="`+b+'" alt="image-20220513112333234" tabindex="0" loading="lazy"><figcaption>image-20220513112333234</figcaption></figure><figure><img src="'+g+`" alt="image-20220513175504026" tabindex="0" loading="lazy"><figcaption>image-20220513175504026</figcaption></figure><h1 id="批处理" tabindex="-1"><a class="header-anchor" href="#批处理" aria-hidden="true">#</a> 批处理</h1><p>比如，你想往数据库里面插入大量数据。 100w</p><p>其实就是批量的处理SQL语句，典型的业务场景就是一次插入大量的数据。在今后，如果需要大家使用JDBC批量插入数据，可以使用这些方法。</p><h2 id="for循环逐条插入" tabindex="-1"><a class="header-anchor" href="#for循环逐条插入" aria-hidden="true">#</a> for循环逐条插入</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// for循环来做</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">batchUseForEach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

    <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into user values (&quot;</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">&quot;,&#39;foreach&#39;,null,null)&quot;</span><span class="token punctuation">;</span>

        statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>向MySQL服务器发送了SQL语句 1w次，SQL语句被编译了1w次，SQL语句也被执行了1w次</p></blockquote><h2 id="statement批处理" tabindex="-1"><a class="header-anchor" href="#statement批处理" aria-hidden="true">#</a> statement批处理</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Statement 来处理</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">batchUseStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

    <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into user values (&quot;</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">&quot;,&#39;batchUseStatement&#39;,null,null)&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 相当于在内部有一个容器。 </span>
        statement<span class="token punctuation">.</span><span class="token function">addBatch</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 发送SQL语句，执行</span>
    statement<span class="token punctuation">.</span><span class="token function">executeBatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>向MySQL服务器发送了SQL语句 1次，这一次中包含1w条SQL语句信息，SQL语句被编译了1w次，SQL语句也被执行了1w次</p></blockquote><h2 id="preparedstatement批处理" tabindex="-1"><a class="header-anchor" href="#preparedstatement批处理" aria-hidden="true">#</a> PreparedStatement批处理</h2><blockquote><p>需要在数据库的url后面加上配置：rewriteBatchedStatements=true ，表示开启批处理</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// PreparedStatement来处理</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">batchUsePrepapreStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

    <span class="token comment">// 获取PreparedStatement</span>
    <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span><span class="token string">&quot;insert into user values (?,?,null,null)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">// 循环，设置参数</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">20000</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">30000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        preparedStatement<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;PrepapreStatement&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        preparedStatement<span class="token punctuation">.</span><span class="token function">addBatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// 把参数发送给MySQL服务器，执行SQL语句</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">executeBatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// insert into user values (),(),(),(),();</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>与MySQL通信了2次，SQL语句被编译了一次，SQL语句被执行了一次</p></blockquote><p>插入n条数据</p><p>for循环，通讯n次，编译n次，执行n次</p><p>statement，通讯1次，编译n次，执行n次</p><p>prepareStatement，通讯2次，编译1次，执行1次</p><p>假如需要批处理n条SQL语句，开启了rewriteBatchedStatements之后</p><table><thead><tr><th></th><th>通信次数</th><th>编译次数</th><th>执行次数</th><th>时间</th></tr></thead><tbody><tr><td>for循环</td><td>n</td><td>n</td><td>n</td><td>最长</td></tr><tr><td>Statement</td><td>1</td><td>n</td><td>n</td><td>次之</td></tr><tr><td>PreparedStatement</td><td>2</td><td>1</td><td>1</td><td>最短</td></tr></tbody></table><h1 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h1><h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h2><blockquote><p>数据库事务( transaction)是访问并可能操作各种数据项的一个数据库操作序列，这些操作要么全部执行,要么全部不执行，是一个不可分割的工作单位。事务由事务开始与事务结束之间执行的全部数据库操作组成。</p></blockquote><p><span style="color:red;background:yellow;"><strong>事务就是要保证一组数据库操作，要么全部成功，要么全部失败。</strong></span></p><p>比如转账操作，涉及到几个方面。</p><p>账户余额表。 zs 1000 | ls 5000</p><p>现在zs要给ls转账，转500。现在在数据库里面，我们要进行两步操作。</p><ol><li>扣zs的钱，扣500</li><li>给ls增加钱，增加500</li></ol><p>A给B转账。涉及到两个操作，需要给A账户扣钱，然后给B账户增加钱。</p><p>如果在这个操作的过程中，出现了异常。可能会导致A账户的钱扣了，B账户的钱没有增加。</p><h2 id="使用事务" tabindex="-1"><a class="header-anchor" href="#使用事务" aria-hidden="true">#</a> 使用事务</h2><p>开启事务</p><p>提交事务</p><p>回滚事务</p><ul><li><p>API</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//  开启事务</span>
connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 提交事务</span>
connection<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 回滚事务</span>
connection<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>命令</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 开始事务</span>
<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>

<span class="token comment"># 提交事务</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token comment"># 回滚事务</span>
<span class="token keyword">rollback</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table account(
    id int primary key auto_increment,
    name varchar(50),
    money int ,
    create_time timestamp  default current_timestamp ,
    update_time timestamp  default current_timestamp on update current_timestamp
);

-- 插入一条数据： 浩铭   50000
insert into account(name, money) values (&#39;浩铭&#39;,   50000);
insert into account(name, money) values (&#39;刘楠&#39;,   20000);
insert into account(name, money) values (&#39;黄杰&#39;,   10000);
insert into account(name, money) values (&#39;殿熙&#39;,   10000);

-- name是唯一的。   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">String</span> fromName<span class="token punctuation">,</span> <span class="token class-name">String</span> toName<span class="token punctuation">,</span> <span class="token keyword">int</span> money<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>

        <span class="token comment">// 1.获取连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2.开启事务</span>
        connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 3.1 扣A的钱</span>
            <span class="token comment">// update account set money = money - ? where name = ? and money &gt; ?</span>
            <span class="token class-name">PreparedStatement</span> preparedStatementA <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span><span class="token string">&quot;update account set money = money - ? where name = ? and &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;money &gt; ?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatementA<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatementA<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> fromName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatementA<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">int</span> affectedRowsA <span class="token operator">=</span> preparedStatementA<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>affectedRowsA<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>affectedRowsA <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;A账户信息不对&quot;</span> <span class="token operator">+</span> affectedRowsA<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//int i = 1 / 0;</span>


            <span class="token comment">// 3.2 增加B账户的钱</span>
            <span class="token comment">// update account set money = money + ? where name = ?</span>
            <span class="token class-name">PreparedStatement</span> preparedStatementB <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span><span class="token string">&quot;update account set money = money + ? where name = ? &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatementB<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatementB<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> toName<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">int</span> affectedRowsB <span class="token operator">=</span> preparedStatementB<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>affectedRowsB<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>affectedRowsB <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;B账户信息不对&quot;</span> <span class="token operator">+</span> affectedRowsB<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            connection<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            connection<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><p>事务通常具有四个标准特性（ACID）：</p><ul><li><p>原子性（Atomicity）</p><p>事务是一个不可分割的操作单元（数据库的操作），事务中的操作要么就都成功，要么就都不成功。</p></li><li><p>一致性（Consistency）</p><p>事务必须使数据库从一个一致性状态到另外一个一致性状态。</p><p>在转账案例中，一致性是指 在转账前和转账后，（无论怎么转账），钱的总金额是前后一致的，不变的</p></li><li><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>隔离性（Isolation）</strong></span></p><p>事务与事务之间是互相隔离的，互不影响的。</p><blockquote><p>数据库有为隔离性设置不同的隔离级别。不同的隔离级别对于隔离性的影响是不一样的</p></blockquote></li><li><p>持久性（Durability）</p><p>一个事务一旦生效，那么对数据库的改变是永久的，不可逆转的。意思就是提交了事务之后，就已经对数据库产生的变化，那么后续再回滚就回滚不了了</p></li></ul><p>一般问事务的四大特性。直接说出这几个的中文。</p><h2 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h2><p>当数据库有<span style="color:red;background:yellow;"><strong>多个事务同时执行</strong></span>的时候，可能会出现问题。</p><p>脏读（dirty read）、不可重复读（non-repeatable read）、幻读（phantom read）的问题。</p>`,85),A=n("blockquote",null,[n("p",null,"一个事务读取到了另外一个事务没有提交的数据。（这个比较严重）")],-1),D=n("blockquote",null,[n("p",null,"在同一个事务中，读取同一个数据，前后读取的数据不一致。"),n("p",null,"通常指的是，在一个事务中，读取到了另外一个事务已经提交的数据。")],-1),J=n("blockquote",null,[n("p",null,"指在同一个事务中，读取同一个表数据，前后读取的数量不一致。"),n("p",null,"通常指的是，在一个事务，读取到了另外一个事务插入或者删除的数据。")],-1),E=n("p",null,"事务的隔离级别：",-1),R=n("p",null,"一个参数，可以用来控制事务和事务之间的隔离性。",-1),P=n("blockquote",null,[n("p",null,"读未提交是指，一个事务还没提交时，它做的变更就能被别的事务看到。"),n("p",null,"会产生脏读。不可重复读，幻读 会不会造成？")],-1),M=n("blockquote",null,[n("p",null,"读提交是指，一个事务提交之后，它做的变更才会被其他事务看到。")],-1),V=n("blockquote",null,[n("p",null,[n("span",{style:{color:"yellow",background:"red"}},[n("strong",null,"这个是MySQL默认的隔离级别")])]),n("p",null,"可重复读是指，一个事务执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的。当然在可重复读隔离级别下，未提交变更对其他事务也是不可见的。")],-1),N=n("blockquote",null,[n("p",null,"串行化，顾名思义是对于同一行记录，“写”会加“写锁”，“读”会加“读锁”。当出现读写锁冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行。"),n("p",null,"实际工作中很少采用该级别。")],-1),U=n("h2",{id:"演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),s(" 演示")],-1),I=p(`<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table t(
	value int
);
insert into t values (1);

-- test_52th3 代表直接进入这个库
-- 代表我进入之后不用调用 use test_52th3 
mysql -uroot -p123456 test_55th3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 获取当前数据库的隔离级别
select @@transaction_isolation;
select @@tx_isolation;

# 设置隔离级别
set global transaction isolation level 隔离级别;

mysql -uroot -p123456 test_55th3

set global transaction isolation level repeatable read;

update t set value=1;

# 读未提交
read uncommitted;
# 读已提交
read committed;

# 可重复读
repeatable read

# 串行化
serializable;

# 注意。设置了隔离级别。必须要重新启动一下客户端，才能生效。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MySQL的可重复，可以解决部分幻读问题，不能完全解决。</p><figure><img src="`+h+`" alt="image-20221226112408097" tabindex="0" loading="lazy"><figcaption>image-20221226112408097</figcaption></figure><ul><li>读未提交：V1、V2、V3均为2。</li><li>读已提交: V1为1，V2为2，V3为2</li><li>可重复读： V1,V2为1， V3为2</li><li>串行化: 事务2修改的过程中。会一直等待，直到事务1提交</li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>后端工程
https://gitee.com/snow-lee/java-gui

前端工程
https://gitee.com/snow-lee/vue-gui

尝试把这两个项目起起来了。 然后如果能看懂后端代码，能改更好。
    前端这块，能改更好。 
    
    conntroller   ===&gt; 服务器内部路径
    service  
    mapper(dao)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工作过程需要的数据库知识，我们已经具备了。</p><p>但是面试的时候，会被问的问题有很多很多。</p><p>关于数据库这块，建议多学。</p><p>leetcode和学学数据库的问题。</p><p>锦上添花</p>`,11);function z(T,F){const c=i("ExternalLinkIcon"),e=i("font");return l(),u("div",null,[S,n("ul",null,[y,n("li",null,[w,q,n("blockquote",null,[x,n("ol",null,[n("li",null,[_,n("p",null,[n("a",L,[s("下载仓库地址"),a(c)])]),n("p",null,[n("a",Q,[s("MySQL驱动包下载地址"),a(c)])])]),j])])]),C]),B,n("ul",null,[n("li",null,[a(e,{color:"red"},{default:t(()=>[s("**脏读**")]),_:1}),A]),n("li",null,[a(e,{color:"red"},{default:t(()=>[s("**不可重复读**")]),_:1}),D]),n("li",null,[a(e,{color:"red"},{default:t(()=>[s("**幻读**")]),_:1}),J])]),E,R,n("ul",null,[n("li",null,[a(e,{color:"red"},{default:t(()=>[s("**读未提交**")]),_:1}),s("（read uncommitted）"),P]),n("li",null,[a(e,{color:"red"},{default:t(()=>[s("**读已提交**")]),_:1}),s(" (read committed)"),M]),n("li",null,[a(e,{color:"red"},{default:t(()=>[s("**可重复读**")]),_:1}),s(" (repeatable read)"),V]),n("li",null,[a(e,{color:"red"},{default:t(()=>[s("**串行化**")]),_:1}),s(" (serializable)"),N,n("blockquote",null,[a(e,{color:"red"},{default:t(()=>[s("**注意：**")]),_:1}),s("你隔离得越严实，效率就会越低。因此很多时候，我们都要在二者之间寻找一个平衡点。")])])]),U,a(e,{color:"red"},{default:t(()=>[s("**准备条件：**")]),_:1}),s("有一张表，表里只有一条数据。"),I])}const H=o(f,[["render",z],["__file","03_JDBC.html.vue"]]);export{H as default};
