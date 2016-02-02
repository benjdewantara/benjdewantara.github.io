---
layout: post
title: "Why Jekyll Now?"
date: 2016-02-01 21:36:00 +0700
comments: true
disqus_identifier: 28e2103e-c8f1-11e5-9045-080027047769
---

My aim when setting up this blog (perhaps also when setting up [my first Wordpress blog ever](http://benjdewantara.wordpress.com)) is just for the fun of hacking the CMS itself. I just have never been much of a writer who actually blogs myself. That pretty much will **later** explain my future plan on migrating my Wordpress posts to [this Jekyll site]({{ site.url }}).

But why now? Well, since I decided to blog more seriously on Wordpress, I have been looking for [a Wordpress theme that actually is a blog](https://wordpress.org/themes/search/blog) (i.e. without unnecessary slider, footer, header, menu bar, widgets and other feature). I ended up with my current [Bosco theme](https://boscodemo.wordpress.com) that is of course *quite* beautiful.

Nevertheless, these are a few key things why I now blog using Jekyll.

A text interface calms my nerve
===============================
I may stick a little bit longer with Wordpress, but I find myself more comfortable with a text interface rather than a visual interface when writing a post.

![Text vs Visual?][text-vs-visual]

I try to pay careful attention to details like how many `SPACE` and `ENTER` characters I have used. Just like writing with Microsoft Word, I make sure that ***show paragraph symbols*** button is clicked.

![When writing with Microsoft Word][writing-with-ms-word]

So I know for more sure that I won't somehow leave one or two extra unused HTML tag(s) because of that creepy Visual interface.

$$ \LaTeX $$ is more beautiful
================================
This first came to my attention when reading [Daniel Seita](https://github.com/danieltakeshi)'s [blog](https://danieltakeshi.github.io). And yes, compared to [Wordpress' LaTeX](https://en.support.wordpress.com/latex/), I have to admit it.

Code highlighting
==================
Now this,
{% highlight python %} print("This is awesome") {% endhighlight %}


I'm thinking of posting a few of my thesis materials here
=========================================================
This explains why I need that beautiful $$ \LaTeX $$ (and code highlighting feature).

Ultimately, I get to hack my way through all this
=================================================
Blogging may never be my primary purpose when setting all these up. I also get to learn a little bit of Git/Github (and expect to learn more in the near future).





{% comment %} This is where you put all the link/image/media/file pointers {% endcomment %}

[text-vs-visual]: {{ site.url }}/assets/2016-02-01-text-vs-visual-wordpress.jpg
[writing-with-ms-word]: {{ site.url }}/assets/2016-02-01-when-writing-with-ms-word.jpg
