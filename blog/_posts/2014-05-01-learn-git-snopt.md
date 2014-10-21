---
title: 学习git拾遗
layout: post
tags:
- git
- github
---

## 在这里记录下学习git遇到的问题 以及常用的命令

## 1. 学习git 参考资料

+ [git - 简易指南](http://www.bootcss.com/p/git-guide/)
+ [Git 初级读本--上](http://www.html-js.com/article/1534)
+ [Git 初级读本--下](http://www.html-js.com/article/1535)
+ [GitHub常用命令详解](http://www.html-js.com/article/2023)
+ [如何高效利用GitHub](http://www.yangzhiping.com/tech/github.html)
+ [GitHub常用命令详解](http://www.html-js.com/article/2023)
+ [Git速成班: git rebase](http://www.html-js.com/article/2021)
+ [Git进阶命令讲解：squash,fixup,stash](http://www.html-js.com/article/2064)
+ [GitHub分支系列教程（1）](http://www.html-js.com/article/2024)
+ [GitHub分支系列教程（2）](http://www.html-js.com/article/2025)
+ [GitHub分支系列教程（3）](http://www.html-js.com/article/2026)
+ [GitHub分支系列教程（4）](http://www.html-js.com/article/2027)
+ [GitHub分支系列教程（5）](http://www.html-js.com/article/2028)
+ [GitHub分支系列教程（6）](http://www.html-js.com/article/2029)
+ [.gitignore详解](http://www.html-js.com/article/2030)
+ [progit book](https://github.com/numbbbbb/progit-zh-pdf-epub-mobi)
+ [gitmagic book](https://github.com/blynn/gitmagic/tree/master/zh_cn)
+ [Git常用操作命令](http://yuehu.io/padding-me/425)

## 2. 遇到的问题

### Q1  如何克隆一个github上自己建立的私有仓库到本地

命令行输入:

```
git clone https://github.com/username/repo
```

之会出现: `Cloning into "yourrepo"...`  之后会提示输入你的Username 和PassWord 输入正确之后就会把私有仓库复制到本地 注意这里输入的是

```
https://github.com/username/repo
```

不是

```git clone git@github.com:username/repo.git
```

也不是

```
git clone git://github.com/myusername/reponame.git
```


### Q2  如何强制把远程仓库覆盖到本地仓库

```
git fetch --all
git reset --hard origin/master
```


### Q3  github Contributions Calendar不记录

查看本地git邮箱：

```
git config user.email
```

然后在github里的accout settings > email里看看你的primary github email  是不是你本地那个邮箱。更改为一样的邮箱：

```
git config --global user.email "xx@oo.com"
```


### Q4  初始化本地仓库后添加到远程仓库，远程仓库地址写错了

添加到远程仓库

```
git add remote [name/origin] [https://github.com/your-name/your-repo]`
```

修改远程仓库：

```
git remote set-url --push [name/origin] [https://github.com/your-name/your-new-repo]
```