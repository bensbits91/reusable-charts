import * as React from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Legend
} from 'recharts';
import { scatter_basic } from '../sampleData';
import * as times from '../times';

export default class ScatterChartWithLabelsOne extends React.PureComponent {
    render() {
        return (
            <ScatterChart
                width={250}
                height={250}
            // margin={{ top: 20, right: 20, bottom: 20, left: 20, }}
            >
                <XAxis type='number' dataKey='x' name='stature' unit='cm' />
                <YAxis type='number' dataKey='y' name='weight' unit='kg' />
                <Scatter
                    name='London'
                    data={scatter_basic}
                    fill='#eee'
                    animationBegin={times.one}
                >
                    <LabelList dataKey='x' />
                </Scatter>
                <Legend />
            </ScatterChart>
        );
    }
}
