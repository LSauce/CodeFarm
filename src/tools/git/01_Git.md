---
lang: zh-CN
title: 01. Git
description: Git基本使用
author: 空灵
---
# Git

学习目标：

- git是什么，用来解决什么问题
- 掌握git的核心流程（工作区、暂存区、本地仓库）
- 熟练git的核心命令
- 如何处理冲突
- git的分支是什么，有什么好处
- 了解企业中分支的使用方式
- 在idea上进行git操作



https://www.progit.cn/

## 介绍

最早是用于Linux的代码管理，这是Linus写得代码。它也会有一些代码的写得有问题。但是早期都是通过邮件给Linus发信息，告诉这里有问题。但是随着参与的人越来越多，这样不可行。 

Bitkeeper公司，将自己的版本控制工具给到Linux使用。但是后续Linux的一群开发者都是技术大佬，想办法破解。惹怒了BitKeeper公司。 



Linus 的第二个伟大作品。2005年由于BitKeeper软件公司对Linux社区停止了免费使用权。Linus迫不得己自己开发了一个分布式版本控制工具，从而Git诞生了。 据说Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git。一个月之内，Linux系统的源码已经由Git管理了。



Git 是一个版本控制工具。可以<span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**记录和追踪**</span> 某个文件 在某一个时刻的内容和状态。

Git的使用有点像一个 网盘，这个网盘大家都可以来操作。只是Git比网盘要高级一点，体现在哪里呢？其实就是Git可以追踪这个`网盘` 中 文件的历史版本状态。

> Git 可以 <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**记录某个文件夹下的 不同文件 在不同时间节点的不同状态。Git可以去记录这些文件产生的变化**</span>



写论文其实就有这样一个过程 。 手动管理版本。 软件帮助管理版本。 



发展历史：Linus，为了管理Linux的核心代码来开发的一个分布式的版本控制工具。

Git的特点：

-  分布式
-  离线可用
-  可以回退

Git和SVN的对比

- Git：分布式版本控制工具
- SVN：集中式版本控制工具

![image-20220526111136071](img-git/image-20220526111136071.png)



![image-20220526111920966](img-git/image-20220526111920966.png)



git学了 svn也会用。因为命令基本类似。

## 安装Git

### 下载![image-20220526113317513](img-git/image-20220526113317513.png)

[官方下载地址](https://git-scm.com/downloads)

### 安装

直接傻瓜式安装即可。

![image-20220526113721503](img-git/image-20220526113721503.png)

安装的时候，要注意 让Windows 记住登录凭证

## Git的使用

### Git核心流程

![image-20220526113143360](img-git/image-20220526113143360.png)

### Git 命令

#### 注册相关网站

以Gitee为例。

- 记住注册的时候 使用的 
  - 用户名（推荐使用英文）
  - 密码
  - 手机号
  - 邮箱(可以注册后自行设置)

密码一定要记得。

#### 建立远程仓库

![image-20220526114956920](img-git/image-20220526114956920.png)

#### clone

把远程仓库，克隆到本地。（一定是第一次）

.git文件夹，是git自己的元信息的一个文件夹，大家不要动。



```shell
# 下载远程仓库的内容，并且在本地创建一个和远程仓库名同名的文件夹
git clone https://gitee.com/common-zhou/test_50th.git

# 克隆远程仓库，到本地，文件夹的名字叫做  test53th1。如果文件夹不存在，会创建一个。
#  文件夹可以有两种状态。 如果这个文件夹不存在，那就替你新建一个；如果文件夹存在且为空， 这时候用你的文件夹。
# 如果这个文件夹存在，且不为空。会报错。 大家要注意一下报错信息。 
git clone https://gitee.com/common-zhou/test53th.git test53th1

git clone https://gitee.com/ciggar/test-40th.git dirName
```



在git中管理文件的版本，需要使用文本文件。

.txt .md ;  不要使用docx pptx



在git中，对比文件的变化，是一行一行来进行比较的。所以我们需要追踪文本文件，docx是类似压缩包的文件，没有办法对比每一行。

#### status

这个命令可以帮助我们查看工作区和缓冲区中的变化。

<span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**工作区中的变化**</span>

<span style='color:green;background:yellow;font-size:文字大小;font-family:字体;'>**缓冲区中的变化**</span>

![image-20220526144014440](img-git/image-20220526144014440.png)

#### add

这个命令可以帮助我们把工作区中的变化提交到缓冲区。

```shell
# 有以下的三种提交方式

# 文件的名字
git add fileName

# 文件的类型，通配符添加
# 只添加 .java文件结尾的文件 。从工作空间提交到缓冲区
git add *.java

# 所有文件
git add .
```

#### commit

我们这个commit，和我们在写论文的时候，什么比较像？提交了一个版本。





commit这个命令可以帮助我们把git仓库中 缓冲区中的内容提交到本地仓库。

<span style=color:red;background:yellow>**第一次提交的时候，需要设置 用户名和邮箱**</span>

有两种设置的方式

- 直接去用户目录下，设置 .gitconfig 这个文件,假如没有这个文件，就创建一个

  ```ini
  [user]
  	name = ciggar
  	email = 291136733@qq.com
  ```

- 执行命令去设置

  ```shell
  git config --global user.email 222@qq.com
  git config --global user.name xxx
  ```

设置完之后，就可以提交了，会产生一个版本信息

![image-20230111111257900](img-git/image-20230111111257900.png)



这一步需要大家注意几件事情：

- 这一步会产生一个文件的版本号，只是前7位。
- 如果是第一次commit，需要设置用户名和邮件地址
- 只会把缓冲区中的变化提交到本地仓库，不会把工作区中的变化提交到本地仓库
- commit的时候需要指定提交的信息，提交的信息一般要去设置模板



```shell
# 提交
git commit -m "msg"
## msg:msg信息一般要有统一的格式 例如：描述信息 (issue号)
# 1.描述信息 (issue号)
# 2.(issue号) 描述信息

git commit -m "某某bug的修改"
git commit -m "HashMap的练习"

# 尽量做到，见到描述信息可以知道这次提交是干什么的。
# 不要写什么 1 abc 
# 
```

- 设置完之后，就可以提交了，会产生一个版本信息

  

  ![image-20220526145749580](img-git/image-20220526145749580.png)

#### push

![image-20230111111257900](img-git/image-20230111111257900.png)

push这个命令可以帮助我们把本地仓库中的<span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**所有变化**</span> 推送到远程仓库。

- 这一步在第一次操作的时候，需要去填写对应用户名和密码

  

![image-20220526150144318](img-git/image-20220526150144318.png)

> push的时候，能不能指定文件去 push呢？ 不能

> 只有当本地仓库中的版本领先于远程仓库的时候，才可以push



#### pull

会拉取远程仓库中的所有的变化到本地。并且会显示出版本号

![image-20220526151312030](img-git/image-20220526151312030.png)

> 当本地仓库中的版本落后于远程仓库的时候，就要pull
>
> “ 落后就要pull”





```JAVA
<<<<
    这中间的代码，就是自己写得代码。
======
	别的提交写得代码
    >>>>>>> 
    
    处理冲突。首先要决定留哪些代码，是留你的，还是留你的同事的； 或者两份都留
    其次，删除分隔符。
    
<<<<<<< HEAD
同事B也做了一些事情。
=======
这是同事A的第一次提交
第二行提交
>>>>>>> c58c7c2b23823ca5ba375ddb39e8bf136b8ddd9b
```





#### log

查看仓库中的所有的版本信息

![image-20220526151518200](img-git/image-20220526151518200.png)



### 协作开发

#### 邀请成员加入仓库

> 不管是 开源的仓库，还是私有的仓库，都是 只有仓库中的成员才能去修改仓库中的代码。
>
> -  开源：所有人都可以访问到
> - 私有：只有仓库指定的成员才能看到

![image-20220526152352372](img-git/image-20220526152352372.png)

私有仓库只能添加总共五个管理员（带主账号）。所以如果想把整个小组都拉进来，可以把仓库设置成公开仓库，可以添加小组全部成员。



#### 处理冲突

模拟冲突处理流程：

![image-20220526162705623](img-git/image-20220526162705623.png)



> 总结：
>
> 1.  先push的人不处理冲突，后push的人要处理 冲突
> 2.  和组员一起开发的时候，尽量不要开发同一个文件，很容易产生冲突
> 3.  push之前最好先pull一下，不然可能会push失败
> 4.  - 早上上班之后，第一件事情，拉取最新的代码（pull）
>     - 晚上下班之前，最后一件事情，把最新的本地代码推送上去（push）。<span style=color:yellow;background:red>**代码一定要能编译通过**</span>有没有bug无所谓。



Vim怎样使用

```
1.点击i 表示是编辑。才能输入
2.保存的时候，怎么保存呢？
 点击esc; 输入一个冒号  shift+: (英文状态下) ; 输入wq（保存并退出）
```





冲突的处理

```JAVA
<<<<<<<< HEAD
    
===============
 
>>>>>>>>> fgfskljasdljdlkasjksalk
    
    
// 左到=。就是你自己的代码版本   <<<<<<<<<       -->        ============
    // =到>  是远端的版本      =========       -->        >>>>>>>>>>>>
    
需要告诉git，如果保留代码。 比如是留你的版本，还是留你同事版本。 
 1.留代码
 2.删除分隔符
 3. 处理好所有的冲突之后， git  add . ;  git commit -m "处理和同事1的冲突"
 4. push 。 需要抓紧push，防止别人又push了代码    
```



多练习。 





冲突分两种情况：

1.两次提交。修改了不同的文件： 这个是git可以帮我们处理这个问题。 git会保存最新的代码，比如一个人修改了 1 3 5 ； 另一个提交修改 2 4 7 。 最后，保存最新的  123457这些信息即可。   git需要我们输入一个信息， 会直接进入vim界面。你在这个界面输入提交信息， wq。

2.两次提交，修改了相同的文件。 这时候，git没有办法帮我们处理。我们需要手动处理。需要决定留哪一份，或者合并全留。

如果不知道我们同时修改了哪个文件： 可以用  git status 。

add  commit .

```JAVA
<<<<<<<<<< heAD

    ====================
    
    >>>>>>>>>>>>>>>>>>>>
```





### 后悔药

Git给我们提供了一些可以回退的措施，也叫作后悔药。

![image-20220526163624301](./img-git/image-20220526163624301.png)



- git checkout

  > 需要指定需要回退的文件
  >
  > ```shell
  > $ git checkout text.txt
  > $ git checkout .
  > ```

  <span style=color:red;background:yellow>**这个命令，危险吗？ 危险！慎用**</span>

  > 注意：回退的内容，是找不回来的，要慎用。比如你写了一天的代码，都是在工作区的。

- git reset

  > <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**把缓冲区中的变化，回退到工作区。注意：git reset不会改变文件中的内容**</span>

  > 问题：能不能指定文件reset呢？ 能

- git reset --hard  version

  - 就指的是版本号。 我们每一次commit都有一个版本号

  
  
  ![image-20220526171556679](img-git/image-20220526171556679.png)
  
  大家觉得，回退用的多不多？用的不多，因为我们再企业中写代码，不可能写了一个月代码，全丢掉。 

### 忽略文件

git在做版本控制的时候，可以让我们忽略一些文件，不去追踪这个仓库中这些文件的变化。

怎么做呢？

- 可以在Git仓库的根目录下 添加 一个 `.gitignore` 这个名字的文件，可以在这个文件中声明哪些文件不被git追踪版本信息

对于Java项目来说，我们可以忽略哪些内容呢？

```ini
# 单个文件
xxx.txt

# 配置文件夹
.idea

# 配置文件的类型
*.iml

target/*.class

*.class
```



```JAVA
# 就是让git忽略一些文件。 不要去追踪这些文件。 比如class文件
# 一些私密信息（密码）这些不要让git管理。 

# 代表我不想让其追踪  4.txt的文件
4.txt

# 这个就是代表我想忽略 target文件夹
target/

# 一定要注意，如果git已经追踪上了。再添加到.gitIgnore文件里面，无效。
1.txt

# 比如，现在就是想忽略掉1.txt。 怎么办？
# 把1.txt剪切换一个位置 ;    add  commit ;   把1.txt文件拷贝回来。  这样我们就可以忽略掉这些文件。 
```



> 注意事项：
>
> 1. 忽略文件最好是在创建这个远程仓库的时候，就应该自动创建出来
>
>    ![image-20220526172640586](img-git/image-20220526172640586.png)
>
> 2. <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**一旦一个文件已经被追踪并且提交到远程仓库中去了，那么再在.gitignore 这个文件中去忽略它的变化，是无效的**</span>

## 分支管理

Git分支是Git版本控制系统中的一种重要概念，用于在同一个Git仓库中独立开发多个功能或特性。在Git中，每个分支都代表着仓库中的一个完整版本，并且可以在分支上进行独立的开发和提交。

使用分支的好处是可以让多个人在同一个仓库中同时进行开发，不会相互干扰，同时也可以随时回到之前的某个状态进行修复或重新开发。当一个分支的开发完成后，可以将其合并到主分支或其他分支上。

Git默认创建一个主分支，通常称为“master”或“main”，其他分支可以基于主分支或其他分支创建，每个分支都有一个唯一的名称。在开发过程中，可以在不同的分支之间进行切换，以便进行不同的工作。例如，可以创建一个分支来解决某个bug，同时在另一个分支上开发一个新的功能，而不会影响彼此之间的工作。

总之，Git分支是一种非常有用的功能，可以帮助开发人员更好地管理代码并提高开发效率。



分支操作

```shell
# 查看所有分支
$ git branch

# 创建分支并切换 iss53
$ git checkout -b iss53

# 切换分支
$ git checkout iss53

# 合并分支
$ git merge iss53
```

<span style=color:red;background:yellow>**工作过程中的一般使用步骤**</span>

```SHELL
#  一般会有一个master 主分支
#  会有一个dev分支

# 1. 如果有需求，会从dev拉一个分支，比如 dev-feature1，所有的提交都提交在这个分支上
# 1.1 从dev拉取一个分支，并切换到这个分支
git checkout -b dev-feature1

# 2. 等到开发完成，会把这个分支合并到dev。 dev经过测试，会合并到master
# 2.1先切换到dev分支
git checkout dev 

# 2.2合并刚刚的分支
git merge dev-feature1
```

 

有一些不知道的操作，我想知道命令。

- 上google
- 上群里（比较危险。 ） 。   如果别人给了你命令，你不确定。先去问问chatGPT。
- 问问chatGPT



不认识的命令，不要随意去执行。

sudo rm -rf / 

git push -f 

## 在idea上进行git操作

首先配置好git路径

![image-20230406111436344](./img-git/idea配置git.png)

点击Test有版本。





<font color=red>**如果项目被git追踪了，则idea中会有对应的颜色提示。**</font>

红色代表是新增的文件

蓝色代表是文件有改动

绿色代表已经提交。其他的操作与git基本操作一致。



在文件中，可以看到文件的变动

![image-20230406112925347](./img-git/idea中git的提示.png)



git可以右键，然后add commit 提交信息。



备注：

- 学完之后，要多练习git。把日常的代码，使用git管理起来。因为后面写项目的时候，要大量使用git。
- 先使用命令行，不要使用idea中的可视化。用命令行，你可以清楚的知道发生了什么。
- 多练习一下分支
- 冲突处理一定要会。



**常见问题**

如果在git配置中报错fatal: Authentication failed for ''，其实就是**凭证失败**的意思

解决办法如下：[凭证失败解决](https://blog.csdn.net/TanMengyi/article/details/108623908)

