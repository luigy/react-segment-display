var { drawFns } = require('./seven-segment-draw')
var { padArr, toCharArr, hexToSegments, rgba } = require('./utils')

var DONT_CARE_CHAR = '_'
// http://en.wikipedia.org/wiki/Seven-segment_display#Displaying_letters
var HEX_ENCODINGS = {
  '_': 0x00,
  '-': 0x40,
  '0': 0x3F,
  '1': 0x06,
  '2': 0x5B,
  '3': 0x4F,
  '4': 0x66,
  '5': 0x6D,
  '6': 0x7D,
  '7': 0x07,
  '8': 0x7F,
  '9': 0x6F,
}

function draw(context, config, value, pad) {
  var digits = padArr(DONT_CARE_CHAR, pad, toCharArr(value))
  digits.map((d, index) => drawDigit(context, config, d, index))
}

module.exports = draw

function drawDigit(context, config, digit, offset) {
  var { width           : w,
        height          : h,
        segmentWidth    : sw,
        segmentInterval : si,
        bevelWidth      : bw,
        color,
        opacity,
        padding,
      } = config

  var br = bw / sw
  var hex = HEX_ENCODINGS[digit.toString()]
  var segments = hexToSegments(7, hex)

  drawFns.map((f, index) => {
    var alpha = segments[index] ? 1 : opacity
    var x = offset * w + padding / 2
    var y = padding / 2
    var width = w - padding
    var height = h - padding

    context.fillStyle = rgba(color, alpha)
    f(context, x, y, width, height, sw, si, br)
  })
}

