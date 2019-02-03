# White

simple, concise blog theme for [Hexo](https://hexo.io).

## Installation

### Install

```bash
git clone https://github.com/helbing/hexo-theme-white.git themes/white
```

### Enable

```yml
# _config.yml

theme: white
```

### Dependencies

```bash
yarn add hexo \
  hexo-generator-feed \
  hexo-generator-index \
  hexo-generator-tag \
  hexo-renderer-ejs \
  hexo-renderer-marked \
  hexo-renderer-scss

yarn add --dev hexo-browsersync \
  hexo-server
```

you also can use npm to install dependency packages

### Update

```bash
cd themes/white
git pull
```

## Configuration

### Basic

```yml
# themes/white/_config.yml

title: WHITE
description: "A simple, concise blog theme for Hexo."
```

### Menu

```yml
# themes/white/_config.yml

menu:
  Home: /
  Tags: /tags
  About: /about
  Rss: /atom.xml
```

### Rss

```yml
# themes/white/_config.yml

rss: /atom.xml
```

### Copyright

```yml
# themes/white/_config.yml

copyright:
  name: helbing
  url: https://github.com/helbing
```

### Favicon

copy your favicon.png into `/source`

```yml
# themes/white/_config.yml

favicon: /favicon.png
```

### Social account

```yml
# themes/white/_config.yml

social:
  github:
    url: https://github.com/helbing
    icon: "fab fa-github"
  mail:
    url: mailto:helbingxxx@gmail.com
    icon: "fas fa-at"
  xxx:
    url:
    icon:
```

you can find icons in [fontawesome](https://fontawesome.com/icons)

### Highlight

```yml
# _config.yml

highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```

### GitTalk

```yml
# themes/white/_config.yml

gitalk:
  enable: true
  client_id:
  client_secret:
  repo:
  owner:
  admin: []
```

you can read the [document](https://github.com/gitalk/gitalk)

### About me page

```bash
hexo new page "about"
```

edit `source/about/index.md`

```md
---
title: about
date: 2019-01-30 09:58:54
type: about
author: # your name
avatar: # your avatar, like https://xxxx/xxxx.png
---

your infomation, like

Hello, my name is xxxx, I like

1. xxx
2. xxx
3. xxx
4. and so on
```

### Tags page

```bash
hexo new page "tags"
```

edit `source/tags/index.md`

```md
---
title: tags
date: 2019-01-25 18:40:18
type: tags
---
```

## Create your first post

```bash
hexo new post <title>
```

edit `source/_posts/<title>.md`

```md
---
date: 2018-12-14
title: # post title
description: # your post description
tags: ["Hello", "World"] # post tags, like
cover: # your post cover, like https://xxxx/xxxx.png
---

your post content
```
