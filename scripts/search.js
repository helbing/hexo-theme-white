hexo.extend.generator.register("local-search-json", locals => {
  let dataList = locals.posts.map(post => {
    let data = {
      title: post.title,
      description: post.description,
      cover: post.cover,
      path: post.permalink,
      date: post.date.format(hexo.config.date_format).toUpperCase(),
      tags: []
    };

    post.tags.map(tag => {
      data.tags.push({ name: tag.name, path: tag.permalink });
    });

    return data;
  });

  return {
    path: "local-search.json",
    data: JSON.stringify(dataList)
  };
});
