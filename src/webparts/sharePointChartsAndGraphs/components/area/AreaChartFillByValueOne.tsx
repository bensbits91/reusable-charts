import * as React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { area_pos_neg } from '../sampleData';
import { navy, mint } from '../colors';
import * as times from '../times';

const gradientOffset = () => {
    const dataMax = Math.max(...area_pos_neg.map(i => i['Sales % Change']));
    const dataMin = Math.min(...area_pos_neg.map(i => i['Sales % Change']));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class AreaChartFillByValueOne extends React.PureComponent {
    render() {
        return (
            <AreaChart
                width={500}
                height={400}
                data={area_pos_neg}
            // margin={{ top: 10, right: 30, left: 0, bottom: 0, }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <defs>
                    <linearGradient id='splitColor' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset={off} stopColor={navy} stopOpacity={1} />
                        <stop offset={off} stopColor={mint} stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Area
                    type='monotone'
                    dataKey='Sales % Change'
                    stroke='#000'
                    fill='url(#splitColor)'
                    animationBegin={times.one}
                />
            </AreaChart>
        );
    }
}
