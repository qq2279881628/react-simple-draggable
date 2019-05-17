import React from "react";
import Draggable from "../../lib/draggable.js";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.dir(Draggable);
    return (
      <div className='drag_wrap' style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Draggable
          controled={{
            left: -100,
            // top:100,
            bottom:-100
          }}
        >
          <div className='drag_item' style={{ width: "200px", height: "200px", backgroundColor: "lightblue" }} />
        </Draggable>
      </div>
    );
  }
}
export default App;
