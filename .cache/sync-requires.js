const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/matthew/projects/Matthew-Morrison-Website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/matthew/projects/Matthew-Morrison-Website/src/pages/404.js"))),
  "component---src-pages-color-mode-switcher-js": hot(preferDefault(require("/Users/matthew/projects/Matthew-Morrison-Website/src/pages/ColorModeSwitcher.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/matthew/projects/Matthew-Morrison-Website/src/pages/index.js"))),
  "component---src-pages-spotify-rest-api-js": hot(preferDefault(require("/Users/matthew/projects/Matthew-Morrison-Website/src/pages/SpotifyRestApi.js")))
}

