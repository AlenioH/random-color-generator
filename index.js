let randomColor = require('randomcolor');
let color = randomColor();

let createColor = require('my-colors');

let userColor = process.argv[2];
let toHex = require('colornames');
let userColHex = toHex(userColor);

let luminosity = process.argv[3];

if (userColor && luminosity === '') {
  let colorSchemeUser = createColor(userColor, 'black', 'bold');
  let finalMessageUser = colorSchemeUser(`##############################
  ##############################
  ###########         ##########
  ########### ${userColHex} ##########
  ###########         ##########
  ##############################
  ##############################`);
  console.log(finalMessageUser);
} else if (luminosity) {
  let colorHex = randomColor({
    hue: process.argv[2],
    luminosity: process.argv[3],
  });
  let colorSchemeUserLu = createColor(colorHex, 'black', 'bold');
  let finalMessageUserLu = colorSchemeUserLu(`##############################
  ##############################
  ###########         ##########
  ########### ${userColHex} ##########
  ###########         ##########
  ##############################
  ##############################`);
  console.log(finalMessageUserLu);
} else {
  let colorSchemeRandom = createColor(color, 'black', 'bold');
  let finalMessageRandom = colorSchemeRandom(`##############################
##############################
###########         ##########
########### ${color} ##########
###########         ##########
##############################
##############################`);

  console.log(finalMessageRandom);
}
