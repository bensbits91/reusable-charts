import * as React from 'react';
// import createClass from 'react';
import { Treemap, Tooltip } from 'recharts';
import { treemap_custom } from '../sampleData';
import * as colors from '../colors';


const mcc = 'color:lime;';

const COLORS = [colors.navy, colors.mint, colors.green, colors.pink, colors.yellow, colors.orange];


interface CustomizedContentProps {
    colors?: any;
    root?: any;
    depth?: any;
    x?: any;
    y?: any;
    width?: any;
    height?: any;
    index?: any;
    payload?: any;
    rank?: any;
    name?: any;
    value?: any;
    children?: [];
}

class CustomizedContent extends React.Component<CustomizedContentProps> {

    public render() {
        const {
            root, depth, x, y, width, height, index, payload, colors, rank, name, value, children
        } = this.props;


        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    style={{
                        fill: depth < 2 ? colors[index] : 'none',
                        stroke: '#fff',
                        strokeWidth: 2 / (depth + 1e-10),
                        strokeOpacity: 1 / (depth + 1e-10),
                    }}
                />
                {
                    depth === 1 ? (
                        <text
                            x={x + width / 2}
                            y={y + height / 2 + 7}
                            textAnchor='middle'
                            fill='#fff'
                            fontSize={27}
                            fontWeight={100}
                        >
                            {name}
                        </text>
                    ) : null
                }
                {
                    depth === 1 ? (<>
                        <text
                            x={x + 4}
                            y={y + 40}
                            fill='#ddd'
                            fontSize={18}
                            fillOpacity={0.9}
                        >
                            Storage used: {value} GB
                        </text>
                        <text
                            x={x + 4}
                            y={y + 18}
                            fill='#ddd'
                            fontSize={18}
                            fillOpacity={0.9}
                        >
                            Subsites: {children.length}
                        </text>

                    </>) : null
                }
            </g>
        );
    }
}

export default class CustomContentTreemapOne extends React.Component<{}> {
    public render() {
        return (
            <Treemap
                height={700}
                width={1200}
                data={treemap_custom}
                dataKey='size'
                ratio={4 / 3}
                stroke='#fff'
                fill='#8884d8'
                content={<CustomizedContent colors={COLORS} />}
            />
        );
    }
}
