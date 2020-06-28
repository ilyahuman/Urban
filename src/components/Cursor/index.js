import React, { Component } from 'react';
import { TweenMax } from "gsap";

let posX = 0,
    posY = 0;

let mouseX = 0,
    mouseY = 0;

export class Cursor extends Component {
    constructor(props){
        super(props);
        this.cursor = null;
        this.follower = null;
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const cursor = this.cursor;
        const follower = this.follower;

        TweenMax.to({}, 0.016, {
            repeat:-1,
            onRepeat:function(){
                posX += (mouseX - posX) / 9;
                posY += (mouseY - posY) / 9;
                TweenMax.set(follower, {
                    css: {
                        left: posX - 12,
                        top: posY - 12
                    }
                });
                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }
        });

        document.addEventListener('mousemove', this.handleChange);
    }

    handleChange(event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    }

    render() {
        return (
            <div>
                <div ref={el => this.cursor = el} className="cursor"></div>
                <div ref={el => this.follower = el} className="cursor-follower"></div>
            </div>
        );
    }
}