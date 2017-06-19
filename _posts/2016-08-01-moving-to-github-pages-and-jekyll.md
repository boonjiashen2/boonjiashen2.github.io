---
layout: post
title: Moving on to Github Pages and Jekyll
---

Yesterday I moved the site from [WordPress.com](https://wordpress.com/) to [Jekyll](https://jekyllrb.com/)/[Github Pages](https://pages.github.com/). I just want to quickly jot down my thoughts on the process.

# Pros of Jekyll

- __"Closer to the metal"__. With Jekyll, you're essentially managing a collection of files that will eventually be converted to another collection of files (which are to be hosted); WordPress abstracts file management, especially source code management, away from the user. The WordPress approach is great for lay people, but the kind and level of control I get from Jekyll is more appropriate to me as a computer scientist.

# Cons of Jekyll

- __Migration of files not the easiest__. While there are importers (in my case to import from [WordPress.com](https://import.jekyllrb.com/docs/wordpressdotcom/) and [Blogger](http://import.jekyllrb.com/docs/blogger/)), they're not perfect. You almost certainly will want/need to clean up the files yourself after importing, either manually or with scripts.
- __Available templates not a varied or pretty as WordPress__. [WordPress templates](https://wordpress.org/themes/) are gorgeous. I haven't made an exhaustive search, but thus far my impression is that the same can't be said about Jekyll.

# Pros of Github pages
- __Free custom domain association__. By contrast, WordPress.com charges for the same service, even if you didn't register the domain under them.

# Cons of Github pages
- __Custom domains don't support HTTPS__. It says so right in your Git repository settings, but here's [other](https://github.com/isaacs/github/issues/156) [sources](https://github.com/github/choosealicense.com/issues/299). This was a minor problem for me since WordPress.com did support HTTPS. Concretely, Google crawled all my pages via HTTPS, and therefore search results to my pages are all prepended with HTTPS, and therefore now when visitors come here through Google, they'll get an ugly cross over the 'https' on the URL bar. That may put off visitors a little bit.

# List of tools that I found helpful
- [to-markdown](https://domchristie.github.io/to-markdown/) - Online HTML-to-markdown converter
- [Tag](https://github.com/titoBouzout/Tag) - Sublime Text plug-in which, among other things, allows you to remove all HTML tags from a document
- [Sublime-HTMLPrettify](https://github.com/victorporof/Sublime-HTMLPrettify) - another Sublime Text plug-in. This one can format an entire HTML document. Useful when your HTML was all joined into one crazy long line.
