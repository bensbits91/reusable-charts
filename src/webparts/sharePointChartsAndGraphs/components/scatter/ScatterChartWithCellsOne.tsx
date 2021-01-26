import * as React from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic'; //  NEED TO INSTALL THIS ?????????????
import { scatter_basic } from '../sampleData';

const colors = scaleOrdinal(schemeCategory10).range();

export default class ScatterChartWithCellsOne extends React.PureComponent {
    render() {
        return (
            <ScatterChart
                width={400}
                height={400}
                // margin={{ top: 20, right: 20, bottom: 20, left: 20, }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={scatter_basic} fill="#8884d8">
                    {
                        scatter_basic.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
                    }
                </Scatter>
            </ScatterChart>
        );
    }
}
