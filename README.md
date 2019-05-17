### react-simple-draggable

### Description

##### This is s pure and simple draggable component for react.

### How to use

```js
import React from "react";
import Draggable from "react-simple-draggable";

class XXX extends React.Component {
  render() {
    let controll = {
        left:XXX,
        right:XXX,
        top:XXX,
        buttom:XXX,
    };
    return (
      <Draggable controled={controll}>
        <div></div>
      </Draggable>
    );
  }
}
```