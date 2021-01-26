import * as React from 'react';
import {
    RadialBarChart,
    RadialBar,
    Tooltip,
    Legend
} from 'recharts';
import { radial } from '../sampleData';
import * as times from '../times';


const style = {
    top: 20,
    left: 460,
    lineHeight: '24px',
};

class RadialBlurChartOne extends React.PureComponent {
    public render() {
        return (
            <RadialBarChart
                width={600}
                height={500}
                // innerRadius='10%'
                // outerRadius='80%'
                cx={250}
                cy={200}
                innerRadius={20}
                outerRadius={200}
                barSize={20}
                data={radial}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar
                    minAngle={15}
                    label={{ fill: '#fff', position: 'insideStart' }}
                    background
                    clockWise={true}
                    dataKey='Ratio'
                    animationBegin={times.two}
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout='vertical'
                    verticalAlign='middle'
                    wrapperStyle={style}
                />
                <Tooltip />
            </RadialBarChart>
        );
    }
}

export default RadialBlurChartOne;