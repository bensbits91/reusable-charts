import * as React from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
// import { scatter_3d_line1, scatter_3d_line2 } from '../sampleData';
import { scatter_2lines_line1, scatter_2lines_line2 } from '../sampleData';
import { navy, mint } from '../colors';
import * as times from '../times';

export default class ThreeDimScatterChartOne extends React.PureComponent {
    render() {
        return (
            <ScatterChart
                width={250}
                height={250}
            // margin={{ top: 20, right: 20, bottom: 20, left: 20, }}
            >
                <CartesianGrid />
                <XAxis type='number' dataKey='x' name='stature' unit='cm' />
                <YAxis type='number' dataKey='y' name='weight' unit='kg' />
                <ZAxis type='number' dataKey='z' range={[60, 400]} name='score' unit='km' />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter
                    name='London'
                    data={scatter_2lines_line1}
                    fill={navy}
                    /* shape='star' */
                    animationBegin={times.one}
                />
                <Scatter
                    name='Munich'
                    data={scatter_2lines_line2}
                    fill={mint}
                    /* shape='triangle' */
                    animationBegin={times.two}
                />
            </ScatterChart>
        );
    }
}
