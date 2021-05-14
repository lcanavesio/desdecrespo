const path = require('path');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/post/)) {
    page.matchPath = "/post/*"
    createPage(page)
  } else if (page.path.match(/^\/categoria/)) {
    page.matchPath = "/categoria/*"
    createPage(page)
  }
}