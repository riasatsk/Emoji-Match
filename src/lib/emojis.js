import { shuffleArray } from "./shuffle";
export const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🐶",
  "🐱",
  "🦁",
  "🐯",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🦊",
  "🍎",
  "🍇",
  "🍓",
  "🍒",
  "🍌",
  "🍍",
  "🥭",
  "🍋",
  "🍊",
  "🍏",
  "🌻",
  "🌼",
  "🌷",
  "🌹",
  "🌸",
  "💐",
  "🌺",
  "🌾",
  "🍁",
  "🍂",
  "🌲",
  "🌳",
  "🌴",
  "🌵",
  "🏔️",
  "⛰️",
  "🌄",
  "🌅",
  "🏞️",
  "🌆",
  "🚗",
  "🚕",
  "🚆",
  "🚁",
  "🚢",
  "🚲",
  "🛴",
  "🛵",
  "🛺",
  "🚀",
  "🏰",
  "🏯",
  "🏟️",
  "🎡",
  "🎢",
  "🎠",
  "🏖️",
  "⛱️",
  "🏝️",
  "🗽",
  "📱",
  "💻",
  "🖥️",
  "⌚",
  "📷",
  "🎥",
  "📺",
  "🎮",
  "🎲",
  "📚",
  "🍔",
  "🍟",
  "🍕",
  "🍗",
  "🍖",
  "🌭",
  "🍦",
  "🍧",
  "🍰",
  "🎂",
  "🍩",
  "🍪",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍸",
  "🍹",
  "🍺",
];
export function randomEmoji() {
  return shuffleArray(emojis);
}