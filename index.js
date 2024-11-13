const randomColor = require('randomcolor');
const createColor = require('my-colors');

const SUPPORTED_HUES = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome'];
const SUPPORTED_LUMINOSITIES = ['bright', 'light', 'dark'];

const hue = process.argv[2];
const luminosity = process.argv[3];

if (hue && !SUPPORTED_HUES.includes(hue)) {
  console.log("Error: Unsupported hue provided.");
  console.log("Supported hues are:", SUPPORTED_HUES.join(', '));
  return;
}

if (luminosity && !SUPPORTED_LUMINOSITIES.includes(luminosity)) {
  console.log("Error: Unsupported luminosity provided.");
  console.log("Supported luminosities are:", SUPPORTED_LUMINOSITIES.join(', '));
  return;
}

const color = randomColor({
  hue: hue || 'random',
  luminosity: luminosity || 'random',
  format: 'hex',
});

const colorScheme = createColor(color, 'bold');
const finalMessage = colorScheme(`##############################
##############################
###########         ##########
########### ${color} ##########
###########         ##########
##############################
##############################`);

console.log(finalMessage);
