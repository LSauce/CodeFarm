import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as o,a as i,b as n,e,w as p,d as a}from"./app-C2Ya8jiw.js";const g="/assets/image-20220526111136071-DY3jkrAP.png",u="/assets/image-20220526111920966-B2P-QlX0.png",m="/assets/image-20220526113317513-ZVtRBgQC.png",v="/assets/image-20220526113721503-go-pzoHx.png",b="/assets/image-20220526113143360-CvX9We2s.png",h="/assets/image-20220526114956920-CBlHn0u3.png",f="/assets/image-20220526144014440-BpKZpfYu.png",t="/assets/image-20230111111257900-iYzAcchS.png",k="/assets/image-20220526145749580-DSqXEgat.png",x="/assets/image-20220526150144318-CICA_6FX.png",_="/assets/image-20220526151312030-DM_0ykIf.png",y="/assets/image-20220526151518200-4cXLceM2.png",q="/assets/image-20220526152352372-B7-K-lJD.png",z="/assets/image-20220526162705623-DYl6cz1h.png",G="/assets/image-20220526163624301-DkMYWE5u.png",A="/assets/image-20220526171556679-P6EEYT0g.png",L="/assets/image-20220526172640586-GGmG9z1j.png",V="/assets/idea配置git-CnR9Ozeb.png",w="/assets/idea中git的提示-DzoD5BxV.png",J={},B=a('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><p>学习目标：</p><ul><li>git是什么，用来解决什么问题</li><li>掌握git的核心流程（工作区、暂存区、本地仓库）</li><li>熟练git的核心命令</li><li>如何处理冲突</li><li>git的分支是什么，有什么好处</li><li>了解企业中分支的使用方式</li><li>在idea上进行git操作</li></ul><p>https://www.progit.cn/</p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>最早是用于Linux的代码管理，这是Linus写得代码。它也会有一些代码的写得有问题。但是早期都是通过邮件给Linus发信息，告诉这里有问题。但是随着参与的人越来越多，这样不可行。</p><p>Bitkeeper公司，将自己的版本控制工具给到Linux使用。但是后续Linux的一群开发者都是技术大佬，想办法破解。惹怒了BitKeeper公司。</p><p>Linus 的第二个伟大作品。2005年由于BitKeeper软件公司对Linux社区停止了免费使用权。Linus迫不得己自己开发了一个分布式版本控制工具，从而Git诞生了。 据说Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git。一个月之内，Linux系统的源码已经由Git管理了。</p><p>Git 是一个版本控制工具。可以<span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>记录和追踪</strong></span> 某个文件 在某一个时刻的内容和状态。</p><p>Git的使用有点像一个 网盘，这个网盘大家都可以来操作。只是Git比网盘要高级一点，体现在哪里呢？其实就是Git可以追踪这个<code>网盘</code> 中 文件的历史版本状态。</p><blockquote><p>Git 可以 <span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>记录某个文件夹下的 不同文件 在不同时间节点的不同状态。Git可以去记录这些文件产生的变化</strong></span></p></blockquote><p>写论文其实就有这样一个过程 。 手动管理版本。 软件帮助管理版本。</p><p>发展历史：Linus，为了管理Linux的核心代码来开发的一个分布式的版本控制工具。</p><p>Git的特点：</p><ul><li>分布式</li><li>离线可用</li><li>可以回退</li></ul><p>Git和SVN的对比</p><ul><li>Git：分布式版本控制工具</li><li>SVN：集中式版本控制工具</li></ul><figure><img src="'+g+'" alt="image-20220526111136071" tabindex="0" loading="lazy"><figcaption>image-20220526111136071</figcaption></figure><figure><img src="'+u+'" alt="image-20220526111920966" tabindex="0" loading="lazy"><figcaption>image-20220526111920966</figcaption></figure><p>git学了 svn也会用。因为命令基本类似。</p><h2 id="安装git" tabindex="-1"><a class="header-anchor" href="#安装git" aria-hidden="true">#</a> 安装Git</h2><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载<img src="'+m+'" alt="image-20220526113317513" loading="lazy"></h3>',22),E={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},D=a('<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>直接傻瓜式安装即可。</p><figure><img src="'+v+'" alt="image-20220526113721503" tabindex="0" loading="lazy"><figcaption>image-20220526113721503</figcaption></figure><p>安装的时候，要注意 让Windows 记住登录凭证</p><h2 id="git的使用" tabindex="-1"><a class="header-anchor" href="#git的使用" aria-hidden="true">#</a> Git的使用</h2><h3 id="git核心流程" tabindex="-1"><a class="header-anchor" href="#git核心流程" aria-hidden="true">#</a> Git核心流程</h3><figure><img src="'+b+'" alt="image-20220526113143360" tabindex="0" loading="lazy"><figcaption>image-20220526113143360</figcaption></figure><h3 id="git-命令" tabindex="-1"><a class="header-anchor" href="#git-命令" aria-hidden="true">#</a> Git 命令</h3><h4 id="注册相关网站" tabindex="-1"><a class="header-anchor" href="#注册相关网站" aria-hidden="true">#</a> 注册相关网站</h4><p>以Gitee为例。</p><ul><li>记住注册的时候 使用的 <ul><li>用户名（推荐使用英文）</li><li>密码</li><li>手机号</li><li>邮箱(可以注册后自行设置)</li></ul></li></ul><p>密码一定要记得。</p><h4 id="建立远程仓库" tabindex="-1"><a class="header-anchor" href="#建立远程仓库" aria-hidden="true">#</a> 建立远程仓库</h4><figure><img src="'+h+`" alt="image-20220526114956920" tabindex="0" loading="lazy"><figcaption>image-20220526114956920</figcaption></figure><h4 id="clone" tabindex="-1"><a class="header-anchor" href="#clone" aria-hidden="true">#</a> clone</h4><p>把远程仓库，克隆到本地。（一定是第一次）</p><p>.git文件夹，是git自己的元信息的一个文件夹，大家不要动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载远程仓库的内容，并且在本地创建一个和远程仓库名同名的文件夹</span>
<span class="token function">git</span> clone https://gitee.com/common-zhou/test_50th.git

<span class="token comment"># 克隆远程仓库，到本地，文件夹的名字叫做  test53th1。如果文件夹不存在，会创建一个。</span>
<span class="token comment">#  文件夹可以有两种状态。 如果这个文件夹不存在，那就替你新建一个；如果文件夹存在且为空， 这时候用你的文件夹。</span>
<span class="token comment"># 如果这个文件夹存在，且不为空。会报错。 大家要注意一下报错信息。 </span>
<span class="token function">git</span> clone https://gitee.com/common-zhou/test53th.git test53th1

<span class="token function">git</span> clone https://gitee.com/ciggar/test-40th.git dirName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在git中管理文件的版本，需要使用文本文件。</p><p>.txt .md ; 不要使用docx pptx</p><p>在git中，对比文件的变化，是一行一行来进行比较的。所以我们需要追踪文本文件，docx是类似压缩包的文件，没有办法对比每一行。</p><h4 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> status</h4><p>这个命令可以帮助我们查看工作区和缓冲区中的变化。</p><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>工作区中的变化</strong></span></p><p><span style="color:green;background:yellow;font-size:文字大小;font-family:字体;"><strong>缓冲区中的变化</strong></span></p><figure><img src="`+f+`" alt="image-20220526144014440" tabindex="0" loading="lazy"><figcaption>image-20220526144014440</figcaption></figure><h4 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h4><p>这个命令可以帮助我们把工作区中的变化提交到缓冲区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 有以下的三种提交方式</span>

<span class="token comment"># 文件的名字</span>
<span class="token function">git</span> <span class="token function">add</span> fileName

<span class="token comment"># 文件的类型，通配符添加</span>
<span class="token comment"># 只添加 .java文件结尾的文件 。从工作空间提交到缓冲区</span>
<span class="token function">git</span> <span class="token function">add</span> *.java

<span class="token comment"># 所有文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> commit</h4><p>我们这个commit，和我们在写论文的时候，什么比较像？提交了一个版本。</p><p>commit这个命令可以帮助我们把git仓库中 缓冲区中的内容提交到本地仓库。</p><p><span style="color:red;background:yellow;"><strong>第一次提交的时候，需要设置 用户名和邮箱</strong></span></p><p>有两种设置的方式</p><ul><li><p>直接去用户目录下，设置 .gitconfig 这个文件,假如没有这个文件，就创建一个</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">user</span><span class="token punctuation">]</span></span>
	<span class="token key attr-name">name</span> <span class="token punctuation">=</span> <span class="token value attr-value">ciggar</span>
	<span class="token key attr-name">email</span> <span class="token punctuation">=</span> <span class="token value attr-value">291136733@qq.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行命令去设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token number">222</span>@qq.com
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>设置完之后，就可以提交了，会产生一个版本信息</p><figure><img src="`+t+`" alt="image-20230111111257900" tabindex="0" loading="lazy"><figcaption>image-20230111111257900</figcaption></figure><p>这一步需要大家注意几件事情：</p><ul><li>这一步会产生一个文件的版本号，只是前7位。</li><li>如果是第一次commit，需要设置用户名和邮件地址</li><li>只会把缓冲区中的变化提交到本地仓库，不会把工作区中的变化提交到本地仓库</li><li>commit的时候需要指定提交的信息，提交的信息一般要去设置模板</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提交</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;msg&quot;</span>
<span class="token comment">## msg:msg信息一般要有统一的格式 例如：描述信息 (issue号)</span>
<span class="token comment"># 1.描述信息 (issue号)</span>
<span class="token comment"># 2.(issue号) 描述信息</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;某某bug的修改&quot;</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;HashMap的练习&quot;</span>

<span class="token comment"># 尽量做到，见到描述信息可以知道这次提交是干什么的。</span>
<span class="token comment"># 不要写什么 1 abc </span>
<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>设置完之后，就可以提交了，会产生一个版本信息</p><figure><img src="`+k+'" alt="image-20220526145749580" tabindex="0" loading="lazy"><figcaption>image-20220526145749580</figcaption></figure></li></ul><h4 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> push</h4><figure><img src="'+t+'" alt="image-20230111111257900" tabindex="0" loading="lazy"><figcaption>image-20230111111257900</figcaption></figure><p>push这个命令可以帮助我们把本地仓库中的<span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>所有变化</strong></span> 推送到远程仓库。</p><ul><li>这一步在第一次操作的时候，需要去填写对应用户名和密码</li></ul><figure><img src="'+x+'" alt="image-20220526150144318" tabindex="0" loading="lazy"><figcaption>image-20220526150144318</figcaption></figure><blockquote><p>push的时候，能不能指定文件去 push呢？ 不能</p></blockquote><blockquote><p>只有当本地仓库中的版本领先于远程仓库的时候，才可以push</p></blockquote><h4 id="pull" tabindex="-1"><a class="header-anchor" href="#pull" aria-hidden="true">#</a> pull</h4><p>会拉取远程仓库中的所有的变化到本地。并且会显示出版本号</p><figure><img src="'+_+`" alt="image-20220526151312030" tabindex="0" loading="lazy"><figcaption>image-20220526151312030</figcaption></figure><blockquote><p>当本地仓库中的版本落后于远程仓库的时候，就要pull</p><p>“ 落后就要pull”</p></blockquote><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>&lt;&lt;&lt;&lt;
    这中间的代码，就是自己写得代码。
======
	别的提交写得代码
    &gt;&gt;&gt;&gt;&gt;&gt;&gt; 
    
    处理冲突。首先要决定留哪些代码，是留你的，还是留你的同事的； 或者两份都留
    其次，删除分隔符。
    
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
同事B也做了一些事情。
=======
这是同事A的第一次提交
第二行提交
&gt;&gt;&gt;&gt;&gt;&gt;&gt; c58c7c2b23823ca5ba375ddb39e8bf136b8ddd9b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> log</h4><p>查看仓库中的所有的版本信息</p><figure><img src="`+y+'" alt="image-20220526151518200" tabindex="0" loading="lazy"><figcaption>image-20220526151518200</figcaption></figure><h3 id="协作开发" tabindex="-1"><a class="header-anchor" href="#协作开发" aria-hidden="true">#</a> 协作开发</h3><h4 id="邀请成员加入仓库" tabindex="-1"><a class="header-anchor" href="#邀请成员加入仓库" aria-hidden="true">#</a> 邀请成员加入仓库</h4><blockquote><p>不管是 开源的仓库，还是私有的仓库，都是 只有仓库中的成员才能去修改仓库中的代码。</p><ul><li>开源：所有人都可以访问到</li><li>私有：只有仓库指定的成员才能看到</li></ul></blockquote><figure><img src="'+q+'" alt="image-20220526152352372" tabindex="0" loading="lazy"><figcaption>image-20220526152352372</figcaption></figure><p>私有仓库只能添加总共五个管理员（带主账号）。所以如果想把整个小组都拉进来，可以把仓库设置成公开仓库，可以添加小组全部成员。</p><h4 id="处理冲突" tabindex="-1"><a class="header-anchor" href="#处理冲突" aria-hidden="true">#</a> 处理冲突</h4><p>模拟冲突处理流程：</p><figure><img src="'+z+`" alt="image-20220526162705623" tabindex="0" loading="lazy"><figcaption>image-20220526162705623</figcaption></figure><blockquote><p>总结：</p><ol><li>先push的人不处理冲突，后push的人要处理 冲突</li><li>和组员一起开发的时候，尽量不要开发同一个文件，很容易产生冲突</li><li>push之前最好先pull一下，不然可能会push失败</li><li><ul><li>早上上班之后，第一件事情，拉取最新的代码（pull）</li><li>晚上下班之前，最后一件事情，把最新的本地代码推送上去（push）。<span style="color:yellow;background:red;"><strong>代码一定要能编译通过</strong></span>有没有bug无所谓。</li></ul></li></ol></blockquote><p>Vim怎样使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.点击i 表示是编辑。才能输入
2.保存的时候，怎么保存呢？
 点击esc; 输入一个冒号  shift+: (英文状态下) ; 输入wq（保存并退出）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>冲突的处理</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
    
===============
 
&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; fgfskljasdljdlkasjksalk
    
    
// 左到=。就是你自己的代码版本   &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;       --&gt;        ============
    // =到&gt;  是远端的版本      =========       --&gt;        &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
    
需要告诉git，如果保留代码。 比如是留你的版本，还是留你同事版本。 
 1.留代码
 2.删除分隔符
 3. 处理好所有的冲突之后， git  add . ;  git commit -m &quot;处理和同事1的冲突&quot;
 4. push 。 需要抓紧push，防止别人又push了代码    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多练习。</p><p>冲突分两种情况：</p><p>1.两次提交。修改了不同的文件： 这个是git可以帮我们处理这个问题。 git会保存最新的代码，比如一个人修改了 1 3 5 ； 另一个提交修改 2 4 7 。 最后，保存最新的 123457这些信息即可。 git需要我们输入一个信息， 会直接进入vim界面。你在这个界面输入提交信息， wq。</p><p>2.两次提交，修改了相同的文件。 这时候，git没有办法帮我们处理。我们需要手动处理。需要决定留哪一份，或者合并全留。</p><p>如果不知道我们同时修改了哪个文件： 可以用 git status 。</p><p>add commit .</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; heAD

    ====================
    
    &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后悔药" tabindex="-1"><a class="header-anchor" href="#后悔药" aria-hidden="true">#</a> 后悔药</h3><p>Git给我们提供了一些可以回退的措施，也叫作后悔药。</p><figure><img src="`+G+`" alt="image-20220526163624301" tabindex="0" loading="lazy"><figcaption>image-20220526163624301</figcaption></figure><ul><li><p>git checkout</p><blockquote><p>需要指定需要回退的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout text.txt
$ <span class="token function">git</span> checkout <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><span style="color:red;background:yellow;"><strong>这个命令，危险吗？ 危险！慎用</strong></span></p><blockquote><p>注意：回退的内容，是找不回来的，要慎用。比如你写了一天的代码，都是在工作区的。</p></blockquote></li><li><p>git reset</p><blockquote><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>把缓冲区中的变化，回退到工作区。注意：git reset不会改变文件中的内容</strong></span></p></blockquote><blockquote><p>问题：能不能指定文件reset呢？ 能</p></blockquote></li><li><p>git reset --hard version</p><ul><li>就指的是版本号。 我们每一次commit都有一个版本号</li></ul><figure><img src="`+A+`" alt="image-20220526171556679" tabindex="0" loading="lazy"><figcaption>image-20220526171556679</figcaption></figure><p>大家觉得，回退用的多不多？用的不多，因为我们再企业中写代码，不可能写了一个月代码，全丢掉。</p></li></ul><h3 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h3><p>git在做版本控制的时候，可以让我们忽略一些文件，不去追踪这个仓库中这些文件的变化。</p><p>怎么做呢？</p><ul><li>可以在Git仓库的根目录下 添加 一个 <code>.gitignore</code> 这个名字的文件，可以在这个文件中声明哪些文件不被git追踪版本信息</li></ul><p>对于Java项目来说，我们可以忽略哪些内容呢？</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment"># 单个文件</span>
xxx.txt

<span class="token comment"># 配置文件夹</span>
.idea

<span class="token comment"># 配置文件的类型</span>
*.iml

target/*.class

*.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code># 就是让git忽略一些文件。 不要去追踪这些文件。 比如class文件
# 一些私密信息（密码）这些不要让git管理。 

# 代表我不想让其追踪  4.txt的文件
4.txt

# 这个就是代表我想忽略 target文件夹
target/

# 一定要注意，如果git已经追踪上了。再添加到.gitIgnore文件里面，无效。
1.txt

# 比如，现在就是想忽略掉1.txt。 怎么办？
# 把1.txt剪切换一个位置 ;    add  commit ;   把1.txt文件拷贝回来。  这样我们就可以忽略掉这些文件。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意事项：</p><ol><li><p>忽略文件最好是在创建这个远程仓库的时候，就应该自动创建出来</p><figure><img src="`+L+`" alt="image-20220526172640586" tabindex="0" loading="lazy"><figcaption>image-20220526172640586</figcaption></figure></li><li><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>一旦一个文件已经被追踪并且提交到远程仓库中去了，那么再在.gitignore 这个文件中去忽略它的变化，是无效的</strong></span></p></li></ol></blockquote><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2><p>Git分支是Git版本控制系统中的一种重要概念，用于在同一个Git仓库中独立开发多个功能或特性。在Git中，每个分支都代表着仓库中的一个完整版本，并且可以在分支上进行独立的开发和提交。</p><p>使用分支的好处是可以让多个人在同一个仓库中同时进行开发，不会相互干扰，同时也可以随时回到之前的某个状态进行修复或重新开发。当一个分支的开发完成后，可以将其合并到主分支或其他分支上。</p><p>Git默认创建一个主分支，通常称为“master”或“main”，其他分支可以基于主分支或其他分支创建，每个分支都有一个唯一的名称。在开发过程中，可以在不同的分支之间进行切换，以便进行不同的工作。例如，可以创建一个分支来解决某个bug，同时在另一个分支上开发一个新的功能，而不会影响彼此之间的工作。</p><p>总之，Git分支是一种非常有用的功能，可以帮助开发人员更好地管理代码并提高开发效率。</p><p>分支操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有分支</span>
$ <span class="token function">git</span> branch

<span class="token comment"># 创建分支并切换 iss53</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> iss53

<span class="token comment"># 切换分支</span>
$ <span class="token function">git</span> checkout iss53

<span class="token comment"># 合并分支</span>
$ <span class="token function">git</span> merge iss53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;background:yellow;"><strong>工作过程中的一般使用步骤</strong></span></p><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>#  一般会有一个master 主分支
#  会有一个dev分支

# 1. 如果有需求，会从dev拉一个分支，比如 dev-feature1，所有的提交都提交在这个分支上
# 1.1 从dev拉取一个分支，并切换到这个分支
git checkout -b dev-feature1

# 2. 等到开发完成，会把这个分支合并到dev。 dev经过测试，会合并到master
# 2.1先切换到dev分支
git checkout dev 

# 2.2合并刚刚的分支
git merge dev-feature1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有一些不知道的操作，我想知道命令。</p><ul><li>上google</li><li>上群里（比较危险。 ） 。 如果别人给了你命令，你不确定。先去问问chatGPT。</li><li>问问chatGPT</li></ul><p>不认识的命令，不要随意去执行。</p><p>sudo rm -rf /</p><p>git push -f</p><h2 id="在idea上进行git操作" tabindex="-1"><a class="header-anchor" href="#在idea上进行git操作" aria-hidden="true">#</a> 在idea上进行git操作</h2><p>首先配置好git路径</p><figure><img src="`+V+'" alt="image-20230406111436344" tabindex="0" loading="lazy"><figcaption>image-20230406111436344</figcaption></figure><p>点击Test有版本。</p>',106),C=a('<p>红色代表是新增的文件</p><p>蓝色代表是文件有改动</p><p>绿色代表已经提交。其他的操作与git基本操作一致。</p><p>在文件中，可以看到文件的变动</p><figure><img src="'+w+'" alt="image-20230406112925347" tabindex="0" loading="lazy"><figcaption>image-20230406112925347</figcaption></figure><p>git可以右键，然后add commit 提交信息。</p><p>备注：</p><ul><li>学完之后，要多练习git。把日常的代码，使用git管理起来。因为后面写项目的时候，要大量使用git。</li><li>先使用命令行，不要使用idea中的可视化。用命令行，你可以清楚的知道发生了什么。</li><li>多练习一下分支</li><li>冲突处理一定要会。</li></ul><p><strong>常见问题</strong></p><p>如果在git配置中报错fatal: Authentication failed for &#39;&#39;，其实就是<strong>凭证失败</strong>的意思</p>',10),H={href:"https://blog.csdn.net/TanMengyi/article/details/108623908",target:"_blank",rel:"noopener noreferrer"};function N(S,j){const s=l("ExternalLinkIcon"),d=l("font");return r(),o("div",null,[B,i("p",null,[i("a",E,[n("官方下载地址"),e(s)])]),D,e(d,{color:"red"},{default:p(()=>[n("**如果项目被git追踪了，则idea中会有对应的颜色提示。**")]),_:1}),C,i("p",null,[n("解决办法如下："),i("a",H,[n("凭证失败解决"),e(s)])])])}const $=c(J,[["render",N],["__file","01_Git.html.vue"]]);export{$ as default};
