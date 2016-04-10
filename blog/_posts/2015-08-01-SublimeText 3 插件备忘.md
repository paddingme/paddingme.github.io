---
title: SublimeText 3 插件备忘
layout: post
tags:
- article
---


 文章取自我的 Github  repos: [Learning-HTML-CSS](https://github.com/paddingme/Learning-HTML-CSS)， 作者：[@paddingme](http://padding.me/about.html) 。
  原文链接：[https://github.com/paddingme/Learning-HTML-CSS/issues/39](https://github.com/paddingme/Learning-HTML-CSS/issues/39)

记录下 我的 Sublime Text 3 使用的插件以及安装，以备后用。

我安装的 Sublime Text 版本是 [Sublime Text Build 3083 x64](http://www.sublimetext.com/3),插件的安装与版本无关，
请自行选择自己使用的版本。



1. 安装 Package Control

  [https://packagecontrol.io/installation](https://packagecontrol.io/installation)

  安装好 sublime 之后打开 按 `ctrl`+` 点 ` 调出 Sublime Text 控制台(或者`View >Show Console`)。 将以下代码粘贴到控制台里，然后敲击回车：

  ```python
    import urllib.request,os,hashlib; h = 'eb2297e1a458f27d836c04bb0cbaf282' + 'd0e7a3098092775ccb37ca9d6b2e4b7d'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
  ```

2. 安装各种插件

  按 `ctrl` + `shift` + `p` 出现的文本框中输入 `Install Package`(或直接输入`ip`) 选中 Install Package 并回车

  1. Emmet

    输入 `emmet` 安装。 [Emmet 语法速查表](https://github.com/paddingme/Learning-HTML-CSS/issues/17)。

  2. emmet-plus

    [emmet-plus](https://github.com/yisibl/emmet-plus)

  3. JsFormat

    即可在JS文件中通过鼠标右键->JsFormat或键盘快捷键Ctrl+Alt+F对JS进行格式化

  4. SideBarEnhancements

	  ```js
	  [
	    { "keys": ["ctrl+shift+c"], "command": "copy_path" },
	    //firefox
	    { "keys": ["f3"], "command": "side_bar_files_open_with",
	             "args": {
	                "paths": [],
	                "application": "D:\\x64\\firefox.exe",
	                "extensions":".*" //匹配任何文件类型
	            }
	    },
	    //chrome
	    { "keys": ["f1"], "command": "side_bar_files_open_with",
	            "args": {
	                "paths": [],
	                "application": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
	                "extensions":".*"
	            }
	     },
	    //ie
	    { "keys": ["f3"], "command": "side_bar_files_open_with",
	             "args": {
	                "paths": [],
	                "application": "C:\\Program Files\\Internet Explorer\\iexplore.exe",
	                "extensions":".*"
	            }
	    }
	]
	  ```

  5. CssComb 是为CSS属性进行排序和格式化插件

    使用Package Control安装CssComb插件后，你可能发现它并不能运行, 
    使用方法：菜单Tools->Run CSScomb或在CSS文件中按快捷键Ctrl+Alt+C (已经修改)

  8. Autoprefixer 插件

      这是一款CSS3私有前缀自动补全插件，该插件使用CanIUse资料库，能精准判断哪些属性需要什么前缀。
      与CssComb插件一样，该插件也需要系统已安装Node.js环境。 
      使用方法：在输入CSS3属性后（冒号前）按Tab键。

  9. TrailingSpaces插件

    有时候，在代码结尾打多了几个空格或 Tab，并没有任何显示效果，TrailingSpaces 这款插件能高亮显示多余的空格和 Tab。

  10. SublimeCodeIntel插件

    主要是用来自动完成 JavaScript 代码。

    Jump to definition = Alt+Click
    Jump to definition = Control+Windows+Alt+Up
    Go back = Control+Windows+Alt+Left
    Manual Code Intelligence = Control+Shift+space


  11. 中文版本不跟随 ：IMESupport

  12.  一些设置

    ```js
    // 设置Sans-serif（无衬线）等宽字体，以便阅读
    "font_face": "YaHei Consolas Hybrid",
    "font_size": 12,
    // 使光标闪动更加柔和
    "caret_style": "phase",
    // 高亮当前行
    "highlight_line": true,
    // 高亮有修改的标签
    "highlight_modified_tabs": true,
    ```

    主题：

    ```js
    "theme": "Nexus.sublime-theme",
    "color_scheme": "Packages/Theme - Flatland/Flatland Dark.tmTheme",
    ```

    编码风格设置：

    ```js
      // 设置tab的大小为2
      "tab_size": 2,
      // 使用空格代替tab
      "translate_tabs_to_spaces": true,
      // 添加行宽标尺
      "rulers": [80, 100],
      // 显示空白字符
      "draw_white_space": "all",
      // 保存时自动去除行末空白
      "trim_trailing_white_space_on_save": true,
      // 保存时自动增加文件末尾换行
      "ensure_newline_at_eof_on_save": true,
    ```

  13. `BracketHighlighter`高亮显示配对括号以及当前光标所在区域

  14. Alignment 等号对齐

    按Ctrl+Alt+A，可以将凌乱的代码以等号为准左右对其，适合有代码洁癖的朋友。C

  15. better completion 主要自动完成jquery 代码的

    https://github.com/Pleasurazy/Sublime-Better-Completion


  16. https://github.com/angular-ui/AngularJS-sublime-package

  17. https://github.com/jonschlinkert/sublime-markdown-extended#markdown-enhancements

  18. https://github.com/SublimeText-Markdown/MarkdownEditing

  19. [HTML+CSS+JAVASCRIPT+JSON快速格式化](https://github.com/victorporof/Sublime-HTMLPrettify)
         `ctrl+shift+h`


参考：
- [Sublime Text 3前端开发常用优秀插件介绍](http://www.cnblogs.com/hykun/p/sublimeText3.html)
- [Sublime Text 全程指南](zh.lucida.me/blog/sublime-text-complete-guide/ )



所有安装插件和设置见：

百度云： http://pan.baidu.com/s/1eQ8QpJc