React Segment Display
=====================
Render digits calculator style.
Uses canvas for rendering.

Instalation
-----------
```sh
npm install react-segment-display
```

Usage
-----
```js
var React = require('react');
var SegmentDisplay = require('react-segment-display);

var Display = React.createClass({
  render: function() {
    return (
      <div>
        <SegmentDisplay
          value={10}
          height={40}
          width={20}
          color={[255, 0, 0]}
          opacity={0.4}
          padding={2}
          bevelWidth={2}
          />
      </div>
    );
  }
});

React.render(<Display />, document.body);
// ...
```
