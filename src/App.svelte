<script>
  import Gamepad from "./lib/Gamepad.svelte";
  let mode = "normal";
</script>

<div class="wrap">
  <div class="control">
    <button class="mode-button" on:click={() => (mode = "normal")}
      >Normal</button
    >
    <button class="mode-button" on:click={() => (mode = "challenging")}
      >Challenging</button
    >
    <button class="mode-button" on:click={() => (mode = "hard")}>Hard</button>
  </div>
  <div class="pad">
    {#if mode === "normal"}
      <Gamepad numberOfBox={16} width={"450px"} />
    {:else if mode === "challenging"}
      <Gamepad numberOfBox={30} width={"650px"} />
    {:else if mode === "hard"}
      <Gamepad numberOfBox={42} width={"750px"} />
    {/if}
  </div>
</div>

<style>
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  /* Tab button container style */
  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent; /* Background color of the tab container */
  }

  /* Individual tab button style */
  .mode-button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    border: none;
    border-radius: 2px;
    color: white;
  }

  .mode-button:active {
    background-color: #0f253d;
  }
</style>
