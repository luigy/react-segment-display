React Segment Display
=====================
Render digits calculator style.

Instalation
-----------
```sh
npm install react-segment-display
```

Usage
-----
```jsx
var React = require('react');
var SegmentDisplay = require('react-segment-display');

var Display = React.createClass({
  render: function() {
    return (
      <div>
        <SegmentDisplay
          value={this.props.value}
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

React.render(<Display value={10}/>, document.body);
```
