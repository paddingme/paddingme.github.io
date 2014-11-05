---
title: 学习git拾遗
layout: post
tags:
- git
- github
---

## 在这里记录下学习git遇到的问题 以及常用的命令



## 1. 遇到的问题

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

```
git clone git@github.com:username/repo.git
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

### Q5 git 添加多个ssh key

问题描述：我的博客托管在gitcafe 和 github 上，每次 push 都要多次输入用户名密码 灰常麻烦，那么如何添加多个 ssh key 呢。一直没有弄好，在 [Cassie](http://xuyuan923.github.io/) 的 [github/gitlab 同时管理多个 ssh key](http://xuyuan923.github.io/2014/11/04/github-gitlab-ssh/)启发下，经过 N 多试错，终于大功告成。下面记录下配置配置过程。请注意：我的环境是 windows7 MINGW32 shell
。

1.首先生成一个 SSH keys 供 github 使用：

  ```
    $ cd ~/.ssh
    $ ssh-keygen -t rsa -C "your_email@example.com"
  ```

  执行会让你重命名 key 咱们将其命名为 id_rsa_github
  之后会让你输入密码，再次输入密码确认，ok，完成上述步骤就生成了公钥和私钥了。
  截图如下：

  ![](http://paddingme.qiniudn.com/ssh1.png)

2.再根据上述步骤生成另一个 SSH keys（根据你自己在两个远程仓库的邮箱命输入邮箱地址），我们将其命名为 id_rsa_gitcafe

3.接着 咱们添加生成的私钥，再这之前执行

  ```
  $ ssh-agent -s
  $ ssh-add ~/.ssh/id_rsa_github
  ```

  这时候会出现错误"Could not open a connection to your authentication agent",参考[Could not open a connection to your authentication agent](http://stackoverflow.com/questions/17846529/could-not-open-a-connection-to-your-authentication-agent)

  我们执行:

  ```
  $ eval `ssh-agent -s`
  ```

  继续添加 key:

  ```
  $ ssh-add ~/.ssh/id_rsa_github
   ssh-add ~/.ssh/id_rsa_gitcafe
  ```

  ![](http://paddingme.qiniudn.com/ssh2.PNG)

4.Ok,私钥添加上了，咱们把公钥放到 github/gitcafe。打开你的 github 账号，找到设置，找到 SSH keys 点击 ADD SSH key。随便取个 Title，什么你不知道如何添加公钥?!

  在你的.ssh 目录下 用 Notepad 或 sublime 打开 id_rsa_github.pub，然后复制粘贴保存。

  gitcafe 添加 ssh 公钥同理。

5.胜利尽在眼前，我们 try try 下。

   ```
   $ ssh -T git@github.com
   ```

  然后出现了奇怪的东东，布拉布拉，yes/no，不管它 输入yes。接着会看见您的大名，OK，连接成功，gitcafe 同理请将 `$ ssh -T git@gitcafe.com`。 来上图，感受下:

  ![](http://paddingme.qiniudn.com/ssh3.PNG)

### Q6 如何将 blog 同时托管到 gitcafe 和 github 上？

这个网上教程很多，待我有时间了，我再手把手教同学们，晒下配置文件，感受下：

```
[remote "github"]
    url = https://github.com/yourname/yourname
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
    remote = gitcafe
    merge = refs/heads/gitcafe-pages
[remote "gitcafe"]
    url = https://gitcafe.com/yourname/yourname
    fetch = +refs/heads/*:refs/remotes/orig/*
[alias]
publish=!sh -c \"git push github master && git push gitcafe master:gitcafe-pages\"
```

### Q7 为什么配置了 SSH，每次 push 还是需要输入用户名和密码呢？

参考这里<http://segmentfault.com/q/1010000000599327>

因为你用的是 https 而不是 ssh。
可以更新一下 origin:

```
git remote remove origin
git remote add origin git@github.com:Username/Your_Repo_Name.git
```

之后你还需要重新设置track branch，比如：

```
git pull
git branch --set-upstream-to=origin/master master
```

对于HTTPS方式，你可以在~/.netrc文件里设定用户名密码，不过这样的风险在于密码是明文存放在这个文件里的，比较容易泄露

```
machine github.com
login Username
password Password
```

## 2. 学习git 参考资料

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
