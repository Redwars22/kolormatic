const RGB_MAX_RANGE = 255;
const RGB_MAX = 3;

/**
 * Generates a random RGB color string.
 * @returns {string} The randomly generated RGB color string.
 */
export default function getRandomRGBColor(): string {
  let color: string[] = [];

  for (let i = 0; i < RGB_MAX; i++) {
    const num = Math.floor(Math.random() * RGB_MAX_RANGE);
    color!.push(num.toString());
  }

  return `rgb(${color.join()})`;
}