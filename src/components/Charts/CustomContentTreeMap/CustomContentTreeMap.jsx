import React from 'react';
import { Treemap, Tooltip } from 'recharts';

const data = [
  {
    name: 'axis',
    children: [
      { name: 'Axes', size: 100 },
      { name: 'Axis', size: 0 },
      { name: 'AxisGridLine', size: 0 },
      { name: 'AxisLabel', size: 0 },
      { name: 'CartesianAxes', size: 0 },
    ],
  },
  {
    name: 'controls',
    children: [
      { name: 'Axes', size: 200 },
      { name: 'Axis', size: 0 },
      { name: 'AxisGridLine', size: 0 },
      { name: 'AxisLabel', size: 0 },
      { name: 'CartesianAxes', size: 0 },
    ],
  },
  {
    name: 'data',
    children: [
      { name: 'Axes', size: 300 },
      { name: 'Axis', size: 0 },
      { name: 'AxisGridLine', size: 0 },
      { name: 'AxisLabel', size: 0 },
      { name: 'CartesianAxes', size: 0 },
    ],
  },
  {
    name: 'events',
    children: [
      { name: 'Axes', size: 400 },
      { name: 'Axis', size: 0 },
      { name: 'AxisGridLine', size: 0 },
      { name: 'AxisLabel', size: 0 },
      { name: 'CartesianAxes', size: 0 },
    ],
  },
];

const COLORS = [
  '#8889DD',
  '#9597E4',
  '#8DC77B',
  '#A5D297',
  '#E2CF45',
  '#F8C12D',
];

const CustomizedContent = (props) => {
  const { root, depth, x, y, width, height, index, colors, name, value } =
    props;
  console.log(value);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill:
            depth < 2
              ? colors[Math.floor((index / root.children.length) * 6)]
              : 'none',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor='middle'
          fill='#fff'
          fontSize={14}
        >
          {name}
        </text>
      ) : null}
      {depth === 1 ? (
        <text x={x + 4} y={y + 18} fill='#fff' fontSize={16} fillOpacity={0.9}>
          {index + 1}
        </text>
      ) : null}
    </g>
  );
};

export default function CustomContentTreeMap() {
  return (
    <Treemap
      width={400}
      height={200}
      data={data}
      dataKey='size'
      stroke='#fff'
      fill='#8884d8'
      content={<CustomizedContent colors={COLORS} />}
    >
      <Tooltip />
    </Treemap>
  );
}
