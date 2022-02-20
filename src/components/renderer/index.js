import React from 'react';
import './styles.css';
import useWindowState from '../../hooks/useWindowState'

const getCirclePoints = (radius, circle_center_x, circle_center_y, num_points) => {
    return Array.from({length: num_points}, (_, i) => {
        const degree = 2*Math.PI/num_points*i - Math.PI/2;
        return [
            Math.cos(degree)*radius + circle_center_x,
            Math.sin(degree)*radius + circle_center_y
        ];
    });
}

const getCirclePointsSvg = (circle_points) => {
    return circle_points.map(([x, y], i) => {
        return <circle key={i} cx={x} cy={y} r={5} fill="white" />
    });
}

const getLinesSvg = (modulus, multiplier, circle_points, circle_radius, color_loops) => {
    const lines = [];
    for (let i = 0; i < circle_points.length; i++) {
        const [x1, y1] = circle_points[i];
        const [x2, y2] = circle_points[(multiplier*i)%modulus];

        const alpha = 1/modulus*300;

        let color;
        if (color_loops) {
            const line_length = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
            const hue = line_length/(2*circle_radius)*300;
            color = `hsla(${hue}, 100%, 50%, ${alpha})`;;
        } else {
            color = `rgba(255, 255, 255, ${alpha})`;
        }

        lines.push(
            <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={color}
                strokeWidth={1}
            />
        );
    }
    return lines;
}

var Renderer = ({multiplier, modulus, color_loops}) => {
    let { height, width } = useWindowState();
    height = height - 100;
    const circle_radius = width > height ? height/2.5 : width/2.5;
    const circle_center_x = width/2;
    const circle_center_y = height/2;

    const circle_points = getCirclePoints(circle_radius, circle_center_x, circle_center_y, modulus);
    const lines = getLinesSvg(modulus, multiplier, circle_points, circle_radius, color_loops);

    return (
        <svg id="renderer" width={width} height={height}>
            <circle cx={circle_center_x} cy={circle_center_y} r={circle_radius} stroke="white" strokeWidth="2" fill="none" />
            {lines}
        </svg>
    );
};

export default Renderer;
