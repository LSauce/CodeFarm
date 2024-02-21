import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as p,c as u,a as n,b as e,e as s,w as a,d as t}from"./app-DnMTRoWd.js";const v="/assets/常见的四种数据结构_示例图-DBYCKfP_.png",m="/assets/image-20230215154103543-DKPLBW22.png",b="/assets/image-20230330093048337-COUDfVfB.png",d="/assets/集合类-DCFpg4NM.jpg",g="/assets/image-20230223192132808-C-iQe7Dt.png",k="/assets/toArray有参构造-D-VSE2Ly.png",A="/assets/iterator-D836jVfN.png",h="/assets/image-20230223193627276-BAtyJ0oZ.png",y="/assets/image-20230223193847526-CDcwI-bb.png",f="/assets/集合类-DCFpg4NM.jpg",C="/assets/image-20230130194449819-Be2YPRUQ.png",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArAAAAB8CAIAAAAekxQHAAAMh0lEQVR4nO3dv2tb1//H8fe5upKu5B+4yAGHdjEdOrTUQ0yGLh6VwWAw/gNKab2F0LGEZgiEDh1KyVY+g7t0NLh4qIcOHZLB1IODOwZDSHEgdmIrju6VdM853+FSYRw733uuk3tt6/mYHKG3znlf39zz8r1XkrLWSmqdTkdrXa/X05ckwjD0PK9arTpVGWOeP38+Ojpaq9WcCuM4DsNwaGjI8zynwm63G8dxtgaVUkEQOFUNSIMjIyOuI16gBnd3d4eHh7M1WK/XS6WSU2HODVprnz9/nnODvV5vaGjIqUpyb1Br3W63afBNhTQ4NDTkOmL+DUZRJCLnuUG3oy0AALiUCAQAAIBAAAAACAQAAEAIBAAAQAgEAABACAQAAEAIBAAAQAgEAABACAQAAEAIBAAAQAgEAABACAQAAEAIBAAAQER8p68/TmQrSWQYqJBCp6qkRCl1iRs8Wp7h+dlGzNZghqqj5dmGu8QNSqZ59ssvxC56Uf4PXu6j6FmGyzBiIctEhsI8f4Pq1atXrgMopZymlbnQWnt4eBgEQblczjBibvPMXGitff36dbVapcETa2nwxCrJsUEROTw8pMHTRqTBE6sk9wYrlUqlUskwIg0e5Ver1fTPjuPYGJNhWt1u1/M83/edqpKjbblcdpqkiBhjut1upVJx3fRnaVAp5fpfzlrbbrcvRIO9Xk9EsjXo+267mdDg6fJvUCmVc4Naa9fhJGuDIvL69WsafFPmBrXWcRzn3GCeR9FCGsz8GyyXy56X9t4A32lyxhhrbYZ+4jj2PO9Y4erq6u+//95qtf7fwvT9JJKTJK5VZyk0xiilMkS//BtstVpRFNVqtdHR0fSFF6jB8/kbbLVaYRj2N3syzwwjntsGjzkPDbZarVarpZQaGRl5y95+cRtMKecGDw4OwjCs1+tORxi5OA2e5egkmc4QpGzwypUrzWZzdnY2+afWutvt+r5fKpVSDuR22bvT6Wit6/V6+pJEGIae5x0LOF999dXm5qbrS+GMsp0lwxmx2fPHNi8Em71An3zyyW+//Zb8rLVut9v1ej19ICjyXQb//vtvgaMDAHCZ7O3tnaXc7aL++zA+Pr62tlb0LAbI9PS0tZbNnjM2e/6azebu7i7bPGfs6oVI9vYzvgifQwAAAAgEAACAQAAAAIRAAAAAhEAAAACEQAAAAIRAAAAAhEAAAACEQAAAAIRAAAAAhEAAAACEQAAAAETEj6Io/bO11tZap5J+oTHm2FctO33zMgAAeIujC7S11lrb7XbTfxu1v7+/n36wcrlcKpUODw9dZ1mtVo0xvV7v6IMEAgAA3hVrbX9N9zwvCIJXr14ZY1KW++Pj4+kHi+NYaz08POw6yySklMvlow96HhcsAAB4NzzP66/pxpgoisbGxtIvtb7v++kH01orpZxKEr1ez/O8DIUAACCl/jqbrNelUqlUKqWs5W90AABAIAAAAAQCAAAgBAIAACAEAgAAIAQCAAAgBAIAACAEAgAAIAQCAAAgBAIAACAEAgAAIAQCAAAgBAIAACAEAgAAIAQCAAAgIn6n00n/bK21McapJGGMsdYeK7TWur4OAAA40dF1Nllhe71eHMcpy32tdfrBknXdqaQ/M5Z/AADeq/4Cnay5WmulVMpav16vpx+p0+lorZ1KEmEYep5XrVaPPph+lgAA4O2UUv0FWmvdbreDICiVSinLuYcAAACIX/QELqSNjY3FxcU7d+7Mzc0VPZdLbn9//9atW1tbW0cf/OWXX65du1bUlAbH9vb2zZs3d3Z2+o9cvXr1/v37k5OTBc5qQNy/f39paSn5+caNG99//30QBMVO6RJbWVm5e/fu0UcG8yBDIHAWRdHy8rKILC8vz8zMjI2NFT2jy+/LL7+8efNm8nOySjUajZ9//pmNnwOCb86SPXxqaurBgwdJCNje3v7pp5++/fZbMsH7czTsrqysLC4uDmAm4JKBs52dnc3NzS+++GJra+vx48dFT2fgTE5Orq6uTk9P//jjj1EUFT0d4F1K0sA333xz7969/vI/OTn53XffkQZyMzMz89lnnz19+rToieSNQODs0aNHjUbj9u3bN27cePjwYdHTGVCzs7Obm5tra2tFTwR4l1ZXV6empprNZtETGWgvX77c29srehYFIBC42d/fX15enp6enpiYuH79+tra2vb2dtGTGkRXr16dmpp68uRJ0RMB3pn9/f2///77+vXrnAwo1sDGMgKBm8ePH+/t7c3OzorIzMxMo9F49OhR0ZMaREEQTExMPHv2jKsG79vdu3ev/ef27dts8Pcn+cP0o48+Knoig2hnZ2dhYSHZz9fW1r7++usBjGXcVOjm4cOHzWYzufFkbGxsenp6fX292WwO4K6DAcFNhRgER28q3NjYWFhYGMA9n0DgIDmht7W11X87UGJ+fn7QbkYtXBRFz549m5iYIIrhknn69CnHk2Jdu3btzp07A/g+Mi4ZOPjrr79E5M8//9z4z4MHD7i1sBD993oUPRHgnUnujFlfX+e6zHmwt7f38uXLomeRKwJBWlEUra+vT09PHw2MQRBwa2H+oij63//+NzU19emnnxY9F+CdCYJgfn7+jz/++Oeff4qey6B78uRJo9H44IMPip5IrggEaZ32J+nnn38uItxamJvt7e2FhQUR4bPbcPkkJ6sXFxdXVlb6D25vb//www+cNsjNxsbG0tLS/Pz8QF0vEO4hSG91dbXRaHz88cfHHu+f5ePWwvdnaWmpf98Gn56Ly21ubm5mZubWrVv9D9Plo4tzkLzLoP/PAfyYQiEQpNf/6NxjgiC4d+9ezpMZHGNjY7/++mvRsxhQyYdCFj2LQcRun7O5ublBe0PBibhkAAAACAQAAEDED8Mw/bONMdZap5KE1lprbYw5+qC11vV1AADAiY4u0MkK2+l0lFIpy33PczhJYK211jqVJJIokKEQAACk1F9nk2VXKZV+5fWr1Wr6kTqdjog4lfRn5nnescL0sQUAALydUqq/zmqt4ziuVCqlUillOX+yAwAAAgEAACAQAAAAIRAAAAAhEAAAACEQAAAAIRAAAAAhEAAAACEQAAAAIRAAAAAhEAAAACEQAAAAIRAAAAAhEAAAACEQAAAAEfGNMU4F1lrXkqQqWyEAAEipv85aa8Vxyfbb7Xb6kZIBnEr6hVrrOI7ffDUAAHB21tpjC3QURenL/Wq1mv7ZcRwbYyqVSvqSRLfb9TzP933XQgAAkFJ/TTfGdLvdcrnseWnvDfDL5XL6kYwx1lqnkkQcx57nHStUSrm+DgAAOJFSqr/Oaq273a7v+6VSKWU5NxUCAAACAQAAIBAAAAAhEAAAACEQAAAAIRAAAAAhEAAAACEQAAAAIRAAAAAhEAAAACEQAAAAIRAAAAARUU7fQdzpdLTW9XrddZgwDD3PO/bNis1mc3d31/WlcEbWWr5WKn9s9vyxzQvBZi/Q+Pj42tpa8rPWut1u1+v1i/HlRh9++GGBowMAcJk0Go2zlPvvah4ZzM/P+77farXe8pzke5PTf51zwlprrXWtOkuhMUYplSEX599gq9WKoqhWq42OjqYvvEANns/fYKvVCsOwv9mTeWYY8dw2eMx5aLDVarVaLaXUyMjIW/b2i9tgSjk3eHBwEIZhvV53OsLIxWnwLEcnEXl/DV65cqXZbLq++FEqDMP0z9ZaW2t93zlGxHGslEp/4iJhrT04OKjX65VKxbUwjmPf9103PQ2ehgZPlDRYq9WOXQ5LU5itQWOMMSbPBlutVhAE579BrbWIuDYoIgcHBzT4pkFosNfrlctlGuxTOzs76Qcol8ulUimKIqdpiUi1WjXG9Ho9p6rMCc7zvCAIwjB0ukNCRHzf930/twYlayimwdPQ4Gmq1aq1ttvtuhZelAaT0EmDb6LBEw1Ig1EUGWNSliinI2Acx1pr15wiIt1uVylVLpedqqy1L168GB4edh3RGNPpdIIgcN2CNHiaszQ4NDQUBIFTIQ2eJucGRWRvb48G31RIg/LfouLk0jf44sWLWq1Wq9WcqowxycXTDA3Gcey6PaWgBoMgSH91w3c676G1VkplOFXS6/U8z3MtTHJNhsI4jkWkVCq5XubJfC6o1+tl2DI0eJoL1KBSKnODnue5nj/MucHkFF3ODWqtz3+DyelfGnxT/g1KpoNMspxlazDbOpj8p8i5wVKpdDHeZQAAAM4JAgEAACAQAAAAAgEAABACAQAAEAIBAAAQAgEAABACAQAAEAIBAAAQAgEAABACAQAAEJH/A0W742on/ga4AAAAAElFTkSuQmCC",x="/assets/image-20230223200636090-B0A3TyBh.png",_="/assets/image-20230417164529031-QNaB-yJz.png",E="/assets/image-20230130201817297-BD5SqeSg.png",S="/assets/image-20230130201836688-D3JzH1eb.png",q="/assets/image-20230130201740973-CnGrikMh.png",w="/assets/集合类-DCFpg4NM.jpg",o="/assets/image-20230131194559788-Bi9ErchV.png",V="/assets/image-20230131200522855-CVRqw7Ve.png",z="/assets/image-20230201142123219-9Bu4NVEI.png",j={},J=t(`<h1 id="准备部分" tabindex="-1"><a class="header-anchor" href="#准备部分" aria-hidden="true">#</a> 准备部分</h1><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2><p>leecode.很推荐刷刷leetcode。 做业务做准备的。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 数据结构:  什么是数据结构
//         数据的组织方式,  数据+结构

// 有哪些常见的数据结构:
     集合:  一堆无序的数据
     线性表:  描述的是一个有序序列, 在这有序序列中除了头和尾数据以外, 每一个数据有唯一的前驱和后继  
           操作受限的线性表: 栈和队列。都是线性表。 只允许在特定的位置进出数据。
               
     树:  一对多的关系
         一个节点，连接多个节点。二叉树： 一个节点，最多连接两个节点
     图:  多对多的关系
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="常见的四种数据结构_示例图" tabindex="0" loading="lazy"><figcaption>常见的四种数据结构_示例图</figcaption></figure><p>本节课只会讲线性表，因为后面会用到，其他的如果大家感兴趣可以自己去学习一下。</p><p>面试的时候，问可能问到线性表就结束了。</p><p>Java --- Go ; 2周就可以转过来，开始写代码</p><p>Java ---- 算法 。 3月。</p><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><p>数组就是一片连续的内存空间，且存储的类型都是一致的。这就说明什么？</p><p>int[] numbers = new int[10]; 类型一致说明空间大小一致。</p><p>想取第四个位置的元素</p><p><span style="color:red;background:yellow;"><strong>说明每一个格子的大小是固定的。</strong></span>我们只要知道头一个地址，后方的地址都可以算出来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Q1: 数组我们都很熟悉，那你理解的数组是什么样的呢？它的最主要特点是什么呢？
    // 数组是在内存上连续存储,  所以可以随机访问
    // 对应数组下标的物理地址 = 数组首地址 + 下标 * 每一个内存单元大小
    
// 有一个数组长度是1000的。 现在想访问 index=500。是否可以直接访问到
// 可以。 数组的首地址 + 下标 * 每一个单元格的大小。

// 如果链表的长度是1000。 想访问 第 501个数据。  
// 用一个计数器。0 ，访问一次加1.
    
Q2: 为什么数组的效率比链表高？
    // 因为数组是连续存储可以做到随机访问, 但是链表是非连续存储不能做到随机访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="image-20230215154103543" tabindex="0" loading="lazy"><figcaption>image-20230215154103543</figcaption></figure><p>数组的插入数据流程</p><p>数组的删除数据流程</p><p>数组的查找数据流程</p><p>下去一定要自己写一下这个代码。因为面试如果答不上来，基本就挂了。</p><h3 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h3><p><span style="color:red;background:yellow;"><strong>链表是一个线型的。</strong></span></p><p>基础的结构是这样的。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// data可以用  泛型。 
// 泛型的主要目的：  保证数据类型的可变性，比如下一次要存储Integer了。如果现在写成String，就不行
public class Node&lt;T&gt; {
    T data;
    Node&lt;T&gt; next;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="image-20230330093048337" tabindex="0" loading="lazy"><figcaption>image-20230330093048337</figcaption></figure><p>链表的插入数据流程</p><p>链表的删除数据流程</p><p>链表的查找数据流程</p><h2 id="集合是什么" tabindex="-1"><a class="header-anchor" href="#集合是什么" aria-hidden="true">#</a> 集合是什么</h2><blockquote><p>集合是具有某种特定性质的事物的总体。 这里的“事物”可以是人，物品，也可以是数学元素。</p></blockquote><p>在Java中，指的就是存放数据的<span style="color:red;background:yellow;"><strong>容器</strong></span>，是一个<span style="color:red;background:yellow;"><strong>载体</strong></span>，可以一次容纳多个对象。</p><p>和数组比较像。 为什么要提供一套集合类。 就是因为数组操作起来，操作起来麻烦，但是非常容易出bug。</p><p>集合类帮助我们把这个事情隐藏起来。 数组长度不够用了。删除数据的时候挪动数据。</p><p>数组也可以存储多个对象，那集合和数组比，好在哪里呢？</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 1.班上有5个同学。  学生有名字，年龄，地址等信息
// 2.现在转学走了一个同学(第三个同学)。  怎么表示
// 3.新学期，又来了三个学生  怎么表示

// 使用数组完成一下这些功能
// 用集合类也完成一下这个功能。

//有啥问题？

// 1.操作起来非常的麻烦，容易出bug。添加一个学生，删除一个学生不好操作
// 2.使用数组，需要手动进行扩容，非常麻烦。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先使用集合实现一下。</p><img src="`+d+'"><p>Java中的集合类分为两大类：一类是实现了Collection接口的类，另一类是实现了Map接口的类。</p><p>**Collection：**先理解为一个袋子，往里面装数据。有各种各样的子实现。</p><p>在Java中，Collection是一个接口，它是所有集合类的顶层接口。它定义了一组通用的方法，用于操作集合中的元素。</p><p>Java中的Collection接口定义了一些常用的方法，例如add()、remove()、contains()等，还有用于获取集合大小、判断集合是否为空、清空集合等方法。Java中的集合类包括List、Set和Queue等，它们都是实现了Collection接口的子接口。</p>',41),I=n("strong",null,"一组",-1),D=t('<blockquote><ul><li>比如存储一组学生</li><li>比如存储一组手机号码</li></ul></blockquote><p>主要存储的就是单列数据。比如一个学生，一个老师。这种都叫单列数据。</p><p>**Map：**存储key-value结构的数据。key-value结构：就是可以根据一个key，找到一个对应的value。</p><blockquote><p>Map 接口存储一组键值对象，提供key（键）到value（值）的映射。</p></blockquote><blockquote><ul><li><p>比如根据手机号，快速获取到姓名</p></li><li><p>比如根据身份证号，快速获取到人的信息</p></li></ul></blockquote><h2 id="工作中的作用" tabindex="-1"><a class="header-anchor" href="#工作中的作用" aria-hidden="true">#</a> 工作中的作用</h2><p><span style="color:red;background:yellow;"><strong>工作，主要是处理业务信息。返回老板/前端需要的数据。</strong></span></p><p>我们一般在工作过程中，都是在处理数据。比如对某些数据进行筛选。</p><p>都是使用集合类，在对数据进行处理。</p>',9),T=n("strong",null,"要多对比",-1),H=t('<p>整理不同容器的结构思维导图。</p><ul><li>面试的时候，会被问到</li><li>写代码的时候，需要使用</li></ul><p>CRUD boy。</p><h1 id="collection" tabindex="-1"><a class="header-anchor" href="#collection" aria-hidden="true">#</a> <code>Collection</code></h1><p>学习目标：</p><ul><li>了解Collection接口的作用(描述数据增删查的一些方法。 )</li><li>掌握Collection的增、删、查方法（add addAll remove removeAll contains containsAll retainAll）</li><li>掌握Collection的遍历方法<span style="color:red;background:yellow;"><strong>(很重要)</strong></span></li><li>掌握Collection遍历方法的特点及迭代器方法需要小心的bug。toArray有什么特点？迭代器的并发修改异常问题，在使用迭代器的过程中，不能去修改原有集合。</li><li><span style="color:yellow;background:red;"><strong>熟练掌握什么场景下使用Collection及其子类</strong></span></li></ul><p>遍历使用的非常多。比如，现在让你判断一下，有多少同学在18岁以下。 想看一下有多少同学来自江西。 想看一下我们班这次考试的最高分。</p><p>集合类讲课的大致顺序：</p><ul><li>特点 --》 对这个容器有一个基础的认识。</li><li>API --》 基础使用</li><li>迭代方法 -- 在日常写代码过程中，使用最多的一类方法</li><li>使用过程中，容易出现的问题。---》为了让大家了解这个问题，防止bug。</li></ul><img src="'+d+`"><p>我们在学习任何一个接口之前，会给大家讲 接口的特点。</p><p>这个接口的特点，<span style="color:red;background:yellow;"><strong>是重点。</strong></span>大家了解了这个特点，基本对这个接口的一些基本行为有一个认知。</p><p>zs ls wu --&gt; zs ls wu</p><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><ol><li>Collection是顶级接口，用描述数据存储的接口.</li><li>Collection的一些子实现有序，一些无序</li><li>一些子实现允许存储重复的数据，一些不允许</li><li>一些子实现允许存储null，一些不允许</li></ol><p>传统的三件套。 数据存储是否有序。</p><blockquote><ul><li>什么叫有序，什么叫无序？</li></ul><p>指的是存储和读取的顺序，比如存入进去的是 <code>1 2 3 4 9</code>。读取出来的是<code>1 2 3 4 9</code>。或者 <code>9 4 3 2 1 </code>均称为有序。存进去的顺序和读取出来的顺序完全一致或者完全相反。</p></blockquote><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> <code>API</code></h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//    ---------------------------------增删改查方法---------------------------------</span>
<span class="token comment">// 需要熟练使用，清楚特点。 </span>
<span class="token comment">//    boolean add(E e): 添加一个元素进入Collection</span>
<span class="token comment">//    boolean addAll(Collection&lt;? extends E&gt; c): 添加一个Collection进目标Collection</span>
<span class="token comment">//    boolean remove(Object o)： 删除元素， 只删除第一个出现的(如果存在多个)</span>
<span class="token comment">//    boolean removeAll(Collection&lt;?&gt; c)： 删除Collection中的所有存在的元素,会全部删除，如果存在多个</span>
<span class="token comment">//    boolean contains(Object o)： 判断是否存在指定元素</span>
<span class="token comment">//    boolean containsAll(Collection&lt;?&gt; c)： 判断给定的collection中是否全部存在于目标Collection</span>
<span class="token comment">//    boolean retainAll(Collection&lt;?&gt; c)： 将原有collection只保留传入的collection。</span>

<span class="token comment">//    ---------------------------------特殊方法---------------------------------</span>
<span class="token comment">//    void clear()： 清空collection</span>
<span class="token comment">//    boolean equals(Object o) ： 判断是否相等</span>
<span class="token comment">//    int hashCode()： 计算hashCode</span>
<span class="token comment">//    boolean isEmpty(): 是否为空</span>
<span class="token comment">//    int size()： collection里面的元素个数</span>
<span class="token comment">//</span>
<span class="token comment">//    ---------------------------------方便遍历方法---------------------------------</span>
<span class="token comment">//    Object[] toArray(): 将collection转成一个数组，方便遍历</span>
<span class="token comment">//    &lt;T&gt; T[] toArray(T[] a)：类似，只是传入了一个数组</span>
<span class="token comment">//    Iterator&lt;E&gt; iterator()：返回一个迭代器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历：对一个集合中的元素，按照一定的顺序，访问且仅访问一遍。对集合的元素，挨个访问</p><ul><li><p>添加方法</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>boolean add(E e): 添加一个元素进入Collection

boolean addAll(Collection&lt;? extends E&gt; c): 添加一个Collection进目标Collection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>example</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addDemo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Collection的add方法</span>
    <span class="token comment">// ArrayList是Collection接口的一个子实现。ArrayList的底层是一个数组。</span>
    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> collection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 往Collection中添加了两个数据。  zs   景天叔叔</span>
    collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;景天叔叔&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// ArrayList重写了toString()</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [zs, 景天叔叔]</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAllDemo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将c1中的所有元素 添加到c2</span>
    <span class="token comment">// 是将数据添加到c2中</span>
    c2<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>删除方法</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>boolean remove(Object o)： 删除元素， 只删除第一个出现的(如果存在多个)
  
boolean removeAll(Collection&lt;?&gt; c)： 删除Collection中的所有存在的元素,会全部删除，如果存在多个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeDemo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> collection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;wu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    collection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 现在collection中有 五个元素.</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [zs, ls, wu, zs, ls]</span>

    <span class="token comment">// 删除 zs；  删除第一个 zs。有多个 zs,只会删除第一个</span>
    collection<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ls, wu, zs, ls]</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeAllDemo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;wu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    c2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 会从c1中删除所有的c2,无论c1中有多少个元素</span>
    c1<span class="token punctuation">.</span><span class="token function">removeAll</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ls, wu, ls]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>查询方法</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>boolean contains(Object o)： 判断是否存在指定元素
  
boolean containsAll(Collection&lt;?&gt; c)： 判断给定的collection中是否全部存在于目标Collection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>@Test
public void containsDemo1() {
    Collection&lt;String&gt; collection = new ArrayList&lt;&gt;();
    collection.add(&quot;zs&quot;);
    collection.add(&quot;ls&quot;);
    collection.add(&quot;wu&quot;);

    // 判断 Collection中，是否包含元素 “zs”; 如果包含，返回true;否则返回false
    boolean contains = collection.contains(&quot;zs&quot;);
    System.out.println(contains); // true

    boolean contains1 = collection.contains(&quot;景天叔叔&quot;);
    System.out.println(contains1); // false
}

@Test
public void containsAllDemo1() {
    Collection&lt;String&gt; collection = new ArrayList&lt;&gt;();
    collection.add(&quot;zs&quot;);
    collection.add(&quot;ls&quot;);
    collection.add(&quot;wu&quot;);
    collection.add(&quot;zl&quot;);

    // 新建一个Collection，里面的元素是 zs  zhou
    // Arrays.asList 是一个创建集合的方法。但是需要注意，创建出来的集合，不能添加和删除数据
    Collection&lt;String&gt; collection1= Arrays.asList(&quot;zs&quot;, &quot;zhou&quot;);

    boolean containsAll = collection.containsAll(collection1);
    System.out.println(containsAll); // 判断 collection中 是否包含 collection1里面的所有元素

    Collection&lt;String&gt; collection2= Arrays.asList(&quot;zs&quot;);
    boolean containsAll1 = collection.containsAll(collection2); // 判断 collection中 是否包含
    // collection2里面的所有元素
    System.out.println(containsAll1);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toarray方法" tabindex="-1"><a class="header-anchor" href="#toarray方法" aria-hidden="true">#</a> <code>toArray</code>方法</h3>`,28),Q=t('<p>就是直接拷贝一份数据，创建一个新的数组。</p><figure><img src="'+g+`" alt="image-20230223192132808" tabindex="0" loading="lazy"><figcaption>image-20230223192132808</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 底层是数组的实现</span>
<span class="token keyword">class</span> <span class="token class-name">ArrayList</span><span class="token punctuation">{</span>
    <span class="token comment">//elementData: 存储数据的数组 </span>
    <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> elementData<span class="token punctuation">;</span>

    <span class="token comment">// 数组列表的大小（它包含的元素数）</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),O=t('<figure><img src="'+k+`" alt="image-20230118112659456" tabindex="0" loading="lazy"><figcaption>image-20230118112659456</figcaption></figure><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// ArrayList底层是数组、

class ArrayList{
    // elementData就是底层用来存储数据的数组
    Object[] elementData;
    
    // size ： ArrayList底层实际存储的数据的长度。
    // 比如最开始 初始化 长度10；  elementData = new Object[10];
    // size = 0;    size=1; 
    int size;
    
    
    //是ArrayList的toArray实现
    //  a = new String[3]
    // ArrayList里面，实际存了3个元素
    public &lt;T&gt; T[] toArray(T[] a) {
        // a.length(3)   &lt;   size(3)
        if (a.length &lt; size)
            // 如果你传入的数组长度，小于集合的长度。  这时候，会直接 复制底层存储的数据，只使用类型。
            return (T[]) Arrays.copyOf(elementData, size, a.getClass());
        
        // 只要走到这一行。说明  a.length &gt;= size 。 传进来的数组长度，大于等于  元素个数
        // arraycopy 就是把一个数组 copy。 
        // 把elementData的所有数据 拷贝到  a(传进来的数组)
        System.arraycopy(elementData, 0, a, 0, size);
        
        // 传入的数组长度，大于size(实际存储的数据长度)
        if (a.length &gt; size)
            // 直接把elementData后面的位置，赋了null。
            a[size] = null;
        return a;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 这是系统提供的一个数组拷贝方法。  --》 把一个数组复制到另外一个数组
// src 源数组
// srcPos 从什么地址开始复制（starting position in the source array.）
// dest 目标数组
// destPos 粘贴到的下标位置
// length 复制的长度（the number of array elements to be copied.）
public static native void arraycopy(Object src, int  srcPos, Object dest, int destPos, int length);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// a是什么东西？   是我们放进来的数组
// elementData   是ArrayList底层的数组，  size  是元素的个数
public &lt;T&gt; T[] toArray(T[] a) {
    
    // a.length  （传入的数组长度）   &lt;   元素个数
    if (a.length &lt; size) {
        // 如果传入的数组，长度不够。 我直接复制一下，只使用你传入的数组类型。 
        return (T[]) Arrays.copyOf(elementData, size, a.getClass());
    }
    
    // 将elementData的数据拷贝到  a 里面。  拷贝size长度
    System.arraycopy(elementData, 0, a, 0, size);
   
    if (a.length &gt; size)
        // 把它赋值为null
        a[size] = null;
    return a;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),P=n("p",null,"传入的数组长度与集合长度的对比。",-1),B=n("strong",null,"小于",-1),M=n("strong",null,"等于",-1),N=n("strong",null,"大于",-1),F=t(`<p><span style="color:red;background:yellow;"><strong>直接使用<code>toArray</code>这个有什么弊端？</strong></span></p><p><code>toArray</code>是将原Collection直接copy了一份。（1w）</p><p>对于遍历来说，我一般主要是干什么？一般就是想统计一下符合条件的。</p><ul><li>耗费时间，需要将原有collection全部拷贝一遍</li><li>耗费空间，两倍的collection占有空间</li><li>后续使用完毕，还需要gc</li></ul><p>我们一般遍历一个集合，有时候是想统计个数，有时候是想找出符合条件的，如果每次都复制一次，不仅耗费时间，而且使用完后，还需要<code>gc</code>。</p><p>在处理大量数据时，使用<code>toArray</code>方法需要谨慎考虑，因为它会将集合中的所有元素都复制到新的数组中，占用大量的内存空间。如果数据量非常大，可能会导致内存溢出的风险。</p><p>在处理大量数据时，建议使用迭代器进行遍历，而不是将集合转换为数组。迭代器可以逐个访问集合中的元素，并且不需要将所有元素都复制到新的数组中，从而减少内存的占用。</p><h3 id="iterator方法" tabindex="-1"><a class="header-anchor" href="#iterator方法" aria-hidden="true">#</a> <code>iterator</code>方法</h3><p>比如对于一个数组来说，我需要遍历数组。</p><p>其实迭代器的思路很简单。 如果是大家来遍历数组，会怎样操作？</p><ul><li>复制一遍</li><li>直接使用一个int来遍历。</li></ul><p><strong>迭代器</strong>（iterator），有时又称<strong>光标</strong>（cursor）是程序设计的软件设计模式，可在容器对象（container，例如链表或数组）上遍历的接口，设计人员无需关心容器对象的内存分配的实现细节。</p><p><span style="color:red;background:yellow;"><strong>是用来遍历这个容器对象所有数据的接口。</strong></span></p><p>迭代器相当于只保留了一个标识，标识我可以怎么拿到这个数据，不copy数据。所有操作的数据都是针对的原有的Collection。</p><p>比如对于一个集合来说（底层实现：数组）。我想遍历这个集合。 下标</p><p>集合来说（底层实现：链表）。我想遍历这个链表。 指针就可以。</p><p>好处是什么？</p><p><code>Iterator</code>是个接口，接口只定义规范，我们获取到了iterator，就可以使用这个对象对数据进行遍历。把接口与实现隔离。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>//    boolean hasNext(): 是否有下一个元素
//    E next()： 获取下一个元素
//    void remove()： 删除刚刚遍历过的元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+A+'" alt="image-20230609150654612" tabindex="0" loading="lazy"><figcaption>image-20230609150654612</figcaption></figure><p>比如Collection底层有的是数组，有的是链表。</p><p>数组的Iterator里面维护的是下标</p><p>链表的Iterator里面维护的是指针。</p><p>所有的具体实现都交给具体的子类。接口只定义一个规范。</p><figure><img src="'+h+'" alt="image-20230223193627276" tabindex="0" loading="lazy"><figcaption>image-20230223193627276</figcaption></figure><figure><img src="'+y+`" alt="image-20230223193847526" tabindex="0" loading="lazy"><figcaption>image-20230223193847526</figcaption></figure><p><strong>迭代器是个游标，它遍历的时候，被别的线程，把原集合中加了几个元素，减了几个元素，那这时候这次遍历的意义大吗？</strong></p><p><code>JDK</code>采用了存储一个值的方式，去保证在迭代器使用过程中，原有的集合不被修改（当前线程、其他线程）。</p><p>在Collection内部，有一个<code>modCount</code>,用来标识结构变化的次数(get/contains 这种查询不叫结构变化)</p><p>生成迭代器的时候，存储这个<code>expectedModCount=modCount</code>,在调用 next remove时候，会检查</p><p>使用迭代器过程中，如果原结构发生了变化，会报并发修改异常<span style="color:yellow;background:red;"><strong>（ConcurrentModificationException）</strong></span>。</p><p>如果见到了，需要检查，是不是在迭代器使用过程中，修改了原有集合。</p><p>迭代器怎样使用</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>//    boolean hasNext(): 是否有下一个元素
//    E next()： 获取下一个元素
//    void remove()： 删除刚刚遍历过的元素

    @Test
    public void iteratorDemo1() {
        Collection&lt;String&gt; collection = new ArrayList&lt;&gt;();
        collection.add(&quot;zs&quot;);
        collection.add(&quot;ls&quot;);
        collection.add(&quot;wu&quot;);

        // 现有collection里面有 三个元素。 [zs, ls, wu]
        System.out.println(collection);

        // 调用iterator()方法，生成一个迭代器。迭代器本身不存储数据。所以它操作的数据都是原有集合的
        Iterator&lt;String&gt; iterator = collection.iterator();

        // 现在的迭代器和数据 示意图：
        //  数据：   [     zs           ls           wu   ]
        //  迭代器位置： |

        // 迭代器后是否有元素。
        System.out.println(iterator.hasNext());

        // 将指针往后挪动，并返回刚刚经过的元素
        String next = iterator.next();
        System.out.println(next);
        
        // 现在的迭代器和数据 示意图：
        //  数据：   [     zs           ls           wu   ]
        //  迭代器位置： ------- |
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),W=t(`<p>不要在迭代器迭代过程中，去修改原集合。要不就是在迭代器生成之前，要不就在迭代器使用完成之后，再去修改原有集合。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>    Collection&lt;String&gt; collection = new ArrayList&lt;&gt;();

    collection.add(&quot;zs&quot;);
    collection.add(&quot;ls&quot;);
    collection.add(&quot;wu&quot;);
	collection.add(&quot;zs&quot;);

	// ========================= 这个位置之前叫做迭代器生成之前 =========================
    Iterator&lt;String&gt; iterator = collection.iterator();

    while (iterator.hasNext()) {
       // 不能边使用，边修改原有集合。
      // collection.remove(&quot;zs&quot;);

      String next = iterator.next();
      System.out.println(next);
    }

	// ========================= 这个位置之前叫做迭代器生成之后 =========================

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> <code>foreach</code></h2><p>工作中一般使用<code>foreach</code>居多。底层也是iterator。</p><p>所以需要注意，在<code>foreach</code>中，不要去改变Collection的结构。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>Collection&lt;String&gt; collection = new ArrayList&lt;&gt;();

collection.add(&quot;zs&quot;);
collection.add(&quot;ls&quot;);
for (String s : collection) {
    System.out.println(s);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),G=t(`<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 1.存储一组学生。包括 姓名 年龄，总分，入学日期
// 2.找出总分最高的学生？
// 3.找出总分最低的学生
// 4.求平均分
// 5.删除低于平均分的学生
// 6.找出2年内入学的学生。
// 7.需要删除叫张三的学生
// 8.删除年龄小于18的学生
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R=t(`<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 存储一组订单数据。订单的信息包括，订单号，订单金额，订单时间，订单状态(未付款、已付款、已发货、已评价)，订单更新时间
// 新建5条订单放入 
// 2.找出下单时间最早的订单，并打印
// 3.找出订单状态是已付款的
// 4.找出订单金额超过200的，并且订单状态是已发货

if(order.getMonecy() &gt; 200 &amp;&amp; SHIPPED.equals(order.getStatus()))

// 思考一下，这些条件怎么传？

一定要注意： 命名的问题和代码抽方法的问题。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取到一段描述后，需要掌握以下能力。将描述转化为代码的能力。</p><p><span style="color:red;background:yellow;"><strong>总结</strong></span></p><p>怎样去遍历Collection接口</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 使用 iterator  
Collection&lt;String&gt; collection = new ArrayList&lt;&gt;();

collection.add(&quot;zs&quot;);
collection.add(&quot;ls&quot;);
collection.add(&quot;wu&quot;);

// 使用的时候，先生成一个迭代器
Iterator&lt;String&gt; iterator = collection.iterator();

while (iterator.hasNext()) {
    String next = iterator.next();
    System.out.println(next);
}


// 使用foreach
for (String next : collection) {
    System.out.println(next);
}

String[] strings = collection.toArray(new String[0]);
// 数组的foreach 底层就是fori
for (String string : strings) {
    System.out.println(string);
}

// 三种 迭代器，foreach，toArray
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何删除Collection中所有的zs和ls数据？</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 遍历，删除
// 1.方式1  
// 创建一个新的集合；
// 遍历原有集合。
//		判断。是否 zs  ls ; 是的话，添加到新集合
// removeAll()
// 遍历新集合 --》  remove()

// 2.方式2
// 迭代器
// 创建一个迭代器。遍历这个迭代器(while hasNext() next() )
// 判断， 是不是zs  或者 ls 。 是的话，remove  iterator.remove()
// 切记，不能通过原有集合的remove()


// 使用一个集合类，把所有的zs 和ls 都存起来。然后遍历集合类，再调用原有集合类的remove方法

// 使用一个集合类，存储 zs  ls  调用removeAll方法

// 使用迭代器的删除方法

// Collection&lt;String&gt;  
// Collection&lt;Student&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历Collection接口的时候，有什么需要注意的事项</p><p><span style="color:yellow;background:red;"><strong>注意并发修改异常。出现的原因，以及解决的办法。</strong></span></p><h1 id="list接口" tabindex="-1"><a class="header-anchor" href="#list接口" aria-hidden="true">#</a> <code>List</code>接口</h1><img src="`+f+`"><p>学习目标</p><ul><li><span style="color:red;background:yellow;"><strong>重点掌握List接口的特点，及其使用场景</strong></span>（存储数据有序，允许存储重复元素，允许存储null。）</li><li>掌握List接口特殊的方法。（相对Collection，新增了很多下标的操作。 add(int index, E e) remove(int index), set(int index, E e ), get(index) indexOf lastIndexOf）</li><li>掌握List接口的特有遍历方式。（iterator foreach toArray） fori</li><li>ArrayList的底层结构。初始化容量，扩容策略.(数组， 10， 1.5倍)</li><li>LinkedList的底层结构(双向链表)。</li><li><span style="color:red;background:yellow;"><strong>（面试）Vector和ArrayList的区别？为什么被替换掉</strong></span></li><li>Stack是什么？在Java中想使用栈，应该怎么创建（Deque）</li></ul><p>一定要注意： 面试官如果和你强调 ArrayList和LinkedList的区别.你一定要知道，他是在问你数组和链表的区别。</p><p>使用的时候，一般的使用方式</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 一般这样用
List&lt;String&gt; list = new ArrayList&lt;&gt;();

// 不会这样用
Collection&lt;String&gt; collection = new ArrayList&lt;&gt;();
ArrayList&lt;String&gt; collection = new ArrayList&lt;&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特点-重点" tabindex="-1"><a class="header-anchor" href="#特点-重点" aria-hidden="true">#</a> 特点(重点)</h2><ol><li>List是Collection的子接口。（父子继承关系，想对原有接口进行增强。）</li><li>数据结构表现为线性表。</li><li>存储数据有序。（存储进去的顺序和读取出来的顺序。 完全一致或者完全相反）</li><li>可以存储重复元素</li><li>可以存储null</li></ol>`,18),X=t('<p>线性表，全名为线性存储结构。使用线性表存储数据的方式可以这样理解，即“把所有数据用一根线儿串起来，再存储到物理空间中”。</p><figure><img src="'+C+`" alt="image-20230130194449819" tabindex="0" loading="lazy"><figcaption>image-20230130194449819</figcaption></figure><p>就是一对一的数据结构。一个数据元素，除了第一个元素和最后一个元素，都只有一个前驱一个后继。</p><p><span style="color:yellow;background:red;"><strong>一定要掌握。</strong></span>数组的插入数据，删除数据流程，查找；链表的插入数据，删除数据流程，查找。</p><p>是一个超级减分项。</p><h2 id="list的api" tabindex="-1"><a class="header-anchor" href="#list的api" aria-hidden="true">#</a> <code>List</code>的<code>API</code></h2><p><code>List</code>是<code>Collection</code>的子接口。所有肯定有<code>Collection</code>的所有方法。</p><p><code>Collection</code>的API我们已经学习过，所以直接学习<code>List</code>所特有的。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>//  List是线性表的实现，所以它相对于Collection增加了很多下标相关的API
//    void add(int index, E element)： 在指定位置添加元素。list添加的位置，只能在[0,length之间]
//    boolean addAll(int index, Collection&lt;? extends E&gt; c)： 在指定位置添加一个Collection的所有元素
//    E remove(int index)：删除指定下标的元素，只能删除下标的位置[0, lenth-1]。返回的是删除的元素
//    E set(int index, E element)： 设置指定下标的元素为element.   array[index] = element; 
//    E get(int index)： 获取指定下标元素
//    int indexOf(Object o)： 获取元素首次出现的下标。如果元素不存在。 返回的是-1
//    int lastIndexOf(Object o)： 获取元素最后一次出现的下标。

//    ListIterator&lt;E&gt; listIterator()： 
//    ListIterator&lt;E&gt; listIterator(int index)
//    List&lt;E&gt; subList(int fromIndex, int toIndex)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;background:yellow;"><strong>需要注意的东西</strong></span></p><ul><li>画图，理清操作的是哪个位置。 <ul><li>add（1， “666”）</li><li>add(5,&quot;888&quot;)</li><li>add(6，“777”)</li></ul></li></ul><figure><img src="`+L+'" alt="image-20220922161951139" tabindex="0" loading="lazy"><figcaption>image-20220922161951139</figcaption></figure><h3 id="listiterator方法" tabindex="-1"><a class="header-anchor" href="#listiterator方法" aria-hidden="true">#</a> <code>listIterator</code>方法</h3><p>返回一个<code>ListIterator</code>的对象。这个与迭代器类似，只是可以前后移动，可以返回index。</p>',14),U=n("strong",null,"所以传入的index应该在什么范围？",-1),K=t(`<p>[0,length]</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ListIterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">//boolean hasNext() : 判断后面是否还有元素可以遍历</span>
        <span class="token comment">//E next()    : 向后遍历</span>
        <span class="token comment">//void remove()   : 删除刚刚遍历的数据</span>

        <span class="token comment">//boolean hasPrevious()    : 向前是否可以遍历</span>
        <span class="token comment">//E previous() : 向前遍历</span>

        <span class="token comment">//int nextIndex() : 向后遍历的数据的下标</span>
        <span class="token comment">//int previousIndex() :  向前遍历的下标</span>
        <span class="token comment">//void add(E e) : 添加一个数据到当前遍历位置,并且把指针往后挪一下</span>
        <span class="token comment">//void set(E e) : 修改刚刚遍历过的元素位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二进制的计算</p><h3 id="sublist方法" tabindex="-1"><a class="header-anchor" href="#sublist方法" aria-hidden="true">#</a> <code>subList</code>方法</h3><p>看名字，会误认为是： 子/截取 生成一个新的List</p><p>但是其实是，返回列表中指定的 <code>fromIndex</code>（包括 ）和 <code>toIndex</code>（不包括）之间的部分<strong>视图</strong>。</p><p><span style="color:red;background:yellow;"><strong>视图：</strong></span>只是原表的一个映射，并没有把数据复制一份。它和<code>iterator</code>很相似，只是维护了几个标记。操作<code>subList</code>产生的对象，会影响原来的对象。</p><p>相当于，只是一个看起来和原有数组一致，可以把它理解为镜子。</p><blockquote><p>注意：它也会存在并发修改的问题。当生成了<code>subList</code>之后，如果再修改原集合。再访问<code>subList</code>的对象，会报错。</p></blockquote><p>注意一些坑：</p><ul><li>注意<code>oom</code>，因为<code>subList</code>只是一个视图，它保留了原始的数组。所以如果错误估计，可能会<code>oom</code></li><li><img src="`+x+`" alt="image-20230223200636090" tabindex="0" loading="lazy"><figcaption>image-20230223200636090</figcaption></li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>怎么出现oom，设置小堆内存。切记不要直接跑，可能会导致电脑死机
IDEA中，可以针对当前代码，设置最大的运行内存
Edit Configurations --&gt; Add VM options --&gt;
-Xmx500m -Xms500m
    
  -Xmx500m 最大堆内存 500m
  -Xms500m 初始堆内存 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><span style="color:red;background:yellow;"><strong>注意并发修改异常</strong></span></li></ul><h2 id="arraylist" tabindex="-1"><a class="header-anchor" href="#arraylist" aria-hidden="true">#</a> <span style="color:yellow;background:red;"><strong>ArrayList</strong></span></h2><p>底层是数组。JDK在实现ArrayList的时候，和我们自己写的，区别不大。怎么实现的添加。删除。</p><p>大部分的东西，在List接口里面已经讲了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// 今后我们写代码的时候。  
// Collection    List   ArrayList
// 在工作中，是采用哪种方式写得多？   
Collection&lt;String&gt; collection = new ArrayList&lt;&gt;();  // 第一种，尽量不要使用。因为Collection和ArrayList还隔了一层。 
List&lt;String&gt; list = new ArrayList&lt;&gt;();   // 在工作过程中，最常用的一种写法。
ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();  // 也有人用。但不建议。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ArrayList是Java集合框架中的一种，它实现了List接口，可以动态地添加、删除和修改元素。<span style="color:red;background:yellow;"><strong>与传统的数组不同，ArrayList的大小可以根据需要自动增长，因此非常适用于需要频繁添加或删除元素的场景。</strong></span></p><p><span style="color:yellow;background:red;"><strong>ArrayList内部实际上是一个动态数组，它可以存储任意类型的对象。</strong></span>当创建一个ArrayList时，它的初始容量是10个元素，当元素数量超过容量时，ArrayList会自动增加容量，以便能够容纳更多的元素。</p><p>ArrayList提供了一系列方法，可以方便地操作其中的元素，例如add()方法可以在末尾添加元素，remove()方法可以删除指定位置的元素，get()方法可以获取指定位置的元素，set()方法可以修改指定位置的元素等等。</p><figure><img src="`+_+`" alt="image-20230417164529031" tabindex="0" loading="lazy"><figcaption>image-20230417164529031</figcaption></figure><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h3><ol><li>ArrayList是List的实现</li><li>ArrayList数据结构表现为线性表</li><li><span style="color:red;background:yellow;"><strong>底层结构是数组</strong></span></li><li>存储元素，有序</li><li>可以存储重复元素</li><li>可以存储null</li></ol><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><p>怎么创建这个类的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//    ArrayList() 构造一个初始容量为 10 的空列表。</span>
<span class="token comment">//    ArrayList(Collection&lt;? extends E&gt; c)：构造一个包含指定 collection 的元素的列表，这些元素是按照该 collection 的迭代器返回它们的顺序排列的。</span>
<span class="token comment">//    ArrayList(int initialCapacity)：构造一个具有指定初始容量的空列表。 </span>

<span class="token comment">// List接口。 接口没有构造方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arraylist的api" tabindex="-1"><a class="header-anchor" href="#arraylist的api" aria-hidden="true">#</a> <code>ArrayList</code>的<code>API</code></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//    Object clone()</span>
<span class="token comment">//    返回此 ArrayList 实例的浅表副本。</span>
<span class="token comment">//    void ensureCapacity(int minCapacity)</span>
<span class="token comment">//    如有必要，增加此 ArrayList 实例的容量，以确保它至少能够容纳最小容量参数所指定的元素数。</span>
<span class="token comment">//    void trimToSize()</span>
<span class="token comment">//    将此 ArrayList 实例的容量调整为列表的当前大小。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linkedlist" tabindex="-1"><a class="header-anchor" href="#linkedlist" aria-hidden="true">#</a> <code>LinkedList</code></h2><p>双向链表。</p><p>Queue 队列</p><p>Deque 双端队列</p><p>LinkedList是Java集合框架中的一种，它实现了List和Deque接口，是一个双向链表。与ArrayList不同的是，LinkedList在内部并不使用数组来存储元素，<span style="color:red;background:yellow;"><strong>而是使用一个链表来存储元素，因此可以高效地进行插入和删除操作。</strong></span></p><p><span style="color:red;background:yellow;"><strong>LinkedList的每个节点都包含了一个指向前一个节点和后一个节点的指针，因此可以方便地进行双向遍历。</strong></span>在向LinkedList中添加元素时，只需要创建一个新的节点，并将其插入到链表中即可。同样，在删除元素时，只需要将该元素的前后节点的指针重新指向即可，不需要像ArrayList一样将其后面的元素全部向前移动。</p><p>LinkedList提供了一系列方法，可以方便地操作其中的元素。例如add()方法可以在指定位置添加元素，remove()方法可以删除指定位置的元素，get()方法可以获取指定位置的元素，set()方法可以修改指定位置的元素等等。除此之外，LinkedList还提供了一些特殊的方法，例如offer()和poll()方法用于在链表的首尾添加和删除元素，push()和pop()方法用于在链表的首部添加和删除元素等等。</p><h3 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2" aria-hidden="true">#</a> 特点</h3><ol><li>LinkedList是List的子实现</li><li>LinkedList数据结构表现为线性表</li><li>LinkedList底层结构是双向链表</li><li>存储元素有序</li><li>可以存储null</li><li>可以存储重复元素</li></ol><h3 id="linkedlist的构造方法" tabindex="-1"><a class="header-anchor" href="#linkedlist的构造方法" aria-hidden="true">#</a> <code>LinkedList</code>的构造方法</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>//LinkedList() 
//          构造一个空列表。 
//LinkedList(Collection&lt;? extends E&gt; c) 
//          构造一个包含指定 collection 中的元素的列表，这些元素按其 collection 的迭代器返回的顺序排列。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkedlist的api" tabindex="-1"><a class="header-anchor" href="#linkedlist的api" aria-hidden="true">#</a> <code>LinkedList</code>的<code>API</code></h3><p>LinkedList里面的API分两类。第一类，是List接口继承过来的； 第二类，是Deque接口。</p><p>不需要大家死记硬背。 考理解去记忆。 只要知道里面有这么个方法，完成这个事情，有什么注意事项。 如果这个API忘了，用idea点一下。</p><p>队列：先进先出，从队尾进，队头出。</p><p>双端队列：队头和队尾都可以进出。</p><p>栈：先进后出。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//        来自Collection</span>
<span class="token comment">//        来自List的</span>
<span class="token comment">//    ----------------------------来自普通队列</span>
<span class="token comment">//    boolean offer (E e)</span>
<span class="token comment">//    将指定元素添加到此列表的末尾（最后一个元素）。</span>
<span class="token comment">//    E peek () 获取但不移除此列表的头（第一个元素）。</span>
<span class="token comment">//    E poll () 获取并移除此列表的头（第一个元素）</span>

<span class="token comment">//    ---------------------------- 作为Stack的</span>
<span class="token comment">//        E pop()： 从此列表所表示的堆栈处弹出一个元素。</span>
<span class="token comment">//        void push(E e): 将元素推入此列表所表示的堆栈。</span>

<span class="token comment">//    ---------------------------- 作为双端队列</span>
<span class="token comment">//    boolean offerFirst (E e)</span>
<span class="token comment">//    在此列表的开头插入指定的元素。</span>
<span class="token comment">//    boolean offerLast (E e)</span>
<span class="token comment">//    在此列表末尾插入指定的元素。</span>
<span class="token comment">//</span>
<span class="token comment">//    E peekFirst () 获取但不移除此列表的第一个元素；如果此列表为空，则返回 null。</span>
<span class="token comment">//    E peekLast () 获取但不移除此列表的最后一个元素；如果此列表为空，则返回 null。</span>
<span class="token comment">//</span>
<span class="token comment">//    E pollFirst () 获取并移除此列表的第一个元素；如果此列表为空，则返回 null。</span>
<span class="token comment">//    E pollLast () 获取并移除此列表的最后一个元素；如果此列表为空，则返回 null。</span>

<span class="token comment">//    ----------------------------以下的API了解即可</span>
<span class="token comment">//    void addFirst (E e)： 将指定元素插入此列表的开头。</span>
<span class="token comment">//    void addLast (E e)： 将指定元素添加到此列表的结尾。</span>
<span class="token comment">//    E removeFirst () 移除并返回此列表的第一个元素。</span>
<span class="token comment">//    E removeLast () 移除并返回此列表的最后一个元素</span>
<span class="token comment">//    E getFirst () 返回此列表的第一个元素。</span>
<span class="token comment">//    E getLast () 返回此列表的最后一个元素。</span>
<span class="token comment">//    boolean removeFirstOccurrence (Object o)</span>
<span class="token comment">//    从此列表中移除第一次出现的指定元素（从头部到尾部遍历列表时）。</span>
<span class="token comment">//    boolean removeLastOccurrence (Object o)</span>
<span class="token comment">//    从此列表中移除最后一次出现的指定元素（从头部到尾部遍历列表时）。</span>
<span class="token comment">//    Iterator&lt;E&gt; descendingIterator () 返回以逆向顺序在此双端队列的元素上进行迭代的迭代器。</span>
<span class="token comment">//    E element () 获取但不移除此列表的头（第一个元素）。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),Z=t('<p>查找也需要时间，所以算起来和<code>ArrayList</code>类似。一般需要使用，直接使用<code>ArrayList</code>。除非在极个别情况下，才会用LinkedList。</p><p><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();</code></p><figure><img src="https://pic1.zhimg.com/80/v2-515aadabcf6dcf6eff4dc5aa7b427fb0_720w.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> <code>Vector</code></h2><ol><li>Vector是List的子实现</li><li>Vector的数据结构表现是线性表</li><li>底层结构是数组</li><li>存储的数据有序，可重复，可存储null。</li><li>线程安全。</li></ol><p>Vector是JDK1.0出现，ArrayList是JDK1.2出现。</p><p><span style="color:red;background:yellow;">**为什么被弃用 **</span></p><p>Vector为啥被替代。因为效率低，因为它所有的方法都有锁。</p><p><span style="color:red;background:yellow;"><strong>效率低，</strong></span>在所有的接口上都加了<code>synchronized</code>关键字。线程安全是没问题了，但是效率却有问题。因为绝大部分都不涉及到多线程情况，所以<code>jdk1.2</code>采用了<code>ArrayList</code>来替代<code>Vector</code></p><figure><img src="'+E+'" alt="image-20230130201817297" tabindex="0" loading="lazy"><figcaption>image-20230130201817297</figcaption></figure><figure><img src="'+S+'" alt="image-20230130201836688" tabindex="0" loading="lazy"><figcaption>image-20230130201836688</figcaption></figure><p><span style="color:yellow;background:red;"><strong>在工作中，禁止使用Vector</strong></span>，面试专用。</p><p>面试一般会怎么问： 1.同学，了不了解Vector。2.是否了解ArrayList和Vector的区别。3.是否了解最开始的一个线程安全的List。</p><p>一般这样答：</p><p>1.Vector是LIst的子实现。 List的底层是线性表。</p><p>2.存储数据是否有序，是否允许存储重复元素，是否允许存储null</p><p>3.线程安全问题。Vector是线程安全的，ArrayList是线程不安全的。</p><p>4.ArrayList是在JDK1.2出现，出现就是为了替代Vector。所以写代码的时候，我们不用Vector.</p><p>不要死记硬背面经。 八股文。一定要带着自己的理解去背，去答。</p><p>补充： <strong>什么叫线程安全问题？</strong></p><p>当多个线程同时对一个变量进行操作时，结果的预期与单线程下是一致的。这就是线程安全的。</p><p>比如多个线程对i进行操作，i初始值是0，有5个线程，每个线程累加10000次。最终结果应该是50000。 但真实情况不是这样的，这就是线程安全问题。</p><h2 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> <code>Stack</code></h2><ol><li>Stack是Vector的子实现</li><li>栈，是先进后出的数据容器。但是不建议使用这个来完成，效率是大问题。使用Deque来替代Stack --》 见jdk源码</li></ol><figure><img src="'+q+'" alt="image-20230130201740973" tabindex="0" loading="lazy"><figcaption>image-20230130201740973</figcaption></figure><p>在Java中，要用栈，能不能使用Stack这个类？ 不要用。因为在Stack类的上面，明确告诉你了，要用栈，使用Deque。</p><h1 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h1><p>学习目标</p><ul><li><p>掌握Queue的结构，以及Queue是什么。（操作受限的线性表）</p></li><li><p>了解Queue两组增删查API及区别（add remove element | offer poll peek 极端情况下表现不一致）</p></li><li><p>了解Deque的结构（offerFirst offerLast addFirst addLast .使用API成组使用）</p></li><li><p>了解ArrayDeque的循环数组，是什么，以及为什么使用这种形式。</p><ul><li>ArrayDeque是一个循环数组。底层是一个数组，使用两个int值来代表头和尾。避免从队列中获取数据的时候，频繁挪动数据，使用int值，就可以只操作int值，来模拟头和尾，提高了效率。</li></ul></li><li><p>了解ArrayDeque的初始化容量及扩容策略。 如果传入一个非2的幂次方，它是怎么把它变成2的幂次方的。</p></li><li><p>了解BlockingQueue是什么。</p></li></ul><figure><img src="'+w+'" alt="集合类" tabindex="0" loading="lazy"><figcaption>集合类</figcaption></figure><p><span style="color:red;background:yellow;"><strong>Queue：</strong></span>在Java中，队列（Queue）是一种数据结构，用于存储元素并支持在队列的末尾添加元素和从队列的头部移除元素。队列的工作方式类似于排队等待服务的过程。</p><p>Java中的队列通常是先进先出（FIFO）的数据结构，这意味着最先添加的元素将最先被移除。Java中的队列接口（java.util.Queue）定义了队列的基本操作，如添加元素、移除元素、获取队列头部元素等。</p><figure><img src="'+o+`" alt="image-20230131194559788" tabindex="0" loading="lazy"><figcaption>image-20230131194559788</figcaption></figure><p>只能从队头出队列，从队尾进队列。</p><h2 id="特点-3" tabindex="-1"><a class="header-anchor" href="#特点-3" aria-hidden="true">#</a> 特点</h2><ol><li>Queue是Collection的子接口。</li><li>数据结构表现为：队列。一定要知道什么是队列。</li><li>存储元素有序</li><li>存储元素可重复</li><li>不能存储null（除了LinkedList子实现）</li></ol><h2 id="api-1" tabindex="-1"><a class="header-anchor" href="#api-1" aria-hidden="true">#</a> API</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//boolean add(E e): 将指定的元素插入此队列（如果立即可行且不会违反容量限制），在成功时返回 true，如果当前没有可用的空间，则抛出 IllegalStateException。</span>
<span class="token comment">//E remove():获取并移除此队列的头。</span>
<span class="token comment">//E element() :获取，但是不移除此队列的头。</span>

<span class="token comment">//boolean offer(E e):将指定的元素插入此队列（如果立即可行且不会违反容量限制），当使用有容量限制的队列时，此方法通常要优于 add(E)，后者可能无法插入元素，而只是抛出一个异常。</span>
<span class="token comment">//E poll():获取并移除此队列的头，如果此队列为空，则返回 null。</span>
<span class="token comment">//E peek(): 获取但不移除此队列的头；如果此队列为空，则返回 null。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在极端情况下，两组API的表现不一致。极端情况指的是</p><ul><li>插入的时候，队列满了</li><li>删除或者获取的时候，队列空了。</li></ul>`,40),Y=n("thead",null,[n("tr",null,[n("th"),n("th",null,[n("em",null,"抛出异常")]),n("th",null,[n("em",null,"返回特殊值")])])],-1),$=n("td",null,[n("strong",null,"插入")],-1),nn=n("code",null,"add(e)",-1),sn=n("code",null,"offer(e)",-1),an=n("td",null,[n("strong",null,"移除")],-1),en=n("code",null,"remove()",-1),ln=n("code",null,"poll()",-1),tn=n("td",null,[n("strong",null,"检查")],-1),cn=n("code",null,"element()",-1),dn=n("code",null,"peek()",-1),on=t('<h2 id="deque" tabindex="-1"><a class="header-anchor" href="#deque" aria-hidden="true">#</a> Deque</h2><p>双端队列（Deque），是一种可以在队列的两端添加或删除元素的数据结构。</p><p>双端队列支持在队列的头部和尾部进行插入、删除和获取元素的操作，<span style="color:red;background:yellow;"><strong>因此它可以同时用作栈和队列</strong></span>，是一种比较灵活的数据结构。在Java中，Deque接口提供了双端队列的实现，具有以下特点：</p><ol><li>可以在队列的头部或尾部添加或删除元素。</li><li>可以获取队列头部或尾部的元素。</li><li>可以用作栈或队列来进行数据操作。</li></ol><figure><img src="'+o+`" alt="image-20230131194559788" tabindex="0" loading="lazy"><figcaption>image-20230131194559788</figcaption></figure><p><span style="color:red;background:yellow;"><strong>从队头可以进出，从队尾也可以进出。</strong></span></p><h3 id="特点-4" tabindex="-1"><a class="header-anchor" href="#特点-4" aria-hidden="true">#</a> 特点</h3><ol><li>Deque是Queue的子接口</li><li>数据结构表现：队列，栈，双端队列</li><li>存储元素有序</li><li>可存储重复元素</li><li>不能存储null（LinkedList除外）</li></ol><h3 id="api-2" tabindex="-1"><a class="header-anchor" href="#api-2" aria-hidden="true">#</a> API</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// ------------- 作为Queue的
//        E peek()： 获取队头元素，但不移除它
//        E poll()：从队头移除元素
//        boolean offer(E e)： 添加一个元素到队尾

// ------------- 作为Stack的
//        E pop()： 从此列表所表示的堆栈处弹出一个元素。
//        void push(E e): 将元素推入此列表所表示的堆栈。

// ------------- 作为双端队列
//        boolean offerFirst(E e)：  从第一个位置插入指定元素
//        boolean offerLast(E e)： 从最后一个位置插入指定元素
//        E peekFirst()： 获取但是不移除第一个元素，如果列表为空，返回null
//        E peekLast()： 获取但是不移除最后一个元素，如果列表为空，返回null
//        E pollFirst()： 从第一个位置移除元素
//        E pollLast()： 从最后一个位置移除元素，如果列表为空，返回null

// -------------- 作为普通List的
//    boolean add(E e):将指定元素添加到此列表的结尾。
//    E remove()：获取并移除此列表的头（第一个元素）。

//        void addFirst(E e): 将指定元素插入此列表的开头。
//        void addLast(E e): 将指定元素添加到此列表的结尾。
//        E getFirst()： 返回此列表的第一个元素。
//        E getLast(): 返回此列表的最后一个元素。
//        E removeFirst(): 移除并返回此列表的第一个元素。
//        E removeLast()： 移除并返回此列表的最后一个元素。

// 这个API，大家觉得应不应该出现在Deque这个接口里面。 
//        boolean removeFirstOccurrence(Object o)： 从此列表中移除第一次出现的指定元素
//        boolean removeLastOccurrence(Object o)： 从列表中移除最后一次出现的指定元素
//        Iterator&lt;E&gt; descendingIterator()：获取一个倒序的迭代器
//        E element()：获取元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),rn=n("thead",null,[n("tr",null,[n("th"),n("th",null,[n("strong",null,"第一个元素（头部）")]),n("th",null,[n("strong",null,"第一个元素（头部）")]),n("th",null,[n("strong",null,"最后一个元素（尾部）")]),n("th",null,[n("strong",null,"最后一个元素（尾部）")])])],-1),pn=n("tr",null,[n("td"),n("td",null,[n("em",null,"抛出异常")]),n("td",null,[n("em",null,"特殊值")]),n("td",null,[n("em",null,"抛出异常")]),n("td",null,[n("em",null,"特殊值")])],-1),un=n("td",null,[n("strong",null,"插入")],-1),vn=n("code",null,"addFirst(e)",-1),mn=n("code",null,"offerFirst(e)",-1),bn=n("code",null,"addLast(e)",-1),gn=n("code",null,"offerLast(e)",-1),kn=n("td",null,[n("strong",null,"移除")],-1),An=n("code",null,"removeFirst()",-1),hn=n("code",null,"pollFirst()",-1),yn=n("code",null,"removeLast()",-1),fn=n("code",null,"pollLast()",-1),Cn=n("td",null,[n("strong",null,"获取")],-1),Ln=n("code",null,"getFirst()",-1),xn=n("code",null,"peekFirst()",-1),_n=n("code",null,"getLast()",-1),En=n("code",null,"peekLast()",-1),Sn=n("h2",{id:"arraydeque",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#arraydeque","aria-hidden":"true"},"#"),e(" ArrayDeque")],-1),qn=n("p",null,"循环数组（Cyclic Array），也称为环形数组，是一种数据结构，是数组的一种特殊形式。在循环数组中，数组的最后一个元素与第一个元素相邻，形成了一个环，因此可以通过数组下标进行循环遍历。",-1),wn=n("p",null,"在循环数组中，每次增加数组下标时，需要考虑到下标越界的情况。一般来说，可以将下标对数组长度取模，实现在下标增加到数组最后一个元素时，返回到数组的第一个元素。同样地，当下标减小到数组的第一个元素时，可以通过将下标加上数组长度来返回到最后一个元素。",-1),Vn=n("p",null,"循环数组在实际应用中具有一定的优势，例如在循环队列、循环缓冲区等场景中，循环数组可以有效地实现元素的循环存储和遍历。同时，循环数组的空间利用率也相对较高，因为数组的最后一个元素可以直接连接到第一个元素，不需要额外的空间进行维护。",-1),zn=n("p",null,"使用两个int值来存储头和尾的位置，来避免每一次出队列都需要让所有数据都挪动一遍，提高效率。",-1),jn=n("h3",{id:"特点-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#特点-5","aria-hidden":"true"},"#"),e(" 特点")],-1),Jn=n("li",null,"ArrayDeque是Deque的子实现",-1),In=n("li",null,"数据结构表现：队列，栈，双端队列",-1),Dn=n("strong",null,"循环数组",-1),Tn=n("li",null,"存储元素有序",-1),Hn=n("li",null,"存储元素可重复",-1),Qn=n("li",null,"不可存储null",-1),On=t(`<h3 id="构造方法-1" tabindex="-1"><a class="header-anchor" href="#构造方法-1" aria-hidden="true">#</a> 构造方法</h3><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>ArrayDeque() 
          构造一个初始容量能够容纳 16 个元素的空数组双端队列。  扩容机制 *2 
ArrayDeque(Collection&lt;? extends E&gt; c) 
          构造一个包含指定 collection 的元素的双端队列，这些元素按 collection 的迭代器返回的顺序排列。 
ArrayDeque(int numElements) 
          构造一个初始容量能够容纳指定数量的元素的空数组双端队列。 
    
容量问题。如果传入的初始化容量小于8，则直接分配8个空间，如果传入的数字大于等于8，则直接找到(大于)数字的最近一个2的幂次方。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>一个结论： 
    如果b是2的幂次方,(2 4 8 )。 a%b = a&amp;(b-1)
    
    1053876 % 100 = 76 = (1000000 + 50000 + 3000 + 800 + 76) % 100 = 76 ： 方便理解这个过程、
    
    53 % 16 = (0011 0101) % (0001 0000) = (0011 0101) &amp; (0000 1111)
    a % b = a &amp; (b-1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>20586   %   100 
    = (20000 + 500 + 86) %  100 
    = 86
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>53 % 16 = 
    = 1111 0101  % 0001 0000
    = 1111 0101 &amp; 0000 1111
    = a % b = a &amp; (b-1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>循环数组。tail 的计算公式是 tail = (tail +1) % length</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>public void addLast(E e) {
    if (e == null)
        throw new NullPointerException();
    elements[tail] = e;
    // tail就是尾指针  head就是头指针。
    // 先思考一个问题： 什么时候会扩容。
    // (tail = (tail + 1) &amp; (elements.length - 1))  &lt;==&gt;   tail  = (tail + 1) % length
    if ( (tail = (tail + 1) &amp; (elements.length - 1)) == head)
        doubleCapacity();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),Pn=t(`<p>2的幂次方。 是类似于2的一次方，2的二次方，2的三次方。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>  10568 % 100 = (10000 + 500 + 68) % 100   = 0 + 0 + 68 = 68
      
 a % b = a &amp; (b-1)
53 % 16 = 0011 0101 % (0001 0000) = (0011 0101) &amp; (0000 1111) = (0000 0101)
      如果能理解更好，不能记住，先死记住。

b是2的幂次方。 a % b = a &amp; (b-1)
   如果不会推导，直接记死这个结论。
       
   53 % 16=
   00110101 = 0010 0000 + 0001 0000 + 0000 0101
   00010000
  =53&amp; (16-1)
   0011 0101     
  =0000 1111
        
    十进制： 10568 % 100 = (10000 + 500 + 68) % 100  
        
    b是2的幂次方。  2 --》 10
        4 --》 100
        8 --》 1000
        
        34 % 16 = 0010 0010 % 0001 0000
        0010 0010
        0001 0000
        
        0010 0010
       &amp;0000 1111
      
    例如 34 % 16= 0010 0010 % 0001 0000 = 0010 0010 &amp; (0000 1111) = 01000
      
      0010 0010
&amp;     0000 1111 
      0000 0010 = 2
      
    34%16 = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+V+`" alt="image-20230131200522855" tabindex="0" loading="lazy"><figcaption>image-20230131200522855</figcaption></figure><p><span style="color:red;background:yellow;"><strong>比如：</strong></span></p><p>24=0001 1000</p><p>32=0010 0000</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>24  --》 32（0010 0000）
32  --》64（0100 0000）

//                                     19
private static int calculateSize(int numElements) {

    // initialCapacity = 8；
	// int MIN_INITIAL_CAPACITY = 8;
    int initialCapacity = MIN_INITIAL_CAPACITY;
    // Find the best power of two to hold elements.
	//   19 &gt;= 8  成立的。
    if (numElements &gt;= initialCapacity) {
        
        // initialCapacity = 19
        initialCapacity = numElements;
        

        // a += 3;  ===&gt;    a = a+1
        // initialCapacity |= b;  ==&gt;   initialCapacity = initialCapacity | b
        
        // initialCapacity = 0001 0011
        // (initialCapacity &gt;&gt;&gt;  1)   = 0000 1001
        // initialCapacity |= (initialCapacity &gt;&gt;&gt;  1);
        // initialCapacity = initialCapacity | (initialCapacity &gt;&gt;&gt;  1)
        // 0001 0011  = initialCapacity
        // 0000 1001  = (initialCapacity &gt;&gt;&gt;  1)
        // 0001 1011
        
        initialCapacity |= (initialCapacity &gt;&gt;&gt;  1);
        
        // 0001 1011 = initialCapacity
        // (initialCapacity &gt;&gt;&gt;  2)  = 0000 0110
        // 0001 1011 = initialCapacity
        // 0000 0110 = (initialCapacity &gt;&gt;&gt;  2)
        // 0001 1111
        
        initialCapacity |= (initialCapacity &gt;&gt;&gt;  2);
        initialCapacity |= (initialCapacity &gt;&gt;&gt;  4);
        initialCapacity |= (initialCapacity &gt;&gt;&gt;  8);
        initialCapacity |= (initialCapacity &gt;&gt;&gt; 16);
        initialCapacity++;

        if (initialCapacity &lt; 0)   // Too many elements, must back off
            initialCapacity &gt;&gt;&gt;= 1;// Good luck allocating 2 ^ 30 elements
    }
    return initialCapacity;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>24  --》 32（0010 0000）
32  --》64（0100 0000）

// 找到大于这个值的最小2的幂次方。 
//                                     32
private static int calculateSize(int numElements) {
	// initialCapacity = 8
    int initialCapacity = MIN_INITIAL_CAPACITY;
    
    if (numElements &gt;= initialCapacity) {

        // initialCapacity = 32 = 0010 0000
        initialCapacity = numElements;
       
        // 0010 0000 = initialCapacity
        // 0001 0000 = (initialCapacity &gt;&gt;&gt;  1)
        // 0011 0000  ==&gt;  initialCapacity
        initialCapacity |= (initialCapacity &gt;&gt;&gt;  1);
        
        // 0011 0000 = initialCapacity
        // 0000 1100 = (initialCapacity &gt;&gt;&gt;  2)
        // 0011 1100 ==&gt;  initialCapacity
        initialCapacity |= (initialCapacity &gt;&gt;&gt;  2);
        
        // 0011 1100 =  initialCapacity
        // 0000 0011 (initialCapacity &gt;&gt;&gt;  4)
        // 0011 1111
        initialCapacity |= (initialCapacity &gt;&gt;&gt;  4);
        initialCapacity |= (initialCapacity &gt;&gt;&gt;  8);
        initialCapacity |= (initialCapacity &gt;&gt;&gt; 16);
        
        // 64
        initialCapacity++;

        if (initialCapacity &lt; 0)   // Too many elements, must back off
            initialCapacity &gt;&gt;&gt;= 1;// Good luck allocating 2 ^ 30 elements
    }
    return initialCapacity;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blockingqueue" tabindex="-1"><a class="header-anchor" href="#blockingqueue" aria-hidden="true">#</a> BlockingQueue</h2><p>阻塞队列。</p><p>什么叫阻塞队列。一个<span style="color:red;background:yellow;"><strong>大小有限</strong></span>的队列。</p>`,11),Bn=n("strong",null,"当队列满了，插入线程阻塞住",-1),Mn=n("strong",null,"当队列空了，获取线程阻塞住",-1),Nn=t('<figure><img src="'+z+`" alt="image-20230201142123219" tabindex="0" loading="lazy"><figcaption>image-20230201142123219</figcaption></figure><h1 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h1><p>学习目标：</p><ul><li>掌握Set接口存储数据的特点</li><li>掌握Set的子类。HashSet，LinkedHashSet，TreeSet存储数据的特点 <ul><li>是否有序</li><li>对重复的定义</li><li>是否允许存储null</li></ul></li><li>了解Set子类的实现方式</li><li><span style="color:yellow;background:red;"><strong>熟练掌握Set的使用场景</strong></span></li></ul><h2 id="特点-6" tabindex="-1"><a class="header-anchor" href="#特点-6" aria-hidden="true">#</a> 特点</h2><ol><li>Set是Collection的子接口</li><li>Set数据结构是: 集合（不能存储重复元素）</li><li>有些子实现无序(HashSet), 有些子实现是有序的(LinkedHashSet, TreeSet大小有序)</li><li>所有子实现都不允许存储重复元素（什么叫重复。 HashSet或者LinkedHashSet hashCode相同&amp; equals 为true TreeSet是Comparable接口返回0，叫重复。）</li><li>有些子实现允许存储null(HashSet, LinkedHashSet), 有些子实现不允许存储null(TreeSet)</li></ol><h2 id="set的api" tabindex="-1"><a class="header-anchor" href="#set的api" aria-hidden="true">#</a> Set的API</h2><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>// -------------------------set接口, 没有在Collection的基础上额外定义什么api---------

//    ---------------------------------增删改查方法---------------------------------
//    boolean add(E e): 添加一个元素进入Collection
//    boolean addAll(Collection&lt;? extends E&gt; c): 添加一个Collection进指定的Collection
//    boolean remove(Object o)： 删除元素， 只删除第一个出现的(如果存在多个)
//    boolean removeAll(Collection&lt;?&gt; c)： 删除Collection中的所有存在的元素,会全部删除，如果存在多个
//    boolean contains(Object o)： 判断是否存在指定元素
//    boolean containsAll(Collection&lt;?&gt; c)： 判断给定的collection中是否全部存在于目标Collection
//    boolean retainAll(Collection&lt;?&gt; c)： 将原有collection只保留传入的collection。

//    ---------------------------------特殊方法---------------------------------
//    void clear()： 清空collection
//    boolean equals(Object o) ： 判断是否相等
//    int hashCode()： 计算hashCode
//    boolean isEmpty(): 是否为空
//    int size()： collection里面的元素个数
//
//    ---------------------------------方便遍历方法---------------------------------
//    Object[] toArray(): 将collection转成一个数组，方便遍历，
//    &lt;T&gt; T[] toArray(T[] a)：类似，只是传入了一个数组
//    Iterator&lt;E&gt; iterator()：返回一个迭代器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hashset" tabindex="-1"><a class="header-anchor" href="#hashset" aria-hidden="true">#</a> HashSet</h2><h3 id="hashset的特点" tabindex="-1"><a class="header-anchor" href="#hashset的特点" aria-hidden="true">#</a> HashSet的特点</h3><ol><li>HashSet是Set接口的子实现</li><li>HashSet底层持有了一个HashMap对象 <ol><li>我们存储到HashSet中的数据, 实际上都存储到底层持有的HashMap的key上</li><li>HashSet的特点和HashMap对key的特点保持一致</li></ol></li><li>HashSet存储数据无序</li><li>HashSet不允许存储重复数据。<span style="color:red;background:yellow;"><strong>注意这个重复的定义。</strong></span></li><li>HashSet允许存储null元素</li></ol><h3 id="hashset的构造方法" tabindex="-1"><a class="header-anchor" href="#hashset的构造方法" aria-hidden="true">#</a> HashSet的构造方法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
          构造一个新的空 set，其底层 <span class="token class-name">HashMap</span> 实例的默认初始容量是 <span class="token number">16</span>，加载因子是 <span class="token number">0.75</span>。 
<span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> 
          构造一个包含指定 collection 中的元素的新 set。 
<span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> 
          构造一个新的空 set，其底层 <span class="token class-name">HashMap</span> 实例具有指定的初始容量和默认的加载因子（<span class="token number">0.75</span>）。 
<span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> 
          构造一个新的空 set，其底层 <span class="token class-name">HashMap</span> 实例具有指定的初始容量和指定的加载因子。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashset的api" tabindex="-1"><a class="header-anchor" href="#hashset的api" aria-hidden="true">#</a> HashSet的api</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// ----------HashSet ,    set接口, 没有在Collection的基础上额外定义什么api---------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="linkedhashset" tabindex="-1"><a class="header-anchor" href="#linkedhashset" aria-hidden="true">#</a> LinkedHashSet</h2><h3 id="linkedhashset的特点" tabindex="-1"><a class="header-anchor" href="#linkedhashset的特点" aria-hidden="true">#</a> LinkedHashSet的特点</h3><ol><li>LinkedHashSet是HashSet一个子类</li><li>LinkedHashSet底层持有一个LinkedHashMap对象 <ol><li>LinkedHashSet的特点和LinkedHashMap的key保持一致</li></ol></li><li>LinkedHashSet存储数据有序</li><li>LinkedHashSet 不允许存储重复数据</li><li>LinekdHashSet允许存储null</li><li>线程不安全</li></ol><p>与HashSet唯一的不同：</p><p><span style="color:red;background:yellow;"><strong>存储数据有序</strong></span></p><p>我们所有的集合类，基本没提过线程安全，都是线程不安全的。</p><p>线程安全的都被干掉。 Vector Hashtable</p><p>ArrayList LinkeList</p><h3 id="linkedhashset的构造方法" tabindex="-1"><a class="header-anchor" href="#linkedhashset的构造方法" aria-hidden="true">#</a> LinkedHashSet的构造方法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  构造一个带默认初始容量 <span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> 和加载因子 <span class="token punctuation">(</span><span class="token number">0.75</span><span class="token punctuation">)</span> 的新空链接哈希 set。 
<span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> 
  构造一个与指定 collection 中的元素相同的新链接哈希 set。 
<span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> 
  构造一个带指定初始容量和默认加载因子 <span class="token punctuation">(</span><span class="token number">0.75</span><span class="token punctuation">)</span> 的新空链接哈希 set。 
<span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> 
  构造一个带有指定初始容量和加载因子的新空链接哈希 set。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkedhashset的api" tabindex="-1"><a class="header-anchor" href="#linkedhashset的api" aria-hidden="true">#</a> LinkedHashSet的api</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// --LinkedHashSet, HashSet ,    set接口, 没有在Collection的基础上额外定义什么api---------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="treeset" tabindex="-1"><a class="header-anchor" href="#treeset" aria-hidden="true">#</a> TreeSet</h2><h3 id="treeset的特点" tabindex="-1"><a class="header-anchor" href="#treeset的特点" aria-hidden="true">#</a> TreeSet的特点</h3><ol><li>TreeSet是Set接口的子实现</li><li>TreeSet底层持有了一个TreeMap对象 <ol><li>TreeSet存储数据的特点和TreeMap的key保持一致</li></ol></li><li>TreeSet存储数据大小有序（大小有序 不是存储的顺序）</li><li>TreeSet不允许存储重复数据: ( Comparable接口返回的 是0 ；大小重复)</li><li>TreeSet不允许存储null</li><li>线程不安全</li></ol><h3 id="treeset的构造方法" tabindex="-1"><a class="header-anchor" href="#treeset的构造方法" aria-hidden="true">#</a> TreeSet的构造方法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TreeSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  构造一个新的空 set，该 set 根据其元素的自然顺序进行排序。 
<span class="token class-name">TreeSet</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> 
  构造一个包含指定 collection 元素的新 <span class="token class-name">TreeSet</span>，它按照其元素的自然顺序进行排序。 
<span class="token class-name">TreeSet</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span> 
  构造一个新的空 <span class="token class-name">TreeSet</span>，它根据指定比较器进行排序。 
<span class="token class-name">TreeSet</span><span class="token punctuation">(</span><span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> s<span class="token punctuation">)</span> 
  构造一个与指定有序 set 具有相同映射关系和相同排序的新 <span class="token class-name">TreeSet</span>。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="treeset的api" tabindex="-1"><a class="header-anchor" href="#treeset的api" aria-hidden="true">#</a> TreeSet的api</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// --TreeSet ,    set接口, 没有在Collection的基础上额外定义什么api---------</span>

<span class="token class-name">NavigableSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">subSet</span><span class="token punctuation">(</span><span class="token class-name">E</span> fromElement<span class="token punctuation">,</span> <span class="token keyword">boolean</span> fromInclusive<span class="token punctuation">,</span> <span class="token class-name">E</span> toElement<span class="token punctuation">,</span> <span class="token keyword">boolean</span> toInclusive<span class="token punctuation">)</span> 
  返回此 set 的部分视图，其元素范围从 fromElement 到 toElement。 
<span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">subSet</span><span class="token punctuation">(</span><span class="token class-name">E</span> fromElement<span class="token punctuation">,</span> <span class="token class-name">E</span> toElement<span class="token punctuation">)</span> 
  返回此 set 的部分视图，其元素从 fromElement（包括）到 toElement（不包括）。 
<span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">tailSet</span><span class="token punctuation">(</span><span class="token class-name">E</span> fromElement<span class="token punctuation">)</span> 
  返回此 set 的部分视图，其元素大于等于 fromElement。 
<span class="token class-name">NavigableSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">tailSet</span><span class="token punctuation">(</span><span class="token class-name">E</span> fromElement<span class="token punctuation">,</span> <span class="token keyword">boolean</span> inclusive<span class="token punctuation">)</span> 
  返回此 set 的部分视图，其元素大于（或等于，如果 inclusive 为 <span class="token boolean">true</span>）fromElement。 
    
<span class="token comment">// 见到这名字，你知不知道这个API在干啥？</span>
    <span class="token comment">// 不太知道。 搜一下。或者ChatGPT一下。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;background:yellow;">**有序 **</span></p><p>LinkedHashSet （有序的）--》 它的有序，指的是 add 顺序。添加进去的顺序</p><p>TreeSet (有序的)--&gt;是根据 Comparable 返回的结果。</p><p><span style="color:red;background:yellow;"><strong>重复</strong></span></p><p>LinkedHashSet HashSet ： hashCode &amp;&amp; （equals）</p><p>TreeSet： Comparable 返回0</p>`,40);function Fn(Wn,Gn){const i=c("font"),l=c("RouterLink");return p(),u("div",null,[J,n("blockquote",null,[n("p",null,[e("Collection是最基本的集合接口，一个 Collection 代表"),s(i,{color:"red"},{default:a(()=>[I]),_:1}),e(" Object，即 Collection 的元素, Java不提供直接继承自Collection的类，只提供继承于的子接口(如List和set)。")])]),D,n("p",null,[e("学完之后，"),s(i,{color:"red"},{default:a(()=>[T]),_:1}),e("，对比各个容器的不同。")]),H,s(i,{color:"red"},{default:a(()=>[e("**无参方法**")]),_:1}),Q,s(i,{color:"red"},{default:a(()=>[e("**有参方法**")]),_:1}),O,s(i,{color:"red"},{default:a(()=>[e("**有参构造方法**")]),_:1}),P,n("p",null,[e("1.如果数组长度"),s(i,{color:"red"},{default:a(()=>[B]),_:1}),e("集合长度。只会使用传入的数组的类型，不会使用这个数组 2.如果数组长度"),s(i,{color:"red"},{default:a(()=>[M]),_:1}),e("集合长度，会直接使用这个数组 3.如果数组长度"),s(i,{color:"red"},{default:a(()=>[N]),_:1}),e("集合长度，也会使用这个数组，并且将数组的index=length位置的元素设置为null")]),F,s(i,{color:"red"},{default:a(()=>[e("**怎么解决会出现并发修改异常问题？**")]),_:1}),W,s(i,{color:"red"},{default:a(()=>[e("**案例1**")]),_:1}),G,s(i,{color:"red"},{default:a(()=>[e("**案例2**")]),_:1}),R,s(i,{color:"red"},{default:a(()=>[e("**线性表**")]),_:1}),X,n("ul",null,[n("li",null,[e("有参构造，返回的迭代器对象，调用next返回的是指定下标的元素。"),s(i,{color:"red"},{default:a(()=>[U]),_:1})])]),K,s(i,{color:"red"},{default:a(()=>[e("**链表特点：**")]),_:1}),e("插入和删除快。真的吗？"),Z,n("table",null,[Y,n("tbody",null,[n("tr",null,[$,n("td",null,[s(l,{to:"/java/util/Queue.html#add(E)"},{default:a(()=>[nn]),_:1})]),n("td",null,[s(l,{to:"/java/util/Queue.html#offer(E)"},{default:a(()=>[sn]),_:1})])]),n("tr",null,[an,n("td",null,[s(l,{to:"/java/util/Queue.html#remove()"},{default:a(()=>[en]),_:1})]),n("td",null,[s(l,{to:"/java/util/Queue.html#poll()"},{default:a(()=>[ln]),_:1})])]),n("tr",null,[tn,n("td",null,[s(l,{to:"/java/util/Queue.html#element()"},{default:a(()=>[cn]),_:1})]),n("td",null,[s(l,{to:"/java/util/Queue.html#peek()"},{default:a(()=>[dn]),_:1})])])])]),on,n("table",null,[rn,n("tbody",null,[pn,n("tr",null,[un,n("td",null,[s(l,{to:"/java/util/Deque.html#addFirst(E)"},{default:a(()=>[vn]),_:1})]),n("td",null,[s(l,{to:"/java/util/Deque.html#offerFirst(E)"},{default:a(()=>[mn]),_:1})]),n("td",null,[s(l,{to:"/java/util/Deque.html#addLast(E)"},{default:a(()=>[bn]),_:1})]),n("td",null,[s(l,{to:"/java/util/Deque.html#offerLast(E)"},{default:a(()=>[gn]),_:1})])]),n("tr",null,[kn,n("td",null,[s(l,{to:"/java/util/Deque.html#removeFirst()"},{default:a(()=>[An]),_:1})]),n("td",null,[s(l,{to:"/java/util/Deque.html#pollFirst()"},{default:a(()=>[hn]),_:1})]),n("td",null,[s(l,{to:"/java/util/Deque.html#removeLast()"},{default:a(()=>[yn]),_:1})]),n("td",null,[s(l,{to:"/java/util/Deque.html#pollLast()"},{default:a(()=>[fn]),_:1})])]),n("tr",null,[Cn,n("td",null,[s(l,{to:"/java/util/Deque.html#getFirst()"},{default:a(()=>[Ln]),_:1})]),n("td",null,[s(l,{to:"/java/util/Deque.html#peekFirst()"},{default:a(()=>[xn]),_:1})]),n("td",null,[s(l,{to:"/java/util/Deque.html#getLast()"},{default:a(()=>[_n]),_:1})]),n("td",null,[s(l,{to:"/java/util/Deque.html#peekLast()"},{default:a(()=>[En]),_:1})])])])]),Sn,qn,wn,Vn,zn,jn,n("ol",null,[Jn,In,n("li",null,[e("底层实现： "),s(i,{color:"red"},{default:a(()=>[Dn]),_:1}),e("。要理解一下循环数组的好处。")]),Tn,Hn,Qn]),On,s(i,{color:"red"},{default:a(()=>[e("**准备知识：**")]),_:1}),s(i,{color:"red"},{default:a(()=>[e("**当除数为2的幂次方，可以用& 运算代替取余,即 **")]),_:1}),Pn,n("ul",null,[n("li",null,[n("p",null,[e("插入时，"),s(i,{color:"red"},{default:a(()=>[Bn]),_:1}),e("。")])]),n("li",null,[n("p",null,[e("从队列中获取元素时，"),s(i,{color:"red"},{default:a(()=>[Mn]),_:1}),e("。")])])]),Nn])}const Un=r(j,[["render",Fn],["__file","21_Collection.html.vue"]]);export{Un as default};
