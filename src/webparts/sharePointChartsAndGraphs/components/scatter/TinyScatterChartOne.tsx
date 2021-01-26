import * as React from 'react';
import {
    ScatterChart,
    Scatter
} from 'recharts';
import { scatter_2lines_line1, scatter_2lines_line2 } from '../sampleData';
import { navy, mint, yellow } from '../colors';
import * as times from '../times';

class ScatterChartOne extends React.PureComponent {
    public render() {
        return (
            <ScatterChart
                width={400}
                height={200}
            // margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
            >
                <Scatter
                    dataKey='x'
                    name='A school'
                    data={scatter_2lines_line1}
                    fill={navy}
                    animationBegin={times.one}
                />
                <Scatter
                    dataKey='y'
                    name='B school'
                    data={scatter_2lines_line2}
                    fill={yellow}
                    animationBegin={times.two}
                />
                <Scatter
                    dataKey='z'
                    name='C school'
                    data={scatter_2lines_line2}
                    fill={mint}
                    animationBegin={times.three}
                />
            </ScatterChart>
        );
    }
}

export default ScatterChartOne;