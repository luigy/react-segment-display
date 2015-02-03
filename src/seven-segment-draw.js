/*
http://www.codeproject.com/Articles/19634/A-Fine-looking-Segmented-LED-Control
*/

// A
function drawA(context, x, y, w, h, sw, si, br) {
  context.beginPath()
  context.moveTo(x + sw * br * 2 + si, y)
  context.lineTo(x + w - sw * br * 2 - si, y)
  context.lineTo(x + w - sw * br - si, y + sw * br)
  context.lineTo(x + w - si - sw, y + sw)
  context.lineTo(x + sw + si, y + sw)
  context.lineTo(x + sw * br + si, y + sw * br)
  context.fill()
}

// B
function drawB(context, x, y, w, h, sw, si, br) {
  context.beginPath()
  context.moveTo(x + w, y + sw * br * 2 + si )
  context.lineTo(x + w, y + h / 2 - sw / 2 - si )
  context.lineTo(x + w - sw / 2, y + h / 2 - si )
  context.lineTo(x + w - sw, y + h / 2 - sw / 2 - si )
  context.lineTo(x + w - sw, y + sw + si )
  context.lineTo(x + w - sw * br, y + sw * br + si )
  context.fill()
}

// C
function drawC(context, x, y, w, h, sw, si, br) {
  context.beginPath()
  context.moveTo(x + w, y + h - sw * br * 2 - si)
  context.lineTo(x + w, y + h / 2 + si + sw / 2)
  context.lineTo(x + w - sw / 2, y + h / 2 + si )
  context.lineTo(x + w - sw, y + h / 2 + sw / 2 + si )
  context.lineTo(x + w - sw, y + h - sw - si )
  context.lineTo(x + w - sw * br, y + h - sw * br - si )
  context.fill()
}

// D
function drawD(context, x, y, w, h, sw, si, br) {
  context.beginPath()
  context.moveTo(x + sw + si, y + h - sw)
  context.lineTo(x + w - sw - si, y + h - sw)
  context.lineTo(x + w - sw * br - si, y + h - sw * br)
  context.lineTo(x + w - sw * br * 2 - si, y + h )
  context.lineTo(x + sw * br * 2 + si, y + h )
  context.lineTo(x + sw * br + si, y + h - sw * br)
  context.fill()
}

// E
function drawE(context, x, y, w, h, sw, si, br) {
  context.beginPath()
  context.moveTo(x, y + h - sw * br * 2 - si)
  context.lineTo(x, y + h / 2 + si + sw / 2)
  context.lineTo(x + sw / 2, y + h / 2 + si)
  context.lineTo(x + sw, y + h / 2 + sw / 2 + si)
  context.lineTo(x + sw, y + h - sw - si)
  context.lineTo(x + sw * br, y + h - sw * br - si)
  context.fill()
}

// F
function drawF(context, x, y, w, h, sw, si, br) {
  context.beginPath()
  context.moveTo(x, y + sw * br * 2 + si )
  context.lineTo(x, y + h / 2 - sw / 2 - si )
  context.lineTo(x + sw / 2, y + h / 2 - si )
  context.lineTo(x + sw, y + h / 2 - sw / 2 - si)
  context.lineTo(x + sw, y + sw + si)
  context.lineTo(x + sw * br, y + sw * br + si)
  context.fill()
}

// G
function drawG(context, x, y, w, h, sw, si, br) {
  context.beginPath()
  context.moveTo(x + sw + si, y + h / 2 - sw / 2)
  context.lineTo(x + w - sw - si, y + h / 2 - sw / 2)
  context.lineTo(x + w - sw / 2 - si, y + h / 2 )
  context.lineTo(x + w - sw - si, y + h / 2 + sw / 2)
  context.lineTo(x + sw + si, y + h / 2 + sw / 2)
  context.lineTo(x + sw / 2 + si, y + h / 2 )
  context.fill()
}

module.exports = {
  drawA,
  drawB,
  drawC,
  drawD,
  drawE,
  drawF,
  drawG,
  drawFns: [drawA, drawB, drawC, drawD, drawE, drawF, drawG],
}
