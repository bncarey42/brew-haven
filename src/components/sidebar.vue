<template>
  <nav class="shadow-lg">
    <ul>
      <li v-for="page in pages" :key="page.title" :class="getNavClass(page.title)">
        <a :title="page.title" :href="page.href">
          {{page.title}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    activePage: String
  },
  data: function() {
    return {
      pages: [
        { title: "home", href: "/", icon: "atlas" },
        { title: "landmasses", href: "/landmass", icon: "edit" },
        { title: "towns", href: "/towns", icon: "university" },
        { title: "characters", href: "/characters", icon: "users" },
        { title: "religion", href: "/religion", icon: "praying-hands" },
        { title: "support", href: "/support", icon: "question-circle" }
      ]
    };
  },
  methods: {
    getNavClass: function(pageTitle) {
      return pageTitle === this.activePage
        ? "nav_bar_entry active"
        : "nav_bar_entry";
    }
  }
};
</script>

<style scoped>
  nav {
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    transition: 0.2s;
    background-color: #293858;
    overflow: hidden;
    width: 3rem;
    padding: 0 1rem;
  }

  /*nav:hover {
    width: 145px;
  }*/

  ul {
    list-style-type: none;
    padding-left: 0;
    width: 50px;
    margin-top: 1rem;
  }

  li {
    font-size: 5rem;
    margin-bottom: 1.5rem;
  }

  li:first-child {
    margin-bottom: 3rem;
  }

  li:last-child {
    position: absolute;
    margin-bottom: 1rem;
    bottom: 0;
  }

  .nav_bar_entry:hover {
    background-color: #42b983;
    border-radius: 5px;
    color: white;
  }

  .titles {
    text-decoration: none;
    color: #bebebe;
    position: absolute;
    display: inline;
    /*text-align: left;*/
    /*padding-left: 1.1rem;*/
    text-transform: capitalize;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    color: #bebebe;
    display: block;
  }

  .active a {
    color: #dd5d00;
  }
</style>