import * as React from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';
import { pie_simple_1 } from '../sampleData';
import { navy, mint, yellow, orange } from '../colors';

const COLORS = [navy, mint, yellow, orange];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class PieChartWithCustomizedLabelOne extends React.PureComponent {
    render() {
        return (
            <PieChart width={300} height={300}>
                <Pie
                    data={pie_simple_1}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                >
                    {
                        pie_simple_1.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
        );
    }
}
