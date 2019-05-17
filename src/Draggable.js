import React, { Component } from "react";
import styles from "./Draggable.less";

class Draggable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            movedPosition: props.initPosition
                ? props.initPosition
                : {
                      x: 0,
                      y: 0
                  },
            controled: {
                left: undefined,
                top: undefined,
                bottom: undefined,
                right: undefined
            }
        };
    }
    moving(movedPosition, targetPosition) {
        let {
            controled: { left, top, right, bottom }
        } = this.state;
        let { OnDragging } = this.props;
        // right === 0 ? findDOMNode(this).clientWidth : right
        // bottom === 0 ? findDOMNode(this).clientHeight : bottom
        let _event = window.event;
        let movedX = _event.clientX - targetPosition.x;
        let movedY = _event.clientY - targetPosition.y;
        let x, y;
        //该移动的距离
        let movingX = movedPosition.x + movedX;
        let movingY = movedPosition.y + movedY;
        //元素的宽度
        // const elemWidth = findDOMNode(this).offsetWidth
        if (left <= movingX && movingX < right) {
            // console.log(1)
            x = movingX;
        } else if (movingX < left) {
            // console.log(2)
            x = left;
        } else if (movingX > right) {
            // console.log(3)
            x = right;
        } else if (left === undefined && right === undefined) {
            x = movingX;
        } else {
            // console.log(4)
            x = movingX;
        }

        if (top <= movingY && movingY < bottom) {
            // console.log(1)
            y = movingY;
        } else if (movingY < top) {
            y = top;
            // console.log(2)
        } else if (bottom < movingY) {
            // console.log(3)
            y = bottom;
        } else if (top === undefined && bottom === undefined) {
            y = movingY;
        } else {
            // console.log(4)
            y = movingY;
        }
        if (this.state.start) {
            this.setState({
                movedPosition: {
                    x,
                    y
                }
            });
        }
        OnDragging && OnDragging(this.state.movedPosition);
    }
    stop(middleMoving, middleStop) {
        this.setState({
            start: false
        });
        window.removeEventListener("mousemove", middleMoving, false);
        window.removeEventListener("mouseup", middleStop, false);
    }
    handleMouseDown() {
        let { controled } = this.props;
        let event = window.event;
        //鼠标点击时的position
        let targetPosition = { x: 0, y: 0 };
        targetPosition.x = event.clientX;
        targetPosition.y = event.clientY;
        //启动
        this.setState({
            start: true,
            controled: { ...controled }
        });
        const { movedPosition } = this.state;
        const middleMoving = () => this.moving(movedPosition, targetPosition);
        const middleStop = () => this.stop(middleMoving, middleStop);
        window.addEventListener("mousemove", middleMoving, false);
        window.addEventListener("mouseup", middleStop, false);
    }
    componentDidMount() {
        const { main } = this.refs;
        main.addEventListener(
            "mousedown",
            this.handleMouseDown.bind(this),
            false
        );
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.initPosition !== nextProps.initPosition) {
            this.setState({
                movedPosition: nextProps.initPosition
            });
        }
    }
    render() {
        const { movedPosition } = this.state;
        let style = {
            position: "relative",
            top: movedPosition.y,
            left: movedPosition.x
        };
        const CloneEle = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { movedposition: movedPosition })
        );
        return (
            <div className={styles.main} style={style} ref='main'>
                {CloneEle}
            </div>
        );
    }
}
export default Draggable;
