<script>
  import GithubCorner from "$lib/GithubCorner.svelte";
  import { base } from "$app/paths";
</script>

<div style="padding-bottom: vw;">
  <nav>
    <a href="{base}/"><h3 class="home">HOME</h3></a>
    <a href="{base}/about"><h3 class="about">about</h3></a>
  </nav>
  <GithubCorner />
</div>

<style lang="scss">
  div {
    background: #ff3e00;
    width: 97vw;
    border-radius: 1em;
    z-index: 1;
    position: sticky;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    margin-bottom: 0.5em;
    transition: scale, opacity, transform 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.95);
    }

    &.home {
      color: #eee;
      margin-left: 30px;
    }
    &.about {
      color: #ddd;
      margin-right: 40px;
    }
  }
</style>
