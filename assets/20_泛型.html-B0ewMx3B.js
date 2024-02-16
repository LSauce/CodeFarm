import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as p,c as o,a as s,b as n,d as l,w as i,f as a}from"./app-BYkVY8Da.js";const d="/assets/image-20230128152912943-DEfxsnH4.png",u="/assets/参数化类型-Bg28znZE.png",r="/assets/image-20230129090114444-BM8C7oYu.png",v={},m=a(`<h1 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念" aria-hidden="true">#</a> 基础概念</h1><p><strong>学习目标：</strong></p><ul><li><p>理解泛型的概念及掌握泛型的好处</p></li><li><p>泛型类、泛型接口的定义</p></li><li><p>理解泛型在父子继承关系上的表现</p></li><li><p>理解泛型的擦除</p></li></ul><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2><p><strong>背景条件</strong></p><ul><li>汽车类</li><li>汽车的车库(主要用于存放车)。还提供一个方法获取汽车。</li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>/**
 * 类： 希望被持有的小汽车类
 * 功能： 里面只有一个run方法，打印。
 */
public class AutoCar {
    public void run() {
        System.out.println(&quot;小汽车跑跑跑......&quot;);
    }
}


/**
 * 类：车库类
 * 功能：
 * 1.持有小汽车。
 * 2.对外提供获取小汽车方法
 */
public class HolderAutoCar {
    private AutoCar autoCar;

    public HolderAutoCar(AutoCar autoCar) {
        this.autoCar = autoCar;
    }

    public AutoCar get() {
        return this.autoCar;
    }
}

public class HolderAutoCarDemo1 {
    public static void main(String[] args) {
        // 使用方式
        HolderAutoCar holderAutoCar = getHolderAutoCar();

        AutoCar autoCar = holderAutoCar.get();
        autoCar.run();
    }

    private static HolderAutoCar getHolderAutoCar() {

        AutoCar autoCar = new AutoCar();

        // 这里的步骤可能很繁琐。
        // 比如这个autoCar需要进行十几个步骤，才能得到
        // 我们使用这个方法来屏蔽这十几个步骤。因为这个AutoCar我们可能只使用，创建是其他程序员创建好。

        HolderAutoCar holderAutoCar = new HolderAutoCar(autoCar);

        return holderAutoCar;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果现在又有一个卡车类，也想拥有持有类</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 卡车类
public class Truck {
    public void run() {
        System.out.println(&quot;大卡车跑跑跑......&quot;);
    }
}

// 持有卡车类的类
public class HolderTruck {
    private Truck truck;

    public HolderTruck(Truck truck) {
        this.truck = truck;
    }

    public Truck get() {
        return this.truck;
    }
}

// 使用方式
HolderTruck holderTruck = new HolderTruck(new Truck());
holderTruck.get().run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现，小汽车持有类和卡车持有类，非常相似，就隔了一个类型。</p><p><span style="color:red;background:yellow;"><strong>问题：如果我还有其他的类呢？比如皮卡类，摩托车类？</strong></span></p><p>如果继续这样写下去（一个车写一个车库类），有哪些优点和缺点？</p><p>优点：简单。这样可以一直写下去。写一个皮卡类，写一个皮卡车库类。</p>`,13),k=s("strong",null,"类数目会急剧增多。",-1),b=a(`<p><span style="color:red;background:yellow;"><strong>解决方案1：</strong></span></p><p>使用Object持有这些类。</p><p>好处：可以完成功能</p><p>坏处：一旦强转错了，会报错。比如本来存储进去的AutoCar，强转回的时候转成了Truck</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Holder1</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Object</span> object<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">Holder1</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>object <span class="token operator">=</span> object<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>object<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 正确使用。存AutoCar</span>
<span class="token class-name">Holder1</span> holder11 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Holder1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AutoCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">AutoCar</span><span class="token punctuation">)</span> holder11<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 正确使用。存Truck</span>
<span class="token class-name">Holder1</span> holder12 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Holder1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Truck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Object</span> o <span class="token operator">=</span> holder12<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Truck</span><span class="token punctuation">)</span> o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 错误使用。 o是一个Truck对象，但是却把它转成了AutoCar</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">AutoCar</span><span class="token punctuation">)</span> o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),g=a('<p>存在类型强转问题,如果类型转换错误，会导致报错。</p><figure><img src="'+d+`" alt="image-20230128152912943" tabindex="0" loading="lazy"><figcaption>image-20230128152912943</figcaption></figure><p><span style="color:red;background:yellow;"><strong>解决方案2：</strong></span></p><p>抽取公共接口，持有类持有接口。运用多态特性。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>public interface Car {
  void run();
}

public class AutoCar implements Car{
  public void run() {
    System.out.println(&quot;小汽车跑跑跑......&quot;);
  }
}

public class Truck implements Car {
  public void run() {
    System.out.println(&quot;卡车跑跑跑......&quot;);
  }
  
  public void truckMethod() {
    System.out.println(&quot;我是truck特有的方法&quot;);
  }
}

public class Holder2 {
  private Car car;

  public Holder2(Car car) {
    this.car = car;
  }

  public Car get() {
    return car;
  }
}

// 具体使用
Holder2 holder2 = new Holder2(new AutoCar());
holder2.get().run();

Holder2 holder21 = new Holder2(new Truck());
holder21.get().run();

// 如果向下转型
Truck truck = (Truck) holder21.get();
truck.truckMethod();

// 如果转错了类型。
AutoCar autoCar = (AutoCar) holder21.get();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h=a(`<ul><li>需要修改代码Truck,AutoCar这种类。如果这个<code>AutoCar</code>是别人提供的，我们就无法添加继承关系。</li><li>只能调用接口所特有的方法，如果想调用子类单独的方法，需要强转，可能转错。</li></ul><p><span style="color:red;background:yellow;">**解决方案3： **</span></p><p>使用泛型</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 持有类的定义
public class Holder3&lt;T&gt; {
  private T data;

  public Holder3(T data) {
    this.data = data;
  }

  public T get() {
    return data;
  }
}

// 使用
// 尖括号的指定的类型。先有一个印象
Holder3&lt;AutoCar&gt; holder3 = new Holder3&lt;&gt;(new AutoCar());
holder3.get().run();

Holder3&lt;Truck&gt; holder31 = new Holder3&lt;&gt;(new Truck());
holder31.get().run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型概念" tabindex="-1"><a class="header-anchor" href="#泛型概念" aria-hidden="true">#</a> 泛型概念</h2><p><strong>什么是泛型？</strong></p><p><span style="color:red;">参数化类型。</span>我们在写代码的时候, 可能很多时候我们并不能确定某一个参数的具体类型, 或者, 我们希望代码某个参数类型是灵活可变的, 我们可以先假定一种不存在的类型来代指这个参数类型, 当我们真正使用的时候再传入具体的类型。</p><figure><img src="`+u+`" alt="image-20221101094851766" tabindex="0" loading="lazy"><figcaption>image-20221101094851766</figcaption></figure><p><strong>相当于什么呢？</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 举例来说：比如我们之前定义一个变量</span>
<span class="token comment">// int i ;</span>
<span class="token comment">// 我们假设i = 1  --&gt; 那i就是1</span>
<span class="token comment">// 我们假设i = 2  --&gt; 那i就是2</span>

<span class="token comment">// 现在泛型来说</span>
<span class="token comment">// 我们使用了一个符号来代替类型。比如我们使用这样一个定义  T data;</span>
<span class="token comment">// 当我们传 T = String   那data就是String类型的</span>
<span class="token comment">// 当我们传 T = Integer   那data就是Integer类型的</span>

<span class="token comment">// 当我们传 T = AutoCar   那data就是AutoCar类型的</span>
<span class="token comment">// 当我们传 T = Truck   那data就是Truck类型的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型好处" tabindex="-1"><a class="header-anchor" href="#泛型好处" aria-hidden="true">#</a> 泛型好处</h2><ol><li><p>省去了类型强转的麻烦</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>不用使用强制类型转换。就避免了类型强转问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>将运行期遇到的问题转移到了编译期</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>没有泛型之前，编译器是不会检测集合容器中元素的数据类型的，因为它们全部都是<span class="token class-name">Object</span>。使用泛型后，能让编译器在编译的时候借助传入的类型参数（实参）检查对集合容器的插入，获取等操作是否合法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>问题越往后才发现，造成的问题也越难以解决，或者说影响越大。</p><h1 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h1><ul><li>泛型类： 泛型定义在类上。<span style="color:red;background:yellow;"><strong>需要重点掌握</strong></span></li><li>泛型接口：泛型定义在接口上，<span style="color:red;background:yellow;"><strong>需要重点掌握</strong></span></li><li>泛型方法：泛型定义在方法上，了解即可</li><li>泛型通配： 了解即可</li><li>泛型擦除：重要，要记住</li></ul><p>泛型是在Java 5中被引入的。在Java 5之前，Java的类和方法只能通过Object来实现泛化，这样的代码存在许多问题，如类型转换错误、编译时类型检查缺失等等，限制了代码的可读性、可维护性和安全性。</p><p>引入泛型机制后，Java可以在编译时进行更严格的类型检查，使得代码更加健壮、可读性更强，并且避免了许多运行时类型转换错误的问题。</p><h2 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类" aria-hidden="true">#</a> 泛型类</h2><p>泛型类是一种可以在定义类时使用类型参数来表示类中使用的类型的类。在Java中，泛型类可以用于定义一些通用的数据结构或算法，以便能够适应不同类型的数据。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 泛型类:  所谓泛型类,  就是把泛型&#39;定义在&#39;类上
// 定义的方法  类名&lt;泛型类型1, 泛型类型2， ...&gt;
格式:  class 类名&lt;泛型类型1,…&gt;{
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意1：泛型的使用时候写法</strong></p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// JDK1.7的写法。泛型的写法1 前面写类型，后面直接写 &lt;&gt;
User1&lt;String&gt; user1 = new User1&lt;&gt;();
String data = user1.data;

// JDK1.5 的时候，泛型刚刚出来时候的写法：
// 泛型的写法2 User2&lt;类型&gt; 变量名 = new User2&lt;类型&gt;();
User1&lt;Integer&gt; user11 = new User1&lt;Integer&gt;();
Integer data1 = user11.data;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意2：默认类型</strong></p><p>定义了泛型，但是未写在&lt;&gt;中，会将其直接当做Object使用。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>User1 user1 = new User1();

// 如果不使用 &lt;&gt; 来指定类型，这时候T是个什么类型呢？
// 是默认类型，Object
Object data = user1.data;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意3: 泛型类可以定义多个泛型</strong></p>`,26),A=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">User2</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User2</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// User2&lt;String&gt; user3 = new User2&lt;&gt;(&quot;zs&quot;, 18); // 报错，必须全部指定泛型的类型，或者全部不指定。</span>

<span class="token keyword">class</span> <span class="token class-name">User2</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token class-name">T</span> name<span class="token punctuation">;</span>
    <span class="token class-name">E</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意4: 定义了泛型不使用: 允许</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 定义了一个K, 但是我们没有使用</span>
<span class="token keyword">class</span> <span class="token class-name">User3</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token class-name">E</span><span class="token punctuation">,</span> <span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> name<span class="token punctuation">;</span>
    <span class="token class-name">E</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意5: 泛型标识符</strong></p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 我们会假定一种不存在的类型来代替这个参数类型，等我们真正使用的时候再传入具体的类型。
// int i; 这个i是变量。变量名
// T data;  这个T就是标识符。
// 使用单个大写字母。比如 E T K V
// E element; T type; K key; V value

// 这是一些规范。如果不按照这个规范，写代码也可以跑，但是出问题的风险比较大。
// 切记，不要使用String这种东西作为泛型，极容易认错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意6: 泛型必须使用引用类型</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token class-name">User4</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User4</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错: 泛型必须使用引用类型</span>
   <span class="token class-name">User4</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User4</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意7: 泛型类, 定义了泛型之后, 泛型的作用域</strong></p><ul><li>泛型类定义泛型的作用域: 在<span style="color:red;background:yellow;"><strong>自己的</strong></span>类上，或者类中。</li><li>类上：类的定义这行,可以使用泛型。<code>class Son&lt;T&gt; extends Father</code></li><li>类中：代表类体包含内容，包括内部类，可以使用泛型</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Father1</span><span class="token punctuation">{</span>
    <span class="token comment">// 用不了T, 因为子类定义 </span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Son</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Father1</span><span class="token punctuation">{</span> 
    <span class="token class-name">T</span> t<span class="token punctuation">;</span>
    <span class="token keyword">class</span> <span class="token class-name">SonInner</span><span class="token punctuation">{</span>     
        <span class="token class-name">T</span> aInnerT<span class="token punctuation">;</span>   
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">GrandSon</span> <span class="token keyword">extends</span> <span class="token class-name">Son</span><span class="token punctuation">{</span>
   <span class="token comment">// 用不了T, 因为父类定义 </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型在父子继承关系上的表现" tabindex="-1"><a class="header-anchor" href="#泛型在父子继承关系上的表现" aria-hidden="true">#</a> 泛型在父子继承关系上的表现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo1</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Father</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> ft <span class="token operator">=</span> f<span class="token punctuation">.</span>ft<span class="token punctuation">;</span>

    <span class="token comment">// Son1 定义时没有指定Father泛型的类型，所以默认为Object</span>
    <span class="token class-name">Son1</span> son1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span> ft1 <span class="token operator">=</span> son1<span class="token punctuation">.</span>ft<span class="token punctuation">;</span>

    <span class="token comment">// Son2 定义时，未指定泛型，指定了 Father泛型为String，所以ft为String</span>
    <span class="token class-name">Son2</span> son2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> ft2 <span class="token operator">=</span> son2<span class="token punctuation">.</span>ft<span class="token punctuation">;</span>

    <span class="token comment">//Son3 定义时，指定泛型E，指定了 Father泛型为Integer，所以ft为Integer</span>
    <span class="token class-name">Son3</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> son3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son3</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> ft3 <span class="token operator">=</span> son3<span class="token punctuation">.</span>ft<span class="token punctuation">;</span>

    <span class="token comment">// Son4 定义时，指定泛型E，指定了 Father泛型为E，所以ft类型和子类一致</span>
    <span class="token class-name">Son4</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> son4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son4</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> ft4 <span class="token operator">=</span> son4<span class="token punctuation">.</span>ft<span class="token punctuation">;</span>
    <span class="token class-name">Son4</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> son41 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son4</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> ft41 <span class="token operator">=</span> son41<span class="token punctuation">.</span>ft<span class="token punctuation">;</span>

    <span class="token comment">// Son5 指定T。 与符号无关</span>
    <span class="token class-name">Son5</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> son5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son5</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> ft5 <span class="token operator">=</span> son5<span class="token punctuation">.</span>ft<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> ft<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Son1</span> <span class="token keyword">extends</span>  <span class="token class-name">Father</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Son2</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 这个前面的E叫做定义了一个泛型E </span>
<span class="token keyword">class</span> <span class="token class-name">Son3</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 这里只是看起来好像是Integer。其实是定义了一个泛型叫做Integer。它和 java.lang.Integer有区别。</span>
<span class="token comment">// class Son3&lt;Integer&gt; extends Father&lt;Integer&gt;{}</span>
<span class="token keyword">class</span> <span class="token class-name">Son4</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Son5</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>背景： 如果父类有泛型，子类情况如下：</p>`,13),y=s("strong",null,"未指定父类泛型",-1),w=a(`<ul><li><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>class Son1 extends Father{}

Son1 son1 = new Son1();
Object object = son1.ft;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1),f=s("strong",null,"指定了父类类型",-1),T=a(`<ul><li><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>class Son2 extends Father&lt;String&gt;{}  --》 父类变量类型为String
class Son3&lt;E&gt; extends Father&lt;Integer&gt;{} --》 父类变量类型为Integer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1),S=s("strong",null,"传入了子类指定的泛型",-1),x=a(`<ul><li><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>class Son4&lt;E&gt; extends Father&lt;E&gt;{}  // 等到使用Son4的时候，指定什么类型，就是什么类型
class Son5&lt;T&gt; extends Father&lt;T&gt;{}

// 要注意bug

// 前面一个 &lt;Integer&gt; 叫泛型的定义，相当于我定义了一个符号
// 后面叫使用
class Son51&lt;Integer&gt; extends Father&lt;Integer&gt;{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1),j=a(`<h2 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口" aria-hidden="true">#</a> 泛型接口</h2><p>泛型接口是指在<span style="color:red;background:yellow;"><strong>声明接口的时候使用泛型参数</strong></span>，以便在实现接口时指定具体的类型。这样可以使接口更加灵活和通用，可以适应不同类型的数据结构或对象。</p><p>在泛型接口中，泛型参数可以用在接口中的方法、常量、嵌套类等地方。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">T</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，泛型参数T可以用于add方法的参数类型和get方法的返回类型。</p><p>泛型接口使得Java中的容器类更加通用和灵活，可以适应不同类型的数据结构和对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 所谓泛型接口, 就是把泛型定义在接口上</span>
格式<span class="token operator">:</span>  <span class="token keyword">interface</span> 接口名<span class="token operator">&lt;</span>泛型类型<span class="token number">1</span>…<span class="token operator">&gt;</span>
<span class="token comment">// 标识符。   T  E  </span>
<span class="token comment">// 能不能用基础类型。</span>
<span class="token comment">// 能不能定义多个泛型。 </span>
<span class="token comment">// 定义了能不能不使用？  </span>
    
<span class="token comment">// 泛型标识符。   单个大写字母。 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 格式: interface 接口名&lt;泛型类型1…&gt;</span>
<span class="token keyword">interface</span> <span class="token class-name">Player</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果实现时候，不指定类型，默认为Object</span>
<span class="token keyword">class</span> <span class="token class-name">YoungPlayer</span> <span class="token keyword">implements</span> <span class="token class-name">Player</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Object</span> data1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果实现时，指定为什么类型，则为什么类型</span>
<span class="token keyword">class</span> <span class="token class-name">ChildPlayer</span> <span class="token keyword">implements</span> <span class="token class-name">Player</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> data1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果子类也有泛型，则与子类一致</span>
<span class="token comment">// 等到这个子类，被创建的时候，才会有具体的类型。 </span>
<span class="token keyword">class</span> <span class="token class-name">OldPlayer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Player</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">E</span> data1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>泛型接口类型在什么时候确定？</strong></p>`,9),J=a(`<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>interface Player&lt;T&gt; {
    T play(T t);
} 
  
// 1.子类实现该接口，没有指定泛型。		--&gt; 接口中泛型为Object
//  class ChildrenPlayer implements Player {}
//  	 public Object play(Object o) {}
  
// 2.子类实现该接口，指定了泛型，给接口指定了类型  --&gt; 接口中泛型为指定的类型
//  class YoungPlayer implements Player&lt;String&gt; {}
//  	 public String play(String s) {}

// 3.子类实现该接口，指定了泛型,且符号一致  --&gt; 接口中为指定的泛型
//  class OldPlayer&lt;E&gt; implements Player&lt;E&gt;{}
//	public E play(E e) {}

// 1.子接口继承该接口时候
与以上行为一致。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 转换器接口，从一个类型转化到另一个类型
// 转换器，是讲一个类型转到另外一个类型，这时候类型肯定不能写死。  所以需要泛型。  f泛型有两个
// 定义这样的接口，有什么好处？   通用。 
// 一个规范。 只要见到这个东西，我就知道它是转换，把一个类型，转换到另外一个类型。 
public interface Converter&lt;T, R&gt; {
    R convert(T t);
}

// 从字符串转化为时间类型 我们约定字符串的格式为 yyyy-MM-dd。即这种类型 2022-11-01
public class String2DateConverter implements Converter&lt;String, Date&gt; {
    @Override
    public Date convert(String s) {

        Date parse = null;
        try {
            parse = new SimpleDateFormat(&quot;yyyy-MM-dd&quot;).parse(s);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return parse;
    }
}

// 还可以写从String类型的转化为Integer
// 从Long 类型转化为 Date类型。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型方法" tabindex="-1"><a class="header-anchor" href="#泛型方法" aria-hidden="true">#</a> 泛型方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 所谓泛型方法, 把泛型定义在方法上</span>
格式<span class="token operator">:</span>  <span class="token operator">&lt;</span>泛型类型<span class="token operator">&gt;</span> 返回类型 方法名<span class="token punctuation">(</span>泛型类型<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> t <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getT</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> zs <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getT</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//格式:  &lt;泛型类型&gt; 返回类型 方法名(泛型类型 变量名)</span>
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getT</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项：</strong></p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 1.方法上没有定义泛型，只是使用了泛型，不叫泛型方法。
//比如
class Player&lt;T&gt;{
  T play(T t){
      System.out.println(t);
      return t;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型的通配-了解" tabindex="-1"><a class="header-anchor" href="#泛型的通配-了解" aria-hidden="true">#</a> 泛型的通配: 了解</h2>`,9),C=a('<figure><img src="'+r+`" alt="image-20230129090114444" tabindex="0" loading="lazy"><figcaption>image-20230129090114444</figcaption></figure><p>泛型不允许协变, 又想产生类似协变的效果, 又不想引入协变带来的问题(类型不匹配问题)</p><p><strong>0.协变和逆变</strong></p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>Integer是Number的子类。
所以我们可以使用这种形式。 Number number = new Integer(10);			父类引用指向子类对象
那这个有父子继承关系吗  User&lt;Number&gt;  User&lt;Integer&gt;
 		可以这样使用吗？		User&lt;Integer&gt; user1 = new User&lt;&gt;(&quot;zs&quot;, 18);
 		 User&lt;Number&gt; user2 = user1;
 结论： 不行。因为  User&lt;Number&gt; 和 User&lt;Integer&gt; 不是父子继承关系。
 这个操作叫做协变。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>协变就是，允许接收该类及该类的子类。</p><p>逆变就是，允许接收该类及该类的父类。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 数组是允许协变的。协变的问题。类型不匹配问题
Animal[] animals = new Cat[10];

animals[0] = new Cat();
animals[1] = new Cat();
// 编译期没有问题。  但是运行期有问题。
animals[2] = new Dog();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>泛型不允许协变，也就是</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">User</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Animal</span><span class="token punctuation">&gt;</span></span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Cat</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>泛型中，弄出来了几个通配，来让自己可以产生协变的效果。</p><p><span style="color:red;background:yellow;"><strong>泛型的通配</strong></span></p><p>① 泛型通配符&lt;?&gt; 任意类型，如果没有明确，那么就是Object以及任意的Java类了 ② ? extends E 向下限定，E及其子类 ③ ? super E 向上限定，E及其父类</p><p><strong>1.任意类型</strong></p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>class User&lt;T&gt; {
  String name;
  T data;
  // getter &amp; setter &amp; conctructor
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 我们想提供一个方法，打印User对象，方法的签名是以下
// 如果是打印Integer的，可以是以下的
public void print(User&lt;Integer&gt; user) {
  System.out.println(user.getName() + &quot;--&quot; + user.getData());
}
  
// 如果是String类型的，则以上方法用不了
// 可以使用这个类型吗? 也不允许，因为泛型不允许协变
public void print(User&lt;Object&gt; user) {
  
// 可以使用以下类型来接收。？代表任意类型
public void print(User&lt;?&gt; user) {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.向下限定</strong></p><p><code>? extends E</code></p><p>只允许接收该类及该类子类。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 允许接收 Number 及Number的子类
public double compute(User&lt;? extends Number&gt; user) {
  Number data = user.getData();
  return data.doubleValue() + 1;
}

User&lt;Integer&gt; user = new User&lt;&gt;(&quot;zs&quot;, 18);
User&lt;Double&gt; user2 = new User&lt;&gt;(&quot;zs&quot;, 18.0);

double val = genericsExtends2.compute(user);
double val2 = genericsExtends2.compute(user2);
System.out.println(val);
System.out.println(val2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.向上限定</strong></p><p><code>? super E</code></p><p>只允许接收该类及其父类。</p><h2 id="泛型的擦除-重要-需要记住" tabindex="-1"><a class="header-anchor" href="#泛型的擦除-重要-需要记住" aria-hidden="true">#</a> 泛型的擦除: 重要:需要记住</h2><p>Java中的泛型<span style="color:red;background:yellow;"><strong>并不是真的泛型,</strong></span> Java的泛型只存在于编译之前, 当Java中的泛型编译之后, 会把泛型编译成Object以及类型强转</p><p>为什么使用泛型，因为泛型不涉及到强制类型转换，效率高一些。 对不对？</p><p>效率没有区别。</p><p>使用的时候，安全性有区别。 jdk帮你做的。 更安全点。</p>`,27);function _(V,I){const e=c("font");return p(),o("div",null,[m,s("p",null,[n("缺点：持有类的功能很固定，其实就是类型不一样。为每一个都单独写一个类，"),l(e,{color:"red"},{default:i(()=>[k]),_:1})]),b,l(e,{color:"red"},{default:i(()=>[n("**问题：**")]),_:1}),g,l(e,{color:"red"},{default:i(()=>[n("**问题：**")]),_:1}),h,s("ul",null,[s("li",null,[l(e,{color:"red"},{default:i(()=>[n("**可以定义多个泛型，但不建议超过两个。**")]),_:1}),n("我们可以在一个泛型类上, 定义多个泛型, 但是建议不要超过两个(并不是语法限制)")]),s("li",null,[l(e,{color:"red"},{default:i(()=>[n("**定义多个泛型，使用时，要么全部指定，要么全部不指定。**")]),_:1}),n("当我们给一个泛型类定义多个泛型的时候, 使用的时候, 传泛型就要指明类型, 或者全不指明默认Object")])]),A,s("ul",null,[s("li",null,[s("p",null,[n("如果继承时，"),l(e,{color:"red"},{default:i(()=>[y]),_:1}),n("，则为默认类型。Object")]),w]),s("li",null,[s("p",null,[n("如果继承时，"),l(e,{color:"red"},{default:i(()=>[f]),_:1}),n("，则为指定类型，无论子类定义泛型与否。")]),T]),s("li",null,[s("p",null,[n("如果继承时，"),l(e,{color:"red"},{default:i(()=>[S]),_:1}),n("，则父类与子类变量类型一致")]),x])]),j,l(e,{color:"red"},{default:i(()=>[n("**子类实现该接口时候，或者子接口继承该接口时。需要指定类型**")]),_:1}),J,l(e,{color:"red"},{default:i(()=>[n("**以后看源码，能明白含义即可。**")]),_:1}),C])}const H=t(v,[["render",_],["__file","20_泛型.html.vue"]]);export{H as default};
