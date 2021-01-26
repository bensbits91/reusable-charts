import * as React from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';
import { pie_half } from '../sampleData';
import { navy } from '../colors';


export default class HalfPieChartOne extends React.PureComponent {
    render() {
        return (
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={pie_half}
                    cx='50%'
                    cy='50%'
                    outerRadius={80}
                    fill={navy}
                    label
                />
            </PieChart>
        );
    }
}
