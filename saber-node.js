exports.onCreatePages = function () {
  // Pages are read into the `this.pages` Map
  // Sort posts by createdAt (date) from new to old
  const posts = [...this.pages.values()]
    .filter(page => page.type === 'post' && !page.draft)
    .sort((a, b) => {
      return a.title < b.title ? -1 : 1
    })
  for (const page of this.pages.values()) {
    page.allPosts = posts
  }
}
