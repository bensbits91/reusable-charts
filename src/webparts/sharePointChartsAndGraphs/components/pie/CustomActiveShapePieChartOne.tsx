import * as React from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import { pie_simple_1 } from '../sampleData';
import { navy, mint, yellow, orange } from '../colors';

// const data = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
// ];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy - 5} dy={8} textAnchor='middle' fill={orange}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={mint}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={mint}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={mint} fill='none' />
            <circle cx={ex} cy={ey} r={2} fill={mint} stroke='none' />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`DX ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={orange}>
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


export default class CustomActiveShapePieChartOne extends React.PureComponent {
    state = {
        activeIndex: 0,
    };

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <PieChart width={300} height={300}>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={pie_simple_1}
                    cx='50%'
                    cy='50%'
                    innerRadius={60}
                    outerRadius={80}
                    fill={navy}
                    dataKey='value'
                    onMouseEnter={this.onPieEnter}
                />
            </PieChart>
        );
    }
}
