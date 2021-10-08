<!-- src/component/PageTransitions.svelte -->
<script>
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{ duration: 500, delay: 0, amount: 0.5 }}
  out:fade={{ duration: 500, delay: 0, amount: 5 }}
>
  <slot />
</div>
