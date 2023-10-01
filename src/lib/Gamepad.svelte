<script>
  import EmojiBox from "./EmojiBox.svelte";
  import { generateEmojiArr } from "./randomEmojiArr";
  export let numberOfBox;
  export let width;
  let emojis = generateEmojiArr(numberOfBox);
  const newEmjArr = emojis.map((emj, index) => {
    return {
      id: index,
      emoji: emj,
      show: true,
    };
  });
  let tempArr = [];
  let turn = 0;
  function handleClick(id) {
    newEmjArr[id].show = false;
    tempArr = [...tempArr, newEmjArr[id]];
    turn = turn + 1;
  }
  $: {
    if (turn === 2) {
      turn = 0;
      if (tempArr[0].emoji === tempArr[1].emoji) {
        if (tempArr[0].id === tempArr[1].id) {
          let index1 = newEmjArr.find((emjo) => emjo.id === tempArr[0].id);
          index1.show = true;
          tempArr = [];
        } else {
          tempArr = [];
        }
      } else {
        let index1 = newEmjArr.find((emjo) => emjo.id === tempArr[0].id);
        let index2 = newEmjArr.find((emjo) => emjo.id === tempArr[1].id);
        setTimeout(() => {
          index1.show = true;
          index2.show = true;
        });
        tempArr = [];
      }
    }
  }
</script>

<div class="gamepad" style="width: {width};">
  {#each newEmjArr as emojis, i}
    <EmojiBox
      emoji={emojis.emoji}
      hide={emojis.show}
      on:click={() => handleClick(i)}
    />
  {/each}
</div>

<style>
  .gamepad {
    display: flex;
    flex-wrap: wrap;
  }
</style>
