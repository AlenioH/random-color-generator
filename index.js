let randomColor = require('randomcolor');
let createColor = require('my-colors');
let toHex = require('colornames');

let color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

let colorScheme = createColor(color, 'black', 'bold');
let finalMessage = colorScheme(`##############################
##############################
###########         ##########
########### ${color} ##########
###########         ##########
##############################
##############################`);

console.log(finalMessage);
