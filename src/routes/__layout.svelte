<script>
  import "../app.scss";
  import Nav from "$lib/Nav.svelte";
  import PageTransitions from "$lib/PageTransitions.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Overpass"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Fira+Mono"
  />
</svelte:head>

<Nav />
<div class="g-app-wrapper">
  <PageTransitions>
    <slot />
  </PageTransitions>
</div>
<Footer />

<style lang="scss">
  .g-app-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
