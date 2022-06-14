import React from 'react';

export function CaretIcon({ fill = '#fff', direction = "down", className }) {
    let rotate;
    if (direction !== "down") {
        switch (direction) {
            case "up":
                rotate = {transform: "rotate(180deg)"};
                break;
            case "left": 
                rotate = {transform: "rotate(90deg)"};
                break;
            case "right": 
                rotate = {transform: "rotate(270deg)"};
                break;
            default:
                console.error("Invalid direction encountered in CaretIcon");
                break;
        }
    }

    return (
        <svg className={className} style={rotate} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.942809" y1="1" x2="8" y2="8.05719" stroke={fill} strokeWidth="1.33333" strokeLinecap="round"/>
            <line x1="8" y1="8.05719" x2="15.0572" y2="1" stroke={fill} strokeWidth="1.33333" strokeLinecap="round"/>
        </svg>
    )
}