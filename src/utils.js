function hexToSegments(numOfSegments, hex) {
  var segments = repeat(numOfSegments, 0)
  return segments.map((_, i) => hex >> i & 1)
}

function rgb(color) {
  return rgba(color, 1)
}

function rgba(color, alpha) {
  var [r, g, b] = color
  return `rgba(${r || 0}, ${g || 0}, ${b || 0}, ${alpha})`
}

function toCharArr(value) {
  return (value.toString() || '').split('')
}

function padArr(ch, n, xs) {
  var max = Math.max(n - xs.length, 0)
  var pad = repeat(max, ch)
  return pad.concat(xs)
}

function repeat(n, val) {
  var xs = new Array(n)
  for (var i=0; i < n; i++) {
    xs[i] = val
  }
  return xs
}

module.exports = {
  hexToSegments,
  padArr,
  repeat,
  rgb,
  rgba,
  toCharArr,
}
