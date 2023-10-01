import { randomEmoji } from "./emojis";
import { generateArray } from "./array-generate";
import { shuffleArray } from "./shuffle";
export function generateEmojiArr(a) {
  let emojis = randomEmoji();
  let numberArr = generateArray(a);
  const randomEmojiArrays = [];
  for (let i = 0; i < a; i++) {
    randomEmojiArrays.push(emojis[numberArr[i]]);
  }
  return shuffleArray(randomEmojiArrays);
}
