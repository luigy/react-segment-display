var React = require('react')

var draw = require('./draw')
var { toCharArr } = require('./utils')

var PropTypes = React.PropTypes


var SegmentDisplay = React.createClass({
  propTypes: {
    /**
     * Pixel height for each digit
     */
    height: PropTypes.number,

    /**
     * Pixel width for each digit
     */
    width: PropTypes.number,

    /**
     * 
     *                                         Bevel Width
     *  Segment Width                             +-+
     *  + ........______________________________..... +  ......________
     *  |  \    /                                \ /  |   \  /
     *  |   \ /                                  /    +     \
     *  |    \                                 /   Segment    \
     *  |     \                              /     Interval     \
     *  +      *----------------------------*                    *-----
     *                                     +--------+  
     *                                     Segment Width
     * 
     */
    segmentWidth: PropTypes.number,
    segmentInterval: PropTypes.number,
    bevelWidth: PropTypes.number,

    /**
     * Padding between each digit.
     */
    padding: PropTypes.number,

    color: PropTypes.arrayOf(PropTypes.number),
    value: PropTypes.number,
  },

  getDefaultProps: function()  {
    return {
      width: 25,
      height: 50,
      segmentWidth: 4,
      segmentInterval: 1,
      bevelWidth: 0,
      pad: 0,
      padding: 4,
      opacity: 0.4,
      color: [255, 0, 0],
    }
  },

  render: function() {
    var { width, height, value, pad, color, style } = this.props
    style = style || Styles.SegmentDisplay

    return React.DOM.canvas({
      ref: 'canvas',
      style,
      width: width *  Math.max(this.digitCount(value), pad),
      height,
    })
  },

  drawDigit: function(ctx, opts) {
    var { width, height, pad, value } = opts
    var digitCount = Math.max(this.digitCount(value), pad)
    ctx.clearRect(0, 0, width * digitCount, height)
    draw(ctx, opts, value, pad)
  },

  componentDidMount: function() {
    var context = this.refs.canvas.getDOMNode().getContext('2d')
    this.drawDigit(context, this.props)
  },

  componentDidUpdate: function() {
    var context = this.refs.canvas.getDOMNode().getContext('2d')
    this.drawDigit(context, this.props)
  },

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
  },

  digitCount(value) {
    return toCharArr(value).length
  }
})

var Styles = {
  SegmentDisplay: {
    backgroundColor: 'black'
  }
}

module.exports = SegmentDisplay
