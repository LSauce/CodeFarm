import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as c,c as p,d as s,w as i,a as n,b as e,f as l}from"./app-1Qf3snIj.js";const d="/assets/HashMap底层结构-CSiMU0Hc.png",v={},u=l('<p>学习目标：</p><ul><li>会使用Map的增删改查API。遍历Map的方式</li><li><span style="color:yellow;background:red;"><strong>掌握HashMap存储数据的特点</strong></span></li><li><span style="color:red;background:yellow;"><strong>熟练掌握对常见的场景进行Map的使用</strong></span>.你的业务怎样需要，Map的key和value就可以怎样定义。</li><li><span style="color:yellow;background:red;"><strong>掌握HashMap的底层结构（面试）</strong></span></li><li><span style="color:yellow;background:red;"><strong>掌握HashMap的添加一份key-value数据的流程</strong></span></li><li><span style="color:yellow;background:red;"><strong>掌握HashMap的初始化容量及扩容机制，对重复的key的定义</strong></span></li><li>掌握LinkedHashMap和TreeMap存储数据的特点</li></ul><p><span style="color:yellow;background:red;"><strong>重点，难点，面试常考点</strong></span></p><p>面试的时候问集合。 90%会问到HashMap。</p><p>是否了解List接口，Set接口，Map接口。</p><p>是否了解List的子类。有什么特点？数组和链表。</p><h1 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备" aria-hidden="true">#</a> 前置准备</h1><h2 id="map是什么" tabindex="-1"><a class="header-anchor" href="#map是什么" aria-hidden="true">#</a> Map是什么</h2><p>什么是Map呢？Map就是用来存储键值对的接口，注意，它与Collection的区别。Collection存储的是单列数据，Map存储的键值对。什么叫键值对。就是一个key，一个value。我们举一个生活中的例子，我们把一些常见的公共电话与它的功能做一个对应。</p><p>比如 110 是警察局</p><p>120 是医院</p><p>119 是火警</p><p>122 是车辆救援</p><p>12345 是消费者权益保护。用一个键，可以快速获取一个值。</p><p>比如，如果我们想在1-20中间随机生成10000个数，需要记录每个数生成了多少次，怎么存呢？</p>',15),o=l(`<p>那如果是 1-10_000_000中间生成1000次呢？</p><p>使用数组实现不现实。 如果是int范围内生成呢？</p><p>需要使用Map。</p><p>等学完了Map的API，实现一下。</p><h1 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h1><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><ol><li>Map是Map体系的顶级接口，用来存储键值对数据</li><li>Map存储的数据，有一些子接口有序，有一些无序</li><li>Map存储的数据，不能重复（指的是key）</li><li>Map存储的数据，有一些允许为null，有一些不允许。（指的key）</li></ol><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>//---------------------------新增，删除，查找数据接口
//    V put(K key, V value): 添加键值对。 如果键存在，是更新数据
//    void putAll(Map&lt;? extends K,? extends V&gt; m)： 将一个map的所有键值对都放入这个map
//    V get(Object key)： 根据一个key，获取value，如果key不存在，返回null
//    V remove(Object key)： 删除map中所包含的这个key

//    boolean containsKey(Object key): 判断map中是否包含这个key
//    boolean containsValue(Object value): 判断map中是否包含这个value

//---------------------------辅助接口
//    void clear() : 清空map
//    boolean equals(Object o)： 判断两个map是否相等
//    int hashCode(): 返回此映射的哈希码值。
//    boolean isEmpty(): map中是否有元素
//    int size() ：返回键-值映射关系数。

//---------------------------视图方法
// 在Map里面 Entry 代表存储了key和value的一个接口体
//    Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()： 返回此映射中包含的映射关系的 Set 视图。
//    Set&lt;K&gt; keySet()： 返回此映射中包含的键的 Set 视图。
//    Collection&lt;V&gt; values()： 返回此映射中包含的值的 Collection 视图。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;background:yellow;"><strong>实现一下这个</strong></span></p><p>如果我们想在1-20中间随机生成10000个数。怎么存？</p><p>1-10_000_000中间生成1000次？</p><p>班级里有一些学生，我想根据省份进行分组，应该怎么做？</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>private static List&lt;Student&gt; generateStudents() {
        List&lt;Student&gt; students = new ArrayList&lt;&gt;();

        List&lt;String&gt; provinceList = Arrays.asList(&quot;hubei&quot;, &quot;hunan&quot;, &quot;guangdong&quot;);

        for (int i = 0; i &lt; 50; i++) {
            Student student = new Student();
            student.setName(&quot;student&quot; + i);
            student.setAge(15);
            // 从省份的list中，获取出一个省份，设置到学生上
            String province = provinceList.get(i % 3);
            student.setProvince(province);

            students.add(student);
        }

        return students;
    }

class Student {
    String name;
    int age;
    String province;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:yellow;background:red;"><strong>要学会完成抽象化的任务</strong></span></p><ul><li>比如你想统计一个班上每个省份的学生人数。应该怎么设计这个Map？</li><li>想统计一个班上，男生和女生的人数</li><li>一个班级的，语文分按照 [0,60), [60,80), [80,100]分三个层级 差，良，优秀。怎么统计每个层级的人数？(抽方法有什好处)</li></ul><p>Map进行增删改查的API</p><p>遍历Map的key-value数据的方式</p><h1 id="hashmap" tabindex="-1"><a class="header-anchor" href="#hashmap" aria-hidden="true">#</a> HashMap</h1><h2 id="准备知识" tabindex="-1"><a class="header-anchor" href="#准备知识" aria-hidden="true">#</a> 准备知识</h2><h3 id="什么是hash" tabindex="-1"><a class="header-anchor" href="#什么是hash" aria-hidden="true">#</a> 什么是Hash</h3><p>映射（函数）的概念：</p>`,22),m=n("p",null,"设A和B是两个非空集合，并存在某种对应关系f",-1),h=n("strong",null,"唯一的",-1),b=n("p",null,"那么，这样的对应（包括集合A，B，以及集合A到集合B的对应关系f）叫做集合A到集合B的映射",-1),k=n("p",null,"y=f(x)。 一个x对应一个y。 一个y可能对应多少个x。",-1),g=n("p",null,"对于一个x，只能有一个y与之对应",-1),y=n("p",null,"对于一个y，可以有多个x与之对应。",-1),A=n("p",null,"映射。 对于一个x，只能有一个y；对于一个y,可能有多个x",-1),M=l(`<img src="https://hixiaodong123.oss-cn-hangzhou.aliyuncs.com/typora/202201121211877.png?align=center" alt="映射图解" style="zoom:33%;"><p>注意：</p><ol><li><span style="color:red;background:yellow;"><strong>映射不要求元素一一对应，允许出现多对一，但绝不允许一（x）对多(y)。</strong></span></li></ol><hr><p>明白映射的概念后，哈希映射(hash)就不难理解了。哈希映射也是一种特殊的映射，要求：</p><ol><li>集合A（x）必须是一个无限大小，具有无穷多元素的集合。</li><li>集合B(y)必须是一个元素有限的集合。</li></ol><p>x是无限的，y是有限的。 一定会出现，一个y对应多个x。</p><p>y=f(x)</p><p><code>化无限为有限</code>，这就是哈希映射。将<strong>任意长度的输入</strong>通过散列算法变换成<strong>固定长度的输出</strong>。</p><p>在哈希映射当中，集合A和B之间的对应关系f，就是一种映射的规则，称之为<code>哈希函数</code>、<code>哈希方法</code>或者<code>哈希算法</code>等。</p><p>而通过哈希算法，求得的集合B中的元素，称之为<code>哈希值</code>。</p><h3 id="好的hash算法希望的特点" tabindex="-1"><a class="header-anchor" href="#好的hash算法希望的特点" aria-hidden="true">#</a> 好的Hash算法希望的特点</h3><p>y=f(x).也希望尽可能的均匀。</p><p>因为输入是无限数目的。而hash算法的结果(hash值)是有限的。所以肯定会遇到碰撞(hash值相同)。</p><p><span style="font-size:20px;color:red;">好的hash算法希望对于不同的输入，得到不同的输出结果。</span></p><h3 id="_2的幂取余问题" tabindex="-1"><a class="header-anchor" href="#_2的幂取余问题" aria-hidden="true">#</a> 2的幂取余问题</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 先说一个结论 
// 1.当 b 是2的幂次。则  a % b =  a &amp; (b-1)

// 比如 25 % 16
// 25 % 16 
// = 11001 % 10000
// = 11001 &amp; (10000-1)			 
// = 11001 &amp; 01111
// = 01001

// 2.当b是2的幂次， a%b 相当于是取a的低位。
53 % 16 = （0011 0101） % （0001 0000） =（0011 0101） &amp; （0000 1111）   = 0101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hashmap的底层结构" tabindex="-1"><a class="header-anchor" href="#hashmap的底层结构" aria-hidden="true">#</a> HashMap的底层结构</h2><p>HashMap底层结构是数组+链表+红黑树。</p><p><strong>HashMap的底层结构是一个数组。</strong> 想往HashMap中添加一个键值对。要经过哪些流程呢？</p>`,20),x=n("strong",null,"(其实就是hash的过程)",-1),V=n("li",null,"然后与数组长度取余，得到键在数组上的位置。（为什么要取余， 因为整数太大了，数组不一定能存下。 ）",-1),K=n("li",null,"如果数组位置上没有元素，则直接插入",-1),H=n("strong",null,"这个时候怎么操作呢？",-1),f=l('<p><span style="font-size:20px;color:red;">链表太长了有什么问题？</span></p><p>效率太低，因为比如链表有1w个节点，那就要比较1w次。效率差。所以链表太长了时会转化为<span style="font-size:20px;color:red;">红黑树。</span></p><p>面试题： 为什么HashMap的底层，是数组+链表+红黑树？</p><p>把添加的流程答出来，然后分析，链表是必不可少的（因为存在多个key落在同一个数组位置）。如果链表长度太长，这时候，效率太差，采用红黑树提高效率。</p><p>答面试题，一定要注意，听懂面试官的问题。你要知道他在考你什么。</p><p>有的时候，如果就是没听懂，怎么办？</p><div align="center"><img src="'+d+`"></div><h2 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h2><ol><li>HashMap是Map接口的子实现。用来存储key-value数据</li><li>底层结构，是数组+链表+红黑树</li><li>数组默认长度16，扩容机制是2倍。（数组的长度一直是2的幂次方， a%b = a&amp;(b-1)）</li><li>存储元素是无序的。对于key来说的</li><li>不允许存储重复元素， <span style="color:red;background:yellow;"><strong>重复是指的它的键</strong></span></li><li>允许存储null。对于key来说的</li></ol><p>为什么HashMap的底层是数组+链表+红黑树。</p><p>错误答法：不知道。写JDK那帮人写得。</p><p>如果不知道，可以说不知道。但是不要说的这么理所当然。</p><p>一定要注意一个问题。 面试的时候，要去理解记忆。不要一股脑全背出来。</p><h2 id="hashmap的一些注意事项-面试题" tabindex="-1"><a class="header-anchor" href="#hashmap的一些注意事项-面试题" aria-hidden="true">#</a> HashMap的一些注意事项(面试题)</h2><h3 id="初始化容量及扩容" tabindex="-1"><a class="header-anchor" href="#初始化容量及扩容" aria-hidden="true">#</a> <mark>初始化容量及扩容</mark></h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// HashMap的底层是数组+链表+红黑树。
// 数组默认长度是16。 扩容机制2倍

// 所以说明 
//     1.数组长度一直都是2的幂次。说明  a%b=a&amp;(b-1)
// 我们的第二步，对计算得到的int值，对数组长度进行取余。 可以转换以下  hash % length = hash &amp; (length - 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加载因子" tabindex="-1"><a class="header-anchor" href="#加载因子" aria-hidden="true">#</a> 加载因子</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// HashMap底层是数组+链表+红黑树。如果不限制，其实可以存无限的数据，但是这样效率较低
// 在HashMap底层维护的了一个加载因子，用来表示存储到多少就会扩容
// 比如默认的数组长度是16。 加载因子是0.75f
// 阈值 = 16 * 0.75（加载因子） = 12
// HashMap存储的key-value数据数目超过 阈值, 就要引发数组扩容
// key-value键值对的数目，包括链表上挂着的东西。

// 加载因子是控制什么事情？ 主要是控制数组上能存储的数据。
// 加载因子。不建议大家调整。JDK 0.75 结合工程实践，对很多场景进行测试。所以loadFactor不建议大家调整。

// if (++size &gt; threshold)
//           resize();

//															0.75*16
//  threshold = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);

// 思考一下，添加数据的效率，查找数据的效率，删除数据的效率。 大概是多少？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashmap底层数组结构" tabindex="-1"><a class="header-anchor" href="#hashmap底层数组结构" aria-hidden="true">#</a> HashMap底层数组结构</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// HashMap底层数组存储的key-value 是以Node结点存储的
// 里面存储了四个东西， key值 value值 hash 下一个节点
class Node{
    K key,
    V value,
    int hash,
    Node next
}

Node[] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div align="center"><img src="`+d+`"></div><h3 id="hash的计算" tabindex="-1"><a class="header-anchor" href="#hash的计算" aria-hidden="true">#</a> hash的计算</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>static final int hash(Object key) {
    int h;
    
    // key==null  
    // 1.为null的时候，返回0
    // 2.不为null。 返回后面的。
    // (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16)
    // 首先计算hashCode。赋值给h。  h无符号右移16位，  再取异或。
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16);
}

// 为什么要这样写。  直接hashCode，代码也能跑。为啥要  

//  2.当b是2的幂次， a%b 相当于是取a的低位。
// 53 % 16 = （0011 0101） % （0001 0000） =（0011 0101） &amp; （0000 1111）   = 0101
// 如果是直接计算hashCode.  那最后得到的下标，只有低位会参与。 

// 假设hashCode 
// 有一个key 的hashCode：  0101 1010 
// 还有个keyu  hashCode   1101  1010
// 对16进行取余。 
// 也可以思考一下： 为什么使用的是 ^;   为什么没有用这两个 &amp;  |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// hash() 就是为了计算给定的key的int值
static final int hash(Object key) {
    int h;
    // key == null
    // 如果key为null的时候，返回0
    // 如果key不为null。 (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16)
    
    // 计算hashCode. h=hashCode 
    // (h) ^ (h &gt;&gt;&gt; 16)
    // 就是为了让计算 得到下标的时候。高位和低位同时生效。
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16);
}

// a % b = a &amp; (b-1)
//  0010 0111 0110 0110(10086)
//&amp; 0000 0000 0000 1111 
// a和b取余的时候。 谁生效  低位生效

(hashCode) ^ (hashCode &gt;&gt;&gt; 8)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// (key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16)

// 对于任意一个输入，我们需要得到一个数字与之对应
// 如果key为null，则直接返回0
// 如果key不为null。首先计算hashCode。然后hashCode无符号右移动16位，然后与原数取异或。

// 是为了充分混合，让key落得位置更加均匀。
//  数组长度是2的幂次。   对这个2的幂次取余，最终起效果的就是数字的 后面位置。

// 例如，计算得到的hash值是77。 
// 当数组底层长度是n的时候。计算得到的下标： 
// 16:  77(0100 1101) % 16(0001 0000) 
//      77(0100 1101) &amp; (0000 1111)
// 	=  0100 1101 &amp; 0000 1111 = 1101    (就是最后四位，取的低位)

// 这时候，高位和低位取个异或，会让高位和低位对在数组上的下标起作用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重要-hashmap对重复的key的定义" tabindex="-1"><a class="header-anchor" href="#重要-hashmap对重复的key的定义" aria-hidden="true">#</a> <mark>（重要）<span style="color:red;">HashMap对重复的key的定义</span></mark></h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// p.hash == hash &amp;&amp; ((k = p.key) == key || (key != null &amp;&amp; key.equals(k)))
// p就是 当前数组位置的元素。 Node( hash  key  value  next)
// 如果你传入的key， 计算得到的hash和  数组上元素的hash相同。 这时候才会进入后面的逻辑。
// ((k = p.key) == key || (key != null &amp;&amp; key.equals(k)))
// 如果传入的key和我数组上的key 是同一个(地址相同) ；    或者equals返回true，也认为是相同的。

// 如果key等于null的时候呢？
// 在前面的代码已经判断出来了。 (k = p.key) == key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// p指的是原本存在的元素
// hash 是我们传入的hash值（int）  key
// (p.hash == hash &amp;&amp; ((k = p.key) == key || (key != null &amp;&amp; key.equals(k))))

// 1.hash值相同，才往下判断
// 2.如果地址相同。  ||  如果equals返回相同，
                
// 为什么需要重写？ 
// 比如，现在使用自定义的类 User(name, age)作为key。
// 为什么必须要重写hashCode和equals方法？
// 1.计算int值。计算int  hashCode。
// 2.代码这里，怎么判断相等的？ new User(&quot;zs&quot;, 18);  new User(&quot;zs&quot;, 18)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这就要求我们，使用一些类作为key时。<span style="color:red;background:yellow;"><strong>必须同时重写hashCode和equals方法。</strong></span></li><li><span style="color:red;background:yellow;"><strong>不建议大家使用自定义的类当做key。一般使用字符串或者Integer。</strong></span></li></ul><h3 id="存储重复元素" tabindex="-1"><a class="header-anchor" href="#存储重复元素" aria-hidden="true">#</a> 存储重复元素</h3><p>map.put(&quot;zs&quot;, &quot;hubei&quot;);</p><p>map.put(&quot;zs&quot;, &quot;hunan&quot;);</p><p>HashMap不允许存储重复的key, 当我们存储一份重复的key-value数据时, 是直接用新value是替代旧value，然后，返回了旧值。</p><h3 id="链表什么时候转化为红黑树" tabindex="-1"><a class="header-anchor" href="#链表什么时候转化为红黑树" aria-hidden="true">#</a> 链表什么时候转化为红黑树</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 当某个下标位置, 链表长度, 超过8达到9个时候(算上新加的结点), 就要由链表转化为红黑树
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="当链表数目从8到达9-一定会转化为红黑树吗" tabindex="-1"><a class="header-anchor" href="#当链表数目从8到达9-一定会转化为红黑树吗" aria-hidden="true">#</a> 当链表数目从8到达9，一定会转化为红黑树吗？</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 不一定会
// 如果数组的长度小于64.直接resize 扩容。

// 如果数组长度, 小于64,  即使某个下标位置,链表长度已经超过8, 达到9了, 不会转化为红黑树, 而是扩容, 扩容会导致原本存在于这个位置的数据, 拆成两部分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="font-size:20px;color:red;">思考一下，为什么这么设计？</span></p><p>当链表的长度，到达9的时候，会转化为红黑树。</p><p>数组长度是32。是最大的情况。</p><p>当前位置，有9个元素。其他31个位置，假设已经有12个元素。阈值是32*0.75=24.</p><p>当前元素，有 9 +12 = 21。所以，过一会，可能就扩容了。</p><p>与其现在把链表转换为红黑树，等会扩容了又会变成链表，不如我直接扩容。设计者认为这样设计，可以提高效率。</p><h3 id="扩容后位置问题" tabindex="-1"><a class="header-anchor" href="#扩容后位置问题" aria-hidden="true">#</a> 扩容后位置问题</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 现在，假设位置在x位置上的元素，扩容之后会落到新数组的什么位置
// 旧数组的容量  16
// 新数组的容量 32
// hash % 16 = x   ==&gt;    hash = x + 16 * n
// hash % 32   =  (x + 16 * n) % 32 = x  或者  x+16

// x = hash % Oldlen = hash % 16
// 用x把hash表示出来。    hash = x + 16 * n
// 现在落在新数组什么位置： hash % 32 = (x + 16 * n) % 32 = x + 16 ; x 
// 所以说，就只能落在两种位置： 要么原index位置，要么index + oldCapacity

// 在HashMap中, 存储的数据量大于HashMap的阈值(加载因子*数组长度), 会产生扩容,  当扩容之后一个原本在旧数组x位置的key-value数据,   要和新数组长度取模,得到一个新的下标, 这个新的下标只有两个选择:  x位置, 旧数组长度+x的位置

// 扩2倍。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="红黑树转化为链表" tabindex="-1"><a class="header-anchor" href="#红黑树转化为链表" aria-hidden="true">#</a> 红黑树转化为链表</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 有两个情况:
// 第一个情况, 删除数据的时候;  要删除的数据在红黑树上,  删除数据导致红黑树上数据量变少,  由红黑树转化为链表

// 第二个情况: 扩容的时候, 一个红黑树再扩容之后, 被拆成两部分, 任一部分数据量过少, 也会由红黑树转化为链表
//    红黑树拆成低位(旧位置)和高位(旧位置+旧数组长度: 新位置)两部分, 这两部分, 任何一部分分配的数据量小于等于6个, 就要由红黑树转化为链表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如果我们在hashmap已经添加了一份key-value数据-建议尽量不要再通过key的引用直接修改key-有可能会无法-再操作这个数据-了解" tabindex="-1"><a class="header-anchor" href="#如果我们在hashmap已经添加了一份key-value数据-建议尽量不要再通过key的引用直接修改key-有可能会无法-再操作这个数据-了解" aria-hidden="true">#</a> 如果我们在HashMap已经添加了一份key-value数据, 建议尽量不要再通过key的引用直接修改key, 有可能会无法 再操作这个数据 (了解)</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 重写了hashCode和equals。则两个对象的hashCode是一样的。落在了数组上的同一个位置。
// 如果这时候通过了原对象的引用去修改了变量值。则会导致一个现象。hashCode会改变。不会落在同一个位置。则操作不会生效，比如remove。

// 建议： Map里面的key, 直接用String.
// 不要通过引用来修改。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重要-hashmap的添加流程" tabindex="-1"><a class="header-anchor" href="#重要-hashmap的添加流程" aria-hidden="true">#</a> <mark>（重要）<span style="color:red;">HashMap的添加流程</span></mark></h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 1.当我们想往一个HashMap中添加一个数据。 key=zs,value=20
// 2.对key计算它的hash。 也就是对zs取hash。
// 		计算hash的方法：(key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16)
// 3.使用计算得到的hash。与数组长度取余，得到这个key在数组上的位置
// 		a%b=a&amp;(b-1)
// 4.检查数组位置上是否有键值对。
//   4.1 如果数组上没有元素，则直接新建节点，然后插入到数组。
//  				Node   key,value,hash,next(Node)
//   4.2 如果数组位置有元素，比较是否相等。
//  			怎么判断相等：p.hash == hash &amp;&amp; ((k = p.key) == key || (key != null &amp;&amp; key.equals(k)))
//    1)如果相等，则直接使用新的value替代旧的value。结束
//	  2)如果不相等，则挨个进行比较。   链表直接调用next，树就是左小右大。一直比较到没有元素。
//	  		一直到最后一个。
// 5.如果是链表，插入后的长度超过阈值(8)。则会转化为红黑树
//		如果数组长度小于64。不会转化为红黑树，会直接进行扩容。
// 6.如果没有重复，插入后，map中节点数超过阈值。 默认为数组长度的0.75。则会进行扩容，扩容2倍。
// 		扩容后的位置： x或x+len 。len为数组的长度。  
// 7.上述所有的扩容, 都有可能导致原本数组某个位置如果有红黑树, 红黑树被拆成两部分(低位和高位), 任一位置结点数变少, 又有可能导致红黑树转化为链表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 比如，我们现在想存储  zs,18进入我们的HashMap。 它会经历怎样的痛苦。 流程
// 1.对key进行计算，得到一个int值。   zs 
// (key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16);
// 2.对数组长度进行取余。   hash % length = hash &amp; (length) (   a%b = a&amp;(b-1))  
// length是2的幂次方。   数组初始长度是16，扩容是2倍。 
// 3.如果数组位置没有元素，直接将数据存储到该数组位置。
// K key,V value,int hash,Node next
// 4.如果数组位置有元素， 会进行比较
// 4.1 如果不相等。 挨个进行比较。 如果是链表，按链表的方式进行比较； 如果是红黑树，按照红黑树的方式进行比较
//   HashMap中，什么叫key相等。 (p.hash == hash &amp;&amp; ((k = p.key) == key || (key != null &amp;&amp; key.equals(k))))
// 4.2 如果最后发现，没有相同的key。挂到链表的尾端。 
//		链表长度如果过长。会转换为红黑树。链表长度超过8，到达9的时候。会转换为红黑树‘
//			超过8，到达9，是否一定会转化为红黑树。  --》 有可能会导致扩容。 
// 			扩容后的位置问题： x 或者  x+oldCapacity 
// 5.如果上述插入了。可能会导致扩容。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 删除方法
    
// 查找方法
// 把添加流程弄懂，其他的流程很好弄懂。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hashmap的构造方法" tabindex="-1"><a class="header-anchor" href="#hashmap的构造方法" aria-hidden="true">#</a> HashMap的构造方法</h2><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>HashMap() 
          构造一个具有默认初始容量 (16) 和默认加载因子 (0.75) 的空 HashMap。 
HashMap(int initialCapacity) 
          构造一个带指定初始容量和默认加载因子 (0.75) 的空 HashMap。 会找到大于等于当前值的一个2的幂次方
HashMap(int initialCapacity, float loadFactor) 
          构造一个带指定初始容量和加载因子的空 HashMap。 
HashMap(Map&lt;? extends K,? extends V&gt; m) 
          构造一个映射关系与指定 Map 相同的新 HashMap。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hashmap的api" tabindex="-1"><a class="header-anchor" href="#hashmap的api" aria-hidden="true">#</a> HashMap的API</h2><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>//---------------------------新增，删除，查找数据接口
//    V put(K key, V value): 添加键值对
//    void putAll(Map&lt;? extends K,? extends V&gt; m)： 将一个map的所有键值对都放入这个map
//    V get(Object key)： 根据一个key，获取value，如果key不存在，返回null
//    V remove(Object key)： 删除map中所包含的这个key

//    boolean containsKey(Object key): 判断map中是否包含这个key
//    boolean containsValue(Object value): 判断map中是否包含这个value

//---------------------------辅助接口
//    void clear() : 清空map
//    boolean equals(Object o)： 判断两个map是否相等
//    int hashCode(): 返回此映射的哈希码值。
//    boolean isEmpty(): map中是否有元素
//    int size() ：返回键-值映射关系数。

//---------------------------视图方法
//    Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()： 返回此映射中包含的映射关系的 Set 视图。
//    Set&lt;K&gt; keySet()： 返回此映射中包含的键的 Set 视图。
//    Collection&lt;V&gt; values()： 返回此映射中包含的值的 Collection 视图。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组装数据" tabindex="-1"><a class="header-anchor" href="#组装数据" aria-hidden="true">#</a> 组装数据</h2><p>有三个类，其中一个存着学生的一些信息</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 工作中，一般都是这种业务题。 
// 类的命名：  大驼峰。   UserService  UserServiceImpl 
// 方法的命名： 小驼峰   getStudentInfo()
// 变量的命名:  小驼峰
// 常量的命名： 全大写字母。  字母分割用 _ 

// 一组学生数据，学生信息里有以下信息。
// (id, name, age, teacher_id)

// 一组班主任数据，有以下信息
// (id, name, age)

// 我们这样认为：一个老师对应n个学生，一个学生只对应一个老师。
// 现在需求方需要一个数据，需要返回 班主任的信息，然后和对应班级同学的信息。
// 提供两份数据：
//        List&lt;Teacher&gt; teachers = new ArrayList&lt;&gt;();
//        List&lt;Student&gt; students = new ArrayList&lt;&gt;();

class Grade{
   Teacher teacher;  
   List&lt;Student&gt; students;
}

// key是老师id。value是学生集合。
List&lt;Grade&gt;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="hashtable" tabindex="-1"><a class="header-anchor" href="#hashtable" aria-hidden="true">#</a> Hashtable</h1><h2 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2" aria-hidden="true">#</a> 特点</h2><ol><li>Hashtable是Map接口的一个子实现</li><li>Hashtable底层结构是数组+链表 (和HashMap在jdk1.8之前是一样的)</li><li>底层数组默认的初始长度11 ; 默认的扩容机制 2倍+1 .</li><li>存储元素无序</li><li>不允许存储重复的key: (对key的重复的定义和HashMap一样)</li><li>不允许存储null作为key, 也不允许存储null作为value</li><li>线程安全</li><li>jdk1.0时候出现, (HashMap是jdk1.2时候出现, HashMap的出现就是为了取代Hashtable的)</li></ol><p>一般面试官问，了解HashMap和Hashtable吗？</p><p>说一下HashMap和Hashtable的区别？ 同学，是否了解Hashtable。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>首先先说一下共同点

<span class="token number">1.</span>两个都是<span class="token class-name">Map</span>的子实现。都用来存储key<span class="token operator">-</span>value数据
<span class="token number">2.</span>在<span class="token number">1.8</span>之前，两者底层结构都是数组<span class="token operator">+</span>链表。但在<span class="token number">1.8</span>之后，<span class="token class-name">HashMap</span>变成了数组<span class="token operator">+</span>链表<span class="token operator">+</span>红黑树。
<span class="token number">3.</span>存储元素无序，都不能存储重复元素。<span class="token class-name">HashMap</span>允许存储<span class="token keyword">null</span>。<span class="token class-name">Hashtable</span>不允许存储<span class="token keyword">null</span>
<span class="token comment">// 如果记得，你就答一下。如果不记得。可以直接跳过。</span>
    <span class="token comment">// 不要在这想。如果忘记了，不要在这想太久，（比如想2min）</span>
<span class="token number">4.</span>HashMap线程不安全，<span class="token class-name">Hashtable</span>线程安全。
<span class="token number">5.</span>HashMap在<span class="token number">1.2</span>出现，就是为了替代<span class="token class-name">Hashtable</span>的。新写代码不使用<span class="token class-name">Hashtable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>面试答问题，要往自己熟悉的上面引。不要瞎引。</p><p>面试官问你一个问题，<span style="font-size:20px;color:red;">你要把自己熟悉的都答出来，不要面试官问你什么你就答什么，这样会很被动。</span></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不能面试官问你，了解这个吗。你说了解。
面试官问你使用过这个吗。你说使用过。

面试官问你这个，是想让你说你的认识。不是想听你回答了解，使用过这些的。大家要注意。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.掌握先大后小顺序。先把整体的印象答出来。比如是谁的接口，用来干什么。</p><p>答好了之后，再答细节。切记上来就开始答细节。</p><p>2.要有逻辑。不要左答一点，右答一点。面试是向面试官展示你思考方式的机会。</p><p>不是说面试官提了10个题，你答了9个。就通过了。</p><p>面试官是试图通过这10个题，了解你的基础，了解你解问题的思路。了解你的潜力。</p><p><span style="color:yellow;background:red;"><strong>切记。。。</strong></span></p><h1 id="linkedhashmap" tabindex="-1"><a class="header-anchor" href="#linkedhashmap" aria-hidden="true">#</a> LinkedHashMap</h1><h2 id="linkedhashmap的特点" tabindex="-1"><a class="header-anchor" href="#linkedhashmap的特点" aria-hidden="true">#</a> LinkedHashMap的特点</h2><ol><li>LinkedHashMap是HashMap的一个子类</li><li>LinkedHashMap底层基本上完全复用了父类HashMap的结构/参数/方法</li><li>LinkedHashMap在HashMap的基础上, <span style="color:red;background:yellow;"><strong>额外的维护了一个双向链表, 以保证迭代顺序</strong></span></li><li>LinkedHashMap存储<span style="color:red;background:yellow;"><strong>元素有序</strong></span></li><li>LinkedHashMap不允许存储重复数据（怎么定义重复）</li><li>LinkedHashMap允许存储null</li></ol><h2 id="linkedhashmap的构造方法" tabindex="-1"><a class="header-anchor" href="#linkedhashmap的构造方法" aria-hidden="true">#</a> LinkedHashMap的构造方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">LinkedHashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
          构造一个带默认初始容量 <span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> 和加载因子 <span class="token punctuation">(</span><span class="token number">0.75</span><span class="token punctuation">)</span> 的空插入顺序 <span class="token class-name">LinkedHashMap</span> 实例。 
<span class="token class-name">LinkedHashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> 
          构造一个带指定初始容量和默认加载因子 <span class="token punctuation">(</span><span class="token number">0.75</span><span class="token punctuation">)</span> 的空插入顺序 <span class="token class-name">LinkedHashMap</span> 实例。 
<span class="token class-name">LinkedHashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> 
          构造一个带指定初始容量和加载因子的空插入顺序 <span class="token class-name">LinkedHashMap</span> 实例。 
<span class="token class-name">LinkedHashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">,</span> <span class="token keyword">boolean</span> accessOrder<span class="token punctuation">)</span> 
          构造一个带指定初始容量、加载因子和排序模式的空 <span class="token class-name">LinkedHashMap</span> 实例。 
<span class="token class-name">LinkedHashMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">K</span><span class="token punctuation">,</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> m<span class="token punctuation">)</span> 
          构造一个映射关系与指定映射相同的插入顺序 <span class="token class-name">LinkedHashMap</span> 实例。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linkedhashmap的api" tabindex="-1"><a class="header-anchor" href="#linkedhashmap的api" aria-hidden="true">#</a> LinkedHashMap的api</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//---------------------------新增，删除，查找数据接口</span>
<span class="token comment">//    V put(K key, V value): 添加键值对</span>
<span class="token comment">//    void putAll(Map&lt;? extends K,? extends V&gt; m)： 将一个map的所有键值对都放入这个map</span>
<span class="token comment">//    V get(Object key)： 根据一个key，获取value，如果key不存在，返回null</span>
<span class="token comment">//    V remove(Object key)： 删除map中所包含的这个key</span>

<span class="token comment">//    boolean containsKey(Object key): 判断map中是否包含这个key</span>
<span class="token comment">//    boolean containsValue(Object value): 判断map中是否包含这个value</span>

<span class="token comment">//---------------------------辅助接口</span>
<span class="token comment">//    void clear() : 清空map</span>
<span class="token comment">//    boolean equals(Object o)： 判断两个map是否相等</span>
<span class="token comment">//    int hashCode(): 返回此映射的哈希码值。</span>
<span class="token comment">//    boolean isEmpty(): map中是否有元素</span>
<span class="token comment">//    int size() ：返回键-值映射关系数。</span>

<span class="token comment">//---------------------------视图方法</span>
<span class="token comment">//    Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()： 返回此映射中包含的映射关系的 Set 视图。</span>
<span class="token comment">//    Set&lt;K&gt; keySet()： 返回此映射中包含的键的 Set 视图。</span>
<span class="token comment">//    Collection&lt;V&gt; values()： 返回此映射中包含的值的 Collection 视图。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="treemap" tabindex="-1"><a class="header-anchor" href="#treemap" aria-hidden="true">#</a> TreeMap</h1><h2 id="treemap的特点" tabindex="-1"><a class="header-anchor" href="#treemap的特点" aria-hidden="true">#</a> TreeMap的特点</h2><ol><li>TreeMap是Map接口的子实现</li><li>TreeMap的数据结构红黑树。（左小右大）</li><li>TreeMap存储数据大小有序。</li><li>TreeMap不允许存储重复的key (什么叫重复: key的大小一样)</li><li>TreeMap不允许存储null作为key: null没有办法比较大小</li></ol><p>最大的一个特点就是有序。</p><h2 id="treemap的构造方法" tabindex="-1"><a class="header-anchor" href="#treemap的构造方法" aria-hidden="true">#</a> TreeMap的构造方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>构造方法摘要 
<span class="token class-name">TreeMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
          使用键的自然顺序构造一个新的、空的树映射。 
<span class="token class-name">TreeMap</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span> 
          构造一个新的、空的树映射，该映射根据给定比较器进行排序。 
<span class="token class-name">TreeMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">K</span><span class="token punctuation">,</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> m<span class="token punctuation">)</span> 
          构造一个与给定映射具有相同映射关系的新的树映射，该映射根据其键的自然顺序 进行排序。 
<span class="token class-name">TreeMap</span><span class="token punctuation">(</span><span class="token class-name">SortedMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> m<span class="token punctuation">)</span> 
          构造一个与指定有序映射具有相同映射关系和相同排序顺序的新的树映射。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="treemap的api" tabindex="-1"><a class="header-anchor" href="#treemap的api" aria-hidden="true">#</a> TreeMap的api</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// ----------------------从Map接口继承来的----------------------------</span>
<span class="token comment">//        boolean containsKey(Object key)</span>
<span class="token comment">//        如果此映射包含指定键的映射关系，则返回 true。</span>
<span class="token comment">//        boolean containsValue(Object value)</span>
<span class="token comment">//        如果此映射为指定值映射一个或多个键，则返回 true。</span>
<span class="token comment">//        V put(K key, V value)</span>
<span class="token comment">//        将指定值与此映射中的指定键进行关联。</span>
<span class="token comment">//        void putAll(Map&lt;? extends K,? extends V&gt; map)</span>
<span class="token comment">//        将指定映射中的所有映射关系复制到此映射中。</span>
<span class="token comment">//        V remove(Object key)</span>
<span class="token comment">//        如果此 TreeMap 中存在该键的映射关系，则将其删除。</span>
<span class="token comment">//        V get(Object key)</span>
<span class="token comment">//        返回指定键所映射的值，如果对于该键而言，此映射不包含任何映射关系，则返回 null。</span>


<span class="token comment">//        void clear()</span>
<span class="token comment">//        从此映射中移除所有映射关系。</span>
<span class="token comment">//        Object clone()</span>
<span class="token comment">//        返回此 TreeMap 实例的浅表副本。</span>
<span class="token comment">//        int size()</span>
<span class="token comment">//        返回此映射中的键-值映射关系数。</span>


<span class="token comment">//        Collection&lt;V&gt; values()</span>
<span class="token comment">//        返回此映射包含的值的 Collection 视图。</span>
<span class="token comment">//        Set&lt;K&gt; keySet()</span>
<span class="token comment">//        返回此映射包含的键的 Set 视图。</span>
<span class="token comment">//        Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()</span>
<span class="token comment">//        返回此映射中包含的映射关系的 Set 视图。      </span>
        
        <span class="token comment">// ------------------------TreeMap定义大小操作相关的api------------------------</span>
<span class="token comment">//        Map.Entry&lt;K,V&gt; ceilingEntry(K key): 大于等于给定key的最小键值对</span>
<span class="token comment">//        K ceilingKey(K key): 大于等于给定key的最小key</span>
<span class="token comment">//        Map.Entry&lt;K,V&gt; floorEntry(K key): 小于等于key的最大的键值对</span>
<span class="token comment">//        K floorKey(K key): 小于等于key最大的key</span>
<span class="token comment">//        Map.Entry&lt;K,V&gt; higherEntry(K key): 大于给定key的最小键值对</span>
<span class="token comment">//        K higherKey(K key): 大于给定key的最小key</span>
<span class="token comment">//        Map.Entry&lt;K,V&gt; lowerEntry(K key): 小于key的最大的键值对</span>
<span class="token comment">//        K lowerKey(K key): 小于key最大的key</span>

<span class="token comment">//        Map.Entry&lt;K,V&gt; firstEntry(): 返回最小的键值对</span>
<span class="token comment">//        K firstKey(): 返回最小的key</span>
<span class="token comment">//        Map.Entry&lt;K,V&gt; lastEntry(): 返回最大的键值对</span>
<span class="token comment">//        K lastKey(): 返回最大的key</span>

<span class="token comment">//        Map.Entry&lt;K,V&gt; pollFirstEntry(): 删除最小的键值对</span>
<span class="token comment">//        Map.Entry&lt;K,V&gt; pollLastEntry(): 删除最大的键值对</span>


        <span class="token comment">// ---------------------视图方法-----------------------------</span>
<span class="token comment">//        NavigableMap&lt;K,V&gt; subMap(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive)</span>
<span class="token comment">//        返回此映射的部分视图，其键的范围从 fromKey 到 toKey。</span>
<span class="token comment">//        SortedMap&lt;K,V&gt; subMap(K fromKey, K toKey)</span>
<span class="token comment">//        返回此映射的部分视图，其键值的范围从 fromKey（包括）到 toKey（不包括）。</span>
<span class="token comment">//        SortedMap&lt;K,V&gt; tailMap(K fromKey)</span>
<span class="token comment">//        返回此映射的部分视图，其键大于等于 fromKey。</span>
<span class="token comment">//        NavigableMap&lt;K,V&gt; tailMap(K fromKey, boolean inclusive)</span>
<span class="token comment">//        返回此映射的部分视图，其键大于（或等于，如果 inclusive 为 true）fromKey。</span>
<span class="token comment">//        SortedMap&lt;K,V&gt; headMap(K toKey)</span>
<span class="token comment">//        返回此映射的部分视图，其键值严格小于 toKey。</span>
<span class="token comment">//        NavigableMap&lt;K,V&gt; headMap(K toKey, boolean inclusive)</span>
<span class="token comment">//        返回此映射的部分视图，其键小于（或等于，如果 inclusive 为 true）toKey。</span>

        <span class="token comment">// -------------------------一些特殊的api: 了解-------------------------------</span>
<span class="token comment">//        NavigableSet&lt;K&gt; descendingKeySet()</span>
<span class="token comment">//        返回此映射中所包含键的逆序 NavigableSet 视图。</span>
<span class="token comment">//        NavigableMap&lt;K,V&gt; descendingMap()</span>
<span class="token comment">//        返回此映射中所包含映射关系的逆序视图。</span>
<span class="token comment">//        NavigableSet&lt;K&gt; navigableKeySet()</span>
<span class="token comment">//        返回此映射中所包含键的 NavigableSet 视图。</span>
<span class="token comment">//        Comparator&lt;? super K&gt; comparator()</span>
<span class="token comment">//        返回对此映射中的键进行排序的比较器；如果此映射使用键的自然顺序，则返回 null。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们需要实现一个功能，即存储某个城市的天气预报，并且需要按照时间排序。在这种情况下，我们可以使用TreeMap来存储天气预报信息。</p><p>具体来说，我们可以将预报时间作为key，将天气预报信息（如温度[temperature](javascript:😉、湿度[humidity](javascript:😉、气压[air_pressure](javascript:;)等）作为value存储在TreeMap中。由于TreeMap是有序的，因此我们可以方便地按照时间顺序遍历元素，从而实现预报信息的展示和查询功能。</p><p>想根据 2023-04-24这天的天气。</p><p>想获取 17-23号的天气。</p><p>如果需要Map中的key，有序的时候，可以使用这个TreeMap。</p><p>map.subMap(new Date(&quot;2023-04-17&quot;), true,new Date(&quot;2023-04-24&quot;), false)</p><p>// HashMap + ArrayList</p><p>// ArrayList里面存时间。 对ArrayList排序。</p><p>// 要了解 ArrayList和HashMap的常见操作，时间复杂度。</p><h1 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h1><p>在工作中，还会用到。需要掌握。 一般都是使用它来从properties配置文件中读取信息，其他的不用它。</p><p>Hashtable的子类</p><p>当做配置文件使用，只能存入String类型的。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 注意，只能存入String类型的key，value。否则在存储为properties文件的时候，会报错
// 新增key,value 使用的方法
setProperty()
    
// 根据key查询value的方法，使用
getProperty()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>properties文件(1.properties)</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># key=value 格式去写</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">zhangsan</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">admin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取properties文件</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>Properties properties1 = new Properties();
properties1.load(new FileInputStream(&quot;1.properties&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,108);function J(_,S){const a=r("font");return c(),p("div",null,[u,s(a,{color:"red"},{default:i(()=>[e("**生成1-20之间的随机数，10000个数字。**")]),_:1}),o,n("blockquote",null,[m,n("p",null,[e("按照这种对应关系f，对于集合A中的任何一个元素a，在集合B中都存在"),s(a,{color:"red"},{default:i(()=>[h]),_:1}),e("一个元素b与之对应")]),b,k,g,y,A]),M,n("ul",null,[n("li",null,[e("首先，会对键，计算得到一个int类型的值"),s(a,{color:"red"},{default:i(()=>[x]),_:1})]),V,K,n("li",null,[e("如果数组位置上有元素，"),s(a,{color:"red"},{default:i(()=>[H]),_:1}),e("我们采用的链表，存储落在同一个位置上的元素。挨个比较，比较完成后，如果没有就插入到链表的最后一个位置")])]),f])}const L=t(v,[["render",J],["__file","22_Map.html.vue"]]);export{L as default};
