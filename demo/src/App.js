import React from "react";
import Draggable from "../../lib/draggable.js";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.dir(Draggable);
    return (
      <div className='container' style={{overflow: 'hidden'}}>
          <h4 style={{ textAlign:'center'}}>  left: -100,
                top:-100,
                bottom:0
          </h4>
          <div className='drag_wrap' style={{ height: "33.3333%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid lightblue" }}>
            <Draggable
              controled={{
                left: -100,
                top:-100,
                bottom:0
              }}
            >
              <div className='drag_item' style={{ width: "200px", height: "200px", backgroundColor: "lightblue" }} />
            </Draggable>
          </div>

          <h4 style={{ textAlign:'center'}}>  
                left: 0,
                top: 0,
                bottom: 0,
                right: 0 .
                If you make all parameters of controled zero,it can not be dragging.
          </h4>
          <div className='drag_wrap' style={{ height: "33.3333%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid lightblue" }}>
            <Draggable
              controled={{
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
              }}
            >
              <div className='drag_item' style={{ width: "200px", height: "200px", backgroundColor: "lightblue" }} />
            </Draggable>
          </div>
         
          <h4 style={{ textAlign:'center'}}>  
               If you don`t want to limit a drag area,just make it empty.It would like this:{'<Draggable> XXX </Draggable>'}
          </h4>
          <div className='drag_wrap' style={{ height: "33.3333%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid lightblue" }}>
            <Draggable
              controled={{

              }}
            >
              <div className='drag_item' style={{ width: "200px", height: "200px", backgroundColor: "lightblue" ,margin:"0 3px"}} />
            </Draggable>

            <Draggable
              controled={{}}
            >
              <div className='drag_item' style={{ width: "200px", height: "200px", backgroundColor: "lightblue" ,margin:"0 3px"}} />
            </Draggable>
          </div>
      </div>
    );
  }
}
export default App;
