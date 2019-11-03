<template>
  <div>
    <header>
      <div class="container">
        <div class="header-left">
          <router-link to="/">
            <h1>愛唄～since 2019～</h1>
          </router-link>
        </div>
        <div class="header-right">
          <ul class="nav">
            <li class="nav-item">
              <a class="social-link" href="https://github.com/cool2645/uta" target="_blank">
                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" style="vertical-align: middle;"><g><path d="m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z"></path></g></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="sidebar">
      <div>
        <!-- search bar -->
      </div>
      <div class="list-wrap">
        <ul>
          <li v-for="post in page.allPosts">
            <a :href="post.permalink">
              <h2 class="title">{{ post.title }}</h2>
              <div>{{ post.artist }} - {{ post.album }}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="page">
      <main>
        <slot name="default" />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: ['page'],
  head () {
    return {
      title: this.page.title
    }
  }
}
</script>

<style lang="stylus">
a
  text-decoration none
*
  box-sizing border-box
body
  margin 0
  border 0
:root
  --border-color: #e2e8f0
  --theme-color: #993350
  --link-color: #af4b67
  --item-hover-background-color: #fadfe746
  --icon-color: #b7b5bd
  --muted-color: #78757a
</style>

<style lang="stylus" scoped>
header
  position fixed
  left 0
  right 0
  top 0
  height 4rem
  border-bottom 1px solid var(--border-color)
  color #000
  a
    color #000
.container
  padding-left 1.5rem
  padding-right 1.5rem
  width 100%
  height 100%
  display flex
  justify-content space-between
  align-items center
  position relative
h1
  font-size 1.4rem
  margin 0
  font-weight 700
.sidebar
  position fixed
  left 0
  top 4rem
  border-right 1px solid var(--border-color)
  width 20rem
  height calc(-4rem + 100vh)
  .list-wrap
    overflow-y auto
    ul
      list-style outside none none
      margin-left 0
      margin-bottom 0
      margin-top 0
      padding-left 0
      li
        padding-left 0
        margin-bottom 0
        a
          border-bottom 0 none
          display block
          font-weight 400
          font-size 0.875rem
          color var(--muted-color)
          position relative
          padding 1.25rem 1.5rem
          transition none 0s ease 0s
          z-index 1
          border-left 4px solid rgba(255, 255, 255, 0)
          .title
            color #000
            font-size 0.875rem
            font-weight 700
            margin-top 0
            margin-bottom 0.75rem
          &:hover, &.active
            background-color var(--item-hover-background-color)
          &.router-link-active
            border-left 4px solid var(--theme-color)
            color var(--link-color)

.page
  padding-top 4rem
  padding-left 20rem
  @media screen and (min-width 990px)
    main
      padding 3rem 1.5rem!important
  main
    max-width 42rem
    margin-left auto
    margin-right auto
    padding 1.5rem
    position relative
    h1
      font-size 1.8rem
      border-bottom 1px solid var(--border-color)
      line-height 1.5
.nav
  list-style none
  margin 0
  font-size 1rem
  height 100%
  padding-left 0
  .nav-item
    .social-link
      color var(--icon-color)
      font-size 1.5em
      &:hover
        color var(--theme-color)
  .nav-item:not(:first-child)
    margin-left 20px
</style>
