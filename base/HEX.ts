const HEX_VALS: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
const HEX_LEN: number = 6;
const HEX_MAX = 16;

/**
 * Generates a random HEX color string.
 * @returns {string} The randomly generated HEX color string.
 */
export default function getRandomHEXColor(): string {
  let color: string[] = [];

  for (let i = 0; i < HEX_LEN; i++) {
    const index = Math.floor(Math.random() * HEX_MAX);

    if (index > 9) {
      color!.push(HEX_VALS[index - 10]);
    } else color!.push(index.toString());
  }

  return `#${color.join('')}`;
}