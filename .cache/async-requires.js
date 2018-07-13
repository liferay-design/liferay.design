// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/liferay/dev/design/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/liferay/dev/design/src/pages/404.js"),
  "component---src-pages-events-index-js": require("gatsby-module-loader?name=component---src-pages-events-index-js!/Users/liferay/dev/design/src/pages/events/index.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/liferay/dev/design/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/liferay/dev/design/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/liferay/dev/design/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/liferay/dev/design/.cache/json/404.json"),
  "events.json": require("gatsby-module-loader?name=path---events!/Users/liferay/dev/design/.cache/json/events.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/liferay/dev/design/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/liferay/dev/design/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/liferay/dev/design/.cache/layouts/index.js")
}