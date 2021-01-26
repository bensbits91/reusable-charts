import * as React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { temp_by_day } from '../sampleData';
import { navy, mint, orange } from '../colors';

const monthTickFormatter = (tick) => {
    const date = new Date(tick);

    return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
    const isMidMonth = month % 3 === 1;

    if (month % 3 === 1) {
        return <text x={x + offset} y={y - 4} textAnchor='middle'>{`Q${quarterNo}`}</text>;
    }

    const isLast = month === 11;

    if (month % 3 === 0 || isLast) {
        const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

        return <path d={`M${pathX},${y - 4}v${-35}`} stroke={orange} />;
    }
    return null;
};
export default class BarChartWithMultiXAxisOne extends React.PureComponent {
    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={temp_by_day}
                // margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' tickFormatter={monthTickFormatter} />
                <XAxis dataKey='date' axisLine={false} tickLine={false} interval={0} tick={renderQuarterTick} height={1} scale='band' xAxisId='quarter' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='pv' fill={navy} />
                <Bar dataKey='uv' fill={mint} />
            </BarChart>
        );
    }
}
