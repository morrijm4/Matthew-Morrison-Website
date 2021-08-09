const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-caches-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/matthew/projects/Matthew-Morrison-Website/.cache/caches/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/matthew/projects/Matthew-Morrison-Website/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/matthew/projects/Matthew-Morrison-Website/src/pages/index.js"))),
  "component---src-pages-spotify-rest-api-js": hot(preferDefault(require("/Users/matthew/projects/Matthew-Morrison-Website/src/pages/SpotifyRestApi.js")))
}

