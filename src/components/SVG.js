import React from 'react';

export const SVGTriangle = ({width, height, direction, color}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16">
    <polygon points={ direction === 'right' ? "4,3 13,9 4,14" : "2,4 14,4 9,13"} style={{
      fill: color,
    }} />
  </svg>
)
