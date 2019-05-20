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
### <a href="https://qq2279881628.github.io/react-simple-draggable/demo/public/index.html">See the demo</a>


###Tips
##### If you use it to contain your another component ,you can get a couple of value of position and you can get them by props
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
         <yourComponent></yourComponent>
      </Draggable>
    );
  }
}

import React from "react";
import Draggable from "react-simple-draggable";

class yourComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { x, y } = this.props.movedPosition
    return (
        ...
    );
  }
}
```