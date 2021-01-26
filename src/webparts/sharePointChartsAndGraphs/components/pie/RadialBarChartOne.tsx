import * as React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { radial } from '../sampleData';
import * as times from '../times';

const style = {
    top: 20,
    left: 460,
    lineHeight: '24px',
};


export default class RadialBarChartOne extends React.PureComponent {
    render() {
        return (
            <RadialBarChart
                width={600}
                height={500}
                cx={250}
                cy={200}
                innerRadius={20}
                outerRadius={200}
                barSize={20}
                data={radial}
            >
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey='Ratio'
                    animationBegin={times.one}
                />
                <Tooltip />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout='vertical'
                    verticalAlign='middle'
                    wrapperStyle={style}
                />
            </RadialBarChart>
        );
    }
}
