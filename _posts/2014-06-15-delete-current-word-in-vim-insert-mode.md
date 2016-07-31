---
layout: post
title: 'Delete current word in Vim Insert mode '
date: '2014-06-15T02:35:00.000-07:00'
author: Jia Shen Boon
tags:
modified_time: '2014-06-15T02:35:11.299-07:00'
thumbnail: http://1.bp.blogspot.com/-SL-pTu6FGvo/U51okxagXII/AAAAAAAAS6k/uaA9zAHEjTc/s72-c/optimised.gif
blogger_id: tag:blogger.com,1999:blog-6651978490904982752.post-8564486774600683758
blogger_orig_url: http://blog.jiashen.me/2014/06/delete-current-word-in-vim-insert-mode.html
---

# Problem

You're typing away in Vim's Insert mode and just typed a word wrongly. That's a very common scenario right? If you come from a MS Word background (like me), your first instinct may be to hit Shift+Backspace. In Vim, however, that doesn't work. I'll give two methods that do.

![screenshot]({{ site.url }}/assets/vim_insert.gif)

# Solution 1

```
Ctrl+w
```

Simple as that. As stated in the&nbsp;<a href="http://vimdoc.sourceforge.net/htmldoc/insert.html#ins-special-keys">Vim documentation</a>, in Insert mode this is to "delete the word before the cursor".

# Solution 2

```
<Esc>ciw
```

Press <span style="font-family: Courier New, Courier, monospace;">Esc</span> (or <span style="font-family: Courier New, Courier, monospace;">Ctrl+[</span>, or <span style="font-family: Courier New, Courier, monospace;">Ctrl+c</span>) to enter Normal mode, and <span style="font-family: Courier New, Courier, monospace;">ciw</span> to delete the current word and pop back into Insert mode at the same time. (Bonus: do <span style="font-family: Courier New, Courier, monospace;">&lt;Esc&gt;ciW</span> to delete the current WORD, which includes punctuation, such as <span style="font-family: Courier New, Courier, monospace;">"short-term"</span> or <span style="font-family: Courier New, Courier, monospace;">&lt;i,j&gt;</span>)

This was what I did before I knew about <span style="font-family: Courier New, Courier, monospace;">Ctrl+w</span>.
