import * as React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { lines_tiny } from '../sampleData';
import { navy } from '../colors';
import * as times from '../times';

export default class TinyBarChartOne extends React.PureComponent {
    render() {
        return (
            <BarChart width={150} height={40} data={lines_tiny}>
                <Bar
                    dataKey='Sales'
                    fill={navy}
                    animationBegin={times.one}
                />
            </BarChart>
        );
    }
}
