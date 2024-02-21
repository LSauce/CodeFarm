import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as l,c as t,a as n,b as r,e as c,d as e}from"./app-DnMTRoWd.js";const d="/assets/获取连接流程-C8N1vcCd.png",o="/assets/连接池参与的流程-Ch74vTGy.png",u="/assets/dbcp导包-eSWXmXT3.png",p="/assets/c3p0导包-BZqjXpEK.png",v="/assets/druid导包-wZIAEq7M.png",m="/assets/image-20230103174354990-D382_7g8.png",b={},g=e('<p>学习目标</p><ul><li>理解连接池是什么</li><li>掌握池化思想的好处</li><li>会使用第三方的连接池</li></ul><h1 id="连接池" tabindex="-1"><a class="header-anchor" href="#连接池" aria-hidden="true">#</a> 连接池</h1><p>连接池是创建和管理一个连接的缓冲池的技术，这些连接准备好被任何需要它们的线程使用。</p><figure><img src="'+d+'" alt="image-20230103093213233" tabindex="0" loading="lazy"><figcaption>image-20230103093213233</figcaption></figure><p><strong>使用连接池有哪些好处？</strong></p><ul><li><strong>减少连接创建时间</strong></li></ul><p>创建新的 JDBC 连接仍会有网络和 JDBC 驱动的开销。如果这类连接是“循环”使用的，使用该方式这些花销就可避免。平分。</p><ul><li><strong>简化的编程模式</strong></li></ul><p>当使用连接池时，每一个单独的线程能够像创建了一个自己的 JDBC 连接一样操作，允许用户直接使用JDBC编程技术。</p><ul><li><strong>受控的资源使用</strong></li></ul><p>如果用户不使用连接池，而是每当线程需要时创建一个新的连接，那么用户的应用程序的资源使用会产生非常大的浪费并且可能会导致高负载下的异常发生。</p><figure><img src="'+o+`" alt="image-20230103093823203" tabindex="0" loading="lazy"><figcaption>image-20230103093823203</figcaption></figure><p>池化思想 池化技术。</p><p>听不懂面试官的问题。</p><p>面试时，如果面试官问连接池有什么好处、线程池有什么好处？应该怎么答呢？</p><p>池化技术（Pooling）是一种常见的资源管理技术，它可以通过预先创建和维护一定数量的资源实例来提高系统的性能和可靠性。池化技术的好处包括：</p><ol><li>提高性能：池化技术可以避免频繁地创建和销毁资源实例，从而减少了资源的开销和系统资源的消耗。这样可以提高系统的性能和响应速度。</li><li>提高可靠性：池化技术可以监控资源实例的状态，如果资源实例出现异常或超时，池化技术会自动将其标记为无效实例，并重新创建新的实例。这样可以提高系统的可靠性和稳定性。</li><li>节约资源：池化技术可以限制资源实例的数量，以避免过多的实例占用系统资源。这样可以节约资源，并提高系统的可扩展性和稳定性。</li><li>简化开发：池化技术可以通过配置文件或代码来管理资源实例，使得开发人员可以更加方便地使用资源实例，同时也减少了一些资源管理的复杂性。</li></ol><p>总之，池化技术是一种非常有用的技术，可以提高系统的性能、可靠性、节约资源和简化开发。在高并发、大数据量的应用场景下，使用池化技术可以发挥更加显著的优势。常见的池化技术包括连接池、线程池、对象池等。</p><h1 id="自己实现的连接池" tabindex="-1"><a class="header-anchor" href="#自己实现的连接池" aria-hidden="true">#</a> 自己实现的连接池</h1><p>连接池。你需要使用的时候，从池子里面（集合）取；使用完毕，放回池子。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>{
    private static List&lt;Connection&gt; connections;


    private static String driverClassName;
    private static String url;
    private static String username;
    private static String password;

    static {
        connections = new ArrayList&lt;&gt;();

        Properties properties = new Properties();
        try {
            properties.load(new FileInputStream(&quot;db.properties&quot;));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        driverClassName = properties.getProperty(&quot;driverClass&quot;);
        url = properties.getProperty(&quot;url&quot;);
        username = properties.getProperty(&quot;username&quot;);
        password = properties.getProperty(&quot;password&quot;);

        try {
            Class.forName(driverClassName);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (int i = 0; i &lt; 5; i++) {
            try {
                connections.add(DriverManager.getConnection(url, username, password));
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
    }

    /**
     * 获取连接的方法，如果连接池为空，则直接返回null。
     *
     * @return 连接池对象
     */
    public static Connection getConnection() {
        if (connections.isEmpty()) {
            return null;
        }
        return connections.remove(0);
    }


    public static void returnConnection(Connection connection) {
        connections.add(connection);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>实现了哪些功能 <ul><li>数据库的连接获取和释放</li><li>自动扩容</li></ul></li><li>未实现哪些功能 <ul><li>初始化容量，扩容数量的优化</li><li>最大连接数量的限制</li><li>没有超时自动回收功能</li></ul></li></ul></blockquote><h1 id="第三方提供的连接池" tabindex="-1"><a class="header-anchor" href="#第三方提供的连接池" aria-hidden="true">#</a> 第三方提供的连接池</h1><p>如果每一种连接池都有一种自己的获取连接的方式，会导致非常混乱。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 连接池A提供的获取连接的方法
Connection getConnection(){}

// 连接池B提供的获取连接的方法
Connection aquireConnection(){}

// 连接池C提供的获取连接的方法
Connection get(){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样对于Java的使用者来说去使用第三方开源的数据库连接池就可能不太方便，那么Java开发者就在JDBC中定义了一个数据库连接池的接口（ javax.sql.Datasource ），其他的数据库连接池的实现都需要去实现这个接口，这就对我们Java开发者来说造成了极大的便利，方便我们去在Java中使用数据库连接池。</p><p>DataSource接口，就是JDBC提供给我们的一个获取连接的接口。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>public interface DataSource  extends CommonDataSource, Wrapper {

  Connection getConnection() throws SQLException;

  Connection getConnection(String username, String password)
    throws SQLException;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dbcp" tabindex="-1"><a class="header-anchor" href="#dbcp" aria-hidden="true">#</a> DBCP</h2><p>不需要大家把这些背下来。 只要能照着文档，用起来就行。</p><p>最早大家都用的连接池。但是在 中间断更了几年，后续出现了一些bug，无人维护，所以索性有一些公司就自己开始开发了。</p>`,32),k={href:"https://commons.apache.org/proper/commons-dbcp/index.html",target:"_blank",rel:"noopener noreferrer"},h=e('<ul><li>导包。需要两个包：<code>commons-dbcp、commons-pool</code></li></ul><figure><img src="'+u+`" alt="image-20230103112524017" tabindex="0" loading="lazy"><figcaption>image-20230103112524017</figcaption></figure><ul><li>配置</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
<span class="token key attr-name">url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/test7</span>
<span class="token key attr-name">driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token comment"># 配置的参数。可以不用在url后面写。以分号分割</span>
<span class="token key attr-name">connectionProperties</span><span class="token punctuation">=</span><span class="token value attr-value">characterEncoding=utf8;useSSL=false</span>
<span class="token comment"># 初始化容量。</span>
<span class="token key attr-name">initialSize</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>public class DbcpDataSource1 {
    public static void main(String[] args) throws SQLException {
        DataSource dataSource = null;

        try {
            Properties properties = new Properties();
            properties.load(new FileInputStream(&quot;dbcp.properties&quot;));
            dataSource = BasicDataSourceFactory.createDataSource(properties);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        Connection connection = dataSource.getConnection();

        ExecuteQueryByConnection.executeQuery(connection);

        connection.close();
    }
}


public class ExecuteQueryByConnection {
    public static void executeQuery(Connection connection) throws SQLException {
        PreparedStatement preparedStatement = connection.prepareStatement(&quot;select * from account&quot;);
        ResultSet resultSet = preparedStatement.executeQuery();

        while (resultSet.next()) {
            int id = resultSet.getInt(&quot;id&quot;);
            String name = resultSet.getString(&quot;name&quot;);
            BigDecimal money = resultSet.getBigDecimal(&quot;money&quot;);

            System.out.println(id + &quot; __ &quot; + name + &quot; __ &quot; + money);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之前特别流行的连接池，但是由于中间几年没有更新，所以现在一般都是一些老项目在使用。</p><ul><li>如果单独导入了一个包(commons-dbcp)，报错了，怎么办？遇到这类问题，怎么解决？</li></ul><h2 id="c3p0" tabindex="-1"><a class="header-anchor" href="#c3p0" aria-hidden="true">#</a> C3P0</h2><p>dbcp断更后。出来的一个新的数据库连接池。</p><p>这里给大家演示一个问题，我们需要导两个包。有的时候忘记了，只导了一个，会出现什么问题？</p><p>lang.NoClassDefFoundError: com/mchange/v2/ser/Indirector</p><ul><li><p>没导入包会出现这个问题</p></li><li><p>导包了，但是版本不对。</p></li><li><p>拿这个报错去搜索引擎搜索搜索。或者去ChatGPT问。</p></li><li><p>导包</p><figure><img src="`+p+`" alt="image-20230103115558878" tabindex="0" loading="lazy"><figcaption>image-20230103115558878</figcaption></figure></li><li><p>配置</p></li></ul><p><span style="color:red;background:yellow;"><strong>需要在src目录下，新建一个配置文件。</strong></span></p><p><strong>方式一：(xml文件)</strong></p><p><span style="color:red;background:yellow;"><strong>名字为固定</strong></span>的 <code>c3p0-config.xml</code></p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;c3p0-config&gt;
    &lt;default-config&gt;
        &lt;property name=&quot;driverClass&quot;&gt;com.mysql.jdbc.Driver&lt;/property&gt;
        &lt;property
                name=&quot;jdbcUrl&quot;&gt;jdbc:mysql://localhost:3306/test7?characterEncoding=utf8&amp;amp;useSSL=false&lt;/property&gt;
        &lt;property name=&quot;user&quot;&gt;root&lt;/property&gt;
        &lt;property name=&quot;password&quot;&gt;123456&lt;/property&gt;

        &lt;property name=&quot;checkoutTimeout&quot;&gt;30000&lt;/property&gt;
        &lt;property name=&quot;idleConnectionTestPeriod&quot;&gt;30&lt;/property&gt;
        &lt;property name=&quot;initialPoolSize&quot;&gt;10&lt;/property&gt;
        &lt;property name=&quot;maxIdleTime&quot;&gt;30&lt;/property&gt;
        &lt;property name=&quot;maxPoolSize&quot;&gt;100&lt;/property&gt;
        &lt;property name=&quot;minPoolSize&quot;&gt;10&lt;/property&gt;

    &lt;/default-config&gt;
&lt;/c3p0-config&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二：(properties文件)</strong></p><p>名字为固定的： <code>c3p0.properties</code></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">c3p0.driverClass</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">c3p0.jdbcUrl</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/test7?characterEncoding=utf8&amp;useSSL=false</span>
<span class="token key attr-name">c3p0.user</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">c3p0.password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">static</span> <span class="token class-name">DataSource</span> cpds<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
      <span class="token comment">// 会自动去类路径下，会找指定的配置文件</span>
      cpds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComboPooledDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;background:yellow;"><strong>注意：</strong></span>c3p0的配置文件位置，都是写死在C3p0的代码里，所以配置文件的名字和位置都只能是固定的。</p><h2 id="druid" tabindex="-1"><a class="header-anchor" href="#druid" aria-hidden="true">#</a> Druid</h2><p>阿里。</p><ul><li>导包</li></ul><figure><img src="`+v+`" alt="image-20230103142712492" tabindex="0" loading="lazy"><figcaption>image-20230103142712492</figcaption></figure><ul><li>配置（写得配置文件，只要你有办法找到即可。但是尽量不要写绝对路径）</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/test7?characterEncoding=utf8&amp;useSSL=false</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>Properties properties = new Properties();
properties.load(new FileInputStream(&quot;druid.properties&quot;));

DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);
Connection connection = dataSource.getConnection();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hikaricp" tabindex="-1"><a class="header-anchor" href="#hikaricp" aria-hidden="true">#</a> HikariCP</h2><p>Springboot的一个数据库连接池。说明比较牛。</p><ul><li>导包</li></ul><figure><img src="`+m+`" alt="image-20230103174354990" tabindex="0" loading="lazy"><figcaption>image-20230103174354990</figcaption></figure><ul><li>配置</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">jdbcUrl</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/test7?characterEncoding=utf8&amp;useSSL=false</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>Properties properties = new Properties();
properties.load(new FileInputStream(&quot;hikaricp.properties&quot;));

HikariConfig config = new HikariConfig(properties);
HikariDataSource hikariDataSource = new HikariDataSource(config);
Connection connection = hikariDataSource.getConnection();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点：</p><p><span style="color:red;background:yellow;"><strong>池化思想</strong></span>。代码怎么写，不是特别重要，但是还是要练习。</p><p>一定一定要能自己的话描述出来。不是背出来。</p>`,42);function y(f,S){const i=a("ExternalLinkIcon");return l(),t("div",null,[g,n("p",null,[n("a",k,[r("官网"),c(i)])]),h])}const C=s(b,[["render",y],["__file","04_连接池.html.vue"]]);export{C as default};
