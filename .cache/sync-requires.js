// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/plhnk/Github/liferay.design/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/plhnk/Github/liferay.design/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/plhnk/Github/liferay.design/src/pages/404.js")),
  "component---src-pages-events-index-js": preferDefault(require("/Users/plhnk/Github/liferay.design/src/pages/events/index.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/plhnk/Github/liferay.design/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/plhnk/Github/liferay.design/.cache/json/layout-index.json"),
  "hello-world.json": require("/Users/plhnk/Github/liferay.design/.cache/json/hello-world.json"),
  "404.json": require("/Users/plhnk/Github/liferay.design/.cache/json/404.json"),
  "events.json": require("/Users/plhnk/Github/liferay.design/.cache/json/events.json"),
  "index.json": require("/Users/plhnk/Github/liferay.design/.cache/json/index.json"),
  "404-html.json": require("/Users/plhnk/Github/liferay.design/.cache/json/404-html.json")
}