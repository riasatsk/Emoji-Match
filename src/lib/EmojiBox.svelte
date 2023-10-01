<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
 export let emoji;
 export let hide;
</script>

<div class="emojibox">
  <button class="emoji" on:click={()=>dispatch("click")}
    >{hide ? "" : emoji}</button
  >
</div>

<style>
  .emojibox {
    font-size: 250%;
    width: 100px;
    height: 100px;
    border: 1px solid greenyellow;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .emoji {
    font-size: 125%;
    cursor: pointer;
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
</style>
