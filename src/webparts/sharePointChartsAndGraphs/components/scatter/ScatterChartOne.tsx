import * as React from 'react';
import {
    ScatterChart,
    Scatter,
    CartesianGrid,
    XAxis,
    YAxis,
    ZAxis,
    Tooltip,
    Legend
} from 'recharts';
import { scatter_2lines_line1, scatter_2lines_line2 } from '../sampleData';
import { navy, mint } from '../colors';
import * as times from '../times';


const data01 = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
];
const data02 = [
    { x: 300, y: 300, z: 200 },
    { x: 400, y: 500, z: 260 },
    { x: 200, y: 700, z: 400 },
    { x: 340, y: 350, z: 280 },
    { x: 560, y: 500, z: 500 },
    { x: 230, y: 780, z: 200 },
    { x: 500, y: 400, z: 200 },
    { x: 300, y: 500, z: 260 },
    { x: 240, y: 300, z: 400 },
    { x: 320, y: 550, z: 280 },
    { x: 500, y: 400, z: 500 },
    { x: 420, y: 280, z: 200 },
];

class ScatterChartOne extends React.PureComponent {
    public render() {
        return (
            <ScatterChart
                width={500}
                height={250}
            // margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
            >
                <CartesianGrid
                    strokeDasharray='3 3'
                />
                <XAxis
                    dataKey='x'
                    name='stature'
                    unit='cm'
                />
                <YAxis
                    dataKey='y'
                    name='weight'
                    unit='kg'
                />
                {/* <ZAxis
                    dataKey='z'
                    range={[64, 144]} name='score'
                    unit='km'
                /> */}
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter
                    name='Chatsworth'
                    data={data01}
                    fill={navy}
                    animationBegin={times.one}
                />
                <Scatter name='Kent'
                    data={data02}
                    fill={mint}
                    animationBegin={times.two}
                />
            </ScatterChart>
        );
    }
}

export default ScatterChartOne;