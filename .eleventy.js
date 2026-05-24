module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/_headers");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  eleventyConfig.addFilter("findByFileSlug", function(collection, slug) {
    return collection.find(function(item) {
      return item.fileSlug === slug;
    });
  });

  eleventyConfig.addCollection("home", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/home/*.md").sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/services/*.md").sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/projects/*.md").sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
