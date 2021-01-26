import * as React from 'react';
import {
    LineChart, Line, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { bar_brush } from '../sampleData';
import { navy, mint } from '../colors';

export default class BrushLineChartOne extends React.PureComponent {
    render() {
        return (
            <LineChart
                width={500}
                height={300}
                data={bar_brush}
                // margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
                <ReferenceLine y={0} stroke='#000' />
                <Brush dataKey='Store' height={30} stroke={navy} />
                <Line dataKey='Sales' stroke={navy} />
                <Line dataKey='Guests' stroke={mint} />
            </LineChart>
        );
    }
}
