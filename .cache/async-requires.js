// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/plhnk/Github/liferay.design/src/templates/blog-post.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/plhnk/Github/liferay.design/src/pages/404.js"),
  "component---src-pages-events-index-js": require("gatsby-module-loader?name=component---src-pages-events-index-js!/Users/plhnk/Github/liferay.design/src/pages/events/index.js"),
  "component---src-pages-handbook-index-js": require("gatsby-module-loader?name=component---src-pages-handbook-index-js!/Users/plhnk/Github/liferay.design/src/pages/handbook/index.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/plhnk/Github/liferay.design/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/plhnk/Github/liferay.design/.cache/json/layout-index.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/plhnk/Github/liferay.design/.cache/json/hello-world.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/plhnk/Github/liferay.design/.cache/json/404.json"),
  "events.json": require("gatsby-module-loader?name=path---events!/Users/plhnk/Github/liferay.design/.cache/json/events.json"),
  "handbook.json": require("gatsby-module-loader?name=path---handbook!/Users/plhnk/Github/liferay.design/.cache/json/handbook.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/plhnk/Github/liferay.design/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/plhnk/Github/liferay.design/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/plhnk/Github/liferay.design/.cache/layouts/index.js")
}